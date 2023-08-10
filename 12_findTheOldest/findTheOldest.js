const findTheOldest = function (array) {

    return array.reduce((oldest, current) => {
        const old = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const iter = getAge(current.yearOfBirth, current.yearOfDeath);
        return old > iter ? oldest : current;
    });


    //return person object
};
const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();

    }
    return death - birth;
}


/*# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). 
Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- This can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

*/


// Do not edit below this line
module.exports = findTheOldest;
