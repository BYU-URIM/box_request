# Configuring local environment

## Running locally

Running locally lets you develop without any data from sharepoint or filemaker, just using mock data.

From the root of the project, run:

```bash
    yarn run dev:local
```

## Running with sharepointProxy

Running with a sharepoint proxy server allows us to access sharepoint api for whichever site the app was installed on as well as credentials.  This will also use a node proxy server for proxying requests to FileMaker.  This option option starts a proxy server for Sharepoint, a proxy server for FileMaker, and serves the webpack build.

### Important steps to run

-   You must be connected to BYU internet for the filemaker server to work correctly
-   You must generate credentials for Sharepoint, this is done by running `yarn run sp:proxyServer` and entering your credentials. 
-   When prompted, The correct url is "https://sp13-c3d12ebd09d206.spapps.byu.edu/jj33/Record_Request_App"
-   Select to use User Credentials
-   The domain is "byu"
-   Every once in a while the credentials will expire, and you will need to run this command again.  It seems like they last at least 2 weeks.

When all of this is done, run: 

```bash
    yarn run dev:sharepointProxy
```
