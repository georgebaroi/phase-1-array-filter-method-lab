// Code your solution here

//function takes in two arguments 
//returns the matching list of drivers 
//case sensitive 

//function is taking in two arguments, an array of drivers and a string  
//we will use the driver array, filter thru each driver in the array and check to see if the name of the driver matches the string value 
function findMatching(driver, name){
    //filtering thru the drivers array 
    return driver.filter(
        //match is arbitrarily named
        //match is actually an instance of the drivers array 
        //we're checking here to see if the instance from the driver array lowercased, matches the string argument which is named "name"
        (match)=> match.toLowerCase() === name.toLowerCase()
    )
    //the function would be used as such
// driverCollection = [abc, bcs, asd, fga, asd,]
// findMatching(driverCollection, "abc")

}

//take an array of driver names and a string as argument 
//return matching list of all drivers whose names begin with the provided letters 
//use indexOf since we're working with a string that needs to be queried 
function fuzzyMatch(driver, name){
    return driver.filter(
        (match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0 
    )
}



//take an array of driver objects and a string as arguments 
//each driver has two properties, name and hometown 
//return each element whose name property matches the provided string 
//function matchName(driver, hometown)
//driver would be the drivers object and the hometown would be the string we're trying to match to a value in drivers object 
function matchName(drivers, hometown){
    return drivers.filter(
        (driver) => driver.name === hometown
    )
}





