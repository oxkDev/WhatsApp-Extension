
class Construct {
    constructor() {
        this.provider;
        this.switches = {};
        this.buttons = {
            reset: document.querySelector("#reset.mainButton"),
            update: document.querySelector("#update.mainButton"),
        };

        const coloursElement = document.createElement("style");
        document.head.appendChild(coloursElement);
        coloursElement.id = "custom-colours";
        
        this.theme = {
            parent: document.querySelector("#theme.selectorWrap"),
            elements: [],
            selection: [new ColourTheme()],
            stylesheet: coloursElement.sheet,
        };

        this.provider = new Provider((data) => this.init(data));
    }

    iterator(data, func = (path, value) => console.log(path, value), path = []) {
        if (typeof(data) == "object") {
            for (const k in data) {
                this.iterator(data[k], func, [...path, k]);
            }
        } else func(path, data);
    }

    async init(refData) {
        // --------------------------------------------------------------------------- set buttons
        this.buttons.reset.addEventListener("click", () => {
            this.provider.resetData(() => {
                this.setColour();
            });
            console.log("resetting");
        });

        this.buttons.update.addEventListener("click", () => window.open("https://github.com/oxkDev/WhatsApp-Extension/releases", "_blank"));

        // --------------------------------------------------------------------------- set switches
        this.iterator(refData, (path, val) => {
            if (typeof(val) == "boolean") {
                let selector = document.querySelector(`#${path.join(" #")}.switch`)
                if (selector) {
                    this.switches[path.join(".")] = selector;
                    
                    selector.addEventListener("click", () => {
                        this.provider.userData.setByPath(path);

                        this.provider.setData();
                    });
                } else console.log("missing switch", selector, `#${path.join(" #")}`);
            }
        });

        this.setSwitchStatus(true);

        // --------------------------------------------------------------------------- add themes
        const rawResource = await fetch("../provider/resources.json").then(r => r.json());
        for (const i in rawResource["themes"]) this.theme.selection.push(new ColourTheme(rawResource["themes"][i]));

        console.log("this.theme.selection: ", rawResource, this.theme.selection)

        for (let i = 0; i < this.theme.selection.length; i++) {
            this.theme.elements[i] = document.createElement("div");
            this.theme.elements[i].classList = "themeButton";
            this.theme.elements[i].style.backgroundColor = this.theme.selection[i].theme.primary;
            this.theme.elements[i].style.opacity = "0";

            this.theme.elements[i].addEventListener("click", () => {
                if (this.provider.userData.theme.theme != i) {
                    this.setColour(i);
                    this.provider.setData();
                    console.log("change theme: ", this.provider.userData.theme.theme);
                }
            });
            this.theme.parent.appendChild(this.theme.elements[i]);
        }

        this.setColour();

        // --------------------------------------------------------------------------- display themes
        let i = 0;
        const interval = setInterval(() => {
            this.theme.elements[i++].style.opacity = "";
            if (i >= this.theme.elements.length) clearInterval(interval);
        }, 50);

        addEventListener("providerUpdate", (e) => {
            console.log(e)
            this.setSwitchStatus();
        });
    }

    setColour(ti = this.provider.userData.theme.theme) {
        console.log("setColour: ", ti)
        this.provider.userData.theme.theme = ti;
        // set theme
        let c = this.theme.selection[ti];
        const rules = [
            `:root {
                --background: ${c.background.primary};
                --translucent: ${c.main.theme}${c.tran.overlay};
                --translucent-light: ${c.main.theme}${c.tran.overlayLight};
                --contrast-translucent: ${c.main.contrast}${c.tran.overlayLight};
                --contrast-translucent-light: ${c.main.contrast}${c.tran.overlayLightest};
                --theme-primary: ${c.theme.light};
                --theme-primary-darker: ${c.theme.primary};
                --theme-secondary: ${c.theme.secondary};
                --text: ${c.text.primary};
            }`
        ];

        for (let i in rules) {
            if (this.theme.stylesheet.cssRules.length) this.theme.stylesheet.deleteRule(0);
            this.theme.stylesheet.insertRule(rules[i], i);
        };

        // set selected
        for (let i = 0; i < this.theme.elements.length; i++) {
            this.theme.elements[i].setAttribute("active", ti == i);
        }
    }

    setSwitchStatus(gradual = false) {

        let setSwitch = (path) => this.switches[path].classList.toggle("enabled", this.provider.userData.getByPath(path.split(".")));

        if (gradual) {
            let i = 0;
            for (const path in this.switches) setTimeout(() => setSwitch(path), i++ * 50);
        } else for (const path in this.switches) setSwitch(path);
    }
}