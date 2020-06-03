const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here




function findMatching(array, string) {
    let filteredArray = array.filter(driver => driver.toUpperCase() === string.toUpperCase())
    return filteredArray
}

function fuzzyMatch(array, string) {
    let filteredArray = array.filter(driver => driver.slice(0, 2) === string)
    return filteredArray
}

