const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here

let findMatching = (drivers, string) => {
    return drivers.filter(driver => driver[0].toLowerCase + driver.slice(1) === string[0].toLowerCase + string.slice(1));
}

let fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver[0] === string[0]);
}