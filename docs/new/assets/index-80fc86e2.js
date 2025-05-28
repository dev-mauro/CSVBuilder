(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Zs={exports:{}},eo={},D={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vi=Symbol.for("react.element"),Tm=Symbol.for("react.portal"),km=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Cm=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Am=Symbol.for("react.context"),Nm=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),xm=Symbol.for("react.memo"),Dm=Symbol.for("react.lazy"),Hu=Symbol.iterator;function Lm(t){return t===null||typeof t!="object"?null:(t=Hu&&t[Hu]||t["@@iterator"],typeof t=="function"?t:null)}var qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kd=Object.assign,Gd={};function dr(t,e,n){this.props=t,this.context=e,this.refs=Gd,this.updater=n||qd}dr.prototype.isReactComponent={};dr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};dr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qd(){}Qd.prototype=dr.prototype;function _l(t,e,n){this.props=t,this.context=e,this.refs=Gd,this.updater=n||qd}var wl=_l.prototype=new Qd;wl.constructor=_l;Kd(wl,dr.prototype);wl.isPureReactComponent=!0;var Wu=Array.isArray,Yd=Object.prototype.hasOwnProperty,El={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function Jd(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yd.call(e,r)&&!Xd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vi,type:t,key:s,ref:o,props:i,_owner:El.current}}function Vm(t,e){return{$$typeof:vi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Il(t){return typeof t=="object"&&t!==null&&t.$$typeof===vi}function Mm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qu=/\/+/g;function Vo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mm(""+t.key):e.toString(36)}function Ji(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vi:case Tm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vo(o,0):r,Wu(i)?(n="",t!=null&&(n=t.replace(qu,"$&/")+"/"),Ji(i,e,n,"",function(u){return u})):i!=null&&(Il(i)&&(i=Vm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qu,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wu(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vo(s,a);o+=Ji(s,e,n,l,i)}else if(l=Lm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vo(s,a++),o+=Ji(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oi(t,e,n){if(t==null)return t;var r=[],i=0;return Ji(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Fm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},Zi={transition:null},Um={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Zi,ReactCurrentOwner:El};V.Children={map:Oi,forEach:function(t,e,n){Oi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oi(t,function(){e++}),e},toArray:function(t){return Oi(t,function(e){return e})||[]},only:function(t){if(!Il(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=dr;V.Fragment=km;V.Profiler=Cm;V.PureComponent=_l;V.StrictMode=Pm;V.Suspense=Om;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=El.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Yd.call(e,l)&&!Xd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:vi,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:Am,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rm,_context:t},t.Consumer=t};V.createElement=Jd;V.createFactory=function(t){var e=Jd.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:Nm,render:t}};V.isValidElement=Il;V.lazy=function(t){return{$$typeof:Dm,_payload:{_status:-1,_result:t},_init:Fm}};V.memo=function(t,e){return{$$typeof:xm,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=Zi.transition;Zi.transition={};try{t()}finally{Zi.transition=e}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(t,e){return Ie.current.useCallback(t,e)};V.useContext=function(t){return Ie.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};V.useEffect=function(t,e){return Ie.current.useEffect(t,e)};V.useId=function(){return Ie.current.useId()};V.useImperativeHandle=function(t,e,n){return Ie.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Ie.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Ie.current.useReducer(t,e,n)};V.useRef=function(t){return Ie.current.useRef(t)};V.useState=function(t){return Ie.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Ie.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Ie.current.useTransition()};V.version="18.2.0";(function(t){t.exports=V})(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=D.exports,zm=Symbol.for("react.element"),$m=Symbol.for("react.fragment"),jm=Object.prototype.hasOwnProperty,Bm=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hm={key:!0,ref:!0,__self:!0,__source:!0};function Zd(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jm.call(e,r)&&!Hm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zm,type:t,key:s,ref:o,props:i,_owner:Bm.current}}eo.Fragment=$m;eo.jsx=Zd;eo.jsxs=Zd;(function(t){t.exports=eo})(Zs);const fr=Zs.exports.Fragment,_=Zs.exports.jsx,$=Zs.exports.jsxs;var ma={},ef={exports:{}},Ue={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,O){var x=C.length;C.push(O);e:for(;0<x;){var J=x-1>>>1,se=C[J];if(0<i(se,O))C[J]=O,C[x]=se,x=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],x=C.pop();if(x!==O){C[0]=x;e:for(var J=0,se=C.length,Ai=se>>>1;J<Ai;){var sn=2*(J+1)-1,Lo=C[sn],on=sn+1,Ni=C[on];if(0>i(Lo,x))on<se&&0>i(Ni,Lo)?(C[J]=Ni,C[on]=x,J=on):(C[J]=Lo,C[sn]=x,J=sn);else if(on<se&&0>i(Ni,x))C[J]=Ni,C[on]=x,J=on;else break e}}return O}function i(C,O){var x=C.sortIndex-O.sortIndex;return x!==0?x:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,p=null,m=3,v=!1,w=!1,I=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function g(C){if(I=!1,h(C),!w)if(n(l)!==null)w=!0,xo(E);else{var O=n(u);O!==null&&Do(g,O.startTime-C)}}function E(C,O){w=!1,I&&(I=!1,f(k),k=-1),v=!0;var x=m;try{for(h(O),p=n(l);p!==null&&(!(p.expirationTime>O)||C&&!Ke());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var se=J(p.expirationTime<=O);O=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&r(l),h(O)}else r(l);p=n(l)}if(p!==null)var Ai=!0;else{var sn=n(u);sn!==null&&Do(g,sn.startTime-O),Ai=!1}return Ai}finally{p=null,m=x,v=!1}}var S=!1,T=null,k=-1,B=5,L=-1;function Ke(){return!(t.unstable_now()-L<B)}function vr(){if(T!==null){var C=t.unstable_now();L=C;var O=!0;try{O=T(!0,C)}finally{O?yr():(S=!1,T=null)}}else S=!1}var yr;if(typeof c=="function")yr=function(){c(vr)};else if(typeof MessageChannel<"u"){var Bu=new MessageChannel,Sm=Bu.port2;Bu.port1.onmessage=vr,yr=function(){Sm.postMessage(null)}}else yr=function(){F(vr,0)};function xo(C){T=C,S||(S=!0,yr())}function Do(C,O){k=F(function(){C(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){w||v||(w=!0,xo(E))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var x=m;m=O;try{return C()}finally{m=x}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var x=m;m=C;try{return O()}finally{m=x}},t.unstable_scheduleCallback=function(C,O,x){var J=t.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?J+x:J):x=J,C){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=x+se,C={id:d++,callback:O,priorityLevel:C,startTime:x,expirationTime:se,sortIndex:-1},x>J?(C.sortIndex=x,e(u,C),n(l)===null&&C===n(u)&&(I?(f(k),k=-1):I=!0,Do(g,x-J))):(C.sortIndex=se,e(l,C),w||v||(w=!0,xo(E))),C},t.unstable_shouldYield=Ke,t.unstable_wrapCallback=function(C){var O=m;return function(){var x=m;m=O;try{return C.apply(this,arguments)}finally{m=x}}}})(nf);(function(t){t.exports=nf})(tf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf=D.exports,Fe=tf.exports;function y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sf=new Set,Hr={};function Cn(t,e){Zn(t,e),Zn(t+"Capture",e)}function Zn(t,e){for(Hr[t]=e,t=0;t<e.length;t++)sf.add(e[t])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ga=Object.prototype.hasOwnProperty,Wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ku={},Gu={};function qm(t){return ga.call(Gu,t)?!0:ga.call(Ku,t)?!1:Wm.test(t)?Gu[t]=!0:(Ku[t]=!0,!1)}function Km(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gm(t,e,n,r){if(e===null||typeof e>"u"||Km(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Se(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){he[t]=new Se(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];he[e]=new Se(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){he[t]=new Se(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){he[t]=new Se(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){he[t]=new Se(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){he[t]=new Se(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){he[t]=new Se(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){he[t]=new Se(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){he[t]=new Se(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function Tl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sl,Tl);he[e]=new Se(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sl,Tl);he[e]=new Se(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sl,Tl);he[e]=new Se(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){he[t]=new Se(t,1,!1,t.toLowerCase(),null,!1,!1)});he.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){he[t]=new Se(t,1,!1,t.toLowerCase(),null,!0,!0)});function kl(t,e,n,r){var i=he.hasOwnProperty(e)?he[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gm(e,n,i,r)&&(n=null),r||i===null?qm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pt=rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),xn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),va=Symbol.for("react.profiler"),of=Symbol.for("react.provider"),af=Symbol.for("react.context"),Cl=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),_a=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),lf=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function _r(t){return t===null||typeof t!="object"?null:(t=Qu&&t[Qu]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,Mo;function Cr(t){if(Mo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mo=e&&e[1]||""}return`
`+Mo+t}var Fo=!1;function Uo(t,e){if(!t||Fo)return"";Fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Cr(t):""}function Qm(t){switch(t.tag){case 5:return Cr(t.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return t=Uo(t.type,!1),t;case 11:return t=Uo(t.type.render,!1),t;case 1:return t=Uo(t.type,!0),t;default:return""}}function wa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dn:return"Fragment";case xn:return"Portal";case va:return"Profiler";case Pl:return"StrictMode";case ya:return"Suspense";case _a:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case af:return(t.displayName||"Context")+".Consumer";case of:return(t._context.displayName||"Context")+".Provider";case Cl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rl:return e=t.displayName||null,e!==null?e:wa(t.type)||"Memo";case Nt:e=t._payload,t=t._init;try{return wa(t(e))}catch{}}return null}function Ym(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wa(e);case 8:return e===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xm(t){var e=uf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Di(t){t._valueTracker||(t._valueTracker=Xm(t))}function cf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ps(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ea(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function df(t,e){e=e.checked,e!=null&&kl(t,"checked",e,!1)}function Ia(t,e){df(t,e);var n=Xt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sa(t,e.type,Xt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sa(t,e,n){(e!=="number"||ps(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rr=Array.isArray;function Hn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ta(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(y(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ju(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(y(92));if(Rr(n)){if(1<n.length)throw Error(y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xt(n)}}function ff(t,e){var n=Xt(e.value),r=Xt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ka(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Li,pf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Li.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jm=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(t){Jm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Or[e]=Or[t]})});function mf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Or.hasOwnProperty(t)&&Or[t]?(""+e).trim():e+"px"}function gf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Zm=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pa(t,e){if(e){if(Zm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(y(62))}}function Ca(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function Al(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Aa=null,Wn=null,qn=null;function ec(t){if(t=wi(t)){if(typeof Aa!="function")throw Error(y(280));var e=t.stateNode;e&&(e=so(e),Aa(t.stateNode,t.type,e))}}function vf(t){Wn?qn?qn.push(t):qn=[t]:Wn=t}function yf(){if(Wn){var t=Wn,e=qn;if(qn=Wn=null,ec(t),e)for(t=0;t<e.length;t++)ec(e[t])}}function _f(t,e){return t(e)}function wf(){}var bo=!1;function Ef(t,e,n){if(bo)return t(e,n);bo=!0;try{return _f(t,e,n)}finally{bo=!1,(Wn!==null||qn!==null)&&(wf(),yf())}}function qr(t,e){var n=t.stateNode;if(n===null)return null;var r=so(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(y(231,e,typeof n));return n}var Na=!1;if(wt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Na=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Na=!1}function eg(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var xr=!1,ms=null,gs=!1,Oa=null,tg={onError:function(t){xr=!0,ms=t}};function ng(t,e,n,r,i,s,o,a,l){xr=!1,ms=null,eg.apply(tg,arguments)}function rg(t,e,n,r,i,s,o,a,l){if(ng.apply(this,arguments),xr){if(xr){var u=ms;xr=!1,ms=null}else throw Error(y(198));gs||(gs=!0,Oa=u)}}function Rn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function If(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tc(t){if(Rn(t)!==t)throw Error(y(188))}function ig(t){var e=t.alternate;if(!e){if(e=Rn(t),e===null)throw Error(y(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tc(i),t;if(s===r)return tc(i),e;s=s.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?t:e}function Sf(t){return t=ig(t),t!==null?Tf(t):null}function Tf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tf(t);if(e!==null)return e;t=t.sibling}return null}var kf=Fe.unstable_scheduleCallback,nc=Fe.unstable_cancelCallback,sg=Fe.unstable_shouldYield,og=Fe.unstable_requestPaint,Z=Fe.unstable_now,ag=Fe.unstable_getCurrentPriorityLevel,Nl=Fe.unstable_ImmediatePriority,Pf=Fe.unstable_UserBlockingPriority,vs=Fe.unstable_NormalPriority,lg=Fe.unstable_LowPriority,Cf=Fe.unstable_IdlePriority,to=null,ot=null;function ug(t){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(to,t,void 0,(t.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:fg,cg=Math.log,dg=Math.LN2;function fg(t){return t>>>=0,t===0?32:31-(cg(t)/dg|0)|0}var Vi=64,Mi=4194304;function Ar(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ys(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ar(a):(s&=o,s!==0&&(r=Ar(s)))}else o=n&~i,o!==0?r=Ar(o):s!==0&&(r=Ar(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Je(e),i=1<<n,r|=t[n],e&=~i;return r}function hg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Je(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hg(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rf(){var t=Vi;return Vi<<=1,!(Vi&4194240)&&(Vi=64),t}function zo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Je(e),t[e]=n}function mg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Je(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ol(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Je(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function Af(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nf,xl,Of,xf,Df,Da=!1,Fi=[],zt=null,$t=null,jt=null,Kr=new Map,Gr=new Map,Dt=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rc(t,e){switch(t){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Kr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(e.pointerId)}}function Er(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wi(e),e!==null&&xl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vg(t,e,n,r,i){switch(e){case"focusin":return zt=Er(zt,t,e,n,r,i),!0;case"dragenter":return $t=Er($t,t,e,n,r,i),!0;case"mouseover":return jt=Er(jt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Kr.set(s,Er(Kr.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gr.set(s,Er(Gr.get(s)||null,t,e,n,r,i)),!0}return!1}function Lf(t){var e=cn(t.target);if(e!==null){var n=Rn(e);if(n!==null){if(e=n.tag,e===13){if(e=If(n),e!==null){t.blockedOn=e,Df(t.priority,function(){Of(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function es(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=La(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ra=r,n.target.dispatchEvent(r),Ra=null}else return e=wi(n),e!==null&&xl(e),t.blockedOn=n,!1;e.shift()}return!0}function ic(t,e,n){es(t)&&n.delete(e)}function yg(){Da=!1,zt!==null&&es(zt)&&(zt=null),$t!==null&&es($t)&&($t=null),jt!==null&&es(jt)&&(jt=null),Kr.forEach(ic),Gr.forEach(ic)}function Ir(t,e){t.blockedOn===e&&(t.blockedOn=null,Da||(Da=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,yg)))}function Qr(t){function e(i){return Ir(i,t)}if(0<Fi.length){Ir(Fi[0],t);for(var n=1;n<Fi.length;n++){var r=Fi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zt!==null&&Ir(zt,t),$t!==null&&Ir($t,t),jt!==null&&Ir(jt,t),Kr.forEach(e),Gr.forEach(e),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&Dt.shift()}var Kn=Pt.ReactCurrentBatchConfig,_s=!0;function _g(t,e,n,r){var i=z,s=Kn.transition;Kn.transition=null;try{z=1,Dl(t,e,n,r)}finally{z=i,Kn.transition=s}}function wg(t,e,n,r){var i=z,s=Kn.transition;Kn.transition=null;try{z=4,Dl(t,e,n,r)}finally{z=i,Kn.transition=s}}function Dl(t,e,n,r){if(_s){var i=La(t,e,n,r);if(i===null)Yo(t,e,r,ws,n),rc(t,r);else if(vg(i,t,e,n,r))r.stopPropagation();else if(rc(t,r),e&4&&-1<gg.indexOf(t)){for(;i!==null;){var s=wi(i);if(s!==null&&Nf(s),s=La(t,e,n,r),s===null&&Yo(t,e,r,ws,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yo(t,e,r,null,n)}}var ws=null;function La(t,e,n,r){if(ws=null,t=Al(r),t=cn(t),t!==null)if(e=Rn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=If(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ws=t,null}function Vf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ag()){case Nl:return 1;case Pf:return 4;case vs:case lg:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var Ut=null,Ll=null,ts=null;function Mf(){if(ts)return ts;var t,e=Ll,n=e.length,r,i="value"in Ut?Ut.value:Ut.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ts=i.slice(t,1<r?1-r:void 0)}function ns(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ui(){return!0}function sc(){return!1}function be(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ui:sc,this.isPropagationStopped=sc,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),e}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=be(hr),_i=Q({},hr,{view:0,detail:0}),Eg=be(_i),$o,jo,Sr,no=Q({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sr&&(Sr&&t.type==="mousemove"?($o=t.screenX-Sr.screenX,jo=t.screenY-Sr.screenY):jo=$o=0,Sr=t),$o)},movementY:function(t){return"movementY"in t?t.movementY:jo}}),oc=be(no),Ig=Q({},no,{dataTransfer:0}),Sg=be(Ig),Tg=Q({},_i,{relatedTarget:0}),Bo=be(Tg),kg=Q({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=be(kg),Cg=Q({},hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rg=be(Cg),Ag=Q({},hr,{data:0}),ac=be(Ag),Ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xg[t])?!!e[t]:!1}function Ml(){return Dg}var Lg=Q({},_i,{key:function(t){if(t.key){var e=Ng[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ns(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Og[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(t){return t.type==="keypress"?ns(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ns(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vg=be(Lg),Mg=Q({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=be(Mg),Fg=Q({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),Ug=be(Fg),bg=Q({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zg=be(bg),$g=Q({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jg=be($g),Bg=[9,13,27,32],Fl=wt&&"CompositionEvent"in window,Dr=null;wt&&"documentMode"in document&&(Dr=document.documentMode);var Hg=wt&&"TextEvent"in window&&!Dr,Ff=wt&&(!Fl||Dr&&8<Dr&&11>=Dr),uc=String.fromCharCode(32),cc=!1;function Uf(t,e){switch(t){case"keyup":return Bg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ln=!1;function Wg(t,e){switch(t){case"compositionend":return bf(e);case"keypress":return e.which!==32?null:(cc=!0,uc);case"textInput":return t=e.data,t===uc&&cc?null:t;default:return null}}function qg(t,e){if(Ln)return t==="compositionend"||!Fl&&Uf(t,e)?(t=Mf(),ts=Ll=Ut=null,Ln=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ff&&e.locale!=="ko"?null:e.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kg[t.type]:e==="textarea"}function zf(t,e,n,r){vf(r),e=Es(e,"onChange"),0<e.length&&(n=new Vl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Lr=null,Yr=null;function Gg(t){Xf(t,0)}function ro(t){var e=Fn(t);if(cf(e))return t}function Qg(t,e){if(t==="change")return e}var $f=!1;if(wt){var Ho;if(wt){var Wo="oninput"in document;if(!Wo){var fc=document.createElement("div");fc.setAttribute("oninput","return;"),Wo=typeof fc.oninput=="function"}Ho=Wo}else Ho=!1;$f=Ho&&(!document.documentMode||9<document.documentMode)}function hc(){Lr&&(Lr.detachEvent("onpropertychange",jf),Yr=Lr=null)}function jf(t){if(t.propertyName==="value"&&ro(Yr)){var e=[];zf(e,Yr,t,Al(t)),Ef(Gg,e)}}function Yg(t,e,n){t==="focusin"?(hc(),Lr=e,Yr=n,Lr.attachEvent("onpropertychange",jf)):t==="focusout"&&hc()}function Xg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(Yr)}function Jg(t,e){if(t==="click")return ro(e)}function Zg(t,e){if(t==="input"||t==="change")return ro(e)}function ev(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var et=typeof Object.is=="function"?Object.is:ev;function Xr(t,e){if(et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ga.call(e,i)||!et(t[i],e[i]))return!1}return!0}function pc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mc(t,e){var n=pc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pc(n)}}function Bf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hf(){for(var t=window,e=ps();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ps(t.document)}return e}function Ul(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tv(t){var e=Hf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bf(n.ownerDocument.documentElement,n)){if(r!==null&&Ul(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mc(n,s);var o=mc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nv=wt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Va=null,Vr=null,Ma=!1;function gc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Vn==null||Vn!==ps(r)||(r=Vn,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Xr(Vr,r)||(Vr=r,r=Es(Va,"onSelect"),0<r.length&&(e=new Vl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vn)))}function bi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mn={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},qo={},Wf={};wt&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function io(t){if(qo[t])return qo[t];if(!Mn[t])return t;var e=Mn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wf)return qo[t]=e[n];return t}var qf=io("animationend"),Kf=io("animationiteration"),Gf=io("animationstart"),Qf=io("transitionend"),Yf=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(t,e){Yf.set(t,e),Cn(e,[t])}for(var Ko=0;Ko<vc.length;Ko++){var Go=vc[Ko],rv=Go.toLowerCase(),iv=Go[0].toUpperCase()+Go.slice(1);tn(rv,"on"+iv)}tn(qf,"onAnimationEnd");tn(Kf,"onAnimationIteration");tn(Gf,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Qf,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function yc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rg(r,e,void 0,t),t.currentTarget=null}function Xf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;yc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;yc(i,a,u),s=l}}}if(gs)throw t=Oa,gs=!1,Oa=null,t}function H(t,e){var n=e[$a];n===void 0&&(n=e[$a]=new Set);var r=t+"__bubble";n.has(r)||(Jf(e,t,2,!1),n.add(r))}function Qo(t,e,n){var r=0;e&&(r|=4),Jf(n,t,r,e)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Jr(t){if(!t[zi]){t[zi]=!0,sf.forEach(function(n){n!=="selectionchange"&&(sv.has(n)||Qo(n,!1,t),Qo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zi]||(e[zi]=!0,Qo("selectionchange",!1,e))}}function Jf(t,e,n,r){switch(Vf(e)){case 1:var i=_g;break;case 4:i=wg;break;default:i=Dl}n=i.bind(null,e,n,t),i=void 0,!Na||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yo(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ef(function(){var u=s,d=Al(n),p=[];e:{var m=Yf.get(t);if(m!==void 0){var v=Vl,w=t;switch(t){case"keypress":if(ns(n)===0)break e;case"keydown":case"keyup":v=Vg;break;case"focusin":w="focus",v=Bo;break;case"focusout":w="blur",v=Bo;break;case"beforeblur":case"afterblur":v=Bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ug;break;case qf:case Kf:case Gf:v=Pg;break;case Qf:v=zg;break;case"scroll":v=Eg;break;case"wheel":v=jg;break;case"copy":case"cut":case"paste":v=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=lc}var I=(e&4)!==0,F=!I&&t==="scroll",f=I?m!==null?m+"Capture":null:m;I=[];for(var c=u,h;c!==null;){h=c;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,f!==null&&(g=qr(c,f),g!=null&&I.push(Zr(c,g,h)))),F)break;c=c.return}0<I.length&&(m=new v(m,w,null,n,d),p.push({event:m,listeners:I}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Ra&&(w=n.relatedTarget||n.fromElement)&&(cn(w)||w[Et]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?cn(w):null,w!==null&&(F=Rn(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(I=oc,g="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(I=lc,g="onPointerLeave",f="onPointerEnter",c="pointer"),F=v==null?m:Fn(v),h=w==null?m:Fn(w),m=new I(g,c+"leave",v,n,d),m.target=F,m.relatedTarget=h,g=null,cn(d)===u&&(I=new I(f,c+"enter",w,n,d),I.target=h,I.relatedTarget=F,g=I),F=g,v&&w)t:{for(I=v,f=w,c=0,h=I;h;h=Nn(h))c++;for(h=0,g=f;g;g=Nn(g))h++;for(;0<c-h;)I=Nn(I),c--;for(;0<h-c;)f=Nn(f),h--;for(;c--;){if(I===f||f!==null&&I===f.alternate)break t;I=Nn(I),f=Nn(f)}I=null}else I=null;v!==null&&_c(p,m,v,I,!1),w!==null&&F!==null&&_c(p,F,w,I,!0)}}e:{if(m=u?Fn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=Qg;else if(dc(m))if($f)E=Zg;else{E=Xg;var S=Yg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Jg);if(E&&(E=E(t,u))){zf(p,E,n,d);break e}S&&S(t,m,u),t==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Sa(m,"number",m.value)}switch(S=u?Fn(u):window,t){case"focusin":(dc(S)||S.contentEditable==="true")&&(Vn=S,Va=u,Vr=null);break;case"focusout":Vr=Va=Vn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,gc(p,n,d);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":gc(p,n,d)}var T;if(Fl)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ln?Uf(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Ff&&n.locale!=="ko"&&(Ln||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ln&&(T=Mf()):(Ut=d,Ll="value"in Ut?Ut.value:Ut.textContent,Ln=!0)),S=Es(u,k),0<S.length&&(k=new ac(k,t,null,n,d),p.push({event:k,listeners:S}),T?k.data=T:(T=bf(n),T!==null&&(k.data=T)))),(T=Hg?Wg(t,n):qg(t,n))&&(u=Es(u,"onBeforeInput"),0<u.length&&(d=new ac("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=T))}Xf(p,e)})}function Zr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Es(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qr(t,n),s!=null&&r.unshift(Zr(t,s,i)),s=qr(t,e),s!=null&&r.push(Zr(t,s,i))),t=t.return}return r}function Nn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _c(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=qr(n,s),l!=null&&o.unshift(Zr(n,l,a))):i||(l=qr(n,s),l!=null&&o.push(Zr(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ov=/\r\n?/g,av=/\u0000|\uFFFD/g;function wc(t){return(typeof t=="string"?t:""+t).replace(ov,`
`).replace(av,"")}function $i(t,e,n){if(e=wc(e),wc(t)!==e&&n)throw Error(y(425))}function Is(){}var Fa=null,Ua=null;function ba(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,lv=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,uv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec<"u"?function(t){return Ec.resolve(null).then(t).catch(cv)}:za;function cv(t){setTimeout(function(){throw t})}function Xo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qr(e)}function Bt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ic(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var pr=Math.random().toString(36).slice(2),it="__reactFiber$"+pr,ei="__reactProps$"+pr,Et="__reactContainer$"+pr,$a="__reactEvents$"+pr,dv="__reactListeners$"+pr,fv="__reactHandles$"+pr;function cn(t){var e=t[it];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Et]||n[it]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ic(t);t!==null;){if(n=t[it])return n;t=Ic(t)}return e}t=n,n=t.parentNode}return null}function wi(t){return t=t[it]||t[Et],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(y(33))}function so(t){return t[ei]||null}var ja=[],Un=-1;function nn(t){return{current:t}}function W(t){0>Un||(t.current=ja[Un],ja[Un]=null,Un--)}function j(t,e){Un++,ja[Un]=t.current,t.current=e}var Jt={},ye=nn(Jt),Re=nn(!1),vn=Jt;function er(t,e){var n=t.type.contextTypes;if(!n)return Jt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(t){return t=t.childContextTypes,t!=null}function Ss(){W(Re),W(ye)}function Sc(t,e,n){if(ye.current!==Jt)throw Error(y(168));j(ye,e),j(Re,n)}function Zf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(y(108,Ym(t)||"Unknown",i));return Q({},n,r)}function Ts(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jt,vn=ye.current,j(ye,t),j(Re,Re.current),!0}function Tc(t,e,n){var r=t.stateNode;if(!r)throw Error(y(169));n?(t=Zf(t,e,vn),r.__reactInternalMemoizedMergedChildContext=t,W(Re),W(ye),j(ye,t)):W(Re),j(Re,n)}var ft=null,oo=!1,Jo=!1;function eh(t){ft===null?ft=[t]:ft.push(t)}function hv(t){oo=!0,eh(t)}function rn(){if(!Jo&&ft!==null){Jo=!0;var t=0,e=z;try{var n=ft;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ft=null,oo=!1}catch(i){throw ft!==null&&(ft=ft.slice(t+1)),kf(Nl,rn),i}finally{z=e,Jo=!1}}return null}var bn=[],zn=0,ks=null,Ps=0,ze=[],$e=0,yn=null,pt=1,mt="";function an(t,e){bn[zn++]=Ps,bn[zn++]=ks,ks=t,Ps=e}function th(t,e,n){ze[$e++]=pt,ze[$e++]=mt,ze[$e++]=yn,yn=t;var r=pt;t=mt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var s=32-Je(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pt=1<<32-Je(e)+i|n<<i|r,mt=s+t}else pt=1<<s|n<<i|r,mt=t}function bl(t){t.return!==null&&(an(t,1),th(t,1,0))}function zl(t){for(;t===ks;)ks=bn[--zn],bn[zn]=null,Ps=bn[--zn],bn[zn]=null;for(;t===yn;)yn=ze[--$e],ze[$e]=null,mt=ze[--$e],ze[$e]=null,pt=ze[--$e],ze[$e]=null}var Le=null,De=null,q=!1,Xe=null;function nh(t,e){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Le=t,De=Bt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Le=t,De=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yn!==null?{id:pt,overflow:mt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Le=t,De=null,!0):!1;default:return!1}}function Ba(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ha(t){if(q){var e=De;if(e){var n=e;if(!kc(t,e)){if(Ba(t))throw Error(y(418));e=Bt(n.nextSibling);var r=Le;e&&kc(t,e)?nh(r,n):(t.flags=t.flags&-4097|2,q=!1,Le=t)}}else{if(Ba(t))throw Error(y(418));t.flags=t.flags&-4097|2,q=!1,Le=t}}}function Pc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Le=t}function ji(t){if(t!==Le)return!1;if(!q)return Pc(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ba(t.type,t.memoizedProps)),e&&(e=De)){if(Ba(t))throw rh(),Error(y(418));for(;e;)nh(t,e),e=Bt(e.nextSibling)}if(Pc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){De=Bt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}De=null}}else De=Le?Bt(t.stateNode.nextSibling):null;return!0}function rh(){for(var t=De;t;)t=Bt(t.nextSibling)}function tr(){De=Le=null,q=!1}function $l(t){Xe===null?Xe=[t]:Xe.push(t)}var pv=Pt.ReactCurrentBatchConfig;function Qe(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cs=nn(null),Rs=null,$n=null,jl=null;function Bl(){jl=$n=Rs=null}function Hl(t){var e=Cs.current;W(Cs),t._currentValue=e}function Wa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gn(t,e){Rs=t,jl=$n=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ce=!0),t.firstContext=null)}function He(t){var e=t._currentValue;if(jl!==t)if(t={context:t,memoizedValue:e,next:null},$n===null){if(Rs===null)throw Error(y(308));$n=t,Rs.dependencies={lanes:0,firstContext:t}}else $n=$n.next=t;return e}var dn=null;function Wl(t){dn===null?dn=[t]:dn.push(t)}function ih(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wl(e)):(n.next=i.next,i.next=n),e.interleaved=n,It(t,r)}function It(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ot=!1;function ql(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ht(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,It(t,n)}return i=r.interleaved,i===null?(e.next=e,Wl(r)):(e.next=i.next,i.next=e),r.interleaved=e,It(t,n)}function rs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ol(t,n)}}function Cc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function As(t,e,n,r){var i=t.updateQueue;Ot=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,d=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,I=a;switch(m=e,v=n,I.tag){case 1:if(w=I.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=I.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=Q({},p,m);break e;case 2:Ot=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=p):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wn|=o,t.lanes=o,t.memoizedState=p}}function Rc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var oh=new rf.Component().refs;function qa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ao={isMounted:function(t){return(t=t._reactInternals)?Rn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ee(),i=qt(t),s=yt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ht(t,s,i),e!==null&&(Ze(e,t,i,r),rs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ee(),i=qt(t),s=yt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ht(t,s,i),e!==null&&(Ze(e,t,i,r),rs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ee(),r=qt(t),i=yt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ht(t,i,r),e!==null&&(Ze(e,t,r,n),rs(e,t,r))}};function Ac(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xr(n,r)||!Xr(i,s):!0}function ah(t,e,n){var r=!1,i=Jt,s=e.contextType;return typeof s=="object"&&s!==null?s=He(s):(i=Ae(e)?vn:ye.current,r=e.contextTypes,s=(r=r!=null)?er(t,i):Jt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ao,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ao.enqueueReplaceState(e,e.state,null)}function Ka(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=oh,ql(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=He(s):(s=Ae(e)?vn:ye.current,i.context=er(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ao.enqueueReplaceState(i,i.state,null),As(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Tr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===oh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,t))}return t}function Bi(t,e){throw t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oc(t){var e=t._init;return e(t._payload)}function lh(t){function e(f,c){if(t){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Kt(f,c),f.index=0,f.sibling=null,f}function s(f,c,h){return f.index=h,t?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,g){return c===null||c.tag!==6?(c=sa(h,f.mode,g),c.return=f,c):(c=i(c,h),c.return=f,c)}function l(f,c,h,g){var E=h.type;return E===Dn?d(f,c,h.props.children,g,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Nt&&Oc(E)===c.type)?(g=i(c,h.props),g.ref=Tr(f,c,h),g.return=f,g):(g=us(h.type,h.key,h.props,null,f.mode,g),g.ref=Tr(f,c,h),g.return=f,g)}function u(f,c,h,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=oa(h,f.mode,g),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function d(f,c,h,g,E){return c===null||c.tag!==7?(c=mn(h,f.mode,g,E),c.return=f,c):(c=i(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sa(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case xi:return h=us(c.type,c.key,c.props,null,f.mode,h),h.ref=Tr(f,null,c),h.return=f,h;case xn:return c=oa(c,f.mode,h),c.return=f,c;case Nt:var g=c._init;return p(f,g(c._payload),h)}if(Rr(c)||_r(c))return c=mn(c,f.mode,h,null),c.return=f,c;Bi(f,c)}return null}function m(f,c,h,g){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(f,c,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xi:return h.key===E?l(f,c,h,g):null;case xn:return h.key===E?u(f,c,h,g):null;case Nt:return E=h._init,m(f,c,E(h._payload),g)}if(Rr(h)||_r(h))return E!==null?null:d(f,c,h,g,null);Bi(f,h)}return null}function v(f,c,h,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(h)||null,a(c,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xi:return f=f.get(g.key===null?h:g.key)||null,l(c,f,g,E);case xn:return f=f.get(g.key===null?h:g.key)||null,u(c,f,g,E);case Nt:var S=g._init;return v(f,c,h,S(g._payload),E)}if(Rr(g)||_r(g))return f=f.get(h)||null,d(c,f,g,E,null);Bi(c,g)}return null}function w(f,c,h,g){for(var E=null,S=null,T=c,k=c=0,B=null;T!==null&&k<h.length;k++){T.index>k?(B=T,T=null):B=T.sibling;var L=m(f,T,h[k],g);if(L===null){T===null&&(T=B);break}t&&T&&L.alternate===null&&e(f,T),c=s(L,c,k),S===null?E=L:S.sibling=L,S=L,T=B}if(k===h.length)return n(f,T),q&&an(f,k),E;if(T===null){for(;k<h.length;k++)T=p(f,h[k],g),T!==null&&(c=s(T,c,k),S===null?E=T:S.sibling=T,S=T);return q&&an(f,k),E}for(T=r(f,T);k<h.length;k++)B=v(T,f,k,h[k],g),B!==null&&(t&&B.alternate!==null&&T.delete(B.key===null?k:B.key),c=s(B,c,k),S===null?E=B:S.sibling=B,S=B);return t&&T.forEach(function(Ke){return e(f,Ke)}),q&&an(f,k),E}function I(f,c,h,g){var E=_r(h);if(typeof E!="function")throw Error(y(150));if(h=E.call(h),h==null)throw Error(y(151));for(var S=E=null,T=c,k=c=0,B=null,L=h.next();T!==null&&!L.done;k++,L=h.next()){T.index>k?(B=T,T=null):B=T.sibling;var Ke=m(f,T,L.value,g);if(Ke===null){T===null&&(T=B);break}t&&T&&Ke.alternate===null&&e(f,T),c=s(Ke,c,k),S===null?E=Ke:S.sibling=Ke,S=Ke,T=B}if(L.done)return n(f,T),q&&an(f,k),E;if(T===null){for(;!L.done;k++,L=h.next())L=p(f,L.value,g),L!==null&&(c=s(L,c,k),S===null?E=L:S.sibling=L,S=L);return q&&an(f,k),E}for(T=r(f,T);!L.done;k++,L=h.next())L=v(T,f,k,L.value,g),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?k:L.key),c=s(L,c,k),S===null?E=L:S.sibling=L,S=L);return t&&T.forEach(function(vr){return e(f,vr)}),q&&an(f,k),E}function F(f,c,h,g){if(typeof h=="object"&&h!==null&&h.type===Dn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case xi:e:{for(var E=h.key,S=c;S!==null;){if(S.key===E){if(E=h.type,E===Dn){if(S.tag===7){n(f,S.sibling),c=i(S,h.props.children),c.return=f,f=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Nt&&Oc(E)===S.type){n(f,S.sibling),c=i(S,h.props),c.ref=Tr(f,S,h),c.return=f,f=c;break e}n(f,S);break}else e(f,S);S=S.sibling}h.type===Dn?(c=mn(h.props.children,f.mode,g,h.key),c.return=f,f=c):(g=us(h.type,h.key,h.props,null,f.mode,g),g.ref=Tr(f,c,h),g.return=f,f=g)}return o(f);case xn:e:{for(S=h.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=oa(h,f.mode,g),c.return=f,f=c}return o(f);case Nt:return S=h._init,F(f,c,S(h._payload),g)}if(Rr(h))return w(f,c,h,g);if(_r(h))return I(f,c,h,g);Bi(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=sa(h,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return F}var nr=lh(!0),uh=lh(!1),Ei={},at=nn(Ei),ti=nn(Ei),ni=nn(Ei);function fn(t){if(t===Ei)throw Error(y(174));return t}function Kl(t,e){switch(j(ni,e),j(ti,t),j(at,Ei),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ka(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ka(e,t)}W(at),j(at,e)}function rr(){W(at),W(ti),W(ni)}function ch(t){fn(ni.current);var e=fn(at.current),n=ka(e,t.type);e!==n&&(j(ti,t),j(at,n))}function Gl(t){ti.current===t&&(W(at),W(ti))}var K=nn(0);function Ns(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zo=[];function Ql(){for(var t=0;t<Zo.length;t++)Zo[t]._workInProgressVersionPrimary=null;Zo.length=0}var is=Pt.ReactCurrentDispatcher,ea=Pt.ReactCurrentBatchConfig,_n=0,G=null,te=null,ae=null,Os=!1,Mr=!1,ri=0,mv=0;function pe(){throw Error(y(321))}function Yl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!et(t[n],e[n]))return!1;return!0}function Xl(t,e,n,r,i,s){if(_n=s,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,is.current=t===null||t.memoizedState===null?_v:wv,t=n(r,i),Mr){s=0;do{if(Mr=!1,ri=0,25<=s)throw Error(y(301));s+=1,ae=te=null,e.updateQueue=null,is.current=Ev,t=n(r,i)}while(Mr)}if(is.current=xs,e=te!==null&&te.next!==null,_n=0,ae=te=G=null,Os=!1,e)throw Error(y(300));return t}function Jl(){var t=ri!==0;return ri=0,t}function rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?G.memoizedState=ae=t:ae=ae.next=t,ae}function We(){if(te===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=te.next;var e=ae===null?G.memoizedState:ae.next;if(e!==null)ae=e,te=t;else{if(t===null)throw Error(y(310));te=t,t={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ae===null?G.memoizedState=ae=t:ae=ae.next=t}return ae}function ii(t,e){return typeof e=="function"?e(t):e}function ta(t){var e=We(),n=e.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((_n&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,G.lanes|=d,wn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,et(r,e.memoizedState)||(Ce=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,G.lanes|=s,wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function na(t){var e=We(),n=e.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);et(s,e.memoizedState)||(Ce=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dh(){}function fh(t,e){var n=G,r=We(),i=e(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Ce=!0),r=r.queue,Zl(mh.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,si(9,ph.bind(null,n,r,i,e),void 0,null),le===null)throw Error(y(349));_n&30||hh(n,e,i)}return i}function hh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ph(t,e,n,r){e.value=n,e.getSnapshot=r,gh(e)&&vh(t)}function mh(t,e,n){return n(function(){gh(e)&&vh(t)})}function gh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!et(t,n)}catch{return!0}}function vh(t){var e=It(t,1);e!==null&&Ze(e,t,1,-1)}function xc(t){var e=rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:t},e.queue=t,t=t.dispatch=yv.bind(null,G,t),[e.memoizedState,t]}function si(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yh(){return We().memoizedState}function ss(t,e,n,r){var i=rt();G.flags|=t,i.memoizedState=si(1|e,n,void 0,r===void 0?null:r)}function lo(t,e,n,r){var i=We();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&Yl(r,o.deps)){i.memoizedState=si(e,n,s,r);return}}G.flags|=t,i.memoizedState=si(1|e,n,s,r)}function Dc(t,e){return ss(8390656,8,t,e)}function Zl(t,e){return lo(2048,8,t,e)}function _h(t,e){return lo(4,2,t,e)}function wh(t,e){return lo(4,4,t,e)}function Eh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ih(t,e,n){return n=n!=null?n.concat([t]):null,lo(4,4,Eh.bind(null,e,t),n)}function eu(){}function Sh(t,e){var n=We();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Th(t,e){var n=We();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kh(t,e,n){return _n&21?(et(n,e)||(n=Rf(),G.lanes|=n,wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ce=!0),t.memoizedState=n)}function gv(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=ea.transition;ea.transition={};try{t(!1),e()}finally{z=n,ea.transition=r}}function Ph(){return We().memoizedState}function vv(t,e,n){var r=qt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ch(t))Rh(e,n);else if(n=ih(t,e,n,r),n!==null){var i=Ee();Ze(n,t,r,i),Ah(n,e,r)}}function yv(t,e,n){var r=qt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ch(t))Rh(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,o)){var l=e.interleaved;l===null?(i.next=i,Wl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ih(t,e,i,r),n!==null&&(i=Ee(),Ze(n,t,r,i),Ah(n,e,r))}}function Ch(t){var e=t.alternate;return t===G||e!==null&&e===G}function Rh(t,e){Mr=Os=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ah(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ol(t,n)}}var xs={readContext:He,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},_v={readContext:He,useCallback:function(t,e){return rt().memoizedState=[t,e===void 0?null:e],t},useContext:He,useEffect:Dc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ss(4194308,4,Eh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ss(4194308,4,t,e)},useInsertionEffect:function(t,e){return ss(4,2,t,e)},useMemo:function(t,e){var n=rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vv.bind(null,G,t),[r.memoizedState,t]},useRef:function(t){var e=rt();return t={current:t},e.memoizedState=t},useState:xc,useDebugValue:eu,useDeferredValue:function(t){return rt().memoizedState=t},useTransition:function(){var t=xc(!1),e=t[0];return t=gv.bind(null,t[1]),rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=G,i=rt();if(q){if(n===void 0)throw Error(y(407));n=n()}else{if(n=e(),le===null)throw Error(y(349));_n&30||hh(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dc(mh.bind(null,r,s,t),[t]),r.flags|=2048,si(9,ph.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rt(),e=le.identifierPrefix;if(q){var n=mt,r=pt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ri++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wv={readContext:He,useCallback:Sh,useContext:He,useEffect:Zl,useImperativeHandle:Ih,useInsertionEffect:_h,useLayoutEffect:wh,useMemo:Th,useReducer:ta,useRef:yh,useState:function(){return ta(ii)},useDebugValue:eu,useDeferredValue:function(t){var e=We();return kh(e,te.memoizedState,t)},useTransition:function(){var t=ta(ii)[0],e=We().memoizedState;return[t,e]},useMutableSource:dh,useSyncExternalStore:fh,useId:Ph,unstable_isNewReconciler:!1},Ev={readContext:He,useCallback:Sh,useContext:He,useEffect:Zl,useImperativeHandle:Ih,useInsertionEffect:_h,useLayoutEffect:wh,useMemo:Th,useReducer:na,useRef:yh,useState:function(){return na(ii)},useDebugValue:eu,useDeferredValue:function(t){var e=We();return te===null?e.memoizedState=t:kh(e,te.memoizedState,t)},useTransition:function(){var t=na(ii)[0],e=We().memoizedState;return[t,e]},useMutableSource:dh,useSyncExternalStore:fh,useId:Ph,unstable_isNewReconciler:!1};function ir(t,e){try{var n="",r=e;do n+=Qm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ra(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ga(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Iv=typeof WeakMap=="function"?WeakMap:Map;function Nh(t,e,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ls||(Ls=!0,il=r),Ga(t,e)},n}function Oh(t,e,n){n=yt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ga(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ga(t,e),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Iv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Mv.bind(null,t,e,n),e.then(t,t))}function Vc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yt(-1,1),e.tag=2,Ht(n,e,1))),n.lanes|=1),t)}var Sv=Pt.ReactCurrentOwner,Ce=!1;function we(t,e,n,r){e.child=t===null?uh(e,null,n,r):nr(e,t.child,n,r)}function Fc(t,e,n,r,i){n=n.render;var s=e.ref;return Gn(e,i),r=Xl(t,e,n,r,s,i),n=Jl(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,St(t,e,i)):(q&&n&&bl(e),e.flags|=1,we(t,e,r,i),e.child)}function Uc(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!lu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xh(t,e,s,r,i)):(t=us(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(o,r)&&t.ref===e.ref)return St(t,e,i)}return e.flags|=1,t=Kt(s,r),t.ref=e.ref,t.return=e,e.child=t}function xh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xr(s,r)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ce=!0);else return e.lanes=t.lanes,St(t,e,i)}return Qa(t,e,n,r,i)}function Dh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Bn,xe),xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,j(Bn,xe),xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,j(Bn,xe),xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,j(Bn,xe),xe|=r;return we(t,e,i,n),e.child}function Lh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qa(t,e,n,r,i){var s=Ae(n)?vn:ye.current;return s=er(e,s),Gn(e,i),n=Xl(t,e,n,r,s,i),r=Jl(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,St(t,e,i)):(q&&r&&bl(e),e.flags|=1,we(t,e,n,i),e.child)}function bc(t,e,n,r,i){if(Ae(n)){var s=!0;Ts(e)}else s=!1;if(Gn(e,i),e.stateNode===null)os(t,e),ah(e,n,r),Ka(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Ae(n)?vn:ye.current,u=er(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Nc(e,o,r,u),Ot=!1;var m=e.memoizedState;o.state=m,As(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Re.current||Ot?(typeof d=="function"&&(qa(e,n,d,r),l=e.memoizedState),(a=Ot||Ac(e,n,a,r,m,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qe(e.type,a),o.props=u,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Ae(n)?vn:ye.current,l=er(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Nc(e,o,r,l),Ot=!1,m=e.memoizedState,o.state=m,As(e,r,o,i);var w=e.memoizedState;a!==p||m!==w||Re.current||Ot?(typeof v=="function"&&(qa(e,n,v,r),w=e.memoizedState),(u=Ot||Ac(e,n,u,r,m,w,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ya(t,e,n,r,s,i)}function Ya(t,e,n,r,i,s){Lh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tc(e,n,!1),St(t,e,s);r=e.stateNode,Sv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=nr(e,t.child,null,s),e.child=nr(e,null,a,s)):we(t,e,a,s),e.memoizedState=r.state,i&&Tc(e,n,!0),e.child}function Vh(t){var e=t.stateNode;e.pendingContext?Sc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sc(t,e.context,!1),Kl(t,e.containerInfo)}function zc(t,e,n,r,i){return tr(),$l(i),e.flags|=256,we(t,e,n,r),e.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function Ja(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mh(t,e,n){var r=e.pendingProps,i=K.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),j(K,i&1),t===null)return Ha(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fo(o,r,0,null),t=mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ja(n),e.memoizedState=Xa,t):tu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Tv(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Kt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kt(a,s):(s=mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ja(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xa,r}return s=t.child,t=s.sibling,r=Kt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tu(t,e){return e=fo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hi(t,e,n,r){return r!==null&&$l(r),nr(e,t.child,null,n),t=tu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tv(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ra(Error(y(422))),Hi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fo({mode:"visible",children:r.children},i,0,null),s=mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&nr(e,t.child,null,o),e.child.memoizedState=Ja(o),e.memoizedState=Xa,s);if(!(e.mode&1))return Hi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(y(419)),r=ra(s,r,void 0),Hi(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ce||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,It(t,i),Ze(r,t,i,-1))}return au(),r=ra(Error(y(421))),Hi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Fv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,De=Bt(i.nextSibling),Le=e,q=!0,Xe=null,t!==null&&(ze[$e++]=pt,ze[$e++]=mt,ze[$e++]=yn,pt=t.id,mt=t.overflow,yn=e),e=tu(e,r.children),e.flags|=4096,e)}function $c(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wa(t.return,e,n)}function ia(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(we(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$c(t,n,e);else if(t.tag===19)$c(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(j(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ns(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ia(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ns(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ia(e,!0,n,null,s);break;case"together":ia(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function os(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function St(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,n=Kt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kv(t,e,n){switch(e.tag){case 3:Vh(e),tr();break;case 5:ch(e);break;case 1:Ae(e.type)&&Ts(e);break;case 4:Kl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;j(Cs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(j(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?Mh(t,e,n):(j(K,K.current&1),t=St(t,e,n),t!==null?t.sibling:null);j(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,Dh(t,e,n)}return St(t,e,n)}var Uh,Za,bh,zh;Uh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Za=function(){};bh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fn(at.current);var s=null;switch(n){case"input":i=Ea(t,i),r=Ea(t,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Ta(t,i),r=Ta(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Is)}Pa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};zh=function(t,e,n,r){n!==r&&(e.flags|=4)};function kr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Pv(t,e,n){var r=e.pendingProps;switch(zl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(e),null;case 1:return Ae(e.type)&&Ss(),me(e),null;case 3:return r=e.stateNode,rr(),W(Re),W(ye),Ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ji(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xe!==null&&(al(Xe),Xe=null))),Za(t,e),me(e),null;case 5:Gl(e);var i=fn(ni.current);if(n=e.type,t!==null&&e.stateNode!=null)bh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(y(166));return me(e),null}if(t=fn(at.current),ji(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[it]=e,r[ei]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Nr.length;i++)H(Nr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Yu(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Ju(r,s),H("invalid",r)}Pa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$i(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$i(r.textContent,a,t),i=["children",""+a]):Hr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Di(r),Xu(r,s,!0);break;case"textarea":Di(r),Zu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Is)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[it]=e,t[ei]=r,Uh(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ca(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<Nr.length;i++)H(Nr[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":Yu(t,r),i=Ea(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",t);break;case"textarea":Ju(t,r),i=Ta(t,r),H("invalid",t);break;default:i=r}Pa(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wr(t,l):typeof l=="number"&&Wr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",t):l!=null&&kl(t,s,l,o))}switch(n){case"input":Di(t),Xu(t,r,!1);break;case"textarea":Di(t),Zu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return me(e),null;case 6:if(t&&e.stateNode!=null)zh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(y(166));if(n=fn(ni.current),fn(at.current),ji(e)){if(r=e.stateNode,n=e.memoizedProps,r[it]=e,(s=r.nodeValue!==n)&&(t=Le,t!==null))switch(t.tag){case 3:$i(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$i(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=e,e.stateNode=r}return me(e),null;case 13:if(W(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&De!==null&&e.mode&1&&!(e.flags&128))rh(),tr(),e.flags|=98560,s=!1;else if(s=ji(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(y(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(y(317));s[it]=e}else tr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;me(e),s=!1}else Xe!==null&&(al(Xe),Xe=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?ie===0&&(ie=3):au())),e.updateQueue!==null&&(e.flags|=4),me(e),null);case 4:return rr(),Za(t,e),t===null&&Jr(e.stateNode.containerInfo),me(e),null;case 10:return Hl(e.type._context),me(e),null;case 17:return Ae(e.type)&&Ss(),me(e),null;case 19:if(W(K),s=e.memoizedState,s===null)return me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)kr(s,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ns(t),o!==null){for(e.flags|=128,kr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return j(K,K.current&1|2),e.child}t=t.sibling}s.tail!==null&&Z()>sr&&(e.flags|=128,r=!0,kr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ns(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return me(e),null}else 2*Z()-s.renderingStartTime>sr&&n!==1073741824&&(e.flags|=128,r=!0,kr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Z(),e.sibling=null,n=K.current,j(K,r?n&1|2:n&1),e):(me(e),null);case 22:case 23:return ou(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xe&1073741824&&(me(e),e.subtreeFlags&6&&(e.flags|=8192)):me(e),null;case 24:return null;case 25:return null}throw Error(y(156,e.tag))}function Cv(t,e){switch(zl(e),e.tag){case 1:return Ae(e.type)&&Ss(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rr(),W(Re),W(ye),Ql(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gl(e),null;case 13:if(W(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));tr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(K),null;case 4:return rr(),null;case 10:return Hl(e.type._context),null;case 22:case 23:return ou(),null;case 24:return null;default:return null}}var Wi=!1,ve=!1,Rv=typeof WeakSet=="function"?WeakSet:Set,P=null;function jn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function el(t,e,n){try{n()}catch(r){Y(t,e,r)}}var jc=!1;function Av(t,e){if(Fa=_s,t=Hf(),Ul(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++u===i&&(a=o),m===s&&++d===r&&(l=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ua={focusedElem:t,selectionRange:n},_s=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var I=w.memoizedProps,F=w.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?I:Qe(e.type,I),F);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){Y(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return w=jc,jc=!1,w}function Fr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&el(e,n,s)}i=i.next}while(i!==r)}}function uo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function tl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $h(t){var e=t.alternate;e!==null&&(t.alternate=null,$h(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[it],delete e[ei],delete e[$a],delete e[dv],delete e[fv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Bc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Is));else if(r!==4&&(t=t.child,t!==null))for(nl(t,e,n),t=t.sibling;t!==null;)nl(t,e,n),t=t.sibling}function rl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rl(t,e,n),t=t.sibling;t!==null;)rl(t,e,n),t=t.sibling}var ue=null,Ye=!1;function Rt(t,e,n){for(n=n.child;n!==null;)Bh(t,e,n),n=n.sibling}function Bh(t,e,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:ve||jn(n,e);case 6:var r=ue,i=Ye;ue=null,Rt(t,e,n),ue=r,Ye=i,ue!==null&&(Ye?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(t=ue,n=n.stateNode,t.nodeType===8?Xo(t.parentNode,n):t.nodeType===1&&Xo(t,n),Qr(t)):Xo(ue,n.stateNode));break;case 4:r=ue,i=Ye,ue=n.stateNode.containerInfo,Ye=!0,Rt(t,e,n),ue=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&el(n,e,o),i=i.next}while(i!==r)}Rt(t,e,n);break;case 1:if(!ve&&(jn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}Rt(t,e,n);break;case 21:Rt(t,e,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Rt(t,e,n),ve=r):Rt(t,e,n);break;default:Rt(t,e,n)}}function Hc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Rv),e.forEach(function(r){var i=Uv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ye=!1;break e;case 3:ue=a.stateNode.containerInfo,Ye=!0;break e;case 4:ue=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ue===null)throw Error(y(160));Bh(s,o,i),ue=null,Ye=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hh(e,t),e=e.sibling}function Hh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ge(e,t),nt(t),r&4){try{Fr(3,t,t.return),uo(3,t)}catch(I){Y(t,t.return,I)}try{Fr(5,t,t.return)}catch(I){Y(t,t.return,I)}}break;case 1:Ge(e,t),nt(t),r&512&&n!==null&&jn(n,n.return);break;case 5:if(Ge(e,t),nt(t),r&512&&n!==null&&jn(n,n.return),t.flags&32){var i=t.stateNode;try{Wr(i,"")}catch(I){Y(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&df(i,s),Ca(a,o);var u=Ca(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?gf(i,p):d==="dangerouslySetInnerHTML"?pf(i,p):d==="children"?Wr(i,p):kl(i,d,p,u)}switch(a){case"input":Ia(i,s);break;case"textarea":ff(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Hn(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Hn(i,!!s.multiple,s.defaultValue,!0):Hn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ei]=s}catch(I){Y(t,t.return,I)}}break;case 6:if(Ge(e,t),nt(t),r&4){if(t.stateNode===null)throw Error(y(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(I){Y(t,t.return,I)}}break;case 3:if(Ge(e,t),nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(e.containerInfo)}catch(I){Y(t,t.return,I)}break;case 4:Ge(e,t),nt(t);break;case 13:Ge(e,t),nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(iu=Z())),r&4&&Hc(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ve=(u=ve)||d,Ge(e,t),ve=u):Ge(e,t),nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(p=P=d;P!==null;){switch(m=P,v=m.child,m.tag){case 0:case 11:case 14:case 15:Fr(4,m,m.return);break;case 1:jn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(I){Y(r,n,I)}}break;case 5:jn(m,m.return);break;case 22:if(m.memoizedState!==null){qc(p);continue}}v!==null?(v.return=m,P=v):qc(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mf("display",o))}catch(I){Y(t,t.return,I)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(I){Y(t,t.return,I)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(e,t),nt(t),r&4&&Hc(t);break;case 21:break;default:Ge(e,t),nt(t)}}function nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jh(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wr(i,""),r.flags&=-33);var s=Bc(t);rl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bc(t);nl(t,a,o);break;default:throw Error(y(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nv(t,e,n){P=t,Wh(t)}function Wh(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ve;a=Wi;var u=ve;if(Wi=o,(ve=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Kc(i):l!==null?(l.return=o,P=l):Kc(i);for(;s!==null;)P=s,Wh(s),s=s.sibling;P=i,Wi=a,ve=u}Wc(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Wc(t)}}function Wc(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ve||uo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Qr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ve||e.flags&512&&tl(e)}catch(m){Y(e,e.return,m)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function qc(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Kc(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uo(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var s=e.return;try{tl(e)}catch(l){Y(e,s,l)}break;case 5:var o=e.return;try{tl(e)}catch(l){Y(e,o,l)}}}catch(l){Y(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var Ov=Math.ceil,Ds=Pt.ReactCurrentDispatcher,nu=Pt.ReactCurrentOwner,Be=Pt.ReactCurrentBatchConfig,U=0,le=null,ee=null,fe=0,xe=0,Bn=nn(0),ie=0,oi=null,wn=0,co=0,ru=0,Ur=null,ke=null,iu=0,sr=1/0,dt=null,Ls=!1,il=null,Wt=null,qi=!1,bt=null,Vs=0,br=0,sl=null,as=-1,ls=0;function Ee(){return U&6?Z():as!==-1?as:as=Z()}function qt(t){return t.mode&1?U&2&&fe!==0?fe&-fe:pv.transition!==null?(ls===0&&(ls=Rf()),ls):(t=z,t!==0||(t=window.event,t=t===void 0?16:Vf(t.type)),t):1}function Ze(t,e,n,r){if(50<br)throw br=0,sl=null,Error(y(185));yi(t,n,r),(!(U&2)||t!==le)&&(t===le&&(!(U&2)&&(co|=n),ie===4&&Lt(t,fe)),Ne(t,r),n===1&&U===0&&!(e.mode&1)&&(sr=Z()+500,oo&&rn()))}function Ne(t,e){var n=t.callbackNode;pg(t,e);var r=ys(t,t===le?fe:0);if(r===0)n!==null&&nc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nc(n),e===1)t.tag===0?hv(Gc.bind(null,t)):eh(Gc.bind(null,t)),uv(function(){!(U&6)&&rn()}),n=null;else{switch(Af(r)){case 1:n=Nl;break;case 4:n=Pf;break;case 16:n=vs;break;case 536870912:n=Cf;break;default:n=vs}n=Zh(n,qh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qh(t,e){if(as=-1,ls=0,U&6)throw Error(y(327));var n=t.callbackNode;if(Qn()&&t.callbackNode!==n)return null;var r=ys(t,t===le?fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ms(t,r);else{e=r;var i=U;U|=2;var s=Gh();(le!==t||fe!==e)&&(dt=null,sr=Z()+500,pn(t,e));do try{Lv();break}catch(a){Kh(t,a)}while(1);Bl(),Ds.current=s,U=i,ee!==null?e=0:(le=null,fe=0,e=ie)}if(e!==0){if(e===2&&(i=xa(t),i!==0&&(r=i,e=ol(t,i))),e===1)throw n=oi,pn(t,0),Lt(t,r),Ne(t,Z()),n;if(e===6)Lt(t,r);else{if(i=t.current.alternate,!(r&30)&&!xv(i)&&(e=Ms(t,r),e===2&&(s=xa(t),s!==0&&(r=s,e=ol(t,s))),e===1))throw n=oi,pn(t,0),Lt(t,r),Ne(t,Z()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(y(345));case 2:ln(t,ke,dt);break;case 3:if(Lt(t,r),(r&130023424)===r&&(e=iu+500-Z(),10<e)){if(ys(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ee(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=za(ln.bind(null,t,ke,dt),e);break}ln(t,ke,dt);break;case 4:if(Lt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Je(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ov(r/1960))-r,10<r){t.timeoutHandle=za(ln.bind(null,t,ke,dt),r);break}ln(t,ke,dt);break;case 5:ln(t,ke,dt);break;default:throw Error(y(329))}}}return Ne(t,Z()),t.callbackNode===n?qh.bind(null,t):null}function ol(t,e){var n=Ur;return t.current.memoizedState.isDehydrated&&(pn(t,e).flags|=256),t=Ms(t,e),t!==2&&(e=ke,ke=n,e!==null&&al(e)),t}function al(t){ke===null?ke=t:ke.push.apply(ke,t)}function xv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lt(t,e){for(e&=~ru,e&=~co,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Je(e),r=1<<n;t[n]=-1,e&=~r}}function Gc(t){if(U&6)throw Error(y(327));Qn();var e=ys(t,0);if(!(e&1))return Ne(t,Z()),null;var n=Ms(t,e);if(t.tag!==0&&n===2){var r=xa(t);r!==0&&(e=r,n=ol(t,r))}if(n===1)throw n=oi,pn(t,0),Lt(t,e),Ne(t,Z()),n;if(n===6)throw Error(y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ln(t,ke,dt),Ne(t,Z()),null}function su(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(sr=Z()+500,oo&&rn())}}function En(t){bt!==null&&bt.tag===0&&!(U&6)&&Qn();var e=U;U|=1;var n=Be.transition,r=z;try{if(Be.transition=null,z=1,t)return t()}finally{z=r,Be.transition=n,U=e,!(U&6)&&rn()}}function ou(){xe=Bn.current,W(Bn)}function pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lv(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ss();break;case 3:rr(),W(Re),W(ye),Ql();break;case 5:Gl(r);break;case 4:rr();break;case 13:W(K);break;case 19:W(K);break;case 10:Hl(r.type._context);break;case 22:case 23:ou()}n=n.return}if(le=t,ee=t=Kt(t.current,null),fe=xe=e,ie=0,oi=null,ru=co=wn=0,ke=Ur=null,dn!==null){for(e=0;e<dn.length;e++)if(n=dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}dn=null}return t}function Kh(t,e){do{var n=ee;try{if(Bl(),is.current=xs,Os){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Os=!1}if(_n=0,ae=te=G=null,Mr=!1,ri=0,nu.current=null,n===null||n.return===null){ie=1,oi=e,ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Vc(o);if(v!==null){v.flags&=-257,Mc(v,o,a,s,e),v.mode&1&&Lc(s,u,e),e=v,l=u;var w=e.updateQueue;if(w===null){var I=new Set;I.add(l),e.updateQueue=I}else w.add(l);break e}else{if(!(e&1)){Lc(s,u,e),au();break e}l=Error(y(426))}}else if(q&&a.mode&1){var F=Vc(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Mc(F,o,a,s,e),$l(ir(l,a));break e}}s=l=ir(l,a),ie!==4&&(ie=2),Ur===null?Ur=[s]:Ur.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Nh(s,l,e);Cc(s,f);break e;case 1:a=l;var c=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Wt===null||!Wt.has(h)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=Oh(s,a,e);Cc(s,g);break e}}s=s.return}while(s!==null)}Yh(n)}catch(E){e=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Gh(){var t=Ds.current;return Ds.current=xs,t===null?xs:t}function au(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(wn&268435455)&&!(co&268435455)||Lt(le,fe)}function Ms(t,e){var n=U;U|=2;var r=Gh();(le!==t||fe!==e)&&(dt=null,pn(t,e));do try{Dv();break}catch(i){Kh(t,i)}while(1);if(Bl(),U=n,Ds.current=r,ee!==null)throw Error(y(261));return le=null,fe=0,ie}function Dv(){for(;ee!==null;)Qh(ee)}function Lv(){for(;ee!==null&&!sg();)Qh(ee)}function Qh(t){var e=Jh(t.alternate,t,xe);t.memoizedProps=t.pendingProps,e===null?Yh(t):ee=e,nu.current=null}function Yh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cv(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,ee=null;return}}else if(n=Pv(n,e,xe),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);ie===0&&(ie=5)}function ln(t,e,n){var r=z,i=Be.transition;try{Be.transition=null,z=1,Vv(t,e,n,r)}finally{Be.transition=i,z=r}return null}function Vv(t,e,n,r){do Qn();while(bt!==null);if(U&6)throw Error(y(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(y(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mg(t,s),t===le&&(ee=le=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qi||(qi=!0,Zh(vs,function(){return Qn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Be.transition,Be.transition=null;var o=z;z=1;var a=U;U|=4,nu.current=null,Av(t,n),Hh(n,t),tv(Ua),_s=!!Fa,Ua=Fa=null,t.current=n,Nv(n),og(),U=a,z=o,Be.transition=s}else t.current=n;if(qi&&(qi=!1,bt=t,Vs=i),s=t.pendingLanes,s===0&&(Wt=null),ug(n.stateNode),Ne(t,Z()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ls)throw Ls=!1,t=il,il=null,t;return Vs&1&&t.tag!==0&&Qn(),s=t.pendingLanes,s&1?t===sl?br++:(br=0,sl=t):br=0,rn(),null}function Qn(){if(bt!==null){var t=Af(Vs),e=Be.transition,n=z;try{if(Be.transition=null,z=16>t?16:t,bt===null)var r=!1;else{if(t=bt,bt=null,Vs=0,U&6)throw Error(y(331));var i=U;for(U|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Fr(8,d,s)}var p=d.child;if(p!==null)p.return=d,P=p;else for(;P!==null;){d=P;var m=d.sibling,v=d.return;if($h(d),d===u){P=null;break}if(m!==null){m.return=v,P=m;break}P=v}}}var w=s.alternate;if(w!==null){var I=w.child;if(I!==null){w.child=null;do{var F=I.sibling;I.sibling=null,I=F}while(I!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,P=f;break e}P=s.return}}var c=t.current;for(P=c;P!==null;){o=P;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,P=h;else e:for(o=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uo(9,a)}}catch(E){Y(a,a.return,E)}if(a===o){P=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,P=g;break e}P=a.return}}if(U=i,rn(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(to,t)}catch{}r=!0}return r}finally{z=n,Be.transition=e}}return!1}function Qc(t,e,n){e=ir(n,e),e=Nh(t,e,1),t=Ht(t,e,1),e=Ee(),t!==null&&(yi(t,1,e),Ne(t,e))}function Y(t,e,n){if(t.tag===3)Qc(t,t,n);else for(;e!==null;){if(e.tag===3){Qc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){t=ir(n,t),t=Oh(e,t,1),e=Ht(e,t,1),t=Ee(),e!==null&&(yi(e,1,t),Ne(e,t));break}}e=e.return}}function Mv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ee(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(fe&n)===n&&(ie===4||ie===3&&(fe&130023424)===fe&&500>Z()-iu?pn(t,0):ru|=n),Ne(t,e)}function Xh(t,e){e===0&&(t.mode&1?(e=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):e=1);var n=Ee();t=It(t,e),t!==null&&(yi(t,e,n),Ne(t,n))}function Fv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xh(t,n)}function Uv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(e),Xh(t,n)}var Jh;Jh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Re.current)Ce=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ce=!1,kv(t,e,n);Ce=!!(t.flags&131072)}else Ce=!1,q&&e.flags&1048576&&th(e,Ps,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;os(t,e),t=e.pendingProps;var i=er(e,ye.current);Gn(e,n),i=Xl(null,e,r,t,i,n);var s=Jl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ae(r)?(s=!0,Ts(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ql(e),i.updater=ao,e.stateNode=i,i._reactInternals=e,Ka(e,r,t,n),e=Ya(null,e,r,!0,s,n)):(e.tag=0,q&&s&&bl(e),we(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(os(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zv(r),t=Qe(r,t),i){case 0:e=Qa(null,e,r,t,n);break e;case 1:e=bc(null,e,r,t,n);break e;case 11:e=Fc(null,e,r,t,n);break e;case 14:e=Uc(null,e,r,Qe(r.type,t),n);break e}throw Error(y(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qe(r,i),Qa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qe(r,i),bc(t,e,r,i,n);case 3:e:{if(Vh(e),t===null)throw Error(y(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sh(t,e),As(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ir(Error(y(423)),e),e=zc(t,e,r,n,i);break e}else if(r!==i){i=ir(Error(y(424)),e),e=zc(t,e,r,n,i);break e}else for(De=Bt(e.stateNode.containerInfo.firstChild),Le=e,q=!0,Xe=null,n=uh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),r===i){e=St(t,e,n);break e}we(t,e,r,n)}e=e.child}return e;case 5:return ch(e),t===null&&Ha(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ba(r,i)?o=null:s!==null&&ba(r,s)&&(e.flags|=32),Lh(t,e),we(t,e,o,n),e.child;case 6:return t===null&&Ha(e),null;case 13:return Mh(t,e,n);case 4:return Kl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=nr(e,null,r,n):we(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qe(r,i),Fc(t,e,r,i,n);case 7:return we(t,e,e.pendingProps,n),e.child;case 8:return we(t,e,e.pendingProps.children,n),e.child;case 12:return we(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,j(Cs,r._currentValue),r._currentValue=o,s!==null)if(et(s.value,o)){if(s.children===i.children&&!Re.current){e=St(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wa(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}we(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gn(e,n),i=He(i),r=r(i),e.flags|=1,we(t,e,r,n),e.child;case 14:return r=e.type,i=Qe(r,e.pendingProps),i=Qe(r.type,i),Uc(t,e,r,i,n);case 15:return xh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qe(r,i),os(t,e),e.tag=1,Ae(r)?(t=!0,Ts(e)):t=!1,Gn(e,n),ah(e,r,i),Ka(e,r,i,n),Ya(null,e,r,!0,t,n);case 19:return Fh(t,e,n);case 22:return Dh(t,e,n)}throw Error(y(156,e.tag))};function Zh(t,e){return kf(t,e)}function bv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,n,r){return new bv(t,e,n,r)}function lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zv(t){if(typeof t=="function")return lu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cl)return 11;if(t===Rl)return 14}return 2}function Kt(t,e){var n=t.alternate;return n===null?(n=je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function us(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")lu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Dn:return mn(n.children,i,s,e);case Pl:o=8,i|=8;break;case va:return t=je(12,n,e,i|2),t.elementType=va,t.lanes=s,t;case ya:return t=je(13,n,e,i),t.elementType=ya,t.lanes=s,t;case _a:return t=je(19,n,e,i),t.elementType=_a,t.lanes=s,t;case lf:return fo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case of:o=10;break e;case af:o=9;break e;case Cl:o=11;break e;case Rl:o=14;break e;case Nt:o=16,r=null;break e}throw Error(y(130,t==null?t:typeof t,""))}return e=je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mn(t,e,n,r){return t=je(7,t,r,e),t.lanes=n,t}function fo(t,e,n,r){return t=je(22,t,r,e),t.elementType=lf,t.lanes=n,t.stateNode={isHidden:!1},t}function sa(t,e,n){return t=je(6,t,null,e),t.lanes=n,t}function oa(t,e,n){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $v(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uu(t,e,n,r,i,s,o,a,l){return t=new $v(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=je(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(s),t}function jv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ep(t){if(!t)return Jt;t=t._reactInternals;e:{if(Rn(t)!==t||t.tag!==1)throw Error(y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ae(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(y(171))}if(t.tag===1){var n=t.type;if(Ae(n))return Zf(t,n,e)}return e}function tp(t,e,n,r,i,s,o,a,l){return t=uu(n,r,!0,t,i,s,o,a,l),t.context=ep(null),n=t.current,r=Ee(),i=qt(n),s=yt(r,i),s.callback=e??null,Ht(n,s,i),t.current.lanes=i,yi(t,i,r),Ne(t,r),t}function ho(t,e,n,r){var i=e.current,s=Ee(),o=qt(i);return n=ep(n),e.context===null?e.context=n:e.pendingContext=n,e=yt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ht(i,e,o),t!==null&&(Ze(t,i,o,s),rs(t,i,o)),o}function Fs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cu(t,e){Yc(t,e),(t=t.alternate)&&Yc(t,e)}function Bv(){return null}var np=typeof reportError=="function"?reportError:function(t){console.error(t)};function du(t){this._internalRoot=t}po.prototype.render=du.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));ho(t,e,null,null)};po.prototype.unmount=du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;En(function(){ho(null,t,null,null)}),e[Et]=null}};function po(t){this._internalRoot=t}po.prototype.unstable_scheduleHydration=function(t){if(t){var e=xf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dt.length&&e!==0&&e<Dt[n].priority;n++);Dt.splice(n,0,t),n===0&&Lf(t)}};function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function Hv(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fs(o);s.call(u)}}var o=tp(e,r,t,0,null,!1,!1,"",Xc);return t._reactRootContainer=o,t[Et]=o.current,Jr(t.nodeType===8?t.parentNode:t),En(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fs(l);a.call(u)}}var l=uu(t,0,!1,null,null,!1,!1,"",Xc);return t._reactRootContainer=l,t[Et]=l.current,Jr(t.nodeType===8?t.parentNode:t),En(function(){ho(e,l,n,r)}),l}function go(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fs(o);a.call(l)}}ho(e,o,t,i)}else o=Hv(n,e,t,i,r);return Fs(o)}Nf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ar(e.pendingLanes);n!==0&&(Ol(e,n|1),Ne(e,Z()),!(U&6)&&(sr=Z()+500,rn()))}break;case 13:En(function(){var r=It(t,1);if(r!==null){var i=Ee();Ze(r,t,1,i)}}),cu(t,1)}};xl=function(t){if(t.tag===13){var e=It(t,134217728);if(e!==null){var n=Ee();Ze(e,t,134217728,n)}cu(t,134217728)}};Of=function(t){if(t.tag===13){var e=qt(t),n=It(t,e);if(n!==null){var r=Ee();Ze(n,t,e,r)}cu(t,e)}};xf=function(){return z};Df=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};Aa=function(t,e,n){switch(e){case"input":if(Ia(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=so(r);if(!i)throw Error(y(90));cf(r),Ia(r,i)}}}break;case"textarea":ff(t,n);break;case"select":e=n.value,e!=null&&Hn(t,!!n.multiple,e,!1)}};_f=su;wf=En;var Wv={usingClientEntryPoint:!1,Events:[wi,Fn,so,vf,yf,su]},Pr={findFiberByHostInstance:cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qv={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sf(t),t===null?null:t.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||Bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{to=Ki.inject(qv),ot=Ki}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;Ue.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(e))throw Error(y(200));return jv(t,e,null,n)};Ue.createRoot=function(t,e){if(!fu(t))throw Error(y(299));var n=!1,r="",i=np;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=uu(t,1,!1,null,null,n,!1,r,i),t[Et]=e.current,Jr(t.nodeType===8?t.parentNode:t),new du(e)};Ue.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=Sf(e),t=t===null?null:t.stateNode,t};Ue.flushSync=function(t){return En(t)};Ue.hydrate=function(t,e,n){if(!mo(e))throw Error(y(200));return go(null,t,e,!0,n)};Ue.hydrateRoot=function(t,e,n){if(!fu(t))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=np;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tp(e,null,t,1,n??null,i,!1,s,o),t[Et]=e.current,Jr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new po(e)};Ue.render=function(t,e,n){if(!mo(e))throw Error(y(200));return go(null,t,e,!1,n)};Ue.unmountComponentAtNode=function(t){if(!mo(t))throw Error(y(40));return t._reactRootContainer?(En(function(){go(null,null,t,!1,function(){t._reactRootContainer=null,t[Et]=null})}),!0):!1};Ue.unstable_batchedUpdates=su;Ue.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mo(n))throw Error(y(200));if(t==null||t._reactInternals===void 0)throw Error(y(38));return go(t,e,n,!1,r)};Ue.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ue})(ef);var Jc=ef.exports;ma.createRoot=Jc.createRoot,ma.hydrateRoot=Jc.hydrateRoot;const qe=D.exports.createContext(),Kv=D.exports.memo(()=>{const{onSetImei:t}=D.exports.useContext(qe),e=D.exports.createRef();return $("div",{className:"imei-textArea__container",children:[_("textarea",{ref:e,type:"text",className:"imei-input",autoCapitalize:"none"}),_("button",{className:"button",onClick:()=>{const r=e.current.value;t(r)},children:" Revisar "})]})}),Gv=({saved:t})=>_("span",{children:t?"✅":"❌"}),Qv=({device:t,onSelectedChange:e,setPopupInfo:n})=>{const{model:r,imeiList:i,saved:s,selected:o}=t,a=s?"saved":"",l=o?"selected":"",u=()=>{n({model:r,imeiList:i,visible:!0})};return _(fr,{children:$("tr",{className:a+l,children:[_("td",{children:r.toUpperCase()}),_("td",{style:{cursor:"help"},onClick:u,children:i.length}),_("td",{children:_(Gv,{saved:s})}),$("td",{style:{position:"relative"},className:"checkbox",children:[_("label",{htmlFor:r,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}}),_("input",{type:"checkbox",id:r,checked:o,onChange:()=>e(r),disabled:s})]})]})})};const Yv=t=>(t=t.flat(1),t.map(e=>$("tr",{children:[" ",_("td",{children:e})," "]}))),Xv=()=>{const{devices:t,onSelectedChange:e}=D.exports.useContext(qe),[n,r]=D.exports.useState({model:"",imeiList:[],visible:!1});return $("div",{className:"result-container",children:[$("table",{children:[_("thead",{children:$("tr",{children:[_("th",{children:"Modelo"}),_("th",{children:"Cantidad"}),_("th",{children:"Guardado"}),_("th",{children:"Seleccionado"})]})}),_("tbody",{children:t.map(i=>_(Qv,{device:i,onSelectedChange:e,setPopupInfo:r},i.model))})]}),$("div",{className:"imei-tableContainer",hidden:!n.visible,children:[$("table",{children:[_("thead",{children:_("tr",{children:n.model.toUpperCase()})}),_("div",{children:Yv(n.imeiList)})]}),_("button",{onClick:()=>r({...n,visible:!1}),children:"X"})]})]})},Jv=()=>{const{onLogIn:t}=D.exports.useContext(qe);return _("button",{onClick:t,className:"button",children:"Iniciar sesión con Google"})},Zv=([t,e])=>{let n="data:text/plain:charset=utf-8,";for(let r=0;r<t.length;r++)n+=`${t[r]}:${e[r]}\r
`;return n},ey=t=>{let e="data:text/csv:charset=utf-8,";const n=t.join(`\r
`);return e+n},hu=(t="")=>{const e=t==".csv"?ey:Zv;return(r,i)=>{const s=e(r),o=document.createElement("a");o.href=s,o.download=`${i}${t}`,document.body.appendChild(o),o.click(),document.body.removeChild(o)}},rp=(t,e=!1)=>{const[n,r]=D.exports.useState(t);return{onInputChange:({target:o})=>{let{value:a,name:l}=o;e||(a=a.replace(".",""),a=a.replace(" ","")),r({...n,[l]:a})},formState:n,setFormState:r,onFormReset:()=>{r(t)},...n}},ty=(t,e)=>{const n=[...t];let r=0;for(let i in t)if(t[i].model==e[r].model&&(n[i].saved=!0,n[i].selected=!1,r++,r==e.length))break;return n},ny=t=>{t.sort((e,n)=>e.saved==!0&&n.saved==!1?-1:e.saved==!1&&n.saved==!0?1:0)},ry=t=>{t.sort((e,n)=>e.model>n.model?1:e.model<n.model?-1:0)},iy=()=>{const t=localStorage.getItem("fixedStatus")||!0;return t==="true"||t==!0},sy=t=>{localStorage.setItem("fixedStatus",t)},oy=()=>{const{devices:t,setDevices:e,onInputChange:n,fileName:r}=D.exports.useContext(qe),i=hu(".csv"),[s,o]=D.exports.useState(()=>iy()),[a,l]=D.exports.useState(!1),u=D.exports.useRef();return _("div",{className:`save-devices ${s?"fixed":""}`,children:$("form",{action:"",onSubmit:w=>{w.preventDefault()},children:[_("button",{type:"button",className:"toggle-fixed-button",onClick:()=>{sy(!s),o(!s)},children:s?"🔻":"🔺"}),_("input",{className:`${a?"no-name-file-try":""}`,type:"text",value:r,placeholder:"Nombre del archivo...",name:"fileName",onChange:n,ref:u,onClick:()=>{u.current.select()},autoComplete:"off"}),_("button",{type:"submit",className:"save-button",onClick:()=>{if(r===void 0){l(!0);return}const w=t.filter(c=>c.selected);if(w.length==0)return;let I=[];const F=[];for(let c of w)for(let h in c.imeiList){const g=c.sn[h];let E=F.find(k=>k[0]==g)||null;if(E!=null)E=E[1];else{E=0;for(let k in c.sn)c.sn[k]==g&&(E+=c.imeiList[k].length);F.push([g,E])}c.imeiList[h].length==2?(I.push(`${c.imeiList[h][0]};${c.sn[h]};${E}`),I.push(`${c.imeiList[h][1]};${c.sn[h]};${E}`)):I.push(`${c.imeiList[h][0]};${c.sn[h]};${E}`)}i(I,r);const f=ty(t,w);ny(f),e(f),l(!1)},children:"Guardar"})]})})},ay={margin:"5px 0"},ly={fontSize:"14px",color:"rgb(209, 209, 209)"},uy=({device:t})=>{const{imei:e,model:n}=t,r=(""+e).length;return _(fr,{children:$("li",{style:ay,children:[`${e} - ${n} `,_("span",{style:ly,children:`(${r} dígitos)`})]})})},cy=()=>{const{invalidIMEI:t}=D.exports.useContext(qe);return t.length>0?$("div",{className:"invalid-imei__container",children:[_("h3",{children:"IMEI no incluidos"}),_("hr",{}),_("ul",{children:t.map(e=>_(uy,{device:e}))})]}):_(fr,{})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ip(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new fy;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hy=function(t){const e=ip(t);return sp.encodeByteArray(e,!0)},Us=function(t){return hy(t).replace(/\./g,"")},op=function(t){try{return sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=()=>py().__FIREBASE_DEFAULTS__,gy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&op(t[1]);return e&&JSON.parse(e)},pu=()=>{try{return my()||gy()||vy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ap=t=>{var e,n;return(n=(e=pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yy=t=>{const e=ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lp=()=>{var t;return(t=pu())===null||t===void 0?void 0:t.config},up=t=>{var e;return(e=pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Us(JSON.stringify(n)),Us(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ey(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Iy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ty(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ky(){try{return typeof indexedDB=="object"}catch{return!1}}function Py(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cy,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ry(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function Ry(t,e){return t.replace(Ay,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ay=/\{\$([^}]+)}/g;function Ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zc(s)&&Zc(o)){if(!bs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oy(t,e){const n=new xy(t,e);return n.subscribe.bind(n)}class xy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=aa),i.error===void 0&&(i.error=aa),i.complete===void 0&&(i.complete=aa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function aa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _y;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(My(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vy(t){return t===un?void 0:t}function My(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ly(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const Uy={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},by=b.INFO,zy={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},$y=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zy[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=by,this._logHandler=$y,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const jy=(t,e)=>e.some(n=>t instanceof n);let ed,td;function By(){return ed||(ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hy(){return td||(td=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cp=new WeakMap,ll=new WeakMap,dp=new WeakMap,la=new WeakMap,gu=new WeakMap;function Wy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cp.set(n,t)}).catch(()=>{}),gu.set(e,t),e}function qy(t){if(ll.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ll.set(t,e)}let ul={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ll.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ky(t){ul=t(ul)}function Gy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ua(this),e,...n);return dp.set(r,e.sort?e.sort():[e]),Gt(r)}:Hy().includes(t)?function(...e){return t.apply(ua(this),e),Gt(cp.get(this))}:function(...e){return Gt(t.apply(ua(this),e))}}function Qy(t){return typeof t=="function"?Gy(t):(t instanceof IDBTransaction&&qy(t),jy(t,By())?new Proxy(t,ul):t)}function Gt(t){if(t instanceof IDBRequest)return Wy(t);if(la.has(t))return la.get(t);const e=Qy(t);return e!==t&&(la.set(t,e),gu.set(e,t)),e}const ua=t=>gu.get(t);function Yy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gt(o.result),l.oldVersion,l.newVersion,Gt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Xy=["get","getKey","getAll","getAllKeys","count"],Jy=["put","add","delete","clear"],ca=new Map;function nd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ca.get(e))return ca.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Jy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ca.set(e,s),s}Ky(t=>({...t,get:(e,n,r)=>nd(e,n)||t.get(e,n,r),has:(e,n)=>!!nd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(e_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function e_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cl="@firebase/app",rd="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new mu("@firebase/app"),t_="@firebase/app-compat",n_="@firebase/analytics-compat",r_="@firebase/analytics",i_="@firebase/app-check-compat",s_="@firebase/app-check",o_="@firebase/auth",a_="@firebase/auth-compat",l_="@firebase/database",u_="@firebase/database-compat",c_="@firebase/functions",d_="@firebase/functions-compat",f_="@firebase/installations",h_="@firebase/installations-compat",p_="@firebase/messaging",m_="@firebase/messaging-compat",g_="@firebase/performance",v_="@firebase/performance-compat",y_="@firebase/remote-config",__="@firebase/remote-config-compat",w_="@firebase/storage",E_="@firebase/storage-compat",I_="@firebase/firestore",S_="@firebase/firestore-compat",T_="firebase",k_="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="[DEFAULT]",P_={[cl]:"fire-core",[t_]:"fire-core-compat",[r_]:"fire-analytics",[n_]:"fire-analytics-compat",[s_]:"fire-app-check",[i_]:"fire-app-check-compat",[o_]:"fire-auth",[a_]:"fire-auth-compat",[l_]:"fire-rtdb",[u_]:"fire-rtdb-compat",[c_]:"fire-fn",[d_]:"fire-fn-compat",[f_]:"fire-iid",[h_]:"fire-iid-compat",[p_]:"fire-fcm",[m_]:"fire-fcm-compat",[g_]:"fire-perf",[v_]:"fire-perf-compat",[y_]:"fire-rc",[__]:"fire-rc-compat",[w_]:"fire-gcs",[E_]:"fire-gcs-compat",[I_]:"fire-fst",[S_]:"fire-fst-compat","fire-js":"fire-js",[T_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Map,fl=new Map;function C_(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function or(t){const e=t.name;if(fl.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;fl.set(e,t);for(const n of zs.values())C_(n,t);return!0}function vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new Ii("app","Firebase",R_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=k_;function fp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qt.create("bad-app-name",{appName:String(i)});if(n||(n=lp()),!n)throw Qt.create("no-options");const s=zs.get(i);if(s){if(bs(n,s.options)&&bs(r,s.config))return s;throw Qt.create("duplicate-app",{appName:i})}const o=new Fy(i);for(const l of fl.values())o.addComponent(l);const a=new A_(n,r,o);return zs.set(i,a),a}function hp(t=dl){const e=zs.get(t);if(!e&&t===dl&&lp())return fp();if(!e)throw Qt.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let i=(r=P_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}or(new In(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firebase-heartbeat-database",O_=1,ai="firebase-heartbeat-store";let da=null;function pp(){return da||(da=Yy(N_,O_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ai)}}}).catch(t=>{throw Qt.create("idb-open",{originalErrorMessage:t.message})})),da}async function x_(t){try{return await(await pp()).transaction(ai).objectStore(ai).get(mp(t))}catch(e){if(e instanceof Ct)Sn.warn(e.message);else{const n=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function id(t,e){try{const r=(await pp()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,mp(t)),await r.done}catch(n){if(n instanceof Ct)Sn.warn(n.message);else{const r=Qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function mp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=1024,L_=30*24*60*60*1e3;class V_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=L_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sd(),{heartbeatsToSend:n,unsentEntries:r}=M_(this._heartbeatsCache.heartbeats),i=Us(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sd(){return new Date().toISOString().substring(0,10)}function M_(t,e=D_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),od(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class F_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ky()?Py().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await x_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function od(t){return Us(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){or(new In("platform-logger",e=>new Zy(e),"PRIVATE")),or(new In("heartbeat",e=>new V_(e),"PRIVATE")),Yt(cl,rd,t),Yt(cl,rd,"esm2017"),Yt("fire-js","")}U_("");function yu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function gp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b_=gp,vp=new Ii("auth","Firebase",gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new mu("@firebase/auth");function z_(t,...e){$s.logLevel<=b.WARN&&$s.warn(`Auth (${mr}): ${t}`,...e)}function cs(t,...e){$s.logLevel<=b.ERROR&&$s.error(`Auth (${mr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw _u(t,...e)}function lt(t,...e){return _u(t,...e)}function yp(t,e,n){const r=Object.assign(Object.assign({},b_()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function $_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(t,"argument-error"),yp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _u(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vp.create(t,...e)}function A(t,e,...n){if(!t)throw _u(e,...n)}function gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cs(e),new Error(e)}function Tt(t,e){t||gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function j_(){return ad()==="http:"||ad()==="https:"}function ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j_()||Iy()||"connection"in navigator)?navigator.onLine:!0}function H_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ey()||Sy()}get(){return B_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){Tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new Ti(3e4,6e4);function wp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ki(t,e,n,r,i={}){return Ep(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Si(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),_p.fetch()(Ip(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ep(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},W_),e);try{const i=new G_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gi(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yp(t,d,u);ct(t,d)}}catch(i){if(i instanceof Ct)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function K_(t,e,n,r,i={}){const s=await ki(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ip(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wu(t.config,i):`${t.config.apiScheme}://${i}`}class G_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),q_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=lt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(t,e){return ki(t,"POST","/v1/accounts:delete",e)}async function Y_(t,e){return ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function X_(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Eu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zr(fa(i.auth_time)),issuedAtTime:zr(fa(i.iat)),expirationTime:zr(fa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fa(t){return Number(t)*1e3}function Eu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const i=op(n);return i?JSON.parse(i):(cs("Failed to decode base64 JWT payload"),null)}catch(i){return cs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function J_(t){const e=Eu(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&Z_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Z_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t){var e;const n=t.auth,r=await t.getIdToken(),i=await li(t,Y_(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?r0(s.providerUserInfo):[],a=n0(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function t0(t){const e=Oe(t);await js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function n0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function r0(t){return t.map(e=>{var{providerId:n}=e,r=yu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(t,e){const n=await Ep(t,{},async()=>{const r=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ip(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_p.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):J_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await i0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ui;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new e0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return X_(this,e)}reload(){return t0(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,Q_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:g,isAnonymous:E,providerData:S,stsTokenManager:T}=n;A(h&&T,e,"internal-error");const k=ui.fromJSON(this.name,T);A(typeof h=="string",e,"internal-error"),At(p,e.name),At(m,e.name),A(typeof g=="boolean",e,"internal-error"),A(typeof E=="boolean",e,"internal-error"),At(v,e.name),At(w,e.name),At(I,e.name),At(F,e.name),At(f,e.name),At(c,e.name);const B=new gn({uid:h,auth:e,email:m,emailVerified:g,displayName:p,isAnonymous:E,photoURL:w,phoneNumber:v,tenantId:I,stsTokenManager:k,createdAt:f,lastLoginAt:c});return S&&Array.isArray(S)&&(B.providerData=S.map(L=>Object.assign({},L))),F&&(B._redirectEventId=F),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new ui;i.updateFromServerResponse(n);const s=new gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await js(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new Map;function vt(t){Tt(t instanceof Function,"Expected a class definition");let e=ld.get(t);return e?(Tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ld.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tp.type="NONE";const ud=Tp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t,e,n){return`firebase:${t}:${e}:${n}`}class Yn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ds(this.userKey,i.apiKey,s),this.fullPersistenceKey=ds("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yn(vt(ud),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||vt(ud);const o=ds(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const p=gn._fromJSON(e,d);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Yn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ap(e))return"Blackberry";if(Np(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Pp(e))&&!e.includes("edge/"))return"Chrome";if(Rp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kp(t=_e()){return/firefox\//i.test(t)}function Iu(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pp(t=_e()){return/crios\//i.test(t)}function Cp(t=_e()){return/iemobile/i.test(t)}function Rp(t=_e()){return/android/i.test(t)}function Ap(t=_e()){return/blackberry/i.test(t)}function Np(t=_e()){return/webos/i.test(t)}function vo(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function s0(t=_e()){var e;return vo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function o0(){return Ty()&&document.documentMode===10}function Op(t=_e()){return vo(t)||Rp(t)||Np(t)||Ap(t)||/windows phone/i.test(t)||Cp(t)}function a0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t,e=[]){let n;switch(t){case"Browser":n=cd(_e());break;case"Worker":n=`${cd(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e={}){return ki(t,"GET","/v2/passwordPolicy",wp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=6;class d0{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:c0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dd(this),this.idTokenSubscription=new dd(this),this.beforeStateQueue=new l0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await js(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await u0(this),n=new d0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&z_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yo(t){return Oe(t)}class dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oy(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function p0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",h0().appendChild(r)})}function m0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t,e){const n=vu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(bs(s,e??{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function v0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function y0(t,e,n){const r=yo(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Dp(e),{host:o,port:a}=_0(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||w0()}function Dp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _0(t){const e=Dp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fd(o)}}}function fd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function w0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,n){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(t,e){return K_(t,"POST","/v1/accounts:signInWithIdp",wp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="http://localhost";class Tn extends Lp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Tn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}buildRequest(){const e={requestUri:E0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Pi{constructor(){super("facebook.com")}static credential(e){return Tn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ht.credential(n,r)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Pi{constructor(){super("github.com")}static credential(e){return Tn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Pi{constructor(){super("twitter.com")}static credential(e,n){return Tn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gn._fromIdTokenResponse(e,r,i),o=hd(r);return new ar({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hd(r);return new ar({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bs(e,n,r,i)}}function Vp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bs._fromErrorAndOperation(t,s,e,r):s})}async function I0(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ar._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await li(t,Vp(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Eu(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),ar._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,e,n=!1){const r="signIn",i=await Vp(t,r,e),s=await ar._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function k0(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function P0(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function C0(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function R0(t){return Oe(t).signOut()}const Hs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(){const t=_e();return Iu(t)||vo(t)}const N0=1e3,O0=10;class Fp extends Mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=A0()&&a0(),this.fallbackToPolling=Op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);o0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,O0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},N0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fp.type="LOCAL";const x0=Fp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends Mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Up.type="SESSION";const bp=Up;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await D0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Tu("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function V0(t){ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function M0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function U0(){return zp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="firebaseLocalStorageDb",b0=1,Ws="firebaseLocalStorage",jp="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wo(t,e){return t.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function z0(){const t=indexedDB.deleteDatabase($p);return new Ci(t).toPromise()}function pl(){const t=indexedDB.open($p,b0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ws,{keyPath:jp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ws)?e(r):(r.close(),await z0(),e(await pl()))})})}async function pd(t,e,n){const r=wo(t,!0).put({[jp]:e,value:n});return new Ci(r).toPromise()}async function $0(t,e){const n=wo(t,!1).get(e),r=await new Ci(n).toPromise();return r===void 0?null:r.value}function md(t,e){const n=wo(t,!0).delete(e);return new Ci(n).toPromise()}const j0=800,B0=3;class Bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>B0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(U0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await M0(),!this.activeServiceWorker)return;this.sender=new L0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pl();return await pd(e,Hs,"1"),await md(e,Hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wo(i,!1).getAll();return new Ci(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bp.type="LOCAL";const H0=Bp;new Ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t,e){return e?vt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Lp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function W0(t){return T0(t.auth,new ku(t),t.bypassAuthState)}function q0(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),S0(n,new ku(t),t.bypassAuthState)}async function K0(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),I0(n,new ku(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return W0;case"linkViaPopup":case"linkViaRedirect":return K0;case"reauthViaPopup":case"reauthViaRedirect":return q0;default:ct(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new Ti(2e3,1e4);async function Q0(t,e,n){const r=yo(t);$_(t,e,Su);const i=Hp(r,n);return new hn(r,"signInViaPopup",e,i).executeNotNull()}class hn extends Wp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,G0.get())};e()}}hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="pendingRedirect",fs=new Map;class X0 extends Wp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const r=await J0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J0(t,e){const n=tw(e),r=ew(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Z0(t,e){fs.set(t._key(),e)}function ew(t){return vt(t._redirectPersistence)}function tw(t){return ds(Y0,t.config.apiKey,t.name)}async function nw(t,e,n=!1){const r=yo(t),i=Hp(r,e),o=await new X0(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=10*60*1e3;class iw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rw&&this.cachedEventUids.clear(),this.cachedEventUids.has(gd(e))}saveEventToCache(e){this.cachedEventUids.add(gd(e)),this.lastProcessedEventTime=Date.now()}}function gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(t,e={}){return ki(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lw=/^https?/;async function uw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ow(t);for(const n of e)try{if(cw(n))return}catch{}ct(t,"unauthorized-domain")}function cw(t){const e=hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lw.test(n))return!1;if(aw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new Ti(3e4,6e4);function vd(){const t=ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fw(t){return new Promise((e,n)=>{var r,i,s;function o(){vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vd(),n(lt(t,"network-request-failed"))},timeout:dw.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ut().gapi)===null||s===void 0)&&s.load)o();else{const a=m0("iframefcb");return ut()[a]=()=>{gapi.load?o():n(lt(t,"network-request-failed"))},p0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw hs=null,e})}let hs=null;function hw(t){return hs=hs||fw(t),hs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new Ti(5e3,15e3),mw="__/auth/iframe",gw="emulator/auth/iframe",vw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _w(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,gw):`https://${t.config.authDomain}/${mw}`,r={apiKey:e.apiKey,appName:t.name,v:mr},i=yw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Si(r).slice(1)}`}async function ww(t){const e=await hw(t),n=ut().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:_w(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=lt(t,"network-request-failed"),a=ut().setTimeout(()=>{s(o)},pw.get());function l(){ut().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Iw=500,Sw=600,Tw="_blank",kw="http://localhost";class yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pw(t,e,n,r=Iw,i=Sw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ew),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_e().toLowerCase();n&&(a=Pp(u)?Tw:n),kp(u)&&(e=e||kw,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(s0(u)&&a!=="_self")return Cw(e||"",a),new yd(null);const p=window.open(e||"",a,d);A(p,t,"popup-blocked");try{p.focus()}catch{}return new yd(p)}function Cw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="__/auth/handler",Aw="emulator/auth/handler",Nw=encodeURIComponent("fac");async function _d(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mr,eventId:i};if(e instanceof Su){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ny(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(e instanceof Pi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${Nw}=${encodeURIComponent(l)}`:"";return`${Ow(t)}?${Si(a).slice(1)}${u}`}function Ow({config:t}){return t.emulator?wu(t,Aw):`https://${t.authDomain}/${Rw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="webStorageSupport";class xw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bp,this._completeRedirectFn=nw,this._overrideRedirectResult=Z0}async _openPopup(e,n,r,i){var s;Tt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _d(e,n,r,hl(),i);return Pw(e,o,Tu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _d(e,n,r,hl(),i);return V0(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ww(e),r=new iw(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ha,{type:ha},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ha];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Op()||Iu()||vo()}}const Dw=xw;var wd="@firebase/auth",Ed="1.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mw(t){or(new In("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xp(t)},u=new f0(r,i,s,l);return v0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),or(new In("auth-internal",e=>{const n=yo(e.getProvider("auth").getImmediate());return(r=>new Lw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(wd,Ed,Vw(t)),Yt(wd,Ed,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=5*60,Uw=up("authIdTokenMaxAge")||Fw;let Id=null;const bw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Uw)return;const i=n==null?void 0:n.token;Id!==i&&(Id=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zw(t=hp()){const e=vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=g0(t,{popupRedirectResolver:Dw,persistence:[H0,x0,bp]}),r=up("authTokenSyncURL");if(r){const s=bw(r);P0(n,s,()=>s(n.currentUser)),k0(n,o=>s(o))}const i=ap("auth");return i&&y0(n,`http://${i}`),n}Mw("Browser");var $w="firebase",jw="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt($w,jw,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new mu("@firebase/firestore");function qs(t,...e){if(lr.logLevel<=b.DEBUG){const n=e.map(Cu);lr.debug(`Firestore (${gr}): ${t}`,...n)}}function Pu(t,...e){if(lr.logLevel<=b.ERROR){const n=e.map(Cu);lr.error(`Firestore (${gr}): ${t}`,...n)}}function Kp(t,...e){if(lr.logLevel<=b.WARN){const n=e.map(Cu);lr.warn(`Firestore (${gr}): ${t}`,...n)}}function Cu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: `+t;throw Pu(e),new Error(e)}function Zt(t,e){t||X()}function Eo(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="ok",Bw="cancelled",$r="unknown",N="invalid-argument",Hw="deadline-exceeded",Ww="not-found",qw="permission-denied",ml="unauthenticated",Kw="resource-exhausted",ur="failed-precondition",Gw="aborted",Qw="out-of-range",Gp="unimplemented",Yw="internal",Xw="unavailable";class R extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Te.UNAUTHENTICATED))}shutdown(){}}class Zw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eE{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Zt(typeof e.accessToken=="string"),new Qp(e.accessToken,new Te(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class tE{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class nE{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new tE(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iE{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Zt(typeof e.token=="string"),new rE(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}class di{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends di{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(N,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const oE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends di{construct(e,n,r){return new Pe(e,n,r)}static isValidIdentifier(e){return oE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(N,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(N,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new R(N,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(N,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(re.fromString(e))}static fromName(e){return new de(re.fromString(e).popFirst(5))}static empty(){return new de(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e,n){if(!n)throw new R(N,`Function ${t}() cannot be called with an empty ${e}.`)}function Td(t){if(!de.isDocumentKey(t))throw new R(N,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kd(t){if(de.isDocumentKey(t))throw new R(N,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Io(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function So(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(N,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Io(t);throw new R(N,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi=null;function aE(){return Qi===null?Qi=function(){return 268435456+Math.round(2147483648*Math.random())}():Qi++,"0x"+Qi.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t){return t==null}function Ks(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pd,M;function Cd(t){if(t===void 0)return Pu("RPC_ERROR","HTTP error has no status"),$r;switch(t){case 200:return Sd;case 400:return ur;case 401:return ml;case 403:return qw;case 404:return Ww;case 409:return Gw;case 416:return Qw;case 429:return Kw;case 499:return Bw;case 500:return $r;case 501:return Gp;case 503:return Xw;case 504:return Hw;default:return t>=200&&t<300?Sd:t>=400&&t<500?ur:t>=500&&t<600?Yw:$r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(M=Pd||(Pd={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";class cE extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(n,r,i,s,o){const a=aE(),l=this.I(n,r);qs("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(d=>(qs("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Kp("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}g(n,r,i,s,o,a){return this.R(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=uE[n];return`${this.m}/v1/${r}:${i}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new R(Cd(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new R(Cd(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Jp(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function To(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hE("Invalid base64 string: "+s):s}}(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const pE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(t){if(Zt(!!t),typeof t=="string"){let e=0;const n=pE.exec(t);if(Zt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(t.seconds),nanos:ne(t.nanos)}}function ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fi(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(N,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(N,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(N,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(N,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function em(t){const e=t.mapValue.fields.__previous_value__;return Zp(e)?em(e):e}function hi(t){const e=kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={fields:{__type__:{stringValue:"__max__"}}};function Pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zp(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:X()}function Gs(t,e){if(t===e)return!0;const n=Pn(t);if(n!==Pn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kn(i.timestampValue),a=kn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return fi(i.bytesValue).isEqual(fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ne(i.geoPointValue.latitude)===ne(s.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ne(i.integerValue)===ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ne(i.doubleValue),a=ne(s.doubleValue);return o===a?Ks(o)===Ks(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Jp(t.arrayValue.values||[],e.arrayValue.values||[],Gs);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Rd(o)!==Rd(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Gs(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function pi(t,e){return(t.values||[]).find(n=>Gs(n,e))!==void 0}function Qs(t,e){if(t===e)return 0;const n=Pn(t),r=Pn(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ne(s.integerValue||s.doubleValue),l=ne(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Ad(t.timestampValue,e.timestampValue);case 4:return Ad(hi(t),hi(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=fi(s),l=fi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=oe(a[u],l[u]);if(d!==0)return d}return oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(ne(s.latitude),ne(o.latitude));return a!==0?a:oe(ne(s.longitude),ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const d=Qs(a[u],l[u]);if(d)return d}return oe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Yi&&o===Yi)return 0;if(s===Yi)return 1;if(o===Yi)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=oe(l[p],d[p]);if(m!==0)return m;const v=Qs(a[l[p]],u[d[p]]);if(v!==0)return v}return oe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw X()}}function Ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=kn(t),r=kn(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Nd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tm(t){return!!t&&"arrayValue"in t}function Od(t){return!!t&&"nullValue"in t}function xd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pa(t){return!!t&&"mapValue"in t}function jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return To(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=jr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Dd{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{}class tt extends nm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mE(e,n,r):n==="array-contains"?new yE(e,r):n==="in"?new _E(e,r):n==="not-in"?new wE(e,r):n==="array-contains-any"?new EE(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gE(e,r):new vE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qs(n,this.value)):n!==null&&Pn(this.value)===Pn(n)&&this.matchesComparison(Qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ri extends nm{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Ri(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class mE extends tt{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class gE extends tt{constructor(e,n){super(e,"in",n),this.keys=rm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vE extends tt{constructor(e,n){super(e,"not-in",n),this.keys=rm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class yE extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tm(n)&&pi(n.arrayValue,this.value)}}class _E extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class wE extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class EE extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new Ve(0,0))}static max(){return new ge(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.comparator=e,this.root=n||ce.EMPTY}insert(e,n){return new Xs(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new Xs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xi(this.root,e,this.comparator,!0)}}class Xi{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ce.RED,this.left=i??ce.EMPTY,this.right=s??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ce(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.comparator=e,this.data=new Xs(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ld(this.data.getIterator())}getIteratorFrom(e){return new Ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mi(this.comparator);return n.data=e,n}}class Ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new gi([])}unionWith(e){let n=new mi(Pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gi(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jp(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(n)}setAll(e){let n=Pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=jr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){To(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new st(jr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xt(e,0,ge.min(),ge.min(),ge.min(),st.empty(),0)}static newFoundDocument(e,n,r,i){return new xt(e,1,n,ge.min(),r,i,0)}static newNoDocument(e,n){return new xt(e,2,n,ge.min(),ge.min(),st.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,ge.min(),ge.min(),st.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function Vd(t,e=null,n=[],r=[],i=null,s=null,o=null){return new IE(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function SE(t){return t.collectionGroup!==null}function TE(t){const e=Eo(t);if(e.S===null){e.S=[];const n=new Set;for(const s of e.explicitOrderBy)e.S.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new mi(Pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.S.push(new Ys(s,r))}),n.has(Pe.keyField().canonicalString())||e.S.push(new Ys(Pe.keyField(),r))}return e.S}function kE(t){const e=Eo(t);return e.N||(e.N=PE(e,TE(t))),e.N}function PE(t,e){if(t.limitType==="F")return Vd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ys(i.field,s)});const n=t.endAt?new Dd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dd(t.startAt.position,t.startAt.inclusive):null;return Vd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gl(t,e){const n=t.filters.concat([e]);return new Ru(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Ks(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ks(i)?"-0":i}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this._=void 0}}class RE extends ko{}class AE extends ko{constructor(e){super(),this.elements=e}}class NE extends ko{constructor(e){super(),this.elements=e}}class OE extends ko{constructor(e,n){super(),this.serializer=e,this.q=n}}class Jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jn}static exists(e){return new Jn(void 0,e)}static updateTime(e){return new Jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Po{}class im extends Po{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sm extends Po{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class om extends Po{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xE extends Po{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),LE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),VE=(()=>({and:"AND",or:"OR"}))();class ME{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UE(t,e){return vl(t,e.toTimestamp())}function Md(t){return Zt(!!t),ge.fromTimestamp(function(n){const r=kn(n);return new Ve(r.seconds,r.nanos)}(t))}function Au(t,e){return function(r){return new re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function yl(t,e){return Au(t.databaseId,e.path)}function bE(t,e){const n=function(i){const s=re.fromString(i);return Zt(lm(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new R(N,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(N,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(function(i){return Zt(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function Fd(t,e){return Au(t.databaseId,e)}function zE(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ud(t,e,n){return{name:yl(t,e),fields:n.value.mapValue.fields}}function $E(t,e){let n;if(e instanceof im)n={update:Ud(t,e.key,e.value)};else if(e instanceof om)n={delete:yl(t,e.key)};else if(e instanceof sm)n={update:Ud(t,e.key,e.data),updateMask:qE(e.fieldMask)};else{if(!(e instanceof xE))return X();n={verify:yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof RE)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof AE)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof NE)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof OE)return{fieldPath:o.field.canonicalString(),increment:a.q};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:UE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function jE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return am(Ri.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(p){return{field:On(p.field),direction:BE(p.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||lE(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function BE(t){return DE[t]}function HE(t){return LE[t]}function WE(t){return VE[t]}function On(t){return{fieldPath:t.canonicalString()}}function am(t){return t instanceof tt?function(n){if(n.op==="=="){if(xd(n.value))return{unaryFilter:{field:On(n.field),op:"IS_NAN"}};if(Od(n.value))return{unaryFilter:{field:On(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xd(n.value))return{unaryFilter:{field:On(n.field),op:"IS_NOT_NAN"}};if(Od(n.value))return{unaryFilter:{field:On(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:On(n.field),op:HE(n.op),value:n.value}}}(t):t instanceof Ri?function(n){const r=n.getFilters().map(i=>am(i));return r.length===1?r[0]:{compositeFilter:{op:WE(n.op),filters:r}}}(t):X()}function qE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new ME(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.J=!1}Y(){if(this.J)throw new R(ur,"The client has already been terminated.")}R(e,n,r){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ml&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R($r,i.toString())})}g(e,n,r,i){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ml&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R($r,s.toString())})}terminate(){this.J=!0}}async function um(t,e){const n=Eo(t),r=zE(n.serializer)+"/documents",i={writes:e.map(s=>$E(n.serializer,s))};await n.R("Commit",r,i)}async function GE(t,e){const n=Eo(t),r=jE(n.serializer,kE(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,a,l){const u=bE(o,a.name),d=Md(a.updateTime),p=a.createTime?Md(a.createTime):ge.min(),m=new st({mapValue:{fields:a.fields}}),v=xt.newFoundDocument(u,d,p,m);return l&&v.setHasCommittedMutations(),l?v.setHasCommittedMutations():v}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map;function Ou(t){if(t._terminated)throw new R(ur,"The client has already been terminated.");if(!Br.has(t)){qs("ComponentProvider","Initializing Datastore");const e=function(s){return new cE(s,fetch.bind(null))}(function(s,o,a,l){return new sE(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Xp(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Nu(t._databaseId),r=function(s,o,a,l){return new KE(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Br.set(t,r)}return Br.get(t)}class bd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(N,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(N,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new R(N,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(N,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(N,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(N,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Co{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(ur,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(ur,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jw;switch(r.type){case"firstParty":return new nE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new R(N,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Br.get(n);r&&(qs("ComponentProvider","Removing Datastore"),Br.delete(n),r.terminate())}(this),Promise.resolve()}}function QE(t,e){const n=typeof t=="object"?t:hp(),r=typeof t=="string"?t:e||"(default)",i=vu(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=yy("firestore");s&&YE(i,...s)}return i}function YE(t,e,n,r={}){var i;const s=(t=So(t,Co))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Kp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Te.MOCK_USER;else{a=wy(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new R(N,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Te(u)}t._authCredentials=new Zw(new Qp(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class _t extends An{constructor(e,n,r){super(e,n,function(s){return new Ru(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new de(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function Ro(t,e,...n){if(t=Oe(t),Yp("collection","path",e),t instanceof Co){const r=re.fromString(e,...n);return kd(r),new _t(t,null,r)}{if(!(t instanceof Me||t instanceof _t))throw new R(N,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return kd(r),new _t(t.firestore,null,r)}}function XE(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=fE.newId()),Yp("doc","path",e),t instanceof Co){const r=re.fromString(e,...n);return Td(r),new Me(t,null,new de(r))}{if(!(t instanceof Me||t instanceof _t))throw new R(N,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return Td(r),new Me(t.firestore,t instanceof _t?t.converter:null,new de(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(kt.fromBase64String(e))}catch(n){throw new R(N,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cr(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(N,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(N,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(N,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=/^__.*__$/;class ZE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new sm(e,this.data,this.fieldMask,n,this.fieldTransforms):new im(e,this.data,n,this.fieldTransforms)}}function dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Lu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.X(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.et({path:r,nt:!1});return i.it(e),i}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.et({path:r,nt:!1});return i.X(),i}ot(e){return this.et({path:void 0,nt:!0})}ut(e){return Js(e,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}X(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(dm(this.tt)&&JE.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class eI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}lt(e,n,r,i=!1){return new Lu({tt:e,methodName:n,ct:r,path:Pe.emptyPath(),nt:!1,_t:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fm(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new eI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tI(t,e,n,r,i,s={}){const o=t.lt(s.merge||s.mergeFields?2:0,e,n,i);mm("Data must be an object, but it was:",o,r);const a=hm(r,o);let l,u;if(s.merge)l=new gi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=rI(e,p,n);if(!o.contains(m))throw new R(N,`Field '${m}' is specified in your field mask but missing from your input data.`);sI(d,m)||d.push(m)}l=new gi(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new ZE(new st(a),l,u)}function nI(t,e,n,r=!1){return Vu(n,t.lt(r?4:3,e))}function Vu(t,e){if(pm(t=Oe(t)))return mm("Unsupported field value:",e,t),hm(t,e);if(t instanceof cm)return function(r,i){if(!dm(i.tt))throw i.ut(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ut(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.nt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Vu(a,i.ot(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:vl(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vl(i.serializer,s)}}if(r instanceof Du)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cr)return{bytesValue:FE(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.ut(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Au(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.ut(`Unsupported field value: ${Io(r)}`)}(t,e)}function hm(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):To(t,(r,i)=>{const s=Vu(i,e.rt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Du||t instanceof cr||t instanceof Me||t instanceof cm)}function mm(t,e,n){if(!pm(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Io(n);throw r==="an object"?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function rI(t,e,n){if((e=Oe(e))instanceof xu)return e._internalPath;if(typeof e=="string")return gm(t,e);throw Js("Field path arguments must be of type string or ",t,!1,void 0,n)}const iI=new RegExp("[~\\*/\\[\\]]");function gm(t,e,n){if(e.search(iI)>=0)throw Js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xu(...e.split("."))._internalPath}catch{throw Js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Js(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new R(N,a+t+l)}function sI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vm extends oI{data(){return super.data()}}class aI{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Mu(t,e){return typeof e=="string"?gm(t,e):e instanceof xu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{}class ym extends Fu{}function Uu(t,e,...n){let r=[];e instanceof Fu&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof bu).length,a=s.filter(l=>l instanceof Ao).length;if(o>1||o>0&&a>0)throw new R(N,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ao extends ym{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ao(e,n,r)}_apply(e){const n=this._parse(e);return wm(e._query,n),new An(e.firestore,e.converter,gl(e._query,n))}_parse(e){const n=fm(e.firestore);return function(s,o,a,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new R(N,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){$d(p,d);const v=[];for(const w of p)v.push(zd(l,s,w));m={arrayValue:{values:v}}}else m=zd(l,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||$d(p,d),m=nI(a,o,p,d==="in"||d==="not-in");return tt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _m(t,e,n){const r=e,i=Mu("where",t);return Ao._create(i,r,n)}class bu extends Fu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ri.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)wm(o,l),o=gl(o,l)}(e._query,n),new An(e.firestore,e.converter,gl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zu extends ym{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zu(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new R(N,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new R(N,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ys(s,o)}(e._query,this._field,this._direction);return new An(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ru(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function lI(t,e="asc"){const n=e,r=Mu("orderBy",t);return zu._create(r,n)}function zd(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new R(N,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!SE(e)&&n.indexOf("/")!==-1)throw new R(N,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!de.isDocumentKey(r))throw new R(N,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nd(t,new de(r))}if(n instanceof Me)return Nd(t,n._key);throw new R(N,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Io(n)}.`)}function $d(t,e){if(!Array.isArray(t)||t.length===0)throw new R(N,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wm(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(N,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(N,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class cI extends class{convertValue(n,r="none"){switch(Pn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return ne(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(fi(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw X()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return To(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new Du(ne(n.latitude),ne(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=em(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(hi(n));default:return null}}convertTimestamp(n){const r=kn(n);return new Ve(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=re.fromString(n);Zt(lm(i));const s=new ci(i.get(1),i.get(3)),o=new de(i.popFirst(5));return s.isEqual(r)||Pu(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function $u(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new R(Gp,"limitToLast() queries require specifying at least one orderBy() clause")})((t=So(t,An))._query);const e=Ou(t.firestore),n=new cI(t.firestore);return GE(e,t._query).then(r=>{const i=r.map(s=>new vm(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new aI(t,i)})}function dI(t){return um(Ou((t=So(t,Me)).firestore),[new om(t._key,Jn.none())])}function fI(t,e){const n=XE(t=So(t,_t)),r=uI(t.converter,e),i=tI(fm(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return um(Ou(t.firestore),[i.toMutation(n._key,Jn.exists(!1))]).then(()=>n)}(function(){(function(n){gr=n})(`${mr}_lite`),or(new In("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Co(new eE(e.getProvider("auth-internal")),new iE(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(N,'"projectId" not provided in firebase.initializeApp.');return new ci(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Yt("firestore-lite","4.3.2",""),Yt("firestore-lite","4.3.2","esm2017")})();const hI={apiKey:"AIzaSyDV3XnkwSvHsPGBM_qjgkXfOCAwPTySi38",authDomain:"mots-chile.firebaseapp.com",projectId:"mots-chile",storageBucket:"mots-chile.appspot.com",messagingSenderId:"918565541912",appId:"1:918565541912:web:6f2b4aab5f6be5e198cb6d"},Em=fp(hI),ju=zw(Em),No=QE(Em),pI=new ht,mI=async()=>{try{return{ok:!0,result:(await Q0(ju,pI)).user}}catch(t){return{ok:!1,result:{errorMessage:t.message}}}},gI=async()=>{try{const t=await R0(ju);return{ok:!0}}catch(t){const{message:e}=t;return{ok:!1,errorMessage:e}}},en={checking:"CHECKING",authenticated:"AUTHENTICATED",notAuthenticated:"NOT-AUTHENTICATED"},vI=()=>{const{user:t,setUser:e}=D.exports.useContext(qe);return D.exports.useEffect(()=>{C0(ju,n=>{if(n){const{displayName:r,photoURL:i,email:s}=n;e({authState:en.authenticated,email:s,photoURL:i,displayName:r})}else e({authState:en.notAuthenticated,email:null,photoURL:null,displayName:null})})},[]),{user:t}},yI=({user:t})=>t.authState!=en.authenticated?_(fr,{}):$("div",{className:"user-badge",children:[_("img",{src:t.photoURL,alt:t.displayName}),$("div",{children:[_("span",{children:"¡Bienvenido!"}),_("span",{children:t.displayName})]})]}),_I=()=>{const{toggleManageCerts:t}=D.exports.useContext(qe);return _("button",{className:"adm-certs__button",onClick:t,children:"Administrar certificados"})},Im=({children:t})=>{const{authorized:e}=D.exports.useContext(qe);if(e)return _(fr,{children:t})},wI=({user:t,authorized:e})=>t.authState===en.authenticated?$(fr,{children:[_(yI,{user:t}),_(Im,{children:_(_I,{})})]}):t.authState===en.notAuthenticated?_(Jv,{}):_("div",{children:"..."}),EI=async t=>{const e=Uu(Ro(No,"allowed_emails"),_m("email","==",t));return!(await $u(e)).empty},II=()=>{const{onLogOut:t}=D.exports.useContext(qe);return _("button",{onClick:t,className:"button",children:"Cerrar Sesión"})};async function SI(t,e,n){try{const r=Ro(No,"certificados"),i=await fI(r,{modelo:t,modelo_abr:e,numero:n});return!0}catch(r){return console.error("Error al agregar documento: ",r),!1}}const TI=()=>{const{model:t,modelShort:e,certNumber:n,onInputChange:r,onFormReset:i}=rp({model:"",modelShort:"",certNumber:null},!0),[s,o]=D.exports.useState();return $("div",{className:"add-cert__container",children:[_("h3",{children:"Añadir certificado"}),$("form",{className:"add-cert__form",onSubmit:l=>{if(l.preventDefault(),o(),t===""||e===""||n===null){o(!1);return}SI(t,e,n).then(u=>{o(u),i()})},children:[_("label",{children:"Modelo"}),_("input",{type:"text",placeholder:"Samsung Galaxy S10",name:"model",value:t,onChange:r,autoComplete:"off"}),_("label",{children:"Modelo abreviado"}),_("input",{type:"text",placeholder:"s10",name:"modelShort",value:e,onChange:r,autoComplete:"off"}),_("label",{children:"Numero certificado"}),_("input",{type:"number",placeholder:"13847299348...",name:"certNumber",value:n||"",onChange:r,autoComplete:"off"}),_("button",{className:"button",children:"Añadir"}),_("span",{hidden:s==null,className:`add-result ${s?"success":"error"}`,children:s?"Certificado añadido exitosamente":"Error al añadir el certificado"})]})]})},Oo=async()=>{const t=Uu(Ro(No,"certificados"),lI("modelo"));return(await $u(t)).docs.map(r=>r.data())},kI=()=>{const t=hu();return _("button",{className:"button certs-button",onClick:async()=>{const n=await Oo(),r=n.map(s=>s.numero),i=n.map(s=>s.modelo_abr);t([i,r],"CERTIFICADOS")},children:"Descargar certificados"})},PI=()=>{const t=hu();return _("button",{className:"button models-button",onClick:async()=>{const n=await Oo(),r=n.map(s=>s.modelo),i=n.map(s=>s.modelo_abr);t([i,r],"MODELOS")},children:"Descargar modelos"})},CI=async t=>{const e=Uu(Ro(No,"certificados"),_m("numero","==",t)),n=await $u(e);if(n.docs.length>=1){n.docs.length>1&&console.error("Se encontró más de un documento para el mismo ID de certificado.");const r=n.docs[0].ref;return await dI(r),!0}else if(n.empty)return!1},RI=(t,e=12)=>t.length>e?t.slice(0,e)+"...":t,AI=({info:t,onRemove:e,allowRemove:n})=>{const{numero:r,modelo:i,modelo_abr:s}=t,o=()=>{confirm(`¿Eliminar el certificado ${s}?`)&&(CI(r),e())};return $("div",{className:"cert-listItem",children:[$("div",{className:"cert-model__item",children:[RI(i),_("div",{className:"cert-listItem__tip",children:i})]}),_("div",{className:"cert-modelabr__item",children:s}),_("div",{className:"cert-number__item",children:r}),n&&_("button",{className:"remove-cert__button",onClick:o,children:_("i",{className:"fa-solid fa-xmark"})})]})},NI=()=>{const[t,e]=D.exports.useState([]),n=()=>{Oo().then(r=>e(r)).catch(r=>console.log(r))};return D.exports.useEffect(()=>{n()},[]),$("div",{className:"delete-certs__wrapper",children:[_("h3",{children:"Eliminar Certificado"}),_("div",{className:"delete-certs__container",children:t.map(r=>_(AI,{info:r,allowRemove:!0,onRemove:n},r.numero))})]})},OI=()=>{const{manageCertsVisible:t,toggleManageCerts:e}=D.exports.useContext(qe),n=D.exports.useRef();return _("div",{onClick:i=>{i.target===n.current&&e()},ref:n,className:`cert-manage__container ${t?"":"hidden"}`,children:$("div",{className:"cert-manage",children:[_("h2",{children:"Administrar certificados"}),$("div",{class:"download-buttons__container",children:[_(kI,{}),_(PI,{})]}),_(TI,{}),_(NI,{}),_("button",{onClick:e,className:"close-button",children:"x"})]})})},xI=D.exports.memo(()=>{const{setFormState:t}=D.exports.useContext(qe),[e,n]=D.exports.useState(!1),[r,i]=D.exports.useState({abr:[],names:[]}),s=({abr:o,names:a})=>{const l=[];for(let u in o)l.push($("tr",{children:[_("td",{children:a[u]}),_("td",{style:{cursor:"pointer"},onClick:()=>t({fileName:o[u]}),children:o[u]})]},o[u]));return l.map(u=>u)};return D.exports.useEffect(()=>{Oo().then(o=>{const a=o.map(u=>u.modelo),l=o.map(u=>u.modelo_abr);i({abr:l,names:a})})},[]),$("div",{className:"display-filesNames",children:[_("button",{className:"button",onClick:()=>n(!e),children:"🔎"}),_("div",{className:"namesTable__container",children:$("table",{hidden:!e,children:[_("thead",{children:$("tr",{children:[_("th",{children:"Modelo"}),_("th",{children:"Archivo"})]})}),_("tbody",{children:s(r)})]})})]})});function DI(){const{user:t}=vI();return $("div",{className:"app",children:[_(wI,{user:t}),_(Kv,{}),_(cy,{}),_(Xv,{}),_(oy,{}),$(Im,{children:[_(OI,{}),_(xI,{})]}),_("div",{className:"footer",children:t.authState===en.authenticated?_(II,{}):""})]})}const LI=t=>{const{validIMEI:e,invalidIMEI:n}=VI(t);return{devices:MI(e),invalidIMEI:n}},VI=t=>{const e=[],n=[];return t=t.replaceAll("-",""),t.split(`
`).forEach(i=>{if(i.trim()=="")return;const s=i.split("	");let{imei1:o,imei2:a,sn:l,model:u,brand:d}=FI(s);o=Bd(o),a=Bd(a),d&&(u=d+" - "+u);const p=[];o.length!=0&&(Hd(o)?p.push(o):n.push({imei:o,model:u})),a.length!=0&&(Hd(a)?p.push(a):n.push({imei:a,model:u})),p.length>0&&e.push({imeiList:p,sn:l,model:u})}),{validIMEI:e,invalidIMEI:n}},MI=t=>{const e=[];return t.forEach(n=>{const r=e.findIndex(i=>i.model.replaceAll(" ","")===jd(n.model).replaceAll(" ",""));r===-1?e.push({model:jd(n.model),imeiList:[n.imeiList],sn:[n.sn],saved:!1,selected:!1}):(e[r].imeiList=[...e[r].imeiList,n.imeiList],e[r].sn=[...e[r].sn,n.sn])}),e},jd=t=>(t=t.toLowerCase().trim(),t=t.replaceAll("  "," "),t=t.replaceAll("   "," "),t=t.replaceAll("    "," "),t),Bd=t=>t.replaceAll(" ",""),Hd=t=>!(isNaN(t)||t.length!=15&&t.length!=0),FI=t=>{if(t.length==5)return Wd(t[0].replaceAll(" ",""))?{imei1:t[0],imei2:t[1],model:t[2],brand:t[3],sn:t[4].replace(/ /g,"")}:{brand:t[0],model:t[1],imei1:t[2],imei2:t[3],sn:t[4].replace(/ /g,"")};if(t.length==4)return Wd(t[0].replaceAll(" ",""))?{imei1:t[0],imei2:t[1],model:t[2],sn:t[3].replace(/ /g,""),brand:null}:{model:t[0],imei1:t[1],imei2:t[2],sn:t[3].replace(/ /g,""),brand:null}},Wd=t=>!isNaN(t),UI=({children:t})=>{const[e,n]=D.exports.useState({authState:en.checking,email:null,photoURL:null,displayName:null}),[r,i]=D.exports.useState(!1);D.exports.useEffect(()=>{e.authState===en.authenticated&&EI(e.email).then(S=>i(S))},[e]);const s=async()=>{const{ok:S,result:T}=await mI();S||console.log("Error al iniciar sesión")},o=async()=>{const{ok:S}=await gI();S||console.log("Error al cerrar sesión")},[a,l]=D.exports.useState(),[u,d]=D.exports.useState([]),[p,m]=D.exports.useState([]),[v,w]=D.exports.useState(!1),I=()=>{w(!v)},{onInputChange:F,fileName:f,setFormState:c}=rp(),E={user:e,setUser:n,onLogIn:s,onLogOut:o,authorized:r,manageCertsVisible:v,toggleManageCerts:I,imei:a,onSetImei:S=>{if(l(S),!S)return;const{devices:T,invalidIMEI:k}=LI(S);ry(T),d(T),m(k)},devices:u,setDevices:d,onSelectedChange:S=>{const T=[...u];for(let k of T)if(k.model==S){k.selected=!k.selected;break}d(T)},invalidIMEI:p,onInputChange:F,fileName:f,setFormState:c};return _(qe.Provider,{value:E,children:t})};ma.createRoot(document.getElementById("root")).render(_(UI,{children:_(DI,{})}));
