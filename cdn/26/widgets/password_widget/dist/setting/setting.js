System.register(["jimu-core","jimu-ui/advanced/setting-components"],(function(t,e){var n={},i={};return{setters:[function(t){n.React=t.React,n.css=t.css,n.jsx=t.jsx},function(t){i.LinkSelector=t.LinkSelector}],execute:function(){t((()=>{var t={244:t=>{"use strict";t.exports=n},298:t=>{"use strict";t.exports=i}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,s),o.exports}s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.p="";var o={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(o),s.d(o,{__set_webpack_public_path__:()=>i,default:()=>n});var t=s(244),e=s(298);class n extends t.React.PureComponent{constructor(){super(...arguments),this.onSettingConfirm=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("linkParam",t)})}}render(){const{config:n}=this.props;return(0,t.jsx)("div",{className:"password-widget-setting",css:t.css`
    .password-widget-setting {
      width: 100%;
      padding: 20px;
    }
    .setting-section {
      margin-bottom: 20px;
    }
    .setting-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 14px;
    }
    .setting-input {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .setting-hint {
      margin-top: 8px;
      font-size: 12px;
      color: #666;
      font-style: italic;
    }
  `},(0,t.jsx)("div",{className:"setting-section"},(0,t.jsx)("label",{className:"setting-label"},"Content Link"),(0,t.jsx)(e.LinkSelector,{linkParam:null==n?void 0:n.linkParam,onSettingConfirm:this.onSettingConfirm,buttonLabel:"Set link"}),(0,t.jsx)("div",{className:"setting-hint"},"Configure the link destination. The button will navigate to this link when the correct password is entered.")))}}function i(t){s.p=t}})(),o})())}}}));