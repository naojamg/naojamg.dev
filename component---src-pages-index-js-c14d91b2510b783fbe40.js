/*! For license information please see component---src-pages-index-js-c14d91b2510b783fbe40.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),r=t.n(i),o=t("Wbzz"),n=t("Bl7J"),s=t("k7N+"),l=t.n(s),m=t("e5Uo"),c=t("9eSz"),d=t.n(c),u=(t("iYuL"),function(e){var a=e.image,t=e.title,i=e.slug,n=e.published_at,s=e.categories,c=e.description;return r.a.createElement("div",{className:"articlePreview"},r.a.createElement(o.Link,{to:"/"+i+"/",title:t},r.a.createElement(d.a,{fadeIn:!1,loading:"eager",fluid:a,alt:t+" - Imágen de portada",title:t+" - Imágen de portada",className:"articlePreview-img",imgStyle:{objectFit:"cover"}})),r.a.createElement("div",{className:"articlePreview-footer"},r.a.createElement("div",{className:"articlePreview-footer-header"},r.a.createElement("div",{className:"badgeContainer",style:{width:"65%"}},s.map((function(e,a){return r.a.createElement(m.a,{text:e.name,backgroundColor:e.backgroundColor,color:e.color,key:"article__right__"+e.name})}))),r.a.createElement("p",{className:"articlePreview-footer-published_at"},r.a.createElement(l.a,{format:"DD MMM YYYY"},n))),r.a.createElement(o.Link,{to:"/"+i+"/",title:t},r.a.createElement("h2",{className:"articlePreview-footer-title"},t),r.a.createElement("p",{className:"articlePreview-footer-description"},c.slice(0,92),"..."))))}),_="2020378351";a.default=function(){var e=Object(o.useStaticQuery)(_);return r.a.createElement(n.a,{seo:{title:e.strapiHomepage.seo.title,description:e.strapiHomepage.seo.description,content:"",author:e.allStrapiArticle.edges[0].node.author.name,publisher:e.allStrapiArticle.edges[0].node.author.name,type:"website",image:e.strapiHomepage.seo.image.localFile.publicURL,image_alt:e.strapiHomepage.seo.title,url:"",twitterSite:"@"+e.allStrapiArticle.edges[0].node.author.username,twitterCreator:"@"+e.allStrapiArticle.edges[0].node.author.username,twitterCard:"summary_large_image",keywords:"naojamg.dev, Blog, HTML, JavaScript, CSS, React, Svelte, Vue"}},r.a.createElement(d.a,{fadeIn:!1,loading:"eager",className:"homePage-img",fluid:e.strapiHomepage.seo.image.localFile.childImageSharp.fluid,alt:"Imágen principal",title:"Imágen principal",imgStyle:{objectFit:"contain"}}),r.a.createElement("h1",{className:"article-container-title"},e.strapiHomepage.title),r.a.createElement("div",{className:"article-container"},e.allStrapiArticle.edges.map((function(e,a){return r.a.createElement(u,{image:e.node.image.localFile.childImageSharp.fluid,published_at:e.node.published_at,categories:e.node.category,title:e.node.title,description:e.node.description,slug:e.node.slug,key:"article__"+e.node.strapiId})}))))}},iYuL:function(e,a,t){!function(e){"use strict";var a="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),t="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),i=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,i){return e?/-MMM-/.test(i)?t[e.month()]:a[e.month()]:a},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:i,longMonthsParse:i,shortMonthsParse:i,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4},invalidDate:"Fecha inválida"})}(t("wd/R"))}}]);
//# sourceMappingURL=component---src-pages-index-js-c14d91b2510b783fbe40.js.map