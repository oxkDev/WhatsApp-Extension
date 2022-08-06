var user = chrome.storage.sync;

var utilities;

class Utility {
    constructor(status, code, utilData) {
        this.status = status;
        this.code = code;
        this.utilData = utilData;
    }
};

// // erythrite
// const theme = {
//     primary: "#ff5b61",
//     secondary: "#ffcccb",
//     light: "#aa366a",
//     lighter: "#8b0000",
//     danger: "#ff0000",
//     link: "#ff0000",
// };

// const background = {
//     primary: "#FF8991",
//     secondary: "#ffcccb",
//     dark: "#f8c8dc",
//     light: "#ffb6c1",
//     darker: "#f9cddf",
// };

// const message = {
//     send: theme.primary,
//     receive: background.secondary,
//     status: {
//         read: "#FFB6C1",
//         sent: "#000000" + "32",
//     },
// };

// const text = {
//     primary: "#000000" + "b3",
//     secondary: "#000000" + "ee"
// }

// // oxk Light
// const theme = {
//     primary: "#478db3",
//     secondary: "#ffffff",
//     light: "#298abe",
//     lighter: "#64c9ff",
//     danger: "#f14040",
//     link: "#459dd9",
// };

// const background = {
//     primary: "#5a5e62",
//     secondary: "#d9e4ed",
//     dark: "#e0e4e9",
//     light: "#0f1f31",
//     darker: "#ffffff",
// };

// const message = {
//     send: theme.primary,
//     receive: background.secondary,
//     status: {
//         read: "#f2f9ffd4",
//         sent: "#ffffff" + "32",
//     },
// };

// const text = {
//     header: theme.light,
//     primary: "#000000" + "b3",
//     secondary: "#000000" + "70",
//     tersary: "#000000" + "47"
// }

// oxk Dark
const theme = {
    primary: "#083a55",
    secondary: "#141b20",
    light: "#2a7095",
    lighter: "#298abe",
    danger: "#f14040",
    link: "#459dd9",
};

const background = {
    primary: "#061527",
    secondary: "#1a232a",
    dark: "#071423",
    light: "#0f1f31",
    darker: "#000c1a",
};

const message = {
    send: theme.primary,
    receive: background.secondary,
    status: {
        read: "#f2f9ffd4",
        sent: "#ffffff" + "32",
    },
};

const text = {
    primary: "#ffffff" + "b3",
    secondary: "#ffffff" + "70",
    tersary: "#ffffff" + "47"
}

const DefaultData = {
    linkChanger: new Utility(
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
    ),
    spammer: new Utility(
        false,
        "spammer",
        {
            count: 10,
            limit: 100,
            delay: 300
        }
    ),
    styles: new Utility(
        true,
        "styles",
        {
            blurStatus: true,
            backgroundImgStatus: true,
            theme: theme,
            background: background,
            message: message,
            text: text,
            blurValue: {
                medium: "30px",
                light: "20px",
                lighter: "15px",
                heavy: "45px",
            },
            main: {
                white: "#000000",
                black: "#ffffff",
                grey: "#777777",
                transparent: "transparent",
            },
            tran: {
                overlay: "47",
                overlayHeavy: "75",
                overlayLight: "32",
                overlayLighter: "0f",
                blur: "b3",
                unBlur: "e3",
            },
        }
    ),
};

const provider = (function() {
    return {
        getData: function(func){
            user.get("utilities", function (result){
                utilities = result.utilities;
                if (!utilities){
                    resetData();
                    console.log("newData");
                }
                console.log("utilities: ", utilities);
                if (func) func();
            });
            return utilities;
        },
        
        resetData: function(func){
            utilities = Object.assign(DefaultData);
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
