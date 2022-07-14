"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7069],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3472:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=n(5488),i=n(5162),l=["components"],u={id:"execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",sidebar_label:"Execute an OData Request",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},p=void 0,c={unversionedId:"tutorials/getting-started/execute-an-odata-request",id:"tutorials/getting-started/execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",source:"@site/docs-js/tutorials/getting-started/2-execute-odata-request.mdx",sourceDirName:"tutorials/getting-started",slug:"/tutorials/getting-started/execute-an-odata-request",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"execute-an-odata-request",title:"Execute an OData GET request using the SAP Cloud SDK for JavaScript",sidebar_label:"Execute an OData Request",description:"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},sidebar:"docsJsSidebar",previous:{title:"Set up Development Environment",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/set-up-dev-environment"},next:{title:"Deploy Application to Cloud Foundry",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/deploy-app-to-cf"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Add a Custom Route",id:"add-a-custom-route",level:2},{value:"Import Service Entities",id:"import-service-entities",level:2},{value:"Execute an OData Request",id:"execute-an-odata-request",level:2},{value:"Manage Destinations Centrally (Optional)",id:"manage-destinations-centrally-optional",level:2},{value:"Final Code Review",id:"final-code-review",level:2}],v={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"In this part of the tutorial, you will do the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Extend your starter NestJS application by adding a custom route."),(0,s.kt)("li",{parentName:"ul"},"Call the business partner service of SAP S/4HANA Cloud using the SAP Cloud SDK for JavaScript."),(0,s.kt)("li",{parentName:"ul"},"Manage destinations centrally during development (optional).")),(0,s.kt)("h2",{id:"add-a-custom-route"},"Add a Custom Route"),(0,s.kt)("p",null,'Initially, the app contains a basic controller with a single route that returns the string "Hello World!".\nWe will add another route for ',(0,s.kt)("inlineCode",{parentName:"p"},"business-parters")," that will list all available business partners."),(0,s.kt)("p",null,"Create a new controller by executing the command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"nest g controller business-partners\n")),(0,s.kt)("p",null,"This will create a folder ",(0,s.kt)("inlineCode",{parentName:"p"},"business-partners")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/")," directory containing the controller ",(0,s.kt)("inlineCode",{parentName:"p"},"business-partners.controller.ts"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller } from '@nestjs/common';\n\n@Controller('business-partners')\nexport class BusinessPartnersController {}\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"@Controller(business-partners)")," decorator marks the class ",(0,s.kt)("inlineCode",{parentName:"p"},"BusinessPartnerController")," as a controller (i.e. a thing that handles requests).\nNext, we will add a method ",(0,s.kt)("inlineCode",{parentName:"p"},"getBusinessPartners")," with a ",(0,s.kt)("inlineCode",{parentName:"p"},"@Get('')")," decorator.\nThis will tell Nest to create a handler for this endpoint for HTTP requests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get } from '@nestjs/common';\n\n@Controller('business-partners')\nexport class BusinessPartnersController {\n  @Get()\n  getBusinessPartners() {\n    return 'We will implement this in a minute.';\n  }\n}\n")),(0,s.kt)("p",null,"Notice that we did not add any path information in the decorator.\nNest will map GET ",(0,s.kt)("inlineCode",{parentName:"p"},"/business-partners")," requests to this handler."),(0,s.kt)("p",null,"For the controller to work, you need to include it in the ",(0,s.kt)("inlineCode",{parentName:"p"},"controllers")," array within the ",(0,s.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator in ",(0,s.kt)("inlineCode",{parentName:"p"},"app.module.ts"),".\nThe generate command updates the ",(0,s.kt)("inlineCode",{parentName:"p"},"app.module.ts")," automatically and looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { BusinessPartnersController } from './business-partners/business-partners.controller';\n\n@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnersController],\n  providers: [AppService]\n})\nexport class AppModule {}\n")),(0,s.kt)("p",null,"If you've started your application with the following command in the previous tutorial, it should detect the change and restart automatically."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm run start:dev\n")),(0,s.kt)("p",null,"If you've terminated your application, you can restart it by running the start command again.\nNow, calling http://localhost:8080/business-partners should return our placeholder string."),(0,s.kt)("h2",{id:"import-service-entities"},"Import Service Entities"),(0,s.kt)("p",null,"To use the SAP Cloud SDK for JavaScript to make a call to an OData service, add the client library to your dependencies.\nFor this tutorial, we are using the client library for the business partner service, ",(0,s.kt)("inlineCode",{parentName:"p"},"@sap/cloud-sdk-vdm-business-partner-service"),".\nInstall it with the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @sap/cloud-sdk-vdm-business-partner-service@latest\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK for JavaScript offers packages for each OData service exposed by SAP S/4HANA Cloud.\nYou can find a list of these services in the ",(0,s.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub"),".")),(0,s.kt)("h2",{id:"execute-an-odata-request"},"Execute an OData Request"),(0,s.kt)("p",null,"Next, we will create a service that will be responsible for fetching the business partners.\nTo create a service class ",(0,s.kt)("inlineCode",{parentName:"p"},"business-partners.service.ts"),", execute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"nest g service business-partners\n")),(0,s.kt)("p",null,"This creates a basic class inside ",(0,s.kt)("inlineCode",{parentName:"p"},"src/business-partners/")," folder."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class BusinessPartnersService {}\n")),(0,s.kt)("p",null,"The service is also registered in the ",(0,s.kt)("inlineCode",{parentName:"p"},"provider")," array within the ",(0,s.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator in ",(0,s.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnersController],\n  providers: [AppService, BusinessPartnersService],\n})\n")),(0,s.kt)("p",null,"To import the service function and entity exported by the client library, add the following line to the top of the service class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  businessPartnerService,\n  BusinessPartner\n} from '@sap/cloud-sdk-vdm-business-partner-service';\n")),(0,s.kt)("p",null,"Create a function ",(0,s.kt)("inlineCode",{parentName:"p"},"getAllBusinessPartners"),".\nGet the API for the entity you want to make a call to in your application.\nIn this tutorial, we are using the ",(0,s.kt)("inlineCode",{parentName:"p"},"businessPartnerApi")," of the business partner service.\nUnpack the API object from the service function using ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"JavaScript Object Destructuring"),"."),(0,s.kt)("p",null,"Depending on the target system you are connecting to, the destination configuration can vary:"),(0,s.kt)(o.Z,{groupId:"scenario",defaultValue:"mock-server",values:[{label:"Mock Server",value:"mock-server"},{label:"SAP S/4HANA Cloud System",value:"s4hana-cloud"},{label:"SAP API Business Hub Sandbox",value:"api-hub-sandbox"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"mock-server",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    url: 'http://localhost:3000/',\n  });\n}\n"))),(0,s.kt)(i.Z,{value:"s4hana-cloud",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    url: '<URI of your SAP S/4HANA Cloud System>',\n    username: '<USERNAME>',\n    password: '<PASSWORD>'\n  });\n}\n"))),(0,s.kt)(i.Z,{value:"api-hub-sandbox",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi\n    .requestBuilder()\n    .getAll()\n    .addCustomHeaders({ APIKey: '<YOUR-API-KEY>' })\n    .execute({\n      url: 'https://sandbox.api.sap.com/s4hanacloud'\n    });\n}\n")))),(0,s.kt)("p",null,"As network requests are asynchronous by nature, the return value of this function is a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")," to a list of business partners ",(0,s.kt)("inlineCode",{parentName:"p"},"(Promise<BusinessPartner[]>)"),"."),(0,s.kt)("p",null,"Now that we have a service class to retrieve business partners, let's use it in the ",(0,s.kt)("inlineCode",{parentName:"p"},"BusinessPartnersController"),".\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"BusinessPartnersService")," is injected through the class constructor:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get, HttpException } from '@nestjs/common';\nimport { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\nimport { BusinessPartnersService } from './business-partners.service';\n\n@Controller('business-partners')\nexport class BusinessPartnersController {\n  constructor(private businessPartnerService: BusinessPartnersService) {}\n\n  @Get()\n  async getBusinessPartners(): Promise<BusinessPartner[]> {\n    return await this.businessPartnerService\n      .getAllBusinessPartners()\n      .catch(error => {\n        throw new HttpException(\n          `Failed to get business partners - ${error.message}`,\n          500\n        );\n      });\n  }\n}\n")),(0,s.kt)("p",null,"Nest will handle the ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise")," we return automatically.\nWe add a ",(0,s.kt)("inlineCode",{parentName:"p"},".catch")," handler to specify how errors are handled (otherwise it would only show an internal server error when something goes wrong).\nReload the http://localhost:8080/business-partners URL to retrieve a list of business partners."),(0,s.kt)("p",null,"Congratulations, you just made your first call with the SAP Cloud SDK!"),(0,s.kt)("h2",{id:"manage-destinations-centrally-optional"},"Manage Destinations Centrally (Optional)"),(0,s.kt)("p",null,"To avoid repeating your destination configuration for every request execution, you can set a destinations environment variable to manage your destinations.\nIn ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," applications, it is common to use a ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file to maintain such environment variables for a given project.\nCreate a ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of your project and define the destinations environment variable as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"destinations = [\n  {\n    name: '<DESTINATIONNAME>',\n    url: '<URL to your system>',\n    username: '<USERNAME>',\n    password: '<PASSWORD>'\n  }\n];\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Every environment variable in the ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file has to be defined on one line.\nYou can add more destinations to the array.")),(0,s.kt)("p",null,"This is what it would look like for the mock server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"destinations = [{ name: 'MockServer', url: 'http://localhost:3000' }];\n")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Please do not use this approach in production and also include the .env file in your .gitignore list, so that it is not checked in.")),(0,s.kt)("p",null,"Now that we have defined our destinations, we need to make sure that they are available in our process.\nFor this, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"config")," package provided by ",(0,s.kt)("inlineCode",{parentName:"p"},"nest.js"),". You can install it with the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @nestjs/config\n")),(0,s.kt)("p",null,"To load the environment variables defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file, we need to add the ",(0,s.kt)("inlineCode",{parentName:"p"},"ConfigModule")," provided by the ",(0,s.kt)("inlineCode",{parentName:"p"},"config")," package to the application's ",(0,s.kt)("inlineCode",{parentName:"p"},"@Module")," definition.\nOpen ",(0,s.kt)("inlineCode",{parentName:"p"},"app.module.ts")," and update it with the following code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { ConfigModule } from '@nestjs/config';\n\n@Module({\n  imports: [ConfigModule.forRoot()],\n  controllers: [AppController, BusinessPartnersController],\n  providers: [AppService, BusinessPartnersService],\n})\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ConfigModule")," is imported from the ",(0,s.kt)("inlineCode",{parentName:"p"},"config")," package and in we add it to the module's ",(0,s.kt)("inlineCode",{parentName:"p"},"imports"),".\nIf no arguments are passed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"forRoot()")," method, the ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file has to be located in the project root.\nFor details on the possible configuration see the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/configuration"},"nest documentation"),".\nTo reference a destination in the request execution, replace the URL with a destinationName - ",(0,s.kt)("inlineCode",{parentName:"p"},"MockServer")," in our example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    destinationName: 'MockServer'\n  });\n}\n")),(0,s.kt)("h2",{id:"final-code-review"},"Final Code Review"),(0,s.kt)("p",null,"In this tutorial, you added a new custom route to your application.\nUsing the SAP Cloud SDK, you executed an OData request to fetch a list of business partners.\nYou configured the destinations environment variable using a ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,s.kt)("p",null,"Here are the code files discussed on this page, if you are using the mock server:"),(0,s.kt)(o.Z,{groupId:"code-files",defaultValue:"bupa-controller",values:[{label:"src/business-partners/business-partners.controller.ts",value:"bupa-controller"},{label:"src/business-partners/business-partners.service.ts",value:"bupa-service"},{label:"src/app.module.ts",value:"app-module"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"bupa-controller",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get, HttpException } from '@nestjs/common';\nimport { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\nimport { BusinessPartnersService } from './business-partners.service';\n\n@Controller('business-partners')\nexport class BusinessPartnersController {\n  constructor(private businessPartnerService: BusinessPartnersService) {}\n\n  @Get()\n  async getBusinessPartners(): Promise<BusinessPartner[]> {\n    return await this.businessPartnerService\n      .getAllBusinessPartners()\n      .catch(error => {\n        throw new HttpException(\n          `Failed to get business partners - ${error.message}`,\n          500\n        );\n      });\n  }\n}\n"))),(0,s.kt)(i.Z,{value:"bupa-service",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport {\n  businessPartnerService,\n  BusinessPartner\n} from '@sap/cloud-sdk-vdm-business-partner-service';\n\n@Injectable()\nexport class BusinessPartnersService {\n  async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    const { businessPartnerApi } = businessPartnerService();\n    return await businessPartnerApi.requestBuilder().getAll().execute({\n      url: 'http://localhost:3000/'\n    });\n  }\n}\n"))),(0,s.kt)(i.Z,{value:"app-module",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { BusinessPartnersController } from './business-partners/business-partners.controller';\nimport { BusinessPartnersService } from './business-partners/business-partners.service';\n\n@Module({\n  imports: [],\n  controllers: [AppController, BusinessPartnersController],\n  providers: [AppService, BusinessPartnersService]\n})\nexport class AppModule {}\n")))))}h.isMDXComponent=!0},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),s=n(6010),o=n(2389),i=n(7392),l=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,v=e.values,h=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),P=N.tabGroupChoices,C=N.setTabGroupChoices,w=(0,a.useState)(y),S=w[0],A=w[1],x=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var B=P[h];null!=B&&B!==S&&b.some((function(e){return e.value===B}))&&A(B)}var O=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==S&&(T(t),A(r),null!=h&&C(h,String(r)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var s,o=x.indexOf(e.currentTarget)-1;n=null!=(s=x[o])?s:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);