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
	
	function storeData(key) {
		// if there is no key, this means this is a brand new item and we need a new key
		var value = $.jStorage.get("key");
		if(!value){
			// if not - load the data from the server
		 	value = load_data_from_server()
		 	// and save it
			$.jStorage.set("key",value);
		}
		// gather up all our form field values and store in an object
		//Object properties contain array with the form label and the input value.
		var item = {};
		item.group = ["Group:", $('groups').value];
		item.flname = ["First and Last Name:", $('flname').value];
		item.addy = ["Email:", $('addy').value];
		item.user = ["Username:", $('username').value];
		item.pass = ["Password:", $('pword').value];
		item.cnfrmpass = ["Confirm Password:", $('cnfrmpass').value];
		item.itemName =["Item Name:", $('itemName').value];
		item.serialNums =["Serial Number:", $('serialNums').value];
		// data into local storage: use stringify to convert our object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert(localStorage.getItem(localStorage.key(0)));
	}
});