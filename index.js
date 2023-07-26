  
  var first = document.querySelector('.first');
  var second = document.querySelector('.second');
  var container = document.querySelector('.container');
  
  
  console.log(first);
  
  first.addEventListener('mouseenter',function(e){

		 first.style.width = '80%';
		 second.style.width = '20%';
		 first.style.transition = '1s';
		 second.style.transition = '1s';

  });
  
  second.addEventListener('mouseenter',function(e){

		 first.style.width = '20%';
		 second.style.width = '80%';
		 first.style.transition = '1s';
		 second.style.transition = '1s';
  });
  
  container.addEventListener('mouseleave',function(e){

		 first.style.width = '50%';
		 second.style.width = '50%';
		 first.style.transition = '1s';
		 second.style.transition = '1s';
  });