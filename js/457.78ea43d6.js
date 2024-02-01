"use strict";(self["webpackChunkAppLocalize"]=self["webpackChunkAppLocalize"]||[]).push([[457],{437:function(t,e,a){a.d(e,{Fx:function(){return s},TW:function(){return r},Vb:function(){return n},_F:function(){return i}});var l=a(3329);const n=t=>l.Z.post("/translate/languages",t),s=t=>l.Z.post("/translate/get",t),i=t=>l.Z.post("/translate/submit",t),r=t=>{let e={headers:{"Content-Type":"multipart/form-data"}};return l.Z.postForm("/translate/formatted",t,e)}},1457:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"App"},[e("el-radio-group",{attrs:{size:"small"},model:{value:t.selectedPlatForm,callback:function(e){t.selectedPlatForm=e},expression:"selectedPlatForm"}},t._l(t.platforms,(function(t){return e("el-radio",{attrs:{plain:"",label:t,border:""}})})),1),e("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("h3",{staticStyle:{"margin-right":"12px"}},[t._v("Source")]),e("el-select",{attrs:{filterable:""},model:{value:t.sourceLanguage,callback:function(e){t.sourceLanguage=e},expression:"sourceLanguage"}},t._l(t.languageData,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),e("el-col",{attrs:{span:12}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("h3",{staticStyle:{"margin-right":"12px"}},[t._v("Targets")]),e("el-select",{attrs:{multiple:"",filterable:"","collapse-tags":"",placeholder:"Selected Languages"},model:{value:t.languagesArray,callback:function(e){t.languagesArray=e},expression:"languagesArray"}},t._l(t.languageData,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:"EN"==t.value}})})),1)],1)]),e("el-col",{attrs:{span:t.getTotalSpanCount()}},[e("div",{staticClass:"drop-area",class:{"highlight-border":t.isDragging},on:{dragover:function(t){t.preventDefault()},drop:t.handleDrop,dragenter:function(e){t.isDragging=!0},dragleave:function(e){t.isDragging=!1}}},[t.selectedFile?e("div",{staticStyle:{display:"flex","flex-direction":"column",width:"60%",margin:"auto"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","background-color":"#f1f2f3",width:"100%","border-radius":"10px","min-height":"48px"}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("i",{staticClass:"el-icon-document-remove",staticStyle:{margin:"20px"}}),e("span",[t._v(t._s(t.selectedFile.name))])]),e("i",{staticClass:"el-icon-close",staticStyle:{margin:"20px"},on:{click:function(e){t.selectedFile=null}}})]),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("span",{staticStyle:{"font-weight":"normal",color:"indianred","font-size":"16px","margin-top":"8px"}},[t._v(t._s(t.translateErrorDesc)+" ")]),e("el-button",{staticStyle:{"font-weight":"bold","margin-top":"10px"},attrs:{loading:t.isTransLoading,type:"primary"},on:{click:function(e){return t.handleTransClick()}}},[t._v(" "+t._s(t.getTranslateBtnText())+" ")])],1)]):e("h4",{staticStyle:{"text-align":"center",margin:"auto",width:"100%","font-size":"20px","font-weight":"normal",color:"#333333"}},[t._v(t._s(t.platformDesc[t.selectedPlatForm]))])])]),t.selectedFile?t._e():e("el-col",{attrs:{span:12}},[e("div",{staticStyle:{border:"1px solid #e0e0e0","border-radius":"8px","min-height":"200px",background:"#f5f5f5",display:"flex","flex-direction":"column"}},[e("span",{staticStyle:{margin:"12px","font-size":"20px","font-weight":"normal",color:"#333333"}},[t._v("Translation")])])])],1),e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"self-start"}},[e("div"),e("div",[e("el-link",{staticStyle:{"font-size":"11px",color:"#999"},attrs:{href:t.sendEmail()}},[t._v("Send feedback")])],1)])],1),t._m(0)])},n=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[e("span",{staticStyle:{"padding-top":"100px",color:"#999999"}},[t._v("@Power by AppLocalize.top")])])}],s=(a(6229),a(7330),a(2062),a(2801),a(1439),a(7585),a(5315),a(7658),a(6693)),i=a(437),r={data(){return{platforms:["Android","iOS"],platformDesc:{Android:"Drag and drop your string.xml",iOS:"Drag and drop your Localizable.strings"},selectedPlatForm:"Android",sourceLanguage:"EN",languageData:[],languagesArray:[],isDragging:!1,selectedFile:null,isTransLoading:!1,translateResult:null,translateErrorDesc:null}},methods:{getTranslateBtnText(){return console.log(null!=this.translateResult,"getTranslateBtnText"),this.isTransLoading?"Translating...":null!=this.translateResult?"Download translation":"Translate"},sendEmail(){return`mailto:kolacbb@gmail.com?subject=${encodeURIComponent("AppLocalize Feedback")}`},getTotalSpanCount(){return null==this.selectedFile?12:24},handleDrop(t){t.preventDefault(),this.isDragging=!1;const e=t.dataTransfer.files;0<e.length&&(this.selectedFile=e[0],this.translateResult=null)},handleTransClick(){console.log(null!=this.translateResult,"handleTransClick"),null==this.translateResult?this.startTranslate():this.downloadOutput()},downloadOutput(){const t=document.createElement("a");t.href=URL.createObjectURL(this.translateResult),t.download="values.zip",t.innerHTML="Download File",document.body.appendChild(t),t.click(),document.body.removeChild(t)},startTranslate(){this.isTransLoading=!0;let t=new FormData;t.append("files",this.selectedFile),t.append("source",this.sourceLanguage),t.append("platform",this.selectedPlatForm),t.append("targets",this.sourceLanguage+","+this.languagesArray),(0,i.TW)(t).then((t=>{this.isTransLoading=!1,200==t.code&&null!=t.data?(console.log(200==t.code,null!=t.data),this.translateResult=this.base64ToBlob(t.data),console.log(null!=this.translateResult,t)):this.translateErrorDesc=t.msg}))},base64ToBlob(t){const e=window.atob(t),a=new Uint8Array(e.length);for(let l=0;l<e.length;l++)a[l]=e.charCodeAt(l);return new Blob([a],{type:"application/zip"})}},mounted(){const t=[];Object.keys(s.Z.state.allLanguages).forEach((e=>{t.push({label:s.Z.state.allLanguages[e],value:s.Z.state.languageKey[e]})})),this.languageData=t}},o=r,c=a(3736),u=(0,c.Z)(o,l,n,!1,null,"2be944d0",null),d=u.exports}}]);
//# sourceMappingURL=457.78ea43d6.js.map