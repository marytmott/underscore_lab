var _ = {
	//average - returns the average value in a given array
	average: 	function(arr) {
					var sum = 0;
					var numbersInArray = arr.length;
					var averageOfNums;
		
					for (var i = 0; i < numbersInArray; i++) {
						sum += arr[i];
					}

					averageOfNums = sum / numbersInArray;
					return averageOfNums;
				},
	// contains - returns true is a given value is present in an array
	contains: 	function(arr, num) {
					for (var i = 0; i < arr.length; i++) {
						if (arr[i] === num) {
							return true;
						} else {
							continue;
						}
					} return false;
				},
	//first - returns the first element in an array
	first: 	function(arr){
				return arr[0];
			},
	//last - returns the last element in an array
	last: 	function(arr) {
				var lastElementIndexNum = arr.length - 1;
				return arr[lastElementIndexNum];
			},
	//max - returns the maximum value in an array
	max: 	function() {

			},
	//min - returns the minimum value in an array
	min: function() {

	},
	//shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry 
	//about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.
	shuffle: function() {

	},
	//sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise 
	//a single random item will be returned.
	sample: function() {

	},
	//difference - returns the values from array that are not present in the other array.
	difference: function() {

	},
	//indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.
	indexOf: function() {

	},
	//pluck - extracts a list of property values and returns them in an array.
	pluck: function() {

	}
};

//average - returns the average value in a given array
console.log("_.average test: " + _.average([4,6,1,1]));
// => 3



// contains - returns true is a given value is present in an array
console.log('_.contains test: ' + _.contains([7,55,99], 99));
//=> true



//first - returns the first element in an array
console.log("_.first test: " + _.first([5, 4, 3, 2, 1]));
//=> 5


//last - returns the last element in an array
console.log("_.last test: " + _.last([5, 4, 3, 2, 1]));
//=> 1

//max - returns the maximum value in an array
var numbers = [10, 5, 100, 2, 1000];
console.log("_.max test: " + _.max(numbers));
//=> 1000


//min - returns the minimum value in an array
var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);
//=> 2


//shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry 
//about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.
_.shuffle([1, 2, 3, 4, 5, 6]);
//=> [4, 1, 6, 3, 5, 2]


//sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise 
//a single random item will be returned.`
_.sample([1, 2, 3, 4, 5, 6]);
//=> 4
_.sample([1, 2, 3, 4, 5, 6], 3);
//=> [1, 6, 2]


//difference - returns the values from array that are not present in the other array.
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
//=> [1, 3, 4]


//indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.
_.indexOf([1, 2, 3], 2);
//=> 1


//pluck - extracts a list of property values and returns them in an array.
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
//=> ["moe", "larry", "curly"] */