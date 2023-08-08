const removeFromArray = function(array, value1, value2, value3, value4) {

    let arr = array;

    let args = [value1, value2, value3, value4];

    let toRemove = [];


    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                toRemove.push(arr[i]);
            }
        }
    }

    for (i = 0; i < toRemove.length; i++) {
        index = arr.indexOf(toRemove[i]);
        arr.splice(index, 1);
    }

    return arr;
    

};

// Do not edit below this line
module.exports = removeFromArray;
