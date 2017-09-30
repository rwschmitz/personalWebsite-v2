/* 

The following code is responsible for hiding/showing the home icons.
I'm using two loops so I can exclude specific elements from an array as I iteterate through a loop.
For example, hobbies[2].onclick hides and shows elements while excluding element 2.

*/

var hobbies = document.getElementsByClassName("hobbies");
var arrows = document.getElementsByClassName("arrows");

for (var i = 0; i < 5; i++) (function(i){
    hobbies[i].onclick = function() {
        hobbies[i].classList.add('hobbies-slide');
    };
});


/*
hobbies[0].onclick = function () {
    for(i = 0; i < 5; i++) {
        hobbies[i].classList.add('hobbies-slide');
    }
};



arrowsVis = window.onload = function () {
    for(i = 0; i < 5; i++) {
        arrows[i].classList.remove('arrows-hidden');
        arrows[i].classList.add('arrows-visible');
    }

};
*/

