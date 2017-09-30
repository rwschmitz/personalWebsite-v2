var hobbies = document.getElementsByClassName("hobbies");
var active = false;

for (var i = i; i < 5; i++) {
    hobbies[i].onclick = function() {
        hobbies[0].classList.add('hobbies-slide-left');
        hobbies[1].classList.add('hobbies-slide-right');
        hobbies[2].classList.add('hobbies-slide-left');
        hobbies[3].classList.add('hobbies-slide-right');
        hobbies[4].classList.add('hobbies-slide-left');
    };
}

/*
hobbies[1].onclick = function() {
    if (!active) {
       for (i = 0; i < 1; i++) {
        hobbies[i].classList.add('hobbies-slide');
        hobbies[i].classList.remove('hobbies-return');
       }
       for (j = 2; j < 5; j++) {
        hobbies[j].classList.add('hobbies-slide');
        hobbies[j].classList.remove('hobbies-return');
       }
       active = true;
    } else {
       for (i = 0; i < 1; i++) {
        hobbies[i].classList.remove('hobbies-slide');
        hobbies[i].classList.add('hobbies-return');
       }
       for (j = 2; j < 5; j++) {
        hobbies[j].classList.remove('hobbies-slide');
        hobbies[j].classList.add('hobbies-return');
       }
       active = false;
    }
 };
 */