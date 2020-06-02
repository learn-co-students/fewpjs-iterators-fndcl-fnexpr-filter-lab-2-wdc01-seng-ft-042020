const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

let findMatching = (drivers, name) => {
  return drivers.filter(driver => 
       name.toLowerCase() === driver.toLowerCase()
   )
}

let fuzzyMatch = (drivers, name) => {
   return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()) && driver.toLowerCase().indexOf(name.toLowerCase()) === 0)
}