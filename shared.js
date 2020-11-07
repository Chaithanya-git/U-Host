let backdrop = document.querySelector('.backdrop');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal');
let close = document.querySelectorAll('.modal__actions');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for(let i=0; i<selectPlanButtons.length; i++){
	selectPlanButtons[i].addEventListener('click',function(){
       modal.style.display='block';
       backdrop.style.display='block';
       //backdrop.classList.add('open');
       })
};


backdrop.addEventListener('click',closeModal);

if (modal) {
	modal.addEventListener("click",closeModal);
};


function closeModal() {
     backdrop.style.display='none';
     //backdrop.classList.remove('open');
     mobileNav.style.display='none';
     if(modal){
     	modal.style.display='none';
     }
};

toggleButton.addEventListener('click',function(){
	mobileNav.style.display='block';
	backdrop.style.display='block';
})