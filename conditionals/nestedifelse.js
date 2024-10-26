let isUserSubscribed = false;
let userHasLionsGatePlay = false;
let userHasSony = false;
if (isUserSubscribed) {
    if (userHasLionsGatePlay) {
        console.log("Watch John Wick");
    }else if(userHasSony) {
        console.log("Show the Guardian");
    }else {
        console.log("Show Panchayat");
    }
}else if (isUserSubscribed == false) {
    console.log("Show Pricing Page");
} else{
    console.log("Show Error Page");
}
console.log("End...")
