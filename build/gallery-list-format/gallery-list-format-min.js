YUI.add("gallery-list-format",function(e,t){var n="gallery-list-format",r;r={__sub:function(e,t,n){return e.replace("{0}",t).replace("{1}",n)},format:function(t){if(!e.Lang.isArray(t))return"";var i=e.Intl.get(n),s=i.listPatternMiddle||"{0}, {1}",o=i.listPatternStart||s,u=i.listPatternEnd,a=i.listPatternTwo||u,f=t.length,l,c;if(f===0)return"";if(f===1)return t[0];if(f===2)return r.__sub(a,t[0],t[1]);l=r.__sub(o,t[0],t[1]);for(c=2;c<f-1;c++)l=r.__sub(s,l,t[c]);return l=r.__sub(u,l,t[c]),l}},e.Intl.ListFormatter=r},"gallery-2013.04.17-18-52",{lang:["af","am","ar","as","az","be","bg","bn","bo","ca","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fo","fr","ga","gl","gsw","gu","gv","ha","haw","he","hi","hr","hu","hy","id","ii","in","is","it","iw","ja","","ka","kk","kl","km","kn","ko","kok","kw","lt","lv","mk","ml","mr","ms","mt","nb","ne","nl","nn","no","om","or","pa","pl","ps","pt","ro","ru","sh","si","sk","sl","so","sq","sr","sr-Latn","sr-ME","sv","sw","ta","te","th","ti","tl","tr","uk","ur","uz","vi","zh","zu"]});
