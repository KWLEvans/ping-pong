//Back-end
function pingPong(input) {
  var array = [];
  if (!parseInt(input)) {
    array.push("Please enter a number.");
  } else {
    for (var i = 1; i <= input; i++) {
      if (i % 3 === 0) {
        array.push("ping");
      } else {
        array.push(i);
      }
    }
  }
  return array;
}


//Front-end
$(function() {
  function displayInput(nums) {
    nums.forEach(function(num) {
      $("#result").append("<li>" + num + "</li>");
    });
  }

  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    console.log(input);
    var pingPongArray = pingPong(input);

    displayInput(pingPongArray);
  });
});
