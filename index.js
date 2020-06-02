const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here

function findMatching(arr, str) {
    return arr.filter(x => x.toUpperCase() === str.toUpperCase());
}

function fuzzyMatch(arr, str) {
    return arr.filter(x => x.startsWith(str));
}

// console.log(fuzzyMatch(drivers, 'Sa'))
// console.log(findMatching(drivers, 'bobby'))
