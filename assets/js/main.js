// Dynamic Age
const birthYear = 2001; // Ganti dengan tahun lahirmu
const birthMonth = 5;   // Ganti dengan bulan lahirmu (Januari = 1)
const birthDay = 4;    // Ganti dengan tanggal lahirmu
const today = new Date();
let age = today.getFullYear() - birthYear;

const isBirthdayPassed =
  today.getMonth() + 1 > birthMonth || 
  (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);

if (!isBirthdayPassed) {
  age--;
}

document.addEventListener('DOMContentLoaded', () => {
  const ageSpan = document.getElementById("age");
  if (ageSpan) ageSpan.textContent = age;
});


// Menu Show Y Hidden
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'), 
      navClose = document.getElementById('nav-close')

// MENU SHOW
// Validate if
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// Validate if
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// --------------------------------CUSTOM-------------------------------------------
const hueRange = document.getElementById('hueRange');
const hueValue = document.getElementById('hueValue');
const colorBox = document.getElementById('colorBox');

// Event listener untuk memantau perubahan pada input range
hueRange.addEventListener('input', updateColor);

// Fungsi untuk memperbarui warna sesuai dengan nilai hue
function updateColor() {
    const hue = hueRange.value;
    hueValue.textContent = hue;

    // Mengubah nilai --hue-color dan memperbarui warna elemen dengan HSL
    document.documentElement.style.setProperty('--hue-color', hue);
    colorBox.style.backgroundColor = `hsl(var(--hue-color), 69%, 61%)`;
}

// ------------------------- ACCORDION SKILLS ------------------
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// Services Modal
const modalViews = document.querySelectorAll('.services__modal'), 
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

// PORTFOLIO SWIPER
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// TESTIMONIAL SWIPER
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2, 
        }
    }
  });


//   SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// CHANGE BG HEADER
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// SHOW SCROLLUP BUTTON
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// EMAIL
function prepareEmailLink() {
    var name = document.getElementById("name").value;
    var project = document.getElementById("project").value;
    var newSubject = "Hi Naufal Nashif! " + "Saya " + name + " - " + project;
    var emailLink = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=naufalnashif.imanuddin@gmail.com&su=" + encodeURIComponent(newSubject);
    return emailLink;
}

function prepareAndOpenEmailLink() {
    var emailLink = prepareEmailLink();
    // Membuka tab baru
    window.open(emailLink, '_blank');
}
