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

    this.user = current;

    this.follower = recent;

    this.getFollows = function(user) {

      // Get the latest 5 follows for this user's channel.
      Twitch.api({method: 'channels/' + user + '/follows', params: {limit:5, offset:0} }, function(error, follows) {

        //console.log(follows.follows[0].user.display_name);
        //alert("Thanks for following: " + follows.follows[0].user.display_name + "!");
        recent[0].name = follows.follows[0].user.display_name;
        recent[1].name = follows.follows[1].user.display_name;
        recent[2].name = follows.follows[2].user.display_name;
        recent[3].name = follows.follows[3].user.display_name;
        recent[4].name = follows.follows[4].user.display_name;

      });

    };

  }]); // FollowController

  var current = {
    name: 'Enter your twitch name'
  }

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
