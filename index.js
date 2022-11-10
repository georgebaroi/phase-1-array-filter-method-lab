// Code your solution here

function findMatching(driver, string){
    return driver.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase()
    )
};

function fuzzyMatch(driver, string){
    return driver.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0 
    )
}

function matchName(driver, string){
    return driver.filter(
        (record) => record.name === string 
    )
}