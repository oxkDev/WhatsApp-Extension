// var blurFields = [["/*", "*/", "ee"], ["", "", "b0"]];
// var blr = blurFields[+true];
var backgroundImg = {
    // erythrite
    pink1: {
        link: "https://i.pinimg.com/564x/f0/93/53/f09353ea441a92997606810a61bf0ef9.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["erythrite", "pink"],
    },
    pink2: {
        link: "https://i.pinimg.com/564x/45/b0/ba/45b0ba6f1601c840918821796dba958a.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["erythrite", "pink"],
    },
    pinkEiffelTower: {
        link: "https://i.pinimg.com/564x/42/99/d5/4299d550ef9b9f0b8c82e63803794d58.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["erythrite", "pink"],
    },
    pinkheartsRepeatable: {
        link: "https://i.pinimg.com/564x/15/f8/e4/15f8e4ee3a386164ca18fa04c7df40d4.jpg",
        size: "auto",
        repeat: "repeat",
        tags: ["erythrite", "pink", "pattern"],
    },

    // others
    pinkPurpleBlueFluidPaint: {
        link: "https://wallpaperaccess.com/full/2245332.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["fluidPaint", "blue", "pink", "black", "Purple"],
    },
    orangeBlackBlueFluidPaint: {
        link: "https://wallpaperaccess.com/full/2361576.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["fluidPaint", "blue", "orange", "black"],
    },
    orangeBlueFluidPaint: {
        link: "https://wallpaperaccess.com/full/1836721.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["fluidPaint", "blue", "orange"],
    },
    darkBluePurpleFluidPaint: {
        link: "https://wallpaperaccess.com/full/2064925.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["fluidPaint", "blue", "purple"],
    },
    greenBlueFluidPaint: {
        link: "https://wallpaperaccess.com/full/136866.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["fluidPaint", "green", "blue"],
    },
    blueFabricWave: {
        link: "https://wallpaperaccess.com/full/5934471.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["fabric", "wave"],
    },
    earthSurface: {
        link: "https://wallpaperaccess.com/full/5934395.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["space", "blue", "black"],
    },
    eclipseSpace: {
        link: "https://wallpaperaccess.com/full/19605.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["space", "blue", "black"],
    },
    earthTop: {
        link: "https://wallpaperaccess.com/full/19607.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["space", "blue", "black"],
    },
    lightBlueTwoDimentionalWave: {
        link: "https://wallpaperaccess.com/full/5934397.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["2d", "wave", "blue", "pink"],
    },
    blackPolynomial: {
        link: "https://wallpaperaccess.com/full/5509779.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["black", "polynomial"],
    },
    bluePowderSplash: {
        link: "https://wallpaperaccess.com/full/5441840.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["black", "blue", "powder"],
    },
    bluePinkFadyWaves: {
        link: "https://wallpaperaccess.com/full/7522312.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["2d", "wave", "blue", "pink", "purple"],
    },
    redBlackWaves: {
        link: "https://wallpaperaccess.com/full/7522400.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["wave", "red", "black"],
    },
    linePaths: {
        link: "https://wallpaperaccess.com/full/7522179.jpg",
        size: "cover",
        repeat: "no-repeat",
        tags: ["2d", "black", "blue", "red", "pink"],
    },
    windows11: {
        link: "https://wallpaperaccess.com/full/6233787.jpg",
        repeat: "no-repeat",
        size: "cover",
        tags: ["wave", "blue", "black"],
    },
    montery: {
        link: "https://media.idownloadblog.com/wp-content/uploads/2021/06/macOS-Monterey-wallpaper-Dark.jpg",
        repeat: "no-repeat",
        size: "cover",
        tags: ["wave", "2d", "purple", "pink", "red"],
    },
    bluePinkTwoDimentionalWaves: {
        link: "https://i.redd.it/52f61nfzmwl51.jpg",
        repeat: "no-repeat",
        size: "cover",
        tags: ["blue", "pink", "2d", "wave"],
    },
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : `255, 0, 0`;
}

