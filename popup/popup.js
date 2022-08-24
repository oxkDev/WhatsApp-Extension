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

var user = chrome.storage.sync;

function setSwitchStatus(){
    console.log(`setSwitchStatus():`, utilities);
    console.log(`setSwitchStatus test:`, utilities.linkChanger.status, utilities.spammer.status, utilities.spammer.utilData.count);

    settings.styles["Blur"].classList.toggle("enabled", utilities.styles.utilData.blurStatus);
    settings.styles["Background Image"].classList.toggle("enabled", utilities.styles.utilData.backgroundImgStatus);
}

function initialiseAll(){
    // getting local storage data
    provider.getData(setSwitchStatus);
}

function eventListeners(){
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
    themeButton.addEventListener("click", function(event){
        if (utilities.styles.utilData.themeNumber >= themes.length - 1) utilities.styles.utilData.themeNumber = 0;
        else utilities.styles.utilData.themeNumber += 1;
        provider.setData();
        console.log("change theme: ", utilities.styles.utilData.themeNumber)
    });
    resetButton.addEventListener("click", function(event){
        provider.resetData(setSwitchStatus);
        console.log("resetting");
        // initialiseAll();
    });
}
// user.clear();
initialiseAll();
eventListeners();