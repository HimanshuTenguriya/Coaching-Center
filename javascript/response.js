navcontrol = document.querySelector('.navcontrol')  //burger
navbar = document.querySelector('.navbar')  //navbar
navlist = document.querySelector('.navlist')      //nav-list
rightnav = document.querySelector('.rightnav')    //right-nav

navcontrol.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
