window.upgrade = {
    factories: []
};


(function () {
    angular.module('angular1', []);
})();

(function () {
    function globalCache($log) {
        return {
            getRecords() {
                $log.log('getRecords');

                return [1, 2, 3];
            }
        };
    }

    angular.module('angular1').factory('globalCache', globalCache);

    window.upgrade.factories.push({
        name: 'globalCache',
        factory: globalCache
    });
})();

(function () {
    angular.module('angular1').directive('myApp', function ($compile, actionRegistry) {
        return {
            restrict: 'E',
            template: `
                <home [configuration]="templateConfiguration"></home>
                
                Text: {{inputText}}
                <input-field-component [text]="inputText" (text-change)="onTextChange($event)"></input-field-component>
                `,

            link: function ($scope, el) {
                $scope.inputText = 'Initial input text';

                $scope.onTextChange = function (value) {
                    $scope.inputText = value;
                };


                $scope.templateConfiguration = 'template';
                $scope.dynamicConfiguration = 'dynamic';

                let homeEl = $compile('<home [configuration]="dynamicConfiguration"></home>')($scope);
                el.append(homeEl);


                var actions = actionRegistry.get();
                console.log(actions);


                $scope.$on('propertyChanged', function (event, data) {
                    console.log(data);
                });
            }
        }
    });
})();