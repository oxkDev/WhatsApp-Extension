function initialiseAll(){
    // getting local storage data
    addThemes();
    displayThemes();
    provider.getData(() => {
        setSwitchStatus();
        setColours();
        setThemes();
    });
}

function eventListeners(){
    settings.styles["Blur"].addEventListener("click", function(event){
            userData.styles.utilData.blurStatus = !userData.styles.utilData.blurStatus;
            setSwitchStatus();
            provider.setData();
    });
    settings.styles["Background Image"].addEventListener("click", function(event){
            userData.styles.utilData.backgroundImgStatus = !userData.styles.utilData.backgroundImgStatus;
            setSwitchStatus();
            provider.setData();
    });
    // themeButton.addEventListener("click", function(event){
    //     themeButtons[userData.styles.utilData.themeNumber].setAttribute("active", 0);
    //     if (userData.styles.utilData.themeNumber >= themes.length - 1) userData.styles.utilData.themeNumber = 0;
    //     else userData.styles.utilData.themeNumber += 1;
    //     themeButtons[userData.styles.utilData.themeNumber].setAttribute("active", 1);
    //     setColours();
    //     provider.setData();
    //     console.log("change theme: ", userData.styles.utilData.themeNumber);
    // });
    buttons.reset.addEventListener("click", function(event){
        provider.resetData(() => {setSwitchStatus(), setColours(), setThemes()});
        console.log("resetting");
        // initialiseAll();
    });

    buttons.update.addEventListener("click", () => window.open("https://github.com/oxkDev/WhatsApp-Extension", "_blank"))

}

function addThemes() {
    for (let i = 0; i < themes.length; i++) {
        themeButtons[i] = document.createElement("div");
        themeButtons[i].classList = "themeButton";
        themeButtons[i].setAttribute("active", 0);
        themeButtons[i].style.backgroundColor = themes[i].theme.primary;
        themeButtons[i].style.opacity = "0";
        themeButtons[i].addEventListener("click", () => {
            userData.styles.utilData.themeNumber = i;
            setThemes();
            setColours();
            provider.setData();
            console.log("change theme: ", userData.styles.utilData.themeNumber);
        });
        themeParent.appendChild(themeButtons[i]);
    }
}

function setThemes() {
    for (let i = 0; i < themes.length; i++) {
        themeButtons[i].setAttribute("active", (userData.styles.utilData.themeNumber == i) * 1);
    }
}
// user.clear();
initialiseAll();
eventListeners();