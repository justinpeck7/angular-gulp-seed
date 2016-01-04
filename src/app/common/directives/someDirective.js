angular.module('my-webapp.common')
.directive('someDirective', function() {
    return {
        restrict: 'E',
        template: 'Hello, I\'m a directive'
    };
});
