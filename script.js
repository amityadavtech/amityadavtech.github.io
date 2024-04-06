function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}
// Ye function menu item click par call hoga
document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("click", () => {
    let menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className.includes("responsive")) {
      menuBtn.className = "nav-menu";
    }
  });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Youtuber", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })
/* -- ABOUT INFO & CONTACT INFO -- */
const srBottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: true
})

srBottom.reveal('.service', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')


    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)



document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('name');
  const introBackground = document.getElementById('intro-background');
  const name = "AMIT"; 
  let currentIndex = 0;
  function goToPageTop() {
    window.scrollTo(0, 0);
  }
  goToPageTop()
  const revealLetterByLetter = () => {
    if (currentIndex < name.length) {
      const letterSpan = document.createElement('span');
      letterSpan.textContent = name[currentIndex];
      letterSpan.classList.add('fade-in');
      nameElement.appendChild(letterSpan);
      currentIndex++;
      setTimeout(revealLetterByLetter, 200); 
    } else {
      setTimeout(() => {
        introBackground.style.backgroundColor = "transparent";
        nameElement.style.opacity = "0"; 

        
        setTimeout(() => {
          introBackground.style.display = "none"; 
         
        }, 1000); 
      }, 100); 
    }
  };

  revealLetterByLetter();
});

//Sticky Ke Liye
window.onscroll = function () { makeSticky(); };

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function makeSticky() {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPosition > sticky) {
    navbar.classList.add("sticky");
    navbar.style.background = ""; 
  } else if (scrollPosition <= 0) {
    navbar.classList.remove("sticky");
    navbar.style.background = "transparent";
  }
}