var styleElement = document.createElement("style");
document.head.appendChild(styleElement);
var customStyles = styleElement.sheet;
// colours
function stylesOnStart(){
    var blurValue = utilities.styles.utilData.blurValue;
    var main = utilities.styles.utilData.main;
    var theme = utilities.styles.utilData.theme;
    var tran = utilities.styles.utilData.tran;
    var msg = utilities.styles.utilData.message;
    var text = utilities.styles.utilData.text;
    var background = utilities.styles.utilData.background;

    styleVariables = [
        `html[dir] body.dark {
            /* startup background */
            --startup-background: ${background.darker};
            --startup-background-rgb: ${hexToRgb(background.darker)};
            --app-background: ${background.darker};
            --border-panel: ${background.darker};

            /* messages */ 
            --outgoing-background: ${msg.send}${tran.unBlur};
            --outgoing-background-rgb: ${hexToRgb(msg.send)};
            --outgoing-background-deeper: ${main.black}${tran.overlayLight};
            --icon-ack: ${msg.status.read};
            --bubble-meta-icon: ${msg.status.sent};
            --inverse: ${main.white}${tran.overlay};
            --audio-process-incoming: #5e94b4;
            --incoming-background: ${msg.receive}${tran.unBlur};
            --incoming-background-rgb: ${hexToRgb(msg.receive)};
            --incoming-background-deeper: ${main.black}${tran.overlayLight};
            --message-primary: ${text.primary};
            --audio-track-outgoing: ${main.black}${tran.overlay};
            --audio-track-incoming: ${main.black}${tran.overlay};
            --audio-control-outgoing: ${main.white}${tran.overlay};
            --audio-control-incoming: ${main.white}${tran.overlay};
            --reactions-bubble-border:  ${main.transparent};
            --ptt-draft-waveform-background: ${main.transparent};
            --button-bubble: ${theme.light};
            --round-entry-point-background-color: ${main.black}${tran.unBlur};
            --quick-action-button-background: ${main.black}${tran.unBlur};

            /* unread bar */
            --unread-background: ${theme.secondary}${tran.overlay};
            --unread-bar-background: ${theme.secondary}${tran.overlayHeavy};

            /* message screen */
            --conversation-panel-border: ${main.transparent};
            --conversation-panel-background: ${background.darker};
            --intro-background: ${background.darker};
            --intro-border: ${theme.primary};
            --notification-e2e-background: ${background.dark}${tran.unBlur};
            --system-message-background: ${background.dark}${tran.unBlur};
            
            /* message bar */
            --compose-input-background: ${main.black}${tran.overlayLight};
            --compose-input-border: ${main.transparent};
            --compose-panel-background: ${main.transparent};
            --rich-text-panel-background: ${theme.secondary}${tran.unBlur};
            --popup-panel-background: ${main.black}${tran.overlay};
            --panel-input-background: ${background.primary}${tran.unBlur};
            --media-editor-image-caption-input-background: ${main.black}${tran.overlay};
            --active-tab-marker: ${theme.lighter}${tran.overlayHeavy};
            --sticker-button-background: ${main.black}${tran.overlay};
            
            /* messages background */
            --thumb-border-viewer-active: ${main.white}${tran.overlayLighter};
            --thumb-border-viewer-active-rgb: ${main.white};

            /* contact bar / contact header */
            --panel-header-background: ${theme.secondary}${tran.unBlur};
            --conversation-header-border: ${main.transparent};
            
            /* selector bar */
            --panel-background: ${theme.secondary}${tran.unBlur};

            /* message info */
            --drawer-section-background: ${theme.primary}${tran.overlayLight};
            --input-button-more: ${theme.link};
            
            /* contact/chat list */
            --background-default: ${background.dark};
            --background-default-active: ${main.grey}20;
            --background-default-hover: ${main.grey}10;
            --chatlist-icon: ${main.white}${tran.overlayLight};
            --border-list: ${main.white}${tran.overlayLighter};
            --border-stronger: ${main.transparent};
            --avatar-placeholder-background: ${main.white}${tran.overlayLighter};
            --avatar-placeholder-primary: ${main.grey}${tran.overlayLight};
            --search-input-background: ${main.black}${tran.overlayLight};
            --search-container-background: ${background.darker};
            --search-input-container-background: ${theme.secondary};
            --search-input-container-background-active: ${theme.secondary};
            --panel-background-colored-deeper: ${theme.secondary};
            --butterbar-connection-background: ${theme.secondary};
            --butterbar-connection-icon: ${theme.light};
            --butterbar-update-background: ${theme.secondary};
            --butterbar-notice-smb-background: ${theme.secondary};
            --butterbar-default-background: ${background.dark};
            --butterbar-notification-icon: ${theme.light};
            
            /* settings side menu */
            --panel-background-colored: ${theme.secondary};
            --drawer-background-deep: ${background.darker}${tran.unBlur};
            --border-panel: ${background.darker}${tran.unBlur};
            --drawer-gallery-background: ${background.dark};
            --drawer-gallery-background-hover: ${main.white}${tran.overlayLighter};
            --photopicker-overlay-background: ${main.black}${tran.overlay};

            /* popup media screen */
            --media-viewer-background: ${background.darker}${tran.unBlur};
            --panel-background: ${theme.secondary};
            --panel-background-deeper: ${background.darker}${tran.unBlur};
            --panel-background-lighter: ${background.primary}${tran.overlayLight};
            --modal-backdrop: ${background.darker}${tran.unBlur};
            --modal-backdrop-solid: ${background.darker};
            --modal-background: ${main.white}${tran.overlayLighter};
            --chevron-button-background: ${main.white}${tran.overlayLighter};
            --button-background-disabled: ${main.black}${tran.overlayLight};
            --media-editor-thumb-border-active: ${theme.light};

            /* media thumbnail */
            --media-gallery-thumb-background: ${main.white}${tran.overlayLighter};
            
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
            --ptt-draft-button-send-hover: ${main.white}${tran.overlayLighter};
            --ptt-draft-button-send: ${main.transparent};
            --button-plain-background: ${theme.light}${tran.overlay};
            --button-plain-background-hover: ${theme.lighter}${tran.overlay};

            /* switches */
            --switch-button-color: ${main.white}${tran.overlay};
            --switch-track-color: ${main.grey}${tran.overlay};
            --switch-button-checked-color: ${theme.lighter};
            --switch-track-checked-color: ${theme.primary};
            
            /* status screen */
            --status-background: ${background.darker}${tran.unBlur};
            --status-background-hover: ${main.black}${tran.overlayLight};
            --status-primary: ${text.primary};
            
            /* popup */
            --reactions-tray-background: ${background.primary}${tran.unBlur};
            --dropdown-background: ${background.primary}${tran.unBlur};
            --dropdown-background-hover: ${main.white}${tran.overlayLighter};
            --pip-manager-content: ${background.darker}${tran.unBlur};
            --picker-background: ${background.primary}${tran.unBlur};
            --reactions-details-background: ${background.primary}${tran.unBlur};
            --tooltip-background: ${background.primary}${tran.unBlur};
            --compose-panel-background-hover: ${main.white}${tran.overlayLighter};

            /* floating notification */
            --toast-background: ${background.primary}${tran.unBlur};

            /* primary colours / svg icon colours */
            --icon-fixed: ${main.white}${tran.overlay};
            --icon-search-back: ${theme.light};
            --icon-bright-highlight: ${theme.light};
            --icon-high-emphasis: ${theme.light};
            --icon-lighter: ${main.white}${tran.overlayLight};
            --icon-pinned: ${main.white}${tran.overlay};
            --unread-marker-background: ${theme.lighter};
            --unread-timestamp: ${theme.light};
            --teal: ${theme.lighter};
            --teal-lighter: ${theme.lighter}
            --round-icon-background: ${theme.light};
            --typing: ${theme.light};
            --spinner-highlight: ${theme.light};
            --ptt-draft-button-stop: ${theme.light};
            --ptt-draft-button-stop-hover: ${theme.lighter};
            --menu-tabs-list-active: ${theme.lighter};
            --highlight: ${theme.light};
            --svg-gray-button: ${theme.grey}${tran.overlay};
            --svg-icon-theme-primary: ${theme.primary};
            --svg-icon-theme-light: ${theme.light};
            --svg-icon-theme-lighter: ${theme.lighter};
            --svg-icon-main-white: ${main.white}${tran.overlay};
            --media-editor-icon-color: ${main.white}${tran.overlay};
            --panel-header-icon: ${main.white}${tran.overlay};
            --checkbox-background: ${theme.lighter};
            --round-icon-background: ${theme.light};
            --input-empty-value-placeholder: ${theme.light};
            --butterbar-update-icon: ${theme.light};
            --beta-tag-background: ${theme.light};
            --chat-marker-background: ${theme.light}${tran.overlayHeavy};
            --reactions-picker-bg: ${main.white}${tran.overlayLighter};
            
            /* other colours */
            --danger: ${theme.danger};
            --link: ${theme.link};
            --mention-at-symbol: ${theme.link};
            --icon: ${main.white}${tran.overlay};
            
            /* text input light */
            --input-border-active: ${theme.light}${tran.overlayLight};

            /* security */
            --security-icon-lock: ${theme.light}${tran.overlay};
            --security-icon-shield: ${background.darker}${tran.overlayLight};
            --security-icon-background: ${theme.primary};

            /* side audio popup */
            --ptt-ooc-background: ${theme.secondary}${tran.unBlur};
            --ptt-draft-button-play-pause-out-of-chat: ${main.white}${tran.overlay};

            /* other text colours */
            --primary: ${text.primary};
            --primary-title: ${theme.light};
            --compose-primary: ${text.primary};
            --primary-muted: ${text.secondary};
            --primary-strong: ${text.primary};
            --primary-strong-rgb: ${hexToRgb(text.primary.substring(0, 7))};
            --primary-stronger: ${text.secondary};
            --primary-strongest: ${text.primary};
            --secondary: ${text.tersary};
            --secondary-stronger: ${text.secondary};
            --text-muted: ${text.tersary}
            --text-secondary-lighter: ${text.secondary};
            --unread-marker-text: ${text.contrast};
            --chat-meta: ${text.tersary};
            --bubble-meta: ${text.secondary};
            --status-secondary: ${text.secondary};
            --quoted-message-text: ${text.secondary};
            --drawer-header-title: ${text.primary};
            --link-preview: ${text.secondary};
            --link-preview-light: ${text.tersary};
            --link-preview-lighter: ${text.tersary};
            --system-message-text: ${text.secondary};
            --chat-marker-admin: ${text.contrast};
            --tooltip-text: ${text.secondary};
            --input-placeholder: ${text.secondary};
        }`,
        `html[dir] body.dark.blur {
            --outgoing-background: ${msg.send}${tran.blur};
            --incoming-background: ${msg.receive}${tran.blur};
            --unread-bar-background: ${theme.secondary}${tran.overlay};
            --round-entry-point-background-color: ${main.black}${tran.blur};
            --quick-action-button-background: ${main.black}${tran.blur};
            --notification-e2e-background: ${background.dark}${tran.blur};
            --system-message-background: ${background.dark}${tran.blur};
            --rich-text-panel-background: ${theme.secondary}${tran.blur};
            --panel-input-background: ${background.primary}${tran.blur};
            --panel-header-background: ${theme.secondary}${tran.blur};
            --panel-background: ${theme.secondary}${tran.blur};
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
            --ptt-ooc-background: ${theme.secondary}${tran.blur};
        }`,
        `html[dir] body {
            /* shadow colour */
            --shadow-own: #000000${tran.overlayLighter};
            --shadow-own-rgb: ${"#000000"};
            --danger-fade: ${theme.danger}${tran.overlay};
            --input-border: ${main.grey}${tran.overlayLight};
            --input-border-active: 00a884${tran.overlayLight};
            --blur-radius-thumbnail: ${blurValue.lighter};
            --radius-thumb: 12px;
        }`
    ];

    blurRules = [
        `@keyframes imageFadeInBlur {
            0% {
                filter: none;
                opacity: 0;
            }
            30% {
                filter: none;
            }
            70% {
                opacity: 1;
            }
            100% {
                filter: blur(${blurValue.heavy});
            }
        }`,
        `@keyframes backgroundFadeInBlur {
            0% {
                backdrop-filter: none;
                opacity: 0;
            }
            30% {
                backdrop-filter: none;
            }
            70% {
                opacity: 1;
            }
            100% {
                backdrop-filter: blur(${blurValue.heavy});
            }
        }`,
        `@keyframes fadeInSlideUpBlur {
            0% {
                opacity: 0;
                backdrop-filter: none;
                transform: translateY(25px);
            }
            30%{
                backdrop-filter: none;
            }
            70%{
                opacity: 1;
            }
        }`,
        `@keyframes onWhatsAppLoadBlur {
            0% {
                backdrop-filter: blur(${blurValue.heavy});
                background: var(--startup-background);
            }
            100% {
                background: transparent;
            }
        }`,
        `@keyframes delayedFadeInScaleUpBlur {
            0% {
                backdrop-filter: blur(${blurValue.medium});
                opacity: 0;
                transform: scale(0.95);
            }
            40% {
                opacity: 0;
                transform: scale(0.95);
                backdrop-filter: blur(${blurValue.medium});
            }
            60% {
                backdrop-filter: blur(${blurValue.medium});
            }
            90% {
                opacity: 1;
            }
        }`,
        `@keyframes delayedFadeInScaleUpSmallBlur {
            0% {
                backdrop-filter: none;
                opacity: 0;
                transform: scale(0.5);
            }
            40% {
                opacity: 0;
                transform: scale(0.5);
                backdrop-filter: none;
            }
            60% {
                backdrop-filter: none;
            }
            90% {
                opacity: 1;
            }
        }`,
        `@keyframes fadeInScaleUpSmallBlur {
            0% {
                opacity: 0;
                transform: scale(0.5);
                backdrop-filter: none;
            }
            30% {
                backdrop-filter: none;
            }
            70% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
        }`,
        `@keyframes scaleUpSmall {
            0% {
                transform: scale(0.1);
            }
        }`,
        `@keyframes fadeBlurIn {
            0% {
                backdrop-filter: none;
                background: ${main.transparent};
            }
        }`,
        `html[dir] body.blur ._3Hudz, html[dir] body.blur ._2B4d4, html[dir] body.blur ._3J6wB, html[dir=ltr] body.blur ._9-YHG, html[dir] body.blur .overlay._3IBSU, html[dir] body.blur .ej3x2kt, html[dir] body.blur ._2M_x0, html[dir] body.blur ._1bLj8 div.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0 {
            backdrop-filter: blur(${blurValue.heavy});
        }`,
        `html[dir] body.blur ._2BU3P.tm2tP.copyable-area, html[dir] body.blur ._23P3O, html[dir] body.blur .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, html:not([dir='rtl']) body.blur .kfr1vweg, html[dir] body.blur .o--vV, html[dir=ltr] body.blur ._1y99G, html[dir] body.blur .f09rd1o5, html[dir] body.blur ._2A-Ve, html[dir="ltr"] body.blur div[class=""] .cm280p3y.ln8gz9je.gc15jzxb.eujn52yf, html[dir] body.blur ._3r7AV, body.blur ._3CRhO, html[dir] .OVz7E, html[dir=ltr] body.blur ._1fLGu, html[dir] body.blur div.landing-window, html[dir=ltr] body.blur ._5ML0C {
            backdrop-filter: blur(${blurValue.medium});
        }`,
        `html[dir=ltr] body.blur ._2JUrU._2ecOY ._3OC33, html[dir] body.blur .Nm1g1._22AX6, html[dir] body.blur ._2VSMU, html[dir] body.blur ._3nQGi, html[dir] body.blur ._3t1CR, html[dir=ltr] body.blur .EtBAv, html[dir=ltr] body.blur .i_Uj-, html[dir] body.blur ._1w-Ol, html:not([dir='rtl']) body.blur .fahkg6u0, html[dir] body.blur ._1GLVO, html[dir] body.blur ._2JUrU ._3OC33, html[dir] body.blur ._2JUrU ._3Lby7, html[dir] body.blur .epdck8xl, html[dir] body.blur ._3JXTQ, html[dir] body.blur .bs7a17vp.jxacihee.d53pemmv, html[dir] body.blur .GvRI8, html[dir] body.blur ._19zgN._26nDl div[data-testid="tooltip"] {
            backdrop-filter: blur(${blurValue.light});
        }`,
        // animation Media Popup
        `html[dir] body.blur ._3Hudz, html[dir] body.blur ._2B4d4, html[dir] body.blur .ej3x2ktq, html[dir] body.blur .overlay._3IBSU, html[dir] body.blur .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx, html[dir] body.blur ._2M_x0 {
            animation: backgroundFadeInBlur 500ms ease-in-out;
        }`,
        // chat background image
        `html[dir="ltr"] body.blur ._3xTHG {
            animation: imageFadeinBlur 500ms ease-in-out;
        }`,
        // // invert media popup blur
        // `html[dir] body.blur ._3Hudz:after, html[dir] body.blur ._2B4d4:after, html[dir] body.blur .ej3x2ktq:after, html[dir] body.blur .overlay._3IBSU:after {
        //     animation: backgroundFadeInBlur 500ms ease-in-out reverse;
        // }`,
        // cover
        `html[dir] body.blur ._3ArsE {
            animation: onWhatsAppLoadBlur 500ms ease-out;
        }`,
        // message element appear
        `html[dir] body.blur .Nm1g1._22AX6, html[dir] body.blur ._2JUrU ._3OC33, html[dir] body.blur ._2JUrU ._3Lby7, html[dir=ltr] body.blur .EtBAv, html[dir=ltr] body.blur .i_Uj-, html[dir] body.blur .CHSLU, html[dir=ltr] body.blur ._2Fo6S, html[dir=ltr] body.blur ._3ImlL, html[dir=ltr] body.blur ._25pwu, html[dir=ltr] body.blur ._5ML0C {
            animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInSlideUpBlur;
        }`,
        // media message appear
        `html[dir] body.blur .sxls5cl {
            animation: 400ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUpBlur;
        }`,
        // message reactions appear
        `html[dir] body.blur .g0rxnol2.blj1rie1, html[dir] body.blur ._3JXTQ {
            animation: 300ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUpSmallBlur;
        }`,
        // message reaction button appear
        `html[dir] body.blur .GvRI8 {
            animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInScaleUpSmallBlur;
        }`,
        // change group icon blur
        `html[dir] body.blur .epdck8xl {
            animation: 400ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeBlurIn;
        }`,
    ];

    animationRules = [
        // animation Media Popup
        `html[dir] ._3Hudz, html[dir] ._2B4d4, html[dir] .ej3x2ktq, html[dir] .overlay._3IBSU, html[dir] .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx, html[dir=ltr] ._9-YHG, html[dir] ._2M_x0 {
            animation: backgroundFadeIn 400ms ease-in-out;
        }`,
        // chat background image
        `html[dir="ltr"] ._3xTHG {
            animation: imageFadein 500ms ease-in-out;
        }`,
        // // invert media popup
        // `html[dir] ._3Hudz:after, html[dir] ._2B4d4:after, html[dir] .ej3x2ktq:after, html[dir] .overlay._3IBSU:after {
        //     animation: backgroundFadeIn 500ms ease-in-out reverse;
        // }`,
        // cover
        `html[dir] ._3ArsE {
            animation: onWhatsAppLoad 500ms ease-out;
        }`,
        // message element appear
        `html[dir] .Nm1g1._22AX6, html[dir] ._2JUrU ._3OC33, html[dir] ._2JUrU ._3Lby7, html[dir=ltr] .EtBAv, html[dir=ltr] .i_Uj-, html[dir] .CHSLU, html[dir=ltr] ._2Fo6S, html[dir=ltr] ._3ImlL, html[dir=ltr] ._5ML0C {
            animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInSlideUp;
        }`,
        // media message appear
        `html[dir] .sxls5clz {
            animation: 400ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUp;
        }`,
        // message reactions appear
        `html[dir] .g0rxnol2.blj1rie1, html[dir] ._3JXTQ {
            animation: 300ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUpSmall;
        }`,
        // message reaction button appear & emoji appear
        `html[dir] .GvRI8, .bha6utru:before {
            animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInScaleUpSmall;
        }`,
        `html[dir="ltr"] .esbg2say {
        animation-name: l9dax0qz-B,sl8wg78j-B,fadeInScaleUpSmall;
        }`,
        // single to double click
        `span[data-testid$="-dblcheck"] > svg {
            animation: 200ms ease-in-out 0s 1 normal none running onDoubleTick;
        }`,
        // single to double click
        `span[data-testid$="-check"] > svg, html[dir] ._3yWey._18wEy .p357zi0d.ktfrpxia.nu7pwgvd {
            animation: 200ms ease-in-out 0s 1 normal none running scaleUpSmall;
        }`,
        // svg icon animation
        `html[dir] .ZIBLv.g0rxnol2 .p357zi0d.ktfrpxia.nu7pwgvd.ac2vgrno.f8m0rgwh.gndfcl4n {
            animation: 2s ease-in-out 0s infinite alternate none running svgIconGlow;
        }`,

        
        `@keyframes imageFadeInBlur {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }`,
        `@keyframes backgroundFadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }`,
        `@keyframes fadeInSlideUp {
            0% {
                opacity: 0;
                transform: translateY(25px);
            }
            100%{
                opacity: 1;
            }
        }`,
        `@keyframes onWhatsAppLoad {
            0% {
                background: var(--startup-background);
            }
            100% {
                background: transparent;
            }
        }`,
        `@keyframes delayedFadeInScaleUp {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }
            40% {
                opacity: 0;
                transform: scale(0.95);
            }
        }`,
        `@keyframes delayedFadeInScaleUpSmall {
            0% {
                opacity: 0;
                transform: scale(0.5);
            }
            40% {
                opacity: 0;
                transform: scale(0.5);
            }
            90% {
                opacity: 1;
            }
        }`,
        `@keyframes onDoubleTick {
            0% {
                transform: translateX(3px);
            }
            50% {
                opacity: 1;
            }
        }`,
        `@keyframes fadeInScaleUpSmall {
            0% {
                opacity: 0;
                transform: scale(0.5);
            }
            90% {
                opacity: 1;
            }
        }`,
        `@keyframes svgIconGlow {
            0% {
                opacity: 0.5;
                box-shadow: 0 0 30px var(--svg-icon-theme-primary);
            }
            100% {
                opacity: 1;
                box-shadow: 0 0 100px var(--svg-icon-theme-primary);
            }
        }`,
    ];

    transitionRules = [
        `html[dir] ._3Hudz, html[dir] ._2B4d4, html[dir] ._3J6wB, html[dir] ._3mpG7, html[dir] ._37FrU {
            transition: all 300ms ease-in-out;
        }`,
        `html[dir] ._2BU3P.tm2tP.copyable-area, html[dir] .ej3x2ktq, html[dir] ._23P3O, html[dir] .overlay._3IBSU, html[dir] .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, html[dir=ltr] ._12x9I, html:not([dir='rtl']) .kfr1vweg, html[dir] ._2VSMU, html[dir] .odkvbdo1, html[dir] button.fiyt298h, html[dir] ._3l4_3, html[dir] ._3NIfV, html[dir=ltr] div > .Iwkc0, html[dir] ._3BK98._3vy-1, html[dir] ._3BK98:hover, html[dir] a, html[dir=ltr] ._36BuW, html[dir=ltr] ._8KUDv, html:not([dir='rtl']) .s2vc4xk1, html[dir=ltr] ._3yWey._18wEy .p357zi0d.ktfrpxia.nu7pwgvd {
            transition: all 200ms ease-in-out;
        }`,
        `html[dir=ltr] ._2JUrU._2ecOY ._3OC33, html[dir] .Nm1g1._22AX6, html[dir] ._2VSMU, html[dir] ._3nQGi {
            transition: all 100ms ease-in-out;
        }`,
    ];
    // colours
    styleVariables.forEach(rule => {
        customStyles.insertRule(rule);
    })
    // page sizing
    customStyles.insertRule(`
    html[dir] .app-wrapper-web ._1XkO3, ._1iwk6 {
        top: 0;
        transition: all 300ms ease-in-out;
        height: 100%;
        width: 100%;
        max-width: initial;
    }`);
    // chat screen sizing
    customStyles.insertRule(`
    html[dir=ltr] div > ._33LGR {
        top: -79px;
        height: calc(100% + 59px + 79px);
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._3M3aq._3KRR6 {
        margin-top: 80px;
    }`);
    customStyles.insertRule(`
    html[dir] ._3K4-L {
        padding: 80px 0 59px;
    }`);
    // load screen
    customStyles.insertRule(`
    html[dir] ._1dEQH:after {
        background: linear-gradient(90deg,rgba(var(--startup-background-rgb),1) 0,rgba(var(--startup-background-rgb),1) 33.33%,rgba(var(--startup-background-rgb),0.7) 44.1%,rgba(var(--startup-background-rgb),0.7) 55.8%,rgba(var(--startup-background-rgb),1) 66.66%,rgba(var(--startup-background-rgb),1));
        animation-duration: 2s;
    }`);
    
    // svg icons
    customStyles.insertRule(`
    body.dark span[data-testid="checkbox-round-radio-checked"] > svg > path, body.dark span[data-testid="status-v3-unread"] > svg > path[fill="#009588"], body.dark span[data-testid="alert-update"], body.dark span[data-icon="document"] path[fill="#06CF9C"][fill-opacity], body.dark span[data-testid="view-once-media-select-on"] > svg > *, body.dark path.ptt-status-icon {
        fill: var(--svg-icon-theme-light);
    }`);
    customStyles.insertRule(`
    html[dir] body.dark .bSJ6w path.primary, body.dark span[data-icon="document"] path[fill="#06CF9C"] {
        fill: var(--svg-icon-main-white);
    }`);
    // icons
    customStyles.insertRule(`
    .bSJ6w path.primary {
        background: var(--avatar-placeholder-background);
    }`);
    // Security icon
    customStyles.insertRule(`
    html[dir] .ZIBLv.g0rxnol2 .p357zi0d.ktfrpxia.nu7pwgvd.ac2vgrno.f8m0rgwh.gndfcl4n {
        border-radius: 50%;
    }`);
    // profile page
    customStyles.insertRule(`
    html[dir] .dark .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area, html[dir] .se2m7z6i {
        background: ${background.darker}bb;
        backdrop-filter: blur(${blurValue.heavy});
    }`);
    customStyles.insertRule(`
    html[dir] .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area ._2P1rL._1is6W.ZIBLv._1zkaQ {
        box-shadow: none;
        background: ${main.transparent};
    }`);
    // floating popup notification
    customStyles.insertRule(`
    html[dir] .bs7a17vp.jxacihee.d53pemmv {
        border-radius: 20px;
        overflow: hidden;
    }`);

    // right click menu
    customStyles.insertRule(`
    html[dir] .o--vV {
        padding: 0;
        border-radius: 15px;
        overflow: hidden;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] .o--vV ._1wMaz {
        display: flex;
        border-radius: 5px;
        transition: all 200ms ease-in-out;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] .dJxPU {
        margin: auto 20px;
        height 18px;
        padding-left: 0px;
        padding-right: 0px;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] .esbg2say, .bha6utru:before {
        animation-timing-function: cubic-bezier(0.17, 0.84, 0.41, 1);
    }`);
    // side column / chat column
    customStyles.insertRule(`
    html[dir] ._16C8p {
        border-radius: 20px;
    }`);
    customStyles.insertRule(`
    html[dir] .vq6sj, html[dir] ._2QzJd, html[dir] .os03hap6 {
        transition: all 200ms ease-in-out;
    }`);
    // help page side column
    customStyles.insertRule(`
    html[dir] .o43XS {
        filter: grayscale(1);
    }`);
    // colour padlet / background colour page
    customStyles.insertRule(`
    html[dir=ltr] div > .Iwkc0 {
        border: none;
        border-radius: 20px;
    }`);
    customStyles.insertRule(`
    html[dir] div.KzJy3 > ._3Mp8z, html[dir] div.KzJy3 > ._2MCR7, html[dir=ltr] div.KzJy3 > ._2MCR7:after {
        border: none;
        border-radius: 10px;
    }`);

    // emoji menu & message not sent/couldnt send message menu
    customStyles.insertRule(`
    html[dir] .o--vV.B_YVs._24No0, html[dir=ltr] ._1y99G {
        border-radius: 30px;
        overflow: hidden;
        color: ${text.secondary};
        background: var(--reactions-tray-background);
    }`);
    customStyles.insertRule(`
    html[dir] .dKzIw._16kef, html[dir] ._3knDg._2nY6U {
        background: ${main.transparent};
        border-radius: 30px;
    }`);
    customStyles.insertRule(`
    html[dir] ._3nQGi, html[dir] ._3t1CR {
        border-radius: 30px;
    }`);
    // shadow
    customStyles.insertRule(`
    html[dir] body div#main > header._23P3O, html[dir="ltr"] body section.oq44ahr5 > div.ZIBLv, html[dir] div.o--vV {
        box-shadow: 0 0 20px var(--shadow-own);
    }`);
    // footer: message bar, audio popup, cannot send message
    customStyles.insertRule(`
    html[dir] ._2BU3P.tm2tP.copyable-area, html[dir] .lhggkp7q.b9fczbqn.f09rd1o5.p357zi0d, html[dir=ltr] ._1fLGu {
        border-radius: 20px 20px 0px 0px;
    }`);
    // message bar 2
    // customStyles.insertRule(`
    // html[dir] ._2BU3P.tm2tP.copyable-area {
    //     border-radius: 20px;
    //     margin: 5px;
    //     width: calc(100% - 10px);
    // }`);
    // message textbox
    customStyles.insertRule(`
    html[dir] .p3_M1, html:not([dir='rtl']) .llnowng2, html[dir] div > ._1VmmK {
        border-radius: 20px;
        overflow: hidden;
    }`);
    // ticks
    customStyles.insertRule(`
    html[dir] ._3nrYb {
        opacity: 0;
    }`);
    // receive messages
    customStyles.insertRule(`
    html[dir] .message-in .Nm1g1._22AX6, html[dir] .message-in ._3OC33, html[dir] .message-in ._3Hxe_ {
        border-radius: 7px 15px 15px 7px;
        overflow: hidden;
    }`);
    // receive message starter
    customStyles.insertRule(`
    html[dir=ltr] .message-in ._8YVHI .Nm1g1._22AX6, html[dir] .message-in.focusable-list-item ._3OC33, html[dir] .message-in.focusable-list-item ._3Hxe_ {
        border-top-left-radius: 15px;
    }`);
    // sent messages
    customStyles.insertRule(`
    html[dir] .message-out .Nm1g1._22AX6, html[dir] .message-out ._3OC33, html[dir] .message-out ._3Hxe_ {
        border-radius: 15px 7px 7px 15px;
        overflow: hidden;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] body ._2Fo6S {
        margin: -3px -4px 6px -6px;
    }`);
    // sent message starter
    customStyles.insertRule(`
    html[dir=ltr] .message-out ._8YVHI .Nm1g1._22AX6, html[dir] .message-out.focusable-list-item ._3OC33, html[dir] .message-out.focusable-list-item ._3Hxe_ {
        border-top-right-radius: 15px;
    }`);
    // message padding
    customStyles.insertRule(`
    html[dir=ltr] .cm280p3y.m3h9lho3.lna84pfr.psacz3a6.gjfcmax9.mmw11n2j {
        padding: 3px;
    }`);

    // dropdown menu button
    customStyles.insertRule(`
    html[dir=ltr] ._3snhK._3I4pa, html[dir=ltr] ._3U8t1._2copG, html[dir="ltr"] ._2wUmf div._18oGY {
        right: 0;
        top: 0;
        height: 30px;
        display: flex;
        align-items: center;
        background: linear-gradient(45deg,rgba(var(--shadow-own-rgb),0),rgba(var(--shadow-own-rgb),0.01) 45%,rgba(var(--shadow-own-rgb),0.1) 70%,rgba(var(--shadow-own-rgb),0.1));
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._3e9My, html[dir=ltr] ._3sryO {
        right: 8px;
        top: auto;
        padding: 0 0 2px 5px;
    }`);
    customStyles.insertRule(`
    html[dir] .fL8od ._3e9My {
        right: auto;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._2copG._18oGY._3QvcT {
        border-radius: 0 20px 20px 0;
    }`);

    // messages text
    customStyles.insertRule(`
    html[dir] ._1Gy50 {
        margin: 1px 5px;
    }`);
    // messages status
    customStyles.insertRule(`
    html[dir=ltr] .EtBAv, html[dir=ltr] .i_Uj- {
        padding: 5px 14px;
        border-radius: 15px;
        overflow: hidden;
    }`)
    // messages content
    customStyles.insertRule(`
    html[dir=ltr] ._1beEj {
        margin: -13px 0 -6px 10px;
    }`);
    // messages separate send time
    customStyles.insertRule(`
    html[dir=ltr] ._2JUrU ._3Lby7, html[dir] ._2JUrU ._3OC33 {
        border-radius: 10px;
    }`);
    // links
    customStyles.insertRule(`
    html[dir] a {
        opacity: 0.8;
    }`);
    customStyles.insertRule(`
    html[dir] a:hover {
        opacity: 1;
        text-decoration: none;
    }`);

    // messages single tick
    customStyles.insertRule(`
    span[data-testid$="-check"] > svg {
        transform: translateX(3px);
    }`);
    customStyles.insertRule(`
    span[data-testid^="status-"][data-testid$="check"] > svg {
        width: 18px;
        height: 18px;
    }`);
    // popup message screen notification
    customStyles.insertRule(`
    html[dir=ltr] ._3ImlL {
        border: 0;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._5ML0C {
        border-radius: 20px;
        margin: 5px;
        width: calc(100% - 5px);
        padding: 5px 0;
    }`);
    // status screen
    customStyles.insertRule(`
    html[dir] ._3f8oh {
        border-radius: 20px;
    }`);

    // message bar slide up / popup
    customStyles.insertRule(`
    html[dir] .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, html[dir=ltr] ._1GHsB {
        width: initial;
        margin: 5px;
        border-radius: 20px;
        background: var(--rich-text-panel-background);
    }`);
    customStyles.insertRule(`
    html[dir=ltr] .a-HbF, html[dir=ltr] ._2bgh7, html[dir=ltr] ._16kef, html[dir=ltr] ._1TdPb {
        border: 0;
        padding: 5px;
    }`);
    customStyles.insertRule(`
    html[dir] ._1IN0t, html[dir=ltr] ._2stdY {
        border-radius: 18px;
        margin: 0px;
    }`);
    customStyles.insertRule(`
    html[dir="ltr"] .grt5ktjy.jxacihee.tukmaf4q.thghmljt.pppsat04 {
        padding-top: 5px;
        margin: 0 5px;
        width: auto;
    }`);
    customStyles.insertRule(`
    html[dir] ._2VSMU {
        border-radius: 20px;
        padding-left: 10px;
    }`);
    customStyles.insertRule(`
    html[dir] ._1Hccy, html[dir] ._3x7O3, html[dir] ._3x7O3 > div, html[dir] ._10mnt, html[dir] ._3nQGi ._2hkxa, html[dir] ._3t1CR ._2hkxa, html[dir=ltr] ._1TdPb, html[dir=ltr] ._16kef, html[dir] ._2bgh7, html[dir] ._1NPzg, html[dir] .ga96p4vz:before, html[dir=ltr] ._3U8t1._1UyGr, html[dir] ._2nY6U, html[dir] ._2cYbV .rv6u8h8g, html[dir] div._1Mcu- {
        background: ${main.transparent};
        border: 0;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._1iDDZ {
        border-radius: 10px;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] .cm280p3y.ln8gz9je.gc15jzxb.eujn52yf {
        border-radius: 23px;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] .d10gensu {
        max-height: 40vh;
        height: 40vh;
        width: 50%;
        max-width: 400px;
    }`);

    // media message
    customStyles.insertRule(`
    html:not([dir='rtl']) button.i5tg98hk.f9ovudaz.przvwfww.gx1rr48f.shdiholb, html[dir] .CHSLU, html[dir] ._2Fo6S, html[dir] .sxls5clz, html[dir] ._3vRLq, html[dir] ._1HqS9 {
        border-radius: 12px;
        overflow: hidden;
    }`);
    customStyles.insertRule(`
    html:not([dir='rtl']) .snweb893.folpon7g.ocd2b0bc.aa0kojfi {
        padding: 3px;
    }`);
    customStyles.insertRule(`
    html[dir] div._3dSQU.Nm1g1._22AX6 {
        padding: 1.5px;
    }`);
    customStyles.insertRule(`
    html[dir] div.q7l348o2.ln8gz9je.cu1tgave.bvcnfjzh > div {
        margin: 1.5px;
    }`);
    customStyles.insertRule(`
    html:not([dir='rtl']) .en6yos0k, html:not([dir='rtl']) .j2mzdvlq {
        z-index: 100;
    }`);
    customStyles.insertRule(`
    html[dir] ._3vRLq {
        background-color: ${main.white}${tran.overlayLighter};
    }`);
    customStyles.insertRule(`
    html[dir] .e1lnay39 {
        background: none;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._21bgy {
        right: 0;
        bottom: 0;
        padding: 7px;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._21bgy {
        max-width: 20vw;
    }`);
    // media view
    customStyles.insertRule(`
    html[dir] .zMiDB div.g0rxnol2.ln8gz9je.ppled2lx, html[dir] .n_1Lu8G._1p0Ic > div, html[dir=ltr] ._1GTRd, html[dir] div._1Lu8G._1p0Ic._3n6Y4.Rwf_x, html[dir] ._1Lu8G._1p0Ic > div, html[dir] .gndfcl4n.p357zi0d.ppled2lx.ac2vgrno.gfz4du6o.r7fjleex.g0rxnol2.ln8gz9je.b9fczbqn.i0jNr {
        border-radius: 10px;
        overflow: hidden;
    }`);
    // media thumbnail
    customStyles.insertRule(`
    html[dir] div.fsmudgz7 {
        backdrop-filter: blur(${blurValue.lighter});
        transition: all 300ms ease-in-out;
    }`);
    customStyles.insertRule(`
    html[dir] div._1uBVh {
        border-radius: 10px;
        overflow: hidden;
    }`);
    customStyles.insertRule(`
    html[dir] div._10gTM, html[dir] div._31TVj {
        background: none;
    }`);
    // media receive view
    customStyles.insertRule(`
    html[dir] ._153i9, ._153i9 canvas {
        border-radius: 10px;
        overflow: hidden;
    }`);
    // message sticker
    customStyles.insertRule(`
    html[dir=ltr] ._2JUrU._2ecOY ._3OC33 {
        border: initial;
    }`);
    // messages
    customStyles.insertRule(`
    .tm2tP {
        order: 1;
        z-index: 2;
    }`);
    // border none
    customStyles.insertRule(`
    html[dir] .p357zi0d.ktfrpxia.nu7pwgvd, html[dir] .lhggkp7q.qq0sjtgm.ebjesfe0, html[dir=ltr] .dark .three ._2cYbV, html[dir=ltr] .three ._1bLj8 {
        border: none;
    }`);
    // message screen
    customStyles.insertRule(`
    ._2gzeB {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }`);
    // textbox bar nest
    customStyles.insertRule(`
    ._2cYbV {
        z-index: 100;
    }`);
    // popup question
    customStyles.insertRule(`
    html[dir] ._3J6wB {
        border-radius: 20px;
    }`);
    // popup question background
    customStyles.insertRule(`
    html[dir] ._2B4d4 {
        z-index: 1000;
    }`);
    // button, checkbox
    customStyles.insertRule(`
    html[dir] ._20C5O, html:not([dir='rtl']) .s2vc4xk1 {
        border-radius: 20px;
    }`);
    customStyles.insertRule(`
    html[dir] body.dark ._20C5O, html:not([dir='rtl']) .s2vc4xk1:hover {
        background-color: ${main.white}${tran.overlayLighter};
    }`);
    customStyles.insertRule(`
    html[dir] body.dark ._20C5O:hover {
        background-color: var(--button-primary-background-hover);
    }`);
    // popup insert media screen
    customStyles.insertRule(`
    html[dir=ltr] ._1Mcu-._2NB7f, html[dir="ltr"] div > ._9-YHG {
        background-color: var(--media-viewer-background);
    }`);
    // switches
    customStyles.insertRule(`
    html[dir=ltr] div.tknnhhou {
        width: 44px;
        height: 22px;
        border-radius: 20px;
    }`);
    customStyles.insertRule(`
    html[dir] .jdwybkuq.m0s4cjtr.ikqdvm1y.m3qqxsiz.r1ncx0sg {
        left: 2px;
    }`);
    customStyles.insertRule(`
    html[dir] .e95mh68g {
        transform: translateX(20px);
    }`);
    // switches
    customStyles.insertRule(`
    html[dir] ._2P1rL {
        border-radius: 20px;
        margin: 10px;
        overflow: hidden;
    }`);
    // select message screen
    customStyles.insertRule(`
    html[dir=ltr] ._3BK98 {
        left: 0;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._3BK98 {
        left: 0;
    }`);
    // feedback form
    customStyles.insertRule(`
    html[dir] ._2Nr6U ._3mpG7 {
        padding: 5px 10px !important;
        border-radius: 10px;
        background: var(--input-border);
        border: none !important;
    }`);
    customStyles.insertRule(`
    html[dir] ._2Nr6U ._3pqwA ._3mpG7 {
        background: var(--input-border-active);
    }`);
    customStyles.insertRule(`
    html[dir] ._2Nr6U ._3mpG7._1PQrR {
        background: var(--danger-fade) !important;
        border: none !important;
    }`);
    customStyles.insertRule(`
    html[dir] ._2Nr6U ._2Pq6r {
        line-height: 30px;
        padding: 5px 10px !important;
    }`);
    customStyles.insertRule(`
    html[dir] ._2Nr6U div > ._3zbxJ {
        padding: 0 8px 0 0 !important;
        line-height: 16px !important;
    }`);
    customStyles.insertRule(`
    html[dir] ._2Nr6U .X2s7w {
        height: 20px;
    }`);
    // side drawer
    customStyles.insertRule(`
    html[dir] .ldL67 {
        transition: all 500ms ease-in-out;
    }`);
    customStyles.insertRule(`
    html[dir] ._1bLj8 div.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0 {
        transition: all 300ms ease-in-out;
    }`);
    customStyles.insertRule(`
    html[dir] .ldL67._2i3T7 {
        flex: 0 0 30%;
        max-width: 450px;
    }`);

    customStyles.insertRule(`
    @media screen and (min-width: 1800px) {
        html[dir] .three ._3sh5K {
            flex: 0 0 calc(100% - 900px);
        }
    }`);
    customStyles.insertRule(`
    html[dir] .three .ldL67._2i3T7 {
        flex: 0 0 25%;
    }`);
    customStyles.insertRule(`
    html[dir] .three ._3sh5K {
        flex: 0 0 50%;
    }`);
    customStyles.insertRule(`
    html[dir] .two ._3sh5K {
        flex: 70%;
    }`);
    // menu column container
    customStyles.insertRule(`
    html[dir] ._1is6W, html[dir] .ZIBLv {
        border-radius: 20px;
        margin: 10px 10px 0;
        overflow: hidden;
    }`);
    // side column / status list
    customStyles.insertRule(`
    html[dir] ._2HUCB {
        border-radius: 0 20px 20px 0;
    }`);
    
    // status screen
    customStyles.insertRule(`
    html[dir] ._1NZyY._1cMSa {
        opacity: 1;
    }`);
    
    // side column / group chat info
    customStyles.insertRule(`
    html[dir] ._1bLj8 {
        border-radius: 20px 0 0 20px;
        max-width: 450px;
    }`);
    customStyles.insertRule(`
    html[dir] .epdck8xl {
        border-radius: 50%;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._3bTNW {
        border-radius: 20px;
        border: none;
    }`);
    customStyles.insertRule(`
    html:not([dir='rtl']) .lysxvg3k {
        margin: 0;
    }`);
    customStyles.insertRule(`
    html[dir] ._1M8UY, html[dir] ._3pqwA ._3mpG7 {
        margin: 0;
        border: none;
    }`);
    // side column / chat list
    customStyles.insertRule(`
    html[dir] ._20c87 {
        padding: 5px 0 5px 5px;
    }`);
    // customStyles.insertRule(`
    // .lhggkp7q.ln8gz9je.rx9719la[style*="translateY(0px)"] {
    //     padding: 5px 0 5px 5px;
    // }`);
    customStyles.insertRule(`
    div#pane-side > * {
        margin-bottom: 10px;
    }`);
    customStyles.insertRule(`
    html[dir] .vq6sj, html[dir] .os03hap6 {
        border-radius: 10px;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._2nY6U ._3OvU8 {
        border: none;
    }`);
    // customStyles.insertRule(`
    // html[dir=ltr] .lhggkp7q.ln8gz9je.rx9719la {
    //     border-bottom: 1px solid var(--border-list);
    // }`);

    // scroll bar
    customStyles.insertRule(`
    html[dir] .dark ::-webkit-scrollbar-thumb {
        border-radius: 10px;
    }`);

    // login page
    customStyles.insertRule(`
    html[dir] div.landing-window {
        border-radius: 20px;
        overflow: hidden;
        background-color: ${main.white}${tran.overlay};
        backdrop-filter: blur(1000px);
    }`);
    customStyles.insertRule(`
    html[dir] .landing-wrapper:before {
        border-radius: 0 0 20px 20px;
        overflow: hidden;
        background-color: ${theme.primary};
    }`);
    customStyles.insertRule(`
    .landing-wrapper .QtrYx, .landing-wrapper ._3-XoE {
        color: ${main.black};
    }`);
    customStyles.insertRule(`
    html[dir] ._3-soo {
        background: transparent;
    }`);

    // test
    // customStyles.insertRule(`
    // html[dir] button.fiyt298h {
    //     background-color: fff;
    // }`);
    
    animationRules.forEach(rule => {
        customStyles.insertRule(rule);
    });

    transitionRules.forEach(rule => {
        customStyles.insertRule(rule);
    });

    Object.keys(blurRules).forEach(index => {
        customStyles.insertRule(blurRules[index]);
    //     console.log(customStyles.cssRules.item(index));
    //     console.log(blurRules[index], index);
    });

    // customStyles.insertRule(`
    // a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    //     font-family: "Helvetica";
    //     letter-spacing: 0.5px;
    // }`);
    // font-weight: 200 !important;

    // background image
    customStyles.insertRule(`
    body.backgroundImage [data-asset-chat-background-dark] {
        background: transparent;
    }`);

    customStyles.insertRule(`
    html[dir="ltr"] ._3xTHG {
        background: var(--conversation-panel-background);
        opacity: 1;
        transition: all 1s ease-in-out 1s;
        background-size: cover;
        background-position: center;
    }`);
    
    // var imgIndex = randInt(Object.values(backgroundImg).length);
    // console.log(imgIndex);
    // var img = Object.values(backgroundImg)[imgIndex];
    
    customStyles.insertRule(`
    html[dir=ltr] ._3xTHG {
        background: var(--conversation-panel-background);
    }`);
}

