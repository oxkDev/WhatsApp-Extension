Document.prototype.newElement = function(tag, classes, id, textContent) {
    var element = this.createElement(tag);
    if (classes) element.className = classes;
    if (id) element.id = id;
    if (textContent) element.textContent = textContent;
    return element;
}

Array.prototype.forEachDelay = function(delay, func) {
    arr = this;
    (function myLoop(i) {
        setTimeout(function() {
            func(arr[arr.length - i]);
            if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
        }, delay);
    })(arr.length);
}

var resetButton = document.newElement("div", "button", "reset", "reset settings");

const settings = {
    styles: {
        "Blur": newSwitch(),
        "Background Image": newSwitch(),
    },
    others: {
        "Link Changer": newSwitch(),
        "Spammer": newSwitch(),
    },
}


Object.keys(settings).forEach(grpKey => {
    var group = document.newElement("div", "group");
    document.body.appendChild(group);
    group.textContent = grpKey;
    Object.keys(settings[grpKey]).forEach(elmKey => {
        var field = document.newElement("div", "field");
        field.textContent = elmKey;
        console.log("elmKey");
        group.appendChild(field);
        field.appendChild(settings[grpKey][elmKey]);
    });
});

document.body.appendChild(resetButton);

function newSwitch(){
    var element = document.newElement("div", "switch");
    element.appendChild(document.newElement("div", "knob"));
    return element;
}

var user = chrome.storage.sync;

var utilities;

class Utility {
    constructor(status, code, utilData) {
        this.status = status;
        this.code = code;
        this.utilData = utilData;
    }
}

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


function setSwitchStatus(){
    console.log(`setSwitchStatus():`, utilities);
    console.log(`setSwitchStatus test:`, utilities.linkChanger.status, utilities.spammer.status, utilities.spammer.utilData.count);
    // deciding link switch statuwaits
    settings.others["Link Changer"].classList.toggle("enabled", utilities.linkChanger.status);
    // deciding spam switch status
    settings.others["Spammer"].classList.toggle("enabled", utilities.spammer.status);
    settings.styles["Blur"].classList.toggle("enabled", utilities.styles.utilData.blurStatus);
    settings.styles["Background Image"].classList.toggle("enabled", utilities.styles.utilData.backgroundImgStatus);
}

function initialiseAll(){
    // getting local storage data
    provider.getData(setSwitchStatus);
}

function eventListeners(){
    settings.others["Link Changer"].addEventListener("click", function(event){
            utilities.linkChanger.status = !utilities.linkChanger.status;
            setSwitchStatus();
            provider.setData();
    });

    settings.others["Spammer"].addEventListener("click", function(event){
            utilities.spammer.status = !utilities.spammer.status;
            setSwitchStatus();
            provider.setData();
    });

    settings.styles["Blur"].addEventListener("click", function(event){
            utilities.styles.utilData.blurStatus = !utilities.styles.utilData.blurStatus;
            setSwitchStatus();
            provider.setData();
    });
    settings.styles["Background Image"].addEventListener("click", function(event){
            utilities.styles.utilData.backgroundImgStatus = !utilities.styles.utilData.backgroundImgStatus;
            setSwitchStatus();
            provider.setData();
    });
    resetButton.addEventListener("click", function(event){
        provider.resetData(setSwitchStatus);
        console.log("resetting", DefaultData);
        // initialiseAll();
    });
}
// user.clear();
initialiseAll();
eventListeners();