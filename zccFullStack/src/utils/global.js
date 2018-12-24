let urlhttp = "http://";

let domain = "127.0.0.1:8090/";
//项目后台发布名称
let Backstage = "api/";
//服务器域名
let host = domain + Backstage;
export default {
    getHttpmain() {
        return httpurl.url;
    },
};
global.HERO = urlhttp + host + "hero";

global.SIDEMENU = urlhttp + host + "sideMenu";

global.HEROLIST = urlhttp + host + "heroList";

global.POSTHERO = urlhttp + host + "hero";
global.DELETEHERO = urlhttp + host + "hero";
global.EIDTHERO = urlhttp + host + "hero";









