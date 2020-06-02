const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here  

function findMatching(array, string) {
    let corn = drivers.filter(ary =>
        ary == string || ary.toLowerCase() == string.toLowerCase());
    return corn
};

function fuzzyMatch(array, string) {
    let corn = drivers.filter(ary =>
        ary.slice(0, string.length) == string);
    return corn
};




// function fuzzymatch() {};