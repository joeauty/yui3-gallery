YUI.add("gallery-lazy-promise",function(e,t){(function(e){"use strict";var t=e.Promise,n=function(e){if(!(this instanceof n))return new n(e);this._fn=e};n.prototype={getStatus:function(){var e=this._promise;return e?e.getStatus():"pending"},then:function(e,n){var r=this,i=r._promise;return i||(i=new t(function(e,t){r._promise=this,r._fn(e,t),delete r._fn})),i.then(e,n)}},e.LazyPromise=n})(e)},"gallery-2013.05.02-22-59",{requires:["promise"]});