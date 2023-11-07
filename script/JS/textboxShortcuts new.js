Range.prototype.editSelection = function(type) {
    // console.log(this);

    Range.prototype.setCaretPosition = function(offset, container, type){
        // setTimeout(() => {
            // var selection = document.getSelection().getRangeAt(0);
            console.log("selectionDetected: ", offset[0], offset[1]);

            console.log("container (end): ", offset[0], container[0]);
            console.log("container (start): ", offset[1], container[1]);
            // selection.setStart(selection.startContainer, start);
            // selection.setEnd(selection.endContainer, end);
            this.setStart(container[1], type + offset[1]);
            this.setEnd(container[0], (container[0] == container[1]) * type + offset[0]);
        // }, 500);
    }

    var offset = [this.endOffset, this.startOffset];
    var container = [this.endContainer, this.startContainer];
    // console.log("offsetStart: ", offset[1], container[1].parentElement.previousSibling);
    // console.log("offsetEnd: ", offset[0], container[1].textContent.length);
    if (!offset[1] && container[1].parentElement.previousSibling){
        offset[1] = container[1].parentElement.previousSibling.textContent.length;
        container[1] = container[1].parentElement.previousSibling.firstChild;
        // console.log("offset start changed")
    }
    if (offset[0] == container[0].textContent.length && container[0].parentElement.nextSibling) {
        offset[0] = 0;
        container[0] = container[0].parentElement.nextSibling.firstChild;
        // console.log("offset end changed")
    }
        
    console.log("edit selection: ", !(container[1].textContent.slice(offset[1] - type.length, offset[1]) == type && container[0].textContent.slice(offset[0], offset[0] + type.length) == type), offset, container);
    // !((selection.startContainer.textContent.slice(selection.startOffset - type.length, selection.startOffset) == type) && (selection.endContainer.textContent.slice(selection.endOffset, selection.endOffset + type.length) == type))
    if(!(container[1].textContent.slice(offset[1] - type.length, offset[1]) == type && container[0].textContent.slice(offset[0], offset[0] + type.length) == type)) {
        offset.forEach((val, index) => {
            container[index].textContent = container[index].textContent.slice(0, val) + type + container[index].textContent.slice(val);
        });
        this.setCaretPosition(offset, container, type.length);
    } else {
        container[0].textContent = container[0].textContent.slice(0, offset[0]) + container[0].textContent.slice(offset[0] + type.length);
        container[1].textContent = container[1].textContent.slice(0, offset[1] - type.length) + container[1].textContent.slice(offset[1]);
        this.setCaretPosition(offset, container, -type.length);
        // offset.forEach((val, index) => {
        // });
    }
}

Element.prototype.formatPlainText = function(){
    emotes = this.getElementsByTagName("img")
    console.log("test: ", emotes)
    for (var i = 0; i < emotes.length; i++){
        console.log(emotes[i].dataset.plainText)
        emotes[i].replaceWith(emotes[i].dataset.plainText)
    }
    this.dispatchEvent(new InputEvent('input', {bubbles: true,}));
    return this
}

Element.prototype.dblclick = function() {
    return this.dispatchEvent(new MouseEvent("dblclick", {
        'view': window,
        'bubbles': true,
        'cancelable': true
    }));
}

//--------------------------------------------------------------------------------------------------------- styles
var a = true;

