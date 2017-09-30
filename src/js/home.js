var hobbies = document.getElementsByClassName("hobbies");
var active = false;

// For mouse input

for (var i = 0; i < 5; i++) {
    hobbies[i].onmouseover = function() {
            hobbies[0].classList.add('hobbies-slide-left');
            hobbies[1].classList.add('hobbies-slide-right');
            hobbies[2].classList.add('hobbies-slide-left');
            hobbies[3].classList.add('hobbies-slide-right');
            hobbies[4].classList.add('hobbies-slide-left');
    };
}

// For click input

for (var i = 0; i < 5; i++) {
    hobbies[i].onclick = function() {
            hobbies[0].classList.add('hobbies-slide-left');
            hobbies[1].classList.add('hobbies-slide-right');
            hobbies[2].classList.add('hobbies-slide-left');
            hobbies[3].classList.add('hobbies-slide-right');
            hobbies[4].classList.add('hobbies-slide-left');
    };
}

function test() {
$(function () {
    $('.info').fadeIn(1000);
});
}

for (var i = 0; i < 5; i++) {
    hobbies[i].addEventListener("transitionend", test, false);
}