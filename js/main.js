// Verify email alert
// alert("Thank you for signing up!  Please check your email to activate your account.");
//mobile DOM loader ($) mobile method
var parseSignupForm = function (data) {
	// uses form data here;
	console.log(data); 
};

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
			}
		})
	},
	
	var storeData = function (myData) {
		var flname = $('#flname');
	    var male = $('#male');
	    var female = $('#female').val();
	    var addy = $('#addy').val();
	    var username = $('#username').val();
	    var pword = $('#pword').val();
	    var select = $('#select').val();
	    var item = [
		    flname,
		    male,
		    female,
		    addy,
		    username,
		    pword,
		    select
	    ];
	
	    localStorage.setItem(key, item);
	    location.reload();
	    alert("Your information has saved!");
	};
});