const form = document.getElementById('form');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const enquiry = document.getElementById('enquiry');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
	console.log(enquiry);
});


function checkInputs() {
	// trim to remove the whitespaces
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const enquiryValue = enquiry.value.trim();
	
	if (nameValue === '' || emailValue ==='' || phoneValue ==='' || enquiryValue === ''){
		alert("Fields can not be empty");
		(nameValue === '') ? name.classList.add("highlight") : '' ;
		(phoneValue === '') ? phone.classList.add("highlight") : '' ;
		(emailValue === '') ? email.classList.add("highlight") : '' ;
		(enquiryValue === '') ? enquiry.classList.add("highlight") : '' ;
	} else if (!(isEmail(emailValue))){
		alert("insert a valid email");
	} else if (!(isPhone(phoneValue))){
		alert("insert a valid phone number");
	} else 	{
		alert("Your enquiry has been sent, we will be in touch shortly");
		name.value = "";
		phone.value = "";
		email.value = "";
		enquiry.value = "";
	}

	
}


	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
	var patt = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/);
	return patt.test(phone);
}
  
 


function clearInput (){
    phone.value="";
    email.value= "";
    enquiry.value = "";
    name.value ="";
}
