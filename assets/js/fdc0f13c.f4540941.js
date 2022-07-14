"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8048],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,u(u({ref:t},c),{},{components:r})):n.createElement(d,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3238:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=r(5488),l=r(5162),i=["components"],s={},c=void 0,p={unversionedId:"features/odata/common/query-parameter/skip",id:"features/odata/common/query-parameter/skip",title:"skip",description:"skip allows you to skip a number of results in the requested set.",source:"@site/docs-js/features/odata/common/query-parameter/skip.mdx",sourceDirName:"features/odata/common/query-parameter",slug:"/features/odata/common/query-parameter/skip",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/skip",draft:!1,tags:[],version:"current",frontMatter:{}},f={},m=[],d={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"skip")," allows you to skip a number of results in the requested set.\nIt can be useful for paging:"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().getAll().skip(10);\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder().\n  .getAll()\n  .skip(10)\n")))))}v.isMDXComponent=!0},5162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(6010),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7462),a=r(7294),o=r(6010),u=r(2389),l=r(7392),i=r(7094),s=r(2466),c="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,r,u=e.lazy,f=e.block,m=e.defaultValue,d=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:y[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,i.U)(),w=O.tabGroupChoices,T=O.setTabGroupChoices,E=(0,a.useState)(k),j=E[0],x=E[1],N=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=w[v];null!=D&&D!==j&&h.some((function(e){return e.value===D}))&&x(D)}var Z=function(e){var t=e.currentTarget,r=N.indexOf(t),n=h[r].value;n!==j&&(P(t),x(n),null!=v&&T(v,String(n)))},_=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=N.indexOf(e.currentTarget)+1;r=null!=(n=N[a])?n:N[0];break;case"ArrowLeft":var o,u=N.indexOf(e.currentTarget)-1;r=null!=(o=N[u])?o:N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},b)},h.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return N.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},u,{className:(0,o.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":j===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,u.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}}}]);