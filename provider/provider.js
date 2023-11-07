const extensionName = "whatsapp-extension";

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
    }) {
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

// // erythrite
// const erythriteTheme = new ColourTheme({
//     isDark: false,
//     theme: {
//         primary: "#ff5b61",
//         secondary: "#ffcccb",
//         light: "#aa366a",
//         lighter: "#f64747",
//         danger: "#ff0000",
//         link: "#ff0000",
//     },
//     background: {
//         primary: "#FF8991",
//         secondary: "#ffcccb",
//         dark: "#f8c8dc",
//         light: "#ffb6c1",
//         darker: "#f9cddf",
//     },
//     message: {
//         statusRead: "#ff3535",
//         statusSent: "#000000" + "32",
//     },
//     text: {
//         primary: "#000000" + "b3",
//         secondary: "#000000" + "80",
//         tertiary: "#000000" + "47",
//         contrast: "#FFFFFF" + "70"
//     },
//     main: {
//         theme: "#FFFFFF",
//         contrast: "#000000",
//         grey: "#777777",
//         transparent: "transparent",
//     }
// })

// const oxkLightTheme = new ColourTheme({
//     isDark: false,
//     theme: {
//         primary: "#298abe",
//         secondary: "#f7f8fa",
//         light: "#083a55",
//         lighter: "#2a7095",
//         danger: "#f14040",
//         link: "#459dd9",
//     },
//     background: {
//         primary: "#e4ebf0",
//         secondary: "#edeeef",
//         dark: "#e5e5e5",
//         light: "#cccccc",
//         darker: "#ffffff",
//     },
//     message: {
//         statusRead: "#ffffff" + "32",
//         statusSent: "#404f59",
//     },
//     text: {
//         primary: "#000000" + "b3",
//         secondary: "#000000" + "70",
//         tertiary: "#000000" + "47",
//         contrast: "#ffffff" + "70",
//     },
//     main: {
//         theme: "#FFFFFF",
//         contrast: "#000000",
//         grey: "#777777",
//         transparent: "transparent",
//     }
// })

// const oxkYellow = new ColourTheme({
//     isDark: true,
//     theme: {
//         primary: "#84610F",
//         secondary: "#232320",
//         light: "#967A2B",
//         lighter: "#BF902A",
//         danger: "#f14040",
//     },
//     background: {
//         primary: "#201E18",
//         secondary: "#251F1B",
//         dark: "#1B1916",
//         light: "#272215",
//         darker: "#161616",
//     },
//     message: {
//         statusRead: "#f2f9ffd4",
//         statusSent: "#ffffff" + "32",
//     },
//     main: {
//         theme: "#000000",
//         contrast: "#FFFFFF",
//         grey: "#777777",
//         transparent: "transparent",
//     }
// })

// const oxkRedDark = new ColourTheme({
//     isDark: true,
//     theme: {
//         primary: "#750D0D",
//         secondary: "#201521",
//         light: "#942938",
//         lighter: "#BF322A",
//         danger: "#f14040",
//     },
//     background: {
//         primary: "#2C1A19",
//         secondary: "#161616",
//         dark: "#181114",
//         light: "#251515",
//         darker: "#1A0000",
//     },
//     message: {
//         statusRead: "#f2f9ffd4",
//         statusSent: "#ffffff" + "32",
//     },
//     main: {
//         theme: "#000000",
//         contrast: "#FFFFFF",
//         grey: "#777777",
//         transparent: "transparent",
//     }
// })

// const ozkGreenDark = new ColourTheme({
//     isDark: true,
//     theme: {
//         primary: "#085427",
//         secondary: "#15211E",
//         light: "#299446",
//         lighter: "#2ABF66",
//         danger: "#f14040",
//     },
//     background: {
//         primary: "#062609",
//         secondary: "#192929",
//         dark: "#072418",
//         light: "#0F3015",
//         darker: "#001A01",
//     },
//     message: {
//         statusRead: "#f2f9ffd4",
//         statusSent: "#ffffff" + "32",
//     },
//     main: {
//         theme: "#000000",
//         contrast: "#FFFFFF",
//         grey: "#777777",
//         transparent: "transparent",
//     }
// })

// const transparent = new ColourTheme({
//     isDark: true,
//     theme: {
//         primary: "transparent",
//         secondary: "transparent",
//         light: "transparent",
//         lighter: "transparent",
//         danger: "transparent",
//     },
//     background: {
//         primary: "transparent",
//         secondary: "transparent",
//         dark: "transparent",
//         light: "transparent",
//         darker: "transparent",
//     },
//     message: {
//         statusRead: "transparent",
//         statusSent: "transparent",
//     },
//     text: {
//         theme: "transparent",
//         contrast: "transparent",
//         grey: "transparent",
//         transparent: "transparent",
//     },
// });

// const themeSelection = [new ColourTheme({}), oxkLightTheme, oxkYellow, erythriteTheme, oxkRedDark, ozkGreenDark, transparent];

const themeSelection = [new ColourTheme({})];

class Utility {
    constructor(status, code, utilData) {
        this.status = Boolean(status);
        this.code = code || "testCode";
        this.utilData = utilData || {testData: "no data!"};
    }
};

class UserData {
    constructor(data) {
        this.needSet = false;

        this.appearance;
        this.textbox;

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
                bold: true,
                italic: true,
                monospace: true,
                quote: true,
            }
        }

        if (data) this.update(data);
    }

    iterate(def, value) {
        if (value == undefined) {
            this.needSet = true;
            console.log("missing parameter: ", def, value);
            return def
        }

        if (typeof(def) == "object") {
            let obj = {};
            for (const k in def) {
                obj[k] = this.iterate(def[k], value[k]);
            } 
            return obj;
        }

        return value
    }

    update(data) {
        this.needSet = false;
        if (!data) {
            console.log("no data:", data);
            data = this.default;
            this.needSet = true;
        }

        for (const t in this.default) {
            this[t] = this.iterate(this.default[t], data[t]);
        }

        return this.needSet;
    }

    get(name) {
        let obj = {}
        for (const t in this.default) {
            obj[t] = this[t];
        }
        
        if (name) obj[name] = obj;
        
        return obj
    }
}


class Provider {
    constructor(name, load = function() {console.log("Loaded data: load unset")}, dataChange = true) {
        this.userData = new UserData(false);
        this.name = name;

        this.userStorage = chrome.storage;
        this.dataChange = dataChange

        this.getData(load);
        this.userStorage.sync.onChanged.addListener(() => {
            if (this.dataChange) this.getData(() => {console.log("providerUpdate: ", this.userData); dispatchEvent(new Event("providerUpdate"))});
            else console.log("Data changed: dataChange set to false");
        });
    }

    getData(func) {
        this.userStorage.sync.get(this.name, result => {
            console.log(`${this.name}: `, result);
            let resUserData = result[this.name];

            if (this.userData.update(resUserData)) this.setData();
            console.log("userData: ", resUserData, this.userData);
            
            if (func && typeof(func) == 'function') func();
        });
        return this.userData;
    }
    
    resetData(func) {
        this.userData.update();
        console.log("resetData: ", this.userData)
        this.setData();
        if (func && typeof(func) == 'function') func();
    }
    
    setData() {
        console.log("setData: ", this.userData)
        this.userStorage.sync.set(this.userData.get(this.name));
    }
};