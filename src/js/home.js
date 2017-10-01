var hobbies = Array.from(document.getElementsByClassName('hobbies'));
var classes = ['hobbies-slide-down'];

// For mouseover OR click

function addHobbyClass (hobby, index) {
  hobby.classList.add(classes[index % classes.length]);
}

function hobbyEventListener () {
  hobbies.forEach(addHobbyClass);
}

hobbies.map(function (hobby) {
  hobby.addEventListener('mouseover', hobbyEventListener);
  hobby.addEventListener('click', hobbyEventListener);
});

// For scrolling

var last_known_scroll_position = 0;
var ticking = false;

function scrollDown(scroll_pos) {
 hobbies[0].classList.add('hobbies-slide-down');
 hobbies[1].classList.add('hobbies-slide-down');
 hobbies[2].classList.add('hobbies-slide-down');
 hobbies[3].classList.add('hobbies-slide-down');
 hobbies[4].classList.add('hobbies-slide-down');
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      scrollDown(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});

function animateText() {
    $(function() {
       $('.info-down').animate({opacity: 1});
    });
 }
 
for (var i = 0; i < 5; i++) {
    hobbies[i].addEventListener("transitionend", animateText, false);
}
