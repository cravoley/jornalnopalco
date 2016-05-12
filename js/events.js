(function($){
    $(document).ready(function () {
        var toFilter = [];
        var toUnfilter = [];
        var filterBlock = $(".filter");
        var filterButton = $(filterBlock).find("input.update");
        $(filterBlock).find(".place-filter").find("li").find("label").click(function(e){
            var targetTag = e.target.tagName;
            if(targetTag == "INPUT") return; // prevent extra events fired

            var place = $(this).data("place").toString(); //assure we are handling only with strings
            console.log(toUnfilter, toFilter, place);
            if(targetTag == "A" || targetTag == "i"){
                // unfiltering
                if($(this).hasClass("removed")){
                    toUnfilter = toUnfilter.filter((i)=>i.toUpperCase() != place.toUpperCase());
                    $(this).removeClass("removed");
                } else {
                    toUnfilter.push(place);
                    $(this).addClass("removed");
                }
            } else {
                // setting filter
                if($(this).find("input[type='checkbox']").is(":checked")){
                    toFilter = toFilter.filter((i)=>i.toUpperCase() != place.toUpperCase());
                } else {
                    toFilter.push(place);
                }
            }

            var disabled = (toFilter.length > 0 || toUnfilter.length > 0?null:"disabled");
            filterButton.attr("disabled",disabled);
        });
        $(filterButton).click(function(e){
            // disable form and triggers
            $(filterBlock).css("opacity","0.5")
                .find("input").attr("disabled","true");
            var labels = $(filterBlock).find(".place-filter").find("li").find("label");
            var toSearch = [];
            $(labels).unbind("click")
            // search all selected filters
                .each(function(i,k){
                    if($(this).hasClass("selected") && !$(this).hasClass("removed")){
                        toSearch.push($(this).data("place").toString());
                    } else {
                        if($(this).find("input[type='checkbox']").is(":checked")){
                            toSearch.push($(this).data("place").toString());
                        }
                    }
                });
            // length should always be greater than 0 but, who knows?
            if(toSearch.length > 0){
                var searchString = toSearch
                    .map((i) => "place[]=" + i)
                    .join("&");
                    console.log(searchString);
                window.location.search = searchString;
            } else
                window.location.search = "";
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
