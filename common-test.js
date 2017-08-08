/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-csspointerevents-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-pointerevents-preserve3d-touchevents-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,a;for(var u in C)if(C.hasOwnProperty(u)){if(e=[],t=C[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function o(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?x.className.baseVal=t:x.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function u(e,n,r,s){var o,u,l,f,d="modernizr",p=i("div"),c=a();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=s?s[r]:d+(r+1),p.appendChild(l);return o=i("style"),o.type="text/css",o.id="s"+d,(c.fake?c:p).appendChild(o),c.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),u=n(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=f,x.offsetHeight):p.parentNode.removeChild(p),!!u}function l(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],r(s,"function")?d(s,n||t):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(t[s])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,s,o){function a(){d&&(delete N.style,delete N.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=m(e,s);if(!r(u,"undefined"))return u}for(var d,p,c,h,v,g=["modernizr","tspan","samp"];!N.style&&g.length;)d=!0,N.modElem=i(g.shift()),N.style=N.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=N.style[h],l(h,"-")&&(h=f(h)),N.style[h]!==n){if(o||r(s,"undefined"))return a(),"pfx"==t?h:!0;try{N.style[h]=s}catch(y){}if(N.style[h]!=v)return a(),"pfx"==t?h:!0}return a(),!1}function v(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+A.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,s,o):(a=(e+" "+P.join(i+" ")+i).split(" "),p(a,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=t.documentElement,S="svg"===x.nodeName.toLowerCase(),b=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=b,Modernizr.addTest("csspointerevents",function(){var e=i("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("preserve3d",function(){var e=i("a"),t=i("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),x.appendChild(e);var n=t.getBoundingClientRect();return x.removeChild(e),n.width&&n.width<4});var T=function(){function e(e,t){var s;return e?(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,s=e in t,!s&&r&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),s="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),s):!1}var r=!("onblur"in t.documentElement);return e}();w.hasEvent=T;var _="CSS"in e&&"supports"in e.CSS,z="supportsCSS"in e;Modernizr.addTest("supports",_||z);var E="Moz O ms Webkit",P=w._config.usePrefixes?E.toLowerCase().split(" "):[];w._domPrefixes=P,Modernizr.addTest("pointerevents",function(){var e=!1,t=P.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)T(P[t]+"pointerdown")&&(e=!0);return e});var k=w.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(r,function(e){n=9===e.offsetTop})}return n}),k("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),k("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)});var A=w._config.usePrefixes?E.split(" "):[];w._cssomPrefixes=A;var j={elem:i("modernizr")};Modernizr._q.push(function(){delete j.elem});var N={style:j.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=v,w.testAllProps=g,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return g("filter","blur(2px)");var e=i("a");return e.style.cssText=b.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",k(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",g("transition","all",!0)),s(),o(y),delete w.addTest,delete w.addAsyncTest;for(var I=0;I<Modernizr._q.length;I++)Modernizr._q[I]();e.Modernizr=Modernizr}(window,document);

!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){
/*! svg4everybody v2.1.0 | github.com/jonathantneal/svg4everybody */
;function c(d,f){if(f){var e=document.createDocumentFragment(),g=!d.getAttribute("viewBox")&&f.getAttribute("viewBox");g&&d.setAttribute("viewBox",g);for(var h=f.cloneNode(!0);h.childNodes.length;){e.appendChild(h.firstChild)}d.appendChild(e)}}function b(d){d.onreadystatechange=function(){if(4===d.readyState){var e=d._cachedDocument;e||(e=d._cachedDocument=document.implementation.createHTMLDocument(""),e.body.innerHTML=d.responseText,d._cachedTarget={}),d._embeds.splice(0).map(function(f){var g=d._cachedTarget[f.id];g||(g=d._cachedTarget[f.id]=e.getElementById(f.id)),c(f.svg,g)})}},d.onreadystatechange()}function a(g){function f(){for(var q=0;q<h.length;){var n=h[q],o=n.parentNode;if(o&&/svg/i.test(o.nodeName)){var t=n.getAttribute("xlink:href");if(m&&(!e.validate||e.validate(t,o,n))){o.removeChild(n);var r=t.split("#"),p=r.shift(),u=r.join("#");if(p.length){var s=d[p];s||(s=d[p]=new XMLHttpRequest(),s.open("GET",p),s.send(),s._embeds=[]),s._embeds.push({svg:o,id:u}),b(s)}else{c(o,document.getElementById(u))}}}else{++q}}l(f,67)}var m,e=Object(g),i=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,k=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/;m="polyfill" in e?e.polyfill:i.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(k)||[])[1]<537;var d={},l=window.requestAnimationFrame||setTimeout,h=document.getElementsByTagName("use");m&&f()}return a});svg4everybody();


$.fn.hasAttr = function(attrName) {
	var result = false;
	if (attrName && attrName !== '') {
		var attrValue = $(this).attr(attrName);
		if (typeof attrValue !== 'undefined' && attrValue !== false) {
			result = true;
		}
	}
	return result;
};
var Common = {
	//overflow:true  background-size:cover
	//overflow:false background-size:contain
	resizeTrimingRatio:function(wW,wH,iW,iH,overflow){
		if(!overflow)overflow = true;
		return (overflow)?
			Math.max(
				parseInt(wW) / (parseInt(iW)),
				parseInt(wH) / (parseInt(iH))
			)
			:
			Math.min(
				parseInt(wW) / (parseInt(iW)),
				parseInt(wH) / (parseInt(iH))
			);
	},
	
	//é…åˆ—ã‚’ã‚·ãƒ£ãƒƒãƒ•ãƒ«
	arrayShuffle:function(array){
		var n = array.length, t, i;
		while(n){
			i = Math.floor(Math.random() * n--);
			t = array[n];
			array[n] = array[i];
			array[i] = t;
		}
		return array;
	},
	
	//ä¾¡æ ¼ã‹ã‚‰ã‚«ãƒ³ãƒžã‚’ã¤ã‘ã‚‹
	parseCommaFromValue:function(val){
		return val.toString().replace(/(\d)(?=(\d\d\d)+$)/g,'$1,');
	},
	
	//***æœ‰ã‚Šã®ä¾¡æ ¼æ–‡å­—åˆ—ã‹ã‚‰æ•°å€¤ã¸å¤‰æ›
	parseValueFromChar:function(val, splitChar, jointChar){
		if(!splitChar) splitChar = ',';
		if(!jointChar) jointChar = '';
		val = val.split(splitChar);
		
		var result = val.join(jointChar);
		if(!jointChar){//ã¤ãªãæ–‡å­—åˆ—ãŒãªã„å ´åˆ
			if(!isFinite(result)){//æ•°å€¤ã˜ã‚ãªã„å ´åˆ
				console.log(result);
			}
		}
		return result;
	},
	
	/**
	 * PHP-like print_r() equivalent for JavaScript Object
	 *
	 * @author Faisalman <fyzlman@gmail.com>
	 * @license http://www.opensource.org/licenses/mit-license.php
	 * @link http://gist.github.com/879208
	 */
	print_r:function(obj,t){
		// define tab spacing
		var tab = t || '';
	
		// check if it's array
		var isArr = Object.prototype.toString.call(obj) === '[object Array]';
		
		// use {} for object, [] for array
		var str = isArr ? ('Array\n' + tab + '[\n') : ('Object\n' + tab + '{\n');
	
		// walk through it's properties
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				var val1 = obj[prop];
				var val2 = '';
				var type = Object.prototype.toString.call(val1);
				switch (type) {
					
					// recursive if object/array
					case '[object Array]':
					case '[object Object]':
						val2 = Common.print_r(val1, (tab + '\t'));
						break;
						
					case '[object String]':
						val2 = '\'' + val1 + '\'';
						break;
						
					default:
						val2 = val1;
				}
				str += tab + '\t' + prop + ' => ' + val2 + ',\n';
			}
		}
		
		// remove extra comma for last property
		str = str.substring(0, str.length - 2) + '\n' + tab;
		
		console.log(isArr ? (str + ']') : (str + '}'));
	},
	
	//ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã®æŠ˜è¿”ä½ç½®ã‹ã‚‰ã®ç§»å‹•é‡
	sVecVal:0,
	
	//ãƒšãƒ¼ã‚¸ãŒè¡¨ç¤ºã•ã‚ŒãŸæ™‚ï¼éš ã•ã‚ŒãŸæ™‚
	pageHideFlg:false,
	
	//URLãƒ‘ãƒ©ãƒ¡ãƒ¼ã‚¿ã‚’å–å¾—ã—é…åˆ—ã«æ ¼ç´
	urlParams:new Object,
	
	//è¦ç´ ãŒç¾ã‚ŒãŸã¨ãã«will-changeã‚’è¨­å®šã™ã‚‹
	setWillchangeInviewEvent:function() {
		$('[data-willchange]').each(function(index, element, events) {
			events = $._data($(element).get(0)).events;
			if(events)if(events.inview) return true;
			$(element).on('inview.will-change', function(event, isInView, visiblePartX, visiblePartY) {
				if(isInView){
					$(element).css('will-change', $(element).attr('data-willchange'));
				}else{
					$(element).css('will-change', 'auto');
				}
			});
			$(element).trigger('inview.will-change');
		});
	},
	
	setAlignElemLoop:null,
	setAlignElemLoopPC:null,
	setAlignElemLoopSP:null,
	
	//ãã‚ãˆã‚‹
	setAlignElem:function(){
		var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		//é«˜ã•ãƒ»å¹…ã‚’æƒãˆã‚‹
		$('[data-autowidth]').each(function(index, element) {
			element.style.width = '';
		});
		$('[data-autoheight]').each(function(index, element) {
			element.style.height = '';
		});
		
		clearInterval(Common.setAlignElemLoop);
		Common.setAlignElemLoop = setInterval(function(){
			Common.sortElementStyle('data-autowidth', 'width');
			Common.sortElementStyle('data-autoheight', 'height');
			clearInterval(Common.setAlignElemLoop);
		}, 600);
		
		if(640 < w){//pc
			//é«˜ã•ãƒ»å¹…ã‚’æƒãˆã‚‹
			$('[data-sp-autowidth]').each(function(index, element) {
				element.style.width = '';
			});
			$('[data-sp-autoheight]').each(function(index, element) {
				element.style.height = '';
			});
			clearInterval(Common.setAlignElemLoopPC);
			Common.setAlignElemLoopPC = setInterval(function(){
				Common.sortElementStyle('data-pc-autowidth', 'width');
				Common.sortElementStyle('data-pc-autoheight', 'height');
				clearInterval(Common.setAlignElemLoopPC);
			}, 600);
		}else{//smart
			//é«˜ã•ãƒ»å¹…ã‚’æƒãˆã‚‹
			$('[data-pc-autowidth]').each(function(index, element) {
				element.style.width = '';
			});
			$('[data-pc-autoheight]').each(function(index, element) {
				element.style.height = '';
			});
			clearInterval(Common.setAlignElemLoopSP);
			Common.setAlignElemLoopSP = setInterval(function(){
				Common.sortElementStyle('data-sp-autowidth', 'width');
				Common.sortElementStyle('data-sp-autoheight', 'height');
				clearInterval(Common.setAlignElemLoopSP);
			}, 600);
		}
	},
	
	//é«˜ã•ã‚’æƒãˆã‚‹
	sortElementStyle:function(targetVal, type, compareVals, cmp){
		
		
		compareVals = {};
		$('['+targetVal+']').each(function(index, element) {
			if(!compareVals[element.getAttribute(targetVal)]){
				compareVals[element.getAttribute(targetVal)] = [];
			}
			compareVals[element.getAttribute(targetVal)].push(element);
		});
		
		for(var key in compareVals){
			var priorityCompareFlg = false;
			for(var i = 0; i < compareVals[key].length; i++){
				if($(compareVals[key][i]).hasAttr('data-autosize-priority')){
					priorityCompareFlg = true;
				}
			}
			cmp = [];
			
			if(type == 'width'){
				TweenMax.set(compareVals[key], {width:'auto', onComplete:function(){
					for(var i = 0; i < compareVals[key].length; i++){
						if(priorityCompareFlg){
							if(!$(compareVals[key][i]).hasAttr('data-autosize-priority')){
								continue;
							}
						}
						cmp.push($(compareVals[key][i]).outerWidth());
					}
					$(compareVals[key]).outerWidth(10+Math.max.apply(null, cmp));
				}});
			}else if(type == 'height'){
				TweenMax.set(compareVals[key], {height:'auto', onComplete:function(){
					for(var i = 0; i < compareVals[key].length; i++){
						if(priorityCompareFlg){
							if(!$(compareVals[key][i]).hasAttr('data-autosize-priority')){
								continue;
							}
						}
						cmp.push($(compareVals[key][i]).outerHeight());
					}
					$(compareVals[key]).outerHeight(Math.max.apply(null, cmp));
				}});
			}
		}
		return false;
	},
	
	topScrollFunc:function(target, deleteHash, comp){
		if(target){
			if(target[0]){
				var val = 90;
				var w = $(window).width();
				if(w < 640) val = 0;
				
				if(!comp) {
					var comp = function(){};
				}
				
				switch(target.attr('id')){
					case 'Plan':
						if(640 < w) val += 30;
						else val += 0;
						break;
					case 'Party':
						if(640 < w) val += 30;
						else val += 0;
						break;
					default:
						break;
				}
				
				if(deleteHash) location.hash = '';
				$('html,body').animate({scrollTop:target.offset().top-val},700, 'swing', comp);
				return false;
			}
		}
	},
	
	//ä»»æ„ã®ã‚¿ã‚¤ãƒŸãƒ³ã‚°ã§ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«
	scrollByLoaded:function(target){
		TweenMax.set('body', {delay:0.4, onComplete:function(){
			Common.topScrollFunc($('#'+location.hash.split('scroll-')[1]), true);
		}});
	},
	
	//ç”»é¢è¡¨ç¤ºã®ã‚¿ã‚¤ãƒŸãƒ³ã‚°ã§ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã‚’ç„¡åŠ¹
	disableScrollInView:true
	
	
};

(function(){
	//URLã«ãƒãƒƒã‚·ãƒ¥
	(function(){
		var pair = location.search.substring(1).split('&');
		for(var i = 0; pair[i]; i++) {
			var kv = pair[i].split('=');
			Common.urlParams[kv[0]]=kv[1];
		}
	})();
})();

$(function() {
	var googlemapFlg = false;
	
	//OSã‚’åˆ¤åˆ¥
	if (navigator.platform.indexOf("Win") != -1) {
		$('html').addClass('os-windows');
	}else{
		$('html').addClass('os-mac');
	}
	
	"use strict";
	
	//ç”»é¢è¡¨ç¤ºæ™‚ã«ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«
	if(Common.disableScrollInView) Common.scrollByLoaded();
	
	//consoleã®èª¿æ•´
	if(!window.console){
		window.console = {log:function(msg){}};
	}else{
		if(Common.urlParams.debug){
			var exLog = console.log;
			console.log = function(msg, element) {
				// Dateã‚ªãƒ–ã‚¸ã‚§ã‚¯ãƒˆã‚’ä½œæˆ (å¼•æ•°ãªã—)
				var date = new Date() ;
				// ç¾åœ¨ã®UNIXæ™‚é–“ã‚’å–å¾—ã™ã‚‹ (ç§’å˜ä½)
				var timestamp = String(Math.floor(date.getTime()/1000));
				var unique = timestamp+Math.random();
				
				element = document.getElementById('ConsoleWindow');
				if(document.getElementById('ConsoleWindow')){
					var parentScope = (new Error().stack).split('\n')[1];
					var shortSource = parentScope.replace(/[httpsfile]+:\/{2,3}([0-9a-zA-Z\.\-:]+?):?[0-9]*?\//,'');
					$(element).append('<span class="line"><input id="'+unique+'_checkbox" type="checkbox" class="consolecheckbox"><label for="'+unique+'_checkbox" class="timestamp">'+timestamp.substr(8)+'</label><span class="content"><span class="source">' + shortSource + '</span><span class="msg">'+msg+'</span></span></span>');
				}else{
					element = document.createElement('div');
					element.id = 'ConsoleWindow';
					element.setAttribute('class', 'consoleWindow');
					var objBody = document.getElementsByTagName('body').item(0);
					objBody.appendChild(element);
				}
				exLog.apply(this, arguments);
			}
		}
	}
	
	var w,
		h,
		s;
	
	//URLã«ãƒãƒƒã‚·ãƒ¥
	/*(function(){
		if(location.hash.indexOf('#scroll-') != -1){
			var target = $('#'+location.hash.split('#scroll-')[1]);
			Common.topScrollFunc(target);
		}
	})();*/
	
	//will-change
	(function() {
		Common.setWillchangeInviewEvent();
	})();
	
	//ã‚¿ãƒ–ã®ã‚¢ã‚¯ãƒ†ã‚£ãƒ–
	$(window).on('focus', function(e){
		Common.pageHideFlg = false;
	});
	
	//ã‚¿ãƒ–ã®éžã‚¢ã‚¯ãƒ†ã‚£ãƒ–
	$(window).on('blur', function(e){
		Common.pageHideFlg = true;
	});
	
	// ã‚¹ãƒ ãƒ¼ã‚ºã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«
	$(document).on('click','a[href*="#"]',function(){
		var str = this.getAttribute('href').split('#')[1];
		var str2 = this.getAttribute('href').split('#scroll-')[1];
		var target;
		if($('#'+str)[0]){
			target = $('#'+str);
			Common.topScrollFunc(target);
			return false;
		}else if($('#'+str2)[0]){
			target = $('#'+str2);
			if(this.getAttribute('data-partystyle')) {
				var num = this.getAttribute('data-partystyle');
				Common.topScrollFunc(target, null, function(){
					$('#Party [data-slide-num="' + num + '"]').trigger('click');
				});
			}else{
				Common.topScrollFunc(target);
			}
			Common.topScrollFunc(target);
			return false;
		}else{
		}
	});
	
	//é›»è©±
	$('[data-tel]').each(function(index, element) {
		if(Modernizr.touchevents){//ã‚¿ãƒƒãƒãƒ‡ãƒã‚¤ã‚¹ã®ã¨ã
			element.setAttribute('href', 'tel:' + element.getAttribute('data-tel').replace((new RegExp('-', "g")) ,''));
		}
	});
	
	//hoverä»£ã‚ã‚Š
	(function() {
		$(document).on('touchstart pointerdown', '*:not(html, body, main)', function(){
			if(this.getAttribute('class')){
				this.setAttribute('class', this.getAttribute('class') + ' hover');
			}else{
				this.setAttribute('class', 'hover');
			}
		});
		$(document).on('touchend pointerup', '*:not(html, body, main)', function(){
			$(this).removeClass('hover');
		});
		$(document).on('touchcancel pointercancel', '*:not(html, body, main)', function(){
			$(this).removeClass('hover');
		});
	})();
	
	//ç”»é¢ã«é ˜åŸŸãŒç¾ã‚ŒãŸã¨ãã«ãƒšãƒ¼ã‚¸ãƒ—ãƒ©ã‚°ã‚¤ãƒ³ã‚’èª­ã¿è¾¼ã¿
	(function(){
		if($('[data-fbpage]')[0]){
			$('[data-fbpage]').each(function(index, element) {
				$(element).on('inview', function(event, isInView, visiblePartX, visiblePartY) {
					if(isInView){
						$(element).html('<div class="fb-page" data-href="' + $(element).attr('data-fbpage') + '" data-tabs="timeline" data-height="210" data-width="'+$(element).width()+'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"></div>');
						if(window.FB)window.FB.XFBML.parse();
					}
				});
			});
		}
	})();
	
	//ç”»é¢ã‚µã‚¤ã‚ºå¤‰æ›´ã‚¤ãƒ™ãƒ³ãƒˆ
	var switchResizeInit = true,
		switchResizeName = '',
		oldWidth;
	
	$(window).on('resize', function(){
		if($('html,body').scrollTop() !=0){
			s = $('html,body').scrollTop();
		}else{
			s = $(document).scrollTop();
		}
		w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		h = $(window).height();
		
		//viewportèª¿ç¯€
		if(switchResizeName == ''){
			if(500 < w){//500ä»¥ä¸Š
				$('[name="viewport"]').attr('content', '');
			}else{
				$('[name="viewport"]').attr('content', 'width=device-width,initial-scale=1.0,user-scalable=yes,maximum-scale=1.0,minimum-scale=1.0');
			}
		}
		
		if(640 < w){//pc
			//PCã‹ã‚¹ãƒžãƒ›ã‹åˆ‡ã‚Šæ›¿ã‚ã£ãŸåˆ¤å®š
			if(switchResizeName != 'pc'){
				switchResizeName = 'pc';
				switchResizeInit = true;
				
				//styleã‚’æŒ‡å®š
				$('[data-sc-sp-style]').each(function(index, element) {
					element.style = '';
				});
			}
		}else{//smart
			
			//PCã‹ã‚¹ãƒžãƒ›ã‹åˆ‡ã‚Šæ›¿ã‚ã£ãŸåˆ¤å®š
			if(switchResizeName != 'sp'){
				switchResizeName = 'sp';
				switchResizeInit = true;
				
				//styleã‚’æŒ‡å®š
				$('[data-sc-sp-style]').each(function(index, element) {
					element.style = element.getAttribute('data-sc-sp-style');
				});
			}
		}
		
		//PCã‹ã‚‰ã‚¹ãƒžãƒ›ã€ã‚¹ãƒžãƒ›ã‹ã‚‰PCã¸ç¹Šç¶­ã—ãŸã¨ãä¸€åº¦ã ã‘å®Ÿè¡Œ
		if(switchResizeInit){
			switchResizeInit = false;
			$('[data-loadfile-area]').attr('data-loadfile-area', '0');
			
			//data-loadfile-area è¦ç´ ã‚’èª­ã¿è¾¼ã‚€
			$('[data-loadfile-area]').off('.loadfile');
			$('[data-loadfile-area]').each(function(index, element) {
				$(element).on('inview.loadfile', function(event, isInView, visiblePartX, visiblePartY){
					if(isInView){
						if(element.getAttribute('data-loadfile-area') == '1') return true;
						$(element).attr('data-loadfile-area', '1');
						$(element).find('[data-loadfile]').each(function(index1, element1) {
							loadfileChech(element1);
						});
						loadfileChech(element);
					}
				});
			});
		}
		
		//å¹…ã®ã¿ãƒªã‚µã‚¤ã‚ºã•ã‚ŒãŸã¨ã
		if(oldWidth != w){
			oldWidth = w;
			
			Common.setAlignElem();
		}
		$(window).trigger('scroll');
	});
	
	//ã‚¹ãƒžãƒ›ã€ã‚¿ãƒ–ãƒ¬ãƒƒãƒˆã®ç¸¦æ¨ªæ¤œçŸ¥
	(function() {
		if(Modernizr.touchevents) {
			var defaultOrientation; // window.orientationãŒ0ã¾ãŸã¯180ã®æ™‚ã«ç¸¦é•·ã§ã‚ã‚Œã°true
			var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			var firstFlg = false;
			
			if('orientation' in window) {
				var o1 = (window.innerWidth < window.innerHeight);
				var o2 = (window.orientation % 180 == 0);
				defaultOrientation = (o1 && o2) || !(o1 || o2);
			}
			
			var orientationEvent = 'orientationchange';
			$(window).on(orientationEvent, function(){
				if('orientation' in window) {
					// defaultOrientationãŒtrueã®å ´åˆã€window.orientationãŒ0ã‹180ã®æ™‚ã¯ç¸¦é•·
					// defaultOrientationãŒfalseã®å ´åˆã€window.orientationãŒ-90ã‹90ã®æ™‚ã¯ç¸¦é•·
					var o = (window.orientation % 180 == 0);
					if((o && defaultOrientation) || !(o || defaultOrientation)) {
						// ã“ã“ã«ç¸¦é•·ç”»é¢ã¸ã®åˆ‡ã‚Šæ›¿ãˆå‡¦ç†ã‚’è¨˜è¿°
						//console.log('portrait');
					}else {
						// ã“ã“ã«æ¨ªé•·ç”»é¢ã¸ã®åˆ‡ã‚Šæ›¿ãˆå‡¦ç†ã‚’è¨˜è¿°
						//console.log('landscape');
					}
					//ç”»é¢ã‚µã‚¤ã‚ºãŒ640ä»¥ä¸‹ã®ã¨ã
						if(firstFlg) location.reload();
						firstFlg = true;
				}
			}).trigger(orientationEvent);
		}
	})();
	
	//ç”»é¢ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«å‡¦ç†
	var	sVecSta = '';//ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«çŠ¶æ…‹
	$(window).on('scroll', function() {
		if($('html,body').scrollTop() !=0){
			s = $('html,body').scrollTop();
		}else{
			s = $(document).scrollTop();
		}
		
		Cookies.set('scrollval', s);
		
		//ãƒ˜ãƒƒãƒ€ãƒ¼éš ã‚Œã‚‹
		if(100 < s){
			if(!$('#HeaderArea').hasClass('hide')) $('#HeaderArea').addClass('hide');
			if(!$('#SideFlowBtn').hasClass('lower_view')) $('#SideFlowBtn').addClass('lower_view');
			if(!$('#SPPullupNav').hasClass('enable')) $('#SPPullupNav').addClass('enable');
		}else{
			if( $('#HeaderArea').hasClass('hide')) $('#HeaderArea').removeClass('hide');
			if( $('#SideFlowBtn').hasClass('lower_view')) $('#SideFlowBtn').removeClass('lower_view');
			if( $('#SPPullupNav').hasClass('enable')) $('#SPPullupNav').removeClass('enable');
		}
		
		//PageTop éš ã™
		if(s < h){
			if(!$('#PageTop').hasClass('hide')) $('#PageTop').addClass('hide');
		}else{
			if( $('#PageTop').hasClass('hide')) $('#PageTop').removeClass('hide');
		}
			
		$('[data-pararax01-parent]').each(function(index, element) {
			var pos = $(element).position().top;
			if(pos < $(window).height()+s){
				TweenMax.set($(element).find('[data-pararax01-child]'), {top:-(($(window).height()+s) - pos)*0.2});
			}
		});
		
	
		//[data-pararaxarea01] è¿½å¾“
		$('[data-pararaxarea01]').each(function(index, element) {
			var val = parseInt($(this).position().top);
			if(s < val-90){
				if( $(this).hasClass('fix')) $(this).removeClass('fix');
			}else if(val-90 <= s && s < val+$(this).outerHeight()-h){
				if(!$(this).hasClass('fix')) $(this).addClass('fix');
				if( $(this).hasClass('remove')) $(this).removeClass('remove');
			}else{
				if(!$(this).hasClass('remove')) $(this).addClass('remove');
			}
		});

		//[data-pararaxarea02] è¿½å¾“
		//$('[data-pararaxarea02]').each(function(index, element) {
		//	var val = parseInt($(this).position().top);
		//	if(s < val-90){
		//		if( $(this).hasClass('fix')) $(this).removeClass('fix');
		//	}else if(val-90 <= s && s < val+$(this).outerHeight()-h){
		//		if(!$(this).hasClass('fix')) $(this).addClass('fix');
		//		if( $(this).hasClass('remove')) $(this).removeClass('remove');
		//	}else{
		//		if(!$(this).hasClass('remove')) $(this).addClass('remove');
		//	}
		//});
	});
	$(window).trigger('resize');
	
	function loadfileChech(ele, result, string){
		if(ele.getAttribute('data-loadfile')){
			string = 'data-loadfile';
			if(640 < w){//pc
				if(ele.getAttribute('data-loadfile-pc')) string = 'data-loadfile-pc';
			}else{//smart
				if(ele.getAttribute('data-loadfile-sp')) string = 'data-loadfile-sp';
			}
			
			//ã™ã§ã«èª­ã¿è¾¼ã¾ã‚Œã¦ã„ã‚‹ã¨ã
			result = true;
			switch(ele.tagName){
				case 'IMG':
					if(ele.getAttribute('src') == ele.getAttribute(string)) result = false;
					break;
				default:
					//ã‚¤ãƒ³ãƒ©ã‚¤ãƒ³ã‚¹ã‚¿ã‚¤ãƒ«ã«ãƒ•ã‚¡ã‚¤ãƒ«åãŒå«ã¾ã‚Œã‚‹å ´åˆ
					if(ele.getAttribute('style')){
						if(ele.getAttribute('style').split(ele.getAttribute(string)).length > 1) result = false;
					}
					break;
			}
			
			//èª­ã¿è¾¼ã¾ã‚Œã¦ã„ãªã„ã¨ã
			if(result) loadfile(ele, string);
		}else{
			if(640 < w){//pc
				loadfile(ele, 'data-loadfile-pc');
			}else{//smart
				loadfile(ele, 'data-loadfile-sp');
			}
		}
	}
	
	function loadfile(element, attr){
		if(!element.getAttribute(attr)){
			switch(element.tagName){
				case 'IMG':
					element.setAttribute('src', '');
					break;
				default:
					var withstyle = '';
					if(element.getAttribute('style')) withstyle = element.getAttribute('style');
					withstyle = withstyle.replace(/(background-image).*\);/g, '');
					element.setAttribute('style', withstyle);
					break;
			}
			return false;
		}
		
		var image = new Image();
		var ImageLoadFunc = function(){
			//è¡¨ç¤º
			switch(element.tagName){
				case 'IMG':
					element.setAttribute('src', image.src);
					break;
				default:
					var withstyle = '';
					if(element.getAttribute('style')) withstyle = element.getAttribute('style');
					withstyle = withstyle.replace(/(background-image).*\);/g, '');
					element.setAttribute('style', withstyle+'background-image:url('+image.src+');');
					break;
			}
			
			//ã‚¤ãƒ™ãƒ³ãƒˆè§£é™¤
			if(image.addEventListener){// ã‚¤ãƒ™ãƒ³ãƒˆãƒªã‚¹ãƒŠãƒ¼ã«å¯¾å¿œã—ã¦ã„ã‚‹
				image.removeEventListener("load",ImageLoadFunc);
			}else if(image.attachEvent){// ã‚¢ã‚¿ãƒƒãƒã‚¤ãƒ™ãƒ³ãƒˆã«å¯¾å¿œã—ã¦ã„ã‚‹
				image.detachEvent("onload",ImageLoadFunc);
			}else{// ã‚¤ãƒ™ãƒ³ãƒˆãƒãƒ³ãƒ‰ãƒ©ã‚’ä½¿ç”¨ã™ã‚‹
				//image.onload = ImageLoadFunc;
			}
		}
		
		//ã‚¤ãƒ™ãƒ³ãƒˆç™»éŒ²
		if(image.addEventListener){// ã‚¤ãƒ™ãƒ³ãƒˆãƒªã‚¹ãƒŠãƒ¼ã«å¯¾å¿œã—ã¦ã„ã‚‹
			image.addEventListener("load",ImageLoadFunc);
		}else if(image.attachEvent){// ã‚¢ã‚¿ãƒƒãƒã‚¤ãƒ™ãƒ³ãƒˆã«å¯¾å¿œã—ã¦ã„ã‚‹
			image.attachEvent("onload",ImageLoadFunc);
		}else{// ã‚¤ãƒ™ãƒ³ãƒˆãƒãƒ³ãƒ‰ãƒ©ã‚’ä½¿ç”¨ã™ã‚‹
			image.onload = ImageLoadFunc;
		}
		
		//èª­ã¿è¾¼ã¿é–‹å§‹
		image.src = element.getAttribute(attr);
	}
	
	
	//ã‚¹ãƒžãƒ›ãƒ¡ãƒ‹ãƒ¥ãƒ¼ãƒœã‚¿ãƒ³ã®é–‹é–‰
	(function() {
		$('#MenuBtn').on('click', function(){
			if($('#HeaderArea').hasClass('menuOn')){//é–‰ã˜ã‚‹
				$('#HeaderArea').removeClass('menuOn');
			}else{//é–‹ã
				$('#HeaderArea').addClass('menuOn');
			}
		});
		
		//ãƒ¡ãƒ‹ãƒ¥ãƒ¼ã‚’ã‚¯ãƒªãƒƒã‚¯ã—ãŸã‚‰ã‚¹ãƒžãƒ›ãƒ¡ãƒ‹ãƒ¥ãƒ¼ç”»é¢ã‚’é–‰ã˜ã‚‹
		$('#HeaderArea .row02 .links01 a').on('click', function(){
			if(w <= 640) $('#HeaderArea').removeClass('menuOn');
		});
	})();
	
	(function(){
		//loop img
		$('[data-imgloop01]').each(function(index, element) {
			var unique = Math.floor(Math.random()*1000000),
				arrow = element.getAttribute('data-imgloop01'),
				option = arrow.split(','),
				time = parseInt(option[0]),
				imgsource = option[2],
				imgsourceSP;
			
			var	imgE;
			if(option.length > 3){
				imgsourceSP = option[3];
				imgE = $('<img data-loadfile data-loadfile-pc="'+imgsource+'" data-loadfile-sp="'+imgsourceSP+'">');
			}else{
				imgE = $('<img data-loadfile="'+imgsource+'">');
			}
			
			var	script = '';
			script+='[data-imgloop01="'+unique+'"]>*>img{';
			script+='	-webkit-animation:imgloop'+unique+' '+time+'s linear infinite;';
			script+='	-o-animation:imgloop'+unique+' '+time+'s linear infinite;';
			script+='	-ms-animation:imgloop'+unique+' '+time+'s linear infinite;';
			script+='	animation:imgloop'+unique+' '+time+'s linear infinite;';
			script+='}';
			script+='@media screen and (max-width:640px) {';
			script+='	[data-imgloop01="'+unique+'"]>*>img{';
			script+='		-webkit-animation:none;';
			script+='		-o-animation:none;';
			script+='		-ms-animation:none;';
			script+='		animation:none;';
			script+='	}';
			script+='}';
	
			if(option[1] && option[1] == 'right'){
				script += '@-webkit-keyframes imgloop'+unique+'{from{-webkit-transform:translateX(-100%);transform:translateX(-100%);}to{-webkit-transform:translateX(0%);transform:translateX(0%);}}@-moz-keyframes imgloop'+unique+'{from{-moz-transform:translateX(-100%);transform:translateX(-100%);}to{-moz-transform:translateX(0%);transform:translateX(0%);}}@-ms-keyframes imgloop'+unique+'{from{-ms-transform:translateX(-100%);transform:translateX(-100%);}to{-ms-transform:translateX(0%);transform:translateX(0%);}}@-o-keyframes imgloop'+unique+'{from{-o-transform:translateX(-100%);transform:translateX(-100%);}to{-o-transform:translateX(0%);transform:translateX(0%);}}@keyframes imgloop'+unique+'{from{-ms-transform:translateX(-100%);transform:translateX(-100%);}to{-ms-transform:translateX(0%);transform:translateX(0%);}}';
			}else{
				script += '@-webkit-keyframes imgloop'+unique+'{from{-webkit-transform:translateX(0%);transform:translateX(0%);}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);}}@-moz-keyframes imgloop'+unique+'{from{-moz-transform:translateX(0%);transform:translateX(0%);}to{-moz-transform:translateX(-100%);transform:translateX(-100%);}}@-ms-keyframes imgloop'+unique+'{from{-ms-transform:translateX(0%);transform:translateX(0%);}to{-ms-transform:translateX(-100%);transform:translateX(-100%);}}@-o-keyframes imgloop'+unique+'{from{-o-transform:translateX(0%);transform:translateX(0%);}to{-o-transform:translateX(-100%);transform:translateX(-100%);}}@keyframes imgloop'+unique+'{from{-ms-transform:translateX(0%);transform:translateX(0%);}to{-ms-transform:translateX(-100%);transform:translateX(-100%);}}';
			}
			
			var moveEle = $('<div></div>');
			$(element).append(moveEle);
			moveEle.append(imgE.clone()).append(imgE.clone()).append(imgE.clone());
			
			$(element).append('<style type="text/css">'+script+'</style>');
			element.setAttribute('data-imgloop01', unique);
			
			//ç”»é¢ã‚µã‚¤ã‚ºå¤‰æ›´ã‚¤ãƒ™ãƒ³ãƒˆ
			var oldWidth;
			$(window).on('resize.imgloop'+unique, function(){
				//å¹…ã®ã¿ãƒªã‚µã‚¤ã‚ºã•ã‚ŒãŸã¨ã
				if(oldWidth != w){
					oldWidth = w;
					
					if(w <= 640){
						if(option[1] && option[1] == 'right'){
							TweenMax.fromTo('[data-imgloop01="'+unique+'"]>*>img', time, {x:'-100%%'}, {x:'0%', ease:Power0.easeNone, repeat:-1});
						}else{
							TweenMax.fromTo('[data-imgloop01="'+unique+'"]>*>img', time, {x:'0%'}, {x:'-100%', ease:Power0.easeNone, repeat:-1});
						}
					}else{
						TweenMax.killTweensOf('[data-imgloop01="'+unique+'"]>*>img');
						$('[data-imgloop01="'+unique+'"]>*>img').removeAttr('style');
					}
				}
			}).trigger('resize.imgloop'+unique);
		});
	})();
	
	
	//ã‚¢ã‚¯ã‚»ã‚¹
	(function(){
		if('google' in window) {
		}else{
			return false;
		}
		//googlemap æº–å‚™
		google.maps.event.addDomListener(window, 'load', function(){
			googlemapFlg = true;
		});
		
		//access åœ°å›³è¡¨ç¤º
		$('#map_canvas').one('inview', function() {
			function initialize() {
				var mapArea = document.getElementById('map_canvas');//æç”»ã™ã‚‹ã‚¨ãƒªã‚¢
				var ua = navigator.userAgent;//ãƒ¦ãƒ¼ã‚¶ãƒ¼ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆ
				
				
				//åœ°å›³æƒ…å ±
				var viewcenterSource = mapArea.getAttribute("data-googlemap").split(',');//è¡¨ç¤ºä½ç½®æƒ…å ±
				var myOptions = {
					mapTypeControl: false,
					streetViewControl: false,
					disableDoubleClickZoom: true, //ãƒ€ãƒ–ãƒ«ã‚¯ãƒªãƒƒã‚¯ã«ã‚ˆã‚‹æ‹¡å¤§
					scrollwheel: false, //ãƒžã‚¦ã‚¹ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«
					center: (new google.maps.LatLng(viewcenterSource[0], viewcenterSource[1])),
					draggable: true //ãƒ‰ãƒ©ãƒƒã‚°
				};
				if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0) {
					myOptions.zoom = parseInt(mapArea.getAttribute("data-googolemap-sp-zoom"));
					myOptions.draggable = false;
				} else {
					myOptions.zoom = parseInt(mapArea.getAttribute("data-googolemap-pc-zoom"));
					myOptions.draggable = true;
				}
				var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
				/*var sampleType = new google.maps.StyledMapType([{
					"stylers": [{
						"saturation": -100
					}, {
						"lightness": 10
					}, {
						"gamma": 0.88
					}]
				}], {name:'ãƒ¢ãƒŽã‚¯ãƒ­ã‚°ãƒ¬ãƒ¼'});*/
				//map.mapTypes.set('color01', sampleType);
				//map.setMapTypeId('color01');
				
				
				//ãƒ¡ã‚¤ãƒ³ã®ãƒ”ãƒ³ã‚’è¨­å®š
				var mainPinimg = {
					url: '/common/img/map_icon.png'
				};//ãƒ”ãƒ³ã®ç”»åƒ
				if(mapArea.getAttribute("data-googlemap-mainpin-image")){
					mainPinimg.url = mapArea.getAttribute("data-googlemap-mainpin-image");
				}
				var mainPinSource = mapArea.getAttribute("data-googlemap-mainpin").split(',');//ãƒ¡ã‚¤ãƒ³ã®ãƒ”ãƒ³ã®ä½ç½®æƒ…å ±
				if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0) {
					mainPinimg.scaledSize = new google.maps.Size(106, 36);//ã‚µã‚¤ã‚º
					mainPinimg.anchor = new google.maps.Point(53, 36);//åŽŸç‚¹
				} else {
					mainPinimg.scaledSize = new google.maps.Size(212, 72);//ã‚µã‚¤ã‚º
					mainPinimg.anchor = new google.maps.Point(106, 72);//åŽŸç‚¹
				}
				var mainPin = new google.maps.Marker({
					position: (new google.maps.LatLng(parseFloat(mainPinSource[0]), parseFloat(mainPinSource[1]))),// ä½ç½®
					map: map,// ãƒ”ãƒ³ã‚’ç«‹ã¦ã‚‹åœ°å›³
					icon: mainPinimg// ã‚¢ã‚¤ã‚³ãƒ³
				});
				
			}
			
			if(googlemapFlg) initialize();
			else google.maps.event.addDomListener(window, 'load', initialize);
		});
	})();
});
