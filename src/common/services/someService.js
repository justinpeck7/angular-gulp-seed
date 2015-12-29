angular.module('my-webapp.common')
.service('someService', function() {
    var t = this;
    t.doSomething = function() {
        return true;
    };
});
