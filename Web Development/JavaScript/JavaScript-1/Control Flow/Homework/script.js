// #1
let isSunny = false;
if (isSunny == true){
    console.log("Wear sunglasses.");
}
else{
    console.log("No need for sunglasses.");
}

// #2
let month = "January";
switch (month){
    case "January":
    case "February":
    case "November":
    case "December":
        console.log("Season: Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Season: Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Season: Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Season: Fall");
        break;
    default:
        console.log("Enjoy without thinking of the weather.")
}

// #3
let grade = 91;
if (grade > 70){
    console.log("Pass");
}
else{
    console.log("Fail")
}

// #4
let weather = "Snowy";