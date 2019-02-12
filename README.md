# Wiki: Box/Folder Request Application & Box Creator

## Ideas and Concepts

### Models

---

#### Department, Box, Folder

##### Status

Status is based on location of the item. With Folders it can also be based off of the location of the parent box IF the folder's current location is the box.

if the current location begins with an 'L', the item is available.

if the current location begins with a 'D', the item is checked out to a Department (which could be a different department from the one it belongs to i.e. the legal department can check out boxes from anywhere.)

if there is no Location, the status is pending because the box has been submitted for creation by the department, but not yet physically created by the department. When the box is physically created by a courier, the location will be set indicating that it should be a candidate for checkout.

### Stores

---

#### Checkout Store

##### CheckoutStore.ts

This file defines the CheckoutStore class. It places selected items into a map object; a map is used for ease of working with two different objects--folders and boxes. It contains sorting functions so that items show up organized by box ID, regardless of if it's a box or folder (then it's sorted by it's parent box ID). There are basic controls, like listing items in the map, returning only folders in the map, determining whether or not a checkout cart can be submitted based on whether or not there's an item in the cart, etc. 

When the cart is ready to be submitted, a SUBMIT_CART form is called, to finalize cart submission.

Basically, this file contains the logic for the Checkout component and regulates what happens there. 

#### Form Store

Form Types are specified here. The forms are created using JSON Schema Forms.

##### FormSchema.ts

This is where forms happen. There are several interfaces defined here that deal with forms. This is also where all of the JSON forms are created. You can make new JSON forms and give them different schemas and properties, you can modify current JSON forms, like NEW_FOLDER, and add new inputs to the form, like a toggle or another text field, relatively easy. For more information on JSON Forms and Schemas: [React JSON Schema Forms.]("https://github.com/mozilla-services/react-jsonschema-form")

##### FormUtils.ts

Provides useful information logged to the console to help with troubleshooting.

#### Root Store

This is basically the start of everything. The API call to fetch the User and associated information happens here as well as allowing access to all of the other stores.

#### UI Store

This file is responsible for keeping track of messages to be used as Message Bars with its *dialogMessage* variable. If that variable has a length greater than 0, then a message bar will be present. The dropdown list is rendered conditionally based a method contained in within this file dependent on whether or not the user has access to more than department. Mainly, this file contains some the logic behind the Messages and the Department Dropdown components.

##### Message.ts

This file contains the Message class. Instances of the Message class are Message Bars that can be used to respond to an event triggered by the user. If they add 5 folders in the same box, a message bar will appear offering the user a recommendation to check out the entire box rather than a bunch of folders within the box. If the user successfully requests a box, a message bar will appear notifying them that the submission was successful. 

#### User Store

All information stems from the User. The user launches the Sharepoint Application and the program grabs their CAS login information to find out who they are and what they ought to have access to. Based on what departments the user is associated with will determine what the user will ultimately be able to see throughout the application.

This file contains interfaces for User and the Status types of folders and boxes. There are functions that keep track of the selected department, box, and folder.

##### Box.ts

This file deals with the Boxes (and is important because Boxes determine what folders users can see). It contains interfaces for the Box and Box forms as well as the class used to create Boxes. This is the meat of the project, as this is what users will be requesting, removing, creating, and manipulating. Boxes are tied to departments which are tied to users. This file contains the methods and functions that will allow a user to interact with the boxes they're looking for.

##### Department.ts

Departments are important because they determine what boxes users can see. This file contains the interfaces and classes necessary to create a department as well as all of the necessary functions to provide the user with only the data that the user ought to have access to, as departments are the gateway to boxes and folders.

##### Folder.ts

This contains the interfaces and classes for folders and the form for folder creation. It also contains the methods and functions needed to manipulate individual folders and display that folder's current status.

## Configuring local environment

### Running locally

Running locally lets you develop without any data from sharepoint or filemaker, just using mock data.

From the root of the project, run:

```bash
    yarn run dev:local
```

### Running with sharepointProxy

Running with a sharepoint proxy server allows us to access sharepoint api for whichever site the app was installed on as well as credentials.  This will also use a node proxy server for proxying requests to FileMaker.  This option option starts a proxy server for Sharepoint, a proxy server for FileMaker, and serves the webpack build.

#### Important steps to run

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
