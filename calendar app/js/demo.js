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
			color: $("input[name='color'", this).val(),
			type: $("select[name='type']", this).val()
		};
		active_events = JSON.parse(localStorage.getItem('events'));
		active_events.push(curAdd);
		localStorage.setItem('events', JSON.stringify(active_events));
		window.location.reload();
	}); 
  
    
});
		
		
		function makeList() 
		{
			var listData = JSON.parse(localStorage.getItem('events'));

			var listElement = document.getElementById("myList");
			var listElement2 = document.getElementById("myList2");
			
			//var listElement = document.getElementById("html-data-table");
			//var listElement2 = document.getElementById("html-data-table2");
   
			var numberOfListItems = listData.length;
			var listItem;
			var i;
			var newRow = 'name:';
			var space;
			var count = 0;
			var count2 = 0;
			var count3 = 0;
			var count4 = 0;
			var count5 = 0;
			var count6 = 0;

			for (i = 0; i < numberOfListItems; ++i) 
			{
				
				listItem = document.createElement('li');
				listItem.innerHTML = listData[i].id;
				if(count == 1)
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Event ID:';
					listElement2.appendChild(newRow)
					listElement2.appendChild(listItem);
					space = document.createElement('br');
					listElement2.appendChild(space);
					count = count - 1;
				}
				else
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Event ID:';
					listElement.appendChild(newRow)
					listElement.appendChild(listItem);
					space = document.createElement('br');
					listElement.appendChild(space);
					count = count + 1;
				}
				
				listItem = document.createElement('li');
				listItem.innerHTML = listData[i].name;
				if(count2 == 1)
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Event Name:';
					listElement2.appendChild(newRow)
					listElement2.appendChild(listItem);
					space = document.createElement('br');
					listElement2.appendChild(space);
					count2 = count2 - 1;
				}
				else
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Event Name: ';
					listElement.appendChild(newRow)
					listElement.appendChild(listItem);
					space = document.createElement('br');
					listElement.appendChild(space);
					count2 = count2 + 1;
				}
				
				listItem = document.createElement('li');
				listItem.innerHTML = listData[i].date;
				if(count3 == 1)
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Date: ';
					listElement2.appendChild(newRow)
					listElement2.appendChild(listItem);
					space = document.createElement('br');
					listElement2.appendChild(space);
					count3 = count3 - 1;
				}
				else
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Date: ';
					listElement.appendChild(newRow)
					listElement.appendChild(listItem);
					space = document.createElement('br');
					listElement.appendChild(space);
					count3 = count3 + 1;
				}
				
				listItem = document.createElement('li');
				listItem.innerHTML = listData[i].description;
				if(count4 == 1)
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Description: ';
					listElement2.appendChild(newRow)
					listElement2.appendChild(listItem);
					space = document.createElement('br');
					listElement2.appendChild(space);
					count4 = count4 - 1;
				}
				else
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Description: ';
					listElement.appendChild(newRow)
					listElement.appendChild(listItem);
					space = document.createElement('br');
					listElement.appendChild(space);
					count4 = count4 + 1;
				}
				
				listItem = document.createElement('li');
				listItem.innerHTML = listData[i].type;
				if(count5 == 1)
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Type of Event: ';
					listElement2.appendChild(newRow)
					listElement2.appendChild(listItem);
					space = document.createElement('br');
					listElement2.appendChild(space);
					count5 = count5 - 1;
				}
				else
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Type of Event:';
					listElement.appendChild(newRow)
					listElement.appendChild(listItem);
					space = document.createElement('br');
					listElement.appendChild(space);
					count5 = count5 + 1;
				}
				
				listItem = document.createElement('li');
				listItem.innerHTML = listData[i].color;
				if(count6 == 1)
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Color:';
					listElement2.appendChild(newRow)
					listElement2.appendChild(listItem);
					space = document.createElement('br');
					listElement2.appendChild(space);
					count6 = count6 - 1;
				}
				else
				{
					newRow = document.createElement('p');
					newRow.innerText = 'Color:';
					listElement.appendChild(newRow)
					listElement.appendChild(listItem);
					count6 = count6 + 1;
				}
				
			}
		};
makeList();


		$("#menu3").click(function()
		{
			$('#eventlist').css("z-index", 10);
			$('#calendar').css("z-index", -10);
			$('#eventform').css("z-index", -10);
		});

		$("#menu2").click(function()
		{
			$('#calendar').css("z-index", -10);
			$('#eventform').css("z-index", 20);
			$('#eventlist').css("z-index", -20);
		});

		$("#menu1").click(function()
		{
			$('#calendar').css("z-index", 10);
			$('#bubble1').css("z-index", 10);
			$('#eventform').css("z-index", -10);
			$('#eventlist').css("z-index", -10);
		});
		