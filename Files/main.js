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

    $scope.channel = "themagicdwarf";

    $scope.followerList = {};

    $scope.checkForNewFollowers = $interval( function(){
      Twitch.api({method: 'channels/' + $scope.channel + '/follows', params: {limit:5, offset:0} }, function(error, follows) {

        for (var i = 0; i < 5; i++){
          $scope.followerList[follows.follows[i].user.display_name] = {name: follows.follows[i].user.display_name, alert: false};
        }

      });

    }, 5000);

  }]); // FollowController

})();
