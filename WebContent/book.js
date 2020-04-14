/**
 * 
 */

function getDetails(){
	jQuery.ajax({
        url: "http://localhost:8081/book_service/rest/books/" + $("#id").val(),
        type: "GET",
        contentType: "application/json",  
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            //here is your json.
              // process it
        	  $("#title").text(data.title);
        	  $("#price").text(data.price);

        },
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#title").text("Sorry! Book not found!");
        		$("#price").text("");
        },
        timeout: 120000,
    });
};

function addNewBook(){
	
	console.log('executed');
	
    var bookId = $("#InsertBookId").val();
    var bookName = $("#InsertBookName").val();
    var bookPrice = $("#InsertBookPrice").val();
	
    var sendInfo = {
    		id: bookId ,
            title: bookName,
            price: bookPrice
    };
    console.log(sendInfo);
    
	jQuery.ajax({
		   type: "POST",
		  url: "http://localhost:8081/book_service/rest/books",
		  contentType: "application/json",
		  dataType: 'json',
		  data: sendInfo,
		   success: function (msg) {
               if (msg) {
            	   $("#message").text("Added");
               } else {
            	   $("#message").text("Fail");
               }
           },
          
    });
};