(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{248:function(t,e,c){var content=c(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(21).default)("1071fa96",content,!0,{sourceMap:!1})},255:function(t,e,c){"use strict";c(248)},256:function(t,e,c){var d=c(20)(!1);d.push([t.i,'.article-card[data-v-4dc15cd1]{text-align:justify}.article-card[data-v-4dc15cd1],.article-card a[data-v-4dc15cd1]{border-radius:8px}.article-card img div[data-v-4dc15cd1]{border-radius:8px 0 0 8px}.article-card:hover h2[data-v-4dc15cd1]{color:rgba(75,60,90,.8)}.date[data-v-4dc15cd1]{color:grey}.desc[data-v-4dc15cd1]{width:100%;color:#404040;padding-top:5px;font-style:italic;overflow:hidden}.fade[data-v-4dc15cd1]{position:relative;height:6em}.fade[data-v-4dc15cd1]:after{content:"";text-align:right;position:absolute;bottom:0;right:0;width:70%;height:1.2em;background:linear-gradient(90deg,hsla(0,0%,100%,0),#f7f3ef 50%)}',""]),t.exports=d},260:function(t,e,c){"use strict";c.r(e);var d={props:{articles:Array},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},r=(c(255),c(11)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return c("li",{key:article.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[c("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[article.img?c("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img}}):t._e(),t._v(" "),c("div",{staticClass:"desc-box p-5 flex flex-col xxlmin:w-1/2 xxlmax:w-full"},[c("h2",{staticClass:"text-lg font-bold"},[t._v(t._s(article.title))]),t._v(" "),c("p",{staticClass:"date"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),c("p",{staticClass:"desc fade"},[t._v(t._s(article.description))])])])],1)})),0)}),[],!1,null,"4dc15cd1",null);e.default=component.exports}}]);