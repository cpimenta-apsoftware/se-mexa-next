_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(r.AmpStateContext))};var a,o=(a=n("q1tI"))&&a.__esModule?a:{default:a},r=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,r=e.hasQuery,i=void 0!==r&&r;return n||o&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"1d3f":function(e,t,n){e.exports={conteinerPerfil:"Perfil_conteinerPerfil__2v3Yj"}},"36s2":function(e,t,n){e.exports={conteinerContagemRegressiva:"ContagemRegressiva_conteinerContagemRegressiva__ZXc0c",botaoContagemRegressiva:"ContagemRegressiva_botaoContagemRegressiva__2ckS2",botaoContagemRegressivaAtivo:"ContagemRegressiva_botaoContagemRegressivaAtivo__1olHZ"}},"6B9p":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n("nKUr");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){o=!0,r=c}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("q1tI"),s=n("aeAN"),c=Object(i.createContext)({});function u(e){var t=e.children,n=Object(i.useState)(5),o=n[0],u=n[1],d=Object(i.useState)(120),l=d[0],p=d[1],f=Object(i.useState)(9),b=f[0],m=f[1],v=Object(i.useState)(null),x=v[0],j=v[1],h=Math.pow(4*(o+1),2);var g=Object(i.useState)(3),y=g[0],O=g[1],_=Object(i.useState)(!1),C=_[0],S=_[1],A=Object(i.useState)(!1),E=A[0],w=A[1],M=Math.floor(y/60),D=y%60,P=r(String(M).padStart(2,"0").split(""),2),N=P[0],R=P[1],q=r(String(D).padStart(2,"0").split(""),2),k=q[0],I=q[1];function z(){S(!1),O(3)}return Object(a.jsx)(c.Provider,{value:{iiNivel:o,iiExperienciaAtual:l,iiDesafiosCompletados:b,ioDesafioAtivo:x,iiExperienciaProximoNivel:h,ibContagemRegressivaAtiva:C,iiTempo:y,ibContagemRegressivaFinalizada:E,iiDezenaMinuto:N,iiUnidadeMinuto:R,iiDezenaSegundo:k,iiUnidadeSegundo:I,subirNivel:function(){u(o+1)},iniciarNovoDesafio:function(){var e=Math.floor(Math.random()*s.length),t=s[e];j(t)},redefinirDesafio:function(){j(null),z(),w(!1)},completarDesafio:function(){j(null),m(b+1),p(l+x.quantidadeExperiencia),z(),w(!1)},redefinirContagemRegressiva:z,definirTempo:O,definirContagemRegressivaFinalizada:w,definirContagemRegressivaAtiva:S,iniciarContagemRegressiva:function(){S(!0)}},children:t})}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(o){var r=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?r=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var d=p[c];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?r=!1:n.add(d);else{var l=o.props[d],f=a[d]||new Set;"name"===d&&i||!f.has(l)?(f.add(l),a[d]=f):r=!1}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),a=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}b.rewind=function(){};var m=b;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},JGX1:function(e,t,n){e.exports={barraExperiencia:"BarraExperiencia_barraExperiencia__ppfJg",experienciaAtual:"BarraExperiencia_experienciaAtual__3Izc2"}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n("nKUr"),o=n("g4pe"),r=n.n(o),i=n("q1tI"),s=n("6B9p"),c=n("JGX1"),u=n.n(c);function d(){var e=Object(i.useContext)(s.a),t=e.iiExperienciaAtual,n=e.iiExperienciaProximoNivel,o=Math.round(100*t/n);return Object(a.jsxs)("header",{className:u.a.barraExperiencia,children:[Object(a.jsx)("span",{children:"0 xp"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{width:"".concat(o,"%")}}),Object(a.jsxs)("span",{className:u.a.experienciaAtual,style:{left:"".concat(o,"%")},children:[t," xp"]})]}),Object(a.jsxs)("span",{children:[n," xp"]})]})}var l=n("36s2"),p=n.n(l);function f(){var e,t=Object(i.useContext)(s.a),n=t.iniciarNovoDesafio,o=t.ibContagemRegressivaAtiva,r=t.iiTempo,c=t.redefinirContagemRegressiva,u=t.definirTempo,d=t.definirContagemRegressivaFinalizada,l=t.definirContagemRegressivaAtiva,f=t.ibContagemRegressivaFinalizada,b=t.iiDezenaMinuto,m=t.iiUnidadeMinuto,v=t.iiDezenaSegundo,x=t.iiUnidadeSegundo,j=t.iniciarContagemRegressiva;return Object(i.useEffect)((function(){o&&r>0?e=setTimeout((function(){u(r-1)}),1e3):o&&0===r&&(d(!0),l(!1),n())}),[o,r]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:p.a.conteinerContagemRegressiva,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:b}),Object(a.jsx)("span",{children:m})]}),Object(a.jsx)("span",{children:":"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:v}),Object(a.jsx)("span",{children:x})]})]}),f?Object(a.jsxs)("button",{disabled:!0,className:p.a.botaoContagemRegressiva,children:["Ciclo encerrado",Object(a.jsx)("img",{src:"icons/check_circle.svg",alt:"Check"})]}):Object(a.jsx)(a.Fragment,{children:o?Object(a.jsx)("button",{type:"button",className:"".concat(p.a.botaoContagemRegressiva," ").concat(p.a.botaoContagemRegressivaAtivo),onClick:function(){clearTimeout(e),c()},children:"Abandonar ciclo"}):Object(a.jsx)("button",{type:"button",className:p.a.botaoContagemRegressiva,onClick:j,children:"Iniciar um ciclo"})})]})}var b=n("zEUo"),m=n.n(b);function v(){var e=Object(i.useContext)(s.a).iiDesafiosCompletados;return Object(a.jsxs)("div",{className:m.a.conteinerDesafioCompletado,children:[Object(a.jsx)("span",{children:"Desafios completados"}),Object(a.jsx)("span",{children:e})]})}var x=n("1d3f"),j=n.n(x);function h(){var e=Object(i.useContext)(s.a).iiNivel;return Object(a.jsxs)("div",{className:j.a.conteinerPerfil,children:[Object(a.jsx)("img",{src:"https://github.com/cpimenta-apsoftware.png",alt:"Caique Pimenta"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Caique Pimenta"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("img",{src:"icons/level.svg",alt:"N\xedvel"}),"N\xedvel ",e]})]})]})}var g=n("x8aO"),y=n.n(g);function O(){var e=Object(i.useContext)(s.a),t=e.ioDesafioAtivo,n=e.redefinirDesafio,o=e.completarDesafio;return Object(a.jsx)("div",{className:y.a.conteinerCaixaDesafio,children:t?Object(a.jsxs)("div",{className:y.a.desafioAtivo,children:[Object(a.jsxs)("header",{children:["Ganhe ",t.quantidadeExperiencia," xp"]}),Object(a.jsxs)("main",{children:[Object(a.jsx)("img",{src:"icons/".concat(t.tipo,".svg")}),Object(a.jsx)("strong",{children:"Novo desafio"}),Object(a.jsx)("p",{children:t.descricao})]}),Object(a.jsxs)("footer",{children:[Object(a.jsx)("button",{type:"button",className:y.a.botaoDesafioPerdido,onClick:n,children:"Falhei"}),Object(a.jsx)("button",{type:"button",className:y.a.botaoDesafioCompletado,onClick:o,children:"Completei"})]})]}):Object(a.jsxs)("div",{className:y.a.desafioNaoAtivo,children:[Object(a.jsx)("strong",{children:"Finalize um ciclo para receber um desafio"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("img",{src:"icons/level-up.svg",alt:"Subir N\xedvel"}),"Avance de n\xedvel completando desafios."]})]})})}var _=n("lEV4"),C=n.n(_);function S(){return Object(a.jsxs)("div",{className:C.a.conteiner,children:[Object(a.jsx)(r.a,{children:Object(a.jsx)("title",{children:"In\xedcio | Se Mexa! "})}),Object(a.jsx)(d,{}),Object(a.jsxs)("section",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{}),Object(a.jsx)(v,{}),Object(a.jsx)(f,{})]}),Object(a.jsx)("div",{children:Object(a.jsx)(O,{})})]})]})}},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RIqP:function(e,t,n){var a=n("Ijbi"),o=n("EbDI"),r=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||o(e)||r(e)||i()}},SksO:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),o=n("lwsE"),r=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){i(n,e);var t=u(n);function n(e){var r;return o(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},a1gu:function(e,t,n){var a=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?o(e):t}},aeAN:function(e){e.exports=JSON.parse('[{"tipo":"body","descricao":"Estique um de seus bra\xe7os com a palma da m\xe3o virada para frente e puxe os dedos para cima por 10 segundos por m\xe3o.","quantidadeExperiencia":80},{"tipo":"body","descricao":"Estique seu bra\xe7o contra o peito e puxe-o utilizando o outro bra\xe7o por 10 segundos por bra\xe7o.","quantidadeExperiencia":60},{"tipo":"body","descricao":"Puxe seu pesco\xe7o com a ajuda da m\xe3o para a direita e para a esquerda, permanecendo na posi\xe7\xe3o por alguns segundos.","quantidadeExperiencia":70},{"tipo":"body","descricao":"Com as duas m\xe3os na parte de tr\xe1s da cabe\xe7a, leve-a para baixo, alongando a parte de tr\xe1s da regi\xe3o.","quantidadeExperiencia":60},{"tipo":"body","descricao":"Cruze as pernas e des\xe7a com as m\xe3os esticadas em dire\xe7\xe3o ao ch\xe3o. Repita o movimento com a outra perna na frente.","quantidadeExperiencia":100},{"tipo":"body","descricao":"Sentado, abra as pernas e tente encostar as palmas das m\xe3os no ch\xe3o, repita 3 vezes por 5 segundos.","quantidadeExperiencia":80},{"tipo":"body","descricao":"Puxe o joelho de encontro ao peito e segure, troque de perna ap\xf3s 10 segundos.","quantidadeExperiencia":50},{"tipo":"body","descricao":"Sentado, cruze uma perna e incline seu tronco \xe0 frente, troque de perna ap\xf3s 10 segundos.","quantidadeExperiencia":80},{"tipo":"eye","descricao":"Sentado, feche os olhos e cubra-os com as palmas da m\xe3o durante 2 minutos, depois abra normalmente.","quantidadeExperiencia":90},{"tipo":"eye","descricao":"Em algum ambiente aberto, olhe o mais longe que puder em quatro dire\xe7\xf5es por 3s, mexa apenas os olhos. Repita 3 vezes.","quantidadeExperiencia":140},{"tipo":"eye","descricao":"Usando os polegares, massage a \xe1rea abaixo das sobrancelhas em movimentos circulares por 15 segundos.","quantidadeExperiencia":70},{"tipo":"body","descricao":"Em p\xe9, gire a cintura o m\xe1ximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.","quantidadeExperiencia":90}]')},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lEV4:function(e,t,n){e.exports={conteiner:"Inicio_conteiner__28tPm"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var o=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},x8aO:function(e,t,n){e.exports={conteinerCaixaDesafio:"CaixaDesafio_conteinerCaixaDesafio__xwXhZ",desafioNaoAtivo:"CaixaDesafio_desafioNaoAtivo__2lL9V",desafioAtivo:"CaixaDesafio_desafioAtivo__XtMLo",botaoDesafioPerdido:"CaixaDesafio_botaoDesafioPerdido__3lXkL",botaoDesafioCompletado:"CaixaDesafio_botaoDesafioCompletado__5TKkb"}},zEUo:function(e,t,n){e.exports={conteinerDesafioCompletado:"DesafioCompletado_conteinerDesafioCompletado__1y9r5"}}},[["/EDR",0,1]]]);