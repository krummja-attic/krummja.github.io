(window.webpackJsonp=window.webpackJsonp||[]).push([[22,8,13],{244:function(t,e,r){var content=r(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("741e17dc",content,!0,{sourceMap:!1})},245:function(t,e,r){"use strict";r.r(e);var n={props:{tags:Array}},o=(r(246),r(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",{staticClass:"mb-4 font-bold text-2xl text-center"},[t._v("Topic Index")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[r("NuxtLink",{attrs:{to:"/tag/"+e.slug}},[r("span",{staticClass:"px-2 py-1\n                rounded-full border border-light-border dark:border-dark-border\n                hover:border-purple-700\n                transition-colors duration-300 ease-linear\n                truncate tracking-wider font-medium text-ss\n                "},[t._v("\n                    "+t._s(e.name)+"\n                ")])])],1)})),0)])}),[],!1,null,"460504cc",null);e.default=component.exports},246:function(t,e,r){"use strict";r(244)},247:function(t,e,r){var n=r(18)(!1);n.push([t.i,"h3[data-v-460504cc]{color:rgba(75,60,90,.8)}",""]),t.exports=n},252:function(t,e,r){var content=r(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("97c2d140",content,!0,{sourceMap:!1})},262:function(t,e,r){"use strict";r(252)},263:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.article-card[data-v-af67c3a6]{text-align:justify}.article-card[data-v-af67c3a6],.article-card a[data-v-af67c3a6]{border-radius:8px}.article-card img div[data-v-af67c3a6]{border-radius:8px 0 0 8px}.article-card :hover h2[data-v-af67c3a6]{color:rgba(75,60,90,.8)}.date[data-v-af67c3a6]{color:grey}.desc[data-v-af67c3a6]{width:100%;color:#404040;padding-top:5px;padding-right:5px;font-style:italic;overflow:hidden}.fade[data-v-af67c3a6]{position:relative;height:1.8em}.fade[data-v-af67c3a6]:after{content:"";text-align:right;position:absolute;bottom:0;right:0;width:40%;height:1.2em;background:linear-gradient(90deg,hsla(0,0%,100%,0),#f7f3ef 50%)}',""]),t.exports=n},268:function(t,e,r){"use strict";r.r(e);var n={props:{notes:Array,tags:Array},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=(r(262),r(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"flex flex-wrap"},t._l(t.notes,(function(e){return r("li",{key:e.slug,staticClass:"w-1/2 xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"notebook-slug",params:{slug:e.slug}}}},[r("div",{staticClass:"p-5 px-5 flex flex-col w-full"},[r("div",{staticClass:"flex justify-between xs:flex-col sm:flex-col md:flex-row lg:flex-row"},[r("h2",{staticClass:"text-lg font-bold"},[t._v(t._s(e.title))])]),t._v(" "),r("p",{staticClass:"date"},[t._v(t._s(t.formatDate(e.createdAt)))]),t._v(" "),r("p",{staticClass:"desc fade"},[t._v(t._s(e.description))])])])],1)})),0)}),[],!1,null,"af67c3a6",null);e.default=component.exports},275:function(t,e,r){var content=r(314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("296e086e",content,!0,{sourceMap:!1})},313:function(t,e,r){"use strict";r(275)},314:function(t,e,r){var n=r(18)(!1);n.push([t.i,"h1[data-v-46453240]{color:rgba(75,60,90,.8);padding:10px 0;font-size:1.8rem;font-weight:700;line-height:1.4em}",""]),t.exports=n},349:function(t,e,r){"use strict";r.r(e);r(32);var n=r(5),o=r(268),l=r(245),c={components:{NotebookListing:o.default,TagListing:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("notes",n.slug).only(["title","description","createdAt","img","slug"]).sortBy("createdAt").fetch();case 3:return o=e.sent,e.next=6,r("tags",n.slug).only(["name","slug"]).sortBy("createdAt","asc").fetch();case 6:return l=e.sent,e.abrupt("return",{notes:o,tags:l});case 8:case"end":return e.stop()}}),e)})))()}},d=(r(313),r(9)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"mb-6"},[t._v("Notebook")]),t._v(" "),r("NotebookListing",{attrs:{notes:this.notes,tags:this.tags}}),t._v(" "),r("TagListing",{attrs:{tags:this.tags}})],1)}),[],!1,null,"46453240",null);e.default=component.exports;installComponents(component,{NotebookListing:r(268).default,TagListing:r(245).default})}}]);