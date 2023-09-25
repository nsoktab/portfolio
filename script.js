//typewriting effect
const text = "yourNextIntern";
        const delay = 180; // Delay in milliseconds between each character

        const typewriterElement = document.getElementById('hero-bold');
        const cursorElement = document.getElementById('cursor');
        const originalText = typewriterElement.textContent;

        function typeWriter() {
            let index = 0;
            const timer = setInterval(function () {
                typewriterElement.textContent += text[index];
                index++;
                if (index >= text.length) {
                    clearInterval(timer);
                    cursorElement.style.display = 'none'; //hide the cursor
                }
            }, delay);
        }

        // Call the typewriter function
        typeWriter();

//accordion functionality
var acc = document.getElementsByClassName("skill-name");
var cross=document.getElementsByClassName("lines")
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    /* Toggle between hiding and showing the active panel */
    /*var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    /*toggle the plus to cross*/
    cross.classList.toggle("active")
  });
}

/*smooth transition in the accordion*/
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
  ;
    });
}

//project slideshow
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'cube',
  cubeEffect: {
   shadow: true,
   shadowOffset: 0.3,
   shadowScale: 0.94,
    slideShadows: true,
  },

  //Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  } ,
  
  pagination: {
    el: '.swiper-pagination',
  },
});
