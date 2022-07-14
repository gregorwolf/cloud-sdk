"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5653],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var g=n.createContext({}),s=function(e){var t=n.useContext(g),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(o),d=r,m=u["".concat(g,".").concat(d)]||u[d]||c[d]||a;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1652:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return g},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),l=["components"],i={title:"Logging",sidebar_label:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},g=void 0,s={unversionedId:"features/logging",id:"features/logging",title:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",source:"@site/docs-js/features/logging.mdx",sourceDirName:"features",slug:"/features/logging",permalink:"/cloud-sdk/docs/js/features/logging",draft:!1,tags:[],version:"current",frontMatter:{title:"Logging",sidebar_label:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},sidebar:"docsJsSidebar",previous:{title:"Error Handling",permalink:"/cloud-sdk/docs/js/features/error-handling"},next:{title:"Shared ESLint configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration"}},p={},c=[{value:"Creating a Logger",id:"creating-a-logger",level:2},{value:"Use a Logger",id:"use-a-logger",level:2},{value:"Logging Exceptions",id:"logging-exceptions",level:2},{value:"Exception Logger",id:"exception-logger",level:2},{value:"What Happens Under the Hood",id:"what-happens-under-the-hood",level:2}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-a-logger"},"Creating a Logger"),(0,a.kt)("p",null,"The SAP Cloud SDK provides an easy way to create a logger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createLogger } from '@sap-cloud-sdk/util';\n\nconst myLogger = createLogger('my-message-context');\n")),(0,a.kt)("p",null,"The string argument in the ",(0,a.kt)("inlineCode",{parentName:"p"},"createLogger")," is the identifier for the logger and you should use a separate message context for each logical part of your application.\nSince it is used to group messages or set the log level per context."),(0,a.kt)("h2",{id:"use-a-logger"},"Use a Logger"),(0,a.kt)("p",null,"The logger provides the usual log methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.debug('Here is some debug.');\nmyLogger.info('Here is some info.');\nmyLogger.warn('Here is a warning.');\nmyLogger.error('Here is a error.');\n")),(0,a.kt)("p",null,"The default value for the log level is ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),".\nIn the example above the first line would not appear in the logs.\nYou can set the log level either on creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const myLogger = createLogger({\n  messageContext: 'my-message-context',\n  level: 'info'\n});\n")),(0,a.kt)("p",null,"or later in you application via the ",(0,a.kt)("inlineCode",{parentName:"p"},"setLogLevel()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setLogLevel('error', 'my-message-context');\n")),(0,a.kt)("h2",{id:"logging-exceptions"},"Logging Exceptions"),(0,a.kt)("p",null,"In the example above a string was passed to the logging method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.info('Here is some info.');\n")),(0,a.kt)("p",null,"and in the logs, you would find a related entry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TimeStamp [INFO] my-message-context The message you provided.\n")),(0,a.kt)("p",null,"However, you can also pass an error object also known as an exception to the log statement.\nIn this case, the log statement will contain only the message of the exception for all log functions except for ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"myLogger.error(err)")," is called with an error object it will also log the stack trace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"myLogger.error(new Error('Log this message and stack.')\n")),(0,a.kt)("h2",{id:"exception-logger"},"Exception Logger"),(0,a.kt)("p",null,"The SAP Cloud SDK enables an exception logger once you create a logger instance somewhere in your project.\nThe exception logger logs unhandled exceptions as if you would log the error manually.\nIn other words, the exception logger does the following for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  someMethodThrowing();\n} catch (err) {\n  logger.error(err);\n  throw err;\n}\n")),(0,a.kt)("p",null,"You can disable this functionality with the ",(0,a.kt)("inlineCode",{parentName:"p"},"disableExceptionLogger()")," method."),(0,a.kt)("h2",{id:"what-happens-under-the-hood"},"What Happens Under the Hood"),(0,a.kt)("p",null,"The SAP Cloud SDK logger instances are based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"winston"),".\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," instance is created from a central container that knows all existing loggers.\nVia the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," the SAP Cloud SDK provides methods per message context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getLogger('my-message-context'); // get logger if present\nsetLogLevel('error', 'my-message-context'); // set log level\nsetLogFormat(logFormat.kibana, 'my-message-context'); // set log format\n")),(0,a.kt)("p",null,"or global methods for all loggers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setGlobalLogLevel('warn'); // set the global log level to warn\nsetGlobalLogFormat(logFormat.kibana); // set the global log format to kibana\nmuteLoggers(); // mute all loggers completely\nunmuteLogger(); // unmute all loggers\n")),(0,a.kt)("p",null,"The SAP Cloud SDK sets the log level ",(0,a.kt)("strong",{parentName:"p"},"during the creation of a logger")," based on the following order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"log level for a specific message context or logger - ",(0,a.kt)("inlineCode",{parentName:"li"},"setLogLevel('info', messageContextOrLogger)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"level")," field in ",(0,a.kt)("inlineCode",{parentName:"li"},"createLogger")," - ",(0,a.kt)("inlineCode",{parentName:"li"},'createLogger({..., level: "info"})')),(0,a.kt)("li",{parentName:"ol"},"global log level - ",(0,a.kt)("inlineCode",{parentName:"li"},"setGlobalLogLevel('info')")),(0,a.kt)("li",{parentName:"ol"},"default log level - ",(0,a.kt)("inlineCode",{parentName:"li"},"info"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"setGlobalLogLevel")," will not only affect the creation of the next logger, but also the log level of all existing loggers.")),(0,a.kt)("p",null,"The SAP Cloud SDK sets the log format based on the following order of priority:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"log format for a specific message context or logger - ",(0,a.kt)("inlineCode",{parentName:"li"},"setLogFormat(logFormat.local, messageContextOrLogger)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"format")," field in ",(0,a.kt)("inlineCode",{parentName:"li"},"createLogger")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"createLogger({..., format: logFormat.local})")),(0,a.kt)("li",{parentName:"ol"},"global log format - ",(0,a.kt)("inlineCode",{parentName:"li"},"setGlobalLogFormat(logFormat.local)")),(0,a.kt)("li",{parentName:"ol"},"default log format - set ",(0,a.kt)("inlineCode",{parentName:"li"},"NODE_ENV=production")," to get ",(0,a.kt)("inlineCode",{parentName:"li"},"kibana"),", otherwise ",(0,a.kt)("inlineCode",{parentName:"li"},"local"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"setGlobalLogFormat")," will not only affect the creation of the next logger, but also the log format of all existing loggers.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"nodejs_buildpack")," sets ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV=production")," by default.\nTherefore, Node.js applications deployed on Cloud Foundry using ",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs_buildpack")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"kibana")," as the default log format.")),(0,a.kt)("p",null,"In case you see a need for higher flexibility of the logging instance feel free to create an issue in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"repository")," or make a contribution."))}d.isMDXComponent=!0}}]);