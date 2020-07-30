$('.submit').click(function(event) {
			event.preventDefault();
			$(this).addClass('active');
			$('.main').addClass('active');
			setTimeout(function(){
				$('.letterBox').addClass('active');
				$('.formwrap').addClass('go');
			}, 1000);
			setTimeout(function(){
				$('.letterBox').addClass('fold');
			}, 1300);
			setTimeout(function(){
				$('.main').addClass('go');
			}, 2400);
		});
