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

    this.getFollows = function() {

      Twitch.api({method: 'channel'}, function(error, channel) {
        console.log(channel._links.follows);
      });

    }; // getFollows

  }]); // FollowController

})();
