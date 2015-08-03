//Part 2
var _ = {
	//each - iterates over an array and calls a given function with each element
	each: function(arr, inputFunction) {

				for (var i = 0; i < arr.length; i++) {
					inputFunction(arr[i]);
				}

			},
	//compact - returns a new array with all provided undefined values removed
	compact: function() {


	},
	//map - returns a new array of values produced by running each element of 
	//an array through a given function
	map: function() {

	},
	filter: function() {

	}

}







//each - iterates over an array and calls a given function with each element
console.log("_.each test: ", ([1, 2, 3], alert));
//=> alerts each number in turn...

//compact - returns a new array with all provided undefined values removed
_.compact([1, "hello", undefined, 3, undefined]);
//=> [1, "hello", 3]

//map - returns a new array of values produced by running each element of an array through 
//a given function
_.map([1, 2, 3], function(num){ return num * 3; });
//=> [3, 6, 9]
_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
//=> ["DOGS", "BEFORE", "CATS"]

//filter - Looks through each value in the list, returning an array of all the values 
//that pass a truth test
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> [2, 4, 6]