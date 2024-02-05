//Typing animation

var typed = new Typed(".auto-type",{
  strings: [
    '<span class="one">CSE Department.</span>',
    '<span class="two">World Of Innovation.</span>',
    '<span class="two">The Realm Of Teaching.</span>',
    '<span class="one">CSE Department.</span>'
  ],
  typeSpeed:100,
  backSpeed:50,
  loop:false,
  showCursor: true,
  onComplete: function() {
    var cursor = document.querySelector('.typed-cursor');
    cursor.style.display = 'none';
  }
})

//HOD

// function toggleParagraph() {
// var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// var paragraph = document.getElementById("paragraph");
// var text= document.getElementById("Show")
// if (screenWidth >= 600) {
//   if (paragraph.style.display === "none") {
//     paragraph.style.display = "block";
//     text.innerHTML = "Show Less";

//   } else {
//     paragraph.style.display = "none";
//     text.innerHTML = "Show More";
//   }
// }
// else{
//   if (paragraph.style.display === "none") {
//     paragraph.style.display = "block";
//     text.innerHTML = "Show Less";
//   } else {
//     paragraph.style.display = "none";
//     text.innerHTML = "Show More";
//   }
// }
// }

toggleParagraph();

// Counting Numbers
function animateCounterNumbers() {
var counterElements = document.querySelectorAll('.counter-numbers');
var duration = 1000; 
var totalSteps = 100; 

counterElements.forEach(function(element) {
  var targetNumber = parseInt(element.getAttribute('data-number'));
  var startNumber = 0;
  var step = targetNumber / totalSteps;
  var intervalDuration = duration / totalSteps;

  var interval = setInterval(function() {
    if (startNumber >= targetNumber) {
      clearInterval(interval);
      element.textContent = targetNumber + "+";
      return;
    }
    startNumber += step;
    element.textContent = Math.round(startNumber);
  }, intervalDuration);
});
}

function handleIntersection(entries, observer) {
entries.forEach(function(entry) {
  if (entry.isIntersecting) {
    animateCounterNumbers();
    observer.unobserve(entry.target);
  }
});
}

var counterSection = document.querySelector('.startanimation');
var observer = new IntersectionObserver(handleIntersection, {
root: null,
rootMargin: '0px',
threshold: 0.5 
});

observer.observe(counterSection);

function toggleParagraph() {
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var paragraphContainer = document.querySelector(".paragraph-container");
var text = document.getElementById("Show");

if (screenWidth >= 600) {

  if (paragraphContainer.style.display === "none") {
    paragraphContainer.style.display = "block";
    text.innerHTML = "Show Less";
  } else {
    paragraphContainer.style.setProperty("display", "none", "important");
    text.innerHTML = "Show More";
  }
} else {
  if (paragraphContainer.style.display === "none") {
    paragraphContainer.style.display = "block";
    text.innerHTML = "Show Less";
  } else {
    paragraphContainer.style.setProperty("display", "none", "important");
    text.innerHTML = "Show More";
  }
}
}



/*Slideshow*/
wmiCarousel('#ProductPromotions', 2500);
function wmiCarousel(containerSelector, duration) {
  let slidecount;
  let slideIndex = 1;
  let container = document.querySelector(containerSelector);
  let slides = container.querySelectorAll('.PromotionsList > li');
  let dots = container.querySelectorAll('.controls > span.dot');
  let isPaused = false;
  let timer;
  /*Slideshow*/
  function SlideShow() {
    if (!isPaused) {
      let i;
      ChangeSlide(slideIndex);
      for (i = 0; i < slides.length; i++) {
        dots.forEach(function(dot) {
          dot.classList.remove('active');
        });
        dots[slideIndex - 1].classList.add('active');
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      /*Dots*/
      dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
          dots.forEach(function(sibling) {
            sibling.classList.remove('active');
          });
          dot.classList.add('active');
          slidecount = dot.dataset.slide;
          ChangeSlide(slidecount);
          slideIndex = slidecount;
        });
      });
      clearTimeout(timer);
      timer = setTimeout(SlideShow, duration);
    }
  }
  /*Change Slide*/
  function ChangeSlide(slidenum) {
    var prevIndex = null;
    slides.forEach(function(item, index) {
      item.classList.remove('transform');
      item.classList.remove('active');
      if (item.dataset.slideValue == slidenum) {
        prevIndex = (index - 1 + slides.length) % slides.length;
        item.classList.add('active');
      }
    });
    if (prevIndex !== null) {
      slides[prevIndex].classList.add('transform');
    }
  }
  // Pause on hover
  container.addEventListener('mouseenter', function() {
    isPaused = true;
    clearTimeout(timer);
  });

  // Resume on mouse leave
  container.addEventListener('mouseleave', function() {
    isPaused = false;
    timer = setTimeout(SlideShow, duration);
  });
  SlideShow();
}
