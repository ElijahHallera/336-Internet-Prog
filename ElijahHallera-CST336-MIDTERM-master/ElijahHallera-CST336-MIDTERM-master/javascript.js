let buildLibrary = function(){
	// $("#.flex-container").empty();
	var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#ISBNnumber").val() + "&format=json&jscmd=data";
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
		    console.log(data)
			data.message.forEach(function(data){
				$("#title").append(data.title);
				$("#name").append(data.name);
				$("#publish_date").append(data.publish_date);
				$("#isbn").append($("#ISBNnumber").val());
				$("#number_of_pages").append(data.number_of_pages);
			});
		},
		error: function(err){
			console.log(err);
		}
	});
}