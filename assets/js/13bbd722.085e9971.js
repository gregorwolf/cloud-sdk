"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[191],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=n(5488),l=n(5162),i=["components"],s={},c=void 0,p={unversionedId:"features/odata/common/operations/count",id:"features/odata/common/operations/count",title:"count",description:"The method count() allows you to get the number of elements in a collection.",source:"@site/docs-js/features/odata/common/operations/count.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/count",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/count",draft:!1,tags:[],version:"current",frontMatter:{}},d={},m=[],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The method ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," allows you to get the number of elements in a collection.\nIt is only available for ",(0,o.kt)("inlineCode",{parentName:"p"},"getAll()")," requests and is added before the request execution:"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().getAll().count();\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder().getAll().count();\n")))),(0,o.kt)("p",null,"The return type of count requests is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<number>"),".\nYou can combine the ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," with filter conditions.\nTo get the number of business partners with first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," execute the following request:"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .filter(businessPartnerApi.schema.FIRST_NAME.equals('John'))\n  .count()\n  .getAll();\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .filter(BusinessPartner.FIRST_NAME.equals('John'))\n  .count()\n  .getAll();\n")))),(0,o.kt)("p",null,"As defined in the OData spec ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," is not affected by ",(0,o.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"skip"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"top()")," and ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"skip()")," are ignored for count"),(0,o.kt)("p",{parentName:"admonition"},"If you include these methods in a count request they will be ignored by the SAP Cloud SDK.\nThese three requests will all return the same value."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"BusinessPartner.requestBuilder().getAll().top(5).count();\nBusinessPartner.requestBuilder().getAll().skip(5).count();\nBusinessPartner.requestBuilder().getAll().count();\n"))))}b.isMDXComponent=!0},5162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),u=n(2389),l=n(7392),i=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,u=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,i.U)(),N=T.tabGroupChoices,w=T.setTabGroupChoices,O=(0,a.useState)(k),x=O[0],P=O[1],j=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var A=N[b];null!=A&&A!==x&&y.some((function(e){return e.value===A}))&&P(A)}var C=function(e){var t=e.currentTarget,n=j.indexOf(t),r=y[n].value;r!==x&&(E(t),P(r),null!=b&&w(b,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,u=j.indexOf(e.currentTarget)-1;n=null!=(o=j[u])?o:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:C,onClick:C},u,{className:(0,o.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,u.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);