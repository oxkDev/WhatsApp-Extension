let provider;
function initialiseAll() {
    // getting local storage data
    addThemes();
    displayThemes();
    provider = new Provider(extensionName, () => {
        setSwitchStatus();
        setColours();
        setThemes();
    });
}

function eventListeners() {
    for (const i in settings.styles) {
        settings.styles[i].addEventListener("click", function(event) {
            provider.userData.styles[i] = !provider.userData.styles[i];

            setSwitchStatus();
            provider.setData();
        });
    }
    // settings.styles["Background Image"].addEventListener("click", function(event){
    //         provider.userData.styles.utilData.backgroundImgStatus = !provider.userData.styles.utilData.backgroundImgStatus;
    //         setSwitchStatus();
    //         provider.setData();
    // });
    // themeButton.addEventListener("click", function(event){
    //     themeButtons[provider.userData.styles.theme].setAttribute("active", 0);
    //     if (provider.userData.styles.theme >= themes.length - 1) provider.userData.styles.theme = 0;
    //     else provider.userData.styles.theme += 1;
    //     themeButtons[provider.userData.styles.theme].setAttribute("active", 1);
    //     setColours();
    //     provider.setData();
    //     console.log("change theme: ", provider.userData.styles.theme);
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
            provider.userData.styles.theme = i;
            setThemes();
            setColours();
            provider.setData();
            console.log("change theme: ", provider.userData.styles.theme);
        });
        themeParent.appendChild(themeButtons[i]);
    }
}

function setThemes() {
    for (let i = 0; i < themes.length; i++) {
        themeButtons[i].setAttribute("active", (provider.userData.styles.theme == i) * 1);
    }
}
// user.clear();
initialiseAll();
eventListeners();