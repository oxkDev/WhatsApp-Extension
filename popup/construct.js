var colourVariables;

const settings = {
    styles: {
        "blur": document.querySelector("div#blur.switch"),
        "backgroundImg": document.querySelector("div#bgimg.switch"),
    },
}

const buttons = {
    reset: document.querySelector("div#reset.mainButton"),
    update: document.querySelector("div#update.mainButton"),
}
// var themeButton = document.querySelector("div#theme.mainButton");

var themeParent = document.querySelector("div#theme.selectorWrap");

var themeButtons = [];

function displayThemes() {
    for (let i = 0; i < themes.length; i++) {
        setTimeout(() => {
            themeButtons[i].style.opacity = "";
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
    themeNumber = provider.userData.styles.theme;
    var blurValue = provider.userData.styles.blurValue;
    var main = themes[themeNumber].main;
    var theme = themes[themeNumber].theme;
    var tran = themes[themeNumber].tran;
    var msg = themes[themeNumber].message;
    var text = themes[themeNumber].text;
    var background = themes[themeNumber].background;
    
    colourVariables = [
        `:root {
            --background: ${background.primary};
            --translucent: ${main.theme}${tran.overlay};
            --translucent-light: ${main.theme}${tran.overlayLight};
            --contrast-translucent: ${main.contrast}${tran.overlayLight};
            --contrast-translucent-light: ${main.contrast}${tran.overlayLighter};
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
    settings.styles["blur"].classList.toggle("enabled", provider.userData.styles.blur);
    settings.styles["backgroundImg"].classList.toggle("enabled", provider.userData.styles.backgroundImg);
    // }, 100);
}