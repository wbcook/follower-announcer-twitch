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

  var alertFollow = function(i, currentFollower) {
    console.log(currentFollower);
    setTimeout(function(){document.getElementById("alert").innerHTML = "Thanks for following, " + currentFollower;}, 2000 * i);
  }

  app.controller("FollowController", [ '$scope', '$interval', function($scope, $interval){

    // The user enters a Twitch channel they want to track.
    // We keep a list of Twitch users who followed during this session.
    // Since this list doesn't persist, for now the latest 5 followers
    // will always get alerted when the app is run.
    $scope.channel = "";

    $scope.followerList = {};

    // Check for new followers every five seconds. Will probably change this to 30 seconds.
    $scope.checkForNewFollowers = $interval( function(){

      // The interval function does nothing until the user enters a channel name.
      if ($scope.channel) {

        // Request twitch for a list of the five most recent followers starting at index 0 of the list.
        Twitch.api({method: 'channels/' + $scope.channel + '/follows', params: {limit:5, offset:0} }, function(error, follows) {

          // Complain if the user entered a channel that does not exist. Twitch returns a error if so.
          // Otherwise go through the follow object and add the new user name to the local followerList.
          // User names not on the list get added to the list. Twitch user names are unique so they can be property keys.
          // New names get alerted when they are added.

          if (error) {
            alert($scope.channel + ":  channel not found!");
          }else{
            for (var i = 0; i < 5; i++){
              var currentFollower = follows.follows[i].user.display_name;
              if ($scope.followerList.hasOwnProperty(currentFollower)) {
                console.log("already on the list!");
              } else {
                $scope.followerList[currentFollower] = {name: currentFollower};
                //alert($scope.followerList[currentFollower].name);
                alertFollow(i, currentFollower);
              }
            }
          }
        }); // Twitch API request
      }
    }, 20000); // checkForNewFollowers
  }]); // FollowController

})();
