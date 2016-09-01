
function initApp(){
	
	for(a=1;a<11;a++)
	{
		var current = "#submit" + a;
		
		$(current).click(function()
		{
			var realid = this.id.replace("submit", "");
			
			if(validarEmail($("#email" + realid).val()) && $("#face" + realid).val() != '')
			{
				$.ajax({
					type: "POST",
					url: "php/send.php?ventana=" + "v" + realid,
					dataType: "json",
					data: $("#v" + realid).serialize(),
					success: function(data) {
						if(data.ok == true)
						{
							saveIp();
							
							for(var a=1;a<11;a++)
							{
								$("#submit" + a).prop('disabled', true);
								$("#email" + a).prop('disabled', true);
								$("#face" + a).prop('disabled', true);
							}
						}
					}
				});
			}
			
		});
		
	}
	
}


function saveIp(){
	$.ajax({
		type: "POST",
		url: "php/saveIp.php",
		dataType: "json",
		success: function(data) {
			if(data.ok == true)
			{
				
				//alert("saved");
				
			}
		}
	});
}



function validarEmail( email ) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
    {
    	return false;
    }
    else
    {
    	return true;
    }
        
}



