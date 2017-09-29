/*var hobby1 = document.getElementById("hiking");
var hobby2 = document.getElementById("cooking");
var hobby3 = document.getElementById("gaming");
var hobby4 = document.getElementById("engineering");
var hobby5 = document.getElementById("programming");

function hideHobby1 () {
    hobby1.style.display = 'none';
}

hobby1.addEventListener('click', hideHobby1, false);*/

// spacer

var hobbies = document.querySelectorAll('.icons');

function hideHobbies () {
    for(i = 0; i < 6; i++) {
        hobbies[0].style.display = 'none';
    }

}

hobbies.addEventListener('click', hideHobbies, false);