const palindromes = function (string) {

    //racecar
    //   - Animal loots foliated detail of stool lamina.

    let str = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    //str.replace(/[!,.]/g, "");


    let comp = str.split("").reverse().join("");

    return str == comp;
};

// Do not edit below this line
module.exports = palindromes;
