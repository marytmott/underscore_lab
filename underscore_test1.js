//filter - Looks through each value in the list, returning an array of all the values
//that pass a truth test
function filter(arr, inputFunction) {
var areTrue = [];

	for (var i = 0; i < arr.length; i++) {
		if (inputFunction(arr[i])) {
			areTrue.push(arr[i]);
		}
	}
	return areTrue;
}

var evens = filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);
//=> [2, 4, 6]