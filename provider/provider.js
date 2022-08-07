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
// const defaultTheme = {
//     primary: "#ff5b61",
//     secondary: "#ffcccb",
//     light: "#aa366a",
//     lighter: "#f64747",
//     danger: "#ff0000",
//     link: "#ff0000",
// };

// const defaultBackground = {
//     primary: "#FF8991",
//     secondary: "#ffcccb",
//     dark: "#f8c8dc",
//     light: "#ffb6c1",
//     darker: "#f9cddf",
// };

// const defaultMessage = {
//     send: defaultTheme.primary,
//     receive: defaultBackground.secondary,
//     status: {
//         read: "#ff3535",
//         sent: "#000000" + "32",
//     },
// };

// const defaultText = {
//     header: defaultTheme.light,
//     primary: "#000000" + "b3",
//     secondary: "#000000" + "80",
//     tersary: "#000000" + "47",
//     contrast: "#FFFFFF" + "70"
// }

// const whiteBlack = ["#000000", "#FFFFFF"];

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
//     tersary: "#000000" + "47",
//     contrast: "#ffffff" + "70",
// }

// const whiteBlack = ["#000000", "#FFFFFF"];

// oxk Dark
const defaultTheme = {
    primary: "#083a55",
    secondary: "#141b20",
    light: "#2a7095",
    lighter: "#298abe",
    danger: "#f14040",
    link: "#459dd9",
};

const defaultBackground = {
    primary: "#061527",
    secondary: "#1a232a",
    dark: "#071423",
    light: "#0f1f31",
    darker: "#000c1a",
};

const defaultMessage = {
    send: defaultTheme.primary,
    receive: defaultBackground.secondary,
    status: {
        read: "#f2f9ffd4",
        sent: "#ffffff" + "32",
    },
};

const defaultText = {
    header: defaultTheme.light,
    primary: "#ffffff" + "b3",
    secondary: "#ffffff" + "70",
    tersary: "#ffffff" + "47",
    contrast: "#000000" + "70",
}

const whiteBlack = ["#FFFFFF", "#000000"];

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
            theme: defaultTheme,
            background: defaultBackground,
            message: defaultMessage,
            text: defaultText,
            blurValue: {
                medium: "30px",
                light: "20px",
                lighter: "15px",
                heavy: "45px",
            },
            main: {
                white: whiteBlack[0],
                black: whiteBlack[1],
                grey: "#777777",
                transparent: "transparent",
            },
            tran: {
                overlay: "47",
                overlayHeavy: "75",
                overlayLight: "32",
                overlayLighter: "0f",
                blur: "b0",
                unBlur: "ea",
            },
        }
    ),
}

const provider = (function() {
    return {
        getData: function(func){
            user.get("utilities", function (result){
                utilities = result.utilities;
                if (!utilities){
                    resetData(func());
                    console.log("newData");
                } else {
                    if (func) func();
                }
                console.log("utilities: ", utilities);
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
