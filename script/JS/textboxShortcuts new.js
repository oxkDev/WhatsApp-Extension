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
        this.extensionAddonDelay = 10;
        
        this.jumper = {
            element: "",
            n: 0,
        }
        
        this.textbox = document.querySelector('body');
        this.classes = {
            textbox: [
                `.app-wrapper-web > span .lexical-rich-text-input > div[role="textbox"]`,
                `.lexical-rich-text-input [role="textbox"][title="Type a message"]`,
                `div[data-testid="conversation-compose-box-input"]`,
                ".p3_M1 ._13NKt.copyable-text.selectable-text",
            ],
            // contactsParents: [`#side`, `html[dir] ._2Ts6i`],
            contactsParents: [`#app`],

            defaultMessage: ['.app-wrapper-web > span .lexical-rich-text-input .lhggkp7q.qq0sjtgm.jxacihee.c3x5l3r8', 'div.two > div._2QgSC .lexical-rich-text-input .lhggkp7q.qq0sjtgm.jxacihee.c3x5l3r8', '#main .lexical-rich-text-input .lhggkp7q.qq0sjtgm.jxacihee.c3x5l3r8'],
            chatHeader: [`.app-wrapper-web > span span[dir="auto"][aria-label].enbbiyaj.lxozqee9.ggj6brxn.gfz4du6o.r7fjleex`, `header.AmmtE span[aria-label]`],
            replyRange: 'span > div[role="application"]',
            chatMessages: '.message-out span.selectable-text.copyable-text',
        };

        this.commandSymbols = {
            'b': '*',
            'i': '_',
            's': '~',
            't': '```',
        }

        this.textSymbols = {
            '(': ['(', ')'],
            '{': ['{', '}'],
            '[': ['[', ']'],
            '<': ['<', '>'],
            '`': '`',
            '"': '"',
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

        // document.addEventListener("mouseover", this.init);
        this.init();

    }

    init() {
        console.log(`loading event listeners...`);

        const mo = new window.MutationObserver(() => {
            // let parentElms = [];
            
            // for (let i = 0; i < this.classes.contactsParents.length; i++) {
            //     let elm = document.querySelector(this.classes.contactsParents[i]);
            //     if (elm) parentElms.push(elm);
            // }
            let contactsParents, i = 0;
            while (!contactsParents && i < this.classes.contactsParents.length) {
                contactsParents = document.querySelector(this.classes.contactsParents[i++]);
            }
            
            if (contactsParents){
                // document.removeEventListener("mouseover", this.init);
                mo.disconnect();
                const innerMo = new window.MutationObserver(() => {
                    this.update();
                });
                innerMo.observe(contactsParents, {childList: true, subtree: true});

                // parentElms.onmouseover = () => this.init();
                // for (const i in parentElms) parentElms[i].onmousedown = (e) => this.update(e);
            }
        });

        mo.observe(document.body, {childList: true, subtree: true});

        // -------------------------------------------------------------------------------------------------- double click change
        document.onmousedown = event => {
            if (!event.button && event.target.classList.contains("focusable-list-item") && !document.querySelectorAll(this.classes.replyRange).length) {
                event.target.dblclick();
                console.log("return message");
            }
        }
    }

    update() {
        console.log(`update()`);

        // setTimeout(() => {
        let i = 0;
        
        let tbNew = document.querySelector(this.classes.textbox[i]);
        while (i < this.classes.textbox.length && !tbNew) {
            tbNew = document.querySelector(this.classes.textbox[i++]);
        }

        if (tbNew && tbNew != this.textbox){
            this.textbox = tbNew;
            console.log("new this.textbox: ", this.textbox);

            this.textbox.addEventListener("keydown", evnt => {
                if (this.textbox.innerText == "\n") this.defaultMessage();
                if (evnt.key == "Enter") setTimeout(() => this.defaultMessage());

                this.keyCombination(evnt, provider.userData.textbox.commands);
            });

            this.textbox.addEventListener("keyup", (e) => {
                this.preventBore(e);
            });
            
            this.textbox.addEventListener("keypress", e => {
                this.messageJumper(e);
            });

            changeBackground(a, ["wave", "space", "art", "black"], ["polynomial"]);
            a = false;
            this.defaultMessage();
        } else if (!tbNew) console.log("Textbox element not found");
        // }, this.extensionAddonDelay);
    }
    
    setText(text){
        this.textbox.click();
        this.textbox.focus();

        // const range = document.createRange();
        // range.selectNode(this.textbox);
        // window.getSelection().removeAllRanges();
        // window.getSelection().addRange(range);
        // setTimeout(() => {
        document.execCommand("selectAll", false, text)
        document.execCommand("insertText", false, text);
        if (!text) this.defaultMessage();
        // }, 2000);
        // this.innerHTML = text;
        // this.textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
        // new KeyboardEvent("", {bubbles: true});
    }

    //--------------------------------------------------------------------------------------------------------- symbols adder
    async extraSideSymbols(e, type, onlySelect = false) {
        let range = window.getSelection().getRangeAt(0);
        if (onlySelect && !range.toString()) return false;
        
        e.preventDefault();
        if (typeof(type) == "string") type = [type, type];

        if (this.textbox.textContent == "") { // ----------------------------------------------------------- check if textbox empty
            document.execCommand("insertText", false, " ");
            await new Promise(resolve => setTimeout(resolve, 10));
            range = window.getSelection().getRangeAt(0);
        }
        // ------------------------------------------------------------------------------------------------- init offset
        let offset = {
            start: range.startOffset,
            end: range.endOffset,
        };
        let container = {
            start: range.startContainer,
            end: range.endContainer,
        };
        let typeOffset = [type[0].length, type[1].length];
        // let fullOffset = {
        //     start: range.startOffset,
        //     end: range.endOffset,
        // }
        // let prv = container.start;
        // while (prv.parentElement != this.textbox.firstChild) prv = prv.parentElement;
        // while (prv.previousSibling) {
        //     prv = prv.previousSibling;
        //     fullOffset.start += prv.textContent.length;
        // }
        // let nxt = container.end;
        // while (nxt.parentElement != this.textbox.firstChild) nxt = nxt.parentElement;

        // while (nxt.previousSibling) {
        //     nxt = nxt.previousSibling;
        //     fullOffset.end += nxt.textContent.length;
        // }
        // const textContent = this.textbox.textContent
        // let checks = [
        //     textContent.slice(fullOffset.start - typeOffset[0], fullOffset.start),
        //     textContent.slice(fullOffset.end, fullOffset.end + typeOffset[1]),
        // ];

        // // let texts = [...this.textbox.querySelectorAll("p .selectable-text.copyable-text"), ...this.textbox.querySelectorAll("p span>span")], i = 0;
        // // while (i < texts.length) {
        // //     if (texts[i].firstChild && texts[i] != texts[0]) texts[i].firstChild.textContent = "";
        // //     i++
        // // }
        // range.selectNode(this.textbox.firstChild);
        // document.execCommand("insertText", false, ' ');
        // texts[0].firstChild.textContent = textContent.slice(0, fullOffset.start - typeOffset[0]) + textContent.slice(fullOffset.start, fullOffset.end) + textContent.slice(fullOffset.end + typeOffset[0]);
        
        // ------------------------------------------------------------------------------------------------- check offset
        let checks = ['', ''];
        let del = [];
        let p = container.start;
        while (p.parentElement != this.textbox.firstChild) p = p.parentElement;
        let prev = {elm: p, mod: [offset.start - typeOffset[0], offset.start]};

        if (offset.start < typeOffset[0]) while (checks[0].length < typeOffset[0] && prev.elm.previousSibling) {
            let remainder = typeOffset[0] - checks[0].length;
            prev.elm = prev.elm.previousSibling;
            prev.mod = [prev.elm.textContent.length - remainder, prev.elm.textContent.length];
            if (prev.elm.textContent.length <= remainder) {
                del.push(prev.elm);
                checks[0] = prev.elm.textContent + checks[0];
                prev.mod[0] = 0;
            } else {
                checks[0] = prev.elm.textContent.slice(prev.mod[0]) + checks[0];
            }
        } else {
            checks[0] = prev.elm.textContent.slice(prev.mod[0], prev.mod[1]);
        }

        p = container.end;
        while (p.parentElement != this.textbox.firstChild) p = p.parentElement; 
        let next = {elm: p, mod: [offset.end, offset.end + typeOffset[1]]};

        if ((next.elm.textContent.length - offset.end) < typeOffset[1]) while (checks[1].length < typeOffset[1] && next.elm.nextSibling) {
            let remainder = typeOffset[1] - checks[1].length;
            next.elm = next.elm.nextSibling;
            next.mod = [0, remainder];
            if (next.elm.textContent.length <= remainder) {
                del.push(next.elm);
                checks[1] += next.elm.textContent;
            } else {
                checks[1] += next.elm.textContent.slice(next.mod[0], next.mod[1]);
            }
        } else {
            checks[1] = next.elm.textContent.slice(next.mod[0], next.mod[1]);
        }

        console.log("prev", prev)
        console.log("next", next)
        console.log("del", del)
        console.log("edit range: ", checks, offset, container.start, container.end);
        
        let setCaret = () => { // ----------------------------------------------------------------------------------------------- set caret position
            document.getSelection().setBaseAndExtent(
                container.end,
                (container.end == container.start) * typeOffset[1] + offset.end,
                container.start,
                typeOffset[0] + offset.start,
            )
            console.log("rangeDetected: ", offset, container);
            
            console.log("container (end): ", (container.end == container.start) * typeOffset[1] + offset.end, container.end);
            console.log("container (start): ", typeOffset[0] + offset.start, container.start);

            // let range = document.createRange();
            // range.selectNode(this.textbox);
            // range.setEnd(
            //     container.end,
            //     (container.end == container.start) * typeOffset[1] + offset.end
            // ),
            // range.setStart(
            //     container.start,
            //     typeOffset[0] + offset.start
            // );
            // document.getSelection().addRange(range);
            // range.setStart(container.start, type.length + offset.start);
            // range.setEnd(container.end, (container.end == container.start) * type.length + offset.end);
            // range = document.createRange()

        }
        // !((range.startContainer.textContent.slice(range.startOffset - typeOffset, range.startOffset) == type) && (range.endContainer.textContent.slice(range.endOffset, range.endOffset + typeOffset) == type))
        if (checks[0] == type[0] && checks[1] == type[1]) {
            // container.end.textContent = container.end.textContent.slice(0, offset.end) + container.end.textContent.slice(offset.end + typeOffset[1]);
            // container.start.textContent = container.start.textContent.slice(0, offset.start - typeOffset[0]) + container.start.textContent.slice(offset.start);
            // this.setCaretPosition(offset, container, -typeOffset);
            console.log("expected: ",
            prev.elm.textContent.slice(0, prev.mod[0]) + prev.elm.textContent.slice(prev.mod[1]),
            next.elm.textContent.slice(0, next.mod[0]) + next.elm.textContent.slice(next.mod[1])
            );
            typeOffset = [-type[0].length, -type[1].length];
            next.elm.firstChild.textContent = next.elm.textContent.slice(0, next.mod[0]) + next.elm.textContent.slice(next.mod[1]),
            prev.elm.firstChild.textContent = prev.elm.textContent.slice(0, prev.mod[0]) + prev.elm.textContent.slice(prev.mod[1]);
            // this.setCaretPosition(offset, container, typeOffset);
            for (const i in del) {
                if (del[i].textContent != "") del[i].firstChild.textContent = "";
            }
            setCaret();
        } else {
            console.log("expected: ",
            container.start.textContent.slice(0, offset.start) + type[0] + container.start.textContent.slice(offset.start),
            container.end.textContent.slice(0, offset.end) + type[1] + container.end.textContent.slice(offset.end),
            );

            container.end.textContent = container.end.textContent.slice(0, offset.end) + type[1] + container.end.textContent.slice(offset.end),
            container.start.textContent = container.start.textContent.slice(0, offset.start) + type[0] + container.start.textContent.slice(offset.start);
            // document.execCommand("insertText", false, type[0] + selection.toString() + type[1]),
            setCaret();
            // offset.forEach((val, index) => {
            // });
        }
        return false;
    }

    
    //--------------------------------------------------------------------------------------------------------- default message in textbox
    defaultMessage(){
        let textboxStatus = document.querySelector(this.classes.defaultMessage[0]), i = 1;
        while (!textboxStatus && i < this.classes.defaultMessage.length) {
            textboxStatus = document.querySelector(this.classes.defaultMessage[i]); i++;
        }
        let chatHeader = document.querySelector(this.classes.chatHeader[0]);
        i = 1;
        while (!chatHeader && i < this.classes.chatHeader.length) {
            chatHeader = document.querySelector(this.classes.chatHeader[i]); i++;
        }

        if (textboxStatus) {
            textboxStatus.innerHTML = `<div class="customStylesFontWeight">${chatHeader.innerHTML}</div>`;
            // console.log("Chat box default message loaded");
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
    keyCombination(kclEvent, enableCommands = true) {
        let funcKey = false;
        
        if (navigator.userAgentData.platform == "Windows")
            funcKey = kclEvent.ctrlKey
        else
            funcKey = kclEvent.metaKey

        // const selection = window.getSelection().getRangeAt(0);
        // const start = selection.startOffset;
        // const end = selection.endOffset;
        // window.InputEvent = window.Event || window.InputEvent;
        // if (kclEvent.key == "Enter" && textbox.textContent != "" && !kclEvent.shiftKey) { //--------------------------------------------------------------- enter key
        if (funcKey && !(kclEvent.shiftKey || kclEvent.altKey) && enableCommands) { //--------------------------------------------------------------- meta key
            if (Object.keys(this.commandSymbols).indexOf(kclEvent.key) + 1) {
                this.extraSideSymbols(kclEvent, this.commandSymbols[kclEvent.key]);
                return false;
            }
        } else if (!(kclEvent.ctrlKey || kclEvent.altKey || funcKey)) {
            if (this.textSymbols[kclEvent.key]){
                this.extraSideSymbols(kclEvent, this.textSymbols[kclEvent.key], true);
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
        // console.log(this.boringList.indexOf(this.textbox.textContent));
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
let provider;
addEventListener("load", () => {
    provider = new Provider(async function() { 
        json = await fetch(chrome.runtime.getURL("provider/resources.json")).then(r => r.json());
        
        for (let n in json["themes"]) {themeSelection.push(new ColourTheme(json["themes"][n]));}
        backgroundImg = json["wallpapers"];
            
        const smartTextbox = new SmartTextbox();
        stylesMainOnStart();
        backgroundImageStylesOnStart();
        coloursAdd();
        setClasses();

        addEventListener("providerUpdate", () => {
            if (themeNumber != provider.userData.theme.theme) coloursAdd();

            if (provider.userData.appearance.styles) for (i in stylesElm) {
                stylesElm[i].removeAttribute("disabled");
            } else for (i in stylesElm) {
                stylesElm[i].setAttribute("disabled", "");
            }

            setClasses();
        });
    });
});

// (prop("Completion") == "Completed!") ? prop("Completion") : (empty(prop("Submission")) ? "No due date" : (((prop("Submission") < now()) ? "Overdue by" : "Due in") + " " + ((abs(dateBetween(prop("Submission"), now(), "hours")) < 24) ? (format(abs(dateBetween(prop("Submission"), now(), "hours"))) + " hour" + (dateBetween(prop("Submission"), now(), "hours") == 1 ? "" : "s")) : format(abs(dateBetween(prop("Submission"), now(), "days"))) + " day" + ((abs(dateBetween(prop("Submission"), now(), "days")) > 1) ? "s" : ""))))
// (prop("Status") == "Done 🙌") ? prop("Status") : (empty(prop("Deadline")) ? "No due date" : (((prop("Deadline") < now()) ? "Overdue by" : "Due in") + " " + ((abs(dateBetween(prop("Deadline"), now(), "hours")) < 24) ? (format(abs(dateBetween(prop("Deadline"), now(), "hours"))) + " hour" + (dateBetween(prop("Deadline"), now(), "hours") == 1 ? "" : "s")) : format(abs(dateBetween(prop("Deadline"), now(), "days"))) + " day" + ((abs(dateBetween(prop("Deadline"), now(), "days")) > 1) ? "s" : ""))))

// not empty(prop("Call Date")) ? ((dateBetween(prop("Call Date"), now(), "hours") >= 0) ? ("Call" + ((dateBetween(prop("Call Date"), now(), "days") == 0) ? (((dateBetween(prop("Call Date"), now(), "hours") == 0) ? (((dateBetween(prop("Call Date"), now(), "minutes") == 0) ? (" starting now") : (" in " + format(dateBetween(prop("Call Date"), now(), "minutes")) + " minute" + ((dateBetween(prop("Call Date"), now(), "minutes") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Call Date"), now(), "hours")) + " hour" + ((dateBetween(prop("Call Date"), now(), "hours") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Call Date"), now(), "days")) + " day" + ((dateBetween(prop("Call Date"), now(), "days") == 1) ? "" : "s")))) : ((not empty(prop("Next Call")) and dateBetween(prop("Next Call"), now(), "days") == 0) ? ("Next Call" + ((dateBetween(prop("Next Call"), now(), "days") == 0) ? (((dateBetween(prop("Next Call"), now(), "hours") == 0) ? (((dateBetween(prop("Next Call"), now(), "minutes") == 0) ? (" starting now") : (" in " + format(dateBetween(prop("Next Call"), now(), "minutes")) + " minute" + ((dateBetween(prop("Next Call"), now(), "minutes") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Next Call"), now(), "hours")) + " hour" + ((dateBetween(prop("Next Call"), now(), "hours") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Next Call"), now(), "days")) + " day" + ((dateBetween(prop("Next Call"), now(), "days") == 1) ? "" : "s")))) : "Done")) : "No date stated"