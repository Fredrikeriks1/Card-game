// refer to question 4 before development starts for scope document

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(no) {
	if(no.length !== 12) {
		return false;
	}
//Checking for valid seperator between numbers
	if(no[3] !== "-" && no[3] !== "." && no[3] !== " ") {
		return false;
	}

	if(no[7] !== "-" && no[7] !== "." && no[7] !== " ") {
		return false;
	}

	return true;
}
//Validating form fields after click event on submit button

document.getElementById('submitContact').addEventListener('click', function(e){

  var firstName = document.querySelector("#firstName").value;

  if(firstName === "") {
    document.querySelector("#firstNameError").setAttribute("style", "display: block");

  } else {
    document.querySelector("#firstNameError").setAttribute("style", "display: none");
  }

  var lastName = document.querySelector("#lastName").value;

  if(lastName === "") {
    document.querySelector("#lastNameError").setAttribute("style", "display: block");
  } else {
    document.querySelector("#lastNameError").setAttribute("style", "display: none");
  }

  var email = document.querySelector("#email").value;

  if(validateEmail(email)) {
    document.querySelector("#emailError").setAttribute("style", "display: none");
  } else {
    document.querySelector("#emailError").setAttribute("style", "display: block");
  }

  var phone = document.querySelector("#phone").value;

  if(validatePhone(phone)) {
    document.querySelector("#phoneError").setAttribute("style", "display: none");
  } else {
    document.querySelector("#phoneError").setAttribute("style", "display: block");
  }
})
