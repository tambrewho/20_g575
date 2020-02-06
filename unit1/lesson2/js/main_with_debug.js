//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){

	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

// function to add columns for the city size
function addColumns(cityPop) {

	$('tr').each(function(i) {

		if (i == 0){
    	$(this).append('<th>City Size</th>');
    } else {

  		var citySize;

			// assigns each element a city size (Small, Medium, Large)
  		if (cityPop[i-1].population < 100000){
  			citySize = 'Small';

  		} else if (cityPop[i-1].population < 500000){
  			citySize = 'Medium';

  		} else {
  			citySize = 'Large';
  		};

			// adds each respective city's size
  		$(this).append('<td>' + citySize + '</td>');
  	};

  });

};

// function for adding user interaction events
function addEvents(){

	//event handler for whenever the user mouses over the table
	$("table").mouseover(function() {

		var color = "rgb(";

		for (var i=0; i<3; i++){
			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";

			} else {
				color += ")";
			};

			// will change the color of the table each time the event is triggered
			$(this).css('color', color);
		};

	});

	// function for the action of clicking on the table
	function clickme(){
		alert('Hey, you clicked me!');
	};

	// add event listener for clickme to table
	$('table').on('click', clickme);
}

//call the initialize function when the document has loaded
$(document).ready(initialize);
