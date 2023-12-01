const extensionVersion = "0.2.4";

// oxk Dark
class ColourTheme {
    constructor({
        isDark = true,
        theme = {
            primary: "#083a55",
            secondary: "#141b20",
            light: "#2a7095",
            lighter: "#298abe",
            danger: "#f14040",
            link: "#459dd9",
        }, 
        background = {
            primary: "#061527",
            secondary: "#1a232a",
            dark: "#071423",
            light: "#0f1f31",
            darker: "#000c1a",
        }, 
        message = {
            send: theme.primary,
            receive: background.secondary,
            statusRead: "#f2f9ffd4",
            statusSent: "#ffffff" + "32",
        }, 
        text = {
            header: theme.light,
            primary: "#ffffff" + "b3",
            secondary: "#ffffff" + "70",
            tertiary: "#ffffff" + "47",
            contrast: "#000000" + "70",
        }, 
        main = {
            theme: "#000000",
            contrast: "#FFFFFF",
            grey: "#777777", 
            transparent: "transparent",
        }, 
        tran = {
            overlay: "47",
            overlayHeavy: "75",
            overlayLight: "32",
            overlayLighter: "0f",
            overlayLightest: "08",
            blur: "b0",
            unBlur: "ea",
        }
    } = {}) {
        this.isDark = Boolean(isDark);
        this.theme = {
            primary: theme.primary || "#083a55",
            secondary: theme.secondary || "#141b20",
            light: theme.light || "#2a7095",
            lighter: theme.lighter || "#298abe",
            danger: theme.danger || "#f14040",
            link: theme.link || theme.light || "#459dd9",
        };
        this.background = {
            primary: background.primary || "#061527",
            secondary: background.secondary || "#1a232a",
            dark: background.dark || "#071423",
            light: background.light || "#0f1f31",
            darker: background.darker || "#000c1a",
        };
        this.message = {
            send: message.send || this.theme.primary,
            receive: message.receive || this.theme.secondary,
            statusRead: message.statusRead || "#f2f9ffd4",
            statusSent: message.statusSent || "#ffffff" + "32",
        };
        this.text = {
            header: text.header || this.theme.light,
            primary: text.primary || "#ffffff" + "b3",
            secondary: text.secondary || "#ffffff" + "70",
            tertiary: text.tertiary || "#ffffff" + "47",
            contrast: text.contrast || "#000000" + "70",
        };
        this.main = {
            theme: main.theme || "#000000",
            contrast: main.contrast || "#FFFFFF",
            grey: main.grey || "#777777", 
            transparent: main.transparent || "transparent",
        };
        this.tran = {
            overlay: tran.overlay || "47",
            overlayHeavy: tran.overlayHeavy || "75",
            overlayLight: tran.overlayLight || "32",
            overlayLighter: tran.overlayLighter || "0f",
            overlayLightest: tran.overlayLightest || "08",
            blur: tran.blur || "b0",
            unBlur: tran.unBlur || "ea",
        };
    }
}

const themeSelection = [new ColourTheme()];

class UserData {
    constructor(version) {
        this.needSet = false;

        this.version = version;
        this.allDefaults;

        this.default = {
            appearance: {
                styles: true,
                blur: true,
                backgroundImg: true,
                blurValue: {
                    medium: "30px",
                    light: "20px",
                    lighter: "15px",
                    heavy: "45px",
                },
            },

            theme: {
                status: true,
                theme: 0,
            },

            textbox: {
                commands: true,
            }
        }

        this.appearance = this.default.appearance;
        this.theme = this.default.theme
        this.textbox = this.default.text;
    }

    async init(data) {
        this.allDefaults = await fetch(chrome.runtime.getURL("provider/versions.json")).then(r => r.json());
        
        console.log(this.allDefaults);
        if (data) this.update(data);
    }

    getDefault(version = this.version) {
        function iterator(obj) {

            if (Array.isArray(obj)) return obj[1];
            
            if (typeof(obj) == "object") {
                let subObj = {};
                for (const k in obj) subObj[k] = iterator(obj[k]);
                
                return subObj;
            }
            
            return obj;
        }
        
        return version == this.version ? this.default : iterator(this.allDefaults[version]);
    }

    update(data) {
        let iterator = (def, value) => {
            if (value == undefined) {
                this.needSet = true;
                console.log("missing parameter: ", def, value);
                return def
            }
    
            if (typeof(def) == "object") {
                let obj = {};
                for (const k in def) {
                    obj[k] = iterator(def[k], value[k]);
                } 
                return obj;
            }
    
            return value
        }
        
        this.needSet = false;
        if (!data) {
            console.log("no data:", data);
            data = this.default;
            this.needSet = true;
        }

        for (const t in this.default) {
            this[t] = iterator(this.default[t], data[t]);
        }

        return this.needSet;
    }

    getByPath(path = []) {
        return path.reduce((v, p) => v[p], this.get());
    }

    setByPath(path = [], value) {
        let data = this;
        let i;
        for (i = 0; i < path.length - 1; i++) data = data[path[i]];

        if (!value && typeof(data[path[i]]) == "boolean") data[path[i]] = !data[path[i]];
        else data[path[i]] = value;
    }

    get(name, version = this.version) {
        const obj = {}
        for (const t in this.default) {
            obj[t] = this[t];
        }
        
        if (name) {
            const returnObj = {}
            returnObj[name] = {...obj};
            returnObj["version"] = version;
            return returnObj;
        }

        return obj;
    }
}

class Provider {
    constructor(load = function(data) {console.log("Loaded data: load unset")}, dataChange = true, initialise = true, version = extensionVersion) {
        this.name = "whatsapp-extension";
        this.version = version;
        this.userData = new UserData(this.version);

        this.userStorage = chrome.storage;
        this.dataChange = dataChange;

        if (initialise) this.init(load);
    }
    
    async init(handler) {
        await this.userData.init();
        this.getData(handler);

        this.userStorage.sync.onChanged.addListener((e) => {
            if (this.dataChange) this.getData(() => {console.log("providerUpdate: ", e); dispatchEvent(new CustomEvent("providerUpdate", {detail: {e: e}}))});
            else console.log("Data changed: dataChange set to false");
        });
    }

    async getData(handler = data => {}) {
        let result = await this.userStorage.sync.get(this.name)
        let resUserData = result[this.name];

        if (this.userData.update(resUserData)) this.setData();
        console.log("getData: ", resUserData, this.userData);
        
        if (handler && typeof(handler) == 'function') handler(this.userData.get());

        return this.userData.get();
    }
    
    resetData(handler = () => {}) {
        this.userData.update();
        console.log("resetData: ", this.userData)
        this.setData();
        if (handler && typeof(handler) == 'function') handler();
    }
    
    setData(data = this.userData.get(this.name)) {
        console.log("setData: ", data)
        this.userStorage.sync.set(data);
    }
};