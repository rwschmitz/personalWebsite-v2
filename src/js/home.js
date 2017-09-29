var hobbies = document.getElementsByClassName("icons");
var active = false;

hobbies[0].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===0) {
            hobbies[0].style.display = 'block';
            active = true;
        }
        else {
            hobbies[i].style.display = 'none';
        }
    }
};

hobbies[1].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===1) {
            hobbies[1].style.display = 'block';
        } else {
            hobbies[i].style.display = 'none';
        }
    }
};

hobbies[2].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===2) {
            hobbies[2].style.display = 'block';
        } else {
            hobbies[i].style.display = 'none';
        }
    }
};

hobbies[3].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===3) {
            hobbies[3].style.display = 'block';
        } else {
            hobbies[i].style.display = 'none';
        }
    }
};

hobbies[4].onclick = function () {
    for(var i = 0; i < 5; i++) {
        if(i===4) {
            hobbies[4].style.display = 'block';
        } else {
            hobbies[i].style.display = 'none';
        }
    }
};


/*

1. finish toggle function

*/