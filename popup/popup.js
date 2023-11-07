let provider;
function initialiseAll() {
    // getting local storage data
    addThemes();
    displayThemeSelection();
    provider = new Provider(extensionName, () => {
        setSwitchStatus();
        setColours();
        setThemes();
    });
}

function eventListeners() {
    for (const i in settings.appearance) {
        settings.appearance[i].addEventListener("click", function(event) {
            provider.userData.appearance[i] = !provider.userData.appearance[i];

            setSwitchStatus();
            provider.setData();
        });
    }
    
    for (const i in settings.theme) {
        settings.theme[i].addEventListener("click", function(event) {
            provider.userData.theme[i] = !provider.userData.theme[i];

            setSwitchStatus();
            provider.setData();
        });
    }
    // settings.appearance["Background Image"].addEventListener("click", function(event){
    //         provider.userData.appearance.utilData.backgroundImgStatus = !provider.userData.appearance.utilData.backgroundImgStatus;
    //         setSwitchStatus();
    //         provider.setData();
    // });
    // themeButton.addEventListener("click", function(event){
    //     theme.selection[provider.userData.theme.theme].setAttribute("active", 0);
    //     if (provider.userData.theme.theme >= themes.length - 1) provider.userData.theme.theme = 0;
    //     else provider.userData.theme.theme += 1;
    //     theme.selection[provider.userData.theme.theme].setAttribute("active", 1);
    //     setColours();
    //     provider.setData();
    //     console.log("change theme: ", provider.userData.theme.theme);
    // });
    buttons.reset.addEventListener("click", function(event){
        provider.resetData(() => {setSwitchStatus(), setColours(), setThemes()});
        console.log("resetting");
        // initialiseAll();
    });

    buttons.update.addEventListener("click", () => window.open("https://github.com/oxkDev/WhatsApp-Extension", "_blank"))

}

function addThemes() {
    for (let i = 0; i < themeSelection.length; i++) {
        theme.selection[i] = document.createElement("div");
        theme.selection[i].classList = "themeButton";
        theme.selection[i].setAttribute("active", 0);
        theme.selection[i].style.backgroundColor = themeSelection[i].theme.primary;
        theme.selection[i].style.opacity = "0";
        theme.selection[i].addEventListener("click", () => {
            provider.userData.theme.theme = i;
            setThemes();
            setColours();
            provider.setData();
            console.log("change theme: ", provider.userData.theme.theme);
        });
        theme.parent.appendChild(theme.selection[i]);
    }
}

function setThemes() {
    for (let i = 0; i < themeSelection.length; i++) {
        theme.selection[i].setAttribute("active", (provider.userData.theme.theme == i) * 1);
    }
}
// user.clear();

fetch('../provider/resources.json').then((response) => response.json()).then((json) => {
    for (let n in json["themes"]) {console.log(n); themeSelection.push(new ColourTheme(json["themes"][n]));}
    console.log(themeSelection)
    initialiseAll();
    eventListeners();
})