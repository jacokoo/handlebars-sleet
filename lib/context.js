var Context;module.exports=Context=function(){function t(t,e){this.indentToken=null!=t?t:"    ",this.newlineToken=null!=e?e:"\n",this.result=[],this.defaultLevel=0}return t.prototype.getIndent=function(t){var e,n,i,o;for(n="",e=i=0,o=t+this.defaultLevel;o>=0?o>i:i>o;e=o>=0?++i:--i)n+=this.indentToken;return n},t.prototype.indent=function(t){var e;return this.indented=!0,e=this.getIndent(t),e.length>0&&this.result.push(e),this},t.prototype.eol=function(){return this.result.push(this.newlineToken),this},t.prototype.push=function(t){return this.result.push(t),this},t.prototype.pop=function(){return this.result.pop(),this},t.prototype.last=function(t){return this.result.slice(-t)},t.prototype.getOutput=function(){return this.result.join("")},t}();