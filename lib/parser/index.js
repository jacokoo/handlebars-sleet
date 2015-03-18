module.exports=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,e,r,n,i,u){this.message=t,this.expected=e,this.found=r,this.offset=n,this.line=i,this.column=u,this.name="SyntaxError"}function r(t){function r(){return t.substring(Dn,Sn)}function n(e){function r(e,r,n){var i,u;for(i=r;n>i;i++)u=t.charAt(i),"\n"===u?(e.seenCR||e.line++,e.column=1,e.seenCR=!1):"\r"===u||"\u2028"===u||"\u2029"===u?(e.line++,e.column=1,e.seenCR=!0):(e.column++,e.seenCR=!1)}return In!==e&&(In>e&&(In=0,Bn={line:1,column:1,seenCR:!1}),r(Bn,In,e),In=e),Bn}function i(t){On>Sn||(Sn>On&&(On=Sn,Pn=[]),Pn.push(t))}function u(r,i,u){function a(t){var e=1;for(t.sort(function(t,e){return t.description<e.description?-1:t.description>e.description?1:0});e<t.length;)t[e-1]===t[e]?t.splice(e,1):e++}function s(t,e){function r(t){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+e(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+e(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+e(t)})}var n,i,u,a=new Array(t.length);for(u=0;u<t.length;u++)a[u]=t[u].description;return n=t.length>1?a.slice(0,-1).join(", ")+" or "+a[t.length-1]:a[0],i=e?'"'+r(e)+'"':"end of input","Expected "+n+" but "+i+" found."}var c=n(u),o=u<t.length?t.charAt(u):null;return null!==i&&a(i),new e(null!==r?r:s(i,o),i,o,u,c.line,c.column)}function a(){var t,e,r,n;return t=Sn,e=Z(),e!==k?(r=s(),r===k&&(r=H),r!==k?(n=Z(),n!==k?(Dn=t,e=J(r),t=e):(Sn=t,t=G)):(Sn=t,t=G)):(Sn=t,t=G),t}function s(){var t,e,r,n,i,u,a;if(t=Sn,e=c(),e!==k){for(r=[],n=Sn,i=Z(),i!==k?(u=c(),u!==k?(a=Z(),a!==k?(Dn=n,i=K(u),n=i):(Sn=n,n=G)):(Sn=n,n=G)):(Sn=n,n=G);n!==k;)r.push(n),n=Sn,i=Z(),i!==k?(u=c(),u!==k?(a=Z(),a!==k?(Dn=n,i=K(u),n=i):(Sn=n,n=G)):(Sn=n,n=G)):(Sn=n,n=G);r!==k?(Dn=t,e=M(e,r),t=e):(Sn=t,t=G)}else Sn=t,t=G;return t}function c(){var t;return t=o(),t===k&&(t=l(),t===k&&(t=p(),t===k&&(t=g(),t===k&&(t=_())))),t}function o(){var e,r,n,u,a,s,c,o;if(e=Sn,t.substr(Sn,9).toLowerCase()===N?(r=t.substr(Sn,9),Sn+=9):(r=k,0===Tn&&i(V)),r!==k)if(n=Z(),n!==k){for(u=Sn,a=[],s=Sn,c=Sn,Tn++,62===t.charCodeAt(Sn)?(o=te,Sn++):(o=k,0===Tn&&i(ee)),Tn--,o===k?c=X:(Sn=c,c=G),c!==k?(t.length>Sn?(o=t.charAt(Sn),Sn++):(o=k,0===Tn&&i(re)),o!==k?(c=[c,o],s=c):(Sn=s,s=G)):(Sn=s,s=G);s!==k;)a.push(s),s=Sn,c=Sn,Tn++,62===t.charCodeAt(Sn)?(o=te,Sn++):(o=k,0===Tn&&i(ee)),Tn--,o===k?c=X:(Sn=c,c=G),c!==k?(t.length>Sn?(o=t.charAt(Sn),Sn++):(o=k,0===Tn&&i(re)),o!==k?(c=[c,o],s=c):(Sn=s,s=G)):(Sn=s,s=G);a!==k&&(a=t.substring(u,Sn)),u=a,u!==k?(62===t.charCodeAt(Sn)?(a=te,Sn++):(a=k,0===Tn&&i(ee)),a!==k?(Dn=e,r=ne(u),e=r):(Sn=e,e=G)):(Sn=e,e=G)}else Sn=e,e=G;else Sn=e,e=G;if(e===k)if(e=Sn,t.substr(Sn,5).toLowerCase()===ie?(r=t.substr(Sn,5),Sn+=5):(r=k,0===Tn&&i(ue)),r!==k)if(n=Z(),n!==k){for(u=[],a=Sn,s=Sn,Tn++,t.substr(Sn,2)===ae?(c=ae,Sn+=2):(c=k,0===Tn&&i(se)),Tn--,c===k?s=X:(Sn=s,s=G),s!==k?(t.length>Sn?(c=t.charAt(Sn),Sn++):(c=k,0===Tn&&i(re)),c!==k?(s=[s,c],a=s):(Sn=a,a=G)):(Sn=a,a=G);a!==k;)u.push(a),a=Sn,s=Sn,Tn++,t.substr(Sn,2)===ae?(c=ae,Sn+=2):(c=k,0===Tn&&i(se)),Tn--,c===k?s=X:(Sn=s,s=G),s!==k?(t.length>Sn?(c=t.charAt(Sn),Sn++):(c=k,0===Tn&&i(re)),c!==k?(s=[s,c],a=s):(Sn=a,a=G)):(Sn=a,a=G);u!==k?(t.substr(Sn,2)===ae?(a=ae,Sn+=2):(a=k,0===Tn&&i(se)),a!==k?(Dn=e,r=ce(),e=r):(Sn=e,e=G)):(Sn=e,e=G)}else Sn=e,e=G;else Sn=e,e=G;return e}function l(){var e,r,n,u,a,s,c,o;if(e=Sn,t.substr(Sn,4)===oe?(r=oe,Sn+=4):(r=k,0===Tn&&i(le)),r!==k)if(n=Z(),n!==k){for(u=Sn,a=[],s=Sn,c=Sn,Tn++,t.substr(Sn,3)===pe?(o=pe,Sn+=3):(o=k,0===Tn&&i(he)),Tn--,o===k?c=X:(Sn=c,c=G),c!==k?(t.length>Sn?(o=t.charAt(Sn),Sn++):(o=k,0===Tn&&i(re)),o!==k?(c=[c,o],s=c):(Sn=s,s=G)):(Sn=s,s=G);s!==k;)a.push(s),s=Sn,c=Sn,Tn++,t.substr(Sn,3)===pe?(o=pe,Sn+=3):(o=k,0===Tn&&i(he)),Tn--,o===k?c=X:(Sn=c,c=G),c!==k?(t.length>Sn?(o=t.charAt(Sn),Sn++):(o=k,0===Tn&&i(re)),o!==k?(c=[c,o],s=c):(Sn=s,s=G)):(Sn=s,s=G);a!==k&&(a=t.substring(u,Sn)),u=a,u!==k?(a=Z(),a!==k?(t.substr(Sn,3)===pe?(s=pe,Sn+=3):(s=k,0===Tn&&i(he)),s!==k?(Dn=e,r=fe(u),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)}else Sn=e,e=G;else Sn=e,e=G;return e}function p(){var e,r,n,u,a,c,o,l,p,f,d,A,v,y,b;return e=Sn,60===t.charCodeAt(Sn)?(r=de,Sn++):(r=k,0===Tn&&i(Ae)),r!==k?(n=$(),n!==k?(u=Z(),u!==k?(a=h(),a===k&&(a=H),a!==k?(c=Z(),c!==k?(62===t.charCodeAt(Sn)?(o=te,Sn++):(o=k,0===Tn&&i(ee)),o!==k?(l=Z(),l!==k?(p=s(),p===k&&(p=H),p!==k?(f=Z(),f!==k?(t.substr(Sn,2)===ve?(d=ve,Sn+=2):(d=k,0===Tn&&i(ye)),d!==k?(A=$(),A!==k?(Dn=Sn,v=be(n,a,p,A),v=v?X:G,v!==k?(y=z(),y!==k?(62===t.charCodeAt(Sn)?(b=te,Sn++):(b=k,0===Tn&&i(ee)),b!==k?(Dn=e,r=ge(n,a,p,A),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(e=Sn,60===t.charCodeAt(Sn)?(r=de,Sn++):(r=k,0===Tn&&i(Ae)),r!==k?(n=$(),n!==k?(u=Z(),u!==k?(a=h(),a===k&&(a=H),a!==k?(c=Z(),c!==k?(t.substr(Sn,2)===Ce?(o=Ce,Sn+=2):(o=k,0===Tn&&i(me)),o!==k?(Dn=e,r=xe(n,a),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)),e}function h(){var t,e,r,n,i,u;if(t=Sn,e=f(),e!==k){for(r=[],n=Sn,i=Z(),i!==k?(u=f(),u!==k?(Dn=n,i=Fe(u),n=i):(Sn=n,n=G)):(Sn=n,n=G);n!==k;)r.push(n),n=Sn,i=Z(),i!==k?(u=f(),u!==k?(Dn=n,i=Fe(u),n=i):(Sn=n,n=G)):(Sn=n,n=G);r!==k?(Dn=t,e=_e(e,r),t=e):(Sn=t,t=G)}else Sn=t,t=G;return t}function f(){var e,r,n,u,a,s,c,o,l,p,f,A,v,y,b;return Tn++,e=Sn,r=$(),r!==k?(n=Z(),n!==k?(61===t.charCodeAt(Sn)?(u=Ee,Sn++):(u=k,0===Tn&&i(Re)),u!==k?(a=Z(),a!==k?(s=d(),s!==k?(Dn=e,r=ze(r,s),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(e=Sn,t.substr(Sn,3)===Ze?(r=Ze,Sn+=3):(r=k,0===Tn&&i($e)),r!==k?(n=$(),n!==k?(u=Z(),u!==k?(a=C(),a===k&&(a=H),a!==k?(s=Z(),s!==k?(t.substr(Sn,2)===qe?(c=qe,Sn+=2):(c=k,0===Tn&&i(Le)),c!==k?(o=Z(),o!==k?(l=h(),l===k&&(l=H),l!==k?(p=Z(),p!==k?(t.substr(Sn,3)===Se?(f=Se,Sn+=3):(f=k,0===Tn&&i(De)),f!==k?(A=$(),A!==k?(Dn=Sn,v=Ie(n,a,l,A),v=v?X:G,v!==k?(y=z(),y!==k?(t.substr(Sn,2)===qe?(b=qe,Sn+=2):(b=k,0===Tn&&i(Le)),b!==k?(Dn=e,r=Be(n,a,l,A),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)),Tn--,e===k&&(r=k,0===Tn&&i(we)),e}function d(){var e,r,n,u,a,s;if(Tn++,e=Sn,39===t.charCodeAt(Sn)?(r=Pe,Sn++):(r=k,0===Tn&&i(Te)),r!==k?(n=A(),n!==k?(39===t.charCodeAt(Sn)?(u=Pe,Sn++):(u=k,0===Tn&&i(Te)),u!==k?(Dn=e,r=We(n),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(e=Sn,34===t.charCodeAt(Sn)?(r=Ye,Sn++):(r=k,0===Tn&&i(je)),r!==k?(n=y(),n!==k?(34===t.charCodeAt(Sn)?(u=Ye,Sn++):(u=k,0===Tn&&i(je)),u!==k?(Dn=e,r=We(n),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(e=Sn,t.substr(Sn,2)===ke?(r=ke,Sn+=2):(r=k,0===Tn&&i(Qe)),r!==k&&(Dn=e,r=Ue()),e=r,e===k&&(e=Sn,t.substr(Sn,2)===Ge?(r=Ge,Sn+=2):(r=k,0===Tn&&i(He)),r!==k&&(Dn=e,r=Ue()),e=r,e===k)))){if(e=Sn,r=Sn,n=[],u=Sn,a=Sn,Tn++,Je.test(t.charAt(Sn))?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(Ke)),Tn--,s===k?a=X:(Sn=a,a=G),a!==k?(t.length>Sn?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(re)),s!==k?(a=[a,s],u=a):(Sn=u,u=G)):(Sn=u,u=G),u!==k)for(;u!==k;)n.push(u),u=Sn,a=Sn,Tn++,Je.test(t.charAt(Sn))?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(Ke)),Tn--,s===k?a=X:(Sn=a,a=G),a!==k?(t.length>Sn?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(re)),s!==k?(a=[a,s],u=a):(Sn=u,u=G)):(Sn=u,u=G);else n=G;n!==k&&(n=t.substring(r,Sn)),r=n,r!==k&&(Dn=e,r=Me()),e=r}return Tn--,e===k&&(r=k,0===Tn&&i(Oe)),e}function A(){var t,e,r,n;if(Tn++,t=Sn,e=v(),e!==k){for(r=[],n=v();n!==k;)r.push(n),n=v();r!==k?(Dn=t,e=_e(e,r),t=e):(Sn=t,t=G)}else Sn=t,t=G;return Tn--,t===k&&(e=k,0===Tn&&i(Ne)),t}function v(){var e,r,n,u,a,s;if(Tn++,e=Sn,r=Sn,n=[],u=Sn,a=Sn,Tn++,s=w(),s===k&&(39===t.charCodeAt(Sn)?(s=Pe,Sn++):(s=k,0===Tn&&i(Te))),Tn--,s===k?a=X:(Sn=a,a=G),a!==k?(t.length>Sn?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(re)),s!==k?(a=[a,s],u=a):(Sn=u,u=G)):(Sn=u,u=G),u!==k)for(;u!==k;)n.push(u),u=Sn,a=Sn,Tn++,s=w(),s===k&&(39===t.charCodeAt(Sn)?(s=Pe,Sn++):(s=k,0===Tn&&i(Te))),Tn--,s===k?a=X:(Sn=a,a=G),a!==k?(t.length>Sn?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(re)),s!==k?(a=[a,s],u=a):(Sn=u,u=G)):(Sn=u,u=G);else n=G;return n!==k&&(n=t.substring(r,Sn)),r=n,r!==k&&(Dn=e,r=Xe(r)),e=r,e===k&&(e=g()),Tn--,e===k&&(r=k,0===Tn&&i(Ve)),e}function y(){var t,e,r,n;if(Tn++,t=Sn,e=b(),e!==k){for(r=[],n=b();n!==k;)r.push(n),n=b();r!==k?(Dn=t,e=_e(e,r),t=e):(Sn=t,t=G)}else Sn=t,t=G;return Tn--,t===k&&(e=k,0===Tn&&i(tr)),t}function b(){var e,r,n,u,a,s;if(Tn++,e=Sn,r=Sn,n=[],u=Sn,a=Sn,Tn++,s=w(),s===k&&(34===t.charCodeAt(Sn)?(s=Ye,Sn++):(s=k,0===Tn&&i(je))),Tn--,s===k?a=X:(Sn=a,a=G),a!==k?(t.length>Sn?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(re)),s!==k?(a=[a,s],u=a):(Sn=u,u=G)):(Sn=u,u=G),u!==k)for(;u!==k;)n.push(u),u=Sn,a=Sn,Tn++,s=w(),s===k&&(34===t.charCodeAt(Sn)?(s=Ye,Sn++):(s=k,0===Tn&&i(je))),Tn--,s===k?a=X:(Sn=a,a=G),a!==k?(t.length>Sn?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(re)),s!==k?(a=[a,s],u=a):(Sn=u,u=G)):(Sn=u,u=G);else n=G;return n!==k&&(n=t.substring(r,Sn)),r=n,r!==k&&(Dn=e,r=Xe(r)),e=r,e===k&&(e=g()),Tn--,e===k&&(r=k,0===Tn&&i(Ve)),e}function g(){var e,r,n,u,a,c,o,l,p,h,f,d,A,v,y;return e=Sn,t.substr(Sn,3)===Ze?(r=Ze,Sn+=3):(r=k,0===Tn&&i($e)),r!==k?(n=$(),n!==k?(u=Z(),u!==k?(a=C(),a===k&&(a=H),a!==k?(c=Z(),c!==k?(t.substr(Sn,2)===qe?(o=qe,Sn+=2):(o=k,0===Tn&&i(Le)),o!==k?(l=Z(),l!==k?(p=s(),p===k&&(p=H),p!==k?(h=Z(),h!==k?(t.substr(Sn,3)===Se?(f=Se,Sn+=3):(f=k,0===Tn&&i(De)),f!==k?(d=$(),d!==k?(Dn=Sn,A=er(n,a,p,d),A=A?X:G,A!==k?(v=z(),v!==k?(t.substr(Sn,2)===qe?(y=qe,Sn+=2):(y=k,0===Tn&&i(Le)),y!==k?(Dn=e,r=rr(n,a,p,d),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(e=Sn,t.substr(Sn,3)===nr?(r=nr,Sn+=3):(r=k,0===Tn&&i(ir)),r!==k?(n=F(),n!==k?(u=Z(),u!==k?(a=C(),a===k&&(a=H),a!==k?(c=Z(),c!==k?(t.substr(Sn,3)===ur?(o=ur,Sn+=3):(o=k,0===Tn&&i(ar)),o!==k?(Dn=e,r=sr(n,a),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(e=Sn,t.substr(Sn,2)===cr?(r=cr,Sn+=2):(r=k,0===Tn&&i(or)),r!==k?(n=F(),n!==k?(u=Z(),u!==k?(a=C(),a===k&&(a=H),a!==k?(c=Z(),c!==k?(t.substr(Sn,2)===qe?(o=qe,Sn+=2):(o=k,0===Tn&&i(Le)),o!==k?(Dn=e,r=lr(n,a),e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G))),e}function C(){var t,e,r,n,u,a;if(Tn++,t=Sn,e=m(),e!==k){for(r=[],n=Sn,u=Z(),u!==k?(a=m(),a!==k?(Dn=n,u=Fe(a),n=u):(Sn=n,n=G)):(Sn=n,n=G);n!==k;)r.push(n),n=Sn,u=Z(),u!==k?(a=m(),a!==k?(Dn=n,u=Fe(a),n=u):(Sn=n,n=G)):(Sn=n,n=G);r!==k?(Dn=t,e=_e(e,r),t=e):(Sn=t,t=G)}else Sn=t,t=G;return Tn--,t===k&&(e=k,0===Tn&&i(pr)),t}function m(){var e,r,n,u,a,s,c;return Tn++,e=Sn,r=x(),r!==k?(n=Sn,u=Z(),u!==k?(61===t.charCodeAt(Sn)?(a=Ee,Sn++):(a=k,0===Tn&&i(Re)),a!==k?(s=Z(),s!==k?(c=x(),c!==k?(Dn=n,u=fr(c),n=u):(Sn=n,n=G)):(Sn=n,n=G)):(Sn=n,n=G)):(Sn=n,n=G),n===k&&(n=H),n!==k?(Dn=e,r=dr(r,n),e=r):(Sn=e,e=G)):(Sn=e,e=G),Tn--,e===k&&(r=k,0===Tn&&i(hr)),e}function x(){var t,e;return Tn++,t=Sn,e=F(),e!==k&&(Dn=t,e=vr(e)),t=e,t===k&&(t=Sn,e=O(),e!==k&&(Dn=t,e=yr(e)),t=e,t===k&&(t=Sn,e=S(),e!==k&&(Dn=t,e=br(e)),t=e)),Tn--,t===k&&(e=k,0===Tn&&i(Ar)),t}function F(){var e,r,n,u;if(Tn++,e=Sn,Cr.test(t.charAt(Sn))?(r=t.charAt(Sn),Sn++):(r=k,0===Tn&&i(mr)),r!==k){for(n=[],xr.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(Fr));u!==k;)n.push(u),xr.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(Fr));n!==k?(Dn=e,r=_r(),e=r):(Sn=e,e=G)}else Sn=e,e=G;return Tn--,e===k&&(r=k,0===Tn&&i(gr)),e}function _(){var e,r,n,u,a,s;if(e=Sn,r=Sn,n=[],u=Sn,a=Sn,Tn++,s=w(),Tn--,s===k?a=X:(Sn=a,a=G),a!==k?(t.length>Sn?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(re)),s!==k?(a=[a,s],u=a):(Sn=u,u=G)):(Sn=u,u=G),u!==k)for(;u!==k;)n.push(u),u=Sn,a=Sn,Tn++,s=w(),Tn--,s===k?a=X:(Sn=a,a=G),a!==k?(t.length>Sn?(s=t.charAt(Sn),Sn++):(s=k,0===Tn&&i(re)),s!==k?(a=[a,s],u=a):(Sn=u,u=G)):(Sn=u,u=G);else n=G;return n!==k&&(n=t.substring(r,Sn)),r=n,r!==k&&(Dn=e,r=wr(r)),e=r}function w(){var e;return t.substr(Sn,4)===oe?(e=oe,Sn+=4):(e=k,0===Tn&&i(le)),e===k&&(t.substr(Sn,2)===Er?(e=Er,Sn+=2):(e=k,0===Tn&&i(Rr)),e===k&&(e=E(),e===k&&(e=R()))),e}function E(){var e,r,n,u;return e=Sn,t.substr(Sn,3)===nr?(r=nr,Sn+=3):(r=k,0===Tn&&i(ir)),r===k&&(t.substr(Sn,3)===Ze?(r=Ze,Sn+=3):(r=k,0===Tn&&i($e)),r===k&&(t.substr(Sn,3)===Se?(r=Se,Sn+=3):(r=k,0===Tn&&i(De)),r===k&&(t.substr(Sn,2)===cr?(r=cr,Sn+=2):(r=k,0===Tn&&i(or))))),r!==k?(n=Sn,Tn++,u=$(),Tn--,u!==k?(Sn=n,n=X):n=G,n!==k?(r=[r,n],e=r):(Sn=e,e=G)):(Sn=e,e=G),e}function R(){var e,r,n,u;return e=Sn,t.substr(Sn,2)===ve?(r=ve,Sn+=2):(r=k,0===Tn&&i(ye)),r===k&&(60===t.charCodeAt(Sn)?(r=de,Sn++):(r=k,0===Tn&&i(Ae))),r!==k?(n=Sn,Tn++,u=$(),Tn--,u!==k?(Sn=n,n=X):n=G,n!==k?(r=[r,n],e=r):(Sn=e,e=G)):(Sn=e,e=G),e}function z(){var t,e;for(t=[],e=L();e!==k;)t.push(e),e=L();return t}function Z(){var t,e;for(Tn++,t=[],e=L(),e===k&&(e=q());e!==k;)t.push(e),e=L(),e===k&&(e=q());return Tn--,t===k&&(e=k,0===Tn&&i(zr)),t}function $(){var e,r,n,u,a;if(Tn++,e=Sn,Cr.test(t.charAt(Sn))?(r=t.charAt(Sn),Sn++):(r=k,0===Tn&&i(mr)),r!==k){for(n=Sn,u=[],$r.test(t.charAt(Sn))?(a=t.charAt(Sn),Sn++):(a=k,0===Tn&&i(qr));a!==k;)u.push(a),$r.test(t.charAt(Sn))?(a=t.charAt(Sn),Sn++):(a=k,0===Tn&&i(qr));u!==k&&(u=t.substring(n,Sn)),n=u,n!==k?(Dn=e,r=Lr(r,n),e=r):(Sn=e,e=G)}else Sn=e,e=G;return Tn--,e===k&&(r=k,0===Tn&&i(Zr)),e}function q(){var e,r;return Tn++,10===t.charCodeAt(Sn)?(e=Dr,Sn++):(e=k,0===Tn&&i(Ir)),e===k&&(13===t.charCodeAt(Sn)?(e=Br,Sn++):(e=k,0===Tn&&i(Or)),e===k&&(t.substr(Sn,2)===Pr?(e=Pr,Sn+=2):(e=k,0===Tn&&i(Tr)))),Tn--,e===k&&(r=k,0===Tn&&i(Sr)),e}function L(){var e,r;return Tn++,9===t.charCodeAt(Sn)?(e=Yr,Sn++):(e=k,0===Tn&&i(jr)),e===k&&(32===t.charCodeAt(Sn)?(e=kr,Sn++):(e=k,0===Tn&&i(Qr)),e===k&&(11===t.charCodeAt(Sn)?(e=Ur,Sn++):(e=k,0===Tn&&i(Gr)),e===k&&(12===t.charCodeAt(Sn)?(e=Hr,Sn++):(e=k,0===Tn&&i(Jr))))),Tn--,e===k&&(r=k,0===Tn&&i(Wr)),e}function S(){var e,r,n,u,a;if(Tn++,e=Sn,34===t.charCodeAt(Sn)?(r=Ye,Sn++):(r=k,0===Tn&&i(je)),r!==k){for(n=Sn,u=[],a=D();a!==k;)u.push(a),a=D();u!==k&&(u=t.substring(n,Sn)),n=u,n!==k?(34===t.charCodeAt(Sn)?(u=Ye,Sn++):(u=k,0===Tn&&i(je)),u!==k?(Dn=e,r=Mr(n),e=r):(Sn=e,e=G)):(Sn=e,e=G)}else Sn=e,e=G;if(e===k)if(e=Sn,39===t.charCodeAt(Sn)?(r=Pe,Sn++):(r=k,0===Tn&&i(Te)),r!==k){for(n=Sn,u=[],a=I();a!==k;)u.push(a),a=I();u!==k&&(u=t.substring(n,Sn)),n=u,n!==k?(39===t.charCodeAt(Sn)?(u=Pe,Sn++):(u=k,0===Tn&&i(Te)),u!==k?(Dn=e,r=Mr(n),e=r):(Sn=e,e=G)):(Sn=e,e=G)}else Sn=e,e=G;return Tn--,e===k&&(r=k,0===Tn&&i(Kr)),e}function D(){var e,r,n;return Tn++,e=Sn,r=Sn,Tn++,34===t.charCodeAt(Sn)?(n=Ye,Sn++):(n=k,0===Tn&&i(je)),n===k&&(92===t.charCodeAt(Sn)?(n=Vr,Sn++):(n=k,0===Tn&&i(Xr)),n===k&&(n=q())),Tn--,n===k?r=X:(Sn=r,r=G),r!==k?(t.length>Sn?(n=t.charAt(Sn),Sn++):(n=k,0===Tn&&i(re)),n!==k?(Dn=e,r=_r(),e=r):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(e=Sn,92===t.charCodeAt(Sn)?(r=Vr,Sn++):(r=k,0===Tn&&i(Xr)),r!==k?(n=B(),n!==k?(Dn=e,r=tn(n),e=r):(Sn=e,e=G)):(Sn=e,e=G)),Tn--,e===k&&(r=k,0===Tn&&i(Nr)),e}function I(){var e,r,n;return Tn++,e=Sn,r=Sn,Tn++,39===t.charCodeAt(Sn)?(n=Pe,Sn++):(n=k,0===Tn&&i(Te)),n===k&&(92===t.charCodeAt(Sn)?(n=Vr,Sn++):(n=k,0===Tn&&i(Xr)),n===k&&(n=q())),Tn--,n===k?r=X:(Sn=r,r=G),r!==k?(t.length>Sn?(n=t.charAt(Sn),Sn++):(n=k,0===Tn&&i(re)),n!==k?(Dn=e,r=_r(),e=r):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(e=Sn,92===t.charCodeAt(Sn)?(r=Vr,Sn++):(r=k,0===Tn&&i(Xr)),r!==k?(n=B(),n!==k?(Dn=e,r=tn(n),e=r):(Sn=e,e=G)):(Sn=e,e=G)),Tn--,e===k&&(r=k,0===Tn&&i(en)),e}function B(){var e,r,n,u;return Tn++,e=Sn,48===t.charCodeAt(Sn)?(r=nn,Sn++):(r=k,0===Tn&&i(un)),r!==k?(n=Sn,Tn++,an.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(sn)),Tn--,u===k?n=X:(Sn=n,n=G),n!==k?(Dn=e,r=cn(),e=r):(Sn=e,e=G)):(Sn=e,e=G),e===k&&(34===t.charCodeAt(Sn)?(e=Ye,Sn++):(e=k,0===Tn&&i(je)),e===k&&(39===t.charCodeAt(Sn)?(e=Pe,Sn++):(e=k,0===Tn&&i(Te)),e===k&&(92===t.charCodeAt(Sn)?(e=Vr,Sn++):(e=k,0===Tn&&i(Xr)),e===k&&(e=Sn,on.test(t.charAt(Sn))?(r=t.charAt(Sn),Sn++):(r=k,0===Tn&&i(ln)),r!==k&&(Dn=e,r=pn(r)),e=r,e===k&&(e=Sn,98===t.charCodeAt(Sn)?(r=hn,Sn++):(r=k,0===Tn&&i(fn)),r!==k&&(Dn=e,r=dn()),e=r))))),Tn--,e===k&&(r=k,0===Tn&&i(rn)),e}function O(){var e,r,n;return e=Sn,An.test(t.charAt(Sn))?(r=t.charAt(Sn),Sn++):(r=k,0===Tn&&i(vn)),r===k&&(r=H),r!==k?(n=P(),n!==k?(Dn=e,r=yn(r,n),e=r):(Sn=e,e=G)):(Sn=e,e=G),e}function P(){var e,r,n,u,a;if(e=Sn,t.substr(Sn,2).toLowerCase()===bn?(r=t.substr(Sn,2),Sn+=2):(r=k,0===Tn&&i(gn)),r!==k){if(n=[],Cn.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(mn)),u!==k)for(;u!==k;)n.push(u),Cn.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(mn));else n=G;n!==k?(Dn=e,r=xn(),e=r):(Sn=e,e=G)}else Sn=e,e=G;if(e===k){if(e=Sn,48===t.charCodeAt(Sn)?(r=nn,Sn++):(r=k,0===Tn&&i(un)),r!==k){if(n=[],Fn.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(_n)),u!==k)for(;u!==k;)n.push(u),Fn.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(_n));else n=G;n!==k?(Dn=e,r=wn(),e=r):(Sn=e,e=G)}else Sn=e,e=G;if(e===k){if(e=Sn,r=T(),r===k&&(r=H),r!==k)if(46===t.charCodeAt(Sn)?(n=En,Sn++):(n=k,0===Tn&&i(Rn)),n!==k){if(u=[],an.test(t.charAt(Sn))?(a=t.charAt(Sn),Sn++):(a=k,0===Tn&&i(sn)),a!==k)for(;a!==k;)u.push(a),an.test(t.charAt(Sn))?(a=t.charAt(Sn),Sn++):(a=k,0===Tn&&i(sn));else u=G;u!==k?(a=W(),a===k&&(a=H),a!==k?(Dn=e,r=zn(),e=r):(Sn=e,e=G)):(Sn=e,e=G)}else Sn=e,e=G;else Sn=e,e=G;e===k&&(e=Sn,r=T(),r!==k?(n=W(),n===k&&(n=H),n!==k?(Dn=e,r=zn(),e=r):(Sn=e,e=G)):(Sn=e,e=G))}}return e}function T(){var e,r,n,u;if(e=Sn,Zn.test(t.charAt(Sn))?(r=t.charAt(Sn),Sn++):(r=k,0===Tn&&i($n)),r!==k){for(n=[],an.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(sn));u!==k;)n.push(u),an.test(t.charAt(Sn))?(u=t.charAt(Sn),Sn++):(u=k,0===Tn&&i(sn));n!==k?(r=[r,n],e=r):(Sn=e,e=G)}else Sn=e,e=G;return e}function W(){var e,r,n,u;return e=Sn,t.substr(Sn,1).toLowerCase()===qn?(r=t.charAt(Sn),Sn++):(r=k,0===Tn&&i(Ln)),r!==k?(An.test(t.charAt(Sn))?(n=t.charAt(Sn),Sn++):(n=k,0===Tn&&i(vn)),n===k&&(n=H),n!==k?(u=T(),u!==k?(r=[r,n,u],e=r):(Sn=e,e=G)):(Sn=e,e=G)):(Sn=e,e=G),e}var Y,j=arguments.length>1?arguments[1]:{},k={},Q={start:a},U=a,G=k,H=null,J=function(t){return t},K=function(t){return t},M=function(t,e){return e.unshift(t)&&e},N="<!doctype",V={type:"literal",value:"<!DOCTYPE",description:'"<!DOCTYPE"'},X=void 0,te=">",ee={type:"literal",value:">",description:'">"'},re={type:"any",description:"any character"},ne=function(t){return{type:"doctype",value:t}},ie="<?xml",ue={type:"literal",value:"<?xml",description:'"<?xml"'},ae="?>",se={type:"literal",value:"?>",description:'"?>"'},ce=function(){return{type:"doctype",value:"xml"}},oe="<!--",le={type:"literal",value:"<!--",description:'"<!--"'},pe="-->",he={type:"literal",value:"-->",description:'"-->"'},fe=function(t){return{type:"comment",value:t.split("\n")}},de="<",Ae={type:"literal",value:"<",description:'"<"'},ve="</",ye={type:"literal",value:"</",description:'"</"'},be=function(t,e,r,n){return n===t},ge=function(t,e,r){return{type:"html",name:t,attributes:e,children:r||[],selfClosing:!1}},Ce="/>",me={type:"literal",value:"/>",description:'"/>"'},xe=function(t,e){return{type:"html",name:t,attributes:e,selfClosing:!0}},Fe=function(t){return t},_e=function(t,e){return e.unshift(t)&&e},we={type:"other",description:"html attribute"},Ee="=",Re={type:"literal",value:"=",description:'"="'},ze=function(t,e){return{type:"html_attribute",name:t,value:e}},Ze="{{#",$e={type:"literal",value:"{{#",description:'"{{#"'},qe="}}",Le={type:"literal",value:"}}",description:'"}}"'},Se="{{/",De={type:"literal",value:"{{/",description:'"{{/"'},Ie=function(t,e,r,n){return t===n},Be=function(t,e,r){return{type:"handlebars",name:t,attributes:e,children:r||[],selfClosing:!1}},Oe={type:"other",description:"html attribute value"},Pe="'",Te={type:"literal",value:"'",description:'"\'"'},We=function(t){return t},Ye='"',je={type:"literal",value:'"',description:'"\\""'},ke='""',Qe={type:"literal",value:'""',description:'"\\"\\""'},Ue=function(){return null},Ge="''",He={type:"literal",value:"''",description:"\"''\""},Je=/^[ '">]/,Ke={type:"class",value:"[ '\">]",description:"[ '\">]"},Me=function(){return[{type:"text",value:r()}]},Ne={type:"other",description:"single quoted html attribute value"},Ve={type:"other",description:"single quoted html attribute value child"},Xe=function(t){return{type:"text",value:t}},tr={type:"other",description:"double quoted html attribute value"},er=function(t,e,r,n){return t===n},rr=function(t,e,r){return{type:"handlebars",name:t,attributes:e,children:r||[],selfClosing:!1}},nr="{{{",ir={type:"literal",value:"{{{",description:'"{{{"'},ur="}}}",ar={type:"literal",value:"}}}",description:'"}}}"'},sr=function(t,e){return{type:"handlebars",name:t,attributes:e,selfClosing:!0,unescape:!0}},cr="{{",or={type:"literal",value:"{{",description:'"{{"'},lr=function(t,e){return{type:"handlebars",name:t,attributes:e,selfClosing:!0}},pr={type:"other",description:"handlebars attributes"},hr={type:"other",description:"handlebars attribute"},fr=function(t){return t},dr=function(t,e){return{type:"handlebars_attribute",name:t,value:e}},Ar={type:"other",description:"handlebars attribute token"},vr=function(t){return{type:"identifier",value:t}},yr=function(t){return{type:"number",value:t}},br=function(t){return{type:"quoted",value:t}},gr={type:"other",description:"Attribute identifier"},Cr=/^[a-zA-Z$@_]/,mr={type:"class",value:"[a-zA-Z$@_]",description:"[a-zA-Z$@_]"},xr=/^[a-zA-Z0-9$@_.\-]/,Fr={type:"class",value:"[a-zA-Z0-9$@_.\\-]",description:"[a-zA-Z0-9$@_.\\-]"},_r=function(){return r()},wr=function(t){return{type:"text",value:t.trim().split("\n")}},Er="<!",Rr={type:"literal",value:"<!",description:'"<!"'},zr={type:"other",description:"White spaces"},Zr={type:"other",description:"Identifier"},$r=/^[a-zA-Z0-9$_\-]/,qr={type:"class",value:"[a-zA-Z0-9$_\\-]",description:"[a-zA-Z0-9$_\\-]"},Lr=function(t,e){return t+e},Sr={type:"other",description:"End of line"},Dr="\n",Ir={type:"literal",value:"\n",description:'"\\n"'},Br="\r",Or={type:"literal",value:"\r",description:'"\\r"'},Pr="\r\n",Tr={type:"literal",value:"\r\n",description:'"\\r\\n"'},Wr={type:"other",description:"Whitespace"},Yr="	",jr={type:"literal",value:"	",description:'"\\t"'},kr=" ",Qr={type:"literal",value:" ",description:'" "'},Ur="",Gr={type:"literal",value:"",description:'"\\x0B"'},Hr="\f",Jr={type:"literal",value:"\f",description:'"\\f"'},Kr={type:"other",description:"Quoted string"},Mr=function(t){return t},Nr={type:"other",description:"Double quoted string char"},Vr="\\",Xr={type:"literal",value:"\\",description:'"\\\\"'},tn=function(t){return t},en={type:"other",description:"Single quoted string char"},rn={type:"other",description:"Escaped char"},nn="0",un={type:"literal",value:"0",description:'"0"'},an=/^[0-9]/,sn={type:"class",value:"[0-9]",description:"[0-9]"},cn=function(){return"\x00"},on=/^[bnfrt]/,ln={type:"class",value:"[bnfrt]",description:"[bnfrt]"},pn=function(t){return"\\"+t},hn="b",fn={type:"literal",value:"b",description:'"b"'},dn=function(){return""},An=/^[+\-]/,vn={type:"class",value:"[+\\-]",description:"[+\\-]"},yn=function(t,e){return"-"===t?-e:e},bn="0x",gn={type:"literal",value:"0x",description:'"0x"'},Cn=/^[0-9a-f]/i,mn={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},xn=function(){return parseInt(r(),16)},Fn=/^[0-7]/,_n={type:"class",value:"[0-7]",description:"[0-7]"},wn=function(){return parseInt(r(),8)},En=".",Rn={type:"literal",value:".",description:'"."'},zn=function(){return parseFloat(r())},Zn=/^[1-9]/,$n={type:"class",value:"[1-9]",description:"[1-9]"},qn="e",Ln={type:"literal",value:"e",description:'"e"'},Sn=0,Dn=0,In=0,Bn={line:1,column:1,seenCR:!1},On=0,Pn=[],Tn=0;if("startRule"in j){if(!(j.startRule in Q))throw new Error("Can't start parsing from rule \""+j.startRule+'".');U=Q[j.startRule]}if(Y=U(),Y!==k&&Sn===t.length)return Y;throw Y!==k&&Sn<t.length&&i({type:"end",description:"end of input"}),u(null,Pn,On)}return t(e,Error),{SyntaxError:e,parse:r}}();