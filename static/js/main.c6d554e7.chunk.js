(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},44:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(28),a=c.n(s),i=(c(34),c(2)),r=(c(35),c(36),c(8)),l=c(0),j=Object(i.e)((function(){return Object(l.jsxs)("div",{className:"header_content container",children:[Object(l.jsx)("div",{className:"header_logo",children:Object(l.jsx)(r.b,{to:"/",exact:!0,children:"\u041d\u043e\u0432\u043e\u0441\u0442\u043d\u0438\u043a"})}),Object(l.jsx)("nav",{className:"header_menu",children:Object(l.jsxs)("ul",{className:"menu_items",children:[Object(l.jsx)("li",{className:"menu_item",children:Object(l.jsx)(r.b,{to:"/",exact:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(l.jsx)("li",{className:"menu_item",children:Object(l.jsx)(r.b,{to:"/news",exact:!0,children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(l.jsx)("li",{className:"menu_item",children:Object(l.jsx)(r.b,{to:"/contacts",exact:!0,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})})]})})),o=c(9),d=c.n(o),h=c(11),b=c(13),u=(c(44),Object(i.e)((function(e){var t=function(e){return e>0&&e<10?"0"+e:e},c=new Date(e.date);return Object(l.jsxs)("div",{className:"news_item",onClick:function(){e.history.push("/news/"+e.index)},children:[Object(l.jsx)("div",{className:"news_title",children:Object(l.jsx)("h2",{children:e.title})}),Object(l.jsxs)("div",{className:"news_item_content",children:[Object(l.jsx)("div",{className:"news_site",children:Object(l.jsx)("p",{children:e.source})}),Object(l.jsxs)("div",{className:"news_date",children:[Object(l.jsx)("span",{className:"news_day",children:t(c.getDay())}),"/",Object(l.jsx)("span",{className:"news_mouth",children:t(c.getMonth())})]})]})]})}))),x=c(12),m=c.n(x),O=(c(63),function(e){return Object(l.jsx)("h1",{className:"page_title",children:e.title})}),p=function(){var e=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){!function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=1f30e8e312cb4f2a83ff4b42b7153d6b");case 2:t=e.sent,s(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),c}(),t=e&&e.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(u,{index:t,title:e.title,source:e.source.name,date:e.publishedAt})})}));return Object(l.jsxs)("div",{className:"allNews",children:[Object(l.jsx)(O,{title:"\u0411\u044b\u0442\u044c \u0432 \u043a\u0443\u0440\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439"}),Object(l.jsx)("div",{className:"news_items",children:t})]})},f=(c(64),function(){return Object(l.jsx)("div",{className:"contacts",children:Object(l.jsxs)("div",{class:"contacts_content container",children:[Object(l.jsxs)("div",{class:"contacts_description",children:[Object(l.jsx)("h1",{children:Object(l.jsx)("a",{href:"tel:+79991234576",class:"contacts_phone",children:"+7 (999) 123 45 76"})}),Object(l.jsx)("h2",{class:"contacts_name",children:"\u0414\u0435\u043d\u0438\u0441 \u0427\u043e\u0440\u043d\u043e\u043b\u043e\u0437"}),Object(l.jsx)("div",{class:"contacts_email contacts_desc_text",children:Object(l.jsx)("a",{href:"mailto:mail@domain.com",children:"mail@domain.com"})}),Object(l.jsx)("div",{class:"contacts_work contacts_desc_text",children:"Front-enf \u0440\u043e\u0437\u0440\u0440\u043e\u0431\u043d\u0438\u043a"}),Object(l.jsxs)("div",{class:"contacts_skill contacts_desc_text",children:["HTML5, CSS3, ES5, ES6, ",Object(l.jsx)("span",{class:"new_skill",children:"React"})]})]}),Object(l.jsx)("div",{class:"contacts_img",children:Object(l.jsx)("img",{src:"../Img/Denus.jpg",alt:""})})]})})}),v=(c(65),function(e){var t=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){!function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=1f30e8e312cb4f2a83ff4b42b7153d6b");case 2:t=e.sent,s(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),c}(),c=function(e){return e>0&&e<10?"0"+e:e};return t&&Object(l.jsx)("section",{className:"news_item",children:Object(l.jsxs)("div",{className:"news_item_page_content",children:[Object(l.jsx)("div",{className:"news_sidebar",children:Object(l.jsxs)("div",{className:"news_sidebar_content",children:[Object(l.jsx)("h1",{className:"news_title",children:t[e.match.params.name].title}),Object(l.jsxs)("div",{className:"news_detail",children:[Object(l.jsx)("div",{className:"news_site",children:Object(l.jsx)("a",{href:"",className:"news_site_link",children:t[e.match.params.name].source.name})}),function(e){var t=new Date(e);return Object(l.jsxs)("div",{class:"news_date",children:[Object(l.jsx)("span",{class:"news_day",children:c(t.getDay())}),"/",Object(l.jsx)("span",{class:"news_mouth",children:c(t.getMonth())})]})}(t[e.match.params.name].publishedAt)]})]})}),Object(l.jsxs)("div",{className:"news_description",children:[Object(l.jsx)("div",{className:"news_img",children:Object(l.jsx)("img",{src:t[e.match.params.name].urlToImage})}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:t[e.match.params.name].description})})]})]})})}),_=(c(66),function(){var e=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){!function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=1f30e8e312cb4f2a83ff4b42b7153d6b");case 2:t=e.sent,s(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),c}(),t=e&&e.map((function(e,t){return t<6&&Object(l.jsx)("div",{children:Object(l.jsx)(u,{index:t,title:e.title,source:e.source.name,date:e.publishedAt})})}));return e&&Object(l.jsx)("div",{className:"news_wrapper container",children:Object(l.jsxs)("div",{className:"news_content ",children:[Object(l.jsx)(O,{title:"\u0412\u0441\u0435\u0433\u0434\u0430 \u0441\u0432\u0435\u0436\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(l.jsx)("div",{className:"news_items",children:t}),Object(l.jsx)("div",{className:"news_subscribe",children:Object(l.jsx)(r.b,{to:"/news",exact:!0,children:"\u0411\u044b\u0442\u044c \u0432 \u043a\u0443\u0440\u0441\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439"})})]})})}),w=(c(67),function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{class:"footer_content container",children:[Object(l.jsx)("div",{class:"footer_logo",children:Object(l.jsxs)("a",{href:"/",children:[Object(l.jsx)("div",{class:"footer_logo_name",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u043d\u0438\u043a"}),Object(l.jsx)("p",{class:"footer_logo_text",children:"Single Page Application"})]})}),Object(l.jsx)("div",{class:"copyright",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"}),Object(l.jsxs)("div",{class:"site_author",children:[Object(l.jsx)("p",{class:"author_text",children:"Made by"}),Object(l.jsx)("h4",{class:"author_name",children:"\u0414\u0435\u043d\u0438\u0441 \u0427\u043e\u0440\u043d\u043e\u043b\u043e\u0437"})]})]})})}),N=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(i.a,{path:"/",exact:!0,component:_}),Object(l.jsx)(i.a,{path:"/news",exact:!0,component:p}),Object(l.jsx)(i.a,{path:"/contacts",exact:!0,component:f}),Object(l.jsx)(i.a,{path:"/news/:name",exact:!0,component:v}),Object(l.jsx)(w,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.c6d554e7.chunk.js.map