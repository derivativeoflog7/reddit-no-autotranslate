// ==UserScript==
// @name        Reddit no auto-translate
// @namespace   Violentmonkey Scripts
// @match       https://*.reddit.com/*
// @grant       none
// @version     1.0
// @author      derivativeoflog7
// @description Disable Reddit's new idiotic auto-translate feature
// @run-at      document-start
// ==/UserScript==


(function() {
    'use strict';
    var currUrl = window.location.href;
    var match = currUrl.match('[?&]tl=.+?(?=&|$)') //this took me an hour; match the tl parameter and argument INCLUDING the preceding & or ? and excluding the subsequent &
    if (match) { //check for translation parameter in url
      var match_asFirstParam = currUrl.match('[?]tl=.+'); //check if tl is the first parameter
      var match_hasMoreParams = currUrl.match('[?&]tl=.+[&]'); //check if there are more parameters after tl
      var newUrl = currUrl.slice(0, match.index); //get URL until (the tl parameter PLUS THE PREECEDING ? or &)
      if (match_hasMoreParams) { //if tl is the only parameter, we don't need to do anything else
        var restOfUrl = currUrl.slice(match.index + match[0].length + 1) //get the rest of the parameters TRUNCATING the first &
        if (match_asFirstParam)
          newUrl += '?' + restOfUrl;
        else
          newUrl += '&' + restOfUrl
      }
      window.location.href = newUrl; //redirect to new URL
    }
})();
