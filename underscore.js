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
	max: 	function(arr) {
				//set maxNum to be at least the first # in the array
				var maxNum = arr[0];

				for (var i = 1; i < arr.length; i++) {
					if (arr[i] > maxNum) {
						maxNum = arr[i];
					} else {
						continue;
					}
				}
				return maxNum;
			},
	//min - returns the minimum value in an array
	min: 	function(arr) {
				//set minNum to be at least the first # in the array
				var minNum = arr[0];

				for (var i = 1; i < arr.length; i++) {
					if (arr[i] < minNum) {
						minNum = arr[i];
					} else {
						continue;
					}
				}
				return minNum;
			},
	//shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry 
	//about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.
	shuffle: 	function(arr) {
					var randomNum;
					var testRandomNum;
					var randomIndexNums = [];
					var indexValueOfSample;
					var sampleArray = [];

					
						while (randomIndexNums.length < arr.length) {
							//create a test number to see if the randomNum is already in the sample index num array (randomIndexNums)
							//need to re-declare the variable here so a new randomNum is generated each time through the while loop 
							//due to bugs w/ hoisting randomNum if defined outside while loop
							randomNum = Math.floor(Math.random() * arr.length);
							testRandomNum = randomNum;
							//call .indexOf function we made below to see if the randomNum is already in the sample randomIndexNums 
							//array, if not, add randomNum to randomIndexNums array
							if (this.indexOf(randomIndexNums, testRandomNum) === -1) {
								randomIndexNums.push(randomNum);
							}
						}
						//populate sample array by looping through the randomIndexNums array
						for (var i = 0; i < arr.length; i++) {
							//pull index Value from randomIndexNums array to populate to return array w/ sample nums from arr
							indexValueOfSample = randomIndexNums[i];
							sampleArray.push(arr[indexValueOfSample]);
						}
						return sampleArray;
				},
	//sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise 
	//a single random item will be returned.
	sample: 	function(arr, num) {
					var randomNum;
					var testRandomNum;
					var randomIndexNums = [];
					var indexValueOfSample;
					var sampleArray = [];

					if (num === undefined || num === 1) {
						//choose a random index value between 0 and the length of the array
						randomNum = Math.floor(Math.random() * arr.length);
						return arr[randomNum];
					} else {
						while (randomIndexNums.length < num) {
							//create a test number to see if the randomNum is already in the sample index num array (randomIndexNums)
							//need to re-declare the variable here so a new randomNum is generated each time through the while loop 
							//due to bugs w/ hoisting randomNum if defined outside while loop
							randomNum = Math.floor(Math.random() * arr.length);
							testRandomNum = randomNum;
							//call .indexOf function we made below to see if the randomNum is already in the sample randomIndexNums 
							//array, if not, add randomNum to randomIndexNums array
							if (this.indexOf(randomIndexNums, testRandomNum) === -1) {
								randomIndexNums.push(randomNum);
							}
						}
						//populate sample array by looping through the randomIndexNums array
						for (var i = 0; i < num; i++) {
							//pull index Value from randomIndexNums array to populate to return array w/ sample nums from arr
							indexValueOfSample = randomIndexNums[i];
							sampleArray.push(arr[indexValueOfSample]);
						}
						return sampleArray;
					}
				},
	//difference - returns the values from array that are not present in the other array.
	difference: 	function(arr1, arr2) {
						var notFound = [];

						//select a value in 1st array to see if it is in 2nd array
						for (var i = 0; i < arr1.length; i++) {
							var testValue = arr1[i];

							//go through 2nd loop to look for testValue
							for (var j = 0; j < arr2.length; j++) {
								if (!this.contains(arr2, testValue)) {
									notFound.push(testValue);
									break;
								}
							}

						}
						return notFound;
					},
	//indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.
	indexOf: 	function(arr, value) {
					var foundValue = 0;

					for (var i = 0; i < arr.length; i++) {
						if (arr[i] === value) {
							return i;
						} else {
							continue;
						}
					}

					if (foundValue === 0) {
						return -1;
					}
				},
	//pluck - extracts a list of property values and returns them in an array.
	pluck: 	function(arr, keyName) {
				var propVals = [];

				for (var i = 0; i < arr.length; i++) {
						propVals.push(arr[i][keyName]);		
				}

				return propVals;
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
console.log('_.min test: ' + _.min(numbers));
//=> 2


//shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry 
//about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.
console.log('_.shuffle test: ' + _.shuffle([1, 2, 3, 4, 5, 6]));
//=> [4, 1, 6, 3, 5, 2]


//sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise 
//a single random item will be returned.`
console.log('_.sample test(no num): ' + _.sample([1, 2, 3, 4, 5, 6]));
//=> 4
console.log('_.sample test: ' + _.sample([1, 2, 3, 4, 5, 6], 3));
//=> [1, 6, 2]


//difference - returns the values from array that are not present in the other array.
console.log("_.difference test: " + _.difference([1, 2, 3, 4, 5], [5, 2, 10]));
//=> [1, 3, 4]


//indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.
console.log('_.indexOf test: ' + _.indexOf([1, 2, 3], 2));
//=> 1


//pluck - extracts a list of property values and returns them in an array.
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log("_.pluck test: " + _.pluck(stooges, 'name'));
//=> ["moe", "larry", "curly"]