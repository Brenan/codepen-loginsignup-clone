/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$(document).ready(function() {

	$("#signupLink").click(function(){
		$(".login-form").hide();
		$(".signup-form").show();
		$(this).addClass("active");
		$("#loginLink").removeClass("active");
	});

	$("#loginLink").click(function(){
		$(".signup-form").hide();
		$(".login-form").show();
		$(this).addClass("active");
		$("#signupLink").removeClass("active");
	});

// Login Form Functionality
	$(".login-form button").click(function(){
		var newUser = {
			username: $("#login-email-field").val(),
			password: $("#login-password-field").val()
		};
		var loginResponse = codepen.api.login(newUser);
		if(loginResponse.success == false){
			alert(loginResponse.error);
		}

		return false;
			
	});

// Signup Form Funcionality

	$(".signup-form button").click(function(){
		var newSignUp = {
			name: $("#signup-name-field").val(),
			email: $("#signup-email-field").val(),
			username: $("#signup-username-field").val(),
			password: $("#signup-password-field").val()
		}
		var signUpResponse = codepen.api.signup(newSignUp);
		if(signUpResponse.success == false){
			alert(signUpResponse.error);
		} 
		return false;
	});
});


