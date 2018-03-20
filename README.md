# Box/Folder Request Application

Files, Tables, Fields and Layouts

The FileMaker Data API requires the Layout name to gain access to the Tables.  Below, I mentioned the associated table, as you still may need that information.

I am placing a Box folder called “URIM Requestor” and sharing it with ya’ll.  I am including the two FileMaker databases as working copies, in case you need it.

User requests a box

Request goes into:

* Delivery Requests is the layout being used, which refers to the DeliveryRequestsLog table

* Populate the following fields:

  * Box Number or Folder Number (Item being requested) = RequestedItemBarcode

    * If Box is being requested, only allow user to request exiting boxes pulled back from ROC.  You will need to return “B” & Boxes::BoxId Barcode back into Delivery Requests  

    * If Folder, user can request existing Folder or create a new one and them request it  (Folder info is in the FolderList layout, which refers to the Folders table)

      * FolderId the actual folder number

      * BoxId, refers to the Parent Box

      * DateCreated – auto entered by the system

      * FolderIdPrefix – this is an calculated field based on FolderId.  If 148 is the FolderId, the FolderIdPrefix is F0000148 (return this field into the Deliver Requests layout/DeliverRequestsLog table, RequestedItemBarcode field)

  * FolderDescription if a Folder is being requested.  Blank if a Box is being requested.  If Folder exists, the data is coming from Folders::FolderDescription

  * Parent Box if Folder is being requested.  Blank if a Box is being requested.   Folders::BoxId

  * Parent Box Location.  Need to supply this:

    * If Box, use Boxes::CurrentLocationDashes

    * If Folder, use Boxes::CurrentLocationDashes  (go to the related Boxes table to pick it up)

  * Table = Boxes, if a box is submitted or Folders, if a Folder is submitted

  * Requesting Department = Department ID

  * Request Type (TEMP or PERM)  Supply the actual text of “TEMP” or “PERM”

  * DeliveryPriority (Standard or Urgent).  Supply actual text of “Standard” or “Urgent”.  Standard is the default.

  * RequestStatus = New. You will need to supply “New” with each requested item.

  * DeliveryRequestInstructions = What the user put into Delivery Instructions
