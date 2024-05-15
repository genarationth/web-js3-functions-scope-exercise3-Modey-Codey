// Ex3.1
const fee = 3;
const interest = 1.001;
 const cost = function (Payment) {
    return (Payment * interest) + fee
 }
 console.log(cost(400));

// Ex3.2 P1
const addFriend = function (name1, name2, name3) {  
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`)
}
addFriend("john", "jack", "jill")

// Ex3.2 P2
const calAge = function (currentYear, birthYear) {
    return currentYear - birthYear;
}
console.log(calAge(2024, 1986));

// Ex3.2 P3
const welcomeFriend = function (name1, age1, name2, age2, name3, age3) {  
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`)
}
welcomeFriend("john", 18, "jack", 19, "jill", 20)

// Challenge Yourself

// Part 1 part 2 part 3
const grading = function(point) {
    if(point === 11) {
        console.log("perfect")
    } else if(point >= 8) {
        console.log("excellent")
    } else if(point >= 5) {
        console.log("passes")
    } else {
        console.log("fail")
    }
}

grading(11)

 
