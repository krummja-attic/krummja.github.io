(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,5,6,8,9,11],{226:function(t,e,r){var content=r(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("049a9d67",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";r.r(e);var c={props:{article:Object},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric"})},formatGrowth:function(t){return"evergreen"===t?"🌳 evergreen":"budding"===t?"🌿 budding":"🌱 seedling"}}},o=(r(230),r(49)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"garden-plot"},[r("h4",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"metadata flex flex-row"},[r("span",{staticClass:"date"},[t._v(t._s(t.formatDate(t.article.createdAt)))]),t._v(" "),r("span",{staticClass:"growth"},[t._v(t._s(t.formatGrowth(t.article.growth)))])])])}),[],!1,null,"26b8dabc",null);e.default=component.exports},229:function(t,e,r){var content=r(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("4a498f72",content,!0,{sourceMap:!1})},230:function(t,e,r){"use strict";r(226)},231:function(t,e,r){var c=r(29)(!1);c.push([t.i,'.page-enter-active[data-v-26b8dabc],.page-leave-active[data-v-26b8dabc]{transition:opacity .2s}.page-enter[data-v-26b8dabc],.page-leave-to[data-v-26b8dabc]{opacity:0}.garden-plot[data-v-26b8dabc]{clear:both;margin:0 .8em .8em auto;max-width:100%;padding:.8em 1em;border:1px solid rgba(52,61,68,.05);border-radius:6px;box-shadow:0 1px 2px rgba(52,61,68,.1);transition:all .4s ease-in-out 0s;font-family:"Raleway",sans-serif}.garden-plot h4[data-v-26b8dabc]{font-size:16pt;text-align:left}.garden-plot .metadata[data-v-26b8dabc]{position:relative;width:100%;margin-top:15px;padding-top:5px;border-top:1px solid #909090;text-align:left;justify-content:space-between}.garden-plot .metadata .date[data-v-26b8dabc]{font-size:9pt;color:#909090}.garden-plot .metadata .growth[data-v-26b8dabc]{font-size:9pt;font-weight:700;color:#649b64}.garden-plot[data-v-26b8dabc]:hover{transform:scale(1.05) rotate(-2deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-font-smoothing:subpixel-antialiased;border-radius:0 0 6px 6px;box-shadow:0 10px 30px -10px rgba(0,0,0,.15)}',""]),t.exports=c},232:function(t,e,r){"use strict";r.r(e);var c={props:{project:Object},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric"})}}},o=(r(240),r(49)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-card flex flex-row"},[r("img",{attrs:{src:t.project.img}}),t._v(" "),r("div",{staticClass:"metadata flex flex-col"},[r("h4",[t._v(t._s(t.project.title))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t.formatDate(t.project.createdAt)))]),t._v(" "),r("span",{staticClass:"description"},[t._v(t._s(t.project.description))])])])}),[],!1,null,"91ccd71c",null);e.default=component.exports},237:function(t,e,r){var content=r(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("4cf3e4f3",content,!0,{sourceMap:!1})},238:function(t,e,r){var content=r(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("3b049c23",content,!0,{sourceMap:!1})},239:function(t,e,r){var content=r(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("378d40d9",content,!0,{sourceMap:!1})},240:function(t,e,r){"use strict";r(229)},241:function(t,e,r){var c=r(29)(!1);c.push([t.i,'.page-enter-active[data-v-91ccd71c],.page-leave-active[data-v-91ccd71c]{transition:opacity .2s}.page-enter[data-v-91ccd71c],.page-leave-to[data-v-91ccd71c]{opacity:0}.project-card[data-v-91ccd71c]{clear:both;margin:0 .8em .8em auto;max-width:100%;padding:.8em 1em;border:1px solid rgba(52,61,68,.05);border-radius:6px;box-shadow:0 1px 2px rgba(52,61,68,.1);transition:all .4s ease-in-out 0s;font-family:"Raleway",sans-serif}.project-card img[data-v-91ccd71c]{height:200px}.project-card h4[data-v-91ccd71c]{font-size:16pt;text-align:left}.project-card .metadata[data-v-91ccd71c]{position:relative;width:100%;margin-left:15px;padding-left:5px;text-align:left}.project-card .metadata .date[data-v-91ccd71c]{font-size:9pt;color:#909090}.project-card .metadata .description[data-v-91ccd71c]{margin-top:10px}.project-card[data-v-91ccd71c]:hover{transform:scale(1.05) rotate(-2deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-font-smoothing:subpixel-antialiased;border-radius:0 0 6px 6px;box-shadow:0 10px 30px -10px rgba(0,0,0,.15)}',""]),t.exports=c},242:function(t,e,r){var content=r(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("6bcd8d08",content,!0,{sourceMap:!1})},247:function(t,e,r){"use strict";r(237)},248:function(t,e,r){var c=r(29)(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);"]),c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Yellowtail&display=swap);"]),c.push([t.i,'.page-enter-active[data-v-41071d0c],.page-leave-active[data-v-41071d0c]{transition:opacity .2s}.page-enter[data-v-41071d0c],.page-leave-to[data-v-41071d0c]{opacity:0}.title-block[data-v-41071d0c]{grid-column-start:2;grid-column-end:8;margin-top:40px}.title-block .description[data-v-41071d0c]{margin:-30px 0 0 80px;text-align:left;font-family:"Raleway",sans-serif;font-size:18pt}.title-block .emph[data-v-41071d0c]{font-weight:700}.title-block h1[data-v-41071d0c]{margin-left:10px;text-align:left;font-family:"Yellowtail",cursive;font-size:72pt;font-weight:700}.title-block .contacts[data-v-41071d0c]{display:flex;flex-direction:row;height:60px;width:100%;margin-top:100px;justify-content:space-evenly}.title-block .contacts span[data-v-41071d0c]{margin-left:20px}',""]),t.exports=c},249:function(t,e,r){"use strict";r(238)},250:function(t,e,r){var c=r(29)(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);"]),c.push([t.i,".page-enter-active[data-v-5fc244f0],.page-leave-active[data-v-5fc244f0]{transition:opacity .2s}.page-enter[data-v-5fc244f0],.page-leave-to[data-v-5fc244f0]{opacity:0}.contact-block[data-v-5fc244f0]{grid-column-start:8;grid-column-end:12}",""]),t.exports=c},251:function(t,e,r){"use strict";r(239)},252:function(t,e,r){var c=r(29)(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);"]),c.push([t.i,'.page-enter-active[data-v-88361992],.page-leave-active[data-v-88361992]{transition:opacity .2s}.page-enter[data-v-88361992],.page-leave-to[data-v-88361992]{opacity:0}.garden-block[data-v-88361992]{grid-column-start:2;grid-column-end:6;display:flex;flex-flow:column;margin-top:50px;margin-bottom:50px}.garden-block .plot-wrapper[data-v-88361992]{width:100%}.garden-block h2[data-v-88361992]{font-size:24pt;margin-bottom:20px}.garden-block .description[data-v-88361992],.garden-block h2[data-v-88361992]{text-align:left;font-family:"Raleway",sans-serif}.garden-block .description[data-v-88361992]{font-size:14pt;margin-bottom:50px}',""]),t.exports=c},253:function(t,e,r){"use strict";r(242)},254:function(t,e,r){var c=r(29)(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);"]),c.push([t.i,'.page-enter-active[data-v-2ec561dc],.page-leave-active[data-v-2ec561dc]{transition:opacity .2s}.page-enter[data-v-2ec561dc],.page-leave-to[data-v-2ec561dc]{opacity:0}.project-block[data-v-2ec561dc]{grid-column-start:7;grid-column-end:12;display:flex;flex-flow:column;margin-top:50px;margin-bottom:50px}.project-block .card-wrapper[data-v-2ec561dc]{width:100%}.project-block h2[data-v-2ec561dc]{font-size:24pt;margin-bottom:20px}.project-block .description[data-v-2ec561dc],.project-block h2[data-v-2ec561dc]{text-align:left;font-family:"Raleway",sans-serif}.project-block .description[data-v-2ec561dc]{font-size:14pt;margin-bottom:50px}',""]),t.exports=c},259:function(t,e,r){"use strict";r.r(e);var c={components:{GardenPlot:r(227).default},props:{articles:Array}},o=(r(251),r(49)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"garden-block"},[r("h2",[t._v("The Digital Garden")]),t._v(" "),r("span",{staticClass:"description"},[t._v("\n    Cultivated articles on a variety of topics, usually oriented around a clear thesis.\n  ")]),t._v(" "),t._l(t.articles,(function(article){return r("NuxtLink",{key:article.slug,staticClass:"plot-wrapper",attrs:{to:{name:"garden-slug",params:{slug:article.slug}}}},[r("GardenPlot",{attrs:{article:article}})],1)}))],2)}),[],!1,null,"88361992",null);e.default=component.exports;installComponents(component,{GardenPlot:r(227).default})},260:function(t,e,r){"use strict";r.r(e);var c={components:{ProjectCard:r(232).default},props:{projects:Array}},o=(r(253),r(49)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-block"},[r("h2",[t._v("My Projects")]),t._v(" "),r("span",{staticClass:"description"},[t._v("\n    Things I'm working on - usually linguistics research or programming projects.\n  ")]),t._v(" "),t._l(t.projects,(function(t){return r("NuxtLink",{key:t.slug,staticClass:"card-wrapper",attrs:{to:{name:"project-slug",params:{slug:t.slug}}}},[r("ProjectCard",{attrs:{project:t}})],1)}))],2)}),[],!1,null,"2ec561dc",null);e.default=component.exports;installComponents(component,{ProjectCard:r(232).default})},261:function(t,e,r){"use strict";r.r(e);r(247);var c=r(49),component=Object(c.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title-block"},[r("h1",[t._v("Jonathan Crum")]),t._v(" "),r("p",{staticClass:"description"},[t._v("\n    is writing, researching, and programming.\n  ")])])}],!1,null,"41071d0c",null);e.default=component.exports},262:function(t,e,r){"use strict";r.r(e);r(249);var c=r(49),component=Object(c.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-block"},[e("img",{attrs:{src:"portrait.png"}})])}],!1,null,"5fc244f0",null);e.default=component.exports},296:function(t,e,r){"use strict";r.r(e);r(31);var c=r(2),o=r(261),n=r(262),l=r(259),d=r(260),f={layout:"default",components:{TitleBlock:o.default,ContactBlock:n.default,GardenBlock:l.default,ProjectBlock:d.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,n,l,d,i,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).only(["title","createdAt","growth","img","slug"]).sortBy("createdAt","desc").fetch();case 3:return o=e.sent,e.next=6,r("projects",c.slug).only(["title","createdAt","description","img","slug"]).sortBy("createdAt").fetch();case 6:if(n=e.sent,l=[],d=[],o.length>3)for(i=0;i<=3;i++)l.push(o[i]);else l=o;if(n.length>3)for(f=0;f<=3;f++)d.push(n[f]);else d=n;return e.abrupt("return",{articles:l,projects:d});case 12:case"end":return e.stop()}}),e)})))()}},v=r(49),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout-grid"},[r("TitleBlock"),t._v(" "),r("ContactBlock"),t._v(" "),r("GardenBlock",{attrs:{articles:t.articles}}),t._v(" "),r("ProjectBlock",{attrs:{projects:t.projects}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleBlock:r(261).default,ContactBlock:r(262).default,GardenBlock:r(259).default,ProjectBlock:r(260).default})}}]);