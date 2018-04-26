$(document).ready(function() {
	$('#timepicker').mdtimepicker();

		$('.p-price').text('0 тнг');


	let change = 1;
	let changeSofa = 1;
	let changeArmchair = 1;
	let changeKitchen = 1;
	let changeCarpet = 1;
	let changeBean = 1;
		let changeChair = 1;
	// let a = number($('.sofa-radio').val) * 2; 

		$(".number1").text(changeSofa) ;
		$('.right-arrow1').click(function() {
		++changeSofa;
		$(".number1").text(changeSofa) ;
		if (changeSofa > 4) {
			changeSofa = 0;
		}

	});
		$(".number1").text(changeSofa) ;
		$('.back-arrow1').click(function() {
		--changeSofa;
		$(".number1").text(changeSofa) ;
		console.log(changeSofa);
		if (changeSofa < 1) {
			changeSofa = 6;
		}

	});

		$(".number2").text(changeArmchair) ;
		$('.right-arrow2').click(function() {
		++changeArmchair;
		$(".number2").text(changeArmchair) ;
		console.log(change);
		if (changeArmchair > 4) {
			changeArmchair = 0;
		}

	});
		$(".number2").text(changeArmchair) ;
		$('.back-arrow2').click(function() {
		--changeArmchair;
		$(".number2").text(changeArmchair) ;
		console.log(changeArmchair);
		if (changeArmchair < 1) {
			changeArmchair = 6;
		}

	});

		

		$(".number4").text(changeCarpet) ;
		$('.right-arrow4').click(function() {
		++changeCarpet;
		$(".number4").text(changeCarpet) ;
		console.log(change);
		if (changeCarpet > 4) {
			changeCarpet = 0;
		}

	});
		$(".number4").text(changeCarpet) ;
		$('.back-arrow4').click(function() {
		--changeCarpet;
		$(".number4").text(changeCarpet) ;
		console.log(change);
		if (changeCarpet < 1) {
			changeCarpet = 6;
		}

	});

	$(".number5").text(changeChair) ;
		$('.right-arrow5').click(function() {
		++changeChair;
		$(".number5").text(changeChair) ;
		console.log(change);
		if (changeChair > 4) {
			changeChair = 0;
		}

	});
		$(".number5").text(changeChair) ;
		$('.back-arrow5').click(function() {
		--changeChair;
		$(".number5").text(changeChair) ;
		console.log(change);
		if (changeChair < 1) {
			changeChair = 6;
		}

	});

	$(".number6").text(changeBean) ;
		$('.right-arrow6').click(function() {
		++changeBean;
		$(".number6").text(changeBean) ;
		console.log(change);
		if (changeBean > 4) {
			changeBean = 0;
		}

	});
		$(".number6").text(changeBean) ;
		$('.back-arrow6').click(function() {
		--changeBean;
		$(".number6").text(changeBean) ;
		console.log(change);
		if (changeBean < 1) {
			changeBean = 6;
		}

	});
		$(".number7").text(changeKitchen) ;
		$('.right-arrow7').click(function() {
		++changeKitchen;
		$(".number7").text(changeKitchen) ;
		console.log(change);
		if (changeKitchen > 4) {
			changeKitchen = 0;
		}

	});
		$(".number7").text(changeKitchen) ;
		$('.back-arrow7').click(function() {
		--changeKitchen;
		$(".number7").text(changeKitchen) ;
		console.log(change);
		if (changeKitchen < 1) {
			changeKitchen = 6;
		}

	});

$(".number7").text(change) ;
		$('.right-arrow7').click(function() {
		++change;
		$(".number7").text(change) ;
		console.log(change);
		if (change > 4) {
			change = 0;
		}

	});
		

		$('.p-price').text('Ваша цена - 0 тнг');
		console.log(change);
		$('.p-sale').text("Ваша скидка - " + 0 +"%" );
		
	});


	 $('.kitchen-radio-div').click(function()  {
		$('.p-price').text( "Ваша цена -  " + $('.kitchen-radio').val() + " тнг");
		$('.radio-div').removeClass('-active');	
		$('.kitchen-radio-div').addClass('-active');
		$('.green-image').removeClass('-green-image-block')
		$('.kitchen-radio-div').addClass('-green-image-block');
		 d = 10
	    if (c > 2500) {
	    	
	    	$('.p-sale').text("Ваша скидка - " + d +"%" );
	    }
	    if (c < 2500) {
	    	$('.p-sale').text("Ваша скидка - " + 0 +"%" );
	    }
	});
	  $('.armchair-radio-div').click(function()  {
		$('.p-price').text( "Ваша цена -  " + $('.armchair-radio').val() + " тнг");
		$('.radio-div').removeClass('-active');	
		$('.armchair-radio-div').addClass('-active');
		$('.green-image').removeClass('-green-image-block')
		$('.armchair').addClass('-green-image-block');
		 d = 10
	    if (c > 2500) {
	    	
	    	$('.p-sale').text("Ваша скидка - " + d +"%" );
	    }
	    if (c < 2500) {
	    	$('.p-sale').text("Ваша скидка - " + 0 +"%" );
	    }
	});
	   $('.matrac-radio-div').click(function()  {
		$('.p-price').text( "Ваша цена -  " + $('.matrac-radio').val() + " тнг");
		$('.radio-div').removeClass('-active');	
		$('.matrac-radio-div').addClass('-active');
		$('.green-image').addClass('.green-image')
		$('.green-image5').removeClass('-green-image');
		let a = Number($('.matrac-radio').val()); 
		let b = Number($('#matrac').val()); 
		let c = a + b 
		$('.p-price').text( "Ваша цена -  " + c +  " тнг");
		 d = 10
	    if (c > 2500) {
	    	
	    	$('.p-sale').text("Ваша скидка - " + d +"%" );
	    }
	    if (c < 2500) {
	    	$('.p-sale').text("Ваша скидка - " + 0 +"%" );
	    }
	});
	   $('.carpet-radio-div').click(function()  {
		$('.p-price').text( "Ваша цена -  " + $('.carpet-radio').val() + " тнг");
		$('.radio-div').removeClass('-active');	
		$('.carpet-radio-div').addClass('-active');
		$('.green-image').removeClass('-green-image-block')
		$('.carpet').addClass('-green-image-block');
		let a = Number($('.carpet-radio').val()); 
		let b = Number($('#carpet').val()); 
		let c = a + b 
		$('.p-price').text( "Ваша цена -  " + c +  " тнг");
		 d = 10
	    if (c > 2500) {
	    	
	    	$('.p-sale').text("Ваша скидка - " + d +"%" );
	    }
	    if (c < 2500) {
	    	$('.p-sale').text("Ваша скидка - " + 0 +"%" );
	    }
	});
	   $('.bean-radio-div').click(function()  {
		$('.p-price').text( "Ваша цена -  " + $('.bean-radio').val() + " тнг");
		$('.radio-div').removeClass('-active');	
		$('.bean-radio-div').addClass('-active');
		$('.green-image').removeClass('-green-image-block')
		$('.bean-radio-div').addClass('-green-image-block');
		 d = 10
	    if (c > 2500) {
	    	
	    	$('.p-sale').text("Ваша скидка - " + d +"%" );
	    }
	    if (c < 2500) {
	    	$('.p-sale').text("Ваша скидка - " + 0 +"%" );
	    }
	});
	    $('.chair-radio-div').click(function()  {
		$('.p-price').text( "Ваша цена -  " + $('.chair-radio').val() + " тнг");
		$('.radio-div').removeClass('-active');	
		$('.chair-radio-div').addClass('-active');
		$('.green-image').removeClass('-green-image-block')
		$('.chair-radio-div').addClass('-green-image-block');
		let a = Number($('.chair-radio').val()); 
		let b = Number($('#chair').val()); 
		let c = a + b 
		$('.p-price').text( "Ваша цена -  " + c +  " тнг");
		 d = 10
	    if (c > 2500) {
	    	
	    	$('.p-sale').text("Ваша скидка - " + d +"%" );
	    }
	    if (c < 2500) {
	    	$('.p-sale').text("Ваша скидка - " + 0 +"%" );
	    }
	});
	    $('.sofa-radio-div').click(function()  {
	    $('.radio-div').removeClass('-active');	
		$('.sofa-radio-div').addClass('-active');
		let a = Number($('.sofa-radio').val()); 
		let b = Number($('#sofa').val()); 
		let c = a + b;
		if (changeSofa === 2) {
			c = c*2 ;
		}
		$('.p-price').text( "Ваша цена -  " + c +  " тнг");
		$('.green-image').removeClass('-green-image-block')
		$('.sofa-radio-div').addClass('-green-image-block');
		 d = 10
	    if (c > 2500) {
	    	
	    	$('.p-sale').text("Ваша скидка - " + d +"%" );
	    }
	    if (c < 2500) {
	    	$('.p-sale').text("Ваша скидка - " + 0 +"%" );
	    }
	    

	});
	    	let a = Number($('.sofa-radio').val()); 
		let b = Number($('#sofa').val()); 
		let c = a + b;
	   
	//    if (change = 2) {
	//    	  $('.p-price').text( "Ваша цена -  " + a + " тнг");
	//    	};

	// // let change2sofa =  


 // // let changeChair2 = 5000;


 // 	$('.sofa-radio-div').click(function(){
 		
 // 	});






	

		 $("#only_num").keydown(function(event) {
  
    // Разрешаем: backspace, delete, tab и escape
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
      // Разрешаем: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (event.keyCode >= 35 && event.keyCode <= 39)) {
      // Ничего не делаем
      return;
    } else {
      // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault();
      }
    }
  });



