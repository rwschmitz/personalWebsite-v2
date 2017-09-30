var hobbies = Array.from(document.getElementsByClassName('hobbies'));
var classes = ['hobbies-slide-left', 'hobbies-slide-right'];

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

function test() {
    $(function() {
       $('.info-left').fadeTo(1000);
       $('.info-right').fadeTo(1000);
    });
 }
 
for (var i = 0; i < 5; i++) {
    hobbies[i].addEventListener("transitionend", test, false);
}

/* Old code

/*var hobbies = document.getElementsByClassName("hobbies");
var active = false;*/

// For mouse input

/*for (var i = 0; i < 5; i++) {
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

*/