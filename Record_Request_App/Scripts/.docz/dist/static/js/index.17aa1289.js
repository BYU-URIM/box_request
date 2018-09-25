(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./index.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"wiki"}},"Wiki"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"ideas-and-conecpts"}},"Ideas and Conecpts"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"models"}},"Models"),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"department-box-folder"}},"Department, Box, Folder"),o.a.createElement(r.MDXTag,{name:"h5",components:n,props:{id:"status"}},"Status"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Status is based on location of the item. With Folders it can also be based off of the location of the parent box IF the folder's current location is the box."),o.a.createElement(r.MDXTag,{name:"p",components:n},"if the current location begins with an 'L', the item is available."),o.a.createElement(r.MDXTag,{name:"p",components:n},"if the current location begins with a 'D', the item is checked out to a Department (which could be a different department from the one it belongs to i.e. the legal department can check out boxes from anywhere.)"),o.a.createElement(r.MDXTag,{name:"p",components:n},"if there is no Location, the status is pending because the box has been submitted for creation by the department, but not yet physically created by the department. When the box is physically created by a courier, the location will be set indicating that it should be a candidate for checkout."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"configuring-local-environment"}},"Configuring local environment"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"running-locally"}},"Running locally"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Running locally lets you develop without any data from sharepoint or filemaker, just using mock data."),o.a.createElement(r.MDXTag,{name:"p",components:n},"From the root of the project, run:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"    yarn run dev:local\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"running-with-sharepointproxy"}},"Running with sharepointProxy"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Running with a sharepoint proxy server allows us to access sharepoint api for whichever site the app was installed on as well as credentials.  This will also use a node proxy server for proxying requests to FileMaker.  This option option starts a proxy server for Sharepoint, a proxy server for FileMaker, and serves the webpack build."),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"important-steps-to-run"}},"Important steps to run"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"You must be connected to BYU internet for the filemaker server to work correctly"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"You must generate credentials for Sharepoint, this is done by running ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn run sp:proxyServer")," and entering your credentials. "),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},'When prompted, The correct url is "',o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://sp13-c3d12ebd09d206.spapps.byu.edu/jj33/Record_Request_App"}},"https://sp13-c3d12ebd09d206.spapps.byu.edu/jj33/Record_Request_App"),'"'),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Select to use User Credentials"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},'The domain is "byu"'),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Every once in a while the credentials will expire, and you will need to run this command again.  It seems like they last at least 2 weeks.")),o.a.createElement(r.MDXTag,{name:"p",components:n},"When all of this is done, run: "),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"    yarn run dev:sharepointProxy\n")))}}}]);