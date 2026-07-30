"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var c=q(function(F,y){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),g=require('@stdlib/math-base-assert-is-negative-zerof/dist');function E(r,e,a,o,t,f,m){var n,v,s,u,i;if(r<=0)return NaN;for(v=o,s=m,i=0;i<r&&t[s]!==0;i++)v+=a,s+=f;if(i===r)return NaN;if(n=e[v],x(n))return n;for(i+=1,i;i<r;i++)if(v+=a,s+=f,!t[s]){if(u=e[v],x(u))return u;(u<n||u===n&&g(u))&&(n=u)}return n}y.exports=E
});var k=q(function(G,d){
var j=require('@stdlib/strided-base-stride2offset/dist'),O=c();function Z(r,e,a,o,t){var f=j(r,a),m=j(r,t);return O(r,e,a,f,o,t,m)}d.exports=Z
});var _=q(function(H,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),w=c();h(l,"ndarray",w);R.exports=l
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),p,b=A(z(__dirname,"./native.js"));B(b)?p=C:p=b;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