class SmartTextbox {
    constructor() {
        this.extensionAddonDelay = 0.001;
        
        this.jumper = {
            element: "",
            n: 0,
        }
        
        this.textbox;
        this.classes = {
            textbox: [
                `.lexical-rich-text-input [role="textbox"][title="Type a message"]`,
                `div[data-testid="conversation-compose-box-input"]`,
                ".p3_M1 ._13NKt.copyable-text.selectable-text",
            ],
            contactsParent: [`#side`],

            defaultMessage: '#main .lexical-rich-text-input .lhggkp7q.qq0sjtgm.jxacihee.c3x5l3r8',
            chatHeader: `header.AmmtE span[aria-label]`,
            replyRange: 'span > div[role="application"]',
            chatMessages: '.message-out span.selectable-text.copyable-text',
        };

        this.textSymbols = {
            'b': '*',
            'i': '_',
            's': '~',
            't': '```',
        }

        this.boringList = ["ok", "okay", "okay!", "cool", "ok buddy", "no"];
        this.betterList = ["sure!", "interesting", "mhm", "oooh", "i seee", "woahh", "hah"];

        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.setText = this.setText.bind(this);
        this.extraSideSymbols = this.extraSideSymbols.bind(this);
        this.defaultMessage = this.defaultMessage.bind(this);
        this.messageJumper = this.messageJumper.bind(this);
        this.keyCombination = this.keyCombination.bind(this);
        this.preventBore = this.preventBore.bind(this);

        document.addEventListener("mouseover", this.init);

        // -------------------------------------------------------------------------------------------------- double click change
        document.onmousedown = event => {
            if (!event.button && event.target.classList.contains("focusable-list-item") && !document.querySelectorAll(this.classes.replyRange).length) {
                event.target.dblclick();
                console.log("return message");
            }
        }
    }

    init() {
        console.log(`loading event listeners...`);
        
        let contactsParent = document.querySelector(this.classes.contactsParent[0]);

        for (let i = 1; i < this.classes.contactsParent.length; i++) {
            if (!contactsParent) contactsParent = document.querySelector(this.classes.contactsParent[i]);
        }

        if (contactsParent){
            document.removeEventListener("mouseover", this.init);
            contactsParent.onmouseover = () => this.init();
            contactsParent.onmousedown = (e) => this.update(e);
        }
    }

    update(event) {
        console.log(`update()`)
        setTimeout(() => {
    
            let tbNew = document.querySelector(this.classes.textbox[0]);
    
            for (let i = 1; i < this.classes.textbox.length; i++) {
                if (!tbNew) tbNew = document.querySelector(this.classes.textbox[i]);
                else break;
            }
    
            if (tbNew && tbNew != this.textbox){
                this.textbox = tbNew;
                console.log("new this.textbox: ", this.textbox);

                this.defaultMessage();

                this.textbox.onkeydown = evnt => {
                    if (this.textbox.innerText == "\n") this.defaultMessage();
                    if (evnt.key == "Enter") setTimeout(() => this.defaultMessage());

                    this.keyCombination(evnt);
                }

                this.textbox.onkeyup = (e) => {
                    this.preventBore(e);
                }
                
                this.textbox.onkeypress = e => {
                    this.messageJumper(e);
                }

                changeBackground(a, ["wave", "space", "art", "black"], ["polynomial"]);
                a = false;
                this.defaultMessage();
            } else console.log("Textbox element not updated/found: ", tbNew, this.textbox);
        }, this.extensionAddonDelay);
    }
    
    setText(text){
        // document.execCommand("selectAll");        

        const range = document.createRange();
        range.selectNode(this.textbox);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        setTimeout(() => {
            document.execCommand("insertText", false, text);
            if (!text) this.defaultMessage();
        }, 2000);
        // this.innerHTML = text;
        // this.textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
        // new KeyboardEvent("", {bubbles: true});
    }

    //--------------------------------------------------------------------------------------------------------- symbols adder
    async extraSideSymbols(e, type, onlySelect = false){
        let selection = window.getSelection().getRangeAt(0);
        if (onlySelect && !(selection.endOffset - selection.startOffset)) return false;
        
        e.preventDefault();
        this.textbox.formatPlainText();

        if (this.textbox.textContent == "") {
            document.execCommand("insertText", false, " ")
            setTimeout(() => {
                selection = window.getSelection().getRangeAt(0);
                selection.editSelection(type);
            }, 1);
            return true;
        }
        selection.editSelection(type);
        return true;
    }

    
    //--------------------------------------------------------------------------------------------------------- default message in textbox

    defaultMessage(){
        const textboxStatus = document.querySelector(this.classes.defaultMessage);
        const chatHeader = document.querySelector(this.classes.chatHeader).innerHTML;

        if (textboxStatus) {
            textboxStatus.innerHTML = `<div class="customStylesFontWeight">${chatHeader}</div>`;
            console.log("Chat box default message loaded");
        } else
            console.log("Chat box default message failed to load: ", textboxStatus);
        // deciding utility status
    }

    //--------------------------------------------------------------------------------------------------------- up down messages jumper

