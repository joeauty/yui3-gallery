YUI.add("gallery-nmpjaxplus",function(a){a.PjaxPlus=a.Base.create("pjaxplus",a.Widget,[],{initializer:function(b){this.set("history",new a.History());this.set("historyhash",new a.HistoryHash());this.set("html5support",a.HistoryBase.html5);this.ppCache=new a.Cache({max:this.get("cacheNum")});this.domain=new RegExp("^(http|https)://"+window.location.hostname.replace(".","."));if(this.get("omitLinkClass").match(/^\./)){this.set("omitLinkClass",this.get("omitLinkClass").replace(/^\./,""));}},initAjaxLinks:function(){var c,b;if(this.get("html5support")){var d=false;a.all("a:not(."+this.get("omitLinkClass")+")").each(function(g){var i=g.get("pathname").split(/\//);var h=i.length-1;var f=i[h];if(!f.match(/\./)){d=true;}else{d=a.Array.some(this.get("permittedFileExts"),function(k){var j=new RegExp("."+k+"$");if(f.match(j)){return true;}});}if(d&&!g.get("href").match(/^(mailto|javascript):/)&&!g.get("href").match(/^#/)&&g.get("href").match(this.domain)&&!g.hasClass(this.get("omitLinkClass"))){g.addClass("yui3-pjax");}},this);var e=new a.Pjax({addPjaxParam:this.get("addPjaxParam"),container:this.get("container"),contentSelector:this.get("contentSelector"),linkSelector:this.get("linkSelector"),navigateOnHash:this.get("navigateOnHash"),scrollToTop:this.get("scrollToTop"),timeout:this.get("timeout"),titleSelector:this.get("titleSelector")});e.on("navigate",function(g){c=g.originEvent.target.get("href");var f=this.get("html5support");if(this.get("startCallbackFunc")){this.get("startCallbackFunc").call(null,{clickTarget:g.originEvent.target,path:g.originEvent.target.get("pathname"),url:g.originEvent.target.get("href"),queryString:g.originEvent.target.get("search"),html5support:f},this);}},this);e.after("load",function(g){var f=this.get("html5support");if(this.get("callbackFunc")){this.get("callbackFunc").call(null,{clickTarget:b,path:b.get("pathname"),url:b.get("href"),queryString:b.get("search"),html5support:f},this);}a.all(this.get("container")+" a:not(."+this.get("omitLinkClass")+")").addClass("yui3-pjax");this.ppCache.add(c,a.one(this.get("contentSelector")).getHTML());},this);a.delegate("click",function(f){b=f.target;if(this.ppCache.retrieve(f.target.get("href"))){a.one(this.get("contentSelector")).setHTML(this.ppCache.retrieve(f.target.get("href")).response);}},document.body,"a.yui3-pjax",this);}else{a.delegate("click",function(l){var f=this.get("html5support");if(typeof l.target.get("pathname")!=="undefined"){var h=l.target.get("pathname").replace(/_/g,"-");h=l.target.get("pathname").replace(/\//g,"_");if(this.ppCache.retrieve(l.target.get("href"))){a.one(this.get("contentSelector")).setHTML(this.ppCache.retrieve(l.target.get("href")).response);this.get("history").add({page:h});if(this.get("callbackFunc")){this.get("callbackFunc").call(null,{clickTarget:l.target,path:l.target.get("pathname"),url:l.target.get("href"),queryString:l.target.get("search"),historyhash:h,html5support:f},this);}return;}}var i=false;if(typeof l.target.get("pathname")=="undefined"){l.preventDefault();this.startAjaxLoad({clickTarget:l.target,url:"/"});}else{var k=l.target.get("pathname").split(/\//);var j=k.length-1;var g=k[j];if(!g.match(/\./)){i=true;}else{i=a.Array.some(this.get("permittedFileExts"),function(n){var m=new RegExp("."+n+"$");if(g.match(m)){return true;}});}if(i&&!l.target.get("href").match(/^(mailto|javascript):/)&&!l.target.get("href").match(/^#/)&&l.target.get("href").match(this.domain)&&!l.target.hasClass(this.get("omitLinkClass"))){l.preventDefault();this.startAjaxLoad({clickTarget:l.target,path:l.target.get("pathname"),url:l.target.get("href"),queryString:l.target.get("search"),historyhash:h,html5support:f});}}},this.get("findLinksIn"),"a:not(."+this.get("omitLinkClass")+")",this);}},startAjaxLoad:function(d){if(this.get("startCallbackFunc")){this.get("startCallbackFunc").call(null,d,this);}if(!d.path.match(/^\//)){d.path="/"+d.path;}var c=d.queryString?d.path+d.queryString:d.path;if(this.get("nofrags")){c+=d.queryString?"&nofrag=1":"?nofrag=1";}var b={timeout:this.get("timeout"),on:{complete:a.bind(function(h,g){if(this.get("nofrags")){var e=g.responseText;a.one(this.get("contentSelector")).set("innerHTML",e);}else{var f=a.Node.create(g.responseText);a.one(this.get("contentSelector")).setHTML(f.one(this.get("contentSelector")).getHTML());var e=f.one(this.get("contentSelector")).getHTML();}this.get("history").add({page:d.historyhash});this.ppCache.add(d.url,e);},this),success:a.bind(function(f,e){d.transport=e;if(this.get("callbackFunc")){this.get("callbackFunc").call(null,d,this);}},this)}};a.io(c,b);}},{ATTRS:{findLinksIn:{value:document.body},container:{},timeout:{value:30000},addPjaxParam:{value:true},linkSelector:{value:"a.yui3-pjax"},scrollToTop:{value:true},navigateOnHash:{value:false},titleSelector:{value:"title"},contentSelector:{},omitLinkClass:{},permittedFileExts:{},startCallbackFunc:{},callbackFunc:{},cacheNum:{value:10},nofrags:{value:false}}});},"@VERSION@",{skinnable:false,requires:["base-build","widget","node","io","history","pjax","event-delegate","cache-base","selector-css3"]});