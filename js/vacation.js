//Looping by hand

var vacationSpots = ["Italy", "Scotland", "Nigeria"];

// console.log(vacationSpots[0]);
// console.log(vacationSpots[1]);
// console.log(vacationSpots[2]);

//Looping using for
// for (var i = 0; i < vacationSpots.length; i++){
//     console.log("I would love to visit " + vacationSpots[i]);
// }; 

//looping backwards with for
//you must subtract 1 from length since it's an array
for (var i = vacationSpots.length - 1; i >= 0; i--){
    console.log("I would love to visit " + vacationSpots[i]);
}