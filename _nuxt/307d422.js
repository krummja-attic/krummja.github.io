(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{412:function(t,e,r){var content=r(416);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("4134bf24",content,!0,{sourceMap:!1})},415:function(t,e,r){"use strict";r(412)},416:function(t,e,r){var o=r(25)(!1);o.push([t.i,'.article-card[data-v-b73b4cb4]{text-align:justify}.article-card[data-v-b73b4cb4],.article-card a[data-v-b73b4cb4]{border-radius:8px}.article-card img div[data-v-b73b4cb4]{border-radius:8px 0 0 8px}.article-card:hover h2[data-v-b73b4cb4]{color:rgba(200,0,0,.9)}.date[data-v-b73b4cb4]{color:grey}.desc[data-v-b73b4cb4]{width:100%;color:#404040;padding-top:5px;padding-right:5px;font-style:italic;overflow:hidden}.fade[data-v-b73b4cb4]{position:relative;height:6em}.fade[data-v-b73b4cb4]:after{content:"";text-align:right;position:absolute;bottom:0;right:0;width:40%;height:1.2em;background:linear-gradient(90deg,hsla(0,0%,100%,0),#f7f3ef 50%)}',""]),t.exports=o},419:function(t,e,r){"use strict";r.r(e);var o={props:{notes:Array,tags:Array},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=(r(415),r(9)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"flex flex-wrap"},t._l(t.notes,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"notebook-slug",params:{slug:e.slug}}}},[r("div",{staticClass:"desc-box p-5 px-5 flex flex-col"},[r("h2",{staticClass:"text-lg font-bold"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"date"},[t._v(t._s(t.formatDate(e.createdAt)))]),t._v(" "),r("p",{staticClass:"desc fade"},[t._v(t._s(e.description))])])])],1)})),0)}),[],!1,null,"b73b4cb4",null);e.default=component.exports}}]);