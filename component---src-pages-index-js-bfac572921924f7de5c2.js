/*! For license information please see component---src-pages-index-js-bfac572921924f7de5c2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),o=t.n(r),n=t("Wbzz"),i=t("Bl7J"),s=t("k7N+"),l=t.n(s),c=function(e){var a=e.text,t=e.backgroundColor,r=e.color;return o.a.createElement("div",{className:"pillBadge",style:{backgroundColor:t,color:r}},o.a.createElement("p",null,a))},m=(t("iYuL"),function(e){var a=e.image,t=e.title,r=e.slug,i=e.published_at,s=e.categories,m=e.description;return o.a.createElement("div",{className:"articlePreview"},o.a.createElement("img",{src:"."+a,alt:t+" - Imágen de portada"}),o.a.createElement("div",{className:"articlePreview-footer"},o.a.createElement("div",{className:"articlePreview-footer-header"},o.a.createElement("div",{className:"badgeContainer"},s.map((function(e,a){return o.a.createElement(c,{text:e.name,backgroundColor:e.backgroundColor,color:e.color,key:e.name})}))),o.a.createElement("p",{className:"articlePreview-footer-published_at"},o.a.createElement(l.a,{format:"DD MMM YYYY"},i))),o.a.createElement(n.Link,{to:"/article/"+r},o.a.createElement("h2",{className:"articlePreview-footer-title"},t)),o.a.createElement("p",{className:"articlePreview-footer-description"},m.slice(0,92),"...")))}),d=(t("WurN"),"1355098533");a.default=function(){var e=Object(n.useStaticQuery)(d);return o.a.createElement(i.a,{seo:e.strapiHomepage.seo},o.a.createElement("img",{className:"homePage-img",src:"."+e.strapiHomepage.seo[0].shareImage.localFile.publicURL,alt:"Imágen principal"}),o.a.createElement("div",{className:"article-container"},o.a.createElement("p",{className:"article-container-title"},"Lo más reciente"),e.allStrapiArticle.edges.map((function(e,a){return o.a.createElement(m,{image:e.node.image.localFile.publicURL,published_at:e.node.published_at,categories:e.node.category,title:e.node.title,description:e.node.description,slug:e.node.slug,key:e.node.strapiId})}))))}},WurN:function(e,a,t){},iYuL:function(e,a,t){!function(e){"use strict";var a="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),t="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],o=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?t[e.month()]:a[e.month()]:a},monthsRegex:o,monthsShortRegex:o,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4},invalidDate:"Fecha inválida"})}(t("wd/R"))}}]);
//# sourceMappingURL=component---src-pages-index-js-bfac572921924f7de5c2.js.map