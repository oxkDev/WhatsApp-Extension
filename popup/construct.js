var colourVariables;

const settings = {
    appearance: {
        "styles": document.querySelector("#styles.switch"),
        "blur": document.querySelector("#blur.switch"),
        "backgroundImg": document.querySelector("#bgimg.switch"),
    },
    theme: {   
        "status": document.querySelector("#themeStatus.switch"),
    }
}

const buttons = {
    reset: document.querySelector("#reset.mainButton"),
    update: document.querySelector("#update.mainButton"),
}
// var themeButton = document.querySelector("#theme.mainButton");

const theme = {
    parent: document.querySelector("#theme.selectorWrap"),
    selection: [],
}

function displayThemeSelection() {
    for (let i = 0; i < themeSelection.length; i++) {
        setTimeout(() => {
            theme.selection[i].style.opacity = "";
        }, i * 20);
    }
} 

var customColoursElement = document.createElement("style");
document.head.appendChild(customColoursElement);
customColoursElement.id = "custom-colours";
var customColours = customColoursElement.sheet;

function setColours() {
    for (i in colourVariables) {
        console.log("deleting:", i)
        customColours.deleteRule(0)
    }
    themeNumber = provider.userData.theme.theme;
    var blurValue = provider.userData.appearance.blurValue;
    var main = themeSelection[themeNumber].main;
    var theme = themeSelection[themeNumber].theme;
    var tran = themeSelection[themeNumber].tran;
    var msg = themeSelection[themeNumber].message;
    var text = themeSelection[themeNumber].text;
    var background = themeSelection[themeNumber].background;
    
    colourVariables = [
        `:root {
            --background: ${background.primary};
            --translucent: ${main.theme}${tran.overlay};
            --translucent-light: ${main.theme}${tran.overlayLight};
            --contrast-translucent: ${main.contrast}${tran.overlayLighter};
            --contrast-translucent-light: ${main.contrast}${tran.overlayLightest};
            --theme-primary: ${theme.light};
            --theme-primary-darker: ${theme.primary};
            --theme-secondary: ${theme.secondary};
            --text: ${text.primary};
        }`
    ];
    for (i in colourVariables) {
        customColours.insertRule(colourVariables[i], i);
    };
}
console.log("setColours():", customColours);

function setSwitchStatus() {
    console.log(`setSwitchStatus():`, provider.userData);
    // setTimeout(() => {
    for (const i in settings.appearance) {
        settings.appearance[i].classList.toggle("enabled", provider.userData.appearance[i]);
    }

    for (const i in settings.theme) {
        settings.theme[i].classList.toggle("enabled", provider.userData.theme[i]);
    }
    // settings.appearance["backgroundImg"].classList.toggle("enabled", provider.userData.appearance.backgroundImg);
    // }, 100);
}