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
    setTimeout(function(){
      document.getElementById("alert").innerHTML = currentFollower;
    }, 3000 * i);
  };

  app.controller("FollowController", [ '$scope', '$interval', function($scope, $interval){

    // Enter a channel to track.
    // We record a list of followers of the tracking channel.
    // Since this list doesn't persist, for now the latest 5 followers
    // will be "new" to the app when it runs.
    $scope.channel = "";

    $scope.followerList = {};

    // Check for new followers every 20 seconds.
    $scope.checkForNewFollowers = $interval( function(){

      // The interval ticks if there is a channel name.
      if ($scope.channel) {

        // Request twitch for the latest 5 followers of the channel.
        Twitch.api({
          method: 'channels/' + $scope.channel + '/follows', params: {limit:5, offset:0} },
          function(error, follows) {

            // Complain if the user entered a channel that does not exist. Twitch returns a error if so.
            // Otherwise loop the follow object and save the new user name.
            // Twitch user names are unique.
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
              } // Noodle soup
            }
          }); // Twitch API request
        }
      }, 20000); // checkForNewFollowers
    }]); // FollowController

  })();
