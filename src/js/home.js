var hobbies = document.getElementsByClassName("hobbies");
var arrows = document.getElementsByClassName("arrows");

for (let i = 0; i < 5; i++) {
    hobbies[i].onmouseover = function() {
        hobbies[i].classList.add('hobbies-slide');
    };
    hobbies[i].onclick = function () {
        hobbies[i].classList.remove('hobbies-slide');
    };
}


/*
hobbies[0].onclick = function () {
    for(i = 0; i < 5; i++) {
        hobbies[i].classList.add('hobbies-slide');
    }
};



arrowsVis = window.onload = function () {
    for(i = 0; i < 5; i++) {
        arrows[i].classList.remove('arrows-hidden');
        arrows[i].classList.add('arrows-visible');
    }

};
*/

