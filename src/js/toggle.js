/* 
The following code is responsible for hiding/showing the home icons.
I'm using two loops so I can exclude specific elements from an array as I iteterate through a loop.
For example, hobbies[2].onclick hides and shows elements while excluding element 2.


var hobbies = document.getElementsByClassName("icons");
var active = false;



hobbies[0].onclick = function () {
    if (!active) {
        for (i = 1; i < 5; i++) {
            hobbies[i].style.display = 'none';
            active = true;
        }
    } else {
        for (i = 1; i < 5; i++) {
            hobbies[i].style.display = 'block';
            active = false;
        }
    }
};


hobbies[1].onclick = function() {
   if (!active) {
      for (i = 0; i < 1; i++) {
         hobbies[i].style.display = 'none';
      }
      for (j = 2; j < 5; j++) {
         hobbies[j].style.display = 'none';
      }
      active = true;
   } else {
      for (i = 0; i < 1; i++) {
         hobbies[i].style.display = 'block';
      }
      for (j = 2; j < 5; j++) {
         hobbies[j].style.display = 'block';
      }
      active = false;
   }
};

hobbies[2].onclick = function() {
   if (!active) {
      for (i = 0; i < 2; i++) {
         hobbies[i].style.display = 'none';
      }
      for (j = 3; j < 5; j++) {
         hobbies[j].style.display = 'none';
      }
      active = true;
   } else {
      for (i = 0; i < 2; i++) {
         hobbies[i].style.display = 'block';
      }
      for (j = 3; j < 5; j++) {
         hobbies[j].style.display = 'block';
      }
      active = false;
   }
};

hobbies[3].onclick = function() {
   if (!active) {
      for (i = 0; i < 3; i++) {
         hobbies[i].style.display = 'none';
      }
      for (j = 4; j < 5; j++) {
         hobbies[j].style.display = 'none';
      }
      active = true;
   } else {
      for (i = 0; i < 3; i++) {
         hobbies[i].style.display = 'block';
      }
      for (j = 4; j < 5; j++) {
         hobbies[j].style.display = 'block';
      }
      active = false;
   }
};

hobbies[4].onclick = function() {
   if (!active) {
      for (i = 0; i < 4; i++) {
         hobbies[i].style.display = 'none';
      }
      active = true;
   } else {
      for (i = 0; i < 4; i++) {
         hobbies[i].style.display = 'block';
      }
      active = false;
   }
};
*/