var backgroundPicturesElement = document.createElement("style");
document.head.appendChild(backgroundPicturesElement);
backgroundPicturesElement.id = "custom-background-image";
var backgroundPictures = backgroundPicturesElement.sheet;

function randInt(max) {
    return Math.floor(Math.random() * max);
}

let backgroundImg = {};
// const backgroundImg = {
//     // erythrite
//     pink1: {
//         link: "https://i.pinimg.com/564x/f0/93/53/f09353ea441a92997606810a61bf0ef9.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["erythrite", "pink"],
//     },
//     pink2: {
//         link: "https://i.pinimg.com/564x/45/b0/ba/45b0ba6f1601c840918821796dba958a.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["erythrite", "pink"],
//     },
//     pinkEiffelTower: {
//         link: "https://i.pinimg.com/564x/42/99/d5/4299d550ef9b9f0b8c82e63803794d58.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["erythrite", "pink"],
//     },
//     pinkheartsRepeatable: {
//         link: "https://i.pinimg.com/564x/15/f8/e4/15f8e4ee3a386164ca18fa04c7df40d4.jpg",
//         size: "auto",
//         repeat: "repeat",
//         tags: ["erythrite", "pink", "pattern"],
//     },

//     // others
//     glassCubeRefraction: {
//         link: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "blue", "cube"],
//     },
//     cubesMattLightsource: {
//         link: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "black", "cube", "yellow"],
//     },
//     abstractPolynomials: {
//         link: "https://wallpaperaccess.com/full/1836735.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "abstract", "white", "pink", "blue", "black"],
//     },
//     blackWhiteBlueFluidPaint: {
//         link: "https://wallpaperaccess.com/full/1323952.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "black", "white"],
//     },
//     blackPinkBacheFluidPaint: {
//         link: "https://wallpaperaccess.com/full/1323419.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "pink", "black"],
//     },
//     moltenBlackFluidPaint: {
//         link: "https://wallpaperaccess.com/full/1836722.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "red", "orange", "black", "molten"],
//     },
//     mountainNightsky: {
//         link: "https://wallpaperaccess.com/full/388374.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["black", "blue", "mountain"],
//     },
//     taibei101topGame: {
//         link: "https://wallpaperaccess.com/full/388261.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "abstract", "game", "blue", "orange"],
//     },
//     supernovaAbstractPaint: {
//         link: "https://wallpaperaccess.com/full/388238.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "abstract", "blue", "black"],
//     },
//     // stickerWallpaper: {
//     //     link: "https://wallpaperaccess.com/full/48098.jpg",
//     //     size: "cover",
//     //     repeat: "no-repeat",
//     //     tags: ["wallpaper", "sticker", "black"],
//     // },
//     authumPaintingStreetside: {
//         link: "https://wallpaperaccess.com/full/230569.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "painting", "yellow", "black"],
//     },
//     authumPaintingStreetPath: {
//         link: "https://wallpaperaccess.com/full/1393532.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "painting", "yellow", "white"],
//     },
//     // blueGreenOrangeYellowFluidPaint: {
//     //     link: "https://wallpaperaccess.com/full/1393217.jpg",
//     //     size: "cover",
//     //     repeat: "no-repeat",
//     //     tags: ["art", "fluid", "blue", "green", "orange", "yellow"],
//     // },
//     orangeYellowBlueFluidPaint: {
//         link: "https://wallpaperaccess.com/full/1323412.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["wave", "blue", "red", "yellow", "rainbow"],
//     },
//     orangeYellowBlueFluidPaint: {
//         link: "https://wallpaperaccess.com/full/5261426.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["wave", "fluid", "blue", "white"],
//     },
//     orangeYellowBlueFluidPaint: {
//         link: "https://wallpaperaccess.com/full/1393261.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "orange", "yellow", "rainbow"],
//     },
//     lightBlueBlackFluidPaint: {
//         link: "https://wallpaperaccess.com/full/7144826.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "white", "black"],
//     },
//     blueBlackPinkFluidPaint: {
//         link: "https://wallpaperaccess.com/full/1393456.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "pink", "black"],
//     },
//     lightBlueBlackFluidPaint: {
//         link: "https://wallpaperaccess.com/full/2125382.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "white", "black"],
//     },
//     bluePurpleRedFluidPaint: {
//         link: "https://wallpaperaccess.com/full/2340129.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "purple", "red"],
//     },
//     lightBlueOrangeFluidPaint: {
//         link: "https://wallpaperaccess.com/full/2361602.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "orange"],
//     },
//     darkBlueWhiteFluidPaint: {
//         link: "https://wallpaperaccess.com/full/1943708.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "white", "black"],
//     },
//     pinkPurpleBlueFluidPaint: {
//         link: "https://wallpaperaccess.com/full/2245332.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "pink", "black", "Purple"],
//     },
//     orangeBlackBlueFluidPaint: {
//         link: "https://wallpaperaccess.com/full/2361576.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "orange", "black"],
//     },
//     orangeBlueFluidPaint: {
//         link: "https://wallpaperaccess.com/full/1836721.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "orange"],
//     },
//     darkBluePurpleFluidPaint: {
//         link: "https://wallpaperaccess.com/full/2064925.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "blue", "purple"],
//     },
//     greenBlueFluidPaint: {
//         link: "https://wallpaperaccess.com/full/136866.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["art", "fluid", "green", "blue"],
//     },
//     blueFabricWave: {
//         link: "https://wallpaperaccess.com/full/5934471.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["fabric", "wave"],
//     },
//     earthSurface: {
//         link: "https://wallpaperaccess.com/full/5934395.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["space", "blue", "black"],
//     },
//     eclipseSpace: {
//         link: "https://wallpaperaccess.com/full/19605.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["space", "blue", "black"],
//     },
//     earthTop: {
//         link: "https://wallpaperaccess.com/full/19607.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["space", "blue", "black"],
//     },
//     lightBlueTwoDimentionalWave: {
//         link: "https://wallpaperaccess.com/full/5934397.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["2d", "wave", "blue", "pink"],
//     },
//     blackPolynomial: {
//         link: "https://wallpaperaccess.com/full/5509779.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["black", "polynomial"],
//     },
//     bluePowderSplash: {
//         link: "https://wallpaperaccess.com/full/5441840.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["black", "blue", "powder"],
//     },
//     bluePinkFadyWaves: {
//         link: "https://wallpaperaccess.com/full/7522312.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["2d", "wave", "blue", "pink", "purple"],
//     },
//     redBlackWaves: {
//         link: "https://wallpaperaccess.com/full/7522400.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["wave", "red", "black"],
//     },
//     linePaths: {
//         link: "https://wallpaperaccess.com/full/7522179.jpg",
//         size: "cover",
//         repeat: "no-repeat",
//         tags: ["2d", "black", "blue", "red", "pink"],
//     },
//     windows11: {
//         link: "https://wallpaperaccess.com/full/6233787.jpg",
//         repeat: "no-repeat",
//         size: "cover",
//         tags: ["wave", "blue", "black"],
//     },
//     montery: {
//         link: "https://media.idownloadblog.com/wp-content/uploads/2021/06/macOS-Monterey-wallpaper-Dark.jpg",
//         repeat: "no-repeat",
//         size: "cover",
//         tags: ["wave", "2d", "purple", "pink", "red"],
//     },
//     bluePinkTwoDimentionalWaves: {
//         link: "https://i.redd.it/52f61nfzmwl51.jpg",
//         repeat: "no-repeat",
//         size: "cover",
//         tags: ["blue", "pink", "2d", "wave"],
//     },
// }

// background image
function backgroundImageStylesOnStart() {

    backgroundPictures.insertRule(`
    body.backgroundImage [data-asset-chat-background-dark] {
        background: transparent;
    }`);

    backgroundPictures.insertRule(`
    html[dir="ltr"] div[data-testid="conversation-panel-wrapper"] {
        background: var(--conversation-panel-background);
        opacity: 1;
        transition: all 1s ease-in-out 1s;
        background-size: cover;
        background-position: center;
    }`);

    backgroundPictures.insertRule(`
    html[dir=ltr] div[data-testid="conversation-panel-wrapper"] {
        background: var(--conversation-panel-background);
    }`);
}


function changeBackground(force = false, tags, filters){
    if (force || (!randInt(2) && provider.userData.appearance.backgroundImg)){
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
        console.log(backgroundPictures.cssRules.length - 1, Object.values(images).length, imgIndex);

        backgroundPictures.deleteRule(0);
        backgroundPictures.insertRule(`
        html[dir=ltr] body.backgroundImage div[id="main"] {
            background: #00000000 url("${img.link}") ${img.repeat} center;
            background-size: ${img.size};
        }`);
    }
}