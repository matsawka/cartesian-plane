//Readline to get (x,y) input
function questions(items) {
	const rl = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question('Please enter the x coordinate : ', (input) => {
		rl.question('Please enter the y coordinate : ', (input2) => {
			let inputX = input;
			let inputY = input2;
			rl.close();
			findCoordinates(items, inputX, inputY);
		});
	});
  
}
//Comparer Function  
function getSortOrder(prop) {  
	return function(a, b) {  
		if (a[prop] > b[prop]) {  
			return 1;  
		} else if (a[prop] < b[prop]) {  
			return -1;  
		}  
		return 0;  
	};  
} 
//Calculations
function findCoordinates(items, inputX, inputY) {
	let coordinates, xCoord, yCoord, finalCoordinate =  '';
	for(let i in items) {
		coordinates =  items[i].value.split(',');
		xCoord = coordinates[0]; 
		yCoord = coordinates[1]; 
		finalCoordinate = parseFloat(Math.sqrt(Math.pow(xCoord - inputX, 2) + Math.pow(yCoord -inputY, 2)));
		items[i]['distance'] = finalCoordinate;
	}
	items.sort(getSortOrder('distance'));
	console.log(`Ordered Distances from coordinates (${inputX},${inputY})`)
	console.log(items);
}
module.exports = {
	questions,
	getSortOrder,
	findCoordinates
};