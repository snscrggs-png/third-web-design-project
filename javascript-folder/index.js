console.log("Yes i'm working");
  const myRules = document.styleSheets[0].cssRules;
  console.log(myRules[0].index.css);
/* Okay so i need to find a way to enable click-and-drag sliding on this website for the image-track element using javascript WITHOUT cheating*/

//NEW BUG FIXED, you don't need to put dot in front of class declaration in className

//step 1: enable the onlcick relationship/event listener
const imageTrack = document.querySelector('.image-track');
let isMoving = false;
let x = 0;
let y = 0;
let lemon = 0;
let lemon_two = 0;
let mousedown = true;
imageTrack.addEventListener('mousedown', function (e) { //step 1 is right here

  mousedown = true;

  //step 2: setup programmatic scrolling using the event listener

    //1. set alternate classes for elements and utillize these classes to change the position of said elements
  imageTrack.className += ' yessir'
  console.log(this.className); 
  //2. capture mouse movement from right or left to determine how the animation occurs using "mousemove"
      imageTrack.addEventListener('mouseup', function(e) { 
    isMoving = false;
    mousedown = false;
    //try to reset the classes back to normal afterwards or something
    imageTrack.className = 'image-track';
    x = 0;
    y = 0;
      console.log('over');
  })
  imageTrack.addEventListener('mousemove', function (e) {
    x = e.offsetX;
    y = e.offsetY;
    isMoving = true;
    if (isMoving && mousedown) {
      console.log('this is the x value: ' + x);
//how do i used the difference to calculate the new lemon value?: herei it all is
//one bug , if i start scrolling on the element next to it, the matrix isn't responsive, but that should be fine if i lower the width of element, and take overflow serious, lets finish the css matrix coding first though
    if (x > 0 && x > lemon ) {
      lemon = x;
      }
    if (x < lemon && x > lemon - 100) {
      lemon = x;
    }  
    if (x < lemon - 100 && x > 0) {
      x += lemon;
    
    }
    console.log(x);
    

  //step 3.It should go somewhere:i should code in a css transformation where i update the css transform, to move positions for a specific amount of space based on teh size of teh image elements present.
  //how do i single out the css value using dom... i dont see anything that allows dom to be used on css
  //there was something about window.getComputedStyle that i saw with AI, start there i guess.


    const matrixValue = -(lemon + x - lemon);
    console.log('this took a long time to get our hands on: ' + matrixValue);
    }

  })

 imageTrack.addEventListener('mouseleave',  function (e) {
    isMoving = false;
    mousedown = false;
    //try to reset the classes back to normal afterwards or something
    imageTrack.className = 'image-track';
    x = 0;
    y = 0;
    console.log('over');
  })


  // adding new class



})