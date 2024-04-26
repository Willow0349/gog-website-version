// ==UserScript==
// @name         Force new website version for gog.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Always use the new version of the gog.com website
// @author       Willow0349 (Github: https://github.com/Willow0349)
// @match        https://*.gog.com/*
// @exclude      https://*.gog.com/*checkout*
// @exclude      https://*.gog.com/forum/*
// @icon         https://store-static-modular.gog-statics.com/en/assets/favicons/apple-touch-icon-180x180.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Set the cookie
    document.cookie = "front_ab=new; path=/";
  
    }
})();
