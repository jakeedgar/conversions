//business logic//

function multiply(number1, ounces) {
  return number1 * ounces;
}

//UI logic// 

$(document).ready(function() {
  $("form#gallon").submit(function(e) {
    e.preventDefault();
    const ounces = 16
    const number1 = parseInt($("#gal1").val());
    const result = multiply(number1, ounces);
    $("#output").text(result);
  }); 

});