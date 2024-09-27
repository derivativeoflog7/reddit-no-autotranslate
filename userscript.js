// ==UserScript==
// @name        Reddit no auto-translate
// @namespace   Violentmonkey Scripts
// @match       https://*.reddit.com/*
// @grant       none
// @version     1.0.3
// @author      derivativeoflog7
// @description Disable Reddit's new auto-translate feature
// @run-at      document-start
// @license     GPL3
// @supportURL  https://github.com/derivativeoflog7/reddit-no-autotranslate
// ==/UserScript==


(function() {
    'use strict';
    var reg = /(?<=[?&])tl=.+?($|&)/;
    var currUrl = window.location.href;
    if (currUrl.match(reg)) {
        var newUrl = currUrl.replace(reg, "");
        window.location.href = newUrl;
    }
})();
