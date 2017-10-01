
var hobbies = document.getElementsByClassName("hobbies");
var hobbiesDesc = document.getElementsByClassName("hobbies-desc");
var active = false;

var blah1 = function test (){
    hobbies[0].classList.add("home-icons");
    hobbiesDesc[0].classList.add("home-text");
};

var blah2 = function test (){
    hobbies[1].classList.add("home-icons2");
    hobbiesDesc[1].classList.add("home-text2");
};

var blah3 = function test (){
    hobbies[2].classList.add("home-icons3");
    hobbiesDesc[2].classList.add("home-text3");
};

var blah4 = function test (){
    hobbies[3].classList.add("home-icons4");
    hobbiesDesc[3].classList.add("home-text4");
};

var blah5 = function test (){
    hobbies[4].classList.add("home-icons5");
    hobbiesDesc[4].classList.add("home-text5");
};

var blah6 = function test (){
    hobbies[5].classList.add("home-icons6");
    hobbiesDesc[5].classList.add("home-text6");
};


setTimeout(blah1,500);
setTimeout(blah2,750);
setTimeout(blah3,1000);
setTimeout(blah4,1250);
setTimeout(blah5,1500);
setTimeout(blah6,1750);

hobbies[0].onclick = function () {
    if (!active) {
        for (i = 1; i < 6; i++) {
            hobbies[i].classList.add("testhide");
            hobbies[i].classList.remove("testshow")
            active = true;
        }
    } else {
        for (i = 1; i < 6; i++) {
            hobbies[i].classList.remove("testhide");
            hobbies[i].classList.add("testshow")
            active = false;
        }
    }
};

hobbies[1].onclick = function() {
    if (!active) {
       for (i = 0; i < 1; i++) {
        hobbies[i].classList.add("testhide");
        hobbies[i].classList.remove("testshow")
       }
       for (j = 2; j < 6; j++) {
        hobbies[j].classList.add("testhide");
        hobbies[j].classList.remove("testshow")
       }
       active = true;
    } else {
       for (i = 0; i < 1; i++) {
        hobbies[i].classList.remove("testhide");
        hobbies[i].classList.add("testshow")
       }
       for (j = 2; j < 6; j++) {
        hobbies[i].classList.remove("testhide");
        hobbies[i].classList.add("testshow")
       }
       active = false;
    }
 };

            