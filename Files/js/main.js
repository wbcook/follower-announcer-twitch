/**
*
* Title: Follower Announcer | Author: William Cook | Date: 3/10/2015
* UID: bkioibgppidmhgjmkjblnhbadfojbgkpfdbeldbh
* Redirect URI: overwolf-extension://bkioibgppidmhgjmkjblnhbadfojbgkpfdbeldbh/Files/index.html
* client_id: dsuhxputoo00pzdxlfrqh8kenmfsy88
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

    $scope.channel = "";

    $scope.followerList = {};

    $scope.checkForNewFollowers = $interval( function(){

      if ($scope.channel) {

        Twitch.api({method: 'channels/' + $scope.channel + '/follows', params: {limit:5, offset:0} }, function(error, follows) {

          if (error) {
            alert($scope.channel + " channel not found!")
          }else{

            for (var i = 0; i < 5; i++){
              if ($scope.followerList.hasOwnProperty(follows.follows[i].user.display_name)) {
                console.log("already on the list!");
              } else {
                $scope.followerList[follows.follows[i].user.display_name] = {name: follows.follows[i].user.display_name};
                alert($scope.followerList[follows.follows[i].user.display_name].name);
              }
            }
          }

        });

      }

    }, 5000);

  }]); // FollowController

})();
