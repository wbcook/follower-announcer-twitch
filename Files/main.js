/**
*
* Title: You Got A Follow | Author: William Cook | Date: 3/10/2015
* UID: bkioibgppidmhgjmkjblnhbadfojbgkpfdbeldbh
* Redirect URI: overwolf-extension://bkioibgppidmhgjmkjblnhbadfojbgkpfdbeldbh/Files/index.html
* client_id: dsuhxputoo00pzdxlfrqh8kenmfsy88
* secret: astewlgs04jzd2gmbzunvl8423i5agu
*
*/

(function() {

  var app = angular.module('main', [ ]);

  /**
  *
  * FollowController
  *
  */
  app.controller("FollowController", [ '$scope', '$interval', function($scope, $interval){

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

    $scope.user = "Enter your name";

    $scope.follower = [];

    $scope.getFollowsInterval = $interval( function(){
      Twitch.api({method: 'channels/'+ $scope.user +'/follows', params: {limit:5, offset:0} }, function(error, follows) {

        $scope.follower.push(follows.follows[0].user.display_name);
        $scope.follower.push(follows.follows[1].user.display_name);
        $scope.follower.push(follows.follows[2].user.display_name);
        $scope.follower.push(follows.follows[3].user.display_name);
        $scope.follower.push(follows.follows[4].user.display_name);

      });
    }, 5000);

  }]); // FollowController

  var recent = [
    {
      name: '?'
    },
    {
      name: '?'
    },
    {
      name: '?'
    },
    {
      name: '?'
    },
    {
      name: '?'
    }
  ];

})();
