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

var hobbies = document.getElementsByClassName("icons");


function hideHobbies () {
        if(hobbies[0]) {
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

hobbies[0].addEventListener('click', hideHobbies, false);
hobbies[1].addEventListener('click', hideHobbies, false);
hobbies[2].addEventListener('click', hideHobbies, false);
hobbies[3].addEventListener('click', hideHobbies, false);
hobbies[4].addEventListener('click', hideHobbies, false);
