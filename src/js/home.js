var hobbies = document.getElementsByClassName("icons");
var active = false;


hobbies[0].onclick = function () {
    if (!active) {
        for(i=1;i<5;i++) {
    hobbies[i].style.display = 'none';
    active = true;
        }
    }
    else {
        for(i=1;i<5;i++) {
    hobbies[i].style.display = 'block';
    active = false;
        }
    }
};

hobbies[1].onclick = function () {
    if (!active) {
        for(i=0;i<1;i++) {
            hobbies[i].style.display = 'none';
        }
        for(j=2;j<5;j++) {
            hobbies[j].style.display = 'none';
        }
        active = true;
    }
    else {
        for(i=0;i<1;i++) {
            hobbies[i].style.display = 'block';
        }
        for(j=2;j<5;j++) {
            hobbies[j].style.display = 'block';
        }
        active = false;
    }
};

hobbies[2].onclick = function () {
    if (!active) {
        for(i=0;i<2;i++) {
            hobbies[i].style.display = 'none';
        }
        for(j=3;j<5;j++) {
            hobbies[j].style.display = 'none';
        }
        active = true;
    }
    else {
        for(i=0;i<2;i++) {
            hobbies[i].style.display = 'block';
        }
        for(j=3;j<5;j++) {
            hobbies[j].style.display = 'block';
        }
        active = false;
    }
};

hobbies[3].onclick = function () {
    if (!active) {
        for(i=0;i<3;i++) {
            hobbies[i].style.display = 'none';
        }
        for(j=4;j<5;j++) {
            hobbies[j].style.display = 'none';
        }
        active = true;
    }
    else {
        for(i=0;i<3;i++) {
            hobbies[i].style.display = 'block';
        }
        for(j=4;j<5;j++) {
            hobbies[j].style.display = 'block';
        }
        active = false;
    }
};

hobbies[4].onclick = function () {
    if (!active) {
        for(i=0;i<4;i++) {
            hobbies[i].style.display = 'none';
        }
        active = true;
    }
    else {
        for(i=0;i<4;i++) {
            hobbies[i].style.display = 'block';
        }
        active = false;
    }
};












/*
hobbies[2].onclick = function () {
    if (!active) {
    hobbies[0].style.display = 'none';
    hobbies[1].style.display = 'none';
    hobbies[3].style.display = 'none';
    hobbies[4].style.display = 'none';
    active = true;
    }
    else {
    hobbies[0].style.display = 'block';
    hobbies[1].style.display = 'block';
    hobbies[3].style.display = 'block';
    hobbies[4].style.display = 'block';
    active = false;
    }
};

hobbies[3].onclick = function () {
    if (!active) {
    hobbies[0].style.display = 'none';
    hobbies[1].style.display = 'none';
    hobbies[2].style.display = 'none';
    hobbies[4].style.display = 'none';
    active = true;
    }
    else {
    hobbies[0].style.display = 'block';
    hobbies[1].style.display = 'block';
    hobbies[2].style.display = 'block';
    hobbies[4].style.display = 'block';
    active = false;
    }
};

hobbies[4].onclick = function () {
    if (!active) {
    hobbies[0].style.display = 'none';
    hobbies[1].style.display = 'none';
    hobbies[2].style.display = 'none';
    hobbies[3].style.display = 'none';
    active = true;
    }
    else {
    hobbies[0].style.display = 'block';
    hobbies[1].style.display = 'block';
    hobbies[2].style.display = 'block';
    hobbies[3].style.display = 'block';
    active = false;
    }
};
*/
