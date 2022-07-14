"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2949],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3908:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(5488),i=n(5162),u=["components"],s={id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},c=void 0,d={unversionedId:"release-policy",id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",description:"This release policy only applies to the SAP Cloud SDK for JavaScript.",source:"@site/docs-js/release-policy.mdx",sourceDirName:".",slug:"/release-policy",permalink:"/cloud-sdk/docs/js/release-policy",draft:!1,tags:[],version:"current",frontMatter:{id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"docsJsSidebar",previous:{title:"Currency Conversion",permalink:"/cloud-sdk/docs/js/extensions/currency-conversion"},next:{title:"Announcing Version 2.x",permalink:"/cloud-sdk/docs/js/announcing-version-2"}},p={},m=[{value:"Planned Major Release Schedule",id:"planned-major-release-schedule",level:2},{value:"Minor and Major Release Policy",id:"minor-and-major-release-policy",level:2},{value:"Timelines",id:"timelines",level:3},{value:"Upgrading to a New Minor Version",id:"upgrading-to-a-new-minor-version",level:3},{value:"Upgrading to a New Major Version",id:"upgrading-to-a-new-major-version",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Fixes and Maintenance",id:"fixes-and-maintenance",level:3},{value:"Support and feedback",id:"support-and-feedback",level:3}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"relevance",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This release policy only applies to the SAP Cloud SDK for JavaScript.\nIt's not relevant for the SAP Cloud SDK for Java!")),(0,o.kt)("h2",{id:"planned-major-release-schedule"},"Planned Major Release Schedule"),(0,o.kt)("p",null,"The SAP Cloud SDK for JavaScript follows ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Link to Announcement"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"March 2019"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Released GA"),(0,o.kt)("td",{parentName:"tr",align:"left"},"February 2022"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/announcing-version-2"},"Version 2.x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Planned"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Q1/Q2 2023"),(0,o.kt)("td",{parentName:"tr",align:"left"},"TBD")))),(0,o.kt)("h2",{id:"minor-and-major-release-policy"},"Minor and Major Release Policy"),(0,o.kt)("h3",{id:"timelines"},"Timelines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We release a new ",(0,o.kt)("strong",{parentName:"li"},"minor version")," every 2 weeks, assuming new functionality or fixes are available."),(0,o.kt)("li",{parentName:"ul"},"We release a new ",(0,o.kt)("strong",{parentName:"li"},"major version")," every 6 to 12 months."),(0,o.kt)("li",{parentName:"ul"},"A few months before the major release, we announce the expected changes and planned release date.")),(0,o.kt)("h3",{id:"upgrading-to-a-new-minor-version"},"Upgrading to a New Minor Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upgrade to a new ",(0,o.kt)("strong",{parentName:"li"},"minor release version")," should not involve any effort because we do not introduce breaking changes.")),(0,o.kt)("admonition",{title:"TypeScript version bumps",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We regularly upgrade TypeScript to the latest stable version.\nIn rare cases this can lead to compilation errors for projects using TypeScript.\nThe solution is usually upgrading TypeScript to the latest stable version.")),(0,o.kt)("h3",{id:"upgrading-to-a-new-major-version"},"Upgrading to a New Major Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,o.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size.")),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The documentation is always up to date with the ",(0,o.kt)("strong",{parentName:"li"},"latest major release"),"."),(0,o.kt)("li",{parentName:"ul"},"We will use tabs to demonstrate a difference between the versions where required.")),(0,o.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nMajor version documentation\n\n"))),(0,o.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nDeprecated version documentation\n\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We will maintain documentation for the two most recent versions."),(0,o.kt)("li",{parentName:"ul"},"With every new major version release the oldest documented version is removed from the documentation portal.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We will always provide a branch with the latest snapshot of the documentation before the major version release.\nYou can use that branch to host documentation for the earlier version locally.")),(0,o.kt)("h3",{id:"fixes-and-maintenance"},"Fixes and Maintenance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We provide new features and fixes only for the ",(0,o.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for JavaScript.")),(0,o.kt)("h3",{id:"support-and-feedback"},"Support and feedback"),(0,o.kt)("p",null,"We are happy to hear from you and usually respond within one day.\nCheck our ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/get-support"},"support channels")," and chose the one that works best for you."))}v.isMDXComponent=!0},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,j=N.setTabGroupChoices,S=(0,r.useState)(g),T=S[0],x=S[1],P=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=w[v];null!=D&&D!==T&&y.some((function(e){return e.value===D}))&&x(D)}var M=function(e){var t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==T&&(O(t),x(a),null!=v&&j(v,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;n=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var o,l=P.indexOf(e.currentTarget)-1;n=null!=(o=P[l])?o:P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:M,onClick:M},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);