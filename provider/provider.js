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
        this.theme = theme || {
            primary: "#083a55",
            secondary: "#141b20",
            light: "#2a7095",
            lighter: "#298abe",
            danger: "#f14040",
            link: "#459dd9",
        };
        this.background = background || {
            primary: "#061527",
            secondary: "#1a232a",
            dark: "#071423",
            light: "#0f1f31",
            darker: "#000c1a",
        };
        this.message = message || {
            send: this.theme.primary,
            receive: this.background.secondary,
            status: {
                read: "#f2f9ffd4",
                sent: "#ffffff" + "32",
            },
        };
        this.text = text || {
            header: this.theme.light,
            primary: "#ffffff" + "b3",
            secondary: "#ffffff" + "70",
            tertiary: "#ffffff" + "47",
            contrast: "#000000" + "70",
        };
        this.main = main || {
            theme: "#000000",
            contrast: "#FFFFFF",
            grey: "#777777", 
            transparent: "transparent",
        };
        this.tran = tran || {
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
    theme = {
        primary: "#ff5b61",
        secondary: "#ffcccb",
        light: "#aa366a",
        lighter: "#f64747",
        danger: "#ff0000",
        link: "#ff0000",
    },
    background = {
        primary: "#FF8991",
        secondary: "#ffcccb",
        dark: "#f8c8dc",
        light: "#ffb6c1",
        darker: "#f9cddf",
    },
    {
        send: theme.primary,
        receive: background.secondary,
        status: {
            read: "#ff3535",
            sent: "#000000" + "32",
        },
    },
    {
        header: theme.light,
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
// // oxk Light
// const defaultTheme = {
//     primary: "#083a55",
//     secondary: "#141b20",
//     light: "#2a7095",
//     lighter: "#298abe",
//     danger: "#f14040",
//     link: "#459dd9",
// };

// const defaultBackground = {
//     primary: "#061527",
//     secondary: "#1a232a",
//     dark: "#071423",
//     light: "#0f1f31",
//     darker: "#000c1a",
// };

// const defaultMessage = {
//     send: defaultTheme.primary,
//     receive: defaultBackground.secondary,
//     status: {
//         read: "#f2f9ffd4",
//         sent: "#ffffff" + "32",
//     },
// };

// const defaultText = {
//     header: defaultTheme.light,
//     primary: "#000000" + "b3",
//     secondary: "#000000" + "70",
//     tertiary: "#000000" + "47",
//     contrast: "#ffffff" + "70",
// }

// const main = {"#000000", "#FFFFFF"};
const themes = [new ColourTheme(), erythriteTheme];

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
