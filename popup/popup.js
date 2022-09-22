function initialiseAll(){
    // getting local storage data
    provider.getData(() => {setSwitchStatus(); setColours();});
}

CSSStyleSheet.prototype.deleteRules = function(){
    console.log(this, this.cssRules);
    for (i in this.cssRules.length) this.deleteRule(0);
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
        customColours.deleteRules();
        setColours();
        console.log("change theme: ", utilities.styles.utilData.themeNumber)
    });
    resetButton.addEventListener("click", function(event){
        provider.resetData(() => {setSwitchStatus(); setColours();});
        console.log("resetting");
        // initialiseAll();
    });
}
// user.clear();
initialiseAll();
eventListeners();