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

// Set Up the Prototype

codepen.User = {
	name: null,
	username: null,
	email: null,
	password: null,
	setLoginInfo: function(username, password){
		this.username = username;
		this.password = password;
	},
	setSignInInfo: function(name, password, email, username){
		this.name = name;
		this.password = password;
		this.email = email;
		this.username = username;
	}
};


// Login Form Functionality
	$(".login-form button").click(function(){
		var username = $("#login-email-field").val();
		var password = $("#login-password-field").val();
		var newUser = Object.create(codepen.User);
		newUser.setLoginInfo(username,password);
		var loginResponse = codepen.api.login(newUser);
		if(loginResponse.success == false){
			alert(loginResponse.error);
		}

		return false;
	});

// Signup Form Funcionality

	$(".signup-form button").click(function(){
			var name= $("#signup-name-field").val();
			var email= $("#signup-email-field").val();
			var username= $("#signup-username-field").val();
			var password= $("#signup-password-field").val();

			var newSignUp = Object.create(codepen.User);
			newSignUp.setSignInInfo(name,password,email,username);
		
		var signUpResponse = codepen.api.signup(newSignUp);
		if(signUpResponse.success == false){
			alert(signUpResponse.error);
		} 
		return false;
	});
});


