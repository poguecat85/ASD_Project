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
						'<p>Serial Number: '+ jdata.serialNums +'</p>'+
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