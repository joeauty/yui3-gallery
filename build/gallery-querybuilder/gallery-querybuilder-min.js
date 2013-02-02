YUI.add("gallery-querybuilder",function(e,t){"use strict";function r(t,n,i){e.FormManager||(e.FormManager={row_marker_class:"",field_marker_class:"",status_marker_class:"",required_class:""}),this.var_list=t.slice(0),this.op_list=e.clone(n,!0),this.op_list.none=[],this.row_list=[],r.superclass.constructor.call(this,i)}function i(){this.var_list.unshift({name:"yui3-querybuilder-choose-prompt",type:"none",text:this.get("chooseVarPrompt")})}function s(e,t){var n=e.length;for(var r=0;r<n;r++)if(e[r].row==t)return r;return-1}function o(e,t){e.halt(),this.appendNew()}function u(e,t){e.halt();var n=s(this.row_list,t);n>=0&&this.remove(n)}function a(e,t){var n=s(this.row_list,t);n>=0&&this.update(n)}function f(e){e.keyCode!=13&&this._notifyChanged()}var n=0<e.UA.ie&&e.UA.ie<9;r.NAME="querybuilder",r.ATTRS={chooseVarPrompt:{value:"Choose a Variable",validator:e.Lang.isString,writeOnce:!0},fieldPrefix:{value:"",validator:e.Lang.isString,writeOnce:!0},pluginConfig:{value:{},validator:e.Lang.isObject,writeOnce:!0}},e.extend(r,e.Widget,{initializer:function(e){var t=this.get("fieldPrefix");this.var_menu_name_pattern=t+"query_var_{i}",this.get("pluginConfig").field_prefix=t,this.plugin_column_count=0,i.call(this)},renderUI:function(){var t=this.get("contentBox");t.on("change",this._notifyChanged,this),t.on("keyup",f,this),this.table=e.Node.create("<table></table>"),t.appendChild(this.table),this.appendNew()},destructor:function(){for(var e=0;e<this.row_list.length;e++)this.row_list[e].plugin&&this.row_list[e].plugin.destroy();this.row_list=null,this.table=null},reset:function(t,n){this._allow_remove_last_row=!0;for(var r=this.row_list.length-1;r>=0;r--)this.remove(r);this._allow_remove_last_row=!1,t&&(this.var_list=t.slice(0),i.call(this)),n&&(this.op_list=e.clone(n,!0),this.op_list.none=[]),this.has_messages=!1,this.appendNew()},appendNew:function(t,r){if(t&&this.row_list.length==1){var i=this.row_list[0].var_menu;if(i.get("selectedIndex")===0){for(var s=0;s<this.var_list.length;s++)if(this.var_list[s].name==t){i.set("selectedIndex",s);break}return this.update(0,r),this.row_list[0].plugin}}var f=this.row_list.length,l=e.Node.create("<tbody></tbody>");l.set("className",e.FormManager.row_marker_class);var c=e.Node.create("<tr></tr>");c.set("className",this.getClassName("error")),l.appendChild(c);var h=this._createContainer();h.set("colSpan",1+this.plugin_column_count),h.set("innerHTML",'<p class="'+e.FormManager.status_marker_class+'"></p>'),c.appendChild(h),c.appendChild(this._createContainer());var p=e.Node.create("<tr></tr>");p.set("className",this.getClassName("criterion")),l.appendChild(p);var d=this._createContainer();d.set("className",this.getClassName("variable")),p.appendChild(d),d.set("innerHTML",this._variablesMenu(this.variableName(f)));var i=d.one("select");i.on("change",a,this,p);var v=e.Node.getDOMNode(i).options;for(var s=0;s<this.var_list.length;s++)v[s]=new Option(this.var_list[s].text,this.var_list[s].name),this.var_list[s].name==t&&i.set("selectedIndex",s);n&&i.on("change",this._notifyChanged,this);var m=this._createContainer();m.set("className",this.getClassName("controls")),m.set("innerHTML",this._rowControls()),p.appendChild(m);var g=m.one("."+this.getClassName("insert"));g&&g.on("click",o,this,p);var y=m.one("."+this.getClassName("remove"));y&&y.on("click",u,this,p),this.table.appendChild(l);var b={body:l,row:p,var_menu:i,control:m,error:h};return this.row_list.push(b),this.update(f,r),l.scrollIntoView(),this.row_list[f].plugin},update:function(t,n){var i=this.row_list[t].row,s=this.row_list[t].control;this.row_list[t].error.one("."+e.FormManager.status_marker_class).set("innerHTML",""),this.row_list[t].plugin&&(this.row_list[t].plugin.destroy(),this.row_list[t].plugin=null);while(i.get("children").size()>2){var o=i.get("children").item(0).next();o.remove(!0)}var u=this.row_list[t].var_menu,a=this.var_list[u.get("selectedIndex")],f=[];a.type=="none"?i.addClass(this.getClassName("empty")):(i.removeClass(this.getClassName("empty")),this.row_list[t].plugin=new r.plugin_mapping[a.type](this,this.get("pluginConfig")),f=this.row_list[t].plugin.create(t,a,this.op_list[a.type],n));while(f.length<this.plugin_column_count)f.push(this._createContainer());for(var l=0;l<f.length;l++)i.insertBefore(f[l],s);if(f.length>this.plugin_column_count){var c=1+f.length;for(var l=0;l<this.row_list.length;l++){var h=this.row_list[l].row;this.row_list[l].error.set("colSpan",c);if(h!=i){var p=this.row_list[l].control;for(var d=this.plugin_column_count;d<f.length;d++)h.insertBefore(this._createContainer(),p)}}this.plugin_column_count=f.length}var v=this.row_list[t].plugin;v&&e.Lang.isFunction(v.postCreate)&&this.row_list[t].plugin.postCreate(t,a,this.op_list[a.type],n)},remove:function(t){if(this.row_list.length<=0)return!1;if(!this._allow_remove_last_row&&this.row_list.length==1){var n=this.row_list[0].var_menu;return n.set("selectedIndex",0),this.update(0),this.fire("queryChanged",{remove:!0}),!0}var r=this.row_list[t].body;return r===null?!1:(this.row_list[t].plugin&&this.row_list[t].plugin.destroy(),r.remove(!0),this.row_list.splice(t,1),e.Array.each(this.row_list,function(e,t){var n=e.var_menu;n.setAttribute("name",this.variableName(t));var r=this.var_list[n.get("selectedIndex")];r.type!="none"&&e.plugin.updateName(t)},this),this.fire("queryChanged",{remove:!0}),!0)},validateFields:function(){this.clearFieldMessages();var t=!0;return e.Array.each(this.row_list,function(n,r){var i;n.row.all("input").some(function(n){i=e.FormManager.validateFromCSSData(n);if(i.error)return this.displayFieldMessage(n,i.error,"error"),t=!1,!0},this),(!i||i.keepGoing)&&n.plugin&&e.Lang.isFunction(n.plugin.validate)&&(t=n.plugin.validate()&&t)},this),t},clearFieldMessages:function(){this.has_messages=!1,this.get("contentBox").all("input").each(function(t){e.FormManager.clearMessage(t)}),this.get("contentBox").all("select").each(function(t){e.FormManager.clearMessage(t)})},displayFieldMessage:function(t,n,r,i){return e.FormManager
.displayMessage(t,n,r,this.has_messages,i)?(this.has_messages=!0,!0):!1},getPlugin:function(e){return this.row_list[e].plugin},toDatabaseQuery:function(){var e=[];for(var t=0;t<this.row_list.length;t++){var n=this.row_list[t],r=n.plugin;if(r){var i=r.toDatabaseQuery();for(var s=0;s<i.length;s++)e.push([n.var_menu.get("value")].concat(i[s]))}}return e},_createContainer:function(){return e.Node.create("<td></td>")},_notifyChanged:function(){this.fire("queryChanged")},variableName:function(t){return e.Lang.sub(this.var_menu_name_pattern,{i:t})},_variablesMenu:function(t){var n='<select name="{n}" class="{f} {c}" />';return e.Lang.sub(n,{n:t,f:e.FormManager.field_marker_class,c:this.getClassName("field")})},_rowControls:function(){var t='<button type="button" class="{cr}">&ndash;</button><button type="button" class="{ci}">+</button>';return this._controls_markup||(this._controls_markup=e.Lang.sub(t,{ci:this.getClassName("insert"),cr:this.getClassName("remove")})),this._controls_markup}}),e.QueryBuilder=r,e.QueryBuilder.Env={has_bubble_problem:n},r.String=function(e,t){this.qb=e,this.op_menu_name_pattern=t.field_prefix+"query_op_{i}",this.val_input_name_pattern=t.field_prefix+"query_val_{i}"},r.String.prototype={create:function(t,r,i,s){var o=this.qb._createContainer();o.set("className",this.qb.getClassName("operator")),o.set("innerHTML",this._operationsMenu(this.operationName(t))),this.op_menu=o.one("select");var u=e.Node.getDOMNode(this.op_menu).options;for(var a=0;a<i.length;a++)u[a]=new Option(i[a].text,i[a].value);s=s||["",""],s[0]&&this.op_menu.set("value",s[0]),n&&this.op_menu.on("change",this.qb._notifyChanged,this.qb);var f=this.qb._createContainer();return f.set("className",this.qb.getClassName("value")),f.set("innerHTML",this._valueInput(this.valueName(t),r.validation)),this.value_input=f.one("input"),this.value_input.set("value",s[1]),[o,f]},postCreate:function(t,n,r,i){e.Lang.later(1,this,function(){if(this.value_input){if(n.autocomplete){var t=e.clone(n.autocomplete,!0);t.render=e.one("body"),this.value_input.plug(e.Plugin.AutoComplete,t),n.autocomplete.containerClassName&&this.value_input.ac.get("boundingBox").addClass(n.autocomplete.containerClassName)}try{this.value_input.focus()}catch(r){}}})},destroy:function(){this.value_input.unplug&&this.value_input.unplug(e.Plugin.AutoComplete),this.op_menu=null,this.value_input=null},updateName:function(e){this.op_menu.setAttribute("name",this.operationName(e)),this.value_input.setAttribute("name",this.valueName(e))},set:function(e,t){this.op_menu.set("value",t[this.operationName(e)]),this.value_input.set("value",t[this.valueName(e)])},toDatabaseQuery:function(){return[[this.op_menu.get("value"),this.value_input.get("value")]]},operationName:function(t){return e.Lang.sub(this.op_menu_name_pattern,{i:t})},valueName:function(t){return e.Lang.sub(this.val_input_name_pattern,{i:t})},_operationsMenu:function(t){var n='<select name="{n}" class="{f} {c}" />';return e.Lang.sub(n,{n:t,f:e.FormManager.field_marker_class,c:this.qb.getClassName("field")})},_valueInput:function(t,n){var r='<input type="text" name="{n}" class="yiv-required {f} {c}"/>';return e.Lang.sub(r,{n:t,f:e.FormManager.field_marker_class,c:n+" "+this.qb.getClassName("field")})}},r.Select=function(e,t){this.qb=e,this.val_input_name_pattern=t.field_prefix+"query_val_{i}"},r.Select.prototype={create:function(t,r,i,s){var o=this.qb._createContainer();o.set("className",this.qb.getClassName("value")),o.set("innerHTML",this._valuesMenu(this.valueName(t))),this.value_menu=o.one("select");var u=e.Node.getDOMNode(this.value_menu).options,a=r.value_list;for(var f=0;f<a.length;f++)u[f]=new Option(a[f].text,a[f].value);return s&&this.value_menu.set("value",s),n&&this.value_menu.on("change",this.qb._notifyChanged,this.qb),this.db_query_equals=i[0],[o]},postCreate:function(e,t,n,r){try{this.value_menu.focus()}catch(i){}},destroy:function(){this.value_menu=null},updateName:function(e){this.value_menu.setAttribute("name",this.valueName(e))},set:function(e,t){this.value_menu.set("value",t[this.valueName(e)])},toDatabaseQuery:function(){return[[this.db_query_equals,this.value_menu.get("value")]]},valueName:function(t){return e.Lang.sub(this.val_input_name_pattern,{i:t})},_valuesMenu:function(t){var n='<select name="{n}" class="{f} {c}" />';return e.Lang.sub(n,{n:t,f:e.FormManager.field_marker_class,c:this.qb.getClassName("field")})}},r.plugin_mapping={string:r.String,number:r.String,select:r.Select}},"gallery-2013.01.16-21-05",{skinnable:"true",requires:["widget","gallery-formmgr"],optional:["gallery-scrollintoview","autocomplete"]});
