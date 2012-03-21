//mobile DOM loader ($) for #signup page mobile method
$('#signup').live('pageinit', function () {
	var rbform = $('#recordsignup');
	var	rberrorslink = $('#rberrorslink');
	var formSave = $('#submit');
	var d = new Date();
	var key = (d.getTime());
	
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
				storeData(data);
				$.mobile.changePage($('#success'));
			} // ending function for submitHandler
		}); // ending function for rbform.validate
	}); // ending function for formSave
	var storeData = function (myData) {
	    var dataObj = {};
		$.each(myData, function(i,item){
			dataObj[item.name] = item.value;
		});
	    console.log(dataObj);
	    localStorage.setItem(key, JSON.stringify(dataObj));
	    alert("Your information has saved!");
	}; // ending storeData function
}); // ending #signup page load

// mobile DOM loader ($) for #success page mobile method
$('#success').live('pageinit', function () {
	var clearLink = $('#clear');
	var displayLink = $('#display');
	displayLink.on('click', function(){
		for (var i = 0; i < localStorage.length; i++) {
			$('#dataPlay').append(localStorage.getItem(localStorage.key(i)));	
		};
	});
	
	/*
	if (localStorage.key === "") {
		alert("There is no data saved!");
	} else {
		clearLink.on('click', function(){
			clearData(data);
			console.log("clearLink pressed!");
			alert("Data has been cleared");
			$.mobile.changePage($('#account'));
		}); // ending clearLink function
	}; // ending clearLink function
	*/
}); //success page end 

	
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

// JSON List
$('#jsondata').bind('click', function(){
	$('#data').empty();
	$('<p>').html('JSON Data Imported').appendTo('#data');
	$.ajax({
		url: 'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success: function(answer){
        	for (var i=0, j=answer.contacts.length; i<j; i++){
				var jdata = answer.contacts[i];
				$(''+
					'<div class="datainfo">'+
						'<p>Group: '+ jdata.group +'</p>'+
						'<p>First and Last Name: '+ jdata.flname +'</p>'+
						'<p>Email: '+ jdata.addy +'</p>'+
						'<p>Username: '+ jdata.user +'</p>'+
						'<p>Password: '+ jdata.pass +'</p>'+
						'<p>Confirm Password: '+ jdata.cnfrmpass +'</p>'+
						'<p>Item Name: '+ jdata.itemName +'</p>'+
						'<p>Serial Number: '+ jdata.serialNum +'</p>'+
					'</div>'
				).appendTo('#data');
				console.log(answer);
			}
		}
	});
	return false;
});

// XML List
$('#xmldata').on('click', function(){
	$('#data').empty();
	$('<p>').html('XML Data Imported').appendTo('#data');
	$.ajax({
		url: 'xhr/data.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(xml){
			$(xml).find("contact").each(function(){
   				console.log($(xml).find("contact"));
   				var title = $(this).find('title').text();
   				var type = $(this).find('type').text();
   				var name = $(this).find('name').text();
   				var email = $(this).find('email').text();
   				var username = $(this).find('username').text();
   				var password = $(this).find('password').text();
    			$(''+
					'<div class="datainfo">'+
						'<p>'+ title +'</p>'+
						'<p>Type: '+ type +'</p>'+
						'<p>Name: '+ name +'</p>'+
						'<p>Email: '+ email +'</p>'+
						'<p>Username: '+ username +'</p>'+
						'<p>Password: '+ password +'</p>'+
					'</div>'
				).appendTo('#data');
				console.log(xml);
			});
		}
	});
	return false;
});


//CSV List
$('#csvdata').on('click', function(){
	$('#data').empty();
	$('<p>').html('CSV Data Imported').appendTo('#data');
	 $.ajax({
        type: "GET",
        url: "xhr/data.csv",
        dataType: "text",
        success: function(data) {
        	var allInfo = data.split(/\r\n|\n/);
    		var headers = allInfo[0].split(',');
    		var info = []; 

			for (var i=1; i<allInfo.length; i++) {
				var data = allInfo[i].split(',');
				if (data.length == headers.length) {
					var forminfo = []; 

					for (var j=0; j<headers.length; j++) {
						forminfo.push(data[j]); 
					}
					info.push(forminfo); 
				}

			}

			for (var m=0; m<info.length; m++){
				var acontact = info[m];
			$(''+
					'<div class="datainfo">'+
						'<h3>'+ acontact[0] +'</h3>'+
						'<p>Group:'+ acontact[1] +'</p>'+
						'<p>First and Last Name: '+ acontact[2] +'</p>'+
						'<p>Email: '+ acontact[3] +'</p>'+
						'<p>Username: '+ acontact[4] +'</p>'+
						'<p>Password: '+ acontact[5] +'</p>'+
						'<p>Confirm Password: '+ acontact[6] +'</p>'+
					'</div>'
				).appendTo('#data');
			console.log(info);	
			}
        }
	});
	return false;
});