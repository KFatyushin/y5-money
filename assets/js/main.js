// HEADER TASKS SLIDES
let headerTasksSlides = document.querySelector('.header-tasks-container');
let swiperHeaderTasks = headerTasksSlides ?
    new Swiper(headerTasksSlides, {
        spaceBetween: 40,
        speed: 500,
        slidesPerView: 4,
        slidesPerGroup: 2,
        loop: true,
        freeMode: true,

        navigation: {
            nextEl: '.header-tasks-button-next',
            prevEl: '.header-tasks-button-prev',
        },

        breakpoints: {
            300: {
                spaceBetween: 16,
                speed: 1000,
                width: 464,
            },

            576: {
                width: 576,
            },

            991: {
                width: 800,
            }
        }
}) : '';

// FINANCE BY MONTH SLIDES
let financeByMonthContainer = document.querySelector('.finance-by-month-container');
let swiperFinanceByMonth = financeByMonthContainer ?
    new Swiper(financeByMonthContainer, {
        simulateTouch: false,
        slidesPerView: 12,

        navigation: {
            prevEl: '#finance-cart-btn-prev',
            nextEl: '#finance-cart-btn-next',
        },

        breakpoints: {
            0: {
                spaceBetween: 7,
                slidesPerView: 5,
                slidesPerGroup: 1,
                simulateTouch: false,
                slideActiveClass: 'active',
                centeredSlides: true,
            },

            575: {
                slidesPerView: 12,
                spaceBetween: 15,
                centeredSlides: false,
            },

            992: {
                slidesPerView: 12,
                spaceBetween: 20,
                centeredSlides: false,
            }
        }
    }) : '';

// PIE CHART SLIDES
let pieChartContainer = document.querySelector('.finance-by-month-pie-chart-container');
let swiperPieChart = pieChartContainer ?
    new Swiper(pieChartContainer, {
        slidesPerView: 1,
        slidesPerGroup: 1,

        navigation: {
            prevEl: '#pie-chart-btn-prev',
            nextEl: '#pie-chart-btn-next',
        },
    }) : '';

// MOBILE MENU
let menuOpen = document.getElementById('menu-open'),
    menuClose = document.getElementById('menu-close'),
    mobileMenu = document.getElementById('mobile-menu'),
    mobileOverlay = document.getElementById('mobile-menu-overlay');

// open menu
(menuOpen) ?
    menuOpen.addEventListener('click', (evt) => {
        evt.preventDefault();

        mobileMenu.classList.add('active');
    }) : '';
// close menu
(menuClose) ?
    menuClose.addEventListener('click', (evt) => {
        evt.preventDefault();

        mobileMenu.classList.remove('active');
    }) : '';
// close overlay menu
(mobileOverlay) ?
    mobileOverlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    }) : '';

