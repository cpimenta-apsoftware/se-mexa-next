_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{0:function(e,a,o){o("74v/"),e.exports=o("nOHt")},"6B9p":function(e,a,o){"use strict";o.d(a,"a",(function(){return t})),o.d(a,"b",(function(){return s}));var r=o("nKUr"),i=o("q1tI"),n=o("aeAN"),t=Object(i.createContext)({});function s(e){var a=e.children,o=Object(i.useState)(5),s=o[0],c=o[1],d=Object(i.useState)(570),u=d[0],p=d[1],b=Object(i.useState)(9),l=b[0],m=b[1],f=Object(i.useState)(null),g=f[0],x=f[1],O=Math.pow(4*(s+1),2);function v(){c(s+1)}return Object(r.jsx)(t.Provider,{value:{iiNivel:s,iiExperienciaAtual:u,iiDesafiosCompletados:l,ioDesafioAtivo:g,iiExperienciaProximoNivel:O,subirNivel:v,iniciarNovoDesafio:function(){var e=Math.floor(Math.random()*n.length),a=n[e];x(a)},redefinirDesafio:function(){x(null)},completarDesafio:function(){if(g){var e=u+g.quantidadeExperiencia;e>=O&&(e-=O,v()),p(e),x(null),m(l+1)}}},children:a})}},"74v/":function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o("hUgY")}])},aeAN:function(e){e.exports=JSON.parse('[{"tipo":"body","descricao":"Estique um de seus bra\xe7os com a palma da m\xe3o virada para frente e puxe os dedos para cima por 10 segundos por m\xe3o.","quantidadeExperiencia":80},{"tipo":"body","descricao":"Estique seu bra\xe7o contra o peito e puxe-o utilizando o outro bra\xe7o por 10 segundos por bra\xe7o.","quantidadeExperiencia":60},{"tipo":"body","descricao":"Puxe seu pesco\xe7o com a ajuda da m\xe3o para a direita e para a esquerda, permanecendo na posi\xe7\xe3o por alguns segundos.","quantidadeExperiencia":70},{"tipo":"body","descricao":"Com as duas m\xe3os na parte de tr\xe1s da cabe\xe7a, leve-a para baixo, alongando a parte de tr\xe1s da regi\xe3o.","quantidadeExperiencia":60},{"tipo":"body","descricao":"Cruze as pernas e des\xe7a com as m\xe3os esticadas em dire\xe7\xe3o ao ch\xe3o. Repita o movimento com a outra perna na frente.","quantidadeExperiencia":100},{"tipo":"body","descricao":"Sentado, abra as pernas e tente encostar as palmas das m\xe3os no ch\xe3o, repita 3 vezes por 5 segundos.","quantidadeExperiencia":80},{"tipo":"body","descricao":"Puxe o joelho de encontro ao peito e segure, troque de perna ap\xf3s 10 segundos.","quantidadeExperiencia":50},{"tipo":"body","descricao":"Sentado, cruze uma perna e incline seu tronco \xe0 frente, troque de perna ap\xf3s 10 segundos.","quantidadeExperiencia":80},{"tipo":"eye","descricao":"Sentado, feche os olhos e cubra-os com as palmas da m\xe3o durante 2 minutos, depois abra normalmente.","quantidadeExperiencia":90},{"tipo":"eye","descricao":"Em algum ambiente aberto, olhe o mais longe que puder em quatro dire\xe7\xf5es por 3s, mexa apenas os olhos. Repita 3 vezes.","quantidadeExperiencia":140},{"tipo":"eye","descricao":"Usando os polegares, massage a \xe1rea abaixo das sobrancelhas em movimentos circulares por 15 segundos.","quantidadeExperiencia":70},{"tipo":"body","descricao":"Em p\xe9, gire a cintura o m\xe1ximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.","quantidadeExperiencia":90}]')},hUgY:function(e,a,o){"use strict";function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}o.r(a);var i=o("nKUr"),n=(o("rMck"),o("6B9p"));function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}a.default=function(e){var a=e.Component,o=e.pageProps;return Object(i.jsx)(n.b,{children:Object(i.jsx)(a,s({},o))})}},rMck:function(e,a,o){}},[[0,0,1,2]]]);