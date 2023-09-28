// Code your solution in this file!

const hqStreet = 42;
const feetInBlock = 264;

// Function that returns the number of blocks the customer is from HQ
function distanceFromHqInBlocks(passengerLocation) {
    return Math.abs(hqStreet - passengerLocation);
}

// Function that calls distance in blocks function and returns feet

function distanceFromHqInFeet(passengerLocation) {
    return distanceFromHqInBlocks(passengerLocation) * feetInBlock;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * feetInBlock;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}