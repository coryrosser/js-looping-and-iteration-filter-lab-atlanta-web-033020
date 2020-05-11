// Code your solution in this file
function findMatching(driversArray, str) {
    return driversArray.filter(
        driverNames => driverNames.toLowerCase() === str.toLowerCase()
    );
}

function fuzzyMatch(driversArray, str) {
    let nameLen = str.length;
    return driversArray.filter(
        names => names.slice(0, nameLen) === str
    )
}

function matchName(driversArray, str) {
    return driversArray.filter(
        driver => driver.name.toLowerCase() === str.toLowerCase()
    );
}