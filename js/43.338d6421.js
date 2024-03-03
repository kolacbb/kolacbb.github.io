"use strict";(self["webpackChunkAppLocalize"]=self["webpackChunkAppLocalize"]||[]).push([[43],{2933:function(t,e,i){i.d(e,{B:function(){return A},Cl:function(){return I},Fx:function(){return c},Uc:function(){return m},_I:function(){return d},e5:function(){return l},fl:function(){return u},fx:function(){return g},mW:function(){return a},th:function(){return s},ty:function(){return r},x4:function(){return o}});var n=i(3329);const o=t=>n.Z.post("/user/login",t),l=t=>n.Z.post("/project/get",t),a=t=>n.Z.post("/project/all",t),A=t=>n.Z.post("/project/add",t),r=t=>n.Z.post("/project/update",t),s=t=>n.Z.post("/project/delete",t),c=t=>n.Z.post("/string/get",t),u=t=>n.Z.post("/string/delete",t),d=t=>n.Z.post("/string/add",t),I=t=>n.Z.post("/string/update",t),g=t=>n.Z.post("/string/translate",t),m=t=>n.Z.post("string/translate/single",t)},9043:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var n=function(){var t=this,e=t._self._c;return e("div",[e("el-container",{staticStyle:{height:"100vh"}},[e("el-header",[e("main-header")],1),e("el-main",[e("router-view")],1)],1)],1)},o=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-container"},[e("div",{staticClass:"l-content"},[e("div",{staticStyle:{display:"flex","align-items":"center"},on:{click:function(e){return t.handleMenuSelect("/home")}}},[e("img",{staticStyle:{width:"32px",height:"32px",margin:"16px"},attrs:{src:i(6949)}}),e("h3",[t._v("AppLocalize")])]),e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleMenuSelect}},[e("el-menu-item",{attrs:{index:"/translator"}},[t._v("Translate")])],1)],1),e("div",{staticClass:"r-content"},[e("el-button",{staticStyle:{"margin-right":"20px","font-weight":"bold"},attrs:{type:"text"},on:{click:t.handleToConsole}},[t._v("Console")]),e("el-dialog",{attrs:{title:"Login",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{attrs:{model:t.form}},[e("el-form-item",{attrs:{label:"Email"}},[e("el-input",{model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("el-form-item",{attrs:{label:"Password"}},[e("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Cancel")]),e("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Login")])],1)],1)],1)])},a=[],A=(i(7658),i(7731)),r=i(2933),s={data(){return{dialogFormVisible:!1,formLabelWidth:"80px",form:{email:"",password:""}}},methods:{handleToConsole(){const t=A.Z.get("token"),e=A.Z.get("name");null!=t&&null!=e?this.$router.push("/projects"):this.dialogFormVisible=!0},handleLogin(){const t=A.Z.get("token"),e=A.Z.get("name");null!=t&&null!=e||(this.dialogFormVisible=!0)},handleDocs(){window.location.href="https://applocalize.top/docs/guide"},submit(){console.log(this.form),(0,r.x4)(this.form).then((t=>{200==t.code&&(this.dialogFormVisible=!1,A.Z.set("token",t.data.token),A.Z.set("name",t.data.name)),console.log(t)}))},handleMenuSelect(t){this.$route.path!=t&&this.$router.push(t)}},computed:{loginButton(){const t=A.Z.get("token"),e=A.Z.get("name");return null!=t&&null!=e?e:"Login"},activeIndex(){return this.$route.path}}},c=s,u=i(3736),d=(0,u.Z)(c,l,a,!1,null,"e1214d92",null),I=d.exports,g=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"background-color":"white","padding-bottom":"10px"}},[e("div",{staticClass:"footer-container"})])}],p={data(){return{}},methods:{},computed:{}},Z=p,h=(0,u.Z)(Z,g,m,!1,null,"39ebb170",null),B=h.exports,E={data(){return{}},components:{MainHeader:I,MainFooter:B}},C=E,b=(0,u.Z)(C,n,o,!1,null,"6781699c",null),f=b.exports},6949:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMjNUMTA6NTM6NTUrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTI2VDIwOjM5OjU1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTI2VDIwOjM5OjU1KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM3MGM2YjU2LTYzMmUt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"}}]);
//# sourceMappingURL=43.338d6421.js.map