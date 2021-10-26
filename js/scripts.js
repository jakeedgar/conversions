//business logic//

function multiply(number1, ounces) {
  return number1 * ounces;
}

function multiply(number1, ounces2) {
  return number1 * ounces2;
}

//UI logic// 

$(document).ready(function() {
  $("form#gallon").submit(function(e) {
    e.preventDefault();
    const ounces = 128
    const number1 = parseInt($("#gal1").val());
    const result = multiply(number1, ounces);
    $("#output").text(result);
  }); 

  $("form#cups").submit(function(e) {
    e.preventDefault();
    const ounces2 = 8
    const number1 = parseInt($("#cup1").val());
    const result = multiply(number1, ounces2);
    $("#output").text(result);
  }); 

});