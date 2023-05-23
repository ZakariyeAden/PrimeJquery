$(document).ready(readyNow);

function readyNow(){
  console.log('Hello Jquery');

  $('#sayHelloBtn').on('click', sayHello);
}

function sayHello(){
  // Target the input element
  // get the value of text input
  let userName = $('#nameInput').val();
  console.log(`Hello ${userName}`);
  
  // Empy the value
  userName = $('nameInput').val('');

}