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
            BoxId: 1000,
            DepartmentName: "Department 1",
            DeptId: 1,
            CurrentLocation: "1",
        },
        {
            BoxDescription: "box 1001 for dep 2",
            BoxId: 1001,
            DepartmentName: "Department 2",
            DeptId: 2,
            CurrentLocation: "2",
        },
        {
            BoxDescription: "box 1002 for dep 3",
            BoxId: 1002,
            DepartmentName: "Department 3",
            DeptId: 3,
            CurrentLocation: "3",
        },
    ],

    folders: [
        {
            BoxId: 1000,
            FolderDescription: "test folder 2000 for box 1000",
            FolderId: 2000,
            FolderName: "test folder 2000",
            CurrentFolderLocation: "1000",
        },
        {
            BoxId: 1000,
            FolderDescription: "test folder 2001 for box 1000",
            FolderId: 2001,
            FolderName: "test folder 2001",
            CurrentFolderLocation: "1000",
        },
        {
            BoxId: 1001,
            FolderDescription: "test folder 2002 for box 1001",
            FolderId: 2002,
            FolderName: "test folder 2002",
            CurrentFolderLocation: "1001",
        },
        {
            BoxId: 1001,
            FolderDescription: "test folder 2003 for box 1001",
            FolderId: 2003,
            FolderName: "test folder 2003",
            CurrentFolderLocation: "1001",
        },
        {
            BoxId: 1001,
            FolderDescription: "test folder 2004 for box 1001",
            FolderId: 2004,
            FolderName: "test folder 2004",
            CurrentFolderLocation: "1001",
        },
        {
            BoxId: 1001,
            FolderDescription: "test folder 2005 for box 1001",
            FolderId: 2005,
            FolderName: "test folder 2005",
            CurrentFolderLocation: "1001",
        },
        {
            BoxId: 1001,
            FolderDescription: "test folder 2006 for box 1001",
            FolderId: 2006,
            FolderName: "test folder 2006",
            CurrentFolderLocation: "1001",
        },
        {
            BoxId: 1001,
            FolderDescription: "test folder 2007 for box 1001",
            FolderId: 2007,
            FolderName: "test folder 2007",
            CurrentFolderLocation: "1001",
        },
        {
            BoxId: 1002,
            FolderDescription: "test folder 2008 for box 1002",
            FolderId: 2008,
            FolderName: "test folder 2008",
            CurrentFolderLocation: "1002",
        },
    ],
}