    messageJumper(mjEvent) {
        let elements = [];
        Array.from(document.querySelectorAll(this.classes.chatMessages)).forEach(elm => {
            elements.push(elm.textContent);
        });

        if (!this.jumper.n) this.jumper.element = this.textbox.textContent;
        elements.push(this.jumper.element);
        elements = elements.reverse();
        
        // console.log("test: ", mjEvent.shiftKey, mjEvent.ctrlKey, this.jumper.n, elements[this.jumper.n], "==", this.textbox.textContent);
        // console.log(elements);
        
        if (this.textbox.textContent != elements[this.jumper.n]) this.jumper.n = 0;

        // console.log("test2: ", mjEvent.shiftKey, mjEvent.ctrlKey, this.jumper.n, elements[this.jumper.n], "==", this.textbox.textContent);
        // console.log(prev);
        if (mjEvent.shiftKey && mjEvent.ctrlKey && elements[this.jumper.n] == this.textbox.textContent){
            console.log("this.jumper");
            if (mjEvent.key == "ArrowDown"){ //--------------------------------------------------------------- down key
                window.InputEvent = window.Event || window.InputEvent;
                if (this.jumper.n > 0){
                    this.jumper.n -= 1;
                }
                console.log("down", this.jumper.n, elements[this.jumper.n]);
                this.setText(elements[this.jumper.n]);
                // console.log(`index: ${this.jumper.n}`);
                // this.textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
                return false;
            }
            if (mjEvent.key == "ArrowUp"){ //--------------------------------------------------------------- up key
                window.InputEvent = window.Event || window.InputEvent;
                if (this.jumper.n < elements.length - 1){
                    this.jumper.n += 1;
                }
                console.log("up", this.jumper.n, elements[this.jumper.n]);
                this.setText(elements[this.jumper.n]);
                // this.textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
                return false;
            }
        }
        // }
    }

    //--------------------------------------------------------------------------------------------------------- key combination commands
    keyCombination(kclEvent) {
        let funcKey = false;
        
        if (navigator.userAgentData.platform == "Windows")
            funcKey = kclEvent.ctrlKey
        else
            funcKey = kclEvent.metaKey

        const selection = window.getSelection().getRangeAt(0);
        const start = selection.startOffset;
        const end = selection.endOffset;
        window.InputEvent = window.Event || window.InputEvent;
        // if (kclEvent.key == "Enter" && textbox.textContent != "" && !kclEvent.shiftKey) { //--------------------------------------------------------------- enter key
        if (funcKey && !(kclEvent.shiftKey || kclEvent.altKey)) { //--------------------------------------------------------------- meta key
            if (Object.keys(this.textSymbols).indexOf(kclEvent.key) + 1) {
                this.extraSideSymbols(kclEvent, this.textSymbols[kclEvent.key]);
                return false;
            }
        } else if (kclEvent.shiftKey && !(kclEvent.ctrlKey || kclEvent.altKey || funcKey)) {
            if (kclEvent.key == '\"'){
                this.extraSideSymbols(kclEvent, '\"', true);
                return false;
            }
        } else if (funcKey && kclEvent.shiftKey){
            if (kclEvent.key == " ") {
                document.execCommand("insertText", false, "ㅤ");
                return false;
            }
        }
    }

    //--------------------------------------------------------------------------------------------------------------- prevent boring replies
    preventBore(pbEvent) {
        console.log(this.boringList.indexOf(this.textbox.textContent));
        if (!(pbEvent.ctrlKey || pbEvent.altKey || pbEvent.metaKey) && (this.boringList.indexOf(this.textbox.textContent) + 1) && Math.floor(Math.random() * 3) == 2) {
            pbEvent.preventDefault();
            let betterResp = this.betterList[Math.floor(Math.random() * this.betterList.length)];
            document.execCommand("selectAll");
            if (alert(`Lets think of something better! Maybe try "${betterResp}" instead!`, betterResp)) setTimeout(() => this.setText(betterResp), 200);
        }
    }
}

//--------------------------------------------------------------------------------------------------------- final loads

// chrome.storage.sync.onChanged.addListener(changeBackground);


class WhatsAppAddons {
    constructor () {
        console.log('Running script...');

        this.smartTextbox;

        this.init();
    }

