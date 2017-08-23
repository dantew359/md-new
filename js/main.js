$(function(){
	$(".header-anim-wumen").css({width:'0px',right:'0px'});
	$(".header-anim-text").css({width:'0px',left:'0px'});
//		’Œ¬≈– Œ—ÕŒ¬ÕŒ…
	
	var headA = "120px";
	$( ".mainbtn" ).hover(
  function() {
    $(".header-anim").stop().animate({height:headA},function(){
		$(".header-anim-wumen").animate({width:'62px',right:'1px'});
		$(".header-anim-text").animate({width:'415px',left:'1px'})})
  }, function() {
    $(".header-anim").stop().animate({height:"60px"},function(){
		$(".header-anim-wumen").css({width:'0px'});
		$(".header-anim-text").css({width:'0px', left:"0px"})})
  }
);
//	’Œ¬≈– À≈¬€…
	
	$(".footer-info1-img").css({width:'0px'});
	$(".footer-info1-text").css({width:'0px'});
	$( ".button1" ).hover(
  		function() {
    	$(".footer-info1").stop().animate({height:"120px"},function(){
		$(".footer-info1-img").animate({width: "280px"});
		$(".footer-info1-text").animate({width: "290px"});
			});
  		}, function() {
	  	$(".footer-info1").stop().animate({height:"60px"},function(){
		$(".footer-info1-img").css({width: "0px"});
		$(".footer-info1-text").css({width: "0px"});
		});
		}
);
	
//	’Œ¬≈– œ–¿¬€…
	$(".footer-info2-img").css({width:'0px'});
	$(".footer-info2-text").css({width:'0px'});
	$( ".button2" ).hover(
	  function() {
		$(".footer-info2").stop().animate({height:"120px"},function(){
			$(".footer-info2-img").animate({width: "295px"});
			$(".footer-info2-text").animate({width: "270px"});
		});
	  }, function() {
		$(".footer-info2").stop().animate({height:"60px"},function(){
			$(".footer-info2-img").css({width: "0px"});
			$(".footer-info2-text").css({width: "0px"});
		});
	  }
	);
	
//	 À»  ÃŒ— ¬¿
	//,{easing:"linear"}
	$(".button1").on('click', function(){
		headA = "60px";
		$(".button2").hide(" ");
		$(".btn-blue").animate({right: "0px"},800, function(){
			$(".btn-blue p").show("");
			$(".btn-blue p").css({
				display:'inline-block'
			});	
		});
		$(".center-msc").show(" ");
		$(".header-anim-wumen").hide("");
		$(".header-anim-text").hide("");
		$(".logo_mather").show(" ");
		$(".info-text").html("¬—≈–Œ——»…— »… Õ¿”◊ÕŒ-Œ¡–¿«Œ¬¿“≈À‹Õ€… ‘Œ–”Ã");
	});
	
	
	
	
	
	
//	œŒ«»÷»»
	
	function position(){
		var arr1= $(".button1").offset();
		var arr2= $(".button2").offset();
//		console.log(arr1.top);
		console.log(arr2);
		$(".footer-info1").css({left:arr1.left+40});
		$(".footer-info2").css({left:arr2.left+40});	
	}
		
	
	$(window).resize(function() {
		position();
		
	});
	
	position();
	
	
	
//	œ≈–≈ Àﬁ◊≈Õ»≈ ¡› √–¿”Õƒ¿
	
	$(".bg-btn-in-bg1").on('click', function(){
		$(".wr-russia-text").animate({height:"0vh"});
		$(".wr-russia-foto").animate({height:"0vh"});
		$(".lang a").css({color:"#ffffff"});
		$(".bg-btn-in-bg1").css({background:"rgba(255,255,255,1)"});
		$(".bg-btn-in-bg2").css({background:"rgba(194,192,194,0.5)"});
		$(".bg-btn-in-bg3").css({background:"rgba(194,192,194,0.5)"});
		
		$(".fb").attr("src","img/social-fb.png");
		$(".tw").attr("src","img/social-tw.png");
		$(".ok").attr("src","img/social-ok.png");
		$(".yt").attr("src","img/social-yt.png");		
		
	})
	
	
	$(".bg-btn-in-bg2").on('click', function(){
		$(".wr-russia-foto").animate({height:"0vh"});
		$(".wr-russia-text").animate({height:"100vh"});
		$(".lang a").css({color:"#000000"});
		$(".bg-btn-in-bg1").css({background:"#FCC68B"});
		$(".bg-btn-in-bg2").css({background:"#FF9D27"});
		$(".bg-btn-in-bg3").css({background:"#FCC68B"});
		
		$(".fb").attr("src","img/social-fb-orange.png");
		$(".tw").attr("src","img/social-tw-orange.png");
		$(".ok").attr("src","img/social-ok-orange.png");
		$(".yt").attr("src","img/social-yt-orange.png");
		
		
	});
	
	
	
	$(".bg-btn-in-bg3").on('click', function(){
		$(".wr-russia-text").animate({height:"0vh"});
		$(".wr-russia-foto").animate({height:"100vh"});
		$(".lang a").css({color:"#000000"});
		$(".bg-btn-in-bg1").css({background:"rgba(194,194,194,0.5)"});
		$(".bg-btn-in-bg2").css({background:"rgba(194,192,194,0.5)"});
		$(".bg-btn-in-bg3").css({background:"rgba(25,25,25,1)"});
		$(".fb").attr("src","img/social-fb.png");
		$(".tw").attr("src","img/social-tw.png");
		$(".ok").attr("src","img/social-ok.png");
		$(".yt").attr("src","img/social-yt.png");
	});
	
	
//	¬€—Œ“¿ ‘Œ“Œ¡ÀŒ ¿
	
	 var wih = $(window).height();
	 var wiw = $(window).width();
	$(".wr-gall").css({maxHeight: "90vw"});
	if (wih < 900 && wiw > 1800){
		console.log("lil")
		$(".wr-gall").css({maxWidth: "60%"})
	};
	if (wih < 900 && wiw >= 1200){
		$(".wr-gall").css({maxWidth: "60%"})
	}; 
	if (wih < 700 && wiw >= 1200){
		$(".wr-gall").css({maxWidth: "50%"})
	};
	if (wih < 500 && wiw >= 1200){
		$(".wr-gall").css({maxWidth: "65%"})
	};	
	if (wih < 900 && wiw >= 1200){
		$(".wr-gall").css({maxWidth: "65%"})
	}; 
	if (wih < 700 && wiw >= 1200){
		$(".wr-gall").css({maxWidth: "55%"})
	};
	if (wih < 400 && wiw >= 1200){
		$(".wr-gall").css({maxWidth: "45%"})
	}; 
	if (wih < 700 && wiw >= 1200){
		$(".wr-gall").css({maxWidth: "50%"})
	};
	if (wih < 500 && wiw >= 1200){
		$(".wr-gall").css({maxWidth: "65%"})
	};
	
	
//	’Œ¬≈– √¿ÀÀ≈–≈ﬂ
	$(".poa-hover").css({
		opacity: "0"
	})
	
	$(".col-my a").hover(
			function(){
			  var poaH = $(this).children(".poa-hover").height();
				console.log(poaH);
				$(this).children(".poa-hover").children(".prev").css({
					marginTop: poaH/2-10 + "px"
				});
				$(this).children(".poa-hover").stop().animate({
					opacity: "1"
				},200)
			},
			function(){
			  $(this).children(".poa-hover").stop().animate({
					opacity: "0"
				},200)
			});
	

})