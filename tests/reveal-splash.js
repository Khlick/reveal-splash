!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Splash=e()}(this,(function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function n(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function o(t,e,r){return(e=c(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(){u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),u=new _(n||[]);return o(a,"_invoke",{value:A(t,r,u)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",y="suspendedYield",v="executing",d="completed",g={};function m(){}function b(){}function w(){}var O={};s(O,a,(function(){return this}));var j=Object.getPrototypeOf,S=j&&j(j(k([])));S&&S!==r&&n.call(S,a)&&(O=S);var E=w.prototype=m.prototype=Object.create(O);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,i,a,u){var c=p(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function A(e,r,n){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=T(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var f=p(e,r,n);if("normal"===f.type){if(o=n.done?d:y,f.arg===g)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=d,n.method="throw",n.arg=f.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,f,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},x(P.prototype),s(P.prototype,c,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new P(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(E),s(E,f,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function c(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=function(t){return t&&t.Math===Math&&t},l=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof f&&f)||s("object"==typeof f&&f)||function(){return this}()||Function("return this")(),p={},h=function(t){try{return!!t()}catch(t){return!0}},y=!h((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})),v=!h((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),d=v,g=Function.prototype.call,m=d?g.bind(g):function(){return g.apply(g,arguments)},b={},w={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor,j=O&&!w.call({1:2},1);b.f=j?function(t){var e=O(this,t);return!!e&&e.enumerable}:w;var S,E,x=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},P=v,A=Function.prototype,T=A.call,L=P&&A.bind.bind(T,T),I=P?L:function(t){return function(){return T.apply(t,arguments)}},_=I,k=_({}.toString),C=_("".slice),F=function(t){return C(k(t),8,-1)},R=h,N=F,D=Object,G=I("".split),B=R((function(){return!D("z").propertyIsEnumerable(0)}))?function(t){return"String"===N(t)?G(t,""):D(t)}:D,M=function(t){return null==t},z=M,U=TypeError,W=function(t){if(z(t))throw new U("Can't call method on "+t);return t},Y=B,H=W,$=function(t){return Y(H(t))},q="object"==typeof document&&document.all,X=void 0===q&&void 0!==q?function(t){return"function"==typeof t||t===q}:function(t){return"function"==typeof t},K=X,V=function(t){return"object"==typeof t?null!==t:K(t)},J=l,Q=X,Z=function(t,e){return arguments.length<2?(r=J[t],Q(r)?r:void 0):J[t]&&J[t][e];var r},tt=I({}.isPrototypeOf),et=l.navigator,rt=et&&et.userAgent,nt=rt?String(rt):"",ot=l,it=nt,at=ot.process,ut=ot.Deno,ct=at&&at.versions||ut&&ut.version,ft=ct&&ct.v8;ft&&(E=(S=ft.split("."))[0]>0&&S[0]<4?1:+(S[0]+S[1])),!E&&it&&(!(S=it.match(/Edge\/(\d+)/))||S[1]>=74)&&(S=it.match(/Chrome\/(\d+)/))&&(E=+S[1]);var st=E,lt=h,pt=l.String,ht=!!Object.getOwnPropertySymbols&&!lt((function(){var t=Symbol("symbol detection");return!pt(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&st&&st<41})),yt=ht&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,vt=Z,dt=X,gt=tt,mt=Object,bt=yt?function(t){return"symbol"==typeof t}:function(t){var e=vt("Symbol");return dt(e)&&gt(e.prototype,mt(t))},wt=String,Ot=function(t){try{return wt(t)}catch(t){return"Object"}},jt=X,St=Ot,Et=TypeError,xt=function(t){if(jt(t))return t;throw new Et(St(t)+" is not a function")},Pt=xt,At=M,Tt=function(t,e){var r=t[e];return At(r)?void 0:Pt(r)},Lt=m,It=X,_t=V,kt=TypeError,Ct={exports:{}},Ft=l,Rt=Object.defineProperty,Nt=function(t,e){try{Rt(Ft,t,{value:e,configurable:!0,writable:!0})}catch(r){Ft[t]=e}return e},Dt=l,Gt=Nt,Bt="__core-js_shared__",Mt=Ct.exports=Dt[Bt]||Gt(Bt,{});(Mt.versions||(Mt.versions=[])).push({version:"3.38.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",source:"https://github.com/zloirock/core-js"});var zt=Ct.exports,Ut=zt,Wt=function(t,e){return Ut[t]||(Ut[t]=e||{})},Yt=W,Ht=Object,$t=function(t){return Ht(Yt(t))},qt=$t,Xt=I({}.hasOwnProperty),Kt=Object.hasOwn||function(t,e){return Xt(qt(t),e)},Vt=I,Jt=0,Qt=Math.random(),Zt=Vt(1..toString),te=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Zt(++Jt+Qt,36)},ee=Wt,re=Kt,ne=te,oe=ht,ie=yt,ae=l.Symbol,ue=ee("wks"),ce=ie?ae.for||ae:ae&&ae.withoutSetter||ne,fe=function(t){return re(ue,t)||(ue[t]=oe&&re(ae,t)?ae[t]:ce("Symbol."+t)),ue[t]},se=m,le=V,pe=bt,he=Tt,ye=function(t,e){var r,n;if("string"===e&&It(r=t.toString)&&!_t(n=Lt(r,t)))return n;if(It(r=t.valueOf)&&!_t(n=Lt(r,t)))return n;if("string"!==e&&It(r=t.toString)&&!_t(n=Lt(r,t)))return n;throw new kt("Can't convert object to primitive value")},ve=TypeError,de=fe("toPrimitive"),ge=function(t,e){if(!le(t)||pe(t))return t;var r,n=he(t,de);if(n){if(void 0===e&&(e="default"),r=se(n,t,e),!le(r)||pe(r))return r;throw new ve("Can't convert object to primitive value")}return void 0===e&&(e="number"),ye(t,e)},me=bt,be=function(t){var e=ge(t,"string");return me(e)?e:e+""},we=V,Oe=l.document,je=we(Oe)&&we(Oe.createElement),Se=function(t){return je?Oe.createElement(t):{}},Ee=Se,xe=!y&&!h((function(){return 7!==Object.defineProperty(Ee("div"),"a",{get:function(){return 7}}).a})),Pe=y,Ae=m,Te=b,Le=x,Ie=$,_e=be,ke=Kt,Ce=xe,Fe=Object.getOwnPropertyDescriptor;p.f=Pe?Fe:function(t,e){if(t=Ie(t),e=_e(e),Ce)try{return Fe(t,e)}catch(t){}if(ke(t,e))return Le(!Ae(Te.f,t,e),t[e])};var Re={},Ne=y&&h((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),De=V,Ge=String,Be=TypeError,Me=function(t){if(De(t))return t;throw new Be(Ge(t)+" is not an object")},ze=y,Ue=xe,We=Ne,Ye=Me,He=be,$e=TypeError,qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ke="enumerable",Ve="configurable",Je="writable";Re.f=ze?We?function(t,e,r){if(Ye(t),e=He(e),Ye(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Je in r&&!r[Je]){var n=Xe(t,e);n&&n[Je]&&(t[e]=r.value,r={configurable:Ve in r?r[Ve]:n[Ve],enumerable:Ke in r?r[Ke]:n[Ke],writable:!1})}return qe(t,e,r)}:qe:function(t,e,r){if(Ye(t),e=He(e),Ye(r),Ue)try{return qe(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new $e("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Qe=Re,Ze=x,tr=y?function(t,e,r){return Qe.f(t,e,Ze(1,r))}:function(t,e,r){return t[e]=r,t},er={exports:{}},rr=y,nr=Kt,or=Function.prototype,ir=rr&&Object.getOwnPropertyDescriptor,ar=nr(or,"name"),ur={EXISTS:ar,PROPER:ar&&"something"===function(){}.name,CONFIGURABLE:ar&&(!rr||rr&&ir(or,"name").configurable)},cr=X,fr=zt,sr=I(Function.toString);cr(fr.inspectSource)||(fr.inspectSource=function(t){return sr(t)});var lr,pr,hr,yr=fr.inspectSource,vr=X,dr=l.WeakMap,gr=vr(dr)&&/native code/.test(String(dr)),mr=te,br=Wt("keys"),wr=function(t){return br[t]||(br[t]=mr(t))},Or={},jr=gr,Sr=l,Er=V,xr=tr,Pr=Kt,Ar=zt,Tr=wr,Lr=Or,Ir="Object already initialized",_r=Sr.TypeError,kr=Sr.WeakMap;if(jr||Ar.state){var Cr=Ar.state||(Ar.state=new kr);Cr.get=Cr.get,Cr.has=Cr.has,Cr.set=Cr.set,lr=function(t,e){if(Cr.has(t))throw new _r(Ir);return e.facade=t,Cr.set(t,e),e},pr=function(t){return Cr.get(t)||{}},hr=function(t){return Cr.has(t)}}else{var Fr=Tr("state");Lr[Fr]=!0,lr=function(t,e){if(Pr(t,Fr))throw new _r(Ir);return e.facade=t,xr(t,Fr,e),e},pr=function(t){return Pr(t,Fr)?t[Fr]:{}},hr=function(t){return Pr(t,Fr)}}var Rr={set:lr,get:pr,has:hr,enforce:function(t){return hr(t)?pr(t):lr(t,{})},getterFor:function(t){return function(e){var r;if(!Er(e)||(r=pr(e)).type!==t)throw new _r("Incompatible receiver, "+t+" required");return r}}},Nr=I,Dr=h,Gr=X,Br=Kt,Mr=y,zr=ur.CONFIGURABLE,Ur=yr,Wr=Rr.enforce,Yr=Rr.get,Hr=String,$r=Object.defineProperty,qr=Nr("".slice),Xr=Nr("".replace),Kr=Nr([].join),Vr=Mr&&!Dr((function(){return 8!==$r((function(){}),"length",{value:8}).length})),Jr=String(String).split("String"),Qr=er.exports=function(t,e,r){"Symbol("===qr(Hr(e),0,7)&&(e="["+Xr(Hr(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Br(t,"name")||zr&&t.name!==e)&&(Mr?$r(t,"name",{value:e,configurable:!0}):t.name=e),Vr&&r&&Br(r,"arity")&&t.length!==r.arity&&$r(t,"length",{value:r.arity});try{r&&Br(r,"constructor")&&r.constructor?Mr&&$r(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=Wr(t);return Br(n,"source")||(n.source=Kr(Jr,"string"==typeof e?e:"")),t};Function.prototype.toString=Qr((function(){return Gr(this)&&Yr(this).source||Ur(this)}),"toString");var Zr=er.exports,tn=X,en=Re,rn=Zr,nn=Nt,on=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(tn(r)&&rn(r,i,n),n.global)o?t[e]=r:nn(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:en.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},an={},un=Math.ceil,cn=Math.floor,fn=Math.trunc||function(t){var e=+t;return(e>0?cn:un)(e)},sn=function(t){var e=+t;return e!=e||0===e?0:fn(e)},ln=sn,pn=Math.max,hn=Math.min,yn=sn,vn=Math.min,dn=function(t){var e=yn(t);return e>0?vn(e,9007199254740991):0},gn=function(t){return dn(t.length)},mn=$,bn=function(t,e){var r=ln(t);return r<0?pn(r+e,0):hn(r,e)},wn=gn,On=function(t){return function(e,r,n){var o=mn(e),i=wn(o);if(0===i)return!t&&-1;var a,u=bn(n,i);if(t&&r!=r){for(;i>u;)if((a=o[u++])!=a)return!0}else for(;i>u;u++)if((t||u in o)&&o[u]===r)return t||u||0;return!t&&-1}},jn={includes:On(!0),indexOf:On(!1)},Sn=Kt,En=$,xn=jn.indexOf,Pn=Or,An=I([].push),Tn=function(t,e){var r,n=En(t),o=0,i=[];for(r in n)!Sn(Pn,r)&&Sn(n,r)&&An(i,r);for(;e.length>o;)Sn(n,r=e[o++])&&(~xn(i,r)||An(i,r));return i},Ln=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],In=Tn,_n=Ln.concat("length","prototype");an.f=Object.getOwnPropertyNames||function(t){return In(t,_n)};var kn={};kn.f=Object.getOwnPropertySymbols;var Cn=Z,Fn=an,Rn=kn,Nn=Me,Dn=I([].concat),Gn=Cn("Reflect","ownKeys")||function(t){var e=Fn.f(Nn(t)),r=Rn.f;return r?Dn(e,r(t)):e},Bn=Kt,Mn=Gn,zn=p,Un=Re,Wn=h,Yn=X,Hn=/#|\.prototype\./,$n=function(t,e){var r=Xn[qn(t)];return r===Vn||r!==Kn&&(Yn(e)?Wn(e):!!e)},qn=$n.normalize=function(t){return String(t).replace(Hn,".").toLowerCase()},Xn=$n.data={},Kn=$n.NATIVE="N",Vn=$n.POLYFILL="P",Jn=$n,Qn=l,Zn=p.f,to=tr,eo=on,ro=Nt,no=function(t,e,r){for(var n=Mn(e),o=Un.f,i=zn.f,a=0;a<n.length;a++){var u=n[a];Bn(t,u)||r&&Bn(r,u)||o(t,u,i(e,u))}},oo=Jn,io=function(t,e){var r,n,o,i,a,u=t.target,c=t.global,f=t.stat;if(r=c?Qn:f?Qn[u]||ro(u,{}):Qn[u]&&Qn[u].prototype)for(n in e){if(i=e[n],o=t.dontCallGetSet?(a=Zn(r,n))&&a.value:r[n],!oo(c?n:u+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;no(i,o)}(t.sham||o&&o.sham)&&to(i,"sham",!0),eo(r,n,i,t)}},ao=F,uo=I,co=function(t){if("Function"===ao(t))return uo(t)},fo=xt,so=v,lo=co(co.bind),po=function(t,e){return fo(t),void 0===e?t:so?lo(t,e):function(){return t.apply(e,arguments)}},ho=m,yo=Me,vo=Tt,go=Me,mo=function(t,e,r){var n,o;yo(t);try{if(!(n=vo(t,"return"))){if("throw"===e)throw r;return r}n=ho(n,t)}catch(t){o=!0,n=t}if("throw"===e)throw r;if(o)throw n;return yo(n),r},bo={},wo=bo,Oo=fe("iterator"),jo=Array.prototype,So={};So[fe("toStringTag")]="z";var Eo="[object z]"===String(So),xo=Eo,Po=X,Ao=F,To=fe("toStringTag"),Lo=Object,Io="Arguments"===Ao(function(){return arguments}()),_o=xo?Ao:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Lo(t),To))?r:Io?Ao(e):"Object"===(n=Ao(e))&&Po(e.callee)?"Arguments":n},ko=I,Co=h,Fo=X,Ro=_o,No=yr,Do=function(){},Go=Z("Reflect","construct"),Bo=/^\s*(?:class|function)\b/,Mo=ko(Bo.exec),zo=!Bo.test(Do),Uo=function(t){if(!Fo(t))return!1;try{return Go(Do,[],t),!0}catch(t){return!1}},Wo=function(t){if(!Fo(t))return!1;switch(Ro(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return zo||!!Mo(Bo,No(t))}catch(t){return!0}};Wo.sham=!0;var Yo=!Go||Co((function(){var t;return Uo(Uo.call)||!Uo(Object)||!Uo((function(){t=!0}))||t}))?Wo:Uo,Ho=y,$o=Re,qo=x,Xo=_o,Ko=Tt,Vo=M,Jo=bo,Qo=fe("iterator"),Zo=function(t){if(!Vo(t))return Ko(t,Qo)||Ko(t,"@@iterator")||Jo[Xo(t)]},ti=m,ei=xt,ri=Me,ni=Ot,oi=Zo,ii=TypeError,ai=po,ui=m,ci=$t,fi=function(t,e,r,n){try{return n?e(go(r)[0],r[1]):e(r)}catch(e){mo(t,"throw",e)}},si=function(t){return void 0!==t&&(wo.Array===t||jo[Oo]===t)},li=Yo,pi=gn,hi=function(t,e,r){Ho?$o.f(t,e,qo(0,r)):t[e]=r},yi=function(t,e){var r=arguments.length<2?oi(t):e;if(ei(r))return ri(ti(r,t));throw new ii(ni(t)+" is not iterable")},vi=Zo,di=Array,gi=fe("iterator"),mi=!1;try{var bi=0,wi={next:function(){return{done:!!bi++}},return:function(){mi=!0}};wi[gi]=function(){return this},Array.from(wi,(function(){throw 2}))}catch(t){}var Oi=function(t){var e=ci(t),r=li(this),n=arguments.length,o=n>1?arguments[1]:void 0,i=void 0!==o;i&&(o=ai(o,n>2?arguments[2]:void 0));var a,u,c,f,s,l,p=vi(e),h=0;if(!p||this===di&&si(p))for(a=pi(e),u=r?new this(a):di(a);a>h;h++)l=i?o(e[h],h):e[h],hi(u,h,l);else for(u=r?new this:[],s=(f=yi(e,p)).next;!(c=ui(s,f)).done;h++)l=i?fi(f,o,[c.value,h],!0):c.value,hi(u,h,l);return u.length=h,u},ji=function(t,e){try{if(!e&&!mi)return!1}catch(t){return!1}var r=!1;try{var n={};n[gi]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r};io({target:"Array",stat:!0,forced:!ji((function(t){Array.from(t)}))},{from:Oi});var Si=F,Ei=Array.isArray||function(t){return"Array"===Si(t)},xi=Yo,Pi=V,Ai=fe("species"),Ti=Array,Li=function(t){var e;return Ei(t)&&(e=t.constructor,(xi(e)&&(e===Ti||Ei(e.prototype))||Pi(e)&&null===(e=e[Ai]))&&(e=void 0)),void 0===e?Ti:e},Ii=po,_i=B,ki=$t,Ci=gn,Fi=function(t,e){return new(Li(t))(0===e?0:e)},Ri=I([].push),Ni=function(t){var e=1===t,r=2===t,n=3===t,o=4===t,i=6===t,a=7===t,u=5===t||i;return function(c,f,s,l){for(var p,h,y=ki(c),v=_i(y),d=Ci(v),g=Ii(f,s),m=0,b=l||Fi,w=e?b(c,d):r||a?b(c,0):void 0;d>m;m++)if((u||m in v)&&(h=g(p=v[m],m,y),t))if(e)w[m]=h;else if(h)switch(t){case 3:return!0;case 5:return p;case 6:return m;case 2:Ri(w,p)}else switch(t){case 4:return!1;case 7:Ri(w,p)}return i?-1:n||o?o:w}},Di={forEach:Ni(0),map:Ni(1),filter:Ni(2),some:Ni(3),every:Ni(4),find:Ni(5),findIndex:Ni(6),filterReject:Ni(7)},Gi=h,Bi=Di.some;io({target:"Array",proto:!0,forced:!function(t,e){var r=[][t];return!!r&&Gi((function(){r.call(null,e||function(){return 1},1)}))}("some")},{some:function(t){return Bi(this,t,arguments.length>1?arguments[1]:void 0)}});var Mi=Tn,zi=Ln,Ui=Object.keys||function(t){return Mi(t,zi)},Wi=y,Yi=I,Hi=m,$i=h,qi=Ui,Xi=kn,Ki=b,Vi=$t,Ji=B,Qi=Object.assign,Zi=Object.defineProperty,ta=Yi([].concat),ea=!Qi||$i((function(){if(Wi&&1!==Qi({b:1},Qi(Zi({},"a",{enumerable:!0,get:function(){Zi(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol("assign detection"),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!==Qi({},t)[r]||qi(Qi({},e)).join("")!==n}))?function(t,e){for(var r=Vi(t),n=arguments.length,o=1,i=Xi.f,a=Ki.f;n>o;)for(var u,c=Ji(arguments[o++]),f=i?ta(qi(c),i(c)):qi(c),s=f.length,l=0;s>l;)u=f[l++],Wi&&!Hi(a,c,u)||(r[u]=c[u]);return r}:Qi,ra=ea;io({target:"Object",stat:!0,arity:2,forced:Object.assign!==ra},{assign:ra});var na=_o,oa=Eo?{}.toString:function(){return"[object "+na(this)+"]"};Eo||on(Object.prototype,"toString",oa,{unsafe:!0});var ia=_o,aa=String,ua=function(t){if("Symbol"===ia(t))throw new TypeError("Cannot convert a Symbol value to a string");return aa(t)},ca=I,fa=sn,sa=ua,la=W,pa=ca("".charAt),ha=ca("".charCodeAt),ya=ca("".slice),va=function(t){return function(e,r){var n,o,i=sa(la(e)),a=fa(r),u=i.length;return a<0||a>=u?t?"":void 0:(n=ha(i,a))<55296||n>56319||a+1===u||(o=ha(i,a+1))<56320||o>57343?t?pa(i,a):n:t?ya(i,a,a+2):o-56320+(n-55296<<10)+65536}},da={codeAt:va(!1),charAt:va(!0)},ga={},ma=y,ba=Ne,wa=Re,Oa=Me,ja=$,Sa=Ui;ga.f=ma&&!ba?Object.defineProperties:function(t,e){Oa(t);for(var r,n=ja(e),o=Sa(e),i=o.length,a=0;i>a;)wa.f(t,r=o[a++],n[r]);return t};var Ea,xa=Z("document","documentElement"),Pa=Me,Aa=ga,Ta=Ln,La=Or,Ia=xa,_a=Se,ka="prototype",Ca="script",Fa=wr("IE_PROTO"),Ra=function(){},Na=function(t){return"<"+Ca+">"+t+"</"+Ca+">"},Da=function(t){t.write(Na("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ga=function(){try{Ea=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Ga="undefined"!=typeof document?document.domain&&Ea?Da(Ea):(e=_a("iframe"),r="java"+Ca+":",e.style.display="none",Ia.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Na("document.F=Object")),t.close(),t.F):Da(Ea);for(var n=Ta.length;n--;)delete Ga[ka][Ta[n]];return Ga()};La[Fa]=!0;var Ba,Ma,za,Ua=Object.create||function(t,e){var r;return null!==t?(Ra[ka]=Pa(t),r=new Ra,Ra[ka]=null,r[Fa]=t):r=Ga(),void 0===e?r:Aa.f(r,e)},Wa=!h((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Ya=Kt,Ha=X,$a=$t,qa=Wa,Xa=wr("IE_PROTO"),Ka=Object,Va=Ka.prototype,Ja=qa?Ka.getPrototypeOf:function(t){var e=$a(t);if(Ya(e,Xa))return e[Xa];var r=e.constructor;return Ha(r)&&e instanceof r?r.prototype:e instanceof Ka?Va:null},Qa=h,Za=X,tu=V,eu=Ja,ru=on,nu=fe("iterator"),ou=!1;[].keys&&("next"in(za=[].keys())?(Ma=eu(eu(za)))!==Object.prototype&&(Ba=Ma):ou=!0);var iu=!tu(Ba)||Qa((function(){var t={};return Ba[nu].call(t)!==t}));iu&&(Ba={}),Za(Ba[nu])||ru(Ba,nu,(function(){return this}));var au={IteratorPrototype:Ba,BUGGY_SAFARI_ITERATORS:ou},uu=Re.f,cu=Kt,fu=fe("toStringTag"),su=function(t,e,r){t&&!r&&(t=t.prototype),t&&!cu(t,fu)&&uu(t,fu,{configurable:!0,value:e})},lu=au.IteratorPrototype,pu=Ua,hu=x,yu=su,vu=bo,du=function(){return this},gu=I,mu=xt,bu=V,wu=function(t){return bu(t)||null===t},Ou=String,ju=TypeError,Su=function(t,e,r){try{return gu(mu(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Eu=V,xu=W,Pu=function(t){if(wu(t))return t;throw new ju("Can't set "+Ou(t)+" as a prototype")},Au=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Su(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return xu(r),Pu(n),Eu(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0),Tu=io,Lu=m,Iu=X,_u=function(t,e,r,n){var o=e+" Iterator";return t.prototype=pu(lu,{next:hu(+!n,r)}),yu(t,o,!1),vu[o]=du,t},ku=Ja,Cu=Au,Fu=su,Ru=tr,Nu=on,Du=bo,Gu=ur.PROPER,Bu=ur.CONFIGURABLE,Mu=au.IteratorPrototype,zu=au.BUGGY_SAFARI_ITERATORS,Uu=fe("iterator"),Wu="keys",Yu="values",Hu="entries",$u=function(){return this},qu=da.charAt,Xu=ua,Ku=Rr,Vu=function(t,e,r,n,o,i,a){_u(r,e,n);var u,c,f,s=function(t){if(t===o&&v)return v;if(!zu&&t&&t in h)return h[t];switch(t){case Wu:case Yu:case Hu:return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",p=!1,h=t.prototype,y=h[Uu]||h["@@iterator"]||o&&h[o],v=!zu&&y||s(o),d="Array"===e&&h.entries||y;if(d&&(u=ku(d.call(new t)))!==Object.prototype&&u.next&&(ku(u)!==Mu&&(Cu?Cu(u,Mu):Iu(u[Uu])||Nu(u,Uu,$u)),Fu(u,l,!0)),Gu&&o===Yu&&y&&y.name!==Yu&&(Bu?Ru(h,"name",Yu):(p=!0,v=function(){return Lu(y,this)})),o)if(c={values:s(Yu),keys:i?v:s(Wu),entries:s(Hu)},a)for(f in c)(zu||p||!(f in h))&&Nu(h,f,c[f]);else Tu({target:e,proto:!0,forced:zu||p},c);return h[Uu]!==v&&Nu(h,Uu,v,{name:o}),Du[e]=v,c},Ju=function(t,e){return{value:t,done:e}},Qu="String Iterator",Zu=Ku.set,tc=Ku.getterFor(Qu);Vu(String,"String",(function(t){Zu(this,{type:Qu,string:Xu(t),index:0})}),(function(){var t,e=tc(this),r=e.string,n=e.index;return n>=r.length?Ju(void 0,!0):(t=qu(r,n),e.index+=t.length,Ju(t,!1))}));var ec=v,rc=Function.prototype,nc=rc.apply,oc=rc.call,ic="object"==typeof Reflect&&Reflect.apply||(ec?oc.bind(nc):function(){return oc.apply(nc,arguments)}),ac=l,uc=nt,cc=F,fc=function(t){return uc.slice(0,t.length)===t},sc=fc("Bun/")?"BUN":fc("Cloudflare-Workers")?"CLOUDFLARE":fc("Deno/")?"DENO":fc("Node.js/")?"NODE":ac.Bun&&"string"==typeof Bun.version?"BUN":ac.Deno&&"object"==typeof Deno.version?"DENO":"process"===cc(ac.process)?"NODE":ac.window&&ac.document?"BROWSER":"REST",lc=I([].slice),pc=TypeError,hc=l,yc=ic,vc=X,dc=sc,gc=nt,mc=lc,bc=function(t,e){if(t<e)throw new pc("Not enough arguments");return t},wc=hc.Function,Oc=/MSIE .\./.test(gc)||"BUN"===dc&&function(){var t=hc.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}(),jc=function(t,e){var r=e?2:1;return Oc?function(n,o){var i=bc(arguments.length,1)>r,a=vc(n)?n:wc(n),u=i?mc(arguments,r):[],c=i?function(){yc(a,this,u)}:a;return e?t(c,o):t(c)}:t},Sc=io,Ec=l,xc=jc(Ec.setInterval,!0);Sc({global:!0,bind:!0,forced:Ec.setInterval!==xc},{setInterval:xc});var Pc=io,Ac=l,Tc=jc(Ac.setTimeout,!0);Pc({global:!0,bind:!0,forced:Ac.setTimeout!==Tc},{setTimeout:Tc});var Lc=function(){return t=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id="Splash",this.config=a({splashImage:!1,backgroundColor:"#ffffff",text:"Loading...",fontOptions:{fontFamily:"Arial, sans-serif",fontSize:"18px",color:"#333"},minimumDisplay:1},e),this.splash=null},n=[{key:"init",value:(i=u().mark((function t(e){var r,n=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Reveal=e,r=Ic(this.Reveal.getConfig(),["splash","revealsplash"]),this.config=a(a({},this.config),r),this.initializeSplash(),this.Reveal.on("ready",(function(){setTimeout((function(){n.removeSplash()}),1e3*n.config.minimumDisplay)}));case 5:case"end":return t.stop()}}),t,this)})),c=function(){var t=this,r=arguments;return new Promise((function(n,o){var a=i.apply(t,r);function u(t){e(a,n,o,u,c,"next",t)}function c(t){e(a,n,o,u,c,"throw",t)}u(void 0)}))},function(t){return c.apply(this,arguments)})},{key:"initializeSplash",value:function(){this.splash=document.createElement("div"),this.splash.id="reveal-splash",this.splash.style.position="fixed",this.splash.style.top="0",this.splash.style.left="0",this.splash.style.width="100%",this.splash.style.height="100%",this.splash.style.backgroundColor=this.config.backgroundColor,this.splash.style.zIndex="1000",this.splash.style.display="flex",this.splash.style.justifyContent="center",this.splash.style.alignItems="center",this.splash.style.textAlign="center",this.splash.style.margin="auto",this.splash.style.padding="0";var t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.justifyContent="center";var e,r=document.createElement("div");if(this.config.splashImage){var n=document.createElement("img");n.src=this.config.splashImage,n.style.maxWidth="50%",n.style.maxHeight="50%",n.style.marginBottom="5px",r.appendChild(n)}else r.style.width="50px",r.style.height="50px",r.style.border="5px solid #ccc",r.style.borderTop="5px solid #333",r.style.borderRadius="50%",r.style.animation="spin 1s linear infinite",r.style.marginBottom="20px";if(this.isHtmlString(this.config.text)?(e=document.createElement("div")).innerHTML=this.config.text:(e=document.createElement("p")).textContent=this.config.text,Object.assign(e.style,this.config.fontOptions),t.appendChild(r),t.appendChild(e),this.splash.appendChild(t),document.body.appendChild(this.splash),!this.config.splashImage){var o=document.createElement("style");o.innerText="\n            @keyframes spin {\n                0% { transform: rotate(0deg); }\n                100% { transform: rotate(360deg); }\n            }\n        ",this.splash.appendChild(o)}}},{key:"isHtmlString",value:function(t){var e=(new DOMParser).parseFromString(t,"text/html");return Array.from(e.body.childNodes).some((function(t){return 1===t.nodeType}))}},{key:"removeSplash",value:function(){var t=this;this.splash&&(this.splash.style.opacity="0",setTimeout((function(){t.splash.remove()}),500))}},{key:"destroy",value:function(){this.removeSplash()}}],n&&r(t.prototype,n),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,o,i,c}();function Ic(t,e){var r,o=n(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;for(var a in t)if(a.toLowerCase()===i.toLowerCase())return t[a]}}catch(t){o.e(t)}finally{o.f()}return{}}return new Lc}));