    init() {
    }
}


function setClasses(){
    document.body.classList.toggle("blur", provider.userData.appearance.blur);
    document.body.classList.toggle("backgroundImage", provider.userData.appearance.backgroundImg);
    document.body.classList.toggle("custom", provider.userData.theme.status)
}

addEventListener("load", () => {
    provider = new Provider(extensionName, () => 
    fetch(chrome.runtime.getURL("provider/resources.json")).then((response) => response.json()).then((json) => {    
        for (let n in json["themes"]) {themeSelection.push(new ColourTheme(json["themes"][n]));}
        backgroundImg = json["wallpapers"];
        
        const smartTextbox = new SmartTextbox();
        stylesMainOnStart();
        backgroundImageStylesOnStart();
        customColoursOnStart();
        setClasses();

        addEventListener("providerUpdate", () => {
            if (themeNumber != provider.userData.theme.theme && customColours.cssRules.length) {
                for (const i in customColours.cssRules) {
                    customColours.deleteRule(0);
                }
                customColoursOnStart();
            }

            if (provider.userData.appearance.styles) for (i in stylesElm) {
                    stylesElm[i].removeAttribute("disabled")
                }
            else for (i in stylesElm) {
                    stylesElm[i].setAttribute("disabled", "")
                }
            setClasses();
        });
    }));
});

// (prop("Completion") == "Completed!") ? prop("Completion") : (empty(prop("Submission")) ? "No due date" : (((prop("Submission") < now()) ? "Overdue by" : "Due in") + " " + ((abs(dateBetween(prop("Submission"), now(), "hours")) < 24) ? (format(abs(dateBetween(prop("Submission"), now(), "hours"))) + " hour" + (dateBetween(prop("Submission"), now(), "hours") == 1 ? "" : "s")) : format(abs(dateBetween(prop("Submission"), now(), "days"))) + " day" + ((abs(dateBetween(prop("Submission"), now(), "days")) > 1) ? "s" : ""))))
// (prop("Status") == "Done 🙌") ? prop("Status") : (empty(prop("Deadline")) ? "No due date" : (((prop("Deadline") < now()) ? "Overdue by" : "Due in") + " " + ((abs(dateBetween(prop("Deadline"), now(), "hours")) < 24) ? (format(abs(dateBetween(prop("Deadline"), now(), "hours"))) + " hour" + (dateBetween(prop("Deadline"), now(), "hours") == 1 ? "" : "s")) : format(abs(dateBetween(prop("Deadline"), now(), "days"))) + " day" + ((abs(dateBetween(prop("Deadline"), now(), "days")) > 1) ? "s" : ""))))

// not empty(prop("Call Date")) ? ((dateBetween(prop("Call Date"), now(), "hours") >= 0) ? ("Call" + ((dateBetween(prop("Call Date"), now(), "days") == 0) ? (((dateBetween(prop("Call Date"), now(), "hours") == 0) ? (((dateBetween(prop("Call Date"), now(), "minutes") == 0) ? (" starting now") : (" in " + format(dateBetween(prop("Call Date"), now(), "minutes")) + " minute" + ((dateBetween(prop("Call Date"), now(), "minutes") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Call Date"), now(), "hours")) + " hour" + ((dateBetween(prop("Call Date"), now(), "hours") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Call Date"), now(), "days")) + " day" + ((dateBetween(prop("Call Date"), now(), "days") == 1) ? "" : "s")))) : ((not empty(prop("Next Call")) and dateBetween(prop("Next Call"), now(), "days") == 0) ? ("Next Call" + ((dateBetween(prop("Next Call"), now(), "days") == 0) ? (((dateBetween(prop("Next Call"), now(), "hours") == 0) ? (((dateBetween(prop("Next Call"), now(), "minutes") == 0) ? (" starting now") : (" in " + format(dateBetween(prop("Next Call"), now(), "minutes")) + " minute" + ((dateBetween(prop("Next Call"), now(), "minutes") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Next Call"), now(), "hours")) + " hour" + ((dateBetween(prop("Next Call"), now(), "hours") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Next Call"), now(), "days")) + " day" + ((dateBetween(prop("Next Call"), now(), "days") == 1) ? "" : "s")))) : "Done")) : "No date stated"