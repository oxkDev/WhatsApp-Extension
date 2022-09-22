Document.prototype.newElement = function(tag, classes, id, textContent) {
    var element = this.createElement(tag);
    if (classes) element.className = classes;
    if (id) element.id = id;
    if (textContent) element.textContent = textContent;
    return element;
}

CSSStyleSheet.prototype.deleteRules = function(){
    console.log(this, this.cssRules);
    for (i = 0; i < this.cssRules.length; i++) {
        console.log(this.cssRules);
        this.deleteRule(0);
    };
}

// Array.prototype.forEachDelay = function(delay, func) {
//     arr = this;
//     (function myLoop(i) {
//         setTimeout(function() {
//             func(arr[arr.length - i]);
//             if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
//         }, delay);
//     })(arr.length);
// }

const settings = {
    styles: {
        "Blur": newSwitch(),
        "Background Image": newSwitch(),
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


var resetButton = document.newElement("div", "button", "reset", "reset settings");
var themeButton = document.newElement("div", "button", "theme", "change theme");

document.body.appendChild(themeButton);
document.body.appendChild(resetButton);

function newSwitch(){
    var element = document.newElement("div", "switch");
    element.appendChild(document.newElement("div", "knob"));
    return element;
}


var popupColoursElement = document.createElement("style");
document.head.appendChild(popupColoursElement);
popupColoursElement.id = "custom-colours";
var popupColours = popupColoursElement.sheet;

function setColours() {
    popupColours.deleteRules();
    themeNumber = utilities.styles.utilData.themeNumber;
    var blurValue = utilities.styles.utilData.blurValue;
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
        popupColours.insertRule(colourVariables[i], i);
    };
}
console.log("setColours():", popupColours);

function setSwitchStatus() {
    console.log(`setSwitchStatus():`, utilities);
    console.log(`setSwitchStatus test:`, utilities.linkChanger.status, utilities.spammer.status, utilities.spammer.utilData.count);

    settings.styles["Blur"].classList.toggle("enabled", utilities.styles.utilData.blurStatus);
    settings.styles["Background Image"].classList.toggle("enabled", utilities.styles.utilData.backgroundImgStatus);
}