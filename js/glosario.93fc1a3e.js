(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario","chunk-4e410830"],{"13d5":function(t,r,n){"use strict";var a=n("23e7"),e=n("d58f").left,o=n("a640"),i=n("2d00"),s=n("605d"),c=o("reduce"),u=!s&&i>79&&i<83;a({target:"Array",proto:!0,forced:!c||u},{reduce:function(t){return e(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,r,n){var a=n("da84"),e=n("fdbc"),o=n("17c2"),i=n("9112");for(var s in e){var c=a[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,r,n){"use strict";var a=n("b727").forEach,e=n("a640"),o=e("forEach");t.exports=o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"3cd8":function(t,r,n){"use strict";n.r(r);var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"container-fluid banner-interno",style:{"background-image":"url("+t.globalData.fondoBannerInterno+")"}})},e=[],o={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=o,s=(n("8385"),n("2877")),c=Object(s["a"])(i,a,e,!1,null,null,null);r["default"]=c.exports},"4e82":function(t,r,n){"use strict";var a=n("23e7"),e=n("1c0b"),o=n("7b0b"),i=n("d039"),s=n("a640"),c=[],u=c.sort,l=i((function(){c.sort(void 0)})),f=i((function(){c.sort(null)})),d=s("sort"),p=l||!f||!d;a({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),e(t))}})},"56e2":function(t,r,n){},7716:function(t,r,n){"use strict";n("56e2")},8385:function(t,r,n){"use strict";n("d36b")},b64b:function(t,r,n){var a=n("23e7"),e=n("7b0b"),o=n("df75"),i=n("d039"),s=i((function(){o(1)}));a({target:"Object",stat:!0,forced:s},{keys:function(t){return o(e(t))}})},c92c:function(t,r,n){"use strict";n.r(r);var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"curso-main-container glosario"},[n("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[t._m(0),t._l(t.orderedData,(function(r){return n("div",{key:"letra-"+r.letra,staticClass:"glosario__letra-item mb-2"},[n("div",{staticClass:"glosario__letra-item__letra me-4"},[n("div",{staticClass:"glosario__letra-item__letra__icono"},[n("span",[t._v(t._s(r.letra))])])]),n("div",{staticClass:"glosario__letra-item__texto"},t._l(r.terminos,(function(r){return n("p",{staticClass:"mb-3"},[t._m(1,!0),n("strong",{domProps:{innerHTML:t._s(r.terminoHtml||r.termino)}}),n("strong",[t._v(": ")]),n("span",{domProps:{innerHTML:t._s(r.significado)}})])})),0)])}))],2)],1)},e=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"titulo-principal"},[n("div",{staticClass:"titulo-principal__numero"},[n("span",[n("i",{staticClass:"fas fa-sort-alpha-down"})])]),n("h1",[t._v("Glosario")])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("strong",[n("i",{staticClass:"lista-ul__vineta"})])}],o=n("2909"),i=(n("d3b7"),n("159b"),n("fb6a"),n("13d5"),n("4e82"),n("b64b"),n("d81d"),n("7db0"),n("3cd8")),s=n("ff6a"),c={name:"Glosario",components:{BannerInterno:i["default"]},mixins:[s["a"]],computed:{glosarioData:function(){return this.$config.glosario},orderedData:function(){var t=this,r=Object(o["a"])(this.glosarioData);r.forEach((function(t){t.significado=t.significado.charAt(0).toLowerCase()+t.significado.slice(1)}));var n=Object(o["a"])(r).reduce((function(r,n){var a=t.quitarAcentos(n.termino.toLowerCase())[0];return r[a]?r[a].terminos.push(n):r[a]={letra:a,terminos:[n]},r}),{}),a=Object.keys(n).sort(),e=[];return a.forEach((function(r){var a=n[r],o=a.terminos;if(o.length>1){var i=[],s=a.terminos.map((function(t){return t.termino})).sort((function(r,n){var a=t.quitarAcentos(r).toLowerCase(),e=t.quitarAcentos(n).toLowerCase();return a<e?-1:e<a?1:0}));s.forEach((function(t){i.push(o.find((function(r){return r.termino===t})))})),o=i}e.push({letra:a.letra.toUpperCase(),terminos:o})})),e}}},u=c,l=(n("7716"),n("2877")),f=Object(l["a"])(u,a,e,!1,null,null,null);r["default"]=f.exports},d36b:function(t,r,n){},d58f:function(t,r,n){var a=n("1c0b"),e=n("7b0b"),o=n("44ad"),i=n("50c4"),s=function(t){return function(r,n,s,c){a(n);var u=e(r),l=o(u),f=i(u.length),d=t?f-1:0,p=t?-1:1;if(s<2)while(1){if(d in l){c=l[d],d+=p;break}if(d+=p,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=p)d in l&&(c=n(c,l[d],d,u));return c}};t.exports={left:s(!1),right:s(!0)}}}]);
//# sourceMappingURL=glosario.93fc1a3e.js.map