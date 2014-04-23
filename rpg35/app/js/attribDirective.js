
function attributeDirective($log) {
    return {
        restrict: 'ECMA',
        scope: true,
        templateUrl: './js/attribTemplate.html',
        link: function (scope, element, attrs) {
            $log.info('Here');
        }
    }
}