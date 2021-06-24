/*
	TMA Assignment Task 2
	Task 2 focuses on Numbers and Number Methods and requires a small application that will calculate and display
	the fuel eficiency of a car in both metric and imperial units.
	For reference, a car travels 500km and the fuel consumed is 52.28 litres.
	James Cordery
	13184228
	
*/

//Function to calculate fuel efficiency in metric units.
function calculateMetric() {
	let litres = 52.28; //Litres is fuel consumed for 500km
	let metricEfficiency = litres / 5; //To get fuel consumed for 100km, divide value by 5.
	console.log("Your car has a fuel economy of " + metricEfficiency.toFixed(2) + " litres per hundred kilometres."); //Write value to console.
}
calculateMetric();


//Function to calculate fuel efficiency in imperial units.
function calculateImperial() {
	let litres = 52.28;
	let gallons =  litres / 4.546; //Convert litres to gallons.
	let imperialEfficiency = gallons / 3.11; //Divide gallons by miles. 500km  = 3.11 miles.
	console.log("Your car has a fuel economy of " + imperialEfficiency.toFixed(2) + " gallons per hundred miles."); //Write value to console.
}
calculateImperial();