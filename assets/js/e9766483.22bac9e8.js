"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2410],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50711:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={},u="Azure Table Storage",s={unversionedId:"integrations/sources/azure-table",id:"integrations/sources/azure-table",title:"Azure Table Storage",description:"Overview",source:"@site/../docs/integrations/sources/azure-table.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/azure-table",permalink:"/integrations/sources/azure-table",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/azure-table.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"AWS CloudTrail",permalink:"/integrations/sources/aws-cloudtrail"},next:{title:"Bamboo HR",permalink:"/integrations/sources/bamboo-hr"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"azure-table-storage"},"Azure Table Storage"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Azure table storage supports Full Refresh syncs. You can choose which tables you want to replicate."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"This Source have generic schema for all streams.\nAzure Table storage is a service that stores non-relational structured data (also known as structured NoSQL data). There is no efficient way to read schema for the given table. We use ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," property to have all the properties for any given row. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"data - This property contain all values"),(0,o.kt)("li",{parentName:"ul"},"additionalProperties - This property denotes that all the values are in ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," property.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'    {\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "type": "object",\n    "properties": {\n        "data": {\n            "type": "object"\n        },\n        "additionalProperties": {\n            "type": "boolean"\n        }\n    }\n}')),(0,o.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("p",null,"Azure Table Storage uses different ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-the-table-service-data-model#property-types"},"property")," types and Airbyte uses internally ","(",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"date-time"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"integer"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),")",". We don't apply any explicit data type mappings."),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental - Dedupe Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"The Azure table storage connector should not run into API limitations under normal usage. Please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure Storage Account"),(0,o.kt)("li",{parentName:"ul"},"Azure Storage Account Key"),(0,o.kt)("li",{parentName:"ul"},"Azure Storage Endpoint Suffix")),(0,o.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Portal"),". Go to your storage account, you can find :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure Storage Account - under the overview tab"),(0,o.kt)("li",{parentName:"ul"},"Azure Storage Account Key - under the Access keys tab"),(0,o.kt)("li",{parentName:"ul"},"Azure Storage Endpoint Suffix - under the Enpoint tab")),(0,o.kt)("p",null,"We recommend creating a restricted key specifically for Airbyte access. This will allow you to control which resources Airbyte should be able to access. However, shared access key authentication is not supported by this connector yet."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8434"},"8434")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")))))}m.isMDXComponent=!0}}]);