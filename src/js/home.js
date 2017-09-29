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
    for (var i = 0; i < 5; i++) {
        if(i === 0) {
        console.log(hobbies[0]);
        }
        if(i === 1) {
        console.log(hobbies[1]);
        }
        if(i === 2) {
        console.log(hobbies[2]);
        }
        if(i === 3) {
        console.log(hobbies[3]);
        }
        if(i === 4) {
        console.log(hobbies[4]);
        }
    }
}

for (var i = 0; i < 5; i++) {
    hobbies[i].addEventListener('click', hideHobbies, false);
}
