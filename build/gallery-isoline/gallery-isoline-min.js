YUI.add("gallery-isoline",function(a){(function(b){var h="dataCellHeight",e="dataCellWidth",d=b.Shape,g=Math.ceil,j=Math.max,f=Math.min,i=parseInt,c=function(){c.superclass.constructor.apply(this,arguments);};b.Isoline=b.extend(c,d,{redraw:function(){this._draw();return this;},_draw:function(){var D=this,E=D.get(h)||1,z=D.get(e)||1,u=E/2,k=z/2,v=D.get("height"),w=D.get("width"),t=D.get("dataFn"),o=f(D.get("dataMaxX")||w,w),l=f(D.get("dataMaxY")||v,v),q=j(D.get("dataMinX")||0,0),m=j(D.get("dataMinY")||0,0),C=g((o-q)/z),B=g((l-m)/E),A,r,n=0,s,p;D.clear();for(;n<B;n+=1){for(r=0;r<C;r+=1){A="";s=q+r*z;p=m+n*E;A+=t(s-k,p-u)?1:0;A+=t(s+k,p-u)?1:0;A+=t(s+k,p+u)?1:0;A+=t(s-k,p+u)?1:0;A=i(A,2);if((A===5||A===10)&&!t(s,p)){A*=4;}switch(A){case 1:case 14:D.moveTo(s-k,p);D.lineTo(s,p+u);break;case 2:case 13:D.moveTo(s,p+u);D.lineTo(s+k,p);break;case 3:case 12:D.moveTo(s-k,p);D.lineTo(s+k,p);break;case 4:case 11:D.moveTo(s,p-u);D.lineTo(s+k,p);break;case 5:case 40:D.moveTo(s-k,p);D.lineTo(s,p-u);D.moveTo(s,p+u);D.lineTo(s+k,p);break;case 6:case 9:D.moveTo(s,p-u);D.lineTo(s,p+u);break;case 7:case 8:D.moveTo(s-k,p);D.lineTo(s,p-u);break;case 10:case 20:D.moveTo(s,p-u);D.lineTo(s+k,p);D.moveTo(s-k,p);D.lineTo(s,p+u);break;}}}D.end();}},{ATTRS:b.mix({dataCellHeight:{value:1},dataCellSize:{setter:function(k){this._set(h,k);this._set(e,k);return k;},value:1},dataCellWidth:{value:1},dataFn:{value:function(){return false;}},dataMaxX:{value:null},dataMaxY:{value:null},dataMinX:{value:null},dataMinY:{value:null}},d.ATTRS)});}(a));},"gallery-2012.06.27-20-10",{requires:["graphics"],skinnable:false});