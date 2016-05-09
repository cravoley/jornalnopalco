$(function () {
	var months = [];
	$(".datepicker").datepicker(
		{
			// https://github.com/eternicode/bootstrap-datepicker/
			format: "dd/mm/yyyy",
			todayBtn: true,
			language: "pt-BR",
			autoclose: true,
			beforeShowMonth:function(date){
				var year = date.getFullYear();
				var month = date.getMonth();
				if(typeof months[year] == "undefined") months[year] = [];
				if(typeof months[year][month] == "undefined"){
					// get month, add one prepending a '0' to the string. Get the last 2 chars from the string.
					// This way, the string "010" will return 10 and "09" will return 09.
					var userFriendlyMonth = ("0" + (month + 1)).slice(-2);
					$.getJSON("/jornalnopalco2/api/events/month/" + year + "/" + userFriendlyMonth, function(events){
						console.log('events', events);
						// TODO: add event dates to array.
						// Set special classe for days with events
					});
				}
				// this is called for everymonth in Year
				// $.getJSON("/api/events/daysInMonth");
				return true;
			}
			// ,
			// beforeShowDay: function (date){
			// 	if (date.getMonth() == (new Date()).getMonth())
			// 		switch (date.getDate()){
			// 			case 4:
			// 				return {
			// 					tooltip: 'Example tooltip',
			// 					classes: 'active'
			// 				};
			// 			case 8:
			// 				return false;
			// 			case 12:
			// 				return "green";
			// 		}
			// }
		}
	).on('changeDate', function (e){
		// change page to fetch all events for the selected day
		console.log(e.date.getTime());
	});
});
