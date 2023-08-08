const repeatString = function(word, num) {
    let string = "";
    let times = num;
    if (times < 0) {
        return 'ERROR';
    }
    for (i = 0; i < num; i++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
