var $ = jQuery;
var wid = $(window).width();
$( document ).ready(function() {
    menuWidth();
});

jQuery(window).on('resize', function(){
    menuWidth();
});

// update dropdown menu width js 
function menuWidth(){
    if (wid <= 992){
        var whatever = $(".navbar-nav");
        var left = whatever.offset().left;
        var spaceleft = left - 30;
        $('.dropdown-menu').css('margin-left', '-'+spaceleft+'px');
    }   
}

//  menu open on hover for desktop and click on for mobile js 
document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll('.navbar .dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth >= 992) {
                e.preventDefault();
                e.stopPropagation();
            }
        });
    });

    const navbarMenu = document.getElementById('navbarNavDropdown');
    const body = document.body;
    
    const bsCollapse = new bootstrap.Collapse(navbarMenu, {toggle: false}); // Initialize the collapse

    // Event listener for when the navbar is shown
    navbarMenu.addEventListener('show.bs.collapse', function() {
        body.classList.add('menu-open');
    });

    // Event listener for when the navbar is hidden
    navbarMenu.addEventListener('hide.bs.collapse', function() {
        body.classList.remove('menu-open');
    });
});
