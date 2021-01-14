(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d34ba904"],{"56a6":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert",class:{active:0!==t.messages.length}},t._l(t.messages,(function(a,s){return e("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(s)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},r=[],n=e("5530"),i=e("2f62"),c={name:"alertMessage",methods:Object(n["a"])({},Object(i["d"])("alertModules",["removeMessage"])),computed:Object(n["a"])({},Object(i["c"])("alertModules",["messages"]))},l=c,o=(e("d2eb"),e("2877")),d=Object(o["a"])(l,s,r,!1,null,"c8970bfc",null);a["a"]=d.exports},"63ee":function(t,a,e){"use strict";e("dccd")},7616:function(t,a,e){},"86d6":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("Alert"),e("router-view")],1)},r=[],n=e("5530"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("div",{staticClass:"d-flex align-items-start"},[e("div",[e("i",{staticClass:"fas fa-tree"})]),e("h1",{staticClass:"h3 ml-3"},[t._v("Fireman")])])]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item mr-4"},[e("router-link",{staticClass:"nav-link text-bold",attrs:{to:"/about"}},[t._v("品牌介紹")])],1),e("li",{staticClass:"nav-item mr-4"},[e("router-link",{staticClass:"nav-link text-bold",attrs:{to:"/customer_product"}},[t._v("露營用品")])],1),e("li",{staticClass:"nav-item mr-4"},[e("router-link",{staticClass:"nav-link text-bold",attrs:{to:"/login"}},[t._v("登入")])],1),e("li",{staticClass:"nav-item"},[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn",attrs:{to:"/cart","data-toggle":"modal","data-target":"#cartModal"}},[e("i",{staticClass:"trash fas fa-shopping-cart"},[t.cartData.length?e("div",{staticClass:"trash__text"},[t._v(t._s(t.cartData.length))]):t._e()])])])])])])],1)]),e("div",{staticClass:"modal fade",attrs:{id:"cartModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[t.cartData.length?e("table",{staticClass:"table table-md"},[t._m(2),e("tbody",t._l(t.cartData,(function(a){return e("tr",{key:a.id},[e("td",{attrs:{width:"50%"}},[t._v(t._s(a.title))]),e("td",{attrs:{width:"20%"}},[t._v(t._s(a.qty))]),e("td",{attrs:{width:"10%"}},[t._v(t._s(t._f("currency")(a.price*a.qty)))]),e("td",[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.remove(a)}}},[e("i",{staticClass:"far fa-trash-alt"})])])])})),0)]):t._e(),0===t.cartData.length?e("div",[t._m(3)]):t._e()]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){return a.preventDefault(),t.toProduct(a)}}},[t._v("繼續購買")]),t.cartData.length?e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.toCart(a)}}},[t._v("結帳去")]):t._e()])])])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("購物清單")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th",{attrs:{width:"30%"}},[t._v("名稱")]),e("th",{attrs:{width:"30%"}},[t._v("數量")]),e("th",{attrs:{width:"20%"}},[t._v("價格")]),e("th",{attrs:{width:"20%"}},[t._v("刪除")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column align-items-center"},[e("i",{staticClass:"trash fas fa-shopping-cart fa-3x text-primary my-4"}),e("p",[t._v("購物車尚未有商品")])])}],l=(e("c975"),e("a434"),e("1157")),o=e.n(l),d={name:"Navbar",props:["len"],data:function(){return{cartData:[],screenWidth:o()(window).width()}},methods:{getCart:function(){var t=this;t.cartData=JSON.parse(localStorage.getItem("cartData"))||[]},remove:function(t){var a=this.cartData.indexOf(t);this.cartData.splice(a,1),localStorage.setItem("cartData",JSON.stringify(this.cartData)),this.getCart()},toProduct:function(){this.$router.push("customer_product").catch((function(){}))},toCart:function(){this.$router.push("/cartcheckout"),o()("#cartModal").modal("hide")}},created:function(){var t=this;this.$bus.$on("cart:get",(function(){return t.getCart()}))},mounted:function(){var t=this;window.onresize=function(){t.screenWidth=window.innerWidth,t.screenWidth<991&&o()(".navbar .nav-item").on("click",(function(){o()(".navbar-toggler").click()}))}}},u=d,v=(e("63ee"),e("2877")),b=Object(v["a"])(u,i,c,!1,null,"1c81acd4",null),f=b.exports,h=e("56a6"),m=e("2f62"),p={name:"Index",methods:Object(n["a"])({},Object(m["b"])("cartModule",["getCart"])),components:{Navbar:f,Alert:h["a"]},computed:Object(n["a"])({},Object(m["c"])("cartModule",["cart"])),created:function(){this.getCart()}},C=p,_=Object(v["a"])(C,s,r,!1,null,null,null);a["default"]=_.exports},c975:function(t,a,e){"use strict";var s=e("23e7"),r=e("4d64").indexOf,n=e("a640"),i=e("ae40"),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0,o=n("indexOf"),d=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!o||!d},{indexOf:function(t){return l?c.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},d2eb:function(t,a,e){"use strict";e("7616")},dccd:function(t,a,e){}}]);
//# sourceMappingURL=chunk-d34ba904.4125a8dd.js.map