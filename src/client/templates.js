angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","<div class=\"panel-content--others\">\n    <h1 class=\"heading -large\">{{ home.title }}</h1>\n\n    <h3 class=\"heading -medium\">Here is a fancy number served up courtesy of Angular: <span class=\"number-example\">{{ home.number }}</span>\n    </h3>\n\n    <pre>{{test}}</pre>\n\n    <span>{{\'test.test\' | i18next}}</span>\n\n    <ul>\n        <li class=\"has-dropdown\">\n            <a>{{ lang | uppercase }}</a>\n            <ul class=\"dropdown\">\n                <li ng-class=\"{ \'is-active\': lang == \'en\'}\"><a href=\"javascript:void(0)\"\n                                                               ng-click=\"changeLng(\'en\')\">EN</a>\n                </li>\n                <li ng-class=\"{ \'is-active\': lang == \'pl\'}\"><a href=\"javascript:void(0)\"\n                                                               ng-click=\"changeLng(\'pl\')\">PL</a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>");
$templateCache.put("user.html","<div ui-view class=\"panel-content--others\"></div>");
$templateCache.put("user/auth.html","<div class=\"login-form\">\n    <header class=\"login-form--header\">\n        <i class=\"fa fa-comments-o\"></i>\n        <h1>BackOffice Support System</h1>\n    </header>\n    <form ng-submit=\"signin()\">\n        <div class=\"login-form--form\">\n            <div ng-if=\"error\">{{ error }}</div>\n            <label>\n                Login\n                <input type=\"text\" ng-model=\"user.username\">\n            </label>\n            <label>\n                Password\n                <input type=\"password\" ng-model=\"user.password\">\n            </label>\n        </div>\n        <div class=\"login-from--controls\">\n            <div class=\"login-from--controls--button\">\n                <button type=\"submit\" class=\"button small float-right\">Login</button>\n            </div>\n        </div>\n    </form>\n</div>\n");
$templateCache.put("layouts/classic.html","<div class=\"classic\">\n    <div class=\"classic--wrap\">\n        <ui-view class=\"panel-content\"></ui-view>\n    </div>\n</div>");
$templateCache.put("layouts/clean.html","<ui-view class=\"panel-content\"></ui-view>");
$templateCache.put("layouts/main.html","<div class=\"l-wrap\">\n    <header class=\"l-header\">\n        <div class=\"l-header--general\">\n            <i class=\"fa fa-comments-o\"></i>\n            <h1>{{ pageTitle }}</span></h1>\n        </div>\n        <div class=\"l-header--user\">\n            <div class=\"l-header--user--money\">\n                <!--<ul class=\"money\">-->\n                    <!--<li class=\"money&#45;&#45;item first\"><a ui-sref=\"user.profile\">100€</a></li>-->\n                    <!--<li class=\"money&#45;&#45;item second\"><a ui-sref=\"user.profile\">240€</a></li>-->\n                    <!--<li class=\"money&#45;&#45;item third\"><a ui-sref=\"user.profile\">172€</a></li>-->\n                <!--</ul>-->\n            </div>\n            <div class=\"l-header--user--info\" dropdown-toggle=\"#user-dropdown\">\n                <div class=\"l-header--user--info--name\">\n                    <span>John Smith</span>\n                    <i class=\"fa fa-chevron-down\"></i>\n                    <ul id=\"user-dropdown\" class=\"f-dropdown right\">\n                        <li class=\"noborder\">\n                            <a ui-sref=\"user.profile\"><i class=\"fa fa-user\"></i>Profile</a>\n                        </li>\n                        <li class=\"hr\"></li>\n                        <li class=\"\">\n                            <a><i class=\"fa status online\"></i>Set online</a>\n                        </li>\n                        <li class=\"noborder\">\n                            <a><i class=\"fa status away\"></i>Set away</a>\n                        </li>\n                        <li class=\"hr\"></li>\n                        <li class=\"\">\n                            <a ng-click=\"user.logout()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"l-header--user--info--avatar\" style=\"background: url(\'images/desktop.jpg\') no-repeat;\">\n                    <div class=\"is-active\"></div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <div class=\"l-wrap--main\">\n        <nav class=\"l-left-sidebar\">\n            <ul class=\"left-sidebar\">\n                <li class=\"left-sidebar--item\"><a ui-sref=\"home\" class=\"left-sidebar--item--link\"><i\n                        class=\"fa fa-home\"></i></a></li>\n                <li class=\"left-sidebar--item\"><a ui-sref=\"user.auth\" class=\"left-sidebar--item--link\"><i\n                        class=\"fa fa-sign-in\"></i></a>\n                </li>\n            </ul>\n        </nav>\n        <main class=\"l-main\" ui-view></main>\n    </div>\n</div>");}]);