var arrayOne = [1, 2, 3, 4, 5, 6, 7, 8]
var arrayTwo = [2, 3, 4, 5, 6, 7, 8, 9]
var arrayThree = [3, 4, 5, 6, 7, 8, 9, 1]
var arrayFour = [4, 5, 6, 7, 8, 9, 1, 2]
var arrayFive = [5, 6, 7, 8, 9, 1, 2, 3]
var arraySix = [6, 7, 8, 9, 1, 2, 3, 4]



var bigArray = [arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive, arraySix];



function multiply(masterArray){
	for(var i = 0; i < masterArray.length; i++){
			for(var j = 0; j < masterArray[i].length; j++){
				masterArray[i][j] = (masterArray[i][j] + 1) * 2;
				//masterArray[i][j] = masterArray[i][j] * 2;
				
		}
	}
return masterArray;
}

console.log(multiply(bigArray));

