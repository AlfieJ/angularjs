define([], function () {
    function directive($window) {
        return {
            restrict: 'A',
            link: 
                function (scope, element, attrs) {
                    setWidth(scope, $window.innerWidth);
                    $window.addEventListener('resize', function () {
                        setWidth(scope, $window.innerWidth);
                        scope.$digest();
                    });
                }
        };
    }
    function setWidth(scope, windowWidth) {
        var width = {};
        width.width = windowWidth;
        width.xs = windowWidth < 768;
        width.sm = windowWidth >= 768 && windowWidth < 992;
        width.md = windowWidth >= 992 && windowWidth < 1200;
        width.lg = windowWidth >= 1200;
        scope.windowWidth = width;
    }

    directive.$inject = ['$window'];
    return directive;
});
