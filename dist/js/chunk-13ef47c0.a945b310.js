(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13ef47c0"],{4916:function(s,t,e){},5456:function(s,t,e){s.exports=e.p+"img/login-logo.c99fbfa9.png"},"7b49":function(s,t,e){"use strict";var a=e("4916"),i=e.n(a);i.a},c6f7:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"login"},[s._m(0),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container"},[e("div",{staticClass:"login-form"},[s._m(1),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入帐号"},domProps:{value:s.username},on:{input:function(t){t.target.composing||(s.username=t.target.value)}}})]),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})]),e("div",{staticClass:"btn-box"},[e("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:s.login}},[s._v("登录")])]),e("div",{staticClass:"tips"},[e("div",{staticClass:"sms",on:{click:s.register}},[s._v("手机短信登录/注册")]),s._m(2)])])])]),s._m(3)])},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container"},[a("a",{attrs:{href:"/#/index"}},[a("img",{attrs:{src:e("5456"),alt:""}})])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("h3",[e("span",{staticClass:"checked"},[s._v("帐号登录")]),e("span",{staticClass:"sep-line"},[s._v("|")]),e("span",[s._v("扫码登录")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"reg"},[s._v("立即注册"),e("span",[s._v("|")]),s._v("忘记密码？")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-link"},[e("a",{attrs:{href:"https://www.mi.com/",target:"_blank"}},[s._v("小米官网")]),e("span",[s._v("|")]),e("a",{attrs:{href:"hhttps://www.mi.com/",target:"_blank"}},[s._v("小米官网")]),e("span",[s._v("|")]),e("a",{attrs:{href:"hhttps://www.mi.com/",target:"_blank"}},[s._v("小米官网")]),e("span",[s._v("|")]),e("a",{attrs:{href:"https://www.mi.com/",target:"_blank"}},[s._v("小米官网")])]),e("p",{staticClass:"copyright"},[s._v("Copyright ©2019 mi.futurefe.com All Rights Reserved.")])])}],n=e("5530"),r=e("2f62"),o={name:"login",data:function(){return{username:"",password:"",userId:""}},methods:Object(n["a"])({login:function(){var s=this,t=this.username,e=this.password;this.axios.post("/user/login",{username:t,password:e}).then((function(t){s.$cookie.set("userId",t.id,{expires:"Session"}),s.saveUserName(t.username),s.$router.push({name:"index",params:{from:"login"}})}))}},Object(r["b"])(["saveUserName"]),{register:function(){var s=this;this.axios.post("/user/register",{username:"admin1",password:"admin1",email:"admin1@163.com"}).then((function(){s.$message.success("注册成功")}))}})},c=o,l=(e("7b49"),e("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);t["default"]=u.exports}}]);