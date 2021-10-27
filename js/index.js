const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
        }
    }

});


let screenWidth = window.screen.width
    // console.log(screenWidth)

if (screenWidth <= 576) {
    let burgermenu = document.querySelector('.navbar-toggler')
    let headerbutton = document.querySelector('.headerBtn')


    burgermenu.addEventListener('click', () => {

        if (burgermenu.ariaExpanded == 'true') {
            headerbutton.style.display = 'block'
        } else {
            headerbutton.style.display = 'none'
        }

    })
} else if (screenWidth > 576) {
    let headerbutton = document.querySelector('.headerBtn')
    headerbutton.style.display = 'block'
}