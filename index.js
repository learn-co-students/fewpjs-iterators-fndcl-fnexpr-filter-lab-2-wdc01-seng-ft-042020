const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here

const findMatching = (drivers, string) => {
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase();
    })
};

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => {
        return driver.startsWith(string);
    });
}
