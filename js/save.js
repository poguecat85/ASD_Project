$('#submit').live('click', function saveData(id) {
	var d = new Date();
	var key = (d.getTime());
	var flname = $("#flname").val();
	var addy = $("#addy").val();
	var user = $("#username").val();
	var pword = $("#pword").val();
	var select = $("#select").val();
	var item = [
			flname, 
			addy, 
			user, 
			pword, 
			select
		];
	
	localStorage.setItem(key, item);
	alert("Design Saved!");
	$.mobile.changePage($('#account'));
});