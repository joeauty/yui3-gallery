YUI.add("gallery-bootstrap-alert",function(b){function a(d){a.superclass.constructor.apply(this,arguments);this.config=b.mix(d,this.defaults);var c=this.config.selector;this._node=d.host;this.publish("close",{preventable:true,defaultFn:this._dismissAlertFn});this._node.delegate("click",function(f){this.fire("close");},c,this);}a.NAME="Bootstrap.Alert";a.NS="alert";b.extend(a,b.Plugin.Base,{defaults:{duration:0.5,selector:".close",transition:true,destroy:true},close:function(){this.fire("close",{currentTarget:this._node.one(".close")});},_dismissAlertFn:function(i){var h=i.currentTarget,j,c,g,d,f;if(b.instanceOf(this,a)){j=this._node;c=this.config;g=this;}else{j=i.target.ancestor("div."+(h.getData("dismiss")||"alert"));c=a.prototype.defaults;}d=c.destroy?true:false;f=function(){if(d){this.remove();}j.fire("closed");if(g){g.fire("closed");}};if(j){i.preventDefault();if(c.transition&&j.hasClass("fade")){j.transition({duration:c.duration,opacity:0},f);}else{j.hide();f.apply(j);}}}});b.namespace("Bootstrap").Alert=a;},"gallery-2012.08.22-20-00",{requires:["plugin","transition","event","event-delegate"]});