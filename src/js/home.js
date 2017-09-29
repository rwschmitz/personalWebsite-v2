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
var hobby0 = document.getElementById("hiking");
var hobby1 = document.getElementById("cooking");
var hobby2 = document.getElementById("gaming");
var hobby3 = document.getElementById("engineering");
var hobby4 = document.getElementById("programming");

function hideHobbies () {
    /*for(var i = 0; i < 5; i++) {*/
        switch(true) {
            case 0:
            hobby0.style.display = 'none';
            break;

            case 1:
            hobby1.style.display = 'none';
            break;

            case 2:
            hobby2.style.display = 'none';
            break;

            case 3:
            hobby3.style.display = 'none';
            break;

            case 4:
            hobby4.style.display = 'none';
            break;
        }
    /*}*/

}

for (var i = 0; i < 5; i++) {
hobbies[i].addEventListener('click', hideHobbies, false);
}