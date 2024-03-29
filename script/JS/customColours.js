function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : `255, 0, 0`;
}

const customColoursElement = document.createElement("style");
document.head.appendChild(customColoursElement);
customColoursElement.id = "custom-colours";
const customColours = customColoursElement.sheet;

const customMetaHeader = document.createElement("meta");
customMetaHeader.name = "theme-color";
document.head.append(customMetaHeader);

let themeNumber;

function coloursAdd() {
    themeNumber = provider.userData.theme.theme;
    let blurValue = provider.userData.appearance.blurValue;
    let main = themeSelection[themeNumber].main;
    let theme = themeSelection[themeNumber].theme;
    let tran = themeSelection[themeNumber].tran;
    let msg = themeSelection[themeNumber].message;
    let text = themeSelection[themeNumber].text;
    let background = themeSelection[themeNumber].background;

    for (const m of document.querySelectorAll("meta[name='theme-color']")) m.content = background.secondary;

    console.log("theme: ", themeNumber);

    if (customColours.cssRules.length) for (let i = 0; i < customColours.cssRules.length; i++) customColours.deleteRule(0);

    let colourVariables = [
        `html[dir] body.custom, html[dir] body :before {
            /* startup background */
            --startup-background: ${background.darker};
            --startup-background-rgb: ${hexToRgb(background.darker)};
            --app-background: ${background.darker};
            --border-panel: ${background.darker};

            /* messages */ 
            --outgoing-background: ${msg.send}${tran.unBlur};
            --outgoing-background-rgb: ${hexToRgb(msg.send)};
            --outgoing-background-deeper: ${main.theme}${tran.overlayLight};
            --icon-ack: ${msg.statusRead};
            --bubble-meta-icon: ${msg.statusSent};
            --inverse: ${main.grey}${tran.overlay};
            --inverse-rgb: ${hexToRgb(main.grey)};
            --audio-process-incoming: ${theme.light};
            --incoming-background: ${msg.receive}${tran.unBlur};
            --incoming-background-rgb: ${hexToRgb(msg.receive)};
            --incoming-background-deeper: ${main.theme}${tran.overlayLight};
            --message-primary: ${text.primary};
            --audio-track-outgoing: ${main.theme}${tran.overlay};
            --audio-track-incoming: ${main.theme}${tran.overlay};
            --audio-control-outgoing: ${main.contrast}${tran.overlay};
            --audio-control-incoming: ${main.contrast}${tran.overlay};
            --reactions-bubble-border:  ${main.transparent};
            --ptt-draft-waveform-background: ${main.transparent};
            --button-bubble: ${theme.light};
            --round-entry-point-background-color: ${main.theme}${tran.unBlur};
            --quick-action-button-background: ${main.theme}${tran.unBlur};
            --poll-bar-fill-receiver: ${main.contrast}${tran.overlayHeavy};
            --poll-bar-fill-sender: ${main.contrast}${tran.overlayHeavy};

            /* unread bar */
            --unread-background: ${background.secondary}${tran.overlay};
            --unread-bar-background: ${background.secondary}${tran.overlayHeavy};

            /* message screen */
            --conversation-panel-border: ${main.transparent};
            --conversation-panel-background: ${background.darker};
            --intro-background: ${background.darker};
            --intro-border: ${theme.primary};
            --notification-e2e-background: ${background.dark}${tran.unBlur};
            --system-message-background: ${background.dark}${tran.unBlur};
            
            /* message bar */
            --compose-input-background: ${main.theme}${tran.overlayLight};
            --compose-input-border: ${main.transparent};
            --compose-panel-background: ${main.transparent};
            --rich-text-panel-background: ${background.secondary}${tran.unBlur};
            --popup-panel-background: ${main.theme}${tran.overlayLight};
            --panel-input-background: ${background.primary}${tran.unBlur};
            --media-editor-image-caption-input-background: ${main.theme}${tran.overlay};
            --active-tab-marker: ${theme.lighter}${tran.overlayHeavy};
            --sticker-button-background: ${main.theme}${tran.overlay};
            
            /* messages background */
            --thumb-border-viewer-active: ${main.contrast}${tran.overlayLighter};
            --thumb-border-viewer-active-rgb: ${main.contrast};

            /* contact bar / contact header */
            --panel-header-background: ${background.secondary}${tran.unBlur};
            --conversation-header-border: ${main.transparent};
            
            /* selector bar */
            --panel-background: ${background.secondary}${tran.unBlur};

            /* message info */
            --drawer-section-background: ${theme.primary}${tran.overlayLight};
            --input-button-more: ${theme.link};
            
            /* contact/chat list */
            --background-default: ${background.dark};
            --background-default-active: ${main.contrast}${tran.overlayLighter};
            --background-default-hover: ${main.contrast}${tran.overlayLightest};
            --chatlist-icon: ${main.contrast}${tran.overlayLight};
            --border-list: ${main.contrast}${tran.overlayLighter};
            --border-stronger: ${main.transparent};
            --avatar-placeholder-background: ${main.contrast}${tran.overlayLighter};
            --avatar-placeholder-primary: ${main.grey}${tran.overlayLight};
            --search-input-background: ${main.theme}${tran.overlayLight};
            --search-container-background: ${background.darker};
            --search-input-container-background: ${background.secondary};
            --search-input-container-background-active: ${background.secondary};
            --panel-background-colored-deeper: ${background.secondary};
            --butterbar-connection-background: ${background.secondary};
            --butterbar-connection-icon: ${theme.light};
            --butterbar-update-background: ${background.secondary};
            --butterbar-notice-smb-background: ${background.secondary};
            --butterbar-default-background: ${background.dark};
            --butterbar-notification-icon: ${theme.light};
            
            /* settings side menu */
            --panel-background-colored: ${background.secondary};
            --drawer-background-deep: ${background.darker}${tran.unBlur};
            --border-panel: ${background.darker}${tran.unBlur};
            --drawer-gallery-background: ${background.dark};
            --drawer-gallery-background-hover: ${main.contrast}${tran.overlayLighter};
            --photopicker-overlay-background: ${main.theme}${tran.overlay};

            /* popup media screen */
            --media-viewer-background: ${background.darker}${tran.unBlur};
            --panel-background: ${background.secondary};
            --panel-background-deeper: ${background.darker}${tran.unBlur};
            --panel-background-lighter: ${background.primary}${tran.overlayLight};
            --modal-backdrop: ${background.darker}${tran.unBlur};
            --modal-backdrop-solid: ${background.darker};
            --modal-background: ${main.contrast}${tran.overlayLighter};
            --chevron-button-background: ${main.contrast}${tran.overlayLighter};
            --button-background-disabled: ${main.theme}${tran.overlayLight};
            --media-editor-thumb-border-active: ${theme.light};
            --reactions-details-background-hover: ${main.contrast}${tran.overlayLighter};
            --reactions-panel-background-color: ${main.transparent};

            /* media thumbnail */
            --media-gallery-thumb-background: ${main.contrast}${tran.overlayLighter};
            
            /* progress indicator */
            --progress-primary: ${theme.primary};
            --progress-primary-rgb: ${hexToRgb(theme.primary)};
            --progress-background: ${background.darker}${tran.unBlur};

            /* buttons */
            --button-round-background: ${theme.lighter}${tran.overlay};
            --button-secondary: ${theme.lighter}${tran.overlayHeavy};
            --button-secondary-border: ${theme.lighter}${tran.overlay};
            --button-secondary-hover: ${theme.lighter}${tran.overlay};
            --button-primary: ${text.primary};
            --button-primary-background: ${theme.lighter}${tran.overlay};
            --button-primary-background-hover: ${theme.lighter}${tran.overlay};
            --ptt-draft-button-send-hover: ${main.contrast}${tran.overlayLighter};
            --ptt-draft-button-send: ${main.transparent};
            --button-plain-background: ${theme.light}${tran.overlay};
            --button-plain-background-hover: ${theme.lighter}${tran.overlay};

            /* switches */
            --switch-button-color: ${main.contrast}${tran.overlay};
            --switch-track-color: ${main.grey}${tran.overlay};
            --switch-button-checked-color: ${theme.lighter};
            --switch-track-checked-color: ${theme.primary};
            
            /* status screen */
            --status-background: ${background.darker}${tran.unBlur};
            --status-background-hover: ${main.theme}${tran.overlayLight};
            --status-primary: ${text.primary};
            
            /* popup */
            --reactions-tray-background: ${background.primary}${tran.unBlur};
            --dropdown-background: ${background.primary}${tran.unBlur};
            --dropdown-background-hover: ${main.contrast}${tran.overlayLighter};
            --pip-manager-content: ${background.darker}${tran.unBlur};
            --picker-background: ${background.primary}${tran.unBlur};
            --reactions-details-background: ${background.primary}${tran.unBlur};
            --tooltip-background: ${background.primary}${tran.unBlur};
            --compose-panel-background-hover: ${main.contrast}${tran.overlayLighter};

            /* floating notification */
            --toast-background: ${background.primary}${tran.unBlur};

            /* primary colours / svg icon colours */
            --icon-fixed: ${main.contrast}${tran.overlay};
            --icon-search-back: ${theme.light};
            --icon-bright-highlight: ${theme.light};
            --icon-high-emphasis: ${theme.light};
            --icon-lighter: ${main.contrast}${tran.overlayLight};
            --icon-pinned: ${main.contrast}${tran.overlay};
            --unread-marker-background: ${theme.lighter};
            --unread-timestamp: ${theme.light};
            --teal: ${theme.lighter};
            --teal-pale: ${theme.lighter};
            --teal-lighter: ${theme.lighter};
            --round-icon-background: ${theme.light};
            --typing: ${theme.light};
            --spinner-highlight: ${theme.light};
            --ptt-draft-button-stop: ${theme.light};
            --ptt-draft-button-stop-hover: ${theme.lighter};
            --menu-tabs-list-active: ${theme.lighter};
            --highlight: ${theme.light};
            --svg-gray-button: ${main.grey}${tran.overlay};
            --svg-icon-theme-primary: ${theme.primary};
            --svg-icon-theme-light: ${theme.light};
            --svg-icon-theme-lighter: ${theme.lighter};
            --svg-icon-main-white: ${main.contrast}${tran.overlay};
            --media-editor-icon-color: ${main.contrast}${tran.overlay};
            --panel-header-icon: ${main.contrast}${tran.overlay};
            --checkbox-background: ${theme.lighter};
            --round-icon-background: ${theme.light};
            --input-empty-value-placeholder: ${theme.light};
            --butterbar-update-icon: ${theme.light};
            --beta-tag-background: ${theme.light};
            --chat-marker-background: ${theme.light}${tran.overlayHeavy};
            --quick-action-button: ${main.contrast}${tran.overlay};
            --reaction-button: ${main.contrast}${tran.overlay};
            --reactions-picker-bg: ${main.contrast}${tran.overlayLighter};
            
            /* other colours */
            --danger: ${theme.danger};
            --link: ${theme.link};
            --mention-at-symbol: ${theme.link};
            --icon: ${main.contrast}${tran.overlay};
            
            /* text input light */
            --input-border-active: ${theme.light}${tran.overlayLight};

            /* security */
            --security-icon-lock: ${theme.light}${tran.overlay};
            --security-icon-shield: ${background.darker}${tran.overlayLight};
            --security-icon-background: ${theme.primary};

            /* side audio popup */
            --ptt-ooc-background: ${background.secondary}${tran.unBlur};
            --ptt-draft-button-play-pause-out-of-chat: ${main.contrast}${tran.overlay};

            /* other text colours */
            --primary: ${text.primary};
            --primary-title: ${theme.light};
            --compose-primary: ${text.primary};
            --primary-muted: ${text.secondary};
            --primary-strong: ${text.primary};
            --primary-strong-rgb: ${hexToRgb(text.primary.substring(0, 7))};
            --primary-stronger: ${text.secondary};
            --primary-strongest: ${text.primary};
            --secondary: ${text.tertiary};
            --secondary-light: ${text.secondary};
            --secondary-lighter: ${text.tertiary};
            --secondary-stronger: ${text.secondary};
            --text-muted: ${text.tertiary};
            --text-secondary-lighter: ${text.secondary};
            --unread-marker-text: ${text.contrast};
            --chat-meta: ${text.tertiary};
            --bubble-meta: ${text.secondary};
            --status-secondary: ${text.secondary};
            --quoted-message-text: ${text.secondary};
            --drawer-header-title: ${text.primary};
            --link-preview: ${text.secondary};
            --link-preview-light: ${text.tertiary};
            --link-preview-lighter: ${text.tertiary};
            --system-message-text: ${text.secondary};
            --chat-marker-admin: ${text.contrast};
            --tooltip-text: ${text.secondary};
            --input-placeholder: ${text.secondary};
        }`,
        `html[dir] body.custom.blur {
            --outgoing-background: ${msg.send}${tran.blur};
            --incoming-background: ${msg.receive}${tran.blur};
            --unread-bar-background: ${background.secondary}${tran.overlay};
            --round-entry-point-background-color: ${main.theme}${tran.blur};
            --quick-action-button-background: ${main.theme}${tran.blur};
            --notification-e2e-background: ${background.dark}${tran.blur};
            --system-message-background: ${background.dark}${tran.blur};
            --rich-text-panel-background: ${background.secondary}${tran.blur};
            --panel-input-background: ${background.primary}${tran.blur};
            --panel-header-background: ${background.secondary}${tran.blur};
            --panel-background: ${background.secondary}${tran.blur};
            --drawer-background-deep: ${background.darker}${tran.blur};
            --border-panel: ${background.darker}${tran.blur};
            --media-viewer-background: ${background.darker}${tran.blur};
            --panel-background-deeper: ${background.darker}${tran.blur};
            --modal-backdrop: ${background.darker}${tran.blur};
            --progress-background: ${background.darker}${tran.blur};
            --status-background: ${background.darker}${tran.blur};
            --reactions-tray-background: ${background.primary}${tran.blur};
            --dropdown-background: ${background.primary}${tran.blur};
            --pip-manager-content: ${background.darker}${tran.blur};
            --picker-background: ${background.primary}${tran.blur};
            --reactions-details-background: ${background.primary}${tran.blur};
            --tooltip-background: ${background.primary}${tran.blur};
            --toast-background: ${background.primary}${tran.blur};
            --ptt-ooc-background: ${background.secondary}${tran.blur};
        }`,
        `html[dir] body {
            /* shadow colour */
            --shadow-own: #000000${tran.overlayLighter};
            --shadow-own-rgb: ${hexToRgb("#000000")};
            --danger-fade: ${theme.danger}${tran.overlay};
            --input-border: ${main.grey}${tran.overlayLight};
            --input-border-active: 00a884${tran.overlayLight};
            --blur-radius-thumbnail: ${blurValue.lighter};
            --radius-thumb: 12px;
        }`,
        // profile pageQ
        `html[dir] .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area, html[dir] .se2m7z6i {
            background: ${background.darker}bb;
        }`,
        // emoji menu & message not sent/couldnt send message menu
        `html[dir] body .o--vV.B_YVs._24No0, html[dir=ltr] body ._1y99G, body ._2nY6U._3C4Vf ._37FrU {
            color: ${text.secondary};
        }`,
        // media message
        `html[dir] body ._3vRLq {
            background-color: ${main.contrast}${tran.overlayLighter};
        }`,
        // button, checkbox
        `html[dir] body div[data-testid*="popup"]:not([data-testid*="multi"]) div[role="button"]:hover, html:not([dir='rtl']) body .s2vc4xk1:hover {
            background-color: ${main.contrast}${tran.overlayLighter};
        }`,
        `html[dir] body ._2mQtw {
            background-color: ${background.secondary};
        }`
    ];
    for (i in colourVariables) {
        customColours.insertRule(colourVariables[i], i);
    };
    setTimeout(() => {
        document.body.classList.toggle("dark", themeSelection[themeNumber].isDark);
        document.body.classList.toggle("light", !themeSelection[themeNumber].isDark);
    }, 100);
}