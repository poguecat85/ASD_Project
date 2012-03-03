// Verify email alert
// alert("Thank you for signing up!  Please check your email to activate your account.");


//mobile DOM loader ($) for #signup page mobile method
$('#signup').live('pageinit', function () {
	var rbform = $('#recordsignup');
	var	rberrorslink = $('#rberrorslink');
	var formSave = $('#submit');
	
	// save form function
	formSave.on('click', function(){
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
				}
				$("#signuperrors ul").html(html);
			},
			submitHandler: function(){
				var data = rbform.serializeArray();
				console.log(data);
				storeData(data);
				$.mobile.changePage($('#account'));
			} // ending function for submitHandler
		}); // ending function for rbform.validate
	}); // ending function for formSave
	var storeData = function (myData) {
	    // setItem from signup_data
	    localStorage.setItem('signup_data', myData);
	    alert("Your information has saved!");
	}; // ending storeData function
}); // ending #signup page load

// mobile DOM loader ($) for #success page mobile method
$('#success').live('pageinit', function () {
	var clearLink = $('#clear');
	var data = localStorage.getItem('signup_data');
	var editLink = $('#edit');
	var clearData = function (myData) {
		localStorage.clear('signup_data');
	}; //ending clearData function
	console.log("this page is working!");
	// clearData function
	clearLink.on('click', function(){

		clearData(data);
		console.log("clearLink pressed!");
		alert("Data has been cleared");
		$.mobile.changePage($('#account'));
	
	}); // ending clearLink function
	
	// change page to edit page
	editLink.on('click', function (){
		$.mobile.changePage($('#signup'));
		data;
		console.log("data retrieved!");
	});
	
}); // ending #success page load

// mobile Dom loader ($) for #edit page mobile method
$('#edit').live('pageinit', function(){
	var formEdit = $('#editForm');
	var	errorLink = $('#errlnk');
	var sbtForm = $('#editSub');
	
	// save form function
	sbtForm.on('click', function(){
		console.log("works");
		// form validation in jqm
		editForm.validate({
			invalidHandler: function(form, validator){
				errorLink.click();
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="' + key +'"]').not('[generated]');
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldname = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldname + '</li>';
				}
				$("#editErr ul").html(html);
			},
			submitHandler: function(){
				var data = formEdit.serializeArray();
				console.log(data);
				storeData(data);
				$.mobile.changePage($('#account'));
			} // ending function for submitHandler
		}); // ending function for rbform.validate
	}); // ending function for formSave
	var storeData = function (myData) {
	    // setItem from signup_data
	    localStorage.setItem('signup_data', myData);
	    alert("Your information has saved!");
	}; // ending storeData function
});