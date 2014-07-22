function getElements() {
  var para = document.getElementsByTagName('p');

  for (var i = 0; i < para.length; i++) {
    var para_content = para[i].innerHTML;
    alert(para_content);
  }
}

function newHeading(input) {
  var element = document.getElementsByTagName('h1')[0];
  element.innerHTML = input;

  //OR
  // var elements = document.getElementsByTagName('h1');
  
  // for (var i = 0; i < elements.length; i++) {
  //   elements[i].innerHTML = input;
  // }
}

function checkPhoneNumber(input) {
  var isNumber = /^\d+$/.test(input), //checks if input is numeric
      errors = [],
      errorMsg = document.getElementById("textEntry2Error");

  if (isNumber == false) {
    errors.push("ERROR: You have not entered a correct telephone number");
  }

  if (input.length > 14) {
    errors.push("ERROR: Phone number must not exceed 14 digits");
  }

  errorMsg.innerHTML = errors.join("<br>");
}
