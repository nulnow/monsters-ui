"use strict";var _exportNames={darkTheme:!0,lightTheme:!0,commonTheme:!0};Object.defineProperty(exports,"__esModule",{value:!0});Object.defineProperty(exports,"darkTheme",{enumerable:!0,get:function get(){return _dark.darkTheme}}),Object.defineProperty(exports,"lightTheme",{enumerable:!0,get:function get(){return _light.lightTheme}}),Object.defineProperty(exports,"commonTheme",{enumerable:!0,get:function get(){return _common.commonTheme}});var _dark=require("./dark.theme"),_light=require("./light.theme"),_common=require("./common.theme"),_CustomThemeProvider=require("./CustomThemeProvider");Object.keys(_CustomThemeProvider).forEach(function(a){"default"===a||"__esModule"===a||Object.prototype.hasOwnProperty.call(_exportNames,a)||a in exports&&exports[a]===_CustomThemeProvider[a]||Object.defineProperty(exports,a,{enumerable:!0,get:function get(){return _CustomThemeProvider[a]}})});