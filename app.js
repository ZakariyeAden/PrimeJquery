$(document).ready(readyNow);

function readyNow(){
  console.log('Hello Jquery');

  $('#sayHelloBtn').on('click', sayHello);
}

