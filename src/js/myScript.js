"use strict"




$(document).ready(function(){



$(window).scroll(() => {
	let scrollDistance = $(window).scrollTop();
	let t = 0;

	$(".section").each((i, el) => {

		if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
			$("nav a").each((i, el) => {
				if($(el).hasClass("active"))
				{	

					$(el).removeClass("active");
				}


			});
			
			$('nav li:eq('+ i +')').find('a').addClass('active');
		}

	});
});

$(function() {
    init();
});
 
function init() {
 
     setTimeout(initShowModals,1000);
     initHideModals();
     return false;
 }  
 
 function initShowModals()
 {  
      var $upBlock = $(".modal");
         $upBlock.show('slow');
         console.log('show list');
 }
  
 function initHideModals()
 {  
     $('.close ').on('click', function() {
         $('.modal').hide('slow');    
        return false;
     });
    
     $('.modal-content').on('click', function() {
        return false;
     });
}


	let options = {threshold: [1]};
	let observer = new IntersectionObserver(onEntry,options);
	let elements = $('.chsil');
	elements.each((i,el) => {
		observer.observe(el);
	});

});

$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
});

function onEntry (entry){
	entry.forEach(change =>{
		if(change.isIntersecting){

			let end = $(change.target).text();
			let i = 0;
			end = end - 1 + 1;
			let timerId = setInterval(() => run(end),10);
			function run(end){
				
				if(i<=end){
					$(change.target).html(i);
					i++;
				}
			};
			/*$(change.target).html($(change.target).text());*/
		}
	});
}



let arrType = [
	["Сайт-визитка","Лэндинг","Интернет-магазин","Корпоративный сайт", "Игровой портал"],
	["Динамический дизайн", "Обычный дизайн", "Уникальный дизайн"],
	["Адаптивный", "Неадаптивный"]
];

let arrCalc = [
	[
		[500,5],[700,7],[2000,10],[2231,14],[5000,20]
	],
	[
		[900,2],[300,1],[4000,5]
	],
	[
		[5000,5],[200,2]
	]
];

	let price = 0;
	let date = 0 ;
	let indexTypeSite = -1;
	let indexTypeDesign = -1;
	let indexTypeAdapt = -1;

$('#type_site').click(function(){
	let a = $('#type_site option:selected').text();
	
	function type(site){
		for(let i=0; i<=arrType[0].length;i++){
			if(site == arrType[0][i]){
				return i;
			}
		}
	}

	indexTypeSite = type(a);
		if((indexTypeAdapt != -1)&&(indexTypeSite != -1)&&(indexTypeDesign != -1))
	CalcPriceDate(indexTypeSite,indexTypeDesign,indexTypeAdapt);

});

$('#type_design').click(function(){
	let b = $('#type_design option:selected').text();
	function design(des){
		for(let i=0; i<=arrType[1].length;i++){
			if(des == arrType[1][i]){
				return i;
			}
		}
	}
	
		indexTypeDesign = design(b);	
		if((indexTypeAdapt != -1)&&(indexTypeSite != -1)&&(indexTypeDesign != -1))
	CalcPriceDate(indexTypeSite,indexTypeDesign,indexTypeAdapt);
	
});

$('#type_adapt').click(function(){
	let c = $('#type_adapt option:selected').text();
	
	function adapt(ad){
		for(let i=0; i<=arrType[2].length;i++){
			if(ad == arrType[2][i]){
				return i;
			}
		}
	}
	
	console.log(indexTypeSite);
	indexTypeAdapt = adapt(c);
	if((indexTypeAdapt != -1)&&(indexTypeSite != -1)&&(indexTypeDesign != -1))
	CalcPriceDate(indexTypeSite,indexTypeDesign,indexTypeAdapt);
});




function CalcPriceDate(indexTypeSite,indexTypeDesign,indexTypeAdapt){
	price = arrCalc[0][indexTypeSite][0] + arrCalc[1][indexTypeDesign][0] + arrCalc[2][indexTypeAdapt][0];
	date = arrCalc[0][indexTypeSite][1] + arrCalc[1][indexTypeDesign][1] + arrCalc[2][indexTypeAdapt][1];
	$('#time').html(date);
	$('#money').html(price);
}
/*$('#type_site').click(function(){
	let price = $('#type_site option:selected').text();
	console.log(price);
	$('#time').html(price);
})
*/


let chislo = $('.chsil').text() +1;
let i = 0;

/*let timer = setInterval(() => run(i),200);
function run(chsilo){
		i++;
		$('.chsil').html(i);
	
}*/



