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

hobbies[0].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===0) {
            hobbies[0].style.display = 'none';
        } else {
            hobbies[i].style.display = 'block';
        }
    }
};

hobbies[1].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===1) {
            hobbies[1].style.display = 'none';
        } else {
            hobbies[i].style.display = 'block';
        }
    }
};

hobbies[2].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===2) {
            hobbies[2].style.display = 'none';
        } else {
            hobbies[i].style.display = 'block';
        }
    }
};

hobbies[3].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===3) {
            hobbies[3].style.display = 'none';
        } else {
            hobbies[i].style.display = 'block';
        }
    }
};

hobbies[4].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===4) {
            hobbies[4].style.display = 'none';
        } else {
            hobbies[i].style.display = 'block';
        }
    }
};



