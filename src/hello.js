//Load the cat-names module and puts it in a variable
var catNames = require('cat-names');
//i is zero. While i is less than 10 do everything between the {}
for(var i = 0; i < 10; i = i + 1){
	console.log("Hello " + catNames.random());
}
//and then add 1 to i and go back to the top {