console.log("Yes i'm working");
/* Okay so i need to find a way to enable click-and-drag sliding on this website for the image-track element using javascript WITHOUT cheating*/

//NEW BUG FIXED, you don't need to put dot in front of class declaration in className

//step 1: enable the onlcick relationship/event listener
const imageTrack = document.querySelector('.image-track');
let isMoving = false;
let x = 0;
let y = 0;
let lemon = 0;
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

    if (x > 0) {
      lemon ++;
      }
      console.log('this is the total value: ' + lemon);

        console.log('this is the new total value' + lemon);
      //so right now ive got the number of total for x but now i need to find a way to setup the backward counter so if lemon has a total and x goes back a certain amount when ive moved back, how do i used the difference to calculate the new lemon value?
  //step 3.It should go here: based on which way the user scrolls stuff, i should code in a css transformation where i update the css transform, to move positions for a specific amount of space based on teh size of teh image elements present.
  //new issue is that whenever i get passed an image element the x value restarts, i need to find a way for the value to increaese over the entire imageTrack element and not restart to 0 everytime a pass an image through scrolling  so the matrix transformation will work properly: maybe i could just increment(+=) the value into the martrix value by finding some sort of trigger in teh connections 

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