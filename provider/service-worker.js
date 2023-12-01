importScripts("./provider.js");

class VersionProvider extends Provider {
    constructor() {
        super(() => {}, false, false);
    }

    async getVersion(handler = version => {}) {
        let v = (await this.userStorage.sync.get("version"))["version"];
        
        if (!v) this.setData({"version": this.version});

        if (handler && typeof(handler) == 'function') handler(v);

        return v;
    }

    versionMap(version = this.version) {
        
        let iterator = (obj) => {
            if (Array.isArray(obj)) return {[obj[0]]: obj[1]};

            else if (typeof(obj) == "object") {
                let mainObj = {};
                
                for (const k in obj) mainObj = {...mainObj, ...iterator(obj[k])};
                
                return mainObj;
            }
        }

        return iterator(this.userData.allDefaults[version]);
    }

    mergeVariables(versionOld, versionNew = this.version) {
        let oldMap = this.versionMap(versionOld);
        
        let iterator = (refObj) => {
            if (Array.isArray(refObj)) {
                return refObj[0] in oldMap ? oldMap[refObj[0]] : refObj[1];
            }
            else if (typeof(refObj) == "object") {
                let mainObj = {};
                
                for (const k in refObj) mainObj[k] = iterator(refObj[k]);
                
                return mainObj;
            } else return refObj
        }

        return iterator(this.userData.allDefaults[versionNew])
    }
}

async function updateVersion() {
    let provider = new VersionProvider();
    let curVersion = await provider.getVersion();

    console.log("update: ", curVersion != provider.version)
    
    if (!curVersion) provider.init();
    else if (curVersion != provider.version) {
        await provider.userData.init();
        
        provider.mergeVariables(curVersion);
        provider.setData();
    } else return false;
}

updateVersion();