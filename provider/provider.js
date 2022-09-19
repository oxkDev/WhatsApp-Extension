var user = chrome.storage.sync;

var utilities;

class Utility {
    constructor(status, code, utilData) {
        this.status = Boolean(status);
        this.code = code || "testCode";
        this.utilData = utilData || {testData: "no data!"};
    }
};

// oxk Dark
class ColourTheme {
    constructor(theme, background, message, text, main, tran){
        this.theme = theme ? {
            primary: theme.primary || "#083a55",
            secondary: theme.secondary || "#141b20",
            light: theme.light || "#2a7095",
            lighter: theme.lighter || "#298abe",
            danger: theme.danger || "#f14040",
            link: theme.link || theme.light || "#459dd9",
        } : {
            primary: "#083a55",
            secondary: "#141b20",
            light: "#2a7095",
            lighter: "#298abe",
            danger: "#f14040",
            link: "#459dd9",
        };
        this.background = background ? {
            primary: background.primary || "#061527",
            secondary: background.secondary || "#1a232a",
            dark: background.dark || "#071423",
            light: background.light || "#0f1f31",
            darker: background.darker || "#000c1a",
        } : {
            primary: "#061527",
            secondary: "#1a232a",
            dark: "#071423",
            light: "#0f1f31",
            darker: "#000c1a",
        };
        this.message = message ? {
            send: message.send || this.theme.primary,
            receive: message.receive || this.theme.secondary,
            status: message.status || {
                read: "#f2f9ffd4",
                sent: "#ffffff" + "32",
            },
        } : {
            send: this.theme.primary,
            receive: this.background.secondary,
            status: {
                read: "#f2f9ffd4",
                sent: "#ffffff" + "32",
            },
        };
        this.text = text ? {
            header: text.header || this.theme.light,
            primary: text.primary || "#ffffff" + "b3",
            secondary: text.secondary || "#ffffff" + "70",
            tertiary: text.tertiary || "#ffffff" + "47",
            contrast: text.contrast || "#000000" + "70",
        } : {
            header: this.theme.light,
            primary: "#ffffff" + "b3",
            secondary: "#ffffff" + "70",
            tertiary: "#ffffff" + "47",
            contrast: "#000000" + "70",
        };
        this.main = main ? {
            theme: main.theme || "#000000",
            contrast: main.contrast || "#FFFFFF",
            grey: main.grey || "#777777", 
            transparent: main.transparent || "transparent",
        } : {
            theme: "#000000",
            contrast: "#FFFFFF",
            grey: "#777777", 
            transparent: "transparent",
        };
        this.tran = tran ? {
            overlay: tran.overlay || "47",
            overlayHeavy: tran.overlayHeavy || "75",
            overlayLight: tran.overlayLight || "32",
            overlayLighter: tran.overlayLighter || "0f",
            overlayLightest: tran.overlayLightest || "08",
            blur: tran.blur || "b0",
            unBlur: tran.unBlur || "ea",
        } : {
            overlay: "47",
            overlayHeavy: "75",
            overlayLight: "32",
            overlayLighter: "0f",
            overlayLightest: "08",
            blur: "b0",
            unBlur: "ea",
        };
    }
}

// erythrite
const erythriteTheme = new ColourTheme(
    {
        primary: "#ff5b61",
        secondary: "#ffcccb",
        light: "#aa366a",
        lighter: "#f64747",
        danger: "#ff0000",
        link: "#ff0000",
    },
    {
        primary: "#FF8991",
        secondary: "#ffcccb",
        dark: "#f8c8dc",
        light: "#ffb6c1",
        darker: "#f9cddf",
    },
    {
        status: {
            read: "#ff3535",
            sent: "#000000" + "32",
        },
    },
    {
        primary: "#000000" + "b3",
        secondary: "#000000" + "80",
        tertiary: "#000000" + "47",
        contrast: "#FFFFFF" + "70"
    },
    {
        theme: "#FFFFFF",
        contrast: "#000000",
        grey: "#777777",
        transparent: "transparent",
    }
)
const oxkLightTheme = new ColourTheme(
    {
        primary: "#298abe",
        secondary: "#f7f8fa",
        light: "#083a55",
        lighter: "#2a7095",
        danger: "#f14040",
        link: "#459dd9",
    },
    {
        primary: "#e4ebf0",
        secondary: "#edeeef",
        dark: "#e5e5e5",
        light: "#cccccc",
        darker: "#ffffff",
    },
    {
        status: {
            read: "#404f59d4",
            sent: "#ffffff" + "32",
        },
    },
    {
        primary: "#000000" + "b3",
        secondary: "#000000" + "70",
        tertiary: "#000000" + "47",
        contrast: "#ffffff" + "70",
    },
    {
        theme: "#FFFFFF",
        contrast: "#000000",
        grey: "#777777",
        transparent: "transparent",
    }
)

