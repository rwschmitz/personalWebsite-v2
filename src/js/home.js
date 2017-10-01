/* jshint ignore: start */
var hobbies = document.getElementsByClassName("hobbies");
var hobbiesDesc = document.getElementsByClassName("hobbies-desc");

for (i = 0; i < 6; i++) {
    hobbies[i].onclick = function() {
        hobbies[0].classList.add("home-icons");
        hobbiesDesc[0].classList.add("home-text");
    };
}

function nextIcon() {
   hobbies[1].classList.add("home-icons2");
   hobbiesDesc[1].classList.add("home-text2");
}

function nextIcon2() {
   hobbies[2].classList.add("home-icons3");
   hobbiesDesc[2].classList.add("home-text3");
}

function nextIcon3() {
   hobbies[3].classList.add("home-icons4");
   hobbiesDesc[3].classList.add("home-text4");
}

function nextIcon4() {
   hobbies[4].classList.add("home-icons5");
   hobbiesDesc[4].classList.add("home-text5");
}

function nextIcon5() {
   hobbies[5].classList.add("home-icons6");
   hobbiesDesc[5].classList.add("home-text6");
}



hobbies[0].addEventListener("transitionend", nextIcon, false);
hobbies[1].addEventListener("transitionend", nextIcon2, false);
hobbies[2].addEventListener("transitionend", nextIcon3, false);
hobbies[3].addEventListener("transitionend", nextIcon4, false);
hobbies[4].addEventListener("transitionend", nextIcon5, false);

/* jshint ignore: end */
