(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(t,e,l){var content=l(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(21).default)("3d4f6090",content,!0,{sourceMap:!1})},251:function(t,e,l){"use strict";l(246)},252:function(t,e,l){var r=l(20)(!1);r.push([t.i,'.article-card[data-v-201e6fab]{text-align:justify}.article-card[data-v-201e6fab],.article-card a[data-v-201e6fab]{border-radius:8px}.article-card img div[data-v-201e6fab]{border-radius:8px 0 0 8px}.article-card :hover h2[data-v-201e6fab]{color:rgba(75,60,90,.8)}.date[data-v-201e6fab]{color:grey}.desc[data-v-201e6fab]{width:100%;color:#404040;padding-top:5px;padding-right:5px;font-style:italic;overflow:hidden}.fade[data-v-201e6fab]{position:relative;height:1.6em}.fade[data-v-201e6fab]:after{content:"";text-align:right;position:absolute;bottom:0;right:0;width:40%;height:1.2em;background:linear-gradient(90deg,hsla(0,0%,100%,0),#f7f3ef 50%)}',""]),t.exports=r},258:function(t,e,l){"use strict";l.r(e);var r={props:{notes:Array,tags:Array},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=(l(251),l(11)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"flex flex-wrap"},t._l(t.notes,(function(e){return l("li",{key:e.slug,staticClass:"w-1/2 xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 px-2 xs:mb-6 md:mb-12 article-card"},[l("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"notebook-slug",params:{slug:e.slug}}}},[l("div",{staticClass:"p-5 px-5 flex flex-col w-full"},[l("div",{staticClass:"flex justify-between xs:flex-col sm:flex-col md:flex-row lg:flex-row"},[l("h2",{staticClass:"text-lg font-bold"},[t._v(t._s(e.title))])]),t._v(" "),l("p",{staticClass:"date"},[t._v(t._s(t.formatDate(e.createdAt)))]),t._v(" "),l("p",{staticClass:"desc fade"},[t._v(t._s(e.description))])])])],1)})),0)}),[],!1,null,"201e6fab",null);e.default=component.exports}}]);