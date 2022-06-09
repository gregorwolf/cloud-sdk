"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[163],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99220:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"How the SAP Cloud SDK handles Trust and Keystores",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Trust and Keystores",description:"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript","Keystore","Truststore"]},l=void 0,c={unversionedId:"js/guides/trust-and-key-stores",id:"js/guides/trust-and-key-stores",title:"How the SAP Cloud SDK handles Trust and Keystores",description:"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.",source:"@site/docs/js/guides/trust-and-key-stores.mdx",sourceDirName:"js/guides",slug:"/js/guides/trust-and-key-stores",permalink:"/cloud-sdk/docs/js/guides/trust-and-key-stores",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/trust-and-key-stores.mdx",tags:[],version:"current",lastUpdatedBy:"Alexander D\xfcmont",lastUpdatedAt:1654772757,formattedLastUpdatedAt:"6/9/2022",frontMatter:{title:"How the SAP Cloud SDK handles Trust and Keystores",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Trust and Keystores",description:"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript","Keystore","Truststore"]},sidebar:"someSidebar",previous:{title:"Use the SAP Cloud SDK in the Browser",permalink:"/cloud-sdk/docs/js/guides/sdk-in-browser"},next:{title:"Using the SAP Application Router",permalink:"/cloud-sdk/docs/js/guides/how-to-use-the-approuter"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Formats and Naming",id:"formats-and-naming",level:3},{value:"One-Way SSL",id:"one-way-ssl",level:3},{value:"Two-Way SSL",id:"two-way-ssl",level:3},{value:"Truststore Configuration",id:"truststore-configuration",level:2},{value:"Keystore Configuration",id:"keystore-configuration",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The essence of web applications is communication between two parties.\nThese two parties could be a server and a client, two servers or any other combination.\nIn the communication you want to ensure that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You are talking to the party you expect you talk to."),(0,o.kt)("li",{parentName:"ol"},"The content of your conversation is securely encrypted and therefore private.")),(0,o.kt)("p",null,"To ensure this the secure socket layer (SSL), later called transport layer security (TLS), was developed.\nIf you want to add this security layer to your request you use ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP"),"."),(0,o.kt)("p",null,"The method to achieve both points above (trust and privacy) are private and public keys.\nSuch keys offer the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can encrypt something with one key, but only with the counterpart you can decrypt it."),(0,o.kt)("li",{parentName:"ul"},"You can distribute one key but you can not derive the counterpart from the distributed one.")),(0,o.kt)("p",null,"The process of encrypting something with the private key is sometimes called ",(0,o.kt)("inlineCode",{parentName:"p"},"signing"),", because everybody can check the signature with the public key.\nThe format of the private and public keys are certificates which provide additional information like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the used encryption algorithm"),(0,o.kt)("li",{parentName:"ul"},"the issuer of the key pair"),(0,o.kt)("li",{parentName:"ul"},"the validity of the key"),(0,o.kt)("li",{parentName:"ul"},"the domain the key was issued for"),(0,o.kt)("li",{parentName:"ul"},"etc.")),(0,o.kt)("h3",{id:"formats-and-naming"},"Formats and Naming"),(0,o.kt)("p",null,"We already introduced a few terms like certificate for the public and private key.\nHowever, we would like to introduce a few terms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Keystore"),": A keystore is an object containing keys.\nUsually these are private and public key pairs as introduced above, but it may contain a certificate instead.\nYou need a password to open a keystore.\nTypical formats are ",(0,o.kt)("inlineCode",{parentName:"li"},".JKS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".P12"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".PFCKS"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},".PKCS7")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Truststore"),": A truststore contains public keys like certificates.\nSome formats allow you to protect the trust store with a password.\nTypical formats are ",(0,o.kt)("inlineCode",{parentName:"li"},".JKS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".CRT"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".PEM"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".PUB"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},".DER"),".")),(0,o.kt)("p",null,"For X.509 certificate there are two encodings: base64 ASCII (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},".PEM"),") and binary (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},".DER"),").\nThe content of a PEM file looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQGHcPvmUGa79M6pM42bGFYjANBgkqhkiG9wA\n\u2026.\nLvHPhNDM3rMsLu06agF4JTbO8ANYtWQTx0PVrZKJu+8fcIaUp7MVBIVZ\n-----END CERTIFICATE-----\n")),(0,o.kt)("h3",{id:"one-way-ssl"},"One-Way SSL"),(0,o.kt)("p",null,"The typical situation is that a client requests something from a public server and wants to be sure that the server is not somebody else.\nThe server does not care about the identity of the client.\nThe identity is verified in the following way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server presents the public key (certificate) and some signed content to the client."),(0,o.kt)("li",{parentName:"ul"},"Client checks that the domain in the certificate matches the requested resource."),(0,o.kt)("li",{parentName:"ul"},"Client checks that the certificate issuer is in the listed of trusted ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Certificate_authority"},"certificate authorities (CA)"),"."),(0,o.kt)("li",{parentName:"ul"},"Client checks that the content was actually signed with the public key.")),(0,o.kt)("p",null,"If all checks have passed, the server is trustworthy.\nCreating a secure connection is possible using private and public keys.\nFor an encrypted connection, you need to interchange a secret.\nAn initial secret can be encrypted using the public certificate and send back to the server.\nThis is the starting point for a private connection between client and server."),(0,o.kt)("h3",{id:"two-way-ssl"},"Two-Way SSL"),(0,o.kt)("p",null,"Sometimes you would also like to verify the identity of the client.\nYou can do this via a username and password or some authentication token.\nHowever, you can also use a private and public key pair to do that."),(0,o.kt)("p",null,"You would store the public part of your client certificate in the server.\nWhen sending a request you then access your keystore and sign your request with the private part.\nThis is called ",(0,o.kt)("inlineCode",{parentName:"p"},"client certificate authentication")," or two-way SSL because the identity of server and client is verified using private and public keys."),(0,o.kt)("h2",{id:"truststore-configuration"},"Truststore Configuration"),(0,o.kt)("p",null,"In most cases your server will use a certificate from a trusted CAs and one-way SSL just works without additional actions.\nSometimes this is impossible and locally created key pairs also call ",(0,o.kt)("inlineCode",{parentName:"p"},"self signed certificates")," are used.\nPer default, browsers and node clients do not trust such a certificate.\nYou will encounter errors like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error: self signed certificate in certificate chain.\n")),(0,o.kt)("p",null,"In such a case you need to add the self-signed certificate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ca")," property of the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions"},"node http client"),".\nThe SAP Cloud SDK does this for you if you maintain the truststore configuration via the destination service.\nYou have to do the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upload your certificate ",(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/df1bb55a526942b9bee78fea2ebb3162.html"},"to destinations sections of the subaccount"),"."),(0,o.kt)("li",{parentName:"ul"},"Maintain the ",(0,o.kt)("inlineCode",{parentName:"li"},"TrustStoreLocation")," property on the destination and ",(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/CP_CONNECTIVITY/b865ed651e414196b39f8922db2122c7/3f1247537c1a4f069235ee63633659c5.html"},"select the uploaded certificate"),".\nThe password value is only relevant for java keys store format (JKS).")),(0,o.kt)("p",null,"Note that you can also upload certificates in the destination service instance.\nThe SAP Cloud SDK searches the subaccount first and only if no certificate with the given name is found proceeds to the instance certificates."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SAP Cloud SDK for JavaScript only supports ",(0,o.kt)("inlineCode",{parentName:"p"},".pem")," as certificate format."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SAP Cloud SDK also considers the ",(0,o.kt)("inlineCode",{parentName:"p"},"TrustAll")," property on the destination.\nThis leads to ",(0,o.kt)("inlineCode",{parentName:"p"},"rejectUnauthorized: false")," in the node client and should be used with great caution.\nIf you trust everybody you are vulnerable to man in the middle attacks.\nAvoid this options if possible."))),(0,o.kt)("h2",{id:"keystore-configuration"},"Keystore Configuration"),(0,o.kt)("p",null,"As discussed above you can also use a certificate to authenticate the client.\nThis is the mentioned two-way SSL scenario and is called ",(0,o.kt)("inlineCode",{parentName:"p"},"clientCertificateAuthentication")," in the destination service.\nThe SAP Cloud SDK supports this authentication flow.\nYou have to do the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upload the keystore in the destinations section of the subaccount."),(0,o.kt)("li",{parentName:"ul"},"Configure the destination to use ",(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/4e13a04147314e8e9e54321f25d93fdc.html"},"ClientCertificateAuthentication")," and provide the keystore information like keystore name and password.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SAP Cloud SDK for JavaScript only supports formats ",(0,o.kt)("inlineCode",{parentName:"p"},".P12")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".PFX")," for the keystore."))))}h.isMDXComponent=!0}}]);