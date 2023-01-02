// var blurFields = [["/*", "*/", "ee"], ["", "", "b0"]];
// var blr = blurFields[+true];
var customStylesElement = document.createElement("style");
document.head.appendChild(customStylesElement);
customStylesElement.id = "custom-styles";
var customStyles = customStylesElement.sheet;
// colours

function customStylesOnStart(){
    var themeNumber = utilities.styles.utilData.themeNumber;
    var blurValue = utilities.styles.utilData.blurValue;
    var main = themes[themeNumber].main;
    var theme = themes[themeNumber].theme;
    var tran = themes[themeNumber].tran;

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
        `html[dir] body.blur .ej3x2ktq, html[dir] body.blur ._3Hudz, html[dir] body.blur ._2B4d4, html[dir] body.blur ._3J6wB, html[dir=ltr] body.blur ._9-YHG, html[dir] body.blur .overlay._3IBSU, html[dir] body.blur .ej3x2kt, html[dir] body.blur ._2M_x0, html[dir] body.blur ._1bLj8 div.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0 {
            backdrop-filter: blur(${blurValue.heavy});
        }`,
        `html[dir] body.blur ._2BU3P.tm2tP.copyable-area, html[dir] body.blur ._23P3O, html[dir] body.blur .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, html[dir] body.blur .o--vV, html[dir=ltr] body.blur ._1y99G, html[dir] body.blur .f09rd1o5, html[dir] body.blur ._2A-Ve, html[dir="ltr"] body.blur .cm280p3y.ln8gz9je.gc15jzxb.eujn52yf:hover, html[dir] body.blur ._3r7AV, body.blur ._3CRhO, html[dir] .OVz7E, html[dir=ltr] body.blur ._1fLGu, html[dir] body.blur div.landing-window, html[dir=ltr] body.blur ._5ML0C, html[dir="ltr"] body.blur div._356RS, html[dir] body.blur .NQl4z, html[dir] body.blur .ItfyB._3nbHh {
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
        // // message element appear
        // `html[dir] body.blur .Nm1g1._22AX6, html[dir] body.blur ._2JUrU ._3OC33, html[dir] body.blur ._2JUrU ._3Lby7, html[dir=ltr] body.blur .EtBAv, html[dir=ltr] body.blur .i_Uj-, html[dir] body.blur .CHSLU, html[dir=ltr] body.blur ._2Fo6S, html[dir] ._3hPBO, html[dir=ltr] body.blur ._3ImlL, html[dir=ltr] body.blur ._25pwu, html[dir=ltr] body.blur ._5ML0C {
        //     animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInSlideUpBlur;
        // }`,
        // media message appear
        `html[dir] body.blur .sxls5cl {
            animation: 400ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUpBlur;
        }`,
        // message reactions appear
        `html[dir] body.blur .g0rxnol2.blj1rie1, html[dir] body.blur ._3JXTQ {
            animation: 300ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running delayedFadeInScaleUpSmallBlur;
        }`,
        // // message reaction button appear
        // `html[dir] body.blur .GvRI8 {
        //     animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInScaleUpSmallBlur;
        // }`,
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
        `html[dir] .Nm1g1._22AX6, html[dir] ._2JUrU ._3OC33, html[dir] ._2JUrU ._3Lby7, html[dir=ltr] .EtBAv, html[dir=ltr] .i_Uj-, html[dir] .CHSLU, html[dir] ._3DThG, html[dir=ltr] ._2Fo6S, html[dir] ._3hPBO, html[dir=ltr] ._3ImlL, html[dir=ltr] ._5ML0C, html[dir] div[data-testid*="msg"]._1-lf9 {
            animation: 200ms cubic-bezier(0.04, 0.98, 0.48, 1.01) 0s 1 normal none running fadeInSlideUp;
        }`,
        // media message appear
        `html[dir] .sxls5clz, html[dir] .NQl4z {
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
        `html[dir] ._2BU3P.tm2tP.copyable-area, html[dir] .ej3x2ktq, html[dir] ._23P3O, html[dir] .overlay._3IBSU, html[dir] .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, html[dir=ltr] ._12x9I, html:not([dir='rtl']) .kfr1vweg, html[dir] body ._2VSMU, html[dir] .odkvbdo1, html[dir] button.fiyt298h, html[dir] ._3l4_3, html[dir] ._3NIfV, html[dir=ltr] div > .Iwkc0, html[dir] ._3BK98._3vy-1, html[dir] ._3BK98:hover, html[dir] a, html[dir=ltr] ._36BuW, html[dir=ltr] ._8KUDv, html:not([dir='rtl']) .s2vc4xk1, html[dir=ltr] ._3yWey._18wEy .p357zi0d.ktfrpxia.nu7pwgvd {
            transition: all 200ms ease-in-out;
        }`,
        `html[dir=ltr] ._2JUrU._2ecOY ._3OC33, html[dir] .Nm1g1._22AX6, html[dir] ._2VSMU, html[dir] ._3nQGi, html[dir="ltr"] .cm280p3y.ln8gz9je.gc15jzxb.eujn52yf, html[dir] div[data-testid*="msg"]._1-lf9 {
            transition: all 100ms ease-in-out;
        }`,
    ];
    // main settinsg
    customStyles.insertRule(`
        html{
            scroll-behavior: smooth;
        }
    `);
    // customStyles.insertRule(`
    //     @media screen and (height <= 120vh) {
    //         html[dir] ._2gzeB:not(.velocity-animating) ._33LGR {
    //             scroll-behavior: smooth;
    //         }
    //     }
    // `);
    // page sizing
    customStyles.insertRule(`
    html[dir] .app-wrapper-web > div, html[dir] body ._1iwk6 {
        top: 0;
        transition: all 300ms ease-in-out;
        height: 100%;
        width: 100%;
        max-width: initial;
    }`);
    // chat screen sizing
    customStyles.insertRule(`
    html[dir=ltr] div > ._33LGR {
        top: -80px;
        height: calc(100% + 62px + 80px);
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._3M3aq._3KRR6 {
        margin-top: 80px;
    }`);
    customStyles.insertRule(`
    html[dir] body ._33LGR {
        padding: 80px 0 59px;
    }`); // html[dir] body ._3K4-L
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
    html[dir] .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area, html[dir] .se2m7z6i {
        backdrop-filter: blur(${blurValue.heavy});
    }`);
    customStyles.insertRule(`
    html[dir] .g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area ._2P1rL._1is6W.ZIBLv._1zkaQ {
        box-shadow: none;
        background: ${main.transparent};
    }`);
    // floating popup notification
    customStyles.insertRule(`
    html[dir] body .bs7a17vp.jxacihee.d53pemmv, html[dir] body .NQl4z {
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
    // side column /   column
    customStyles.insertRule(`
    html[dir] body ._16C8p {
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
        background: var(--reactions-tray-background);
    }`);
    customStyles.insertRule(`
    html[dir] .dKzIw._16kef, html[dir] ._3knDg._2nY6U {
        background: ${main.transparent};
        border-radius: 10px;
    }`);
    customStyles.insertRule(`
    html[dir] ._3nQGi, html[dir] ._3t1CR {
        border-radius: 30px;
    }`);
    // shadow
    customStyles.insertRule(`
    html[dir] body div#main > header._23P3O, html[dir="ltr"] body section.oq44ahr5 > div.ZIBLv, html[dir] div.o--vV, html[dir] body .h3bz2vby {
        box-shadow: 0 0 20px var(--shadow-own);
    }`);
    // footer: message bar, audio popup, cannot send message
    customStyles.insertRule(`
    html[dir] ._2BU3P.tm2tP.copyable-area, html[dir] .lhggkp7q.b9fczbqn.f09rd1o5.p357zi0d, html[dir=ltr] ._1fLGu {
        border-radius: 20px 20px 0px 0px;
    }`);
    // // message bar 2
    // customStyles.insertRule(`
    // html[dir] ._2BU3P.tm2tP.copyable-area, html[dir] .lhggkp7q.b9fczbqn.f09rd1o5.p357zi0d, html[dir=ltr] ._1fLGu {
    //     border-radius: 20px;
    //     margin: 5px;
    //     width: calc(100% - 10px);
    // }`);
    // message bar textbox
    customStyles.insertRule(`
    html[dir=ltr] body .p3_M1, html:not([dir='rtl']) .llnowng2, html[dir] div > ._1VmmK {
        border-radius: 20px;
        overflow: hidden;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] body .customStylesFontWeight {
        font-weight: 300;
    }`);

    customStyles.insertRule(`
    html[dir] .mwp4sxku {
        max-height: 20vh;
    }`);
    customStyles.insertRule(`
    html[dir] ._3Bc7H .rrq4r3yd {
        background: ${main.transparent};
    }`);
    // ticks
    customStyles.insertRule(`
    html[dir] ._3nrYb {
        opacity: 0;
    }`);
    // receive messages
    customStyles.insertRule(`
    html[dir] .message-in .Nm1g1._22AX6, html[dir] body .message-in ._3OC33, html[dir] .message-in ._1-lf9 .ItfyB, html[dir=ltr] .message-in ._8bufJ .ItfyB{
        border-radius: 7px 15px 15px 7px;
        overflow: hidden;
    }`);
    // receive message starter
    customStyles.insertRule(`
    html[dir=ltr] .message-in ._8bufJ, html[dir=ltr] .message-in ._8YVHI .Nm1g1._22AX6, html[dir] body .message-in ._18q-J ._3OC33, html[dir=ltr] body .message-in ._18q-J .ItfyB {
        border-top-left-radius: 15px;
    }`);
    // receive message ender
    customStyles.insertRule(`
    html[dir] .message-in:not(._3Zpy8) ._1-lf9:not(._18q-J), html[dir] .message-in:not(._3Zpy8) ._1-lf9:not(._18q-J) .ItfyB {
        border-bottom-left-radius: 15px;
    }`);

    // sent messages
    customStyles.insertRule(`
    html[dir] .message-out .Nm1g1._22AX6, html[dir] body .message-out ._3OC33, html[dir] .message-out ._1-lf9 .ItfyB, html[dir=ltr] .message-out ._8bufJ .ItfyB{
        border-radius: 15px 7px 7px 15px;
        overflow: hidden;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] body ._2Fo6S {
        margin: -3px -4px 6px -6px;
    }`);
    // sent message starter
    customStyles.insertRule(`
    html[dir=ltr] .message-in ._8bufJ, html[dir=ltr] .message-out ._8YVHI .Nm1g1._22AX6, html[dir] body .message-out ._18q-J ._3OC33, html[dir=ltr] body .message-out ._18q-J .ItfyB {
        border-top-right-radius: 15px;
    }`);
    // sent message ender
    customStyles.insertRule(`
    html[dir] .message-out:not(._3Zpy8) ._1-lf9:not(._18q-J), html[dir] .message-out:not(._3Zpy8) ._1-lf9:not(._18q-J) .ItfyB {
        border-bottom-right-radius: 15px;
    }`);
    // message padding
    customStyles.insertRule(`
    html[dir=ltr] .cm280p3y.m3h9lho3.lna84pfr.psacz3a6.gjfcmax9.mmw11n2j {
        padding: 3px;
    }`);
    // message error
    customStyles.insertRule(`
    html[dir=ltr] ._1aKu8 {
        opacity: 1;
    }`);


    // dropdown menu button
    customStyles.insertRule(`
    html[dir=ltr] ._3snhK._3I4pa, html[dir=ltr] ._1-FMR ._18oGY._2copG, html[dir="ltr"] ._2wUmf div._18oGY, html[dir=ltr] body ._18oGY._1UyGr {
        right: 0;
        top: 0;
        height: 30px;
        width: 60px;
        display: flex;
        align-items: center;
        background: linear-gradient(30deg,rgba(var(--shadow-own-rgb),0),rgba(var(--shadow-own-rgb),0.05) 45%,rgba(var(--shadow-own-rgb),0.1) 70%,rgba(var(--shadow-own-rgb),0.2));
    }`);
    customStyles.insertRule(`
    html[dir=ltr] body ._3e9My, html[dir=ltr] ._3sryO {
        right: 8px;
        top: auto;
        padding: 0 0 2px 5px;
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
    html[dir=ltr] body ._1beEj {
        margin: -13px 0 -6px 10px;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] body .gq1t1y46.lak21jic.e4p1bexh.cr2cog7z.le5p0ye3._1WSmF {
        margin: 0 0 4px 0;
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
    html[dir=ltr] body ._5ML0C {
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
    html[dir] .lhggkp7q.jxacihee.tkdu00h0.cm280p3y.ln8gz9je > ._3Bc7H > div > div, html[dir=ltr] ._2cYbV ._3Bc7H div[data-testid="popup_panel"], html[dir=ltr] ._1GHsB, html[dir=ltr] div._356RS {
        margin: 5px;
        border-radius: 20px;
        border: none;
        background: var(--rich-text-panel-background);
        overflow: hidden;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] ._2cYbV ._3Bc7H div[data-testid="popup_panel"] {
        padding: 5px;
        width: initial;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] .a-HbF, html[dir=ltr] ._2bgh7, html[dir=ltr] ._16kef, html[dir=ltr] ._1TdPb {
        border: none;
        padding: 5px;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] body ._1IN0t, html[dir=ltr] body ._2stdY, html[dir=ltr] ._2cYbV ._3Bc7H div[data-testid="popup_panel"] > div {
        border-radius: 15px;
        margin: 0;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] div._356RS {
        margin: 0px;
    }`);
    customStyles.insertRule(`
    html[dir="ltr"] .grt5ktjy.jxacihee.tukmaf4q.thghmljt.pppsat04 {
        padding-top: 5px;
        margin: 0 5px;
        width: auto;
    }`);
    customStyles.insertRule(`
    html[dir] body ._2VSMU {
        border-radius: 20px;
        padding-left: 10px;
    }`);
    customStyles.insertRule(`
    html[dir] span[data-icon*="tail"]._1kh65 {
        fill: ${main.transparent};
        color: ${main.transparent};
    }`);
    // transparent
    customStyles.insertRule(`
    html[dir] body ._2nY6U, html[dir] body ._2nY6U._2_TVt:after, html[dir] body .vq6sj:hover:after, html[dir] body ._3knDg._2nY6U, html[dir=ltr] body .dKzIw._16kef, html[dir=ltr] body ._16kef, html[dir=ltr] body ._1Hccy, html[dir] ._3x7O3, html[dir] ._3x7O3 > div, html[dir] body ._10mnt, html[dir] ._3nQGi ._2hkxa, html[dir] ._3t1CR ._2hkxa, html[dir=ltr] body ._1TdPb, html[dir=ltr] body ._16kef, html[dir] body ._2bgh7, html[dir] ._1NPzg, html[dir] .ga96p4vz:before, html[dir=ltr] body ._3U8t1._1UyGr, html[dir] ._2nY6U, html[dir] ._2cYbV .rv6u8h8g, html[dir] div._1Mcu-, html[dir] span[data-icon*="tail"]._1kh65 {
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
    html[dir=ltr] .d10gensu, html[dir=ltr] div._3-qS1 {
        max-height: 40vh;
        // height: 40vh;
        width: 50%;
        max-width: 400px;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] div._3-qS1 {
        left: 0;
        right: 0;
        overflow: unset;
    }`);
    customStyles.insertRule(`
    html[dir=ltr] div._1Uy4i {
        left: 34px;
        right: 0;
    }`);

    // media message
    customStyles.insertRule(`
    html[dir] .message-out ._3o5fT, html[dir] body ._2dClC, html:not([dir='rtl']) button.i5tg98hk.f9ovudaz.przvwfww.gx1rr48f.shdiholb, html[dir] .CHSLU, html[dir] ._3DThG, html[dir] ._2Fo6S, html[dir] .sxls5clz, html[dir] ._3vRLq, html[dir] ._1HqS9 {
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
    // return message
    customStyles.insertRule(`
    html[dir=ltr] ._3XUNQ {
        border-radius: 15px;
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
    // messages screen
    customStyles.insertRule(`
    html[dir=ltr] ._1-FMR, html[dir=rtl] ._1-FMR {
        order: 1;
        z-index: 2;
    }`);
    // border none
    customStyles.insertRule(`
    html[dir] .p357zi0d.ktfrpxia.nu7pwgvd, html[dir] .lhggkp7q.qq0sjtgm.ebjesfe0, html[dir=ltr] .dark .three ._2cYbV, html[dir=ltr] body .three ._1bLj8 {
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
    html[dir] body.dark ._20C5O:hover {
        background-color: var(--button-primary-background-hover);
    }`);
    // popup insert media screen
    customStyles.insertRule(`
    html[dir=ltr] body.dark ._1Mcu-._2NB7f, html[dir="ltr"] body.dark div > ._9-YHG {
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
    html[dir] .three .ldL67._2i3T7, html[dir] .three ._1bLj8, html[dir] .three ._2i3T7, html[dir] .three ._1bLj8, .two ._2i3T7 {
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
    // side column / status list
    customStyles.insertRule(`
    html[dir] ._2HUCB {
        border-radius: 0 20px 20px 0;
    }`);
    customStyles.insertRule(`
    @media screen and (min-width: 900px) and (max-width: 1024px) {
        html[dir] body ._2mQtw {
            background: transparent;
        }
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
    // menu column container
    customStyles.insertRule(`
    html[dir=ltr] section[data-testid="group-info-drawer-body"] > div, section.tvf2evcx.oq44ahr5.lb5m6g5c.s9fl9ege > div {
        border-radius: 20px;
        margin: 10px 10px 0;
        overflow: hidden;
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
}


function setClasses(e){
    if (e) utilities = e.utilities.newValue;
    document.body.classList.toggle("blur", utilities.styles.utilData.blurStatus);
    document.body.classList.toggle("backgroundImage", utilities.styles.utilData.backgroundImgStatus);
}

chrome.storage.sync.onChanged.addListener(setClasses);