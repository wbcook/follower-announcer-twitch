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


// for each follow in the follows Object, check if it is on the session list, if not, alert it and add it.
for (var i = 0; i < 5; i++){
  if (followerList[follows.follows[i].display_name]) {
    continue;
  } else {
    $scope.followerList[follows.follows[i].user.display_name] = {name: follows.follows[i].user.display_name};
    alert($scope.followerList[follows.follows[i].user.display_name]);
  }
}
