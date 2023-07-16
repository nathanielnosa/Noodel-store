const menu = document.querySelector('#menu');
const ul = document.querySelector('#nav-menu');

menu.addEventListener('click',addMenu);
function addMenu(){
    if(ul.classList.contains('hidden')){
        ul.classList.remove('hidden');
        ul.classList.add('block');
        menu.classList.remove('bx-menu');
        menu.classList.add('bx-x');
    }else{
        menu.classList.remove('bx-x');
        menu.classList.add('bx-menu');
        ul.classList.remove('block');
        ul.classList.add('hidden');
    }
}

// aos
AOS.init();