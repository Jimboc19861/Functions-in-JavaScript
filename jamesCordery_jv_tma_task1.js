/*
	TMA Assignment Task 1
	Task 1 focuses on Strings and String Methods and requires a small application that gets an ISBN number and manipulates
	that ISBN using String methods.
	James Cordery
	13184228
	
*/

function declareISBN() { //Function created to declare ISBN number for calling withing another fucntion.
	let ISBN = "978-0-545-01022-1"; //Declare ISBN and assign to variable.
	return ISBN;
}
declareISBN();

//Write the ISBN to the console
function writeNumber() //Create function with ISBN as a parameter. Then any ISBN number can be used.
{
	let number = declareISBN(); //Helper function. Call fucntion to declare ISBN and assign to variable. 
	console.log("The ISBN is " + number);  //Write function to console using ISBN declared in previous function.
}
writeNumber();  //Call function with ISBN number input.


//Get length of ISBN without hyphens.
function stringLength(ISBN)
{
	let newISBN = ISBN.replace("-", "").replace("-", "").replace("-", "").replace("-", ""); 
	/*Replaces each instance of hypen with an empty string. Could not use global variable so this replace method was used instead. 
	As all ISBN numbers follow the same pattern, this will work for any ISBN entered.*/
	console.log("This is a " + newISBN.length + " digit ISBN"); //Write fucntion to console.
}
stringLength("978-0-545-01022-1");

//Get the ISBN check digit
function checkDigit(ISBN)
{
	let lastDigit = ISBN.charAt(16); //Obtain last digit from ISBN number and assign to variable lastDigit.
	console.log("The ISBN check digit is " + lastDigit) //Write to console.
}
checkDigit("978-0-545-01022-1");

//Get the registration group prefix
function groupPrefix(ISBN)
{
	let prefix1 = ISBN[0] //Obtain first digit index.
	let prefix2 = ISBN[1] //Obtain second digit index.
	let prefix3 = ISBN[2] //Obtain third digit index.
	console.log("The ISBN registration group prefix is " + (prefix1.concat(prefix2, prefix3))); //Write to console.
}
groupPrefix("978-0-545-01022-1");
