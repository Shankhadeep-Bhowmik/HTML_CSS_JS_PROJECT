 var typed = new Typed('#element', {
      strings: ['Web Developer', 'MERN Stack Developer'],
      typeSpeed: 40,
});


 var typed = new Typed('#element1', {
      strings: ['I’m a passionate web developer pursuing my MCA at Garden City University. I specialize in front-end development with HTML, CSS, and JavaScript (ES6+), and I’m currently advancing my skills in React.js to become a MERN Stack Developer. I’m committed to continuous learning and exploring emerging technologies like AI, with a focus on building clean, functional, and user-friendly web applications.'],
      typeSpeed: 25,
});
// lets add functionality to project slider
let slideIndex = 0;
// arrows have different function name called plusSlides(-1)!
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for(i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  // automatic slideshow
}
// Can you explain this showSlides function full in easy words? How it is working?
// Sure! The showSlides function is used to create a slideshow effect for elements with the class name "mySlides". Here's how it works step by step:
// 1. It first gets all elements with the class name "mySlides" and stores them in the slides variable.
// 2. It hides all slides by setting their display style to "none".
// 3. It increments the slideIndex variable to show the next slide.
// 4. If the slideIndex exceeds the number of slides, it wraps around to the first slide.
// 5. It displays the current slide by setting its display style to "block".
// 6. Finally, it sets a timeout to call the showSlides function again after 3 seconds, creating a loop.

// lets write a logic for form submision. When user submit form the data should erase from the input fields
let form = document.getElementById('form');
form.addEventListener('submit', function(event){
  let inputName = document.getElementById('inputName');
  let inputEmail = document.getElementById('inputEmail');
  let inputMessage = document.getElementById('inputMessage');
  inputName.value = '';
  inputEmail.value = '';
  inputMessage.value = '';
  event.preventDefault();
})