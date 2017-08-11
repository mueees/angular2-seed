import angular from 'angular';

angular.module('angular1', [])
    .directive('myApp', function ($compile) {
        return {
            restrict: 'E',
            template: '<home [configuration]="templateConfiguration"></home>',

            link: function ($scope, el) {
                $scope.templateConfiguration = 'template';
                $scope.dynamicConfiguration = 'dynamic';

                let homeEl = $compile('<home [configuration]="dynamicConfiguration"></home>')($scope);

                el.append(homeEl);
            }
        }
    });