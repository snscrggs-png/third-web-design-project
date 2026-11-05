console.log("Yes i'm working");
/* Okay so i need to find a way to enable click-and-drag sliding on this website for the image-track element using javascript WITHOUT cheating*/

//NEW BUG
//i have a bug where everytime i get to over and set the class to its orignianl statement directly, it decouples its css relationship.

//step 1: enable the onlcick relationship/event listener
const imageTrack = document.querySelector('.image-track');
let isMoving = false;
let x = 0;
let y = 0;
let mousedown = true;
imageTrack.addEventListener('mousedown', function (e) { //step 1 is right here

  mousedown = true;

  //step 2: setup programmatic scrolling using the event listener

    //1. set alternate classes for elements and utillize these classes to change the position of said elements
  imageTrack.className += ' yessir'
  console.log(this.className); 
  //2. capture mouse movement from right or left to determine how the animation occurs using "mousemove"
  imageTrack.addEventListener('mousemove', function (e) {
    x = e.offsetX;
    y = e.offsetY;
    isMoving = true;
    if (isMoving && mousedown) {
      console.log(x);
      console.log(y);
    }

  })


  // adding new class



})
  //whenever you finish the segments that change with the introduction to the new class, try to reset the classes back to normal afterwards or something.... this is a lot of stuff
  // this is how to do what was asked above
      imageTrack.addEventListener('mouseup', function(e) { 
    isMoving = false;
    mousedown = false;
    //your request is right here
    imageTrack.className = '.image-track';
    x = 0;
    y = 0;
    console.log('over');
  })

    //3. you can probably go into css and setup those tranformations and their animation rules for the new class you add ...you'd also have to figure out the relationship between that and javascript code, its going to be a little doozy

      //The solution i believe i found is: based on which way the user scrolls stuff, i should code in a css transformation where i update the css transform, to move positions for a specific amount of space based on teh size of teh image elements present.