'use strict';

IteSoft
    .directive('itSideMenu',function(){
        return {
            restrict: 'E',
            require: '^itSideMenu',
            controller : '$sideMenuCtrl',
            transclude : true,
            template :
                '<div class="it-side-menu it-side-menu-left it-side-menu-hide menu-animated" ng-class="{\'it-side-menu-hide\':!showmenu,\'it-side-menu-slide\':showmenu}">' +
                    '<nav ng-transclude ></nav>' +
                '</div>'


        }
});