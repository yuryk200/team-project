var events = [];

var active_events = [];

var week_date = [];

var curAdd, curRmv;

$(document).ready(function() {
	//localStorage.setItem('events', JSON.stringify(active_events));
    $("#calendar").myCalendar({
        format: "MM dd, yyyy",
        titleFormat: "MM",
        calendarEvents: JSON.parse(localStorage.getItem('events'))
    });

    $("#removeBtn").click(function(a) {
        curRmv = getRandom(active_events.length);
        $("#calendar").myCalendar("removeCalendarEvent", active_events[curRmv].id);
        events.push(active_events[curRmv]);
        active_events.splice(curRmv, 1);
        if (0 === active_events.length) a.target.disabled = !0;
        if (events.length > 0) $("#addBtn").prop("disabled", !1);
    });
 
	$("#eventform").submit(function(event)
	{	
	    event.preventDefault();
		curAdd = {
			id: $("input[name='iden']", this).val(),
			name: $("input[name='eventname']", this).val(),
			date: [$("input[name='startdate']", this).val(), $("input[name='enddate']", this).val()],
			description: $("input[name='desc']", this).val(),
			type: $("input[name='type']", this).val()
		};
		active_events = JSON.parse(localStorage.getItem('events'));
		active_events.push(curAdd);
		localStorage.setItem('events', JSON.stringify(active_events));
		window.location.reload();
	}); 
  
    
});

		$("#menu2").click(function()
		{
			$('#calendar').css("z-index", -10);
		});

		$("#menu1").click(function()
		{
			$('#calendar').css("z-index", 10);
			$('#bubble1').css("z-index", 10);
		});