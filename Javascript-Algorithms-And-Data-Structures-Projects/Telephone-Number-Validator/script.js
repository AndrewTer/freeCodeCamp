document.getElementById("check-btn").onclick = function() {
  let inputValue = document.getElementById("user-input").value;

  if (inputValue)
    document.getElementById("results-div").innerHTML = (telephoneCheck(inputValue) ? 'Valid US number: ' : 'Invalid US number: ') + inputValue;
  else
    alert("Please provide a phone number");
};

document.getElementById("clear-btn").onclick = function() {
  document.getElementById("results-div").innerHTML = '';
};

function telephoneCheck(str) {
  let phone_number_mask = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return phone_number_mask.test(str) ? true : false;
}
