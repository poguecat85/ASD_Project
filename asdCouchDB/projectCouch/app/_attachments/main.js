$(document).ready(function(){
	$.ajax({
		"url": "_view/data",
		"dataType": 'json',
		"success": function(data) {
			$.each(data.rows, function(index, contact) {
				var group = contact.value.group;
				var flname = contact.value.flname;
				var addy = contact.value.addy;
				var user = contact.value.user;
				var pass = contact.value.pass;
				var itemName = contact.value.itemName;
				var serialNum = contact.value.serialNum;
				$('#dataList').append(
					$('<li>').append(
						$('<a>').attr("href", "#")
							.text(group)
					)
				);
				$('#dataList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(flname)
						)
					);
				$('#dataList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(addy)
						)
					);
				$('#dataList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(user)
						)
					);
				$('#dataList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(pass)
						)
					);
				$('#dataList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(itemName)
						)
					);
				$('#dataList').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(serialNum)
						)
					);
			})
			$('#dataList').listview('refresh');
		}
	})
});