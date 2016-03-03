var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
            return val;
        },

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
            if (Array.isArray(list) == true) {
                for (var i = 0; i < list.length; i++) {
                        iterator(list[i], i, list);
                }
            }
            if (Array.isArray(list) == false) {
                for (var key in list) {
                        iterator(list[key], key, list);
                }
            }
        },

		filter : function(list, test) {
            var result = []
            for (var i = 0; i < list.length; i++) {
                if (test(list[i])) {
                    result.push(list[i]);
                }
            }
            return result;
        },

		reject : function(list, test) {
            var result = []
            for (var i = 0; i < list.length; i++) {
                if (test(list[i]) == false) {
                    result.push(list[i]);
                }
            }
            return result;
        },

		map : function(list, iterator) {
            var result = []
            for (var i = 0; i < list.length; i++) {
                    result.push(iterator(list[i]));
            }
            return result;
        },

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
            if (typeof accumulator !== 'undefined') {
                var result = accumulator;
            } else {
                var result = list[0];
            }
            var answer = 0;
            for (var i = 0; i < (list.length - 1); i++) {
                if (i == 0) {
                    answer = list[0];
                }
                answer = iterator(answer, list[i + 1]);
                console.log(i, answer);
            }
            return answer + result;
        },

		every : function(list, iterator) {},

		some : function(list, iterator) {},

		contains : function(list, target) {},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {},

		indexOf : function(array, target){},

		uniq : function(array) {},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();




