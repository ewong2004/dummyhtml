// HTML Interacton
'use strict';


// Event Listener
document.getElementById('img1').addEventListener('click', clickHandler);
document.addEventListener('keydown', keydownHandler)

// Event Functions
function clickHandler() {
  // Update Content
  document.getElementById('main-heading').innerHTML = 'AWESOME HEADING!';

  // Update Src Attribute
  document.getElementById('img1').src = 'images/lorem-ipsum2.jpg' ;

  // Update href of link
  document.getElementById('link1').href ='https://www.w3schools.com/html/default.asp' ;

  // Update Style
  document.getElementById('para2').style.fontFamily = ('Papyrus')
  document.getElementById('para2').style.color = ('purple')

  // Add a class 
  document.getElementById('li2').classList.add('center')

}

function keydownHandler() {
  // Remove class
  document.getElementById('li2').classList.toggle('center')
}