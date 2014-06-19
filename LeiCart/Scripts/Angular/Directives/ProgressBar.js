
'use strict';
LeiCart.directive('progressBar', function () {
    return {
        restrict: 'AE',
        templateUrl: 'Scripts/angular/Directives/Templates/Progressbar.html',
        scope: {
            progress: '@'
        }
    };

});
