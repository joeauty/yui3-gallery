YUI.add("gallery-bt-device",function(b){var a={Name:null,OS:null,OS_Version:0,Borwser:null,getDeviceWidth:function(){return screen.width;},getDeviceHeight:function(){return screen.height;},getBrowserWidth:function(){return window.innerWidth;},getBrowserHeight:function(){return window.innerHeight;}};if(b.UA.iphone){a.Name="iphone";a.OS="Apple";a.OS_Version=b.UA.iphone;a.Browser="safari";a.B_Version=b.UA.safari;}else{if(b.UA.ipad){a.Name="ipad";a.OS="Apple";a.OS_Version=b.UA.ipad;a.Browser="safari";a.B_Version=b.UA.safari;}else{if(b.UA.ipod){a.Name="ipad";a.OS="Apple";a.OS_Version=b.UA.ipod;a.Browser="safari";a.B_Version=b.UA.safari;}else{if(b.UA.mobile==="Android"){a.Name="android";a.OS="android";a.OS_Version=b.UA.android;a.Browser="webkit";a.B_Version=b.UA.webkit;}else{if(b.UA.ie){a.Browser="ie";a.B_Version=b.UA.ie;}else{if(b.UA.gecko){a.Browser="firefox";a.B_Version=b.UA.gecko;}else{if(b.UA.chrome){a.Browser="chrome";a.B_Version="chrome";}}}}}}}b.namespace("Bottle").Device=a;},"@VERSION@",{requires:["node-base"]});