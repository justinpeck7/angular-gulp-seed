angular.module('angular-seed.common')
.directive('someDirective', function() {
    return {
        restrict: 'E',
        template: 'Hello, I\'m a directive'
    };
});
