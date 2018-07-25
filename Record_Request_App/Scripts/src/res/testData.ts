import { IBox, IUser, IFolder } from "../models"

export interface IMockData {
    currentUser: IUser
    boxes: Array<IBox>
    folders: Array<IFolder>
}

export const mockData: IMockData = {
    currentUser: {
        departments: [
            { name: "Department 1", id: 1 },
            { name: "Department 2", id: 2 },
        ],
        email: "testuser@tests.com",
        Id: "testUser",
        name: "test user's name",
        username: "testUser12",
    },
    boxes: [
        {
            BoxDescription: "box 1000 for dep 1",
            BoxIdBarCode: 1000,
            DepartmentName: "Department 1",
            DepId: 1,
            Location: "1",
        },
        {
            BoxDescription: "box 1001 for dep 2",
            BoxIdBarCode: 1001,
            DepartmentName: "Department 2",
            DepId: 2,
            Location: "2",
        },
        {
            BoxDescription: "box 1002 for dep 3",
            BoxIdBarCode: 1002,
            DepartmentName: "Department 3",
            DepId: 3,
            Location: "3",
        },
    ],

    folders: [
        {
            BoxIdBarCode: 1000,
            Folder_Description: "test folder 2000 for box 1000",
            FolderIdBarCode: 2000,
            FolderName: "test folder 2000",
            Location: "1000",
        },
        {
            BoxIdBarCode: 1000,
            Folder_Description: "test folder 2001 for box 1000",
            FolderIdBarCode: 2001,
            FolderName: "test folder 2001",
            Location: "1000",
        },
        {
            BoxIdBarCode: 1001,
            Folder_Description: "test folder 2002 for box 1001",
            FolderIdBarCode: 2002,
            FolderName: "test folder 2002",
            Location: "1001",
        },
        {
            BoxIdBarCode: 1001,
            Folder_Description: "test folder 2003 for box 1001",
            FolderIdBarCode: 2003,
            FolderName: "test folder 2003",
            Location: "1001",
        },
        {
            BoxIdBarCode: 1001,
            Folder_Description: "test folder 2004 for box 1001",
            FolderIdBarCode: 2004,
            FolderName: "test folder 2004",
            Location: "1001",
        },
        {
            BoxIdBarCode: 1001,
            Folder_Description: "test folder 2005 for box 1001",
            FolderIdBarCode: 2005,
            FolderName: "test folder 2005",
            Location: "1001",
        },
        {
            BoxIdBarCode: 1001,
            Folder_Description: "test folder 2006 for box 1001",
            FolderIdBarCode: 2006,
            FolderName: "test folder 2006",
            Location: "1001",
        },
        {
            BoxIdBarCode: 1001,
            Folder_Description: "test folder 2007 for box 1001",
            FolderIdBarCode: 2007,
            FolderName: "test folder 2007",
            Location: "1001",
        },
        {
            BoxIdBarCode: 1002,
            Folder_Description: "test folder 2008 for box 1002",
            FolderIdBarCode: 2008,
            FolderName: "test folder 2008",
            Location: "1002",
        },
    ],
}
