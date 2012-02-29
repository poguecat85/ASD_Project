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
			} // ending function for submitHandler
		}); // ending function for rbform.validate
	}); // ending function for formSave
	
	var storeData = function (myData) {
		var flname = $('#flname');
	    var male = $('#male');
	    var female = $('#female').val();
	    var addy = $('#addy').val();
	    var username = $('#username').val();
	    var pword = $('#pword').val();
	    var select = $('#select').val();
	    var key = localStorage.key(i);
	    var item = [
		    flname,
		    male,
		    female,
		    addy,
		    username,
		    pword,
		    select
	    ];
		// if there is no key, this means this is a brand new item and we need a new key
		if (!key) {
			var id = Math.floor(Math.random()*10000001);
		} else {
			// set the id to the existing key we're editing so that it will over the data
			// the key is the same key that's been passed along from the editSubmit event handler
			// to the vlidate function, and then passed here, into the storeData function.
			id = key;
		};
	
	    localStorage.setItem(key, item);
	    location.reload();
	    alert("Your information has saved!");
	}; // ending storeData function
}); // ending #signup page load