function changeBackground(force, tags, filters){
    if (force || (!randInt(2) && utilities.styles.utilData.backgroundImgStatus)){
        var images = [];
        Object.values(backgroundImg).forEach(iamgeValue => {
            if (
                iamgeValue.tags.find(value => {
                    if (filters) {
                        for (i in filters){
                            if (filters[i] == value) return false;
                        }
                    }
                    if (!tags) return true;
                    return tags.find(tag => {
                        return tag == value;
                    })
                })
            ) images.push(iamgeValue);
        });

        var imgIndex = randInt(images.length);
        var img = Object.values(images)[imgIndex];
        console.log(customStyles.cssRules.length - 1, Object.values(images).length, imgIndex);

        customStyles.deleteRule(0);
        customStyles.insertRule(`
        html[dir=ltr] body.backgroundImage ._3xTHG {
            background: #00000000 url("${img.link}") ${img.repeat} center;
            background-size: ${img.size};
        }`);
    }
}

function setClasses(){
    provider.getData(() => {
        document.body.classList.toggle("blur", utilities.styles.utilData.blurStatus);
        document.body.classList.toggle("backgroundImage", utilities.styles.utilData.backgroundImgStatus);
        console.log(document.body.classList[2]);
    })
}

chrome.storage.sync.onChanged.addListener(setClasses);