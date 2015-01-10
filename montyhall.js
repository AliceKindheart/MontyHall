var gameSetUp = function(){
    var random = Math.random();
    var one;
    var two;
    var three;
	
	if(random<=0.33){
		one = "prize";
		two = "goat";
		three =  "goat";
	}	else if (random<=0.66){
		one = "goat";
		two = "prize";
		three =  "goat";
	} else {
		one = "goat";
		two = "goat";
		three =  "prize";
	}
	return [ one, two, three ];
};
	
var makeChoice =  function() {
    var choice = Math.random();
    var retval=-1;
	if (choice<=0.33){
	    retval=0;
	} else if (choice<=0.66) {
		retval=1;
	} else {
		retval=2;
	}
	return retval;
};

var makeAChange = function(){
    var game=gameSetUp();
    var choice=makeChoice();
    if (game[choice]=="goat"){
        return true;
    }
    return false;
};

var stickWithChoice = function(){	
    var game=gameSetUp();
    var choice=makeChoice();
    if (game[choice]=="prize"){
        return true;
    }
    return false;
};

var changeWins =0;
var i=0;	
while (i<1000){
    if( makeAChange() ){
        changeWins++;  
    }
    i++;
}

var stayWins=0;
var j=0;	
while (j<1000){
    if( stickWithChoice() ){
        stayWins++;  
    }
    j++;
}
console.log("After 1000 tests, changing the guess resulted in " + changeWins + " wins.");

console.log("After 1000 tests, keeping the same guess resulted in " + stayWins + " wins.");