const oxkYellow = new ColourTheme(
    {
        primary: "#84610F",
        secondary: "#232320",
        light: "#967A2B",
        lighter: "#BF902A",
        danger: "#f14040",
    },
    {
        primary: "#201E18",
        secondary: "#251F1B",
        dark: "#1B1916",
        light: "#272215",
        darker: "#161616",
    },
    {
        status: {
            read: "#f2f9ffd4",
            sent: "#ffffff" + "32",
        },
    },
    {},
    {
        theme: "#000000",
        contrast: "#FFFFFF",
        grey: "#777777",
        transparent: "transparent",
    }
)

const oxkRedDark = new ColourTheme(
    {
        primary: "#750D0D",
        secondary: "#201521",
        light: "#942938",
        lighter: "#BF322A",
        danger: "#f14040",
    },
    {
        primary: "#2C1A19",
        secondary: "#161616",
        dark: "#181114",
        light: "#251515",
        darker: "#1A0000",
    },
    {
        status: {
            read: "#f2f9ffd4",
            sent: "#ffffff" + "32",
        },
    },
    {},
    {
        theme: "#000000",
        contrast: "#FFFFFF",
        grey: "#777777",
        transparent: "transparent",
    }
)
const ozkGreenDark = new ColourTheme(
    {
        primary: "#085427",
        secondary: "#15211E",
        light: "#299446",
        lighter: "#2ABF66",
        danger: "#f14040",
    },
    {
        primary: "#062609",
        secondary: "#192929",
        dark: "#072418",
        light: "#0F3015",
        darker: "#001A01",
    },
    {
        status: {
            read: "#f2f9ffd4",
            sent: "#ffffff" + "32",
        },
    },
    {},
    {
        theme: "#000000",
        contrast: "#FFFFFF",
        grey: "#777777",
        transparent: "transparent",
    }
)

const themes = [new ColourTheme(), oxkLightTheme, oxkYellow, erythriteTheme, oxkRedDark, ozkGreenDark];

class Data {
    constructor(linkChanger, spammer, styles) {
        this.linkChanger = linkChanger || new Utility(
            false,
            "linkChanger",
            {ranStr: [
                "@gmail.gov.sg",
                ".gov.sg",
                "@ssts.edu.sg",
                "@rob_e.com",
                "@yahoo.com",
                "@gmail.com",
                "@yahoo.gov.sg",
                ".pp.com",
                "tofy.com",
            ]}
        );
        this.spammer = spammer || new Utility(
            false,
            "spammer",
            {
                count: 10,
                limit: 100,
                delay: 300
            }
        );
        this.styles = styles || new Utility(
            true,
            "styles",
            {
                blurStatus: true,
                backgroundImgStatus: true,
                themeNumber: 0,
                customColours: new ColourTheme(),
                blurValue: {
                    medium: "30px",
                    light: "20px",
                    lighter: "15px",
                    heavy: "45px",
                },
            }
        );
    }
}

const provider = (function() {
    return {
        getData: function(func){
            user.get("utilities", function (result){
                utilities = result.utilities || new Data();
                if (func) func();
                console.log("utilities: ", utilities);
            });
            return utilities;
        },
        
        resetData: function(func){
            utilities = new Data();
            this.setData();
            if (func) func();
        },
        
        setData: function(){
            user.set({"utilities": utilities});
        },
    }
})();

console.log("testttt:", provider.getData());
// init
// provider.getData();
// function init(){
//   // getting local storage data
//   user.get("utilities", function (result) {
//       utilities = result.utilities;
//       console.log(`present?: ${utilities}`);
//       if (!utilities){
//           // user.clear;
//           user.set({"utilities": DefaultData});
//           utilities = DefaultData;
//           console.log(`create: ${utilities}`);
//       }
//       console.log("instalation finished!");
//   });
// }
