// #####################################
// General Functions
// Navbar Scroll
let defaultScrllPos = window.pageYOffset;
let navBar = document.querySelector(".navbar")
let fxdNav = document.querySelector('.fixed-nav')
let btnTop = document.querySelector('.back-to-top')

window.addEventListener('scroll',function() {
    let CurScrllPos = window.pageYOffset;
        if (defaultScrllPos > 400) {
            navBar.classList.add('fixed-nav')
        } else {
            navBar.classList.remove('fixed-nav')
            navBar.classList.add('navbar')
        }
        defaultScrllPos = CurScrllPos;

    })

// #####################################
// Home Page ==> 
if (window.location.href.indexOf('index.html') > 0){
    let swiper = new Swiper(".landingSwiper", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    // Trending Carousel
    let trendingSwiper = new Swiper(".trending", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
        el: ".trending-pagination",
        clickable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 50,
        },
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
        },
        },
    });

    // Coming-Soon
    let counter = setInterval(() => {
        let countDownDate = new Date('Mar 1, 2023 15:37:25').getTime();
        let dateNow = new Date().getTime();
        let dateDiff = countDownDate - dateNow;
        // Some calc to get date for counter
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
        // Make units
        document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        // Condition if counter finished 
        if (dateDiff < 0) {
            clearInterval(counter);
            swal("Finish", "Now Let's Go!!");
            document.querySelector('.count-down').classList.add("none")
        }
        }, 1000)
}
// #####################################

// #####################################
// About-Us Page ==>
if (window.location.href.indexOf('About-Us.html') > 0) {
    $(document).ready(function(){
        let x = window.matchMedia("(max-width: 992px)")
        if (x.matches) {
            $(".owl-carousel").owlCarousel({
                loop:true,
                margin:30,
                autoplay:true,
                autoplayTimeout:1500,
                items: 1
                });
        } else {
            $(".owl-carousel").owlCarousel({
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:1500,
                items: 4
            });
        }
    })
}
// #####################################

// #####################################
// Community Page ==>
if (window.location.href.indexOf('Community.html') > 0){
    let counter = setInterval(() => {
        let countDownDate = new Date('July 12, 2023 00:00:00').getTime();
        let dateNow = new Date().getTime();
        let dateDiff = countDownDate - dateNow;
        // Some calc to get date for counter
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
        // Make units
        document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        // Condition if counter finished 
        if (dateDiff < 0) {
            clearInterval(counter);
            swal("Finish", "Now Let's Go!!");
            document.querySelector('.count-down').classList.add("none")
        }
        }, 1000)
}
// #####################################

// #####################################
// Age-Checker Page ==>
if (window.location.href.indexOf('Age-Check.html') > 0){
    let inputYear = document.querySelector('.year')
    let inputMonth = document.querySelector('.month')
    let inputDay = document.querySelector('.day')
    let confirmBtn = document.getElementById('btn')
    let clearBtn = document.querySelector('.clear')
    let arrOfInput = [inputYear,inputMonth,inputDay]
    let test = 0 

        arrOfInput.map((item)=>{
            item.addEventListener('change', ()=> {
                arrOfInput.map((haha)=>{
                    if(haha.value == ''&& test !== 3 ) {
                        console.log('empty');
                    }else {
                        test++
                        console.log('typed');
                    }
                })
            })
        })

}
// #####################################
// Blog Page ==>
if (window.location.href.indexOf('Blog.html') > 0){
    let imgg = document.querySelector('.post__image img')
    let inp = document.querySelector('.side-bar__post-btn input')
    let postUl = document.querySelector('.posts')
    let send = document.querySelector('.send__post')
    let inpCat = document.querySelector('.inpCat input')
    let inpTitle = document.querySelector('.inpTitle input')
    let inpPost = document.querySelector('.inpPost textarea')
    let inpName = document.querySelector('.inpUser input')
    let inpArr = [inpCat,inpName,inpPost,inpTitle]
    let arrOfPosts = []
    let modal = document.querySelector('.modal')
    let imgSrc = 'https://picsum.photos/200'
    function create() {
        let liPost = document.createElement('li')
        liPost.classList.add('post__info')
        liPost.innerHTML = `
        <div class="post__image">
        <img class="zoomable" src="${imgSrc}" alt="">
        </div>
        <div class="post__desc">
        <div class="post__info">
            <h5 class="post__category my-3">${inpCat.value}</h5>
            <h2 class="post__title my-3"><a href="#">${inpTitle.value}</a></h2>
            <p class="post__para">${inpPost.value}</p>
        </div>
        <div class="post__comment mb-5 d-flex align-items-center">
            <div class="post__user-image me-3">
                <img src="Assets/Images/blog/aced9dc97780ca621adc476fe544bf9a.jpg" alt="">
            </div>
            <div class="post__user-name d-flex align-items-center">
                <h5>by ${inpName.value}</h5>
                <span class="mx-2">/</span>
                <h5>June 7, 2017</h5>
                <div class="post-icon mx-4">
                    <a href="#"><i class="fa-solid fa-message"></i></a>
                    <span>0</span>
                </div>
                <div class="post__share">
                    <a href="Comment.html"><i class="fa-solid fa-share-from-square"></i></a>
                </div>
            </div>
        </div>
    </div>`
        postUl.append(liPost)
        arrOfPosts.push(liPost)
        localStorage.setItem('post','created')
    }
    send.addEventListener('click', () => {
        if (inp.value.trim().length == 0) {
            inp.value = ''
            swal("Sorry", "YOU SHOULD TYPE ANY THING");
        } else {
            create() 
            inp.value = ''
        }
        inpArr.map((inp) => {
        })
    })
    Zoom(".zoomable");
    
}
// #####################################
// Shop Page ==>
if (window.location.href.indexOf('Shop.html') > 0){
    var swiper = new Swiper(".shopSlider", {
        pagination: {
            el: ".shopPagi",
            dynamicBullets: true,
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        loop: true,
    });
}
// #####################################
// Art Work Page ==>
if (window.location.href.indexOf('Art-Page.html') > 0){
    Zoom(".zoomable");
}
