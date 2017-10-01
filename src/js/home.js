var hobbies = document.getElementsByClassName("hobbies");
var hobbiesDesc = document.getElementsByClassName("hobbies-desc");

for (i = 0; i < 6; i++) {
    hobbies[i].onclick = function() {
        hobbies[0].classList.add("test");
        hobbiesDesc[0].classList.add("blah");
    };
}

function nextIcon() {
   hobbies[1].classList.add("test2");
   hobbiesDesc[1].classList.add("blah2");
}

function nextIcon2() {
   hobbies[2].classList.add("test3");
   hobbiesDesc[2].classList.add("blah3");
}

function nextIcon3() {
   hobbies[3].classList.add("test4");
   hobbiesDesc[3].classList.add("blah4");
}

function nextIcon4() {
   hobbies[4].classList.add("test5");
   hobbiesDesc[4].classList.add("blah5");
}

function nextIcon5() {
   hobbies[5].classList.add("test6");
   hobbiesDesc[5].classList.add("blah6");
}



hobbies[0].addEventListener("transitionend", nextIcon, false);
hobbies[1].addEventListener("transitionend", nextIcon2, false);
hobbies[2].addEventListener("transitionend", nextIcon3, false);
hobbies[3].addEventListener("transitionend", nextIcon4, false);
hobbies[4].addEventListener("transitionend", nextIcon5, false);
