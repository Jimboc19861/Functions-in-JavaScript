/*
	TMA Assignment Task 4
	Task 4 focuses on Collections and Iterations and requires a JavaScript nested data structure representing
	lake depths in fathoms. It then needs to find the deepest lake in the collection and display it's name and
	depth in metres.
	James Cordery
	13184228
*/

(function() { //Create an immediately invoking fucntion expression (IIFE) to constrain the programme. 

function getLakeDetails() {
	const lakes =  //Create an array that contains lake names and depths as nested objects. Depth is in fathoms.
	[
		{name: "Caspian Sea", depth: 560},
		{name: "Tarn Hows", depth: 53},
		{name: "Crater Lake", depth: 324},
		{name: "Lake Tanganyika", depth: 803},
		{name: "Lake Vostok", depth: 546},
		{name: "Lake Baikal", depth: 897}
	];
	return lakes;
}
getLakeDetails();

//function to sort nested array by lake depth in descending order and display the results.
//This fucntion will work if any further lakes are added. 
function sortLakes() {
	let lakes = getLakeDetails(); //Call getLakeDetails function and assign to variable for use in this function.
	lakes.sort(function(a,b) { //Use a callback function to sort array by lake depths.
		return b.depth - a.depth; //Sorts depth from largest to smallest.
	});
	return lakes; //Returns sorted array.
}
sortLakes();

//Fucntion to display the sorted array.
function displaySortedLakes() {
	let lakes = sortLakes();
	for (let i = 0; i < lakes.length; i++ ) { //For loop to iterate through nested array.
		console.log(lakes[i].name + " " + lakes[i].depth); //Writes lake names and depths to console in descending order.
	}
}
displaySortedLakes();


//function to display the number of lakes in the nested array as a word.
//Function is not fully complete. It returns the total number of lakes in the array but does not convert the integer to a word.
//Did not want to leave a function out so have included function as it is. 
/*
let digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
		     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
*/
function numToWord() {
	let lakes = getLakeDetails(); //Call function to obtain lake array details. 	
	totalLakes = Object.keys(lakes).length; //Obtain length of the keys of the array
	console.log("There are " + totalLakes.toString() + " lakes"); //Write the amount of lakes to the console.
}
numToWord();


//First function to obtain the deepest lake.
function getDeepestLake() {
	let lakes = sortLakes();
	for (let i = 0; i < lakes.length; i++ ) { //For loop to search through sorted array.
		deepestLake = lakes[0].name; //As array is sorted. Deepest lake will always be the first index. Assign first index to variable.
	}
	return deepestLake; //Return the deepest lake.
}
getDeepestLake();


//Second function to convert depth of lake from fathoms to metres.
function convertDepth() {
	let lakes = getLakeDetails(); //call function for lake array and assign to variable.
	let depth = 0;
	for (let i = 0; i < lakes.length; i++) { //Loop through lake array
		depth = lakes[i].depth; //assigns depth value of array to variable.
	}
	let lakeDepth = depth * 1.8288; //Converts depth value to metres. To convert fathoms to metres, multiply fathom by 1.8288.
	return lakeDepth;
}
convertDepth();
	
//Third function to display the deepest lake name and depth in metres in the console.
function displayLake() {
	let largestLake = getDeepestLake(); //Call function for obtaining largest lake and assign to variabl
	let depth = convertDepth(); //Call function for converting lake depth from fathoms to metres and assign to variable.
	console.log("The deepest lake is " + largestLake + ". " + largestLake + " is " + depth.toFixed(2) + "m deep") //Write to console. 
}
displayLake();

})(); //Call the IIFE.