// This script is in beta.  Which sounds absurd, but, the code is in beta until I put the code into loops.
// As of now though, the code works.  So since I know the code works, I can come back and put the code through loops to shorten the script.


var hobbies = document.getElementsByClassName("hobbies");
var hobbiesDesc = document.getElementsByClassName("hobbies-desc");
var hobbyInformation = document.getElementsByClassName("hobby-information");
var active = false;

var timingFunction1 = function test (){
    hobbies[0].classList.add("home-icons");
    hobbiesDesc[0].classList.add("home-text");
};

var timingFunction2 = function test (){
    hobbies[1].classList.add("home-icons2");
    hobbiesDesc[1].classList.add("home-text2");
};

var timingFunction3 = function test (){
    hobbies[2].classList.add("home-icons3");
    hobbiesDesc[2].classList.add("home-text3");
};

var timingFunction4 = function test (){
    hobbies[3].classList.add("home-icons4");
    hobbiesDesc[3].classList.add("home-text4");
};

var timingFunction5 = function test (){
    hobbies[4].classList.add("home-icons5");
    hobbiesDesc[4].classList.add("home-text5");
};

var timingFunction6 = function test (){
    hobbies[5].classList.add("home-icons6");
    hobbiesDesc[5].classList.add("home-text6");
};


setTimeout(timingFunction1,500);
setTimeout(timingFunction2,750);
setTimeout(timingFunction3,1000);
setTimeout(timingFunction4,1250);
setTimeout(timingFunction5,1500);
setTimeout(timingFunction6,1750);

hobbies[0].onclick = function() {
    hobbies[0].classList.remove("hobbyhide");
    hobbies[0].classList.add("hobbyshow");
    hobbies[1].classList.remove("hobbyshow");
    hobbies[1].classList.add("hobbyhide");
    hobbies[2].classList.remove("hobbyshow");
    hobbies[2].classList.add("hobbyhide");
    hobbies[3].classList.remove("hobbyshow");
    hobbies[3].classList.add("hobbyhide");
    hobbies[4].classList.remove("hobbyshow");
    hobbies[4].classList.add("hobbyhide");
    hobbies[5].classList.remove("hobbyshow");
    hobbies[5].classList.add("hobbyhide");

    hobbyInformation[0].style.display = 'block';
    hobbyInformation[1].style.display = 'none';
    hobbyInformation[2].style.display = 'none';
    hobbyInformation[3].style.display = 'none';
    hobbyInformation[4].style.display = 'none';
    hobbyInformation[5].style.display = 'none';

};

hobbies[1].onclick = function() {
    hobbies[1].classList.remove("hobbyhide");
    hobbies[1].classList.add("hobbyshow");
    hobbies[0].classList.remove("hobbyshow");
    hobbies[0].classList.add("hobbyhide");
    hobbies[2].classList.remove("hobbyshow");
    hobbies[2].classList.add("hobbyhide");
    hobbies[3].classList.remove("hobbyshow");
    hobbies[3].classList.add("hobbyhide");
    hobbies[4].classList.remove("hobbyshow");
    hobbies[4].classList.add("hobbyhide");
    hobbies[5].classList.remove("hobbyshow");
    hobbies[5].classList.add("hobbyhide");

    hobbyInformation[1].style.display = 'block';
    hobbyInformation[0].style.display = 'none';
    hobbyInformation[2].style.display = 'none';
    hobbyInformation[3].style.display = 'none';
    hobbyInformation[4].style.display = 'none';
    hobbyInformation[5].style.display = 'none';
};

hobbies[2].onclick = function() {
    hobbies[2].classList.remove("hobbyhide");
    hobbies[2].classList.add("hobbyshow");
    hobbies[0].classList.remove("hobbyshow");
    hobbies[0].classList.add("hobbyhide");
    hobbies[1].classList.remove("hobbyshow");
    hobbies[1].classList.add("hobbyhide");
    hobbies[3].classList.remove("hobbyshow");
    hobbies[3].classList.add("hobbyhide");
    hobbies[4].classList.remove("hobbyshow");
    hobbies[4].classList.add("hobbyhide");
    hobbies[5].classList.remove("hobbyshow");
    hobbies[5].classList.add("hobbyhide");

    hobbyInformation[2].style.display = 'block';
    hobbyInformation[0].style.display = 'none';
    hobbyInformation[1].style.display = 'none';
    hobbyInformation[3].style.display = 'none';
    hobbyInformation[4].style.display = 'none';
    hobbyInformation[5].style.display = 'none';
};

hobbies[3].onclick = function() {
    hobbies[3].classList.remove("hobbyhide");
    hobbies[3].classList.add("hobbyshow");
    hobbies[0].classList.remove("hobbyshow");
    hobbies[0].classList.add("hobbyhide");
    hobbies[1].classList.remove("hobbyshow");
    hobbies[1].classList.add("hobbyhide");
    hobbies[2].classList.remove("hobbyshow");
    hobbies[2].classList.add("hobbyhide");
    hobbies[4].classList.remove("hobbyshow");
    hobbies[4].classList.add("hobbyhide");
    hobbies[5].classList.remove("hobbyshow");
    hobbies[5].classList.add("hobbyhide");

    hobbyInformation[3].style.display = 'block';
    hobbyInformation[0].style.display = 'none';
    hobbyInformation[1].style.display = 'none';
    hobbyInformation[2].style.display = 'none';
    hobbyInformation[4].style.display = 'none';
    hobbyInformation[5].style.display = 'none';
};

hobbies[4].onclick = function() {
    hobbies[4].classList.remove("hobbyhide");
    hobbies[4].classList.add("hobbyshow");
    hobbies[0].classList.remove("hobbyshow");
    hobbies[0].classList.add("hobbyhide");
    hobbies[1].classList.remove("hobbyshow");
    hobbies[1].classList.add("hobbyhide");
    hobbies[2].classList.remove("hobbyshow");
    hobbies[2].classList.add("hobbyhide");
    hobbies[3].classList.remove("hobbyshow");
    hobbies[3].classList.add("hobbyhide");
    hobbies[5].classList.remove("hobbyshow");
    hobbies[5].classList.add("hobbyhide");

    hobbyInformation[4].style.display = 'block';
    hobbyInformation[0].style.display = 'none';
    hobbyInformation[1].style.display = 'none';
    hobbyInformation[2].style.display = 'none';
    hobbyInformation[3].style.display = 'none';
    hobbyInformation[5].style.display = 'none';
};

hobbies[5].onclick = function() {
    hobbies[5].classList.remove("hobbyhide");
    hobbies[5].classList.add("hobbyshow");
    hobbies[0].classList.remove("hobbyshow");
    hobbies[0].classList.add("hobbyhide");
    hobbies[1].classList.remove("hobbyshow");
    hobbies[1].classList.add("hobbyhide");
    hobbies[2].classList.remove("hobbyshow");
    hobbies[2].classList.add("hobbyhide");
    hobbies[3].classList.remove("hobbyshow");
    hobbies[3].classList.add("hobbyhide");
    hobbies[4].classList.remove("hobbyshow");
    hobbies[4].classList.add("hobbyhide");

    hobbyInformation[5].style.display = 'block';
    hobbyInformation[0].style.display = 'none';
    hobbyInformation[1].style.display = 'none';
    hobbyInformation[2].style.display = 'none';
    hobbyInformation[3].style.display = 'none';
    hobbyInformation[4].style.display = 'none';
};
