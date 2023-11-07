// var blurFields = [["/*", "*/", "ee"], ["", "", "b0"]];
// var blr = blurFields[+true];
const stylesMainElement = document.createElement("style");
document.head.appendChild(stylesMainElement);
stylesMainElement.id = "custom-styles";
const stylesMain = stylesMainElement.sheet;

const stylesURL = [
    "customAnimations.css",
    "customBlur.css",
    "customColours.css",
    "customStyles.css",
]

const stylesElm = [];

for (const i in stylesURL) {
    stylesElm[i] = document.createElement("link");
    stylesElm[i].setAttribute("rel", "stylesheet");
    stylesElm[i].setAttribute("href", chrome.runtime.getURL(`script/CSS/${stylesURL[i]}`))
    document.head.appendChild(stylesElm[i]);
    stylesElm[i].id = `custom-styles-${stylesURL[i]}`
    
}

// colours

function stylesMainOnStart(){
    let themeNumber = provider.userData.theme.theme;
    let blurValue = provider.userData.appearance.blurValue;
    let main = themeSelection[themeNumber].main;
    let theme = themeSelection[themeNumber].theme;
    let tran = themeSelection[themeNumber].tran;
    let message = themeSelection[themeNumber].message;
    let text = themeSelection[themeNumber].text;
    let background = themeSelection[themeNumber].background;

    console.log(theme);

    stylesMain.insertRule(`
    :root {
        --blurValue-light: ${blurValue.light};
        --blurValue-medium: ${blurValue.medium};
        --blurValue-heavy: ${blurValue.heavy};

        --theme-primary: ${theme.primary};
        --theme-secondary: ${theme.secondary};
        --theme-light: ${theme.light};
        --theme-lighter: ${theme.lighter};
        --theme-danger: ${theme.danger};
        --theme-link: ${theme.link};

        --background-primary: ${background.primary};
        --background-secondary: ${background.secondary};
        --background-dark: ${background.dark};
        --background-light: ${background.light};
        --background-darker: ${background.darker};

        --message-send: ${message.send};
        --message-receive: ${message.receive};
        --status-read: ${message.statusRead};
        --status-sent: ${message.statusSent};

        --text-header: ${text.header};
        --text-primary: ${text.primary};
        --text-secondary: ${text.secondary};
        --text-tertiary: ${text.tertiary};
        --text-contrast: ${text.contrast};

        --main-theme: ${main.theme};
        --main-contrast: ${main.contrast};
        --main-grey: ${main.grey};
        --main-transparent: ${main.transparent};

        --tran-overlay: ${tran.overlay};
        --tran-overlayHeavy: ${tran.overlayHeavy};
        --tran-overlayLight: ${tran.overlayLight};
        --tran-overlayLighter: ${tran.overlayLighter};
        --tran-overlayLightest: ${tran.overlayLightest};
        --tran-blur: ${tran.blur};
        --tran-unBlur: ${tran.unBlur};

        --radius-app: 20px;
    }`);



    // blurRules = [
    //     `@keyframes imageFadeInBlur {
    //         0% {
    //             filter: none;
    //             opacity: 0;
    //         }
    //         30% {
    //             filter: none;
    //         }
    //         70% {
    //             opacity: 1;
    //         }
    //         100% {
    //             filter: blur(${blurValue.heavy});
    //         }
    //     }`,
    //     `@keyframes backgroundFadeInBlur {
    //         0% {
    //             backdrop-filter: none;
    //             opacity: 0;
    //         }
    //         30% {
    //             backdrop-filter: none;
    //         }
    //         70% {
    //             opacity: 1;
    //         }
    //         100% {
    //             backdrop-filter: blur(${blurValue.heavy});
    //         }
    //     }`,
    //     `@keyframes fadeInSlideUpBlur {
    //         0% {
    //             opacity: 0;
    //             backdrop-filter: none;
    //             transform: translateY(25px);
    //         }
    //         30%{
    //             backdrop-filter: none;
    //         }
    //         70%{
    //             opacity: 1;
    //         }
    //     }`,
    //     `@keyframes onWhatsAppLoadBlur {
    //         0% {
    //             backdrop-filter: blur(${blurValue.heavy});
    //             background: var(--startup-background);
    //         }
    //         100% {
    //             background: transparent;
    //         }
    //     }`,
    //     `@keyframes delayedFadeInScaleUpBlur {
    //         0% {
    //             backdrop-filter: blur(${blurValue.medium});
    //             opacity: 0;
    //             transform: scale(0.95);
    //         }
    //         40% {
    //             opacity: 0;
    //             transform: scale(0.95);
    //             backdrop-filter: blur(${blurValue.medium});
    //         }
    //         60% {
    //             backdrop-filter: blur(${blurValue.medium});
    //         }
    //         90% {
    //             opacity: 1;
    //         }
    //     }`,
    //     `@keyframes delayedFadeInScaleUpSmallBlur {
    //         0% {
    //             backdrop-filter: none;
    //             opacity: 0;
    //             transform: scale(0.5);
    //         }
    //         40% {
    //             opacity: 0;
    //             transform: scale(0.5);
    //             backdrop-filter: none;
    //         }
    //         60% {
    //             backdrop-filter: none;
    //         }
    //         90% {
    //             opacity: 1;
    //         }
    //     }`,
    //     `@keyframes fadeInScaleUpSmallBlur {
    //         0% {
    //             opacity: 0;
    //             transform: scale(0.5);
    //             backdrop-filter: none;
    //         }
    //         30% {
    //             backdrop-filter: none;
    //         }
    //         70% {
    //             opacity: 1;
    //         }
    //         90% {
    //             opacity: 1;
    //         }
    //     }`,
    //     `@keyframes scaleUpSmall {
    //         0% {
    //             transform: scale(0.1);
    //         }
    //     }`,
    //     `@keyframes fadeBlurIn {
    //         0% {
    //             backdrop-filter: none;
    //             background: ${main.transparent};
    //         }
    //     }`,
    //     `html[dir] body.blur .ej3x2ktq, html[dir] body.blur div[data-testid="status-v3-main-panel"], html[dir] div[role=dialog] div[data-testid*=popup]:has( > div[data-animate-modal-popup]), html[dir=ltr] body.blur ._9-YHG, html[dir] body.blur .overlay._3IBSU, html[dir] body.blur .ej3x2kt, html[dir] body.blur ._2M_x0, html[dir] body.blur ._1bLj8 div.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0 {
    //         backdrop-filter: blur(${blurValue.heavy});
    //     }`,
    //     `html[dir] body.blur ._2BU3P.tm2tP.copyable-area, html[dir] body.blur ._2lSWV._3cjY2.copyable-area, html[dir] body.blur ._23P3O, html[dir] body.blur .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > .g0rxnol2 > div > div, html[dir] body.blur .o--vV, html[dir] body.blur ._2sDI2, html[dir=ltr] body.blur ._1y99G, html[dir] body.blur .f09rd1o5, html[dir] body.blur ._2A-Ve, html[dir="ltr"] body.blur .cm280p3y.ln8gz9je.gc15jzxb.eujn52yf:hover, html[dir] body.blur ._3r7AV, body.blur ._3CRhO, html[dir] .OVz7E, html[dir=ltr] body.blur ._1fLGu, html[dir] body.blur div.landing-window, html[dir=ltr] body.blur ._5ML0C, html[dir="ltr"] body.blur div._356RS, html[dir] body.blur .NQl4z, html[dir] body.blur .ItfyB._3nbHh {
    //         backdrop-filter: blur(${blurValue.medium});
    //     }`,
    //     `html[dir=ltr] body.blur ._2JUrU._2ecOY ._3OC33, html[dir] body.blur .Nm1g1._22AX6, html[dir] body.blur ._2VSMU, html[dir] body.blur ._1VGG7, html[dir] body.blur ._3nQGi, html[dir] body.blur ._3t1CR, html[dir=ltr] body.blur .EtBAv, html[dir=ltr] body.blur .i_Uj-, html[dir] body.blur ._1w-Ol, html:not([dir='rtl']) body.blur .fahkg6u0, html[dir] body.blur ._1GLVO, html[dir] body.blur ._2JUrU ._3OC33, html[dir] body.blur ._2JUrU ._3Lby7, html[dir] body.blur .epdck8xl, html[dir] body.blur ._3JXTQ, html[dir] body.blur .bs7a17vp.jxacihee.d53pemmv, html[dir] body.blur .GvRI8, html[dir] body.blur ._19zgN._26nDl div[data-testid="tooltip"], html[dir] ._1D6fx, html[dir] ._3o1Tf {
    //         backdrop-filter: blur(${blurValue.light});
    //     }`,
    //     // animation Media Popup
    //     `html[dir] body.blur div[data-testid="status-v3-main-panel"], html[dir] body.blur ._2B4d4, html[dir] body.blur .ej3x2ktq, html[dir] body.blur .overlay._3IBSU, html[dir] body.blur .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx, html[dir] body.blur ._2M_x0 {
    //         animation: backgroundFadeInBlur 500ms ease-in-out;
    //     }`,
    //     // chat background image
    //     `html[dir="ltr"] body.blur div[data-testid="conversation-panel-wrapper"] {
    //         animation: imageFadeinBlur 500ms ease-in-out;
    //     }`,
    //     // // invert media popup blur
    //     // `html[dir] body.blur div[data-testid="status-v3-main-panel"]:after, html[dir] body.blur ._2B4d4:after, html[dir] body.blur .ej3x2ktq:after, html[dir] body.blur .overlay._3IBSU:after {
    //     //     animation: backgroundFadeInBlur 500ms ease-in-out reverse;
    //     // }`,
    //     // cover
    //     `html[dir] body.blur ._3ArsE {
    //         animation: onWhatsAppLoadBlur 500ms ease-out;
    //     }`,
    //     // // message element appear
    //     // `html[dir] body.blur .Nm1g1._22AX6, html[dir] body.blur ._2JUrU ._3OC33, html[dir] body.blur ._2JUrU ._3Lby7, html[dir=ltr] body.blur .EtBAv, html[dir=ltr] body.blur .i_Uj-, html[dir] body.blur .CHSLU, html[dir=ltr] body.blur ._2Fo6S, html[dir] ._3hPBO, html[dir=ltr] body.blur ._3ImlL, html[dir=ltr] body.blur ._25pwu, html[dir=ltr] body.blur ._5ML0C {
    //     //     animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInSlideUpBlur;
    //     // }`,
    //     // media message appear
    //     `html[dir] body.blur .sxls5cl {
    //         animation: 400ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUpBlur;
    //     }`,
    //     // message reactions appear
    //     `html[dir] body.blur .g0rxnol2.blj1rie1, html[dir] body.blur ._3JXTQ {
    //         animation: 300ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUpSmallBlur;
    //     }`,
    //     // // message reaction button appear
    //     // `html[dir] body.blur .GvRI8 {
    //     //     animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInScaleUpSmallBlur;
    //     // }`,
    //     // change group icon blur
    //     `html[dir] body.blur .epdck8xl {
    //         animation: 400ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeBlurIn;
    //     }`,
    // ];

    // animationRules = [
    //     // animation Media Popup
    //     `html[dir] div[data-testid="status-v3-main-panel"], html[dir] ._2B4d4, html[dir] .ej3x2ktq, html[dir] .overlay._3IBSU, html[dir] .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx, html[dir=ltr] ._9-YHG, html[dir] ._2M_x0 {
    //         animation: backgroundFadeIn 400ms ease-in-out;
    //     }`,
    //     // chat background image
    //     `html[dir="ltr"] div[data-testid="conversation-panel-wrapper"] {
    //         animation: imageFadein 500ms ease-in-out;
    //     }`,
    //     // // invert media popup
    //     // `html[dir] div[data-testid="status-v3-main-panel"]:after, html[dir] ._2B4d4:after, html[dir] .ej3x2ktq:after, html[dir] .overlay._3IBSU:after {
    //     //     animation: backgroundFadeIn 500ms ease-in-out reverse;
    //     // }`,
    //     // cover
    //     `html[dir] ._3ArsE {
    //         animation: onWhatsAppLoad 500ms ease-out;
    //     }`,
    //     // message element appear
    //     `html[dir] .Nm1g1._22AX6, html[dir] ._2JUrU ._3OC33, html[dir] ._2JUrU ._3Lby7, html[dir=ltr] .EtBAv, html[dir=ltr] .i_Uj-, html[dir] .CHSLU, html[dir] ._3DThG, html[dir=ltr] ._2Fo6S, html[dir] ._3hPBO, html[dir=ltr] ._3ImlL, html[dir=ltr] ._5ML0C, html[dir] div[data-testid*="msg"]._1-lf9 {
    //         animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInSlideUp;
    //     }`,
    //     // media message appear
    //     `html[dir] .sxls5clz, html[dir] .NQl4z {
    //         animation: 400ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUp;
    //     }`,
    //     // message reactions appear
    //     `html[dir] .g0rxnol2.blj1rie1, html[dir] ._3JXTQ {
    //         animation: 300ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUpSmall;
    //     }`,
    //     // message reaction button appear & emoji appear
    //     `html[dir] .GvRI8, .bha6utru:before {
    //         animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInScaleUpSmall;
    //     }`,
    //     `html[dir="ltr"] .esbg2say {
    //     animation-name: l9dax0qz-B,sl8wg78j-B,fadeInScaleUpSmall;
    //     }`,
    //     // // single to double click
    //     // `span[data-testid$="-dblcheck"] > svg {
    //     //     animation: 200ms ease-in-out 0s 1 normal none running onDoubleTick;
    //     // }`,
    //     // single to double click
    //     `span[data-testid$="-check"] > svg, html[dir] ._3yWey._18wEy .p357zi0d.ktfrpxia.nu7pwgvd {
    //         animation: 200ms ease-in-out 0s 1 normal none running scaleUpSmall;
    //     }`,
    //     // svg icon animation
    //     `html[dir] span[data-testid="security-drawer-lock"] {
    //         animation: 2s ease-in-out 0s infinite alternate none running svgIconGlow;
    //     }`,

        
    //     `@keyframes imageFadeInBlur {
    //         0% {
    //             opacity: 0;
    //         }
    //         100% {
    //             opacity: 1;
    //         }
    //     }`,
    //     `@keyframes backgroundFadeIn {
    //         0% {
    //             opacity: 0;
    //         }
    //         100% {
    //             opacity: 1;
    //         }
    //     }`,
    //     `@keyframes fadeInSlideUp {
    //         0% {
    //             opacity: 0;
    //             transform: translateY(25px);
    //         }
    //         100%{
    //             opacity: 1;
    //         }
    //     }`,
    //     `@keyframes onWhatsAppLoad {
    //         0% {
    //             background: var(--startup-background);
    //         }
    //         100% {
    //             background: transparent;
    //         }
    //     }`,
    //     `@keyframes delayedFadeInScaleUp {
    //         0% {
    //             opacity: 0;
    //             transform: scale(0.95);
    //         }
    //         40% {
    //             opacity: 0;
    //             transform: scale(0.95);
    //         }
    //     }`,
    //     `@keyframes delayedFadeInScaleUpSmall {
    //         0% {
    //             opacity: 0;
    //             transform: scale(0.5);
    //         }
    //         40% {
    //             opacity: 0;
    //             transform: scale(0.5);
    //         }
    //         90% {
    //             opacity: 1;
    //         }
    //     }`,
    //     // `@keyframes onDoubleTick {
    //     //     0% {
    //     //         transform: translateX(3px);
    //     //     }
    //     //     50% {
    //     //         opacity: 1;
    //     //     }
    //     // }`,
    //     `@keyframes fadeInScaleUpSmall {
    //         0% {
    //             opacity: 0;
    //             transform: scale(0.5);
    //         }
    //         90% {
    //             opacity: 1;
    //         }
    //     }`,
    //     `@keyframes svgIconGlow {
    //         0% {
    //             opacity: 0.5;
    //             box-shadow: 0 0 30px var(--svg-icon-theme-primary);
    //         }
    //         100% {
    //             opacity: 1;
    //             box-shadow: 0 0 100px var(--svg-icon-theme-primary);
    //         }
    //     }`,
    // ];

    // transitionRules = [
    //     `html[dir] div[data-testid="status-v3-main-panel"], html[dir] ._2B4d4, html[dir] div[data-testid*="popup"] > div, html[dir] ._3mpG7, html[dir] ._37FrU, html[dir] .p4t1lx4y {
    //         transition: all 300ms ease-in-out;
    //     }`,
    //     `html[dir] ._2BU3P.tm2tP.copyable-area, ._2lSWV._3cjY2.copyable-area, html[dir] .ej3x2ktq, html[dir] ._23P3O, html[dir] .overlay._3IBSU, html[dir] .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > .g0rxnol2 > div > div, html[dir=ltr] ._12x9I, html:not([dir='rtl']) .kfr1vweg, html[dir] body ._2VSMU, html[dir] .odkvbdo1, html[dir] button.fiyt298h, html[dir] ._3l4_3, html[dir] ._3NIfV, html[dir=ltr] div > .Iwkc0, html[dir] ._3BK98._3vy-1, html[dir] ._3BK98:hover, html[dir] a, html[dir=ltr] ._36BuW, html[dir=ltr] ._8KUDv, html:not([dir='rtl']) .s2vc4xk1, html[dir=ltr] ._3yWey._18wEy .p357zi0d.ktfrpxia.nu7pwgvd, html[dir] div[role="button"], html[dir=ltr] div:has(> div[data-testid="icon-down-context"]), span[data-testid*="check"] > svg, div:has( > span[data-testid*="check"]) {
    //         transition: all 200ms ease-in-out;
    //     }`,
    //     `html[dir=ltr] ._2JUrU._2ecOY ._3OC33, html[dir] .Nm1g1._22AX6, html[dir] ._2VSMU, html[dir] ._1VGG7, html[dir] ._3nQGi, html[dir="ltr"] .cm280p3y.ln8gz9je.gc15jzxb.eujn52yf, html[dir] div[data-testid*="msg"]._1-lf9 {
    //         transition: all 100ms ease-in-out;
    //     }`,
    // ];
    // // main settinsg
    // stylesMain.insertRule(`
    //     html{
    //         scroll-behavior: smooth;
    //     }
    // `);
    // // stylesMain.insertRule(`
    // //     @media screen and (height <= 120vh) {
    // //         html[dir] ._2gzeB:not(.velocity-animating) ._33LGR {
    // //             scroll-behavior: smooth;
    // //         }
    // //     }
    // // `);
    // // page sizing
    // stylesMain.insertRule(`
    // html[dir] .app-wrapper-web > div, html[dir] body div[data-testid="status-v3-main-panel"] > div {
    //     top: 0;
    //     transition: all 300ms ease-in-out;
    //     height: 100%;
    //     width: 100%;
    //     max-width: initial;
    // }`);
    // // chat screen sizing
    // stylesMain.insertRule(`
    // html[dir=ltr] div > div[data-testid="conversation-panel-messages"] {
    //     top: -80px;
    //     height: calc(100% + 62px + 80px);
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] ._3M3aq._3KRR6 {
    //     margin-top: 80px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] body div[data-testid="conversation-panel-messages"] {
    //     padding: 80px 0 59px;
    // }`); // html[dir] body ._3K4-L
    // // load screen
    // stylesMain.insertRule(`
    // html[dir] ._1dEQH:after {
    //     background: linear-gradient(90deg,rgba(var(--startup-background-rgb),1) 0,rgba(var(--startup-background-rgb),1) 33.33%,rgba(var(--startup-background-rgb),0.7) 44.1%,rgba(var(--startup-background-rgb),0.7) 55.8%,rgba(var(--startup-background-rgb),1) 66.66%,rgba(var(--startup-background-rgb),1));
    //     animation-duration: 2s;
    // }`);
    
    // // svg icons
    // stylesMain.insertRule(`
    // body.dark span[data-testid="checkbox-round-radio-checked"] > svg > path, body.dark span[data-testid="status-v3-unread"] > svg > path[fill="#009588"], body.dark span[data-testid="alert-update"], body.dark span[data-icon="document"] path[fill="#06CF9C"][fill-opacity], body.dark span[data-testid="view-once-media-select-on"] > svg > *, body.dark path.ptt-status-icon {
    //     fill: var(--svg-icon-theme-light);
    // }`);
    // stylesMain.insertRule(`
    // html[dir] body.dark .bSJ6w path.primary, body.dark span[data-icon="document"] path[fill="#06CF9C"] {
    //     fill: var(--svg-icon-main-white);
    // }`);
    // // icons
    // stylesMain.insertRule(`
    // .bSJ6w path.primary {
    //     background: var(--avatar-placeholder-background);
    // }`);
    // // Security icon
    // stylesMain.insertRule(`
    // html[dir] .ZIBLv.g0rxnol2 .p357zi0d.ktfrpxia.nu7pwgvd.ac2vgrno.f8m0rgwh.gndfcl4n {
    //     border-radius: 50%;
    // }`);
    // // profile page
    // stylesMain.insertRule(`
    // html[dir] .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area, html[dir] .se2m7z6i {
    //     backdrop-filter: blur(${blurValue.heavy});
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area ._2P1rL._1is6W.ZIBLv._1zkaQ {
    //     box-shadow: none;
    //     background: ${main.transparent};
    // }`);
    // // floating popup notification
    // stylesMain.insertRule(`
    // html[dir] body .bs7a17vp.jxacihee.d53pemmv, html[dir] body .NQl4z {
    //     border-radius: 20px;
    //     overflow: hidden;
    // }`);

    // // right click menu
    // stylesMain.insertRule(`
    // html[dir] .o--vV, html[dir] body ._2sDI2 {
    //     padding: 0;
    //     border-radius: 15px;
    //     overflow: hidden;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] .o--vV ._1wMaz, html[dir=ltr] ._2sDI2 .Iaqxu {
    //     display: flex;
    //     border-radius: 5px;
    //     transition: all 200ms ease-in-out;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] .dJxPU {
    //     margin: auto 20px;
    //     height 18px;
    //     padding-left: 0px;
    //     padding-right: 0px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] .esbg2say, .bha6utru:before {
    //     animation-timing-function: cubic-bezier(0.17, 0.84, 0.41, 1);
    // }`);
    // // side column /   column
    // stylesMain.insertRule(`
    // html[dir] div[data-testid="chat-list-search-container"] > div > div {
    //     border-radius: 20px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div[data-testid="cell-frame-container"], html[dir] div[data-testid="message-yourself-row"], html[dir] ._2QzJd, html[dir] .os03hap6 {
    //     transition: all 200ms ease-in-out;
    // }`);
    // // help page side column
    // stylesMain.insertRule(`
    // html[dir] .o43XS {
    //     filter: grayscale(1);
    // }`);
    // // colour padlet / background colour page
    // stylesMain.insertRule(`
    // html[dir=ltr] div > .Iwkc0 {
    //     border-radius: 20px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div.KzJy3 > ._3Mp8z, html[dir] div.KzJy3 > ._2MCR7, html[dir=ltr] div.KzJy3 > ._2MCR7:after {
    //     border-radius: 10px;
    // }`);

    // // emoji menu & message not sent/couldnt send message menu
    // stylesMain.insertRule(`
    // html[dir] .o--vV.B_YVs._24No0, html[dir] ._2sDI2._1nG7g._379cJ, html[dir=ltr] ._1y99G {
    //     border-radius: 30px;
    //     overflow: hidden;
    //     background: var(--reactions-tray-background);
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .dKzIw._16kef, html[dir] ._3knDg._2nY6U {
    //     background: ${main.transparent};
    //     border-radius: 10px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._3nQGi, html[dir] ._3t1CR {
    //     border-radius: 30px;
    // }`);
    // // shadow
    // stylesMain.insertRule(`
    // html[dir] body div#main > header._23P3O, html[dir="ltr"] body section.oq44ahr5 > div.ZIBLv, html[dir] div.o--vV, html[dir] body div._2sDI2, html[dir] body .h3bz2vby {
    //     box-shadow: 0 0 20px var(--shadow-own);
    // }`);
    // // footer: message bar, audio popup, cannot send message
    // stylesMain.insertRule(`
    // html[dir] ._2BU3P.tm2tP.copyable-area, ._2lSWV._3cjY2.copyable-area, html[dir] .lhggkp7q.b9fczbqn.f09rd1o5.p357zi0d, html[dir=ltr] ._1fLGu {
    //     border-radius: 20px 20px 0px 0px;
    // }`);
    // // // message bar 2
    // // stylesMain.insertRule(`
    // // html[dir] ._2BU3P.tm2tP.copyable-area, html[dir] .lhggkp7q.b9fczbqn.f09rd1o5.p357zi0d, html[dir=ltr] ._1fLGu {
    // //     border-radius: 20px;
    // //     margin: 5px;
    // //     width: calc(100% - 10px);
    // // }`);
    // // message bar textbox
    // stylesMain.insertRule(`
    // html[dir=ltr] div[data-testid="compose-box"] div[tabindex], html:not([dir='rtl']) .llnowng2, html[dir] div > ._1VmmK {
    //     border-radius: 20px;
    //     overflow: hidden;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] body .stylesMainFontWeight {
    //     font-weight: 300;
    // }`);

    // stylesMain.insertRule(`
    // html[dir] .mwp4sxku {
    //     max-height: 20vh;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._3Bc7H .rrq4r3yd {
    //     background: ${main.transparent};
    // }`);
    // // ticks
    // stylesMain.insertRule(`
    // html[dir] ._3nrYb {
    //     opacity: 0;
    // }`);
    // // receive messages
    // stylesMain.insertRule(`
    // html[dir] .message-in .Nm1g1._22AX6, html[dir] body .message-in ._3OC33, html[dir] .message-in .ItfyB, html[dir] message-in ._1D6fx, html[dir] message-in ._3o1Tf {
    //     border-radius: 7px 15px 15px 7px;
    //     overflow: hidden;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div[data-testid="group-chat-profile-picture"] {
    //     bottom: 10px;
    // }`);
    // // receive message starter
    // stylesMain.insertRule(`
    // html[dir=ltr] .message-in ._8bufJ, html[dir=ltr] .message-in ._8YVHI .Nm1g1._22AX6, html[dir] body .message-in ._18q-J ._3OC33, html[dir=ltr] body .message-in ._18q-J .ItfyB, html[dir=ltr] body .message-in ._18q-J ._1D6fx, html[dir=ltr] body .message-in ._18q-J ._3o1Tf {
    //     border-top-left-radius: 15px;
    // }`);
    // // receive message ender
    // stylesMain.insertRule(`
    // html[dir] .message-in:not(._3Zpy8) ._1-lf9:not(._18q-J), html[dir] .message-in:not(._3Zpy8) ._1-lf9:not(._18q-J) .ItfyB, html[dir] .message-in:not(._3Zpy8) ._1-lf9:not(._18q-J) ._1D6fx, html[dir] .message-in:not(._3Zpy8) ._1-lf9:not(._18q-J) ._3o1Tf {
    //     border-bottom-left-radius: 15px;
    // }`);

    // // sent messages
    // stylesMain.insertRule(`
    // html[dir] .message-out .Nm1g1._22AX6, html[dir] body .message-out ._3OC33, html[dir] .message-out .ItfyB, html[dir] message-out ._1D6fx, html[dir] message-out ._3o1Tf {
    //     border-radius: 15px 7px 7px 15px;
    //     overflow: hidden;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] body ._2Fo6S {
    //     margin: -3px -4px 6px -6px;
    // }`);
    // // sent message starter
    // stylesMain.insertRule(`
    // html[dir=ltr] .message-in ._8bufJ, html[dir=ltr] .message-out ._8YVHI .Nm1g1._22AX6, html[dir] body .message-out ._18q-J ._3OC33, html[dir=ltr] body .message-out ._18q-J .ItfyB, html[dir=ltr] body .message-out ._18q-J ._1D6fx, html[dir=ltr] body .message-out ._18q-J ._3o1Tf {
    //     border-top-right-radius: 15px;
    // }`);
    // // sent message ender
    // stylesMain.insertRule(`
    // html[dir] .message-out:not(._3Zpy8) ._1-lf9:not(._18q-J), html[dir] .message-out:not(._3Zpy8) ._1-lf9:not(._18q-J) .ItfyB, html[dir] .message-out:not(._3Zpy8) ._1-lf9:not(._18q-J) ._1D6fx, html[dir] .message-out:not(._3Zpy8) ._1-lf9:not(._18q-J) ._3o1Tf  {
    //     border-bottom-right-radius: 15px;
    // }`);

    // // sticker message
    // stylesMain.insertRule(`
    // html[dir] _1D6fx {
    //     border-radius: 15px;
    // }`);

    // // message padding
    // stylesMain.insertRule(`
    // html[dir=ltr] .cm280p3y.m3h9lho3.lna84pfr.psacz3a6.gjfcmax9.mmw11n2j {
    //     padding: 3px;
    // }`);
    // // message error
    // stylesMain.insertRule(`
    // html[dir=ltr] ._1aKu8 {
    //     opacity: 1;
    // }`);


    // // dropdown menu button
    // stylesMain.insertRule(`
    // html[dir=ltr] div:has(> div[data-testid="icon-down-context"])._2T2Kt {
    //     right: 0;
    //     top: 0;
    //     height: 30px;
    //     width: 60px;
    //     display: flex;
    //     align-items: center;
    //     background: linear-gradient(30deg,rgba(var(--shadow-own-rgb),0),rgba(var(--shadow-own-rgb),0.05) 45%,rgba(var(--shadow-own-rgb),0.1) 70%,rgba(var(--shadow-own-rgb),0.2));
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] body div[data-testid="icon-down-context"] {
    //     right: 8px;
    //     top: auto;
    //     padding: 0 0 2px 5px;
    // }`);
    // // stylesMain.insertRule(`
    // // html[dir=ltr] ._2copG._18oGY._3QvcT {
    // //     border-radius: 0 20px 20px 0;
    // // }`);

    // // messages text
    // stylesMain.insertRule(`
    // html[dir] ._1Gy50 {
    //     margin: 1px 5px;
    // }`);
    // // messages status
    // stylesMain.insertRule(`
    // html[dir=ltr] .EtBAv, html[dir=ltr] .i_Uj- {
    //     padding: 5px 14px;
    //     border-radius: 15px;
    //     overflow: hidden;
    // }`)
    // // messages content
    // stylesMain.insertRule(`
    // html[dir=ltr] body ._1beEj {
    //     margin: -13px 0 -6px 10px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] body .gq1t1y46.lak21jic.e4p1bexh.cr2cog7z.le5p0ye3._1WSmF {
    //     margin: 0 0 4px 0;
    // }`);
    // // messages separate send time
    // stylesMain.insertRule(`
    // html[dir=ltr] ._2JUrU ._3Lby7, html[dir] ._2JUrU ._3OC33 {
    //     border-radius: 10px;
    // }`);
    // // links
    // stylesMain.insertRule(`
    // html[dir] a {
    //     opacity: 0.8;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] a:hover {
    //     opacity: 1;
    //     text-decoration: none;
    // }`);

    // // messages ticks
    // stylesMain.insertRule(`
    // html[dir] div._2qo4q {
    //     margin-right: 4px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div.k6y3xtnu {
    //     margin-left: 4px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div:has( > span[data-testid$="-check"]) {
    //     width: 12px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div:has( > span[data-testid$="-dblcheck"]) {
    //     width: 16px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div:has( > span[data-testid$="-time"]) {
    //     width: 16px;
    // }`);
    // // popup message screen notification
    // stylesMain.insertRule(`
    // html[dir=ltr] ._3ImlL {
    //     border: 0;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] body ._5ML0C {
    //     border-radius: 20px;
    //     margin: 5px;
    //     width: calc(100% - 5px);
    //     padding: 5px 0;
    // }`);
    // // status screen
    // stylesMain.insertRule(`
    // html[dir] ._3f8oh {
    //     border-radius: 20px;
    // }`);

    // // message bar slide up / popup
    // stylesMain.insertRule(`
    // html[dir] .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > .g0rxnol2 > div > div, html[dir=ltr] body div[data-testid="popup_panel"], html[dir=ltr] ._1GHsB, html[dir=ltr] div._356RS {
    //     margin: 5px;
    //     border-radius: 20px;
    //     background: var(--rich-text-panel-background);
    //     overflow: hidden;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] body div[data-testid="popup_panel"] {
    //     padding: 5px;
    //     width: initial;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] .a-HbF, html[dir=ltr] ._2bgh7, html[dir=ltr] ._16kef, html[dir=ltr] ._1TdPb {
    //     padding: 5px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] body ._1IN0t, html[dir=ltr] body ._2stdY, html[dir=ltr] div[data-testid="popup_panel"] > div {
    //     border-radius: 15px;
    //     margin: 0;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] div._356RS {
    //     margin: 0px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir="ltr"] .grt5ktjy.jxacihee.tukmaf4q.thghmljt.pppsat04 {
    //     padding-top: 5px;
    //     margin: 0 5px;
    //     width: auto;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] body ._2VSMU, html[dir] body ._1VGG7 {
    //     border-radius: 20px;
    //     padding-left: 10px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] span[data-icon*="tail"]._1kh65 {
    //     fill: ${main.transparent};
    //     color: ${main.transparent};
    // }`);
    // // transparent
    // stylesMain.insertRule(`
    // html[dir] body div[data-testid="cell-frame-container"], html[dir] body div[aria-selected="true"] div[data-testid="cell-frame-container"]:after, html[dir] body div[data-testid="cell-frame-container"]:hover:after, html[dir] body ._3knDg._2nY6U, html[dir=ltr] body .dKzIw._16kef, html[dir=ltr] body ._16kef, html[dir=ltr] body ._1Hccy, html[dir] ._3x7O3, html[dir] ._3x7O3 > div, html[dir] body ._10mnt, html[dir] body .lBRRA, html[dir] ._3nQGi ._2hkxa, html[dir] ._3t1CR ._2hkxa, html[dir=ltr] body ._1TdPb, html[dir=ltr] body ._16kef, html[dir] body ._2bgh7, html[dir] body ._1Dcdv, html[dir] ._1NPzg, html[dir] .ga96p4vz:before, html[dir=ltr] body ._3U8t1._1UyGr, html[dir] ._2nY6U, html[dir] .rv6u8h8g, html[dir] div._1Mcu-, html[dir] span[data-icon*="tail"]._1kh65 {
    //     background: ${main.transparent};
    //     border: 0;
    // }`);

    // stylesMain.insertRule(`
    // html[dir=ltr] ._1iDDZ {
    //     border-radius: 10px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] .cm280p3y.ln8gz9je.gc15jzxb.eujn52yf {
    //     border-radius: 23px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] .d10gensu, html[dir=ltr] div._3-qS1 {
    //     max-height: 40vh;
    //     // height: 40vh;
    //     width: 50%;
    //     max-width: 400px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] div._3-qS1 {
    //     left: 0;
    //     right: 0;
    //     overflow: unset;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] div._1Uy4i {
    //     left: 34px;
    //     right: 0;
    // }`);

    // // media message
    // stylesMain.insertRule(`
    // html[dir] .message-out ._3o5fT, html[dir] body ._2dClC, html:not([dir='rtl']) button.i5tg98hk.f9ovudaz.przvwfww.gx1rr48f.shdiholb, html[dir] .CHSLU, html[dir] ._3DThG, html[dir] ._2Fo6S, html[dir] .sxls5clz, html[dir] ._3vRLq, html[dir] ._1HqS9 {
    //     border-radius: 12px;
    //     overflow: hidden;
    // }`);
    // stylesMain.insertRule(`
    // html:not([dir='rtl']) .snweb893.folpon7g.ocd2b0bc.aa0kojfi {
    //     padding: 3px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div._3dSQU.Nm1g1._22AX6 {
    //     padding: 1.5px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div.q7l348o2.ln8gz9je.cu1tgave.bvcnfjzh > div {
    //     margin: 1.5px;
    // }`);
    // stylesMain.insertRule(`
    // html:not([dir='rtl']) .en6yos0k, html:not([dir='rtl']) .j2mzdvlq {
    //     z-index: 100;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .e1lnay39 {
    //     background: none;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] ._21bgy {
    //     right: 0;
    //     bottom: 0;
    //     padding: 7px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] ._21bgy {
    //     max-width: 20vw;
    // }`);
    // // return message
    // stylesMain.insertRule(`
    // html[dir=ltr] div[data-testid="quoted-message"] {
    //     border-radius: 13px;
    //     overflow: hidden;
    // }`);

    // // media view
    // stylesMain.insertRule(`
    // html[dir] .zMiDB div.g0rxnol2.ln8gz9je.ppled2lx, html[dir] .n_1Lu8G._1p0Ic > div, html[dir=ltr] ._1GTRd, html[dir] div._1Lu8G._1p0Ic._3n6Y4.Rwf_x, html[dir] ._1Lu8G._1p0Ic > div, html[dir] .gndfcl4n.p357zi0d.ppled2lx.ac2vgrno.gfz4du6o.r7fjleex.g0rxnol2.ln8gz9je.b9fczbqn.i0jNr {
    //     border-radius: 10px;
    //     overflow: hidden;
    // }`);
    // // media thumbnail
    // stylesMain.insertRule(`
    // html[dir] div.fsmudgz7 {
    //     backdrop-filter: blur(${blurValue.lighter});
    //     transition: all 300ms ease-in-out;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div._1uBVh {
    //     border-radius: 10px;
    //     overflow: hidden;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div._10gTM, html[dir] div._31TVj {
    //     background: none;
    // }`);
    // // media receive view
    // stylesMain.insertRule(`
    // html[dir] ._153i9, ._153i9 canvas {
    //     border-radius: 10px;
    //     overflow: hidden;
    // }`);
    // // message sticker
    // stylesMain.insertRule(`
    // html[dir=ltr] ._2JUrU._2ecOY ._3OC33 {
    //     border: initial;
    // }`);
    // // messages
    // stylesMain.insertRule(`
    // .tm2tP {
    //     order: 1;
    //     z-index: 2;
    // }`);
    // // messages screen
    // stylesMain.insertRule(`
    // html[dir=ltr] ._1-FMR, html[dir=rtl] ._1-FMR {
    //     order: 1;
    //     z-index: 2;
    // }`);
    // // message screen
    // stylesMain.insertRule(`
    // ._2gzeB {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-between;
    // }`);
    // // textbox bar nest
    // stylesMain.insertRule(`
    // ._2cYbV {
    //     z-index: 100;
    // }`);
    // // popup question
    // stylesMain.insertRule(`
    // html[dir] ._3J6wB, .cm280p3y.p357zi0d.tvf2evcx.oq44ahr5.lb5m6g5c {
    //     border-radius: 20px;
    // }`);
    // // popup question background
    // stylesMain.insertRule(`
    // html[dir] ._2B4d4 {
    //     z-index: 1000;
    // }`);
    // // button, checkbox
    // stylesMain.insertRule(`
    // html[dir] div[data-testid*="popup"] div[role="button"], html[dir] div[data-testid*="btn"] div[role="button"], html:not([dir='rtl']) .s2vc4xk1 {
    //     border-radius: 20px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] body.dark div[data-testid*="popup"] div[role="button"]:hover, html[dir] div[data-testid*="btn"] div[role="button"]:hover {
    //     background-color: var(--button-primary-background-hover);
    // }`);
    // // popup insert media screen
    // stylesMain.insertRule(`
    // html[dir=ltr] body.dark ._1Mcu-._2NB7f, html[dir="ltr"] body.dark div > ._9-YHG {
    //     background-color: var(--media-viewer-background);
    // }`);
    // // switches
    // stylesMain.insertRule(`
    // html[dir=ltr] div.tknnhhou {
    //     width: 44px;
    //     height: 22px;
    //     border-radius: 20px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .jdwybkuq.m0s4cjtr.ikqdvm1y.m3qqxsiz.r1ncx0sg {
    //     left: 2px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .e95mh68g {
    //     transform: translateX(20px);
    // }`);
    // // switches
    // stylesMain.insertRule(`
    // html[dir] ._2P1rL {
    //     border-radius: 20px;
    //     margin: 10px;
    //     overflow: hidden;
    // }`);
    // // select message screen
    // stylesMain.insertRule(`
    // html[dir=ltr] ._3BK98 {
    //     left: 0;
    // }`);
    // stylesMain.insertRule(`
    // html[dir=ltr] ._3BK98 {
    //     left: 0;
    // }`);
    // // feedback form
    // stylesMain.insertRule(`
    // html[dir] ._2Nr6U ._3mpG7 {
    //     padding: 5px 10px !important;
    //     border-radius: 10px;
    //     background: var(--input-border);
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._2Nr6U ._3pqwA ._3mpG7 {
    //     background: var(--input-border-active);
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._2Nr6U ._3mpG7._1PQrR {
    //     background: var(--danger-fade) !important;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._2Nr6U ._2Pq6r {
    //     line-height: 30px;
    //     padding: 5px 10px !important;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._2Nr6U div > ._3zbxJ {
    //     padding: 0 8px 0 0 !important;
    //     line-height: 16px !important;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._2Nr6U .X2s7w {
    //     height: 20px;
    // }`);
    // // side drawer
    // stylesMain.insertRule(`
    // html[dir] .ldL67 {
    //     transition: all 500ms ease-in-out;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._1bLj8 div.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0 {
    //     transition: all 300ms ease-in-out;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .ldL67._2i3T7 {
    //     flex: 0 0 30%;
    //     max-width: 450px;
    // }`);

    // stylesMain.insertRule(`
    // @media screen and (min-width: 1800px) {
    //     html[dir] .three ._3sh5K {
    //         flex: 0 0 calc(100% - 900px);
    //     }
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .three .ldL67._2i3T7, html[dir] .three ._1bLj8, html[dir] .three ._2i3T7, html[dir] .three ._1bLj8, .two ._2i3T7 {
    //     flex: 0 0 25%;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .three ._3sh5K {
    //     flex: 0 0 50%;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .two ._3sh5K {
    //     flex: 70%;
    // }`);
    // // side column / status list
    // stylesMain.insertRule(`
    // html[dir] ._2HUCB, html[dir] .hj24v2v0.i9ba79ay.jykept17.p7ivxbd6.o7f2woc0 {
    //     border-radius: 0 20px 20px 0;
    // }`);
    // stylesMain.insertRule(`
    // @media screen and (min-width: 900px) and (max-width: 1024px) {
    //     html[dir] body ._2mQtw {
    //         background: transparent;
    //     }
    // }`);
    
    // // status screen
    // stylesMain.insertRule(`
    // html[dir] ._1NZyY._1cMSa {
    //     opacity: 1;
    // }`);
    
    // // side column / group chat info
    // stylesMain.insertRule(`
    // html[dir] ._1bLj8 {
    //     border-radius: 20px 0 0 20px;
    //     max-width: 450px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .epdck8xl {
    //     border-radius: 50%;
    // }`);
    // // menu column container
    // stylesMain.insertRule(`
    // html[dir=ltr] section[data-testid="group-info-drawer-body"] > div, section.tvf2evcx.oq44ahr5.lb5m6g5c.s9fl9ege > div, html[dir] div.lkjmyc96 {
    //     border-radius: 20px;
    //     margin: 10px 10px 0;
    //     overflow: hidden;
    //     transition: all ease .3s;
    // }`);
    // stylesMain.insertRule(`
    // html:not([dir='rtl']) .lysxvg3k {
    //     margin: 0;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._1M8UY, html[dir] ._3pqwA ._3mpG7 {
    //     margin: 0;
    //     border: none;
    // }`);
    // // side column / chat list
    // stylesMain.insertRule(`
    // html[dir] div[id="pane-side"] {
    //     padding: 5px 0 5px 5px;
    // }`);
    // // stylesMain.insertRule(`
    // // .lhggkp7q.ln8gz9je.rx9719la[style*="translateY(0px)"] {
    // //     padding: 5px 0 5px 5px;
    // // }`);
    // stylesMain.insertRule(`
    // div#pane-side > * {
    //     margin-bottom: 10px;
    // }`);
    // stylesMain.insertRule(`
    // html[dir] div[data-testid="cell-frame-container"], html[dir] div[data-testid="message-yourself-row"], html[dir] .os03hap6 {
    //     border-radius: 10px;
    // }`);
    // // border none
    // stylesMain.insertRule(`
    // html[dir=ltr] body div {
    //     border: none !important;
    // }`);
    // // stylesMain.insertRule(`
    // // html[dir=ltr] .lhggkp7q.ln8gz9je.rx9719la {
    // //     border-bottom: 1px solid var(--border-list);
    // // }`);

    // // scroll bar
    // stylesMain.insertRule(`
    // html[dir] .dark ::-webkit-scrollbar-thumb {
    //     border-radius: 10px;
    // }`);

    // // login page
    // stylesMain.insertRule(`
    // html[dir] div.landing-window {
    //     border-radius: 20px;
    //     overflow: hidden;
    //     background-color: ${main.white}${tran.overlay};
    //     backdrop-filter: blur(1000px);
    // }`);
    // stylesMain.insertRule(`
    // html[dir] .landing-wrapper:before {
    //     border-radius: 0 0 20px 20px;
    //     overflow: hidden;
    //     background-color: ${theme.primary};
    // }`);
    // stylesMain.insertRule(`
    // .landing-wrapper .QtrYx, .landing-wrapper ._3-XoE {
    //     color: ${main.black};
    // }`);
    // stylesMain.insertRule(`
    // html[dir] ._3-soo {
    //     background: transparent;
    // }`);

    // // test
    // // stylesMain.insertRule(`
    // // html[dir] button.fiyt298h {
    // //     background-color: fff;
    // // }`);

    // animationRules.forEach(rule => {
    //     stylesMain.insertRule(rule);
    // });

    // transitionRules.forEach(rule => {
    //     stylesMain.insertRule(rule);
    // });

    // Object.keys(blurRules).forEach(index => {
    //     stylesMain.insertRule(blurRules[index]);
    // //     console.log(stylesMain.cssRules.item(index));
    // //     console.log(blurRules[index], index);
    // });
}
