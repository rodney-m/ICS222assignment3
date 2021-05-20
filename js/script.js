const form = document.getElementById('form');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const enquiry = document.getElementById('enquiry');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
    clearInput();
    
});


function checkInputs() {
	// trim to remove the whitespaces
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const enquiryValue = enquiry.value.trim();
	
	if(nameValue === '') {
		setErrorFor(name, 'Name cannot be blank');
        name.classList.add("highlight");
	} else if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        email.classList.add("highlight");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        email.classList.add("highlight");
	} else {
		setSuccessFor(email);
	}
	
	if(phoneValue === '') {
		setErrorFor(phone, 'Phone cannot be blank');
        phone.classList.add("highlight");
	} else {
		setSuccessFor(phone);
	}
	
	if(enquiry === '') {
		setErrorFor(enquiry, 'Enquiry cannot be blank');
        enquiry.classList.add("highlight");
	} else {
		setSuccessFor(enquiry);
	}
}

function setErrorFor(input, message) {
	alert(message);  
}

function setSuccessFor(input) {
	
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function clearInput (){
    phone.value="";
    email.value= "";
    enquiry.value = "";
    name.value ="";
}
