// Verify email alert
// alert("Thank you for signing up!  Please check your email to activate your account.");
//mobile DOM loader ($) mobile method
var parseSignupForm = function (data) {
	// uses form data here;
	console.log(data); 
};

$('#signup').live('pageinit', function(){
	var rbform = $('#recordsignup');
	var	rberrorslink = $('#rberrorslink');
	// form validation in jqm
	rbform.validate({
		invalidHandler: function(form, validator){
			rberrorslink.click();
			var html = '';
			for(var key in validator.submitted){
				var label = $('label[for^="' + key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldname = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldname + '</li>';
			};
			$("#signuperrors ul").html(html);
		},
		submitHandler: function(){
			var data = rbform.serializeArray();
			parseSignupForm(data);
		}
	});
	
	$('#groups').blur(saveSettings);
    loadSettings();
	
	var loadSettings = function () {
		$('#groups').val(localStorage.groups);
		$('#addy').val(localStorage.addy);
		$('#male').val(localStorage.male);
	};
	
	var saveSettings = function () {
		localStorage.groups = $('#groups').val();
		localStorage.addy = $('#addy').val();
		localStorage.male = $('#male').val();
	};
	
	var validate = function (e) {
		// define the elements we want to check
		var getGroup = $('#groups');
		var getFlname = $('#flname');
		var getAddy = $('#addy');
		var getPass = $('#pword');
		
		// resest error messages
		errMsg.innerHTML = "";
		getGroup.style.border = "1px solid";
		getFlname.style.border = "1px solid";
		getAddy.style.border = "1px solid";
		getPass.style.border = "1px solid";
		
		// get error messages
		var messageArr = [];
		
		// password validation
		if (getPass.value === "") {
			var passError = "Please enter a password and confirm it.";
			getPass.style.border = "1px solid red";
			messageArr.push(passError);
		};
		
		// group validation
		if (getGroup.value === "--Choose A Group--") {
			var groupError = "Please choose a group";
			getGroup.style.border = "1px solid red";
			messageArr.push(groupError);
		};
		
		// First name validation
		if (getFlname.value === "") {
			var fNameError = "Please enter a first name.";
			getFlname.style.border = "1px solid red";
			messageArr.push(fNameError);
		};
		
		// email validation
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		// [a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
		
		if (!(re.exec(getAddy.value))) {
			var emailError = "Please enter a valid email address.";
			getAddy.style.border = "1px solid red";
			messageArr.push(emailError);
		};
		
		// if there were error, display them on the screen.
		if (messageArr.length >= 1) {
			for (var i = 0, j = messageArr.length; i < j; i++) {
				var txt = document.createElement('li');
				txt.innerHTML = messageArr[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
			
		} else {
			// if all is ok, save our data! send the key value from the edit data function
			// remember this key value was passed through the editSubmit event listener as a property.
			storeData(this.key);
		};
		
	};
	
	var deleteItem = function () {
		var ask = confirm("Are you sure you want to delete this information?");
		if (ask) {
			localStorage.removeItem(this.key);
			window.location.reload();
			alert("You have removed the information!");
		} else {
			alert("Information was not removed!");
		};
	};
	var save = $('#submit');
	save.on("click", storeData);
});