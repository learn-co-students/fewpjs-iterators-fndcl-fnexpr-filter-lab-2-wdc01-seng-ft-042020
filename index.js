const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here

const findMatching = (drivers,string) => {
    return drivers.filter( driver => { 
    return string.toLowerCase() === driver.toLowerCase()
    })
}

const fuzzyMatch = (drivers,string) => { 
    return drivers.filter( driver => {
      return driver.substring(0, 2).toUpperCase() === string.toUpperCase();
    })
}
