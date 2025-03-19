// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  const regexName = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]{3,}$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexAdress = /^[a-zA-Z0-9.-\s]+$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{3,}$/;
  const regexTelefono = /^[0-9]{9}$/;


  // Validate fields entered by the user: name, phone, password, and email
  if (fName.value == "" || fName.value.match(regexName) == null) {
	fName.classList.add('is-invalid');
	error++;
  }else
  	fName.classList.remove('is-invalid');

  if (fEmail.value == "" || fEmail.value.match(regexEmail) == null) {
	fEmail.classList.add('is-invalid');
	error++;
  }else
  	fEmail.classList.remove('is-invalid');

   

  if (fAddress.value == "" || fAddress.value.match(regexAdress) == null) {
	fAddress.classList.add('is-invalid');
	error++;
  }else
  	fAddress.classList.remove('is-invalid');




  if (fLastN.value == "" || fLastN.value.match(regexName) == null) {
	fLastN.classList.add('is-invalid');
	error++;
  }else
  	fLastN.classList.remove('is-invalid');





  if (fPassword.value == "" || fPassword.value.match(regexPassword) == null) {
	fPassword.classList.add('is-invalid');
	error++;
  }else
  	fPassword.classList.remove('is-invalid');





  if (fPhone.value == "" || fPhone.value.match(regexTelefono) == null) {
    fPhone.classList.add('is-invalid');
	error++;
  }else
  	fPhone.classList.remove('is-invalid');









  if (error > 0) {
   
  } else {
    
  }
}
