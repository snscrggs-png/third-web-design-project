console.log("Yes i'm working");
/* Okay so i need to find a way to enable click-and-drag sliding on this website for the image-track element using javascript WITHOUT cheating*/

//step 1: enable the onlcick relationship/event listener
const imageTrack = document.querySelector('.image-track');

imageTrack.addEventListener('click', function (e) {
  console.log(this.className); // is supposed to log classname
  //step 2: setup programmatic scrolling using the event listener
  //The solution i believe i found is: based on which way the user scrolls stuff, i should code in a css transformation where i update the css transform, to move positions for a specific amount of space based on teh size of teh image elements present.
})
