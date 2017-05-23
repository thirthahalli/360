/* krpanoJS 1.0.8.14 radar plugin (build 2012-03-16) */
var krpanoplugin=function(){function w(){var c=j,e=g/2;if(o){var d=b.getmouse(true);d.x*=g/Number(f.width);d.y*=g/Number(f.height);d=Math.atan2(d.y-e,d.x-e)*180/Math.PI;d-=n;if(k==null)k=d-h.view.hlookat;else h.view.hlookat=d-k}d=(n+h.view.hlookat)*Math.PI/180;var a=0.5*h.view.fov*Math.PI/180;if(p){a=2*Math.PI-a;d+=Math.PI}if(Math.abs(d-t)>0.01||Math.abs(a-u)>0.02){t=d;u=a;i=true}if(i){i=false;c.clearRect(0,0,g,g);c.fillStyle="rgba("+(l>>16&255)+","+(l>>8&255)+","+(l&255)+","+q+")";c.strokeStyle=
"rgba("+(m>>16&255)+","+(m>>8&255)+","+(m&255)+","+r+")";c.lineWidth=s;c.beginPath();c.moveTo(e,e);c.arc(e,e,e,d-a,d+a);c.fill()}}var h=null,b=null,f=null,j=null,g=256,n=0,p=false,l=16777215,m=16777215,q=0.5,r=0.3,s=0,o=false,k=null,i=true,v=null,t=0,u=0;this.registerplugin=function(c,e,d){h=c;b=d;if(h.version<"1.0.8.14"||h.build<"2011-03-30"){h.trace(3,"radar plugin - too old krpano version (min. 1.0.8.14)");b=h=null}else{b.registerattribute("heading",0,function(a){n=Number(a);i=true},function(){return n});
b.registerattribute("invert",false,function(a){p=String(a).toLowerCase()=="true";i=true},function(){return p});b.registerattribute("fillcolor",16777215,function(a){l=parseInt(a);i=true},function(){return l});b.registerattribute("linecolor",16777215,function(a){m=parseInt(a);i=true},function(){return m});b.registerattribute("fillalpha",0.5,function(a){q=Number(a);i=true},function(){return q});b.registerattribute("linealpha",0.3,function(a){r=Number(a);i=true},function(){return r});b.registerattribute("linewidth",
0,function(a){s=Number(a);i=true},function(){return s});b.handcursor=false;b.ondown=function(){o=true;k=null};b.onup=function(){o=false;k=null};b.registercontentsize(g,g);f=document.createElement("canvas");f.width=g;f.height=g;f.style.width="100%";f.style.height="100%";f.onselectstart=function(){return false};b.sprite.appendChild(f);j=f.getContext("2d");v=setInterval(w,1E3/30)}};this.unloadplugin=function(){if(h&&b){clearInterval(v);b.sprite.removeChild(f);h=b=f=j=null}};this.hittest=function(c,e){return j.isPointInPath(c,
e)};this.onresize=function(c,e){g=Math.max(c,e);f.width=c;f.height=e;j.scale(c/g,e/g);i=true;return false}};
