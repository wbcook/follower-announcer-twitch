var followerList = {
  gregg: false
  }
};

followersList["gregg"] = false; // add gregg with a value of false

console.log( followersList["gregg"] );

function addFollower(name){
  followerList[name] = false;
};

/**
$scope.followers[gregg] = follows.follows[0].user.display_name;

$scope followers = {
  gregg: {name: gregg, alerted: false},
  kitty: {name: kitty, alerted: true}
};

var alerted = [
  followers.kitty
];
var notAlerted = [
  followers.gregg
];
*/
