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
  * TwitchController
  *
  */
  app.controller("TwitchController", [ '$scope', function($scope){

    this.isConnected = Twitch.getToken();

    this.twitchConnect = function() {

      Twitch.login({
        redirect_uri: 'overwolf-extension://bkioibgppidmhgjmkjblnhbadfojbgkpfdbeldbh/Files/index.html',
        popup: false,
        scope: ['user_read', 'channel_read']
      });

    }; // twitchConnect

  }]); // TwitchController

  /**
  *
  * FollowController
  *
  */
  app.controller("FollowController", [ '$scope', function($scope){

    this.user = 'themagicdwarf';

    this.getFollows = function() {

      // GET the latest 25 follows for this users channel.
      Twitch.api({method: 'channels/' + this.user + '/follows', params: {limit:25, offset:0} }, function(error, follows) {

        //console.log(follows.follows[0].user.display_name);
        //alert("Thanks for following: " + follows.follows[0].user.display_name + "!");

      }); // GET follows

    }; // getFollows

  }]); // FollowController

})();
