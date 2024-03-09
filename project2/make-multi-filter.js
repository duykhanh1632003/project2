
function makeMultiFilter(originalArray) {
    var currentArray = originalArray.slice();
    return function arrayFilterer(filterCriteria, callback) {
    
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }
        currentArray = currentArray.filter(filterCriteria);
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }
        return arrayFilterer;
    };
}
