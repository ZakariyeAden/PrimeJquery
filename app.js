// Must Add JQ document and main function that runs!
$(document).ready(readyNow);
$(document).ready(mainReadyNow);
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



// ****************************
// Tier 1 Synopsis Part 1 
// ****************************

const budget = 2500;
let purchases = [];
function mainReadyNow(){
  // console.log('jq');
  // Display budget
  // target budgetOut and budgetIn
  let el = $('#budgetOut');
  el.empty();
  el.append(budget);

  $('#addPurchaseBtn').on('click', addPurchase);
}

function addPurchase(){
  console.log('Add purchase');
  // get user input , create a new object
  let newPurchase = {
    name: $('#purchaseNameIn').val(),
    price: $('#purchasePriceIn').val()
  }
  // push the new purchase into the array
  purchases.push(newPurchase);
  // empty inputs
   $('#purchaseNameIn').val(''),
   $('#purchasePriceIn').val('')
  // calculate remainingBudget

}
