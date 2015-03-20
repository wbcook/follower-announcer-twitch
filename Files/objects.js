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

$scope.followerList = {};

$scope.alertedList = {};

// interval
isAlerted( $scope.followerlist, $scope.alertedList );

var isAlerted = function( l1, l2 ) {
  for (follower in l1) {
    isMember(follower, l2);
  };
}

var isMember = function( f, l ) {
  for (follower in l) {
    if (follower.name == f.name) {
      continue;
    }
    else{
      alert(f.name + "is a new follower!");
      $scope.alertedList[f.name] = f.name;
    }
  };
}
