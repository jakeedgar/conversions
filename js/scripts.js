const ounces = 16

function multiply(number1, ounces) {
  return number1 * ounces;
}

$(document).ready(function() {
  $("form#gallon").submit(function(e) {
    e.preventDefault();
    const number1 = parseInt($("#gal1").val());
    const result = multiply(number1, ounces);
    $("#output").text(result);
  }); 
});