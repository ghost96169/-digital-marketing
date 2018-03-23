function headerAnimation(that) { //header变化函数
	var nextIndex = that.activeIndex + 1;
	if (nextIndex !== 1) {
		$('.header').addClass('animation');
	}
	else {
		$('.header').removeClass('animation');
	}
}

function navFollow(thisLi) {//导航跟随函数
	var leftDistance = thisLi.position().left;
	var width = thisLi.width();
	$('.navFollow').css('transform','translateX(' + (leftDistance + width / 2) + 'px)')
}

function removeBannerAnimation() {//banner清除动画函数
	$('.bannerSwiper div').removeClass('animation');
}

function bannerSlide1Animation() {//bannerSlide1动画函数
	$('.bannerSlide1').addClass('animation');	
}

function bannerSlide2Animation() {//bannerSlide2动画函数
	$('.bannerSlide2').addClass('animation');
}

function bannerSlide3Animation() {//bannerSlide3动画函数
	$('.bannerSlide3').addClass('animation');
}

function bannerSlide4Animation() {//bannerSlide4动画函数
	$('.bannerSlide4Box').addClass('animation');
}

function bannerSlide5Animation() {//bannerSlide5动画函数
	$('.bannerSlide5').addClass('animation');
}

function bodySlide2Animation() { //bodySlide2动画函数
	$('.bodySlide2').addClass('animation');
}

function bodySlide3Animation() {
	$('.bodySlide3').addClass('animation');
}

function bodySlide4Animation() {
	$('.bodySlide4Box').addClass('animation');
}

function removeBodyAnimation() { //body清除动画函数
	$('.bodySlide2').removeClass('animation');
	$('.bodySlide4Box').removeClass('animation');
	$('.bodySlide3').removeClass('animation');
}

function bodySlide2HoverIn(that) { //bodySlide2HoverIn函数
	$(that + ' .roundIconAnimation').stop();
	$(that + ' .roundIconAnimation').animate({height:'100%'},500,'linear',
	function() {
		$(that).addClass('changeColor');
		$(that + ' .round').addClass('changeColor');
		$(that + ' .roundIcon').addClass('changeColor');
	})
}

function bodySlide2HoverOut(that) { //bodySlide2HoverOut函数
	$(that + ' .roundIconAnimation').stop();
	$(that).removeClass('changeColor');
	$(that + ' .round').removeClass('changeColor');
	$(that + ' .roundIcon').removeClass('changeColor');
	$(that + ' .roundIconAnimation').animate({height:'0'},500,'linear');
}

navFollow($('.nav li.active'));//导航跟随初始化

$('.nav li').mouseover(function() {//导航跟随hover事件
	navFollow($(this));
})

$('.nav li').mouseout(function() {//导航跟随鼠标移出事件
	navFollow($('.nav li.active'));
})

var bodySwiper = new Swiper('.bodySwiper', {//bodySwiper初始化
				direction : 'vertical',
 				mousewheel: true,
 				navigation: {
    				nextEl: '.swiper-button-next',
    				prevEl: '.swiper-button-prev',
  				},
 				on: {
				    slideChangeTransitionStart: function(){
				    	headerAnimation(this);
				    	removeBodyAnimation();
				    	bannerSwiper.slideTo(0,0,false);
				    	removeBannerAnimation();
    				},
    				slideChangeTransitionEnd: function() {
    					var activeIndex = this.activeIndex;
				    	switch (activeIndex) {
				    		case 1:
				    		bodySlide2Animation();
				    		break;
				    		case 2:
				    		bodySlide3Animation();
				    		case 3:
				    		bodySlide4Animation();
				    	}
				    	bannerSlide1Animation();
    				}
  				},
			});
			
var bannerSwiper = new Swiper('.bannerSwiper', {//bannerSwiper初始化
 				autoplay: {
    				delay:5000,
    				disableOnInteraction: false,
  				},
  				pagination :{
    				el: '.swiper-pagination',
    				clickable :true,
    				bulletClass : 'bannerBullet',
    				bulletActiveClass: 'bannerBullet_active',
   				},
  				on: {
  					init: function(){
    					bannerSlide1Animation();
    				}, 
  					slideChangeTransitionStart: function(){
      					removeBannerAnimation();
    				},
				    slideChangeTransitionEnd: function(){
				    	var activeIndex = this.activeIndex;
				    	switch (activeIndex) {
				    		case 0:
				    			bannerSlide1Animation();
				    			break;
				    		case 1:
				    			bannerSlide2Animation();
				    			break;
				    		case 2:
				    			bannerSlide3Animation();
				    			break;
				    		case 3:
				    			bannerSlide4Animation();
				    			break;
				    		case 4:
				    			bannerSlide5Animation();
				    			break;
				    	};
				    },
				},
			});

$('.bodySlide2LeftUp').hover( //bodySlide2 Hover效果
	function() {
		bodySlide2HoverIn('.bodySlide2LeftUp')
},
	function() {
		bodySlide2HoverOut('.bodySlide2LeftUp');
	}	
)

$('.bodySlide2LeftDown').hover( //bodySlide2 Hover效果
	function() {
		bodySlide2HoverIn('.bodySlide2LeftDown')
},
	function() {
		bodySlide2HoverOut('.bodySlide2LeftDown');
	}	
)

$('.bodySlide2RightUp').hover( //bodySlide2 Hover效果
	function() {
		bodySlide2HoverIn('.bodySlide2RightUp')
},
	function() {
		bodySlide2HoverOut('.bodySlide2RightUp');
	}	
)

$('.bodySlide2RightDown').hover( //bodySlide2 Hover效果
	function() {
		bodySlide2HoverIn('.bodySlide2RightDown')
},
	function() {
		bodySlide2HoverOut('.bodySlide2RightDown');
	}	
)

var bodySlide3Swiper = new Swiper('.bodySlide3Right');//bodySlide3Swiper初始化


$('.bodySlidePrev').click(function () { //bodySlide上下切换按钮
	 bodySwiper.slidePrev();
})

$('.bodySlideNext').click(function () { //bodySlide上下切换按钮
	 bodySwiper.slideNext();
})

$('.QQ').hover( //sideQQ动画
	function () {
		$('.sideQQ').addClass('animation');
	},
	function () {
		$('.sideQQ').removeClass('animation');
	}
)

$('.tel').hover( //sideTel动画
	function () {
		$('.sideTel').addClass('animation');
	},
	function () {
		$('.sideTel').removeClass('animation');
	}
)

$('.wechat').hover( //sideWechat动画
	function () {
		$('.sideWechat').addClass('animation');
	},
	function () {
		$('.sideWechat').removeClass('animation');
	}
)

$('.jiaRu').hover( //sideJiaRu动画
	function () {
		$('.sideJiaRu').addClass('animation');
	},
	function () {
		$('.sideJiaRu').removeClass('animation');
	}
)

var jiShuSwiper = new Swiper('.jiShuDown', { //技术与实施Swiper初始化
	direction : 'vertical',
});

$('.jiShuSlide1').hover(function() { //技术与实施hover效果
	jiShuSwiper.slideTo(0,1000,false);
})

$('.jiShuSlide2').hover(function() { //技术与实施hover效果
	jiShuSwiper.slideTo(1,1000,false);
})

$('.jiShuSlide3').hover(function() { //技术与实施hover效果
	jiShuSwiper.slideTo(2,1000,false);
})

$('.jiShuSlide4').hover(function() { //技术与实施hover效果
	jiShuSwiper.slideTo(3,1000,false);
})

$('.jiShuSlide5').hover(function() { //技术与实施hover效果
	jiShuSwiper.slideTo(4,1000,false);
})

$('.jingYanClick').click(function() { //bodySlide3点击动画
	bodySlide3Swiper.slideTo(0,800,false);
})

$('.ceLueClick').click(function() { //bodySlide3点击动画
	bodySlide3Swiper.slideTo(1,800,false);
})

$('.jiShuClick').click(function() { //bodySlide3点击动画
	bodySlide3Swiper.slideTo(2,800,false);
})

$('.fuWuClick').click(function() { //bodySlide3点击动画
	bodySlide3Swiper.slideTo(3,800,false);
})

$('.jiShuRound').hover(function() { //技术Round hover效果
	$('.jiShuRound.hover').removeClass('hover');
	$(this).addClass('hover');
})

$('.bodySlide3 li').click(function() { //bodySlide3点击效果
	$('.bodySlide3 li.click').removeClass('click');
	$(this).addClass('click');
})

