(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{312:function(t,e,n){var content=n(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("25ef1a5b",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n(312)},446:function(t,e,n){var r=n(23)(!1);r.push([t.i,".article-card[data-v-375e6730]{text-align:justify}.article-card[data-v-375e6730],.article-card a[data-v-375e6730]{border-radius:8px}.article-card img div[data-v-375e6730]{border-radius:8px 0 0 8px}.article-card:hover h2[data-v-375e6730]{color:rgba(200,0,0,.9)}",""]),t.exports=r},476:function(t,e,n){"use strict";n.r(e);n(33),n(32);var r=n(5),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("tags").where({slug:{$contains:r.tag}}).limit(1).fetch();case 3:return l=e.sent,o=l.length>0?l[0]:{},e.next=7,n("articles",r.slug).where({tags:{$contains:o.name}}).sortBy("createdAt","asc").fetch();case 7:return c=e.sent,e.next=10,n("notes",r.slug).where({tags:{$contains:o.name}}).sortBy("createdAt","asc").fetch();case 10:return d=e.sent,e.abrupt("return",{articles:c,notes:d,tag:o});case 12:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=(n(445),n(11)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex lg:h-100 w-100 xs:flex-col lg:flex-col"},[n("h1",{staticClass:"text-4xl mb-10 font-bold"},[t._v("#"+t._s(t.tag.name))]),t._v(" "),n("h3",{staticClass:"mb-4 font-bold text-3xl"},[t._v("Blog posts")]),t._v(" "),n("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"ws:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[n("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("div",{staticClass:"p-6 flex flex-col justify-between"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),n("p",[t._v(t._s(article.description))]),t._v(" "),n("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n                            Last updated "+t._s(t.formatDate(article.updatedAt))+"\n                        ")])])])],1)})),0),t._v(" "),n("h3",{staticClass:"mb-4 font-bold text-3xl"},[t._v("Notebook pages")]),t._v(" "),n("ul",{staticClass:"flex flex-wrap"},t._l(t.notes,(function(e){return n("li",{key:e.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[n("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"notebook-slug",params:{slug:e.slug}}}},[n("div",{staticClass:"desc-box p-5 flex flex-col justify-between"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n                            Last updated "+t._s(t.formatDate(e.updatedAt))+"\n                        ")])])])],1)})),0)])}),[],!1,null,"375e6730",null);e.default=component.exports}}]);