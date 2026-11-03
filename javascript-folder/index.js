console.log("Yes i'm working");
/* Okay so i need to find a way to enable click-and-drag sliding on this website for the image-track element using javascript WITHOUT cheating*/

//step 1: enable the onlcick relationship/event listener
const imageTrack = document.querySelector('.image-track');

imageTrack.addEventListener('click', function (e) {

  //step 2: setup programmatic scrolling using the event listener

    //1. set alternate classes for elements and utillize these classes to change the position of said elements
  imageTrack.className += ' yessir'
  console.log(this.className); 
  //2. you can probably go into css and setup those tranformations and their animation rules for the new class you add 

  // adding new class
  //whenever you finish the segments that change with the introduction to the new class, try to reset the classes back to normal afterwards or something.... this is a lot of stuff
  //The solution i believe i found is: based on which way the user scrolls stuff, i should code in a css transformation where i update the css transform, to move positions for a specific amount of space based on teh size of teh image elements present.
})
