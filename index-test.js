//è‡ªå‹•ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ç„¡åŠ¹åŒ–
Common.disableScrollInView = false;

$(function(){
	
	//ç”»é¢è¡¨ç¤ºæ™‚ã«ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«
	var scrollEnableCheckCount = 0;
	function scrollEnableCheckFunc(){
		scrollEnableCheckCount++;
		if(scrollEnableCheckCount >= 1){
			var ele = $('#'+location.hash.split('scroll-')[1]);
			Common.topScrollFunc(ele);
		}
	}
	
	/*//hashã¤ã‘ã‚‹ã‚¨ãƒªã‚¢
	$('#HeaderArea .row02 .links01 a, #SideFlowBtn .link').each(function(index, element) {
		var val = element.getAttribute('href').split('scroll-')[1];
		$('#'+val).on('inview', function(e, isInView, visiblePartX, visiblePartY){
			if(isInView){
				location.hash = 'scroll-'+val;
			}
		});
	});*/
	
	//ã•ãã‚‰
	(function(){
		var useimages = [];
		var useimageIndex = 0;
		for(var i = 0; i < 20; i++){
			useimages.push((Math.random() > 0.75)?'img/hane.gif?a='+Math.random():'img/hane01.gif?a='+Math.random());
		}
		var w = $(window).width();
		var loopTime = 350;
		var inviewFlg = false;
		//ãƒ•ãƒªãƒƒã‚¯ã‚¨ãƒªã‚¢ãŒè¦‹ãˆãŸã¨ãã«è‡ªå‹•å‡¦ç†ã‚’æœ‰åŠ¹ã«ã™ã‚‹
		$('#HaneArea').on('inview', function(e, isInView, visiblePartX, visiblePartY) {
			if(isInView){
				inviewFlg = false;
			}else{
				inviewFlg = true;
			}
		});
		if(640 < w && w <= 1000) loopTime = 500;
		else if(w <= 640) loopTime = 700;
		var mainLoop = setInterval(function(){
			if(Common.pageHideFlg) return false;
			if(inviewFlg) return false;
			if($(window).width() <= 640) return false;
			useimageIndex++;
			if(useimages.length <= useimageIndex) useimageIndex = 0;
			var toX = (Math.random()*1000)-500;
			var fromX = (($('#HaneArea').width()*1.5)*Math.random())-($('#HaneArea').width()*0.5);
			
			var sakuraWrap = $('<div class="sakuraWrap"><div class="sakuraWrap01"><div class="sakura" style="background-image:url('+useimages[useimageIndex]+');"></div></div></div>');
			var sakuraWrap01 = sakuraWrap.find('.sakuraWrap01');
			var sakura = sakuraWrap.find('.sakura');
			var sakuraSca = Math.floor(Math.pow(2,Math.random()*3.6))/3;
			sakuraSca = Math.min(1, sakuraSca);
			TweenMax.set(sakura, {scale:sakuraSca, alpha:0});
			TweenMax.to(sakura, 1.0, {alpha:1});
			$('#HaneArea').append(sakuraWrap);
			TweenMax.fromTo(sakuraWrap, (6-(3*sakuraSca))+3+(2.0*Math.random()), {top:'-50%', x:fromX}, {top:'100%', x:fromX+toX, ease:Linear.easeNone, onComplete:function(){
				sakuraWrap.remove();
				TweenMax.killTweensOf(sakura);
				TweenMax.killTweensOf(sakuraWrap01);
				TweenMax.killTweensOf(sakuraWrap);
			}});
			
			//ã‚ˆã“ãµã‚ãµã‚
			function fuwafuwaX(val){
				val = (Math.random()*300)*sakuraSca;
				if(0.5 <= Math.random()) val *= -1;
				TweenMax.to(sakuraWrap01, ((val/200)+10)*sakuraSca, {x:val, ease:Power3.easeInOut, onComplete:fuwafuwaX});
			}
			fuwafuwaX();
			
			//ãŸã¦ãµã‚ãµã‚
			function fuwafuwaY(val){
				val = Math.floor(Math.pow(2,Math.random()*5))*sakuraSca;
				if(10 <= val) val = -val;
				val *= 5;
				TweenMax.to(sakura, 4+(4*sakuraSca), {y:val, ease:Power3.easeInOut, onComplete:fuwafuwaY});
			}
			fuwafuwaY();
		}, loopTime);
	})();
	
	//topics
	var topics_fair = [],
		topics_plan = [],
		topics_tokuten = [],
		topics_blog = [],
		topics_fairCheck = false;
	(function(){
		//topicsç”¨ã®ãƒ—ãƒ©ãƒ³
		$('#Plan .content .link').each(function(index, element) {
			topics_plan.push(element);
		});
		//topicsç”¨ã®ç‰¹å…¸
		$('#Privilege .sec01Content').each(function(index, element) {
			topics_tokuten.push(element);
		});
		//topicsç”¨ã®ãƒ–ãƒ­ã‚°
		$('#Blog .topicsfile .link').each(function(index, element) {
			topics_blog.push(element);
		});
		
		var checkLoop = setInterval(function(){
			if(topics_fairCheck){//JSç”Ÿæˆã•ã‚Œã‚‹è¦ç´ ãŒå‡ºç¾ã—ãŸã¨ã
				clearInterval(checkLoop);
				$('[data-slidearea01]').each(function(index, element) {
					var slidearea = $(this).find('.content'),
						slides = slidearea.find('.link'),
						slidesWithDammy,
						length = slides.length-1,
						pager,
						pagers,
						now = -1,
						prev = $(this).find('.prev'),
						next = $(this).find('.next'),
						loop,
						loopDur = 6000,
						flickFlg = false,
						flickArea = $(this).find('.contentWrapIn'),
						flickPosXBefore = 0,
						flickPosXNow = 0,
						flickPosXFirst = 0,
						flickPosYBefore = 0,
						flickPosYNow = 0,
						flickPosYFirst = 0,
						flickArrow,
						flickLoop,
						flickAnimTimeFlg = false;
						
					
					//ãƒ•ã‚§ã‚¢
					var autoheightVal = $(element).find('.content').attr('data-autoheight');
					var autoheightVal2 = Math.random();
					for(var i = 0; i < topics_fair.length; i++){
						var result = '';
						var element = $(topics_fair[i]);
						result += '<a class="link" href="' + element.find('a').attr('href') + '">';
						result +=  '<article class="in" data-autoheight="' + autoheightVal + '">';
						result +=   '<div class="imgarea">';
						if(element.find('.img').attr('data-photoscr') || element.find('.img').attr('data-photoscr') != undefined){
						result +=	'<div class="img">';
						}else{
						result +=	'<div class="img noimage">';
						}
						result +=	 '<time datetime="' + element.find('.fairdate').attr('datetime') + '" class="mark type01">';
						result +=	  '<span class="lines">';
						result +=	   '<span class="line01">' + element.attr('data-fairmonth') + '.' + element.attr('data-fairday') + '</span>';
						result +=	   '<span class="line02">ï¼ˆ' + element.attr('data-fairweek') + 'ï¼‰</span>';
						result +=	  '</span>';
						result +=	 '</time>';
						result +=	'</div>';
						result +=   '</div>';
						result +=   '<p class="cate"><img src="img/txt02_01.png" width="52" height="38" alt="ãƒ–ãƒ©ã‚¤ãƒ€ãƒ«ãƒ•ã‚§ã‚¢"></p>';
						result +=   '<p class="title" data-autoheight="' + autoheightVal2  +'">' + element.find('.fairtitle').text() + '</p>';
						result +=   '<p class="caption">' + element.find('.faircaption').text() + '</p>';
						result +=  '</article>';
						result += '</a>';
						var ne = $(result);
						slidearea.append(ne);
						//ne.find('.img').attr('style', 'background-image:url('+element.find('.img').attr('data-photoscr')+');');
						ne.find('.img').attr('data-loadfile', element.find('.img').attr('data-photoscr'));
					}
					
					//ãƒ—ãƒ©ãƒ³
					/*for(var i = 0; i < topics_plan.length; i++){
						var result = '',
							element = $(topics_plan[i]),
							planVal = element.find('.plancontentTxt').text();
						if(planVal.length > 50){
							planVal = planVal.substr(0,50) + '...';
						}
						var titleVal = element.find('.plancontentTitle b').text();
						
						result += '<a class="link" href="#scroll-Plan">';
						result +=  '<article class="in" data-autoheight="' + autoheightVal + '">';
						result +=   '<div class="imgarea">';
						result +=	'<div class="img">';
						result +=	'</div>';
						result +=   '</div>';
						result +=   '<p class="cate"><img src="img/txt02_02.png" width="62" height="37" alt="ãƒ—ãƒ©ãƒ³"></p>';
						result +=   '<p class="title" data-autoheight="' + autoheightVal2  +'">' + titleVal + '</p>';
						result +=   '<p class="caption">' + planVal + '</p>';
						result +=  '</article>';
						result += '</a>';
						var ne = $(result);
						slidearea.append(ne);
						ne.find('.img').attr('style', 'background-image:url('+ element.find('.plancontentImg').attr('data-loadfile')+');');
					}*/
					(function(){
						var result = '';
						result += '<a class="link" href="#scroll-Party">';
						result +=  '<article class="in" data-autoheight="' + autoheightVal + '">';
						result +=   '<div class="imgarea">';
						result +=	'<div class="img">';
						result +=	 '<div class="mark type01">';
						result +=	  '<span class="lines">';
						result +=	   '<span class="line04">å°‘äººæ•°ã«ã‚‚<br>ãŠã™ã™ã‚</span>';
						result +=	  '</span>';
						result +=	 '</div>';
						result +=	'</div>';
						result +=   '</div>';
						result +=   '<p class="cate"><img src="img/txt02_04.png" width="82" height="38" alt="ãƒˆãƒ”ãƒƒã‚¯ã‚¹"></p>';
						result +=   '<p class="title" data-autoheight="' + autoheightVal2  +'">ã€40åæ§˜ã¾ã§çµå©šå¼ã«ã‚ªã‚¹ã‚¹ãƒ¡ã€‘ã€€å°‘äººæ•°å°‚ç”¨ãƒ¬ã‚¹ãƒˆãƒ©ãƒ³ã§ã‚¢ãƒƒãƒˆãƒ›ãƒ¼ãƒ ãƒ‘ãƒ¼ãƒ†ã‚£ã‚’</p>';
						result +=   '<p class="caption">6ï½ž40åæ§˜å‰å¾Œã®è¦ªã—ã„ã‚²ã‚¹ãƒˆã¨ã€ãŠåº­ã¤ããƒ¬ã‚¹ãƒˆãƒ©ãƒ³ã§ã‚¢ãƒƒãƒˆãƒ›ãƒ¼ãƒ ãªæ™‚é–“ã‚’ãŠéŽã”ã—ãã ã•ã„ã€‚</p>';
						result +=  '</article>';
						result += '</a>';
						var ne = $(result);
						slidearea.append(ne);
						ne.on('click', function(){
							$('#Party [data-slide-num="2"]').trigger('click').trigger('touchstart');
						});
						//ne.find('.img').attr('style', 'background-image:url(img/img22.jpg);');
						ne.find('.img').attr('data-loadfile', 'img/img22.jpg');
					})();
					
					//ç‰¹å…¸
					for(var i = 0; i < topics_tokuten.length; i++){
						var result = '',
							element = $(topics_tokuten[i]),
							planVal = element.find('.sec01ContentDl01 .line02').text();
						if(planVal.length > 50){
							planVal = planVal.substr(0,50) + '...';
						}
						var titleVal = element.find('.sec01ContentDl01 .line01').text();
						
						result += '<a class="link" href="#scroll-Privilege">';
						result +=  '<article class="in" data-autoheight="' + autoheightVal + '">';
						result +=   '<div class="imgarea">';
						result +=	'<div class="img">';
						result +=	'</div>';
						result +=   '</div>';
						result +=   '<p class="cate"><img src="img/txt02_04.png" width="123 " height="38" alt="ç‰¹å…¸"></p>';
						result +=   '<p class="title" data-autoheight="' + autoheightVal2  +'">' + titleVal + '</p>';
						result +=   '<p class="caption">' + planVal + '</p>';
						result +=  '</article>';
						result += '</a>';
						var ne = $(result);
						slidearea.append(ne);
						//ne.find('.img').attr('style', 'background-image:url('+ element.find('.left').attr('data-loadfile')+');');
						ne.find('.img').attr('data-loadfile', element.find('.left').attr('data-loadfile'));
					}
					
					//ãƒ–ãƒ­ã‚°
					for(var i = 0; i < topics_blog.length; i++){
						var result = '',
							element = $(topics_blog[i]),
							planVal = element.find('.caption').text();
						if(planVal.length > 50){
							planVal = planVal.substr(0,50) + '...';
						}
						var titleVal = element.find('.title').text();
						var newIconFlg = element.hasClass('new');
						result += '<a class="link" href="'+element.find('.link01 a').attr('href')+'">';
						result +=  '<article class="in" data-autoheight="' + autoheightVal + '">';
						result +=   '<div class="imgarea">';
						result +=	'<div class="img">';
						if(newIconFlg){
						result +=	 '<time datetime="' + element.find('.date').attr('datetime') + '" class="mark">';
						result +=	  '<span class="lines">';
						result +=	   '<span class="line03">NEW</span>';
						result +=	  '</span>';
						result +=	 '</time>';
						}
						result +=	'</div>';
						result +=   '</div>';
						result +=   '<p class="cate"><img src="img/txt02_03.png" width="150" height="38" alt="ãƒ–ãƒ­ã‚°"></p>';
						result +=   '<p class="title" data-autoheight="' + autoheightVal2  +'">' + titleVal + '</p>';
						result +=   '<p class="caption">' + planVal + '</p>';
						result +=  '</article>';
						result += '</a>';
						var ne = $(result);
						slidearea.append(ne);
						//ne.find('.img').attr('style', 'background-image:url('+ element.find('.img').attr('data-loadfile')+');');
						ne.find('.img').attr('data-loadfile', element.find('.img').attr('data-loadfile'));
					}
					
						
					slides = slidearea.find('.link'),
					length = slides.length-1,
					
					//ç•ªå·ã‚’è¨­å®š
					slides.each(function(i, e) {
						$(e).attr('data-slide-num', i).css({left:100*i+'%'});
						//pager.append('<li data-slide-num="' + i + '"></li>');
					});
					//pagers = pager.children();
					
					$('#Topics').attr('data-loadfile-area', '0');
					$('#Topics').on('inview.loadfile', function(event, isInView, visiblePartX, visiblePartY){
						if(isInView){
							var element = $('#Topics')[0];
							if(element.getAttribute('data-loadfile-area') == '1') return true;
							$(element).attr('data-loadfile-area', '1');
							$(element).find('[data-loadfile]').each(function(index1, element1) {
								loadfileChech(element1);
							});
							loadfileChech(element);
						}
					});
					
					(function(){
						//ç«¯ã®è¦ç´ ã‚’ç”Ÿæˆ
						var closeElesPrev = [],
							closeElesNext = [],
							closeEle,
							closeEleIndex = 3,
							closeEleNow;
							
						//ãƒ€ãƒŸãƒ¼è¦ç´  å‰ ä½œæˆ
						closeEleNow = length+1;
						for(var i = 0; i < closeEleIndex; i++){
							closeEleNow--;
							if(closeEleNow < 0) closeEleNow = length-1;
							var c = slides.eq(closeEleNow).clone();
							$(c).css({left:(-100*(i+1))+'%'});
							closeElesPrev.push($(c));
						}
						//ãƒ€ãƒŸãƒ¼è¦ç´  å¾Œ ä½œæˆ
						closeEleNow = -1;
						for(var i = 0; i < closeEleIndex; i++){
							closeEleNow++;
							if(length < closeEleNow) closeEleNow = 0;
							var c = slides.eq(closeEleNow).clone();
							$(c).css({left:100*(length+(i+1))+'%'});
							closeElesNext.push($(c));
						}
						//ãƒ€ãƒŸãƒ¼è¦ç´ ã‚’ã„ã‚Œã‚‹
						for(var i = 0; i < closeElesPrev.length; i++){
							closeElesPrev[i].addClass('dammy');
							slidearea.prepend(closeElesPrev[i]);
						}
						for(var i = 0; i < closeElesNext.length; i++){
							closeElesNext[i].addClass('dammy');
							slidearea.append(closeElesNext[i]);
						}
						
						slidesWithDammy = slidearea.children();
					})();
				
					//pager
					/*pagers.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), function(e){
						var val = $(this).attr('data-slide-num');
						changeFunc(val);
					});*/
					
					//prevå‡¦ç†
					function prevFunc(){
						var val = -1+now;
						if(val < 0) val = length;
						changeFunc(val, 'prev');
					}
					prev.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), prevFunc);
			
					//next
					function nextFunc(){
						var val = +1+now;
						if(length < val) val = 0;
						changeFunc(val, 'next');
					}
					next.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), nextFunc);
					
					//ãƒ•ãƒªãƒƒã‚¯ã‚¨ãƒªã‚¢ãŒè¦‹ãˆãŸã¨ãã«è‡ªå‹•å‡¦ç†ã‚’æœ‰åŠ¹ã«ã™ã‚‹
					$(this).on('inview', function(e, isInView, visiblePartX, visiblePartY) {
						if(isInView){
							clearInterval(flickLoop);
							flickLoop = setInterval(function(){
								if(flickFlg) flickLoopFunc();
							}, 33);
						}else{
							clearInterval(flickLoop);
						}
					});
					clearInterval(flickLoop);
					flickLoop = setInterval(function(){
						if(flickFlg) flickLoopFunc();
					}, 33);
					
					//flick touchstart
					flickArea.on('touchstart', function(e){
						flickPosXNow = flickPosXBefore = flickPosXFirst = e.originalEvent.changedTouches[0].pageX;
						flickPosYNow = flickPosYBefore = flickPosYFirst = e.originalEvent.changedTouches[0].pageY;
						clearInterval(loop);
						flickFlg = false;
					});
					
					//flick touchmove
					flickArea.on('touchmove', function(e){
						flickPosXNow = e.originalEvent.changedTouches[0].pageX;
						flickPosYNow = e.originalEvent.changedTouches[0].pageY;
						flickPosSetFunc();
						flickFlg = true;
					});
					
					//flick touchend
					flickArea.on('touchend', function(e){
						if(flickFlg){
							switch(flickArrow){
								case 'next':
									flickFlg = false;
									flickAnimTimeFlg = true;
									nextFunc();
									break;
								case 'prev':
									flickFlg = false;
									flickAnimTimeFlg = true;
									prevFunc();
									break;
								default:
									clearInterval(loop);
									loop = setInterval(loopFunc, loopDur);
									
									flickPosResetFunc();
									break;
							}
							flickArrow = 'none';
						}else{
							clearInterval(loop);
							loop = setInterval(loopFunc, loopDur);
						}
						flickFlg = false;
					});
					
					//flick å¸¸æ™‚å‡¦ç†
					function flickLoopFunc(){
						if(Math.abs(flickPosXNow-flickPosXBefore) > 10){//ã‚¿ãƒƒãƒé–‹å§‹ä½ç½®ã‹ã‚‰ä¸€å®šã®è·é›¢ã®å ´åˆ
							if(Math.abs(flickPosYNow-flickPosYBefore) < Math.abs(flickPosXNow-flickPosXBefore)){//Yè»¸ã‚ˆã‚ŠXè»¸ã®ã»ã†ãŒå€¤ãŒå¤§ãã„å ´åˆ
								if(flickPosXNow-flickPosXBefore < 0){//ãƒžã‚¤ãƒŠã‚¹ã®ã¨ã
									flickArrow = 'next';
								}else{
									flickArrow = 'prev';
								}
							}
						}else{
							flickArrow = 'none';
						}
						console.log(flickArrow);
						flickPosXBefore = flickPosXNow;
					}
					function flickPosSetFunc(per){
						per = ((flickPosXFirst-flickPosXNow)/flickArea.width())*100;
						TweenMax.set(slidearea, {x:(-100*now)-per+'%'});
					}
					function flickPosResetFunc(){
						TweenMax.to(slidearea, 0.4, {x:-100*now+'%'});
					}
					
					//ãƒ«ãƒ¼ãƒ—å‡¦ç†
					function loopFunc(){
						//ãƒšãƒ¼ã‚¸ãŒéžè¡¨ç¤ºã®ã¨ãã¯ä¸­æ–­
						if(Common.pageHideFlg)return false;
						
						nextFunc();
					}
					
					//ã‚¹ãƒ©ã‚¤ãƒ‰ã®å‡¦ç†
					function changeFunc(num, arrow, target, targetP){
						//slide active
						slidesWithDammy.removeClass('active');
				
						//slide
						var moveNum = num;
						if(2 <= length){
							if(length == now && num == 0) moveNum = length+1;
							if(0 ==  now && num == length) moveNum = -1;
						}else{
							if(num == 0 && arrow == 'next') moveNum = length+1;
							if(num == length && arrow == 'prev') moveNum = -1;
						}
						
						var time = 0.4;
						if(flickAnimTimeFlg){
							time = 0.2;
							flickAnimTimeFlg = false;
						}
						TweenMax.to(slidearea, time, {x:-100*moveNum+'%', onComplete:function(){
							TweenMax.set(slidearea, {x:-100*num+'%'});
							
							//slide active
							var activeTarget = slidearea.find('[data-slide-num="'+now+'"]');
							activeTarget.addClass('active');
						}});
				
						//pager
						/*target = pagers.eq(num);
						pagers.removeClass('active');
						target.addClass('active');*/
						
						//loop
						clearInterval(loop);
						loop = setInterval(loopFunc, loopDur);
				
						//
						now = num;
					}
					changeFunc(0);
					
					//ãã‚ãˆã‚‹
					TweenMax.set('body', {delay:0.5, onComplete:function(){
						Common.setAlignElem();
					}});
				});
			}
		}, 33);
	})();
	
	//ã‚³ãƒ³ã‚»ãƒ—ãƒˆ
	(function(){
		$('#Art01').one('inview', function(e, isInView, visiblePartX, visiblePartY) {
			$('#Art01 .before').addClass('inview');
		});
	})();
	
	
	//ã‚¦ã‚¨ãƒ‡ã‚£ãƒ³ã‚°
	(function(){
		$('[data-slidearea04]').each(function(index, element) {
			var slidearea = $(this).find('.content'),
				slides = slidearea.find('.link'),
				slidesWithDammy,
				length = slides.length-1,
				pager = $(this).find('.pager'),
				pagers,
				now = -1,
				prev = $(this).find('.prev'),
				next = $(this).find('.next'),
				loop,
				loopDur = 6000,
				flickFlg = false,
				flickArea = $(this).find('.contentWrapIn'),
				flickPosXBefore = 0,
				flickPosXNow = 0,
				flickPosXFirst = 0,
				flickPosYBefore = 0,
				flickPosYNow = 0,
				flickPosYFirst = 0,
				flickArrow,
				flickLoop,
				flickAnimTimeFlg = false;
				
			var captions = $(this).find('.captions li'),
				thumb = $(this).find('.thumb'),
				thumbs;
				
			var selectbtns = $('.plancontentSlidebtn li');
			
			//ç•ªå·ã‚’è¨­å®š
			slides.each(function(i, e) {
				$(e).attr('data-slide-num', i).css({left:100*i+'%'});
				pager.append('<button data-slide-num="' + i + '"></button>');
				
				//thumb
				if(thumb){
					if(thumb[0]){
						thumb.append('<li data-slide-num="' + i + '"></li>');
						var cl = $(e).clone();
						cl.removeAttr('style').removeAttr('data-autoheight').removeClass('class');
						thumb.find('li').eq(i).append(cl);
					}
				}
				//selectbtns
				if(selectbtns){
					if(selectbtns[0]){
						selectbtns.eq(i).attr('data-slide-num', i);
					}
				}
				
			});
			pagers = pager.children();
			//thumb
			if(thumb){
				if(thumb[0]){
					thumbs = thumb.children();
				}
			}
			
			//inviewã§will-changeã‚’ã‚»ãƒƒãƒˆ
			Common.setWillchangeInviewEvent();
			
			(function(){
				//ç«¯ã®è¦ç´ ã‚’ç”Ÿæˆ
				var closeElesPrev = [],
					closeElesNext = [],
					closeEle,
					closeEleIndex = 3,
					closeEleNow;
					
				//ãƒ€ãƒŸãƒ¼è¦ç´  å‰ ä½œæˆ
				closeEleNow = length+1;
				for(var i = 0; i < closeEleIndex; i++){
					closeEleNow--;
					if(closeEleNow < 0) closeEleNow = length-1;
					var c = slides.eq(closeEleNow).clone();
					$(c).css({left:(-100*(i+1))+'%'});
					closeElesPrev.push($(c));
				}
				//ãƒ€ãƒŸãƒ¼è¦ç´  å¾Œ ä½œæˆ
				closeEleNow = -1;
				for(var i = 0; i < closeEleIndex; i++){
					closeEleNow++;
					if(length < closeEleNow) closeEleNow = 0;
					var c = slides.eq(closeEleNow).clone();
					$(c).css({left:100*(length+(i+1))+'%'});
					closeElesNext.push($(c));
				}
				//ãƒ€ãƒŸãƒ¼è¦ç´ ã‚’ã„ã‚Œã‚‹
				for(var i = 0; i < closeElesPrev.length; i++){
					closeElesPrev[i].addClass('dammy');
					slidearea.prepend(closeElesPrev[i]);
				}
				for(var i = 0; i < closeElesNext.length; i++){
					closeElesNext[i].addClass('dammy');
					slidearea.append(closeElesNext[i]);
				}
				
				slidesWithDammy = slidearea.children();
			})();
		
			//pager
			pagers.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), function(e){
				var val = $(this).attr('data-slide-num');
				changeFunc(val);
			});
			
			//thumb
			if(thumbs){
				if(thumbs[0]){
					thumbs.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), function(e){
						var val = $(this).attr('data-slide-num');
						changeFunc(val);
					});
				}
			}
			
			//selectbtns
			if(selectbtns){
				if(selectbtns[0]){
					selectbtns.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), function(e){
						var val = $(this).attr('data-slide-num');
						changeFunc(val);
					});
				}
			}
			
			//prevå‡¦ç†
			function prevFunc(){
				var val = -1+now;
				if(val < 0) val = length;
				changeFunc(val, 'prev');
			}
			prev.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), prevFunc);
	
			//next
			function nextFunc(){
				var val = +1+now;
				if(length < val) val = 0;
				changeFunc(val, 'next');
			}
			next.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), nextFunc);
			
			//ãƒ•ãƒªãƒƒã‚¯ã‚¨ãƒªã‚¢ãŒè¦‹ãˆãŸã¨ãã«è‡ªå‹•å‡¦ç†ã‚’æœ‰åŠ¹ã«ã™ã‚‹
			$(this).on('inview', function(e, isInView, visiblePartX, visiblePartY) {
				if(isInView){
					clearInterval(flickLoop);
					flickLoop = setInterval(function(){
						if(flickFlg) flickLoopFunc();
					}, 33);
				}else{
					clearInterval(flickLoop);
				}
			});
			
			//flick touchstart
			flickArea.on('touchstart', function(e){
				flickPosXNow = flickPosXBefore = flickPosXFirst = e.originalEvent.changedTouches[0].pageX;
				flickPosYNow = flickPosYBefore = flickPosYFirst = e.originalEvent.changedTouches[0].pageY;
				clearInterval(loop);
				flickFlg = false;
			});
			
			//flick touchmove
			flickArea.on('touchmove', function(e){
				flickPosXNow = e.originalEvent.changedTouches[0].pageX;
				flickPosYNow = e.originalEvent.changedTouches[0].pageY;
				flickPosSetFunc();
				flickFlg = true;
			});
			
			//flick touchend
			flickArea.on('touchend', function(e){
				if(flickFlg){
					switch(flickArrow){
						case 'next':
							flickFlg = false;
							flickAnimTimeFlg = true;
							nextFunc();
							break;
						case 'prev':
							flickFlg = false;
							flickAnimTimeFlg = true;
							prevFunc();
							break;
						default:
							clearInterval(loop);
							loop = setInterval(loopFunc, loopDur);
							
							flickPosResetFunc();
							break;
					}
					flickArrow = 'none';
				}else{
					clearInterval(loop);
					loop = setInterval(loopFunc, loopDur);
				}
				flickFlg = false;
			});
			
			//flick å¸¸æ™‚å‡¦ç†
			function flickLoopFunc(){
				if(Math.abs(flickPosXNow-flickPosXBefore) > 10){//ã‚¿ãƒƒãƒé–‹å§‹ä½ç½®ã‹ã‚‰ä¸€å®šã®è·é›¢ã®å ´åˆ
					if(Math.abs(flickPosYNow-flickPosYBefore) < Math.abs(flickPosXNow-flickPosXBefore)){//Yè»¸ã‚ˆã‚ŠXè»¸ã®ã»ã†ãŒå€¤ãŒå¤§ãã„å ´åˆ
						if(flickPosXNow-flickPosXBefore < 0){//ãƒžã‚¤ãƒŠã‚¹ã®ã¨ã
							flickArrow = 'next';
						}else{
							flickArrow = 'prev';
						}
					}
				}else{
					flickArrow = 'none';
				}
				flickPosXBefore = flickPosXNow;
			}
			function flickPosSetFunc(per){
				per = ((flickPosXFirst-flickPosXNow)/flickArea.width())*100;
				TweenMax.set(slidearea, {x:(-100*now)-per+'%'});
			}
			function flickPosResetFunc(){
				TweenMax.to(slidearea, 0.4, {x:-100*now+'%'});
			}
			
			//ãƒ«ãƒ¼ãƒ—å‡¦ç†
			function loopFunc(){
				//ãƒšãƒ¼ã‚¸ãŒéžè¡¨ç¤ºã®ã¨ãã¯ä¸­æ–­
				if(Common.pageHideFlg)return false;
				
				nextFunc();
			}
			
			//ã‚¹ãƒ©ã‚¤ãƒ‰ã®å‡¦ç†
			function changeFunc(num, arrow, target, targetP){
				//slide active
				slidesWithDammy.removeClass('active');
		
				//slide
				var moveNum = num;
				if(2 <= length){
					if(length == now && num == 0) moveNum = length+1;
					if(0 ==  now && num == length) moveNum = -1;
				}else{
					if(num == 0 && arrow == 'next') moveNum = length+1;
					if(num == length && arrow == 'prev') moveNum = -1;
				}
				
				var time = 0.4;
				if(flickAnimTimeFlg){
					time = 0.2;
					flickAnimTimeFlg = false;
				}
				TweenMax.to(slidearea, time, {x:-100*moveNum+'%', onComplete:function(){
					TweenMax.set(slidearea, {x:-100*num+'%'});
					
					//slide active
					var activeTarget = slidearea.find('[data-slide-num="'+now+'"]');
					activeTarget.addClass('active');
				}});
		
				//pager
				target = pagers.eq(num);
				pagers.removeClass('active');
				target.addClass('active');
				
				//loop
				clearInterval(loop);
				loop = setInterval(loopFunc, loopDur);
				
				//captions
				if(captions){
					if(captions[0]){
						target = captions.eq(num);
						captions.removeClass('active');
						target.addClass('active');
					}
				}
				
				//thumb
				if(thumb){
					if(thumb[0]){
						target = thumbs.eq(num);
						thumbs.removeClass('active');
						target.addClass('active');
					}
				}
				
				//selectbtns
				if(selectbtns){
					if(selectbtns[0]){
						target = selectbtns.eq(num);
						selectbtns.removeClass('active');
						target.addClass('active');
					}
				}
				
		
				//
				now = num;
			}
			changeFunc(0);
		});
	})();
	
	//ã‚¦ã‚¨ãƒ‡ã‚£ãƒ³ã‚°
	(function(){
		var slideDelay = 0.3;
		$('[data-slidearea05]').each(function(index, element) {
			var type01Flg = $(element).attr('data-slidearea05-type01')?true:false;
			var slideareaBody = $(element);
			var slidearea = $(this).find('.imgs'),
				slides = slidearea.find('.img'),
				slidesWithDammy,
				length = slides.length-1,
				pager = $(this).find('.pager'),
				pagers,
				pager2 = $(this).find('.pager2'),
				pager2s,
				thumb = $(this).find('.thumbs'),
				thumbs,
				captions = $(this).find('.desc:not(.static)'),
				now = -1,
				prev = $(this).find('.prev'),
				next = $(this).find('.next'),
				loop,
				loopDur = 6000,
				flickFlg = false,
				flickArea = $(this).find('.contentWrapIn'),
				flickPosXBefore = 0,
				flickPosXNow = 0,
				flickPosXFirst = 0,
				flickPosYBefore = 0,
				flickPosYNow = 0,
				flickPosYFirst = 0,
				flickArrow,
				flickLoop,
				flickAnimTimeFlg = false;
			
			if(slides.length <= 1) return false;
			
			//ç•ªå·ã‚’è¨­å®š
			slides.each(function(i, e) {
				$(e).attr('data-slide-num', i).css({left:100*i+'%'});
				pager.append('<button data-slide-num="' + i + '"></button>');
				pager2.children().eq(i).attr('data-slide-num', i);
				
				//thumb.append('<li style="background-image:url(' + $(e).attr('data-loadfile') + ')" data-slide-num="' + i + '"></li>');
				thumb.append('<li data-loadfile="' + $(e).attr('data-loadfile') + '" data-slide-num="' + i + '"></li>');
			});
			pagers = pager.children();
			pager2s = pager2.children();
			thumbs = thumb.children();
			
			//ã‚¹ãƒ©ã‚¤ãƒ‰ãªã„ãƒ•ã‚©ãƒˆãŒã‚ã‚‹
			if(slideareaBody.hasClass('row04Content')){
				$(this).find('.imgs .photo').each(function(index, element) {
					var src = $(this).find('img').attr('data-loadfile');
					//$(this).attr('style', 'background-image:url(' + src + ');');
					$(this).attr('data-loadfile', src);
				});
				
				$('.zoom-gallery').each(function(index, element) {
					$(element).magnificPopup({
						delegate: 'a',
						type: 'image',
						closeOnContentClick: false,
						closeBtnInside: false,
						mainClass: 'mfp-with-zoom mfp-img-mobile',
						image: {
							verticalFit: true
						},
						gallery: {
							enabled: true
						},
						zoom: {
							enabled: true,
							duration: 300, // don't foget to change the duration also in CSS
							opener: function(element) {
								return element.find('img');
							}
						}
					});
				});

			}
			
			(function(){
				//ç«¯ã®è¦ç´ ã‚’ç”Ÿæˆ
				var closeElesPrev = [],
					closeElesNext = [],
					closeEle,
					closeEleIndex = 3,
					closeEleNow;
					
				//ãƒ€ãƒŸãƒ¼è¦ç´  å‰ ä½œæˆ
				closeEleNow = length+1;
				for(var i = 0; i < closeEleIndex; i++){
					closeEleNow--;
					if(closeEleNow < 0) closeEleNow = length-1;
					var c = slides.eq(closeEleNow).clone();
					$(c).css({left:(-100*(i+1))+'%'});
					closeElesPrev.push($(c));
				}
				//ãƒ€ãƒŸãƒ¼è¦ç´  å¾Œ ä½œæˆ
				closeEleNow = -1;
				for(var i = 0; i < closeEleIndex; i++){
					closeEleNow++;
					if(length < closeEleNow) closeEleNow = 0;
					var c = slides.eq(closeEleNow).clone();
					$(c).css({left:100*(length+(i+1))+'%'});
					closeElesNext.push($(c));
				}
				//ãƒ€ãƒŸãƒ¼è¦ç´ ã‚’ã„ã‚Œã‚‹
				for(var i = 0; i < closeElesPrev.length; i++){
					closeElesPrev[i].addClass('dammy');
					slidearea.prepend(closeElesPrev[i]);
				}
				for(var i = 0; i < closeElesNext.length; i++){
					closeElesNext[i].addClass('dammy');
					slidearea.append(closeElesNext[i]);
				}
				
				slidesWithDammy = slidearea.children();
			})();
			
			//pager
			pagers.on('click', function(e){
				var val = $(this).attr('data-slide-num');
				changeFunc(val);
			});
			pager2s.on('click', function(e){
				var val = $(this).attr('data-slide-num');
				changeFunc(val);
			});
			thumbs.on('click', function(e){
				var val = $(this).attr('data-slide-num');
				changeFunc(val);
			});
			
			
			
			//prevå‡¦ç†
			function prevFunc(){
				var val = -1+now;
				if(val < 0) val = length;
				changeFunc(val, 'prev');

				clearInterval(loop);
				loop = setInterval(loopFunc, loopDur);
			}
			prev.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), prevFunc);
	
			//next
			function nextFunc(){
				var val = +1+now;
				if(length < val) val = 0;
				changeFunc(val, 'next');

				clearInterval(loop);
				loop = setInterval(loopFunc, loopDur);
			}
			next.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), nextFunc);
			
			//ãƒ•ãƒªãƒƒã‚¯ã‚¨ãƒªã‚¢ãŒè¦‹ãˆãŸã¨ãã«è‡ªå‹•å‡¦ç†ã‚’æœ‰åŠ¹ã«ã™ã‚‹
			$(this).on('inview', function(e, isInView, visiblePartX, visiblePartY) {
				if(isInView){
					clearInterval(flickLoop);
					flickLoop = setInterval(function(){
						if(flickFlg) flickLoopFunc();
					}, 33);

					if(type01Flg) {
						//loop
						clearInterval(loop);
						loop = setInterval(loopFunc, loopDur);
						
						changeFunc(0);
					}
				}else{
					clearInterval(flickLoop);
					
					if(type01Flg) {
						//loop
						clearInterval(loop);
					}
				}
			});
			
			//flick touchstart
			flickArea.on('touchstart', function(e){
				flickPosXNow = flickPosXBefore = flickPosXFirst = e.originalEvent.changedTouches[0].pageX;
				flickPosYNow = flickPosYBefore = flickPosYFirst = e.originalEvent.changedTouches[0].pageY;
				clearInterval(loop);
				flickFlg = false;
			});
			
			//flick touchmove
			flickArea.on('touchmove', function(e){
				flickPosXNow = e.originalEvent.changedTouches[0].pageX;
				flickPosYNow = e.originalEvent.changedTouches[0].pageY;
				flickPosSetFunc();
				flickFlg = true;
			});
			
			//flick touchend
			flickArea.on('touchend', function(e){
				if(flickFlg){
					switch(flickArrow){
						case 'next':
							flickFlg = false;
							flickAnimTimeFlg = true;
							nextFunc();
							break;
						case 'prev':
							flickFlg = false;
							flickAnimTimeFlg = true;
							prevFunc();
							break;
						default:
							clearInterval(loop);
							loop = setInterval(loopFunc, loopDur);
							
							flickPosResetFunc();
							break;
					}
					flickArrow = 'none';
				}else{
					clearInterval(loop);
					loop = setInterval(loopFunc, loopDur);
				}
				flickFlg = false;
			});
			
			//flick å¸¸æ™‚å‡¦ç†
			function flickLoopFunc(){
				if(Math.abs(flickPosXNow-flickPosXBefore) > 10){//ã‚¿ãƒƒãƒé–‹å§‹ä½ç½®ã‹ã‚‰ä¸€å®šã®è·é›¢ã®å ´åˆ
					if(Math.abs(flickPosYNow-flickPosYBefore) < Math.abs(flickPosXNow-flickPosXBefore)){//Yè»¸ã‚ˆã‚ŠXè»¸ã®ã»ã†ãŒå€¤ãŒå¤§ãã„å ´åˆ
						if(flickPosXNow-flickPosXBefore < 0){//ãƒžã‚¤ãƒŠã‚¹ã®ã¨ã
							flickArrow = 'next';
						}else{
							flickArrow = 'prev';
						}
					}
				}else{
					flickArrow = 'none';
				}
				flickPosXBefore = flickPosXNow;
			}
			function flickPosSetFunc(per){
				per = ((flickPosXFirst-flickPosXNow)/flickArea.width())*100;
				TweenMax.set(slidearea, {x:(-100*now)-per+'%'});
			}
			function flickPosResetFunc(){
				TweenMax.to(slidearea, 0.4, {x:-100*now+'%'});
			}
			
			//ãƒ«ãƒ¼ãƒ—å‡¦ç†
			function loopFunc(){
				//ãƒšãƒ¼ã‚¸ãŒéžè¡¨ç¤ºã®ã¨ãã¯ä¸­æ–­
				if(Common.pageHideFlg)return false;
				
				//ã‚¹ãƒ©ã‚¤ãƒ‰ãªã„ãƒ•ã‚©ãƒˆãŒã‚ã‚‹
				if(slideareaBody.hasClass('row04Content')) return false;
				
				nextFunc();
			}
			
			//ã‚¹ãƒ©ã‚¤ãƒ‰ã®å‡¦ç†
			function changeFunc(num, arrow, target, targetP){
				//slide
				var moveNum = num;
				if(2 <= length){
					if(length == now && num == 0) moveNum = length+1;
					if(0 ==  now && num == length) moveNum = -1;
				}else{
					if(num == 0 && arrow == 'next') moveNum = length+1;
					if(num == length && arrow == 'prev') moveNum = -1;
				}
				
				var time = 0.4;
				if(flickAnimTimeFlg){
					time = 0.2;
					flickAnimTimeFlg = false;
				}
				TweenMax.to(slidearea, time, {x:-100*moveNum+'%', onComplete:function(){
					TweenMax.set(slidearea, {x:-100*num+'%'});
					
					//slide active
					slidesWithDammy.removeClass('active');
					var activeTarget = slidearea.find('[data-slide-num="'+now+'"]');
					activeTarget.addClass('active');
				}});
				
				target = slides.eq(num);
				targetP = slides.not(target);
				TweenMax.set(target, {alpha:1});
				TweenMax.set(targetP, {alpha:0});
				
				//pager
				target = pagers.eq(num);
				pagers.removeClass('active');
				target.addClass('active');
				
				//pager
				target = pager2s.eq(num);
				pager2s.removeClass('active');
				target.addClass('active');
				
				//pager
				target = thumbs.eq(num);
				thumbs.removeClass('active');
				target.addClass('active');
				
				//desc
				target = captions.eq(num);
				captions.removeClass('active');
				target.addClass('active');

				if(!type01Flg) {
					//loop
					clearInterval(loop);
					loop = setInterval(loopFunc, loopDur);
				}
				
				//
				now = num;
			}
			TweenMax.set(this, {delay:slideDelay*index, onComplete:function(){
				changeFunc(0);
			}});
		});
	})();
	
	(function(){
		var checkLoop = setInterval(function(){
			if(!document.getElementById('fairsforce_unsupport')){//è¦ç´ ãŒã‚ã‚‹å ´åˆ
				//ãƒ•ã‚§ã‚¢ã®ä¸€è¦§ã‚’æ•´å½¢ã™ã‚‹
				var nowDay = $('#FFFairSource').attr('data-date-day'),
					nowMonth = $('#FFFairSource').attr('data-date-month');
				clearInterval(checkLoop);
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã«é€±ã®è¡¨è¨˜ã‚’ã™ã‚‹
				$('#fairsforce .fair_calendar th').each(function(index, element, val) {
					switch(element.getAttribute('class')){
						case 'week0':
							val = 'Sun';
							break;
						case 'week1':
							val = 'Mon';
							break;
						case 'week2':
							val = 'Tue';
							break;
						case 'week3':
							val = 'Wed';
							break;
						case 'week4':
							val = 'Thu';
							break;
						case 'week5':
							val = 'Fri';
							break;
						case 'week6':
							val = 'Sat';
							break;
					}
					$(this).html('<span>'+val+'</span>');
				});
				
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã®1å€‹ç›®ã®æœˆã‚’å‰Šé™¤
				//TweenMax.set($('#fairsforce .fair_calendar').eq(0).find('caption'), {display:'none'});
				
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã®2å€‹ç›®ä»¥ä¸Šã®é€±è¡¨è¨˜ã‚’å‰Šé™¤
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã«æœˆã‚’ã¤ã‘ã‚‹
				$('#fairsforce .fair_calendar').each(function(ind, ele) {
					$(this).attr('data-fairmonth', $(this).find('.fair_calendar_month').text());
					if(ind){//ï¼’å€‹ç›®ä»¥ä¸Š
						TweenMax.set($(this).find('thead'));
					}
				});
				
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã®æ—¥æ›œæ—¥ã«pastãŒã¤ã„ã¦ã„ã‚‹å ´åˆã¯ã€ãã®é€±ã‚’æ¶ˆã™
				// $('#fairsforce .fair_calendar tbody tr').each(function(ind, ele) {
				// 	if($(this).find('td:last-child').hasClass('past')){
				// 		TweenMax.set(ele, {display:'none'});
				// 	}
				// });
				
				
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã®æ—¥ä»˜ã®æ—¥ã«æ—¥ã«ã¡ã‚’ã¤ã‘ã‚‹
				$('#fairsforce .fair_calendar td').each(function(ind, ele) {
					$(this).attr('data-fairday', $(this).children().text());
				});
				//ãƒ•ã‚§ã‚¢ã®ä¸€è¦§ã®ã‚¿ã‚¤ãƒˆãƒ«ã‚’è¨­ç½®
				$('.fair_section').after('<dl class="fairListArea type02"><dt></dt><dd></dd></dl>');
				$('.fair_section').after('<dl class="fairListArea type01"><dt></dt><dd></dd></dl>');
				$('.fair_section').after('<div id="FairTmp" style="display:none;"></div>');
				$('#fairsforce .fairListArea.type01 dt').append('<img src="img/txt_fair01.png" width="456" height="19" alt="ä»Šé€±æœ«é–‹å‚¬ã®ãƒ•ã‚§ã‚¢">');
				$('#fairsforce .fairListArea.type02 dt').append('<img src="img/txt_fair02.png" width="456" height="19" alt="ç¿Œé€±é–‹å‚¬äºˆå®šã®ãƒ•ã‚§ã‚¢">');
				
				//ãƒ•ã‚§ã‚¢ã®ä¸€è¦§ã‚’æ•´å½¢ã™ã‚‹
				var maxFair = 4,
					img,
					title,
					date,
					week,
					weekEng,
					day,
					month,
					caption,
					captionVal,
					link,
					newE1,
					newE2,
					newE3;
				$('#fairsforce .fair_list > a, #fairsforce_recommand > a').remove();
				$('#fairsforce .fair_list .fair_article').each(function(index, element) {
				//$('#fairsforce_recommand .recommand_fair, #fairsforce .fair_list .fair_article').each(function(index, element) {//ãŠã™ã™ã‚
					//ç”»åƒ
					img = $('<figure class="img"></figure>');
					//img.attr('data-thumbsrc', $(element).find('.fair_photo img').attr('src'));
					var bgimage = $(this).find('.fair_photo img').attr('data-scr');
					img.attr('style', 'background-image:url(' + (bgimage?bgimage:'/common/img/logo01.png') + ');');
					if(!bgimage)img.addClass('noimage');
					img.attr('data-photoscr', $(this).find('.fair_photo img').attr('data-photoscr'));
					
					//ã‚¿ã‚¤ãƒˆãƒ«
					title = $('<h1 class="fairtitle"></h1>');
					if($(this).find('.fair_name > *')[0]){
						title.text($(this).find('.fair_name > *').text());
					}else{
						title.text($(this).find('.fair_name').text());
					}
					
					//æ—¥ä»˜
					date = $('<time class="fairdate"></time>');
					month = $(this).find('.fair_date .fair_month').text();
					day = $(this).find('.fair_date .fair_day').text();
					week = $(this).find('.fair_date .fair_week');
					if(week.hasClass('week0')){
						week = 'æ—¥';
						weekEng = 'Sun';
					}else if(week.hasClass('week1')){
						week = 'æœˆ';
						weekEng = 'Mon';
					}else if(week.hasClass('week2')){
						week = 'ç«';
						weekEng = 'Tue';
					}else if(week.hasClass('week3')){
						week = 'æ°´';
						weekEng = 'Wed';
					}else if(week.hasClass('week4')){
						week = 'æœ¨';
						weekEng = 'Thu';
					}else if(week.hasClass('week5')){
						week = 'é‡‘';
						weekEng = 'Fri';
					}else if(week.hasClass('week6')){
						week = 'åœŸ';
						weekEng = 'Sat';
					}else{
						week = '';
						weekEng = '';
					}
					$(this).attr({'data-fairmonth':month, 'data-fairday':day, 'data-fairweek':week, 'data-fairweekEng':weekEng});
					date.attr('datetime', $(this).find('.fair_date .fair_year').text() + '-' + day + '-' + month);
					date.text(month + '/' + day + 'ï¼ˆ' + week + 'ï¼‰');
					date.addClass($(this).find('.fair_date .fair_week').attr('class'));
					
					//ã‚­ãƒ£ãƒ—ã‚·ãƒ§ãƒ³
					captionVal = $(this).find('.fair_description').text();
					caption = $('<p class="faircaption"></p>');
					caption.attr('data-textval', captionVal);
					if(captionVal.length > 50){
						captionVal = captionVal.substr(0,50) + '...';
					}
					caption.text(captionVal);
					
					//ãƒªãƒ³ã‚¯
					link = $(this).find('.fair_detail').attr('href');
					
					//çœŸè¦ç´ ä½œæˆ
					$(this).empty();
					newE3 = $('<div class="right"></div>');
					newE3.append(date);
					newE3.append(title);
					newE3.append(caption);
					newE2 = $('<section class="fairContent"></section>');
					newE2.append(img);
					newE2.append(newE3);
					newE1 = $('<a href="'+link+'"></a>');
					newE1.append(newE2);
					if($(this).closest('#fairsforce_recommand').length > 0) $(this).addClass('recommand');
					$(this).append(newE1);
					$(this).addClass('fair_article');
					$('#FairTmp').append($(this));
				});
				
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã«é…ç½®ã™ã‚‹
				var ele;
				$('#FairTmp .fair_article').each(function(index, element) {
					ele = [];
					ele = $('#fairsforce .fair_calendar[data-fairmonth="'+this.getAttribute('data-fairmonth')+'"] td[data-fairday="'+this.getAttribute('data-fairday')+'"]');
					if(ele[0]){
						ele.append($(this).clone());
					}
				});
				
				//ã‚¹ãƒžãƒ›å°‚ç”¨ã€€ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã‚¯ãƒªãƒƒã‚¯å‡¦ç†
				$('#fairsforce .fair_calendar td > a').each(function(index, element) {
					$(this).attr('href', './fair/#scroll-'+$(this).attr('href').split('#')[1]);
				});
				
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã®ä»Šæ—¥ã®æ—¥ä»˜ã«ãƒžãƒ¼ã‚¯ã‚’ã¤ã‘ã‚‹
				var todayElem = $('#fairsforce .fair_calendar[data-fairmonth="'+nowMonth+'"] td[data-fairday="'+nowDay+'"]');
				todayElem.addClass('today');
				
				//ä¸€è¦§ã«ä»Šé€±æœ«ã‚’å…¥ã‚Œã‚‹
				todayElem.closest('tr').find('td').slice(5).each(function(ind2, element) {
					if($(this).attr('data-fairday')){//æ—¥ã«ã¡ãŒã‚ã‚‹å ´åˆ
						$(this).find('.fair_article').each(function() {
							$('#fairsforce .fairListArea.type01 dd').append($(this).clone());
						});
					}else{//æ—¥ã«ã¡ãªã„
						if($(this).closest('tr').next()[0]){//æ¬¡ã®é€±ã®è¦ç´ ãŒã‚ã‚‹
							$(this).closest('tr').next().find('td').eq(5+ind2).find('.fair_article').each(function() {
								$('#fairsforce .fairListArea.type01 dd').append($(this).clone());
							});
						}else{//æ¬¡ã®é€±ã®è¦ç´ ãªã„
							$(this).closest('.fair_calendar').next().find('tbody tr').eq(0).find('td').eq(5+ind2).find('.fair_article').each(function() {
								$('#fairsforce .fairListArea.type01 dd').append($(this).clone());
							});
						}
					}
				});
				
				
				//ä»Šå¾Œé–‹å‚¬äºˆå®šã®ãƒ•ã‚§ã‚¢
				var targetTR = todayElem.closest('tr').next();
				var targetTD;
				if(!targetTR[0]){//æ¬¡ã®é€±ãŒç„¡ã„ãƒã‚¤ã‚¢
					targetTR = todayElem.closest('.fair_calendar').next().find('tbody tr').eq(1);
				}
				targetTR.find('td').slice(5).each(function(ind){
					if($(this).attr('data-fairday')){//æ—¥ã«ã¡ãŒã‚ã‚‹å ´åˆ
						$(this).find('.fair_article').each(function() {
							$('#fairsforce .fairListArea.type02 dd').append($(this).clone());
						});
					}else{//æ—¥ã«ã¡ãªã„
						if($(this).closest('tr').next()[0]){//æ¬¡ã®é€±ã®è¦ç´ ãŒã‚ã‚‹
							$(this).closest('tr').next().find('td').eq(5+ind).find('.fair_article').each(function() {
								$('#fairsforce .fairListArea.type02 dd').append($(this).clone());
							});
						}else{//æ¬¡ã®é€±ã®è¦ç´ ãªã„
							$(this).closest('.fair_calendar').next().find('tbody tr').eq(0).find('td').eq(5+ind).find('.fair_article').each(function() {
								$('#fairsforce .fairListArea.type02 dd').append($(this).clone());
							});
						}
					}
				});
				
				//ãƒˆãƒ”ãƒƒã‚¯ã‚¹ã®ãƒ•ã‚§ã‚¢ã®å…¥ã‚Œè¾¼ã¿æº–å‚™å®Œäº†
				$('#fairsforce .fairListArea.type01 dd .fair_article').each(function() {
					topics_fair.push(this);
				});
				topics_fairCheck = true;
				
				//ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã¯3ã¤ä»¥ä¸Šã¯å‰Šé™¤
				$('#fairsforce .fair_calendar').slice(3).remove();
				
				//ãƒãƒƒã‚·ãƒ¥ã®ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«å‡¦ç†
				TweenMax.set(this, {delay:0.75, onComplete:Common.scrollByLoaded});
			}
		}, 33);
	})();
	
	//ãƒ‘ãƒ¼ãƒ†ã‚£ãƒ¬ãƒãƒ¼ãƒˆ
	(function(){
		$('[data-slidearea07]').each(function(index, element) {
			var slidearea = $(this).find('.content'),
				slides = slidearea.find('.link'),
				slidesWithDammy,
				length = slides.length-1,
				pager = $(this).find('.pager'),
				pagers,
				now = -1,
				prev = $(this).find('.prev'),
				next = $(this).find('.next'),
				loop,
				loopDur = 6000,
				flickFlg = false,
				flickArea = $(this).find('.contentWrapIn'),
				flickPosXBefore = 0,
				flickPosXNow = 0,
				flickPosXFirst = 0,
				flickPosYBefore = 0,
				flickPosYNow = 0,
				flickPosYFirst = 0,
				flickArrow,
				flickLoop,
				flickAnimTimeFlg = false;
			
			//ç•ªå·ã‚’è¨­å®š
			slides.each(function(i, e) {
				$(e).attr('data-slide-num', i).css({left:100*i+'%'});
				pager.append('<button data-slide-num="' + i + '"></button>');
			});
			pagers = pager.children();
			
			//inviewã§will-changeã‚’ã‚»ãƒƒãƒˆ
			Common.setWillchangeInviewEvent();
			
			(function(){
				//ç«¯ã®è¦ç´ ã‚’ç”Ÿæˆ
				var closeElesPrev = [],
					closeElesNext = [],
					closeEle,
					closeEleIndex = 3,
					closeEleNow;
					
				//ãƒ€ãƒŸãƒ¼è¦ç´  å‰ ä½œæˆ
				closeEleNow = length+1;
				for(var i = 0; i < closeEleIndex; i++){
					closeEleNow--;
					if(closeEleNow < 0) closeEleNow = length-1;
					var c = slides.eq(closeEleNow).clone();
					$(c).css({left:(-100*(i+1))+'%'});
					closeElesPrev.push($(c));
				}
				//ãƒ€ãƒŸãƒ¼è¦ç´  å¾Œ ä½œæˆ
				closeEleNow = -1;
				for(var i = 0; i < closeEleIndex; i++){
					closeEleNow++;
					if(length < closeEleNow) closeEleNow = 0;
					var c = slides.eq(closeEleNow).clone();
					$(c).css({left:100*(length+(i+1))+'%'});
					closeElesNext.push($(c));
				}
				//ãƒ€ãƒŸãƒ¼è¦ç´ ã‚’ã„ã‚Œã‚‹
				for(var i = 0; i < closeElesPrev.length; i++){
					closeElesPrev[i].addClass('dammy');
					slidearea.prepend(closeElesPrev[i]);
				}
				for(var i = 0; i < closeElesNext.length; i++){
					closeElesNext[i].addClass('dammy');
					slidearea.append(closeElesNext[i]);
				}
				
				slidesWithDammy = slidearea.children();
			})();
		
			//pager
			/*pagers.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), function(e){
				var val = $(this).attr('data-slide-num');
				changeFunc(val);
			});*/
			
			//prevå‡¦ç†
			function prevFunc(){
				var val = -1+now;
				if(val < 0) val = length;
				changeFunc(val, 'prev');
			}
			prev.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), prevFunc);
	
			//next
			function nextFunc(){
				var val = +1+now;
				if(length < val) val = 0;
				changeFunc(val, 'next');
			}
			next.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), nextFunc);
			
			//ãƒ•ãƒªãƒƒã‚¯ã‚¨ãƒªã‚¢ãŒè¦‹ãˆãŸã¨ãã«è‡ªå‹•å‡¦ç†ã‚’æœ‰åŠ¹ã«ã™ã‚‹
			$(this).on('inview', function(e, isInView, visiblePartX, visiblePartY) {
				if(isInView){
					clearInterval(flickLoop);
					flickLoop = setInterval(function(){
						if(flickFlg) flickLoopFunc();
					}, 33);
				}else{
					clearInterval(flickLoop);
				}
			});

			clearInterval(flickLoop);	
				flickLoop = setInterval(function(){
					if(flickFlg) flickLoopFunc();
			}, 33);
			
			//flick touchstart
			flickArea.on('touchstart', function(e){
				flickPosXNow = flickPosXBefore = flickPosXFirst = e.originalEvent.changedTouches[0].pageX;
				flickPosYNow = flickPosYBefore = flickPosYFirst = e.originalEvent.changedTouches[0].pageY;
				clearInterval(loop);
				flickFlg = false;
			});
			
			//flick touchmove
			flickArea.on('touchmove', function(e){
				flickPosXNow = e.originalEvent.changedTouches[0].pageX;
				flickPosYNow = e.originalEvent.changedTouches[0].pageY;
				flickPosSetFunc();
				flickFlg = true;
			});
			
			//flick touchend
			flickArea.on('touchend', function(e){
				if(flickFlg){
					switch(flickArrow){
						case 'next':
							flickFlg = false;
							flickAnimTimeFlg = true;
							nextFunc();
							break;
						case 'prev':
							flickFlg = false;
							flickAnimTimeFlg = true;
							prevFunc();
							break;
						default:
							clearInterval(loop);
							loop = setInterval(loopFunc, loopDur);
							
							flickPosResetFunc();
							break;
					}
					flickArrow = 'none';
				}else{
					clearInterval(loop);
					loop = setInterval(loopFunc, loopDur);
				}
				flickFlg = false;
			});
			
			//flick å¸¸æ™‚å‡¦ç†
			function flickLoopFunc(){
				if(Math.abs(flickPosXNow-flickPosXBefore) > 10){//ã‚¿ãƒƒãƒé–‹å§‹ä½ç½®ã‹ã‚‰ä¸€å®šã®è·é›¢ã®å ´åˆ
					if(Math.abs(flickPosYNow-flickPosYBefore) < Math.abs(flickPosXNow-flickPosXBefore)){//Yè»¸ã‚ˆã‚ŠXè»¸ã®ã»ã†ãŒå€¤ãŒå¤§ãã„å ´åˆ
						if(flickPosXNow-flickPosXBefore < 0){//ãƒžã‚¤ãƒŠã‚¹ã®ã¨ã
							flickArrow = 'next';
						}else{
							flickArrow = 'prev';
						}
					}
				}else{
					flickArrow = 'none';
				}
				flickPosXBefore = flickPosXNow;
			}
			function flickPosSetFunc(per){
				per = ((flickPosXFirst-flickPosXNow)/flickArea.width())*100;
				TweenMax.set(slidearea, {x:(-100*now)-per+'%'});
			}
			function flickPosResetFunc(){
				TweenMax.to(slidearea, 0.4, {x:-100*now+'%'});
			}
			
			//ãƒ«ãƒ¼ãƒ—å‡¦ç†
			function loopFunc(){
				//ãƒšãƒ¼ã‚¸ãŒéžè¡¨ç¤ºã®ã¨ãã¯ä¸­æ–­
				if(Common.pageHideFlg)return false;
				
				nextFunc();
			}
			
			//ã‚¹ãƒ©ã‚¤ãƒ‰ã®å‡¦ç†
			function changeFunc(num, arrow, target, targetP){
				//slide active
				slidesWithDammy.removeClass('active');
		
				//slide
				var moveNum = num;
				if(2 <= length){
					if(length == now && num == 0) moveNum = length+1;
					if(0 ==  now && num == length) moveNum = -1;
				}else{
					if(num == 0 && arrow == 'next') moveNum = length+1;
					if(num == length && arrow == 'prev') moveNum = -1;
				}
				
				var time = 0.4;
				if(flickAnimTimeFlg){
					time = 0.2;
					flickAnimTimeFlg = false;
				}
				TweenMax.to(slidearea, time, {x:-100*moveNum+'%', onComplete:function(){
					TweenMax.set(slidearea, {x:-100*num+'%'});
					
					//slide active
					var activeTarget = slidearea.find('[data-slide-num="'+now+'"]');
					activeTarget.addClass('active');
				}});

				//slide view
				var activeTarget = slidearea.find('[data-slide-num="'+num+'"]').not('.dammy');
				slidearea.find('[data-slide-num]').removeClass('view');
				if(arrow == 'next'){
					activeTarget.addClass('view');
					activeTarget.next().addClass('view');
					activeTarget.next().next().addClass('view');
				}else if(arrow == 'prev'){
					activeTarget.addClass('view');
					activeTarget.next().addClass('view');
					activeTarget.next().next().addClass('view');
				}else{
					slidearea.find('[data-slide-num="0"]').addClass('view');
					slidearea.find('[data-slide-num="1"]').addClass('view');
					slidearea.find('[data-slide-num="2"]').addClass('view');
				}
				
				var wwww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				
				if(wwww <= 640){
					//prev
					if(num == 0) prev.removeClass('viewSP');
					else prev.addClass('viewSP');
					
					//next
					if(length-1 < num) next.removeClass('viewSP');
					else next.addClass('viewSP');
				}else{
					//prev
					if(num == 0) prev.removeClass('viewPC');
					else prev.addClass('viewPC');
					
					//next
					if(length-3 < num) next.removeClass('viewPC');
					else next.addClass('viewPC');
				}
		
				//pager
				/*target = pagers.eq(num);
				pagers.removeClass('active');
				target.addClass('active');*/
				
				//loop
				clearInterval(loop);
				loop = setInterval(loopFunc, loopDur);

				//
				now = num;
			}
			changeFunc(0);

			//ãã‚ãˆã‚‹
			TweenMax.set('body', {delay:0.5, onComplete:function(){
				Common.setAlignElem();
			}});

		});
	})();

	// 20170321ã‚¹ãƒ©ã‚¤ãƒ‰ãƒ«ãƒ¼ãƒ—å‡¦ç†ã®ãŸã‚ã€slidearea07ï½ï½ã‚¹ãƒ©ã‚¤ãƒ‰ã®jsã‚’ä¸‹è¨˜ã‹ã‚‰ä¸Šè¨˜ã«å¤‰æ›´
	// (function(){
	// 	$('[data-slidearea07]').each(function() {
	// 		var slidearea = $(this).find('.content'),
	// 			slides = slidearea.find('.link'),
	// 			slidesWithDammy,
	// 			length = slides.length-1,
	// 			pager,
	// 			pagers,
	// 			now = -1,
	// 			prev = $(this).find('.prev'),
	// 			next = $(this).find('.next'),
	// 			loop,
	// 			loopDur = 6000,
	// 			flickFlg = false,
	// 			flickArea = $(this).find('.contentWrapIn'),
	// 			flickPosXBefore = 0,
	// 			flickPosXNow = 0,
	// 			flickPosXFirst = 0,
	// 			flickPosYBefore = 0,
	// 			flickPosYNow = 0,
	// 			flickPosYFirst = 0,
	// 			flickArrow,
	// 			flickLoop,
	// 			flickAnimTimeFlg = false;
			
	// 		//
	// 		if(slides.length <= 3){
	// 			$(this).find('.btns01').addClass('hide');
	// 			$(this).addClass('noslide');
	// 		}
	// 		//
	// 		if(slides.length == 1){
	// 			return true;
	// 		}
			
	// 		//ç•ªå·ã‚’è¨­å®š
	// 		slides.each(function(i) {
	// 			$(this).attr('data-slide-num', i).css({left:100*i+'%'});
	// 			//pager.append('<li data-slide-num="' + i + '"></li>');
	// 		});
	// 		//pagers = pager.children();
		
	// 		//pager
	// 		/*pagers.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), function(e){
	// 			var val = $(this).attr('data-slide-num');
	// 			changeFunc(val);
	// 		});*/
			
	// 		//prevå‡¦ç†
	// 		function prevFunc(){
	// 			var val = -1+now;
	// 			if(val < 0) val = now;
	// 			changeFunc(val, 'prev');
	// 		}
	// 		prev.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), prevFunc);
	
	// 		//next
	// 		function nextFunc(){
	// 			var val = +1+now;
	// 			var wwww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	// 			if(wwww <= 640){
	// 				if(length < val) val = now;
	// 			}else{
	// 				if(length-2 < val) val = now;
	// 			}
	// 			changeFunc(val, 'next');
	// 		}
	// 		next.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), nextFunc);
			
	// 		//ãƒ•ãƒªãƒƒã‚¯ã‚¨ãƒªã‚¢ãŒè¦‹ãˆãŸã¨ãã«è‡ªå‹•å‡¦ç†ã‚’æœ‰åŠ¹ã«ã™ã‚‹
	// 		$(this).on('inview', function(e, isInView, visiblePartX, visiblePartY) {
	// 			if(isInView){
	// 				clearInterval(flickLoop);
	// 				flickLoop = setInterval(function(){
	// 					if(flickFlg) flickLoopFunc();
	// 				}, 33);
	// 			}else{
	// 				clearInterval(flickLoop);
	// 			}
	// 		});
			
	// 		//flick touchstart
	// 		flickArea.on('touchstart', function(e){
	// 			flickPosXNow = flickPosXBefore = flickPosXFirst = e.originalEvent.changedTouches[0].pageX;
	// 			flickPosYNow = flickPosYBefore = flickPosYFirst = e.originalEvent.changedTouches[0].pageY;
	// 			clearInterval(loop);
	// 			flickFlg = false;
	// 		});
			
	// 		//flick touchmove
	// 		flickArea.on('touchmove', function(e){
	// 			flickPosXNow = e.originalEvent.changedTouches[0].pageX;
	// 			flickPosYNow = e.originalEvent.changedTouches[0].pageY;
	// 			flickPosSetFunc();
	// 			flickFlg = true;
	// 		});
			
	// 		//flick touchend
	// 		flickArea.on('touchend', function(e){
	// 			if(flickFlg){
	// 				switch(flickArrow){
	// 					case 'next':
	// 						flickFlg = false;
	// 						flickAnimTimeFlg = true;
	// 						nextFunc();
	// 						break;
	// 					case 'prev':
	// 						flickFlg = false;
	// 						flickAnimTimeFlg = true;
	// 						prevFunc();
	// 						break;
	// 					default:
	// 						clearInterval(loop);
	// 						loop = setInterval(loopFunc, loopDur);
							
	// 						flickPosResetFunc();
	// 						break;
	// 				}
	// 				flickArrow = 'none';
	// 			}else{
	// 				clearInterval(loop);
	// 				loop = setInterval(loopFunc, loopDur);
	// 			}
	// 			flickFlg = false;
	// 		});
			
	// 		//flick å¸¸æ™‚å‡¦ç†
	// 		function flickLoopFunc(){
	// 			if(Math.abs(flickPosXNow-flickPosXBefore) > 10){//ã‚¿ãƒƒãƒé–‹å§‹ä½ç½®ã‹ã‚‰ä¸€å®šã®è·é›¢ã®å ´åˆ
	// 				if(Math.abs(flickPosYNow-flickPosYBefore) < Math.abs(flickPosXNow-flickPosXBefore)){//Yè»¸ã‚ˆã‚ŠXè»¸ã®ã»ã†ãŒå€¤ãŒå¤§ãã„å ´åˆ
	// 					if(flickPosXNow-flickPosXBefore < 0){//ãƒžã‚¤ãƒŠã‚¹ã®ã¨ã
	// 						flickArrow = 'next';
	// 					}else{
	// 						flickArrow = 'prev';
	// 					}
	// 				}
	// 			}else{
	// 				flickArrow = 'none';
	// 			}
	// 			flickPosXBefore = flickPosXNow;
	// 		}
	// 		function flickPosSetFunc(per){
	// 			per = ((flickPosXFirst-flickPosXNow)/flickArea.width())*100;
	// 			TweenMax.set(slidearea, {x:(-100*now)-per+'%'});
	// 		}
	// 		function flickPosResetFunc(){
	// 			TweenMax.to(slidearea, 0.4, {x:-100*now+'%'});
	// 		}
			
	// 		//ãƒ«ãƒ¼ãƒ—å‡¦ç†
	// 		function loopFunc(){
	// 			//ãƒšãƒ¼ã‚¸ãŒéžè¡¨ç¤ºã®ã¨ãã¯ä¸­æ–­
	// 			if(Common.pageHideFlg)return false;
				
	// 			nextFunc();
	// 		}
			
	// 		//ã‚¹ãƒ©ã‚¤ãƒ‰ã®å‡¦ç†
	// 		function changeFunc(num, arrow, target, targetP){
		
	// 			//slide
	// 			var moveNum = num;
	// 			if(2 <= length){
	// 				if(length == now && num == 0) moveNum = length+1;
	// 				if(0 ==  now && num == length) moveNum = -1;
	// 			}else{
	// 				if(num == 0 && arrow == 'next') moveNum = length+1;
	// 				if(num == length && arrow == 'prev') moveNum = -1;
	// 			}
				
	// 			var time = 0.4;
	// 			if(flickAnimTimeFlg){
	// 				time = 0.4;
	// 				flickAnimTimeFlg = false;
	// 			}
	// 			TweenMax.to(slidearea, time, {x:-100*moveNum+'%', ease:(num == now)?Elastic.easeOut.config( 0.7, 0.3):Power1.easeOut, onComplete:function(){
	// 				TweenMax.set(slidearea, {x:-100*num+'%'});
					
	// 				//slide active
	// 				var activeTarget = slidearea.find('[data-slide-num="'+now+'"]');
	// 				activeTarget.addClass('active');
	// 			}});
				
	// 			//slide view
	// 			var activeTarget = slidearea.find('[data-slide-num="'+num+'"]').not('.dammy');
	// 			slidearea.find('[data-slide-num]').removeClass('view');
	// 			if(arrow == 'next'){
	// 				activeTarget.addClass('view');
	// 				activeTarget.next().addClass('view');
	// 				activeTarget.next().next().addClass('view');
	// 			}else if(arrow == 'prev'){
	// 				activeTarget.addClass('view');
	// 				activeTarget.next().addClass('view');
	// 				activeTarget.next().next().addClass('view');
	// 			}else{
	// 				slidearea.find('[data-slide-num="0"]').addClass('view');
	// 				slidearea.find('[data-slide-num="1"]').addClass('view');
	// 				slidearea.find('[data-slide-num="2"]').addClass('view');
	// 			}
				
	// 			var wwww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				
	// 			if(wwww <= 640){
	// 				//prev
	// 				if(num == 0) prev.removeClass('viewSP');
	// 				else prev.addClass('viewSP');
					
	// 				//next
	// 				if(length-1 < num) next.removeClass('viewSP');
	// 				else next.addClass('viewSP');
	// 			}else{
	// 				//prev
	// 				if(num == 0) prev.removeClass('viewPC');
	// 				else prev.addClass('viewPC');
					
	// 				//next
	// 				if(length-3 < num) next.removeClass('viewPC');
	// 				else next.addClass('viewPC');
	// 			}
				
				
	// 			//pager
	// 			/*target = pagers.eq(num);
	// 			pagers.removeClass('active');
	// 			target.addClass('active');*/
				
		
	// 			//
	// 			now = num;
	// 		}
	// 		changeFunc(0);
	// 	});
	// })();
	
	
	//ãƒ¬ã‚¹ãƒˆãƒ©ãƒ³
	(function(){
		$('#Art08').one('inview', function(e, isInView, visiblePartX, visiblePartY) {
			$('#Art08 [data-pararax01-child]').addClass('inview');
		});
	})();
	
	
	
	

	
	//ãƒ¡ãƒ‹ãƒ¥ãƒ¼
	$(window).on('scroll', function(w,h,s) {
		if($('html,body').scrollTop() !=0){
			s = $('html,body').scrollTop();
		}else{
			s = $(document).scrollTop();
		}
		w = parseInt(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
		h = parseInt($(window).height());
		
		//menu è¿½å¾“
		if(s < $('#MVArea').height()){
			if( $('#HeaderArea').hasClass('fixed')) $('#HeaderArea').removeClass('fixed');
		}else{
			if(!$('#HeaderArea').hasClass('fixed')) $('#HeaderArea').addClass('fixed');
		}
		
		//ã‚µã‚¤ãƒ‰è¿½å¾“ã®è¡¨ç¤º
		if(640 < w){
			if(s < $('#Art01').position().top){
				if( $('#SideFlowBtn').hasClass('view')) $('#SideFlowBtn').removeClass('view');
			}else{
				if(!$('#SideFlowBtn').hasClass('view')) $('#SideFlowBtn').addClass('view');
			}
		}
	});
	$(window).trigger('scroll');
	
	
	//ç”»é¢ã«é ˜åŸŸãŒç¾ã‚ŒãŸã¨ãã«ãƒšãƒ¼ã‚¸ãƒ—ãƒ©ã‚°ã‚¤ãƒ³ã‚’èª­ã¿è¾¼ã¿
	(function(){
		if($('[data-fbpage]')[0]){
			$('[data-fbpage]').each(function(index, element) {
				$(element).on('inview', function(event, isInView, visiblePartX, visiblePartY) {
					if(isInView){
						$(element).html('<div class="fb-page" data-href="' + $(element).attr('data-fbpage') + '" data-tabs="timeline" data-height="430" data-width="'+$(element).width()+'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"></div>');
						if(window.FB)window.FB.XFBML.parse();
					}
				});
			});
		}
	})();
	
	function loadfileChech(ele, result, string){
		var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
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
	
	/* data-slidearea01 */
	(function(){
		$('[data-slidearea06]').each(function(index, element) {
			var slidearea = $(element).find('.content'),
				slides = slidearea.find('.link'),
				slidesWithDammy,
				length = slides.length-1,
				now = -1,
				prev = $(element).find('.prev'),
				next = $(element).find('.next'),
				loop,
				loopDur = 6000,
				flickFlg = false,
				flickArea = $(element).find('.contentWrapIn'),
				flickPosXBefore = 0,
				flickPosXNow = 0,
				flickPosXFirst = 0,
				flickPosYBefore = 0,
				flickPosYNow = 0,
				flickPosYFirst = 0,
				flickArrow,
				flickLoop,
				flickAnimTimeFlg = false;
			 
			(function(){
				//ç«¯ã®è¦ç´ ã‚’ç”Ÿæˆ
				var closeElesPrev = [],
					closeElesNext = [],
					closeEle,
					closeEleIndex = 3,
					closeEleNow;
					 
				//ãƒ€ãƒŸãƒ¼è¦ç´  å‰ ä½œæˆ
				closeEleNow = length+1;
				for(var i = 0; i < closeEleIndex; i++){
					closeEleNow--;
					if(closeEleNow < 0) closeEleNow = length-1;
					var c = slides.eq(closeEleNow).clone();
					closeElesPrev.push($(c));
				}
				//ãƒ€ãƒŸãƒ¼è¦ç´  å¾Œ ä½œæˆ
				closeEleNow = -1;
				for(var i = 0; i < closeEleIndex; i++){
					closeEleNow++;
					if(length < closeEleNow) closeEleNow = 0;
					var c = slides.eq(closeEleNow).clone();
					closeElesNext.push($(c));
				}
				//ãƒ€ãƒŸãƒ¼è¦ç´ ã‚’ã„ã‚Œã‚‹
				for(var i = 0; i < closeElesPrev.length; i++){
					closeElesPrev[i].addClass('dammy');
					slidearea.prepend(closeElesPrev[i]);
				}
				for(var i = 0; i < closeElesNext.length; i++){
					closeElesNext[i].addClass('dammy');
					slidearea.append(closeElesNext[i]);
				}
				 
				slidesWithDammy = slidearea.children();
				 
				slidearea.css('width', slidesWithDammy.length*100+'%');
				TweenMax.set(slidesWithDammy, {x:'-' + closeEleIndex + '00%', width:+(100/slidesWithDammy.length)+"%"});
			})();
			 
			//prevå‡¦ç†
			function prevFunc(){
				var val = -1+now;
				if(val < 0) val = length;
				changeFunc(val, 'prev');
			}
			prev.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), prevFunc);
	 
			//next
			function nextFunc(){
				var val = +1+now;
				if(length < val) val = 0;
				changeFunc(val, 'next');
			}
			next.on(((window.navigator.msPointerEnabled)?'pointerdown':('ontouchend' in document)?'touchstart':'click'), nextFunc);
			 
			//ãƒ•ãƒªãƒƒã‚¯ã‚¨ãƒªã‚¢ãŒè¦‹ãˆãŸã¨ãã«è‡ªå‹•å‡¦ç†ã‚’æœ‰åŠ¹ã«ã™ã‚‹
			$(element).on('inview', function(e, isInView, visiblePartX, visiblePartY) {
				if(isInView){
					clearInterval(flickLoop);
					flickLoop = setInterval(function(){
						if(flickFlg) flickLoopFunc();
					}, 33);
				}else{
					clearInterval(flickLoop);
				}
			});
			 
			//flick touchstart
			flickArea.on('touchstart', function(e){
				flickPosXNow = flickPosXBefore = flickPosXFirst = e.originalEvent.changedTouches[0].pageX;
				flickPosYNow = flickPosYBefore = flickPosYFirst = e.originalEvent.changedTouches[0].pageY;
				clearInterval(loop);
				flickFlg = false;
			});
			 
			//flick touchmove
			flickArea.on('touchmove', function(e){
				flickPosXNow = e.originalEvent.changedTouches[0].pageX;
				flickPosYNow = e.originalEvent.changedTouches[0].pageY;
				flickPosSetFunc();
				flickFlg = true;
			});
			 
			//flick touchend
			flickArea.on('touchend', function(e){
				if(flickFlg){
					switch(flickArrow){
						case 'next':
							flickFlg = false;
							flickAnimTimeFlg = true;
							nextFunc();
							break;
						case 'prev':
							flickFlg = false;
							flickAnimTimeFlg = true;
							prevFunc();
							break;
						default:
							clearInterval(loop);
							loop = setInterval(loopFunc, loopDur);
							 
							flickPosResetFunc();
							break;
					}
					flickArrow = 'none';
				}else{
					clearInterval(loop);
					loop = setInterval(loopFunc, loopDur);
				}
				flickFlg = false;
			});
			 
			//flick å¸¸æ™‚å‡¦ç†
			function flickLoopFunc(){
				if(Math.abs(flickPosXNow-flickPosXBefore) > 10){//ã‚¿ãƒƒãƒé–‹å§‹ä½ç½®ã‹ã‚‰ä¸€å®šã®è·é›¢ã®å ´åˆ
					if(Math.abs(flickPosYNow-flickPosYBefore) < Math.abs(flickPosXNow-flickPosXBefore)){//Yè»¸ã‚ˆã‚ŠXè»¸ã®ã»ã†ãŒå€¤ãŒå¤§ãã„å ´åˆ
						if(flickPosXNow-flickPosXBefore < 0){//ãƒžã‚¤ãƒŠã‚¹ã®ã¨ã
							flickArrow = 'next';
						}else{
							flickArrow = 'prev';
						}
					}
				}else{
					flickArrow = 'none';
				}
				flickPosXBefore = flickPosXNow;
			}
			function flickPosSetFunc(per){
				per = ((flickPosXFirst-flickPosXNow)/flickArea.width())*100;
				TweenMax.set(slidearea, {left:(-100*now)-per+'%'});
			}
			function flickPosResetFunc(){
				TweenMax.to(slidearea, 0.4, {left:-100*now+'%'});
			}
			 
			//ãƒ«ãƒ¼ãƒ—å‡¦ç†
			function loopFunc(){
				//ãƒšãƒ¼ã‚¸ãŒéžè¡¨ç¤ºã®ã¨ãã¯ä¸­æ–­
				if(Common.pageHideFlg)return false;
				 
				nextFunc();
			}
			 
			//ã‚¹ãƒ©ã‚¤ãƒ‰ã®å‡¦ç†
			function changeFunc(num, arrow, target, targetP){
				//slide active
				slidesWithDammy.removeClass('active');
		 
				//slide
				var moveNum = num;
				if(2 <= length){
					if(length == now && num == 0) moveNum = length+1;
					if(0 ==  now && num == length) moveNum = -1;
				}else{
					if(num == 0 && arrow == 'next') moveNum = length+1;
					if(num == length && arrow == 'prev') moveNum = -1;
				}
				 
				var time = 0.4;
				if(flickAnimTimeFlg){
					time = 0.2;
					flickAnimTimeFlg = false;
				}
				TweenMax.to(slidearea, time, {left:-100*moveNum+'%', onComplete:function(){
					TweenMax.set(slidearea, {left:-100*num+'%'});
					 
					//slide active
					var activeTarget = slidearea.find('[data-slide-num="'+now+'"]');
					activeTarget.addClass('active');
				}});
				 
				//loop
				clearInterval(loop);
				loop = setInterval(loopFunc, loopDur);
				 
				//å€¤ä¿å­˜
				now = parseInt(num);
			}
			changeFunc(0);
		});
	})();
});