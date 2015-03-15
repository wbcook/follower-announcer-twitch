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
  app.controller("FollowController", [ '$scope', function($scope){

    this.user = current;

    this.follower = recent;

    this.getFollows = function() {

      // GET the latest 5 follows for this user's channel.
      Twitch.api({method: 'channels/themagicdwarf/follows', params: {limit:5, offset:0} }, function(error, follows) {

        //console.log(follows.follows[0].user.display_name);
        //alert("Thanks for following: " + follows.follows[0].user.display_name + "!");
        recent[0].name = follows.follows[0].user.display_name;

      });

    };

  }]); // FollowController

  var current = {
    name: 'themagicdwarf'
  }

  var recent = [
    {
      name: 'none'
    },
    {
      name: 'none'
    },
    {
      name: 'none'
    },
    {
      name: 'none'
    },
    {
      name: 'none'
    }
  ];

})();
