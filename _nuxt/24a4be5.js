(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{267:function(t,e,l){var content=l(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(26).default)("04e24810",content,!0,{sourceMap:!1})},269:function(t,e,l){"use strict";l(267)},270:function(t,e,l){var r=l(25)(!1);r.push([t.i,".article-card[data-v-3ac25326]{text-align:justify}.article-card[data-v-3ac25326],.article-card a[data-v-3ac25326]{border-radius:8px}.article-card img div[data-v-3ac25326]{border-radius:8px 0 0 8px}.article-card:hover h2[data-v-3ac25326]{color:rgba(200,0,0,.9)}.date[data-v-3ac25326]{color:grey}.desc[data-v-3ac25326]{color:#404040;padding-top:5px;font-style:italic}",""]),t.exports=r},271:function(t,e,l){"use strict";l.r(e);var r={props:{articles:Array},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=(l(269),l(9)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return l("li",{key:article.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[l("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[article.img?l("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img}}):t._e(),t._v(" "),l("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[l("h2",{staticClass:"text-lg font-bold"},[t._v(t._s(article.title))]),t._v(" "),l("p",{staticClass:"date"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),l("p",{staticClass:"desc"},[t._v(t._s(article.description))])])])],1)})),0)}),[],!1,null,"3ac25326",null);e.default=component.exports}}]);