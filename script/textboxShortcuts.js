var extensionAddonDelay = 0.001;
var extensionAddonDelay = 0.001;
var contacts, selectedContact, textbox;
var isWin = navigator.userAgentData.platform == "Windows";
// var blr = ["/*", "*/", "e"];

// var element;
// var contacts;
// var selectedContact;
var textbox;
var jumper = {
    element: "",
    n: 0,
}

var textSymbols = {
    'b': '*',
    'i': '_',
    's': '~',
    't': '```',
}

KeyboardEvent.prototype.functionKey = function() {
    if (isWin)
        return this.ctrlKey
    else
        return this.metaKey
}

Range.prototype.editSelection = function(type) {
    // console.log(this);

    var offset = [this.endOffset, this.startOffset];
    var container = [this.endContainer, this.startContainer];
    console.log("offsetStart: ", offset[1], container[1].parentElement.previousSibling);
    console.log("offsetEnd: ", offset[0], container[1].textContent.length);
    if (!offset[1] && container[1].parentElement.previousSibling){
        offset[1] = container[1].parentElement.previousSibling.textContent.length;
        container[1] = container[1].parentElement.previousSibling.firstChild;
        console.log("offset start changed")
    }
    if (offset[0] == container[0].textContent.length && container[0].parentElement.nextSibling) {
        offset[0] = 0;
        container[0] = container[0].parentElement.nextSibling.firstChild;
        console.log("offset end changed")
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
function setText(text){
    document.execCommand("selectAll");
    setTimeout(() => {document.execCommand("insertText", false, text)}, 0);
    // this.innerHTML = text;
    // textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
    // new KeyboardEvent("", {bubbles: true});
}
Element.prototype.dblclick = function() {
    return this.dispatchEvent(new MouseEvent("dblclick", {
        'view': window,
        'bubbles': true,
        'cancelable': true
    }));
}
Element.prototype.sglclick = function() {
    return this.dispatchEvent(new MouseEvent("click", {
        'view': window,
        'bubbles': true,
        'cancelable': true
    }));
}

NodeList.prototype.getElementByTabIndex = function(tabindex) {
    var result;
    for(i = 0; i < this.length; i++){
        if (this[i].tabIndex == tabindex){
            result = this[i];
            break;
        }
    }
    return result;
}

Element.prototype.formatPlainText = function(){
    emotes = this.getElementsByTagName("img")
    console.log("test: ", emotes)
    for (var i = 0; i < emotes.length; i++){
        console.log(emotes[i].dataset.plainText)
        emotes[i].replaceWith(emotes[i].dataset.plainText)
    }
    textbox.dispatchEvent(new InputEvent('input', {bubbles: true,}));
    return this
}

function randInt(max) {
    return Math.floor(Math.random() * max);
}

function replaceTxt(txt, finder, replacement){
    setText(txt.replace(finder, replacement));
}

Array.prototype.reverse = function() {
    var output = [];
    for(i = this.length-1; i >= 0; i--){
        output.push(this[i]);
    }
    return output;
}

function sendMessage(msg){
    setText(msg);
    // textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
    document.querySelector("button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq").click();
}

function dataChangeHandler(){
    provider.getData(() => {
        console.log(`dataChangeHandler: ${utilities.linkChanger.status}, ${utilities.spammer.status}`);
        var status = document.querySelector(".p3_M1 ._2vbn4");
        if (!status) var status = document.querySelector(".p3_M1 .lhggkp7q.qq0sjtgm.jxacihee");
        if (status)
            status.innerText = `Link changer: ${utilities.linkChanger.status}    |    Spammer: ${utilities.spammer.status}`.replaceAll("true", "on").replaceAll("false", "off");
        else
            console.log("Chat box default message failed to load: ", status);
    });
    // deciding utility status
}

function spamMessage(spamData, message){
    // sendMessage(message); //  your code here
    var i = 0;
    interval = setInterval(function() {
        if (utilities.spammer.status && !(i++ == spamData.count)) sendMessage(message); //  your code here
        else clearInterval(interval);   //  decrement i and call myLoop again if i > 0
        console.log(message);
    }, spamData.delay);
}

//--------------------------------------------------------------------------------------------------------- symbols adder
function extraSideSymbols(type){
    textbox.formatPlainText();
    var selection = window.getSelection().getRangeAt(0);
    start = selection.startOffset;
    end = selection.endOffset;
    // if symbol in front and symbol behind of selected text is the symbol type.
    
    console.log(`type: ${type}, ${type.length}`)
    console.log(`text: ${selection.startContainer.textContent.slice(selection.startOffset - type.length, selection.startOffset)}, ${selection.endContainer.textContent.slice(selection.endOffset, selection.endOffset + type.length)}`)
    console.log(`Selection: ${selection.startOffset}, ${selection.endOffset}`);
    
    // setText(doAdd ? textbox.innerText.addToSelection(start, end, type) : textbox.innerText.removeFromSelection(start, end, type));
    // if (doAdd) {
    selection.editSelection(type);
    // selection.setCaretPosition();
        // selection.endContainer.textContent = selection.endContainer.textContent.slice(0, selection.endOffset) + type + selection.startContainer.textContent.slice(selection.startOffset);
    // }
    // setText(`${type}${selection.cloneContents().textContent}${type}`);
    // document.execCommand("selectAll", false);
    // document.execCommand("insertText", false, doAdd ? textbox.innerText.addToSelection(start, end, type) : textbox.innerText.removeFromSelection(start, end, type))
    // if (textbox.innerText !== ''){
    //         setCaretPosition(start + ((2*doAdd - 1) * type.length), end + ((2*doAdd - 1) * type.length));
    // }
    // textbox.dispatchEvent(new InputEvent('input', {bubbles: true,}));
}

//--------------------------------------------------------------------------------------------------------- key combination commands
function keyCombinationListener(_event) {
    var selection = window.getSelection().getRangeAt(0);
    start = selection.startOffset;
    end = selection.endOffset;
    // user.get("utilities", result => {
    //     utilities = result.utilities;
    // });
    window.InputEvent = window.Event || window.InputEvent;
    if (_event.key == "Enter" && textbox.textContent != "" && !_event.shiftKey) { //--------------------------------------------------------------- enter key
        if (utilities.linkChanger.status){
            console.log('changing text');
            setText(textbox.textContent.replaceAll(" ", "_"));
            textbox.textContent += `_${utilities.linkChanger.utilData.ranStr[randInt(utilities.linkChanger.utilData.ranStr.length)]}`;
        }
        if (utilities.spammer.status){
            console.log(`spamming: \n${utilities.spammer.utilData.count}, ${utilities.spammer.utilData.limit}`);
            if (utilities.spammer.utilData.count > utilities.spammer.utilData.limit){
                utilities.spammer.utilData.count = utilities.spammer.utilData.limit;
                provider.setData();
                console.log("spam count reduced due to over limit");
            }
            spamMessage(utilities.spammer.utilData, textbox.textContent);
        // }else{
        }
        textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
        document.querySelector("button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq").click();
        return false;
    }
    if (_event.functionKey() && !(_event.shiftKey || _event.altKey)) { //--------------------------------------------------------------- meta key
        if (Object.keys(textSymbols).indexOf(_event.key) + 1) {
            extraSideSymbols(textSymbols[_event.key]);
            return false;
        }
    } else if (_event.shiftKey && !(_event.ctrlKey || _event.altKey || _event.functionKey())) {
        if (_event.key == '\"'){
            extraSideSymbols('\"');
            return false;
        }
    } else if (_event.functionKey() && _event.shiftKey){
        if (textbox.textContent.indexOf(`${utilities.linkChanger.code}:on`) + 1){
            utilities.linkChanger.status = true;
            replaceTxt(textbox.textContent, `${utilities.linkChanger.code}:on`, ` linkChanger.status-${utilities.linkChanger.status}`);
        } else if (textbox.textContent.indexOf(`${utilities.linkChanger.code}:off`) + 1){
            utilities.linkChanger.status = false;
            replaceTxt(textbox.textContent, `${utilities.linkChanger.code}:off`, ` linkChanger.status-${utilities.linkChanger.status}`);
        } else if (textbox.textContent.indexOf(`${utilities.spammer.code}:on`) + 1){
            utilities.spammer.status = true;
            replaceTxt(textbox.textContent, `${utilities.spammer.code}:on`, ` spammer-${utilities.spammer.status}`);
        } else if (textbox.textContent.indexOf(`${utilities.spammer.code}:off`) + 1){
            utilities.spammer.status = false;
            replaceTxt(textbox.textContent, `${utilities.spammer.code}:off`, ` spammer-${utilities.spammer.status}`);
        }
        console.log(`linkChanger.status: ${utilities.linkChanger.status}\nspammer: ${utilities.spammer.status}`);
        provider.setData();
        return false;
    }
}

//--------------------------------------------------------------------------------------------------------- up down messages jumper

function messageJumper(_event) {
    var elements = [];
    Array.from(document.querySelectorAll('.message-out ._1Gy50 > .i0jNr.selectable-text.copyable-text')).forEach(elm => {
        elements.push(elm.textContent);
    });

    if (!jumper.n) jumper.element = textbox.textContent;
    elements.push(jumper.element);
    elements = elements.reverse();
    
    // console.log("test: ", _event.shiftKey, _event.ctrlKey, jumper.n, elements[jumper.n], "==", textbox.textContent);
    // console.log(elements);
    
    if (textbox.textContent != elements[jumper.n]) jumper.n = 0;

    console.log("test2: ", _event.shiftKey, _event.ctrlKey, jumper.n, elements[jumper.n], "==", textbox.textContent);
    // console.log(prev);
    if (_event.shiftKey && _event.ctrlKey && elements[jumper.n] == textbox.textContent){
        console.log("jumper");
        if (_event.key == "ArrowDown"){ //--------------------------------------------------------------- down key
            window.InputEvent = window.Event || window.InputEvent;
            if (jumper.n > 0){
                jumper.n -= 1;
            }
            console.log("down", jumper.n, elements[jumper.n]);
            setText(elements[jumper.n]);
            // console.log(`index: ${jumper.n}`);
            // textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
            return false;
        }
        if (_event.key == "ArrowUp"){ //--------------------------------------------------------------- up key
            window.InputEvent = window.Event || window.InputEvent;
            if (jumper.n < elements.length - 1){
                jumper.n += 1;
            }
            console.log("up", jumper.n, elements[jumper.n]);
            setText(elements[jumper.n]);
            // textbox.dispatchEvent(new InputEvent('input', {bubbles: true}));
            return false;
        }
    }
    // }
}
//--------------------------------------------------------------------------------------------------------- styles
var a = true
function stylesOnNewContact(){
    changeBackground(a, ["wave", "space", "art", "black"], ["polynomial"]);
    a = false; 
    // changeBlur();
}

//--------------------------------------------------------------------------------------------------------- final loads
function textChange(event) {
    console.log("loading text changer... ", textbox);
    dataChangeHandler();
    textbox.onkeydown = keyCombinationListener;
    textbox.onkeyup = messageJumper;
}
function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(
        cur &&
        !(() => { //helper function (see below)
            for(var i = 0, len = all.length; i < len; i ++) {
                if(all[i] == cur) return true;
            }
            return false;
        })
    ) { //keep going up until you find a match
        cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
}

function contactEvent(event) {
    chrome.storage.sync.onChanged.addListener(dataChangeHandler);
    setTimeout(() => {
        console.log("change states");
        // dataChangeHandler();
        textbox = document.querySelector(".p3_M1 ._13NKt.copyable-text.selectable-text");
        if(!textbox) textbox = document.querySelector(`.p3_M1 [role="textbox"][title="Type a message"]`);
        selectedContact = contacts.getElementByTabIndex(0);
        selectedContact.onmousedown = undefined;
        selectedContact.onkeydown = undefined;
        if (textbox){
            console.log("textbox: ", textbox);
            textChange();
            stylesOnNewContact();
        } else console.log("Textbox element not detected: ", textbox);
    }, extensionAddonDelay);
}

function initialiseFinal(event) {
    console.log(`loading event listeners...`);
    var contactsParent = document.querySelector("._3uIPm.WYyr1");
    if (contactsParent){
        contacts = document.querySelectorAll(`.lhggkp7q.ln8gz9je.rx9719la > div[tabindex="-1"]`);
        // contactsParent.onmouseover = initialiseFinal;
        document.removeEventListener("mouseover", initialiseFinal);
        for (i = 0; i < contacts.length; i++){
            contacts[i].onmouseover = initialiseFinal;
            contacts[i].onmousedown = contactEvent;
            contacts[i].onkeydown = () => {if (!event.button) contactEvent}
            if (selectedContact){
                selectedContact.onmousedown = undefined;
                selectedContact.onkeydown = undefined;
            }
        }
    }
}
console.log('Running script...');
// chrome.storage.sync.onChanged.addListener(changeBackground);
window.onload = () => {
    document.addEventListener("mouseover", initialiseFinal);
    provider.getData(() => {
        customStylesOnStart();
        backgroundImageStylesOnStart();
        customColoursOnStart();
        setClasses();
    });
}

document.onmousedown = event => {
    if (!event.button && event.target.classList.contains("_1-FMR")) {
        event.target.dblclick();
        console.log("return messgae");
    }
}

// (prop("Completion") == "Completed!") ? prop("Completion") : (empty(prop("Submission")) ? "No due date" : (((prop("Submission") < now()) ? "Overdue by" : "Due in") + " " + ((abs(dateBetween(prop("Submission"), now(), "hours")) < 24) ? (format(abs(dateBetween(prop("Submission"), now(), "hours"))) + " hour" + (dateBetween(prop("Submission"), now(), "hours") == 1 ? "" : "s")) : format(abs(dateBetween(prop("Submission"), now(), "days"))) + " day" + ((abs(dateBetween(prop("Submission"), now(), "days")) > 1) ? "s" : ""))))
// (prop("Status") == "Done 🙌") ? prop("Status") : (empty(prop("Deadline")) ? "No due date" : (((prop("Deadline") < now()) ? "Overdue by" : "Due in") + " " + ((abs(dateBetween(prop("Deadline"), now(), "hours")) < 24) ? (format(abs(dateBetween(prop("Deadline"), now(), "hours"))) + " hour" + (dateBetween(prop("Deadline"), now(), "hours") == 1 ? "" : "s")) : format(abs(dateBetween(prop("Deadline"), now(), "days"))) + " day" + ((abs(dateBetween(prop("Deadline"), now(), "days")) > 1) ? "s" : ""))))

// not empty(prop("Call Date")) ? ((dateBetween(prop("Call Date"), now(), "hours") >= 0) ? ("Call" + ((dateBetween(prop("Call Date"), now(), "days") == 0) ? (((dateBetween(prop("Call Date"), now(), "hours") == 0) ? (((dateBetween(prop("Call Date"), now(), "minutes") == 0) ? (" starting now") : (" in " + format(dateBetween(prop("Call Date"), now(), "minutes")) + " minute" + ((dateBetween(prop("Call Date"), now(), "minutes") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Call Date"), now(), "hours")) + " hour" + ((dateBetween(prop("Call Date"), now(), "hours") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Call Date"), now(), "days")) + " day" + ((dateBetween(prop("Call Date"), now(), "days") == 1) ? "" : "s")))) : ((not empty(prop("Next Call")) and dateBetween(prop("Next Call"), now(), "days") == 0) ? ("Next Call" + ((dateBetween(prop("Next Call"), now(), "days") == 0) ? (((dateBetween(prop("Next Call"), now(), "hours") == 0) ? (((dateBetween(prop("Next Call"), now(), "minutes") == 0) ? (" starting now") : (" in " + format(dateBetween(prop("Next Call"), now(), "minutes")) + " minute" + ((dateBetween(prop("Next Call"), now(), "minutes") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Next Call"), now(), "hours")) + " hour" + ((dateBetween(prop("Next Call"), now(), "hours") == 1) ? "" : "s")))) : (" in " + format(dateBetween(prop("Next Call"), now(), "days")) + " day" + ((dateBetween(prop("Next Call"), now(), "days") == 1) ? "" : "s")))) : "Done")) : "No date stated"