"use strict";var _interopRequireDefault=require("/home/user/WebstormProjects/monsters-ui-2/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Subheading=exports.H2=exports.H1=void 0;var _styledComponents=_interopRequireDefault(require("styled-components")),_theme=require("../../theme"),H=_styledComponents.default.h1.attrs(function(a){var b;return{theme:null!==(b=a.theme)&&void 0!==b?b:_theme.lightTheme// todo seems not to work
}}).withConfig({displayName:"typography__H",componentId:"sc-1c0ig2i-0"})(["color:",";font-family:Roboto,sans-serif;"],function(a){var b;return null!==(b=a.theme.headingColor)&&void 0!==b?b:_theme.lightTheme.headingColor}),Sub=_styledComponents.default.h1.attrs(function(a){var b;return{theme:null!==(b=a.theme)&&void 0!==b?b:_theme.lightTheme}}).withConfig({displayName:"typography__Sub",componentId:"sc-1c0ig2i-1"})(["color:",";font-family:Roboto,sans-serif;"],function(a){var b;return null!==(b=a.theme.subheadingColor)&&void 0!==b?b:_theme.lightTheme.subheadingColor}),H1=(0,_styledComponents.default)(H).withConfig({displayName:"typography__H1",componentId:"sc-1c0ig2i-2"})(["font-size:72px;"]);exports.H1=H1;var H2=(0,_styledComponents.default)(H).withConfig({displayName:"typography__H2",componentId:"sc-1c0ig2i-3"})(["font-size:48px;"]);exports.H2=H2;var Subheading=(0,_styledComponents.default)(Sub).withConfig({displayName:"typography__Subheading",componentId:"sc-1c0ig2i-4"})(["font-size:36px;"]);exports.Subheading=Subheading;