var hobbies = document.getElementsByClassName("hobbies");
var active = false;

hobbies[0].onclick = function() {
    if(!active) {
        for(i = 1; i < 5; i++) {
            /*hobbies[i].style.display = 'none';*/
            hobbies[i].classList.add('hobbies-slide');
            hobbies[i].classList.remove('hobbies-return');
            active = true;
        }
    } else {
        for(i = 1; i < 5; i++) {
            /*hobbies[i].style.display = 'block';*/
            hobbies[i].classList.remove('hobbies-slide');
            hobbies[i].classList.add('hobbies-return');
            active = false;
        }
    }
};

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