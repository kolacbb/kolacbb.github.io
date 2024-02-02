"use strict";(self["webpackChunkAppLocalize"]=self["webpackChunkAppLocalize"]||[]).push([[267],{437:function(t,e,a){a.d(e,{Fx:function(){return s},TW:function(){return o},Vb:function(){return l},_F:function(){return i}});var n=a(3329);const l=t=>n.Z.post("/translate/languages",t),s=t=>n.Z.post("/translate/get",t),i=t=>n.Z.post("/translate/submit",t),o=t=>{let e={headers:{"Content-Type":"multipart/form-data"}};return n.Z.postForm("/translate/formatted",t,e)}},7267:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"App"},[e("el-radio-group",{attrs:{size:"small"},model:{value:t.selectedPlatForm,callback:function(e){t.selectedPlatForm=e},expression:"selectedPlatForm"}},t._l(t.platforms,(function(t){return e("el-radio",{attrs:{plain:"",label:t,border:""}})})),1),e("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[e("el-col",{attrs:{span:t.getTotalSpanCount()}},[e("div",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[e("h3",{staticStyle:{"margin-right":"12px"}},[t._v("Source")]),e("el-select",{staticStyle:{flex:"1","margin-right":"10px"},attrs:{filterable:""},model:{value:t.sourceLanguage,callback:function(e){t.sourceLanguage=e},expression:"sourceLanguage"}},t._l(t.languageData,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isTextModel(),expression:"isTextModel()"}],staticStyle:{"font-weight":"bold"},attrs:{loading:t.isTransLoading,type:"primary",size:"small"},on:{click:function(e){return t.startTranslate()}}},[t._v(" "+t._s(t.getTranslateBtnText()))])],1)]),e("el-col",{attrs:{span:t.getTotalSpanCount()}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("h3",{staticStyle:{"margin-right":"12px"}},[t._v("Targets")]),e("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","collapse-tags":"",placeholder:"Selected Languages"},model:{value:t.languagesArray,callback:function(e){t.languagesArray=e},expression:"languagesArray"}},t._l(t.languageData,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),e("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:t.getTotalSpanCount()}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isTextModel(),expression:"isTextModel()"}],staticStyle:{display:"flex","flex-direction":"column",border:"1px solid #e0e0e0","border-radius":"8px"}},[e("el-input",{staticClass:"custom-input",staticStyle:{width:"100%",height:"100px"},attrs:{type:"textarea",placeholder:"Content",resize:"none","show-word-limit":""},model:{value:t.textInputContent,callback:function(e){t.textInputContent=e},expression:"textInputContent"}}),e("el-input",{staticClass:"custom-input",staticStyle:{width:"100%",height:"100px","border-top":"1px solid #e0e0e0"},attrs:{type:"textarea",placeholder:"Context",resize:"none","show-word-limit":""},model:{value:t.textInputContext,callback:function(e){t.textInputContext=e},expression:"textInputContext"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isTextModel(),expression:"!isTextModel()"}],staticClass:"drop-area",class:{"highlight-border":t.isDragging},on:{dragover:function(t){t.preventDefault()},drop:t.handleDrop,dragenter:function(e){t.isDragging=!0},dragleave:function(e){t.isDragging=!1}}},[t.selectedFile?e("div",{staticStyle:{display:"flex","flex-direction":"column",width:"60%",margin:"auto"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","background-color":"#f1f2f3",width:"100%","border-radius":"10px","min-height":"48px"}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("i",{staticClass:"el-icon-document-remove",staticStyle:{margin:"20px"}}),e("span",[t._v(t._s(t.selectedFile.name))])]),e("i",{staticClass:"el-icon-close",staticStyle:{margin:"20px"},on:{click:function(e){t.selectedFile=null}}})]),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("span",{staticStyle:{"font-weight":"normal",color:"indianred","font-size":"16px","margin-top":"8px"}},[t._v(t._s(t.translateErrorDesc)+" ")]),e("el-button",{staticStyle:{"font-weight":"bold","margin-top":"10px"},attrs:{loading:t.isTransLoading,type:"primary"},on:{click:function(e){return t.handleTransClick()}}},[t._v(" "+t._s(t.getTranslateBtnText())+" ")])],1)]):e("h4",{staticStyle:{"text-align":"center",margin:"auto",width:"100%","font-size":"20px","font-weight":"normal",color:"#333333"}},[t._v(" "+t._s(t.platformDesc[t.selectedPlatForm])+" ")])])]),t.selectedFile?t._e():e("el-col",{attrs:{span:t.getMaxColSpanCount()}},[e("div",{staticStyle:{border:"1px solid #e0e0e0","border-radius":"8px","min-height":"200px",background:"#f5f5f5",display:"flex","flex-direction":"column"}},[e("span",{staticStyle:{margin:"12px","font-size":"20px","font-weight":"normal",color:"#333333","white-space":"pre-line"}},[t._v(t._s(this.textTransResult))])])])],1),e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"self-start"}},[e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isTextModel(),expression:"isTextModel()"}],staticStyle:{"font-weight":"normal",color:"indianred","font-size":"16px","margin-top":"8px",width:"40%"}},[t._v(t._s(t.translateErrorDesc)+" ")])]),e("div",[e("el-link",{staticStyle:{"font-size":"11px",color:"#999"},attrs:{href:t.sendEmail()}},[t._v("Send feedback")])],1)])],1),t._m(0)])},l=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[e("span",{staticStyle:{"padding-top":"100px","padding-bottom":"100px",color:"#999999"}},[t._v("@Power by AppLocalize.top")])])}],s=(a(6229),a(7330),a(2062),a(2801),a(1439),a(7585),a(5315),a(7658),a(6693)),i=a(437),o={data(){return{platforms:["Text","Android","iOS"],platformDesc:{Text:"",Android:"Drag and drop your string.xml",iOS:"Drag and drop your Localizable.strings"},selectedPlatForm:"Text",sourceLanguage:"EN",languageData:[],languagesArray:["ZH"],isDragging:!1,selectedFile:null,isTransLoading:!1,translateResult:null,translateErrorDesc:null,textInputContent:"",textInputContext:"",isMobile:!1,textTransResult:"Translation"}},methods:{getMaxColSpanCount(){return this.isMobile?24:12},isTextModel(){let t="Text"==this.selectedPlatForm;return t||(this.textTransResult="Translation"),t},getTranslateBtnText(){return console.log(null!=this.translateResult,"getTranslateBtnText"),this.isTransLoading?"Translating...":null!=this.translateResult?"Download translation":"Translate"},sendEmail(){return`mailto:kolacbb@gmail.com?subject=${encodeURIComponent("AppLocalize Feedback")}`},getTotalSpanCount(){return null==this.selectedFile?this.getMaxColSpanCount():24},handleDrop(t){t.preventDefault(),this.isDragging=!1;const e=t.dataTransfer.files;0<e.length&&(this.selectedFile=e[0],this.translateResult=null)},handleTransClick(){console.log(null!=this.translateResult,"handleTransClick"),null==this.translateResult?this.startTranslate():this.downloadOutput()},downloadOutput(){const t=document.createElement("a");t.href=URL.createObjectURL(this.translateResult),t.download="values.zip",t.innerHTML="Download File",document.body.appendChild(t),t.click(),document.body.removeChild(t)},startTranslate(){this.isTransLoading=!0,this.translateErrorDesc=null;let t=this.isTextModel(),e=new FormData;if(t){if(null==this.textInputContent||""==this.textInputContent)return this.translateErrorDesc="Need to enter the content to be translated.",void(this.isTransLoading=!1);e.append("files",this.stringToBlob(JSON.stringify({text:this.textInputContent,context:this.textInputContext})))}else e.append("files",this.selectedFile);e.append("source",this.sourceLanguage),e.append("platform",this.selectedPlatForm),e.append("targets",this.languagesArray+","+this.sourceLanguage),(0,i.TW)(e).then((e=>{this.isTransLoading=!1,200==e.code&&null!=e.data?(console.log(200==e.code,null!=e.data),t?this.textTransResult=e.data:this.translateResult=this.base64ToBlob(e.data),console.log(null!=this.translateResult,e)):this.translateErrorDesc=e.msg}))},stringToBlob(t){console.log(t);const e=new TextEncoder,a=e.encode(t);return new Blob([a],{type:"text/plain"})},base64ToBlob(t){const e=window.atob(t),a=new Uint8Array(e.length);for(let n=0;n<e.length;n++)a[n]=e.charCodeAt(n);return new Blob([a],{type:"application/zip"})},checkMobile(){this.isMobile=window.innerWidth<768}},mounted(){const t=[];Object.keys(s.Z.state.allLanguages).forEach((e=>{t.push({label:s.Z.state.allLanguages[e],value:s.Z.state.languageKey[e]})})),this.languageData=t,this.isMobile=window.innerWidth<768,window.addEventListener("resize",this.checkMobile)}},r=o,c=a(3736),d=(0,c.Z)(r,n,l,!1,null,"898c83b6",null),u=d.exports}}]);
//# sourceMappingURL=267.d3a11a17.js.map