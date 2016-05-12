(function($){
    $(document).ready(function () {
        var selected = [];
        var filterBlock = $(".filter");
        $(filterBlock).find(".place-filter").find("li").find("label").click(function(e){
            var targetTag = e.target.tagName;
            if(targetTag == "INPUT") return; // prevent extra events fired

            var place = $(this).data("place");
            console.log(selected, place);
            if(targetTag == "A" || targetTag == "i"){
                selected = selected.filter((i)=>i.toString().toUpperCase() != place.toString().toUpperCase());
                $(this).addClass("removed");
            } else {
                // adding
            }

            if(!changed){
                $(filterBlock).find("button.update").attr("disabled",null);
                changed = true;
            }

            if(place)
                selected.push(place);
            console.log(selected, place);
            changed = true;
            return true;
        });


        var months = [];
    	$(".datepicker").datepicker(
    		{
    			// https://github.com/eternicode/bootstrap-datepicker/
    			format: "dd/mm/yyyy",
    			todayBtn: true,
    			language: "pt-BR",
    			maxViewMode:2,
    			clearBtn:true,
    			// multidate:true,
    			autoclose: true,
    			beforeShowMonth:function(date){
    				var year = date.getFullYear();
    				var month = date.getMonth();
    				if(typeof months[year.toString()] == "undefined") months[year.toString()] = [];
    				if(typeof months[year.toString()][month.toString()] == "undefined"){
    					// months[year][month] = [];
    					// get month, add one prepending a '0' to the string. Get the last 2 chars from the string.
    					// This way, the string "010" will return 10 and "09" will return 09.
    					var userFriendlyMonth = ("0" + (month + 1)).slice(-2);
    					/* disabled to improve performance
    					$.ajax({
    						dataType: "json",
    						url: "/jornalnopalco2/jpapi/events/month/" + year + "/" + userFriendlyMonth,
    						async:false, // runs syncronous because we need to assure that the array has it values beforeShowDay
    						success: function(events){
    							months[year.toString()][month.toString()] = events;
    						}
    					});*/
    				}
    				// this is called for everymonth in Year
    				// $.getJSON("/api/events/daysInMonth");
    				return true;
    			},
    			beforeShowDay: function (date){
    				var month = date.getMonth();
    				var year = date.getFullYear();
    				if(Array.isArray(months)){
    					if(Array.isArray(months[year]) && Array.isArray(months[year][month])){
    						if(months[year][month].indexOf(date.getDate()) > -1){
    							return {
    								classes: 'active'
    							};
    						}
    					}
    				}
    			}
    		}
    	).on('changeDate', function (e){
    		// change page to fetch all events for the selected day
    		// console.log(e.date.getTime());
    	});
    });
})(jQuery);
