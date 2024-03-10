(function(){"use strict";var e={5477:function(e,n,a){var t=a(8047),i=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(a(7658),a(6573)),s=a(1369);const l={apiKey:"AIzaSyAg5hGD_yastgkSEd2s5ddSea2BhOo3azA",authDomain:"kola-cbb.firebaseapp.com",projectId:"kola-cbb",storageBucket:"kola-cbb.appspot.com",messagingSenderId:"225319898424",appId:"1:225319898424:web:ed14f17fa64d1a02ac85cd",measurementId:"G-FGNMPYZP4W"},u=o.ZF(l);s.IH(u);var c={name:"app",components:{},methods:{clickMain(){this.$router.push("/")}}},d=c,h=a(3736),p=(0,h.Z)(d,i,r,!1,null,null,null),f=p.exports,m=a(2260),b=a.n(m),g=a(4928),S=a(7894);S.ZP.use(g.Z),t["default"].use(b());var A=a(9269),v=a(7731);const k=()=>Promise.all([a.e(329),a.e(39)]).then(a.bind(a,8039)),E=()=>Promise.all([a.e(329),a.e(56)]).then(a.bind(a,56)),P=()=>Promise.all([a.e(329),a.e(975)]).then(a.bind(a,7975)),T=()=>Promise.all([a.e(329),a.e(559)]).then(a.bind(a,4559)),y=()=>Promise.all([a.e(329),a.e(347)]).then(a.bind(a,5347)),N=()=>Promise.all([a.e(329),a.e(737)]).then(a.bind(a,4737)),C=()=>a.e(557).then(a.bind(a,3557)),I=()=>a.e(87).then(a.bind(a,1087)),_=()=>a.e(354).then(a.bind(a,354)),L=()=>a.e(70).then(a.bind(a,70)),K=()=>Promise.all([a.e(329),a.e(534)]).then(a.bind(a,4534)),j=()=>Promise.all([a.e(329),a.e(941)]).then(a.bind(a,941)),B=()=>Promise.all([a.e(329),a.e(731)]).then(a.bind(a,6731)),w=()=>Promise.all([a.e(329),a.e(701)]).then(a.bind(a,5701)),M=()=>Promise.all([a.e(329),a.e(936)]).then(a.bind(a,1936)),U=()=>Promise.all([a.e(329),a.e(503)]).then(a.bind(a,1503));t["default"].use(A.ZP);const H=[{path:"/",name:"main",component:T,redirect:"/home",children:[{path:"/home",name:"home",component:I},{path:"/pricing",name:"pricing",component:_},{path:"/translator",name:"translator",component:j},{path:"/support",name:"support",component:L},{path:"/screenshot",name:"support",component:U}]},{path:"/projects",component:y,redirect:"/projects/list",children:[{path:"/projects/list",name:"list",component:N},{path:"/projects/create",name:"create",component:C}]},{path:"/project",component:P,children:[{path:"/project/:id/dashboard",component:B},{path:"/project/:id/strings",component:k},{path:"/project/:id/submission",component:E},{path:"/project/:id/listing",component:w},{path:"/project/:id/screenshots",component:M}]},{path:"/translate/:id",name:"translate",component:K}],O=new A.ZP({mode:"history",routes:H});O.beforeEach(((e,n,a)=>{const t=v.Z.get("token");console.log(e.name),t||e.name||"main"==e.name?a():a({name:"main"})}));var R=O,z=a(7896),F={state:{isCollapse:!1,projectName:"Projects",currentTabName:"Strings",projectData:{}},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},updateProjectName(e,n){e.projectName=n},updateTabName(e,n){e.currentTabName=n},updateProjectData(e,n){e.projectData=n}}},Z=a(6693);t["default"].use(z.ZP);var G=new z.ZP.Store({modules:{tab:F,languages:Z.Z}});t["default"].config.productionTip=!1,new t["default"]({router:R,store:G,render:e=>e(f)}).$mount("#app")},6693:function(e,n){n.Z={state:{framePhoneType:{"Pixel 3 (Black)":0},languageKey:{en:"EN",af:"AF",sq:"SQ",am:"AM",ar:"AR",hy:"HY",asAs:"AS_AS",az:"AZ",bn:"BN",eu:"EU",be:"BE",bs:"BS",bg:"BG",ca:"CA",zhHk:"ZH_HK",zh:"ZH",zhTw:"ZH_TW",hr:"HR",cs:"CS",da:"DA",nl:"NL",enAu:"EN_AU",enCa:"EN_CA",enIn:"EN_IN",enGb:"EN_GB",enXc:"EN_XC",et:"ET",tl:"TL",fi:"FI",frCa:"FR_CA",fr:"FR",gl:"GL",ka:"KA",de:"DE",el:"EL",gu:"GU",iw:"IW",hi:"HI",hu:"HU",isIs:"IS_IS",id:"ID",itIt:"IT_IT",ja:"JA",knIn:"KN_IN",kk:"KK",km:"KM",ko:"KO",ky:"KY",lo:"LO",lv:"LV",ltLt:"LT_LT",mk:"MK",ms:"MS",ml:"ML",mr:"MR",mn:"MN",my:"MY",ne:"NE",nb:"NB",orOr:"OR_OR",fa:"FA",pl:"PL",ptBr:"PT_BR",ptPt:"PT_PT",pa:"PA",ro:"RO",ru:"RU",sr:"SR",si:"SI",sk:"SK",sl:"SL",es:"ES",es419:"ES_419",esUs:"ES_US",sw:"SW",sv:"SV",ta:"TA",te:"TE",th:"TH",tr:"TR",uk:"UK",ur:"UR",uz:"UZ",vi:"VI",zu:"ZU"},allLanguages:{en:"English",af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",asAs:"Assamese",az:"Azerbaijani",bn:"Bangla",eu:"Basque",be:"Belarusian",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",zhHk:"Chinese(Hong Kong)",zh:"Chinese(Simplified)",zhTw:"Chinese(Traditional)",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",enAu:"English(Australia)",enCa:"English(Canada)",enIn:"English(IN)",enGb:"English(United Kingdom)",enXc:"English(XC)",et:"Estonian",tl:"Filipino",fi:"Finnish",frCa:"French(Canada)",fr:"French(France)",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gu:"Gujarati",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",isIs:"Icelandic",id:"Indonesian",itIt:"Italian",ja:"Japanese",knIn:"Kannada",kk:"Kazakh",km:"Khmer",ko:"Korean",ky:"Kyrgyz",lo:"Lao",lv:"Latvian",ltLt:"Lithuanian",mk:"Macedonian",ms:"Malay",ml:"Malayalam",mr:"Marathi",mn:"Mongolian",my:"Myanmar",ne:"Nepali",nb:"Norwegian",orOr:"Odia",fa:"Persian",pl:"Polish",ptBr:"Portuguese(Brazil)",ptPt:"Portuguese(Portugal)",pa:"Punjabi",ro:"Romanian",ru:"Russian",sr:"Serbian",si:"Sinhala",sk:"Slovak",sl:"Slovenian",es:"Spanish",es419:"Spanish(Latin America)",esUs:"Spanish(United States)",sw:"Swahili",sv:"Swedish",ta:"Tamil",te:"Telugu",th:"Thai",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",zu:"Zulu"},languages:{EN:"English",AF:"Afrikaans",SQ:"Albanian",AM:"Amharic",AR:"Arabic",HY:"Armenian",AS_AS:"Assamese",AZ:"Azerbaijani",BN:"Bangla",EU:"Basque",BE:"Belarusian",BS:"Bosnian",BG:"Bulgarian",CA:"Catalan",ZH_HK:"Chinese(Hong Kong)",ZH:"Chinese(Simplified)",ZH_TW:"Chinese(Traditional)",HR:"Croatian",CS:"Czech",DA:"Danish",NL:"Dutch",EN_AU:"English(Australia)",EN_CA:"English(Canada)",EN_IN:"English(IN)",EN_GB:"English(United Kingdom)",EN_XC:"English(XC)",ET:"Estonian",TL:"Filipino",FI:"Finnish",FR_CA:"French(Canada)",FR:"French(France)",GL:"Galician",KA:"Georgian",DE:"German",EL:"Greek",GU:"Gujarati",IW:"Hebrew",HI:"Hindi",HU:"Hungarian",IS_IS:"Icelandic",ID:"Indonesian",IT_IT:"Italian",JA:"Japanese",KN_IN:"Kannada",KK:"Kazakh",KM:"Khmer",KO:"Korean",KY:"Kyrgyz",LO:"Lao",LV:"Latvian",LT_LT:"Lithuanian",MK:"Macedonian",MS:"Malay",ML:"Malayalam",MR:"Marathi",MN:"Mongolian",MY:"Myanmar",NE:"Nepali",NB:"Norwegian",OR_OR:"Odia",FA:"Persian",PL:"Polish",PT_BR:"Portuguese(Brazil)",PT_PT:"Portuguese(Portugal)",PA:"Punjabi",RO:"Romanian",RU:"Russian",SR:"Serbian",SI:"Sinhala",SK:"Slovak",SL:"Slovenian",ES:"Spanish",ES_419:"Spanish(Latin America)",ES_US:"Spanish(United States)",SW:"Swahili",SV:"Swedish",TA:"Tamil",TE:"Telugu",TH:"Thai",TR:"Turkish",UK:"Ukrainian",UR:"Urdu",UZ:"Uzbek",VI:"Vietnamese",ZU:"Zulu"}}}}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var r=n[t]={exports:{}};return e[t].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(n,t,i,r){if(!t){var o=1/0;for(c=0;c<e.length;c++){t=e[c][0],i=e[c][1],r=e[c][2];for(var s=!0,l=0;l<t.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](t[l])}))?t.splice(l--,1):(s=!1,r<o&&(o=r));if(s){e.splice(c--,1);var u=i();void 0!==u&&(n=u)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[t,i,r]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(n,t){return a.f[t](e,n),n}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{39:"2b33ad58",56:"5decab1f",70:"f95b774f",87:"9b1ceb1b",329:"25582389",347:"be7fce61",354:"e6fa4661",503:"021fe2f3",534:"9fe490f1",557:"17ade30d",559:"c64c732c",701:"f9319622",731:"03a5241f",737:"c71a1060",936:"28ffacf0",941:"83c32ba9",975:"5caa7ba7"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{39:"fe9135e9",87:"b91483bd",347:"db9d74c0",503:"260cb15f",534:"61bbd507",557:"05a5c7d6",559:"80db23c4",731:"4e4681f0",737:"a04d0f2e",941:"41edc7ae",975:"8cd6e44d"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="AppLocalize:";a.l=function(t,i,r,o){if(e[t])e[t].push(i);else{var s,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",n+r),s.src=t),e[t]=[i];var h=function(n,a){s.onerror=s.onload=null,clearTimeout(p);var i=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(a)})),n)return n(a)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,a,t,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,r.parentNode&&r.parentNode.removeChild(r),i(l)}};return r.onerror=r.onload=o,r.href=n,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var a=document.getElementsByTagName("link"),t=0;t<a.length;t++){var i=a[t],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===n))return i}var o=document.getElementsByTagName("style");for(t=0;t<o.length;t++){i=o[t],r=i.getAttribute("data-href");if(r===e||r===n)return i}},t=function(t){return new Promise((function(i,r){var o=a.miniCssF(t),s=a.p+o;if(n(o,s))return i();e(t,s,null,i,r)}))},i={143:0};a.f.miniCss=function(e,n){var a={39:1,87:1,347:1,503:1,534:1,557:1,559:1,731:1,737:1,941:1,975:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=t(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}}(),function(){var e={143:0};a.f.j=function(n,t){var i=a.o(e,n)?e[n]:void 0;if(0!==i)if(i)t.push(i[2]);else{var r=new Promise((function(a,t){i=e[n]=[a,t]}));t.push(i[2]=r);var o=a.p+a.u(n),s=new Error,l=function(t){if(a.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};a.l(o,l,"chunk-"+n,n)}},a.O.j=function(n){return 0===e[n]};var n=function(n,t){var i,r,o=t[0],s=t[1],l=t[2],u=0;if(o.some((function(n){return 0!==e[n]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var c=l(a)}for(n&&n(t);u<o.length;u++)r=o[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},t=self["webpackChunkAppLocalize"]=self["webpackChunkAppLocalize"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(5477)}));t=a.O(t)})();
//# sourceMappingURL=app.318b6bbb.js.map