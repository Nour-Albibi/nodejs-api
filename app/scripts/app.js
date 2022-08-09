// Styles
require('../assets/css/style.css');
require('angular-material/angular-material.min.css');

// Modules
require('angular');
require('angular-resource');
require('angular-ui-router');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');
require('angular-sanitize');
require('ng-csv');
require('ng-file-upload');

require('modules/Main');
require('modules/Cafe');
require('modules/Ad');

// Init
angular.module('ultrafiControlPanel', [
        'ngResource',
        'ui.router',
        'ngMaterial',
        'ngSanitize',
        'ngCsv',
        'ngFileUpload',
        'ultrafiControlPanel.main',
        'ultrafiControlPanel.cafe',
        'ultrafiControlPanel.ad'
    ])
    .constant('API_URL', '/api');