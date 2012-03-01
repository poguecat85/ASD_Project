// Verify email alert
// alert("Thank you for signing up!  Please check your email to activate your account.");
//mobile DOM loader ($) mobile method
$('#signup').live('pageinit', function () {
	var rbform = $('#recordsignup');
	var	rberrorslink = $('#rberrorslink');
	var formSave = $('#submit');
	
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