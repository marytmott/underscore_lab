//Part 2
var _ = {
	//each - iterates over an array and calls a given function with each element
	each: 	function(arr, inputFunction) {
				for (var i = 0; i < arr.length; i++) {
					inputFunction(arr[i]);
				}
			},
	//compact - returns a new array with all provided undefined values removed
	compact: 	function(arr) {
					var noUndefined = [];

					for (var i = 0; i < arr.length; i++) {
						if (arr[i] !== undefined) {
							noUndefined.push(arr[i]);
						}
					}
					return noUndefined;
				},
	//map - returns a new array of values produced by running each element of 
	//an array through a given function
	map: 	function(arr, inputFunction) {
				var values = [];

				for (var i = 0; i < arr.length; i++) {
					values.push(inputFunction(arr[i]));
				}
				return values;
			},
	//filter - Looks through each value in the list, returning an array of all the values 
	//that pass a truth test
	filter: 	function(arr, inputFunction) {
					var areTrue = [];

						for (var i = 0; i < arr.length; i++) {
							if (inputFunction(arr[i])) {
								areTrue.push(arr[i]);
							}
						}
					return areTrue;
				}
};

//each - iterates over an array and calls a given function with each element
//_.each([1, 2, 3], alert);
//=> alerts each number in turn...

//compact - returns a new array with all provided undefined values removed
console.log('compact test: ', _.compact([1, "hello", undefined, 3, undefined]));
//=> [1, "hello", 3]

//map - returns a new array of values produced by running each element of an array through 
//a given function
console.log('_.map test: ', _.map([1, 2, 3], function(num){ return num * 3; }));
//=> [3, 6, 9]
console.log('_.map test: ', _.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); }));
//=> ["DOGS", "BEFORE", "CATS"]

//filter - Looks through each value in the list, returning an array of all the values 
//that pass a truth test
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("_.filter test: " + evens);
//=> [2, 4, 6]