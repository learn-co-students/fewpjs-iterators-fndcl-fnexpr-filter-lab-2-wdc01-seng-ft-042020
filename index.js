const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here
// let sensitive = [];
// for (let i=0; i < drivers.length; i++){
    //     sensitive.push(drivers[i].toLowerCase());
    // }
    // let match = sensitive.filter(driver => {
        //     return driver === string;
        // });
        
function findMatching(drivers,string) {
    let filt = drivers.filter( x=> {
        if (x.slice(1) === string.slice(1)) {
            return x;
        };
        });
        return filt;
}
function fuzzyMatch(drivers,string){
    let filt = drivers.filter(x => {
        if (x.slice(0,2) === string) {
            return x;
        }
    });
return filt;
}