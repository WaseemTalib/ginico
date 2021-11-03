function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

$(document).on('click','a.details',function(e){
    e.preventDefault();
    $('#Modal').modal('show')
        .find('.modal-body')
        .load($(this).attr('href'));

    $('#Modal').on('hidden.bs.modal', function() {
        $(this).removeData();
    });
});

$(document).ready(function() {
	$("#yes").hide();
	$("#no").hide();
	$("#invest").hide();
	
	$("#lived").change(function() {
		var value = $("input[name='lived']:checked").val();
		
		 if(value == 1 || value == "1")
		   {
		     $("#yes").fadeIn(1000);
		     $("#no").fadeOut(1000);
		   }
		 if(value == 0 || value == "0")
		  {
		     $("#no").fadeIn(1000);
		     $("#yes").fadeOut(1000);
		  } 
	});
	
	$("#investment").change(function() {
		var value = $("input[name='investment']:checked").val();
		
		 if(value == 1 || value == "1")
		   {
		     $("#invest").fadeIn(1000);
		   }else
		  {
		     $("#invest").fadeOut(1000);
		  } 
	});
});