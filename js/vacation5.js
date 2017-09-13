//for loops inside of for loops
var myPlaces = ["Italy", "Scotland", "Nigeria"];

var friendPlaces = ["Italy", "Nigeria", "France"];

for (var i = 0; i < myPlaces.length; i++){
  console.log(myPlaces[i]);
  	for (var j = 0; j < friendPlaces.length; j++) {
  	    if (myPlaces[i] === friendPlaces[j]) {
            console.log(friendPlaces[j]);
        }
    	    }
}