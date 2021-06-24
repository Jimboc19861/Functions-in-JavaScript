/*
	TMA Assignment Task 3
	Task 3 focuses on Conditional Constructs and requires an application that will calculate the ranking 
	of a senior chess player based on his/her ranking points.
	James Cordery
	13184228
	
*/

//First function that calculates a chess ranking based on rating points
function calculateChessRanking(points) {
	let rankingSystem = '';
	switch (true) { //create switch statement that takes rating points as arguments and returns corresponding ranking.
		case (points >= 2400): 
			rankingSystem = "Senior Master";
			break; //break added to break out of switch block when relevant ranking has been matched to user points.
		case (points >= 2200):
			rankingSystem = "National Master";
			break;
		case (points >= 2000):
			rankingSystem = "Expert";
			break;
		case (points >= 1800):
			rankingSystem = "Class A";
			break;
		case (points >= 1600):
			rankingSystem = "Class B";
			break;
		default:  //default added to return unranked if rating points are less than lowest ranking level.
			rankingSystem = "Unranked";
	}
	return rankingSystem;
}

//Second function to display the relevant ranking by calling the first function and entering a user input.
function displayRanking() {
	let ranking = calculateChessRanking(2199); //calls first function and takes a rating point as an argument.
	console.log("Your chess ranking is: " + ranking); //Displays the coresponding ranking to the points given.
}
displayRanking();