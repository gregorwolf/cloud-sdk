"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1700],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19166:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",sidebar_label:"Announcing Version 2.x",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","version 2","announcement","upgrade","migration"]},s=void 0,c={unversionedId:"js/announcing-version-2",id:"js/announcing-version-2",title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",description:"This announcement only applies to the SAP Cloud SDK for JavaScript.",source:"@site/docs/js/announcing-version-2.mdx",sourceDirName:"js",slug:"/js/announcing-version-2",permalink:"/cloud-sdk/docs/js/announcing-version-2",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/announcing-version-2.mdx",tags:[],version:"current",lastUpdatedBy:"Florian Wilhelm",lastUpdatedAt:1656320948,formattedLastUpdatedAt:"6/27/2022",frontMatter:{title:"SAP Cloud SDK for JavaScript 2.x - Announce New Major Release",sidebar_label:"Announcing Version 2.x",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","version 2","announcement","upgrade","migration"]},sidebar:"someSidebar",previous:{title:"Release Policy",permalink:"/cloud-sdk/docs/js/release-policy"},next:{title:"Announcing Version 2 Beta",permalink:"/cloud-sdk/docs/js/announcing-version-2-beta"}},d={},p=[{value:"Timeline for the Version 2.x",id:"timeline-for-the-version-2x",level:2},{value:"What Will Change in Version 2?",id:"what-will-change-in-version-2",level:2},{value:"Replace <code>Moment.js</code> With a Flexible Middleware Approach for Deserialization",id:"replace-momentjs-with-a-flexible-middleware-approach-for-deserialization",level:3},{value:"Split Packages and Export Only the Public Interface",id:"split-packages-and-export-only-the-public-interface",level:3},{value:"Increase Compilation Target to ECMAScript 2019",id:"increase-compilation-target-to-ecmascript-2019",level:3},{value:"Remove Deprecated Functionality",id:"remove-deprecated-functionality",level:3},{value:"What Will the Upgrade Look Like?",id:"what-will-the-upgrade-look-like",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"relevance")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This announcement only applies to the SAP Cloud SDK for JavaScript.\nIt is not relevant for the SAP Cloud SDK for Java."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Release Policy")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/release-policy"},"general release policy"),"."))),(0,o.kt)("h2",{id:"timeline-for-the-version-2x"},"Timeline for the Version 2.x"),(0,o.kt)("p",null,"The planned timeline looks as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"September/October: Start of development"),(0,o.kt)("li",{parentName:"ol"},"November: Publish beta versions and start of feedback cycle"),(0,o.kt)("li",{parentName:"ol"},"December: Publish release candidate"),(0,o.kt)("li",{parentName:"ol"},"January 2022: Release of SAP Cloud SDK 2.0.0")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We will continuously publish beta versions and would appreciate feedback from early adopters."),(0,o.kt)("li",{parentName:"ul"},"Constructive suggestions will be included in the ongoing beta releases."),(0,o.kt)("li",{parentName:"ul"},"Once the ",(0,o.kt)("a",{parentName:"li",href:"#what-will-change-in-version-2"},"scope of version 2.x")," is implemented, a release candidate will be published for end-to-end evaluation."),(0,o.kt)("li",{parentName:"ul"},"The final release will happen after the evaluation of the release candidate is completed.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"During development time, we may postpone changes that have a workaround in version 1.x or are not time-critical.\nImportant and time-critical issues will be resolved within our usual SLA."))),(0,o.kt)("h2",{id:"what-will-change-in-version-2"},"What Will Change in Version 2?"),(0,o.kt)("p",null,"The planned list of changes is:"),(0,o.kt)("h3",{id:"replace-momentjs-with-a-flexible-middleware-approach-for-deserialization"},"Replace ",(0,o.kt)("inlineCode",{parentName:"h3"},"Moment.js")," With a Flexible Middleware Approach for Deserialization"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Moment.js")," used to be somewhat of a standard for JavaScript date handling, but is now in ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/moment#project-status"},"maintenance mode"),".\nIt is also a rather large dependency and not optimized for tree shaking.\nWe will remove the direct dependency to ",(0,o.kt)("inlineCode",{parentName:"p"},"Moment.js")," and allow you to choose a middleware that suits your project.\nWe will provide a few popular options including a ",(0,o.kt)("inlineCode",{parentName:"p"},"Moment.js")," - based middleware for the easiest possible migration.\nThis gives you flexibility while reducing package size dramatically."),(0,o.kt)("h3",{id:"split-packages-and-export-only-the-public-interface"},"Split Packages and Export Only the Public Interface"),(0,o.kt)("p",null,"The SAP Cloud SDK for JavaScript exports many functions that are used across our packages, but are not supposed to be part of the public interface.\nWe will clean up these exports and are expecting a better experience when using IntelliSense or similar auto-completion tools.\nAs long as you don't use undocumented methods, this change should not need any changes on your side."),(0,o.kt)("h3",{id:"increase-compilation-target-to-ecmascript-2019"},"Increase Compilation Target to ECMAScript 2019"),(0,o.kt)("p",null,"We are currently compiling to meet the ECMAScript 5 standard.\nThis is not needed anymore as ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," fully supports ECMAScript 2019 in both the Maintenance LTS (v12) and Active LTS (v14).\nWe expect a reduction in package size and a slight performance improvement.\nNo changes to your projects will be necessary unless it depends on ECMAScript 5 compatibility."),(0,o.kt)("h3",{id:"remove-deprecated-functionality"},"Remove Deprecated Functionality"),(0,o.kt)("p",null,"We marked outdated functionality as deprecated.\nThese functions will be removed during the major version increase.\nWe expect a minor reduction in package size.\nIf you still use a deprecated function, you should start replacing any occurrence with the proposed alternative as mentioned in the release notes."),(0,o.kt)("h2",{id:"what-will-the-upgrade-look-like"},"What Will the Upgrade Look Like?"),(0,o.kt)("p",null,"Applying an upgrade is an additional effort.\nWe want to minimize this effort on the customer's side.\nOur team will provide a detailed upgrade guide for each major release.\nThe guide will include step-by-step changes to resolve any incompatibilities.\nUpgrading should be possible in less than a day regardless of the project size."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Looking For Feedback")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To achieve this, we will need your feedback during the beta and release candidate phase.\nPlease let us know if you want to collaborate with us on finding problems and solutions for the upgrade guide.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/discussions/1518"},"Reach out to us")," with your feedback, suggestions, or improvement ideas."))))}m.isMDXComponent=!0}}]);