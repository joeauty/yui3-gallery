YUI.add("gallery-nmmenus",function(a){a.NMMenus=a.Base.create("nmmenus",a.Widget,[],{initializer:function(b){a.all("#"+this.get("menudivid")+" ul li ul").each(function(c){c.get("parentNode").one(".topLink").addClass("hasSubMenu");});if(this.get("ajaxLoadFunc")){this.get("ajaxLoadFunc").call(null,this,this);}this.set("pulsesleft",this.get("pulses"));this.set("pulseduration",this.get("pulseduration")/this.get("pulses"));if(!this.get("nopulsate")&&!this.get("ajaxLoadFunc")){this.initNavMenuPulsate.call(this);}a.all("#"+this.get("menudivid")+" .topLink").each(function(c){if(!c.hasClass("hasSubMenu")){a.on("mouseleave",function(d){c.get("parentNode").removeClass("active");},c);}});a.all("#"+this.get("menudivid")+" .hasSubMenu").each(function(f,c){var e=f.get("parentNode"),d=e.one("ul");a.on("mouseenter",function(g){a.all("#"+this.get("menudivid")+" .hasSubMenu").get("parentNode").removeClass("active");e.addClass("active");var h=this.calcMenuDimensions(d);switch(this.get("anim")){case"fade":d.setStyles({opacity:0,display:"block",height:""});d.transition({opacity:1,easing:"ease-out",duration:this.get("inDuration")});break;case"blind":d.setStyles({height:"0px",display:"block",position:"absolute",top:f.getComputedStyle("height"),width:h[0]});d.transition({height:h[1],duration:this.get("inDuration"),easing:"ease-out",on:{end:function(){d.setStyle("height","");}}});break;default:break;}},e,this);a.on("mouseleave",function(g){this.hideNavMenu.call(this,{topLi:e});},e,this);},this);},calcMenuDimensions:function(b){b.setStyles({display:"block",height:""});var d=b.getComputedStyle("height");var c=b.getComputedStyle("width");b.setStyle("display","none");return[c,d];},hideNavMenu:function(b){b.subMenu=b.topLi.one("ul");switch(this.get("anim")){case"fade":b.subMenu.transition({opacity:0,duration:this.get("outDuration"),easing:"ease-out",on:{end:function(){b.subMenu.setStyles({height:"0px",display:"none"});b.topLi.removeClass("active");}}});break;case"blind":b.subMenu.transition({height:"0px",duration:this.get("outDuration"),easing:"ease-out",on:{end:function(){b.subMenu.setStyle("display","none");b.topLi.removeClass("active");}}});break;default:break;}},initNavMenuPulsate:function(b,c){a.all("#"+this.get("menudivid")+" li a.topLink").each(function(d){d=d.get("parentNode");a.delegate("click",a.bind(function(f){if(f.target.get("href").match(/#$/)&&f.target.hasClass("topLink")){f.preventDefault();return;}else{if(a.one("#"+f.target.get("id")).hasClass("noajax")){return;}}f.preventDefault();if(f.target.hasClass("topLink")){window.location.href=f.target.get("href");}else{this.menuItemPulsate(f.target.get("id"),function(){window.location.href=f.target.get("href");});}},this),d,"a");},this);},menuItemPulsate:function(c,b,d){a.one("#"+c).transition({opacity:0,duration:(this.get("pulseduration")/2),on:{end:a.bind(function(){a.one("#"+c).transition({opacity:1,duration:(this.get("pulseduration")/2),on:{end:a.bind(function(){if(this.get("pulsesleft")>1){this.set("pulsesleft",this.get("pulsesleft")-1);this.menuItemPulsate.call(this,c,b,d);}else{this.set("pulsesleft",this.get("pulses"));this.hideNavMenu.call(this,{topLi:a.one("#"+this.get("menudivid")+" li.active")});if(b){b(d);}else{window.location.href=a.one("#"+c).get("pathname");}}},this)}});},this)}});}},{ATTRS:{anim:{value:"fade"},inDuration:{value:0.35},outDuration:{value:0.25},menudivid:{value:"menublock"},pulses:{value:2},pulseduration:{value:0.3},ajaxLoadFunc:{}}});},"@VERSION@",{requires:["base-build","widget","event-mouseenter","node","transition"]});