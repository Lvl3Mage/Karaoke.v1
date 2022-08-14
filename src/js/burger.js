let burgerBtn = document.querySelector('.burger-btn');
let nav = document.querySelector('.navigation');

burgerBtn.addEventListener('click', function(){
	burgerBtn.classList.toggle('active');
	nav.classList.toggle('active');
})