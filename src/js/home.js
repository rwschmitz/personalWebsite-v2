var hobbies = document.getElementsByClassName("hobbies");
var active = false;

hobbies[0].onclick = function() {
   hobbies[0].classList.add("test");
};

function nextIcon() {
   hobbies[1].classList.add("test2");
}

function nextIcon2() {
   hobbies[2].classList.add("test3");
}

function nextIcon3() {
   hobbies[3].classList.add("test4");
}

function nextIcon4() {
   hobbies[4].classList.add("test5");
}

function nextIcon5() {
   hobbies[5].classList.add("test6");
}



hobbies[0].addEventListener("transitionend", nextIcon, false);
hobbies[1].addEventListener("transitionend", nextIcon2, false);
hobbies[2].addEventListener("transitionend", nextIcon3, false);
hobbies[3].addEventListener("transitionend", nextIcon4, false);
hobbies[4].addEventListener("transitionend", nextIcon5, false);
