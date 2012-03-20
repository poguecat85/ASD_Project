$(document).ready(function(){
	$.ajax({
		"url": '/serial_box/_all_docs?include_docs=true&start_key=%22contact%22&end_key=%22contact:zzzzz%22',
		"dataType": 'json',
		"success": function(data) {
			$.each(data.rows, function(index, contact) {
				var group = contact.doc.group;
				var flname = contact.doc.flname;
				var addy = contact.doc.addy;
				var user = contact.doc.user;
				var pass = contact.doc.pass;
				var itemName = contact.doc.itemName;
				var serialNum = contact.doc.serialNum;
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