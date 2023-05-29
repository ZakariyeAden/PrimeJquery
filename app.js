$(document).ready(readyNow);

// ******************************************
// ********* JQuery Introduction ********* //
// ******************************************
function readyNow(){
  console.log('Hello Jquery');
  // Target the element or id, and event, and the function
  $('#sayHelloBtn').on('click', sayHello);
  // h2 mouseenter 
  $('h2').mouseenter(h2MouseEnter);
// h2 mouseleave 
  $('h2').mouseleave(h2MouseLeave);
  // 
  $('.clicker').on('click', changeTextColor);
}

function sayHello(){
  // Target the input element
  // get the value of text input
  let userName = $('#nameInput').val();
  console.log(`Hello ${userName}`);

  let outputText = 'Hello ' + $('#nameInput').val();
  console.log(outputText);
  // Target the output element
  let outputEl = $('#helloOut')
  // Empty it 
  outputEl.empty();
  // Append the output text int it
  outputEl.append(outputText);
  // empty the console.log
  // Empty input
  // Empy the value
   $('nameInput').val('');
  // End hello
}

function h2MouseEnter(){
  console.log('MouseEnter');
  // Targets the element, adding bgd color
  $(this).css('background-color', 'red');
}

function h2MouseLeave(){
    // Changes bg to white
  $(this).css('background-color', 'white');
}
function changeTextColor(){
  // Changes color to blue
  $(this).css('color', 'blue');
}