import { IBox, IUser, IFolder } from "../src/models"

export const currentUser: IUser = {
    departments: [
        { name: "Department of Defense", id: 101 },
        { name: "Department of Stuff", id: 102 },
    ],
    email: "johnson@hotmail.com",
    Id: "User Id what?",
    name: "Jordan Johnson",
    username: "jorson",
}

export const BoxArray: Array<IBox> = [
    {
        BoxDescription: "Box of Records",
        BoxIdBarCode: 831084800,
        DepartmentName: "Department of Defense",
        DepId: 101,
        Location: "L831038477",
    },
    {
        BoxDescription: "Box of Everything",
        BoxIdBarCode: 123,
        DepartmentName: "Department of All Things Awesome",
        DepId: 101,
        Location: "L838477",
    },
    {
        BoxDescription: "Box of Other Records",
        BoxIdBarCode: 13884028,
        DepartmentName: "Department of Stuff",
        DepId: 102,
        Location: "102",
    },
    {
        BoxDescription: "Box of Cards",
        BoxIdBarCode: 1038831,
        DepartmentName: "Department of Blackjack",
        DepId: 103,
        Location: "102",
    },
]

export const FolderArray: Array<IFolder> = [
    {
        BoxIdBarCode: 831084800,
        Folder_Description: "John's Folder",
        FolderIdBarCode: 381,
        FolderName: "John",
        Location: "831084800",
    },
    {
        BoxIdBarCode: 831084800,
        Folder_Description: "Jo's Folder",
        FolderIdBarCode: 3814555,
        FolderName: "Jo",
        Location: "831084800",
    },
    {
        BoxIdBarCode: 1038831,
        Folder_Description: "Sgasdhf",
        FolderIdBarCode: 339,
        FolderName: "Project 007",
        Location: "103",
    },
    {
        BoxIdBarCode: 1038831,
        Folder_Description: "ertygf",
        FolderIdBarCode: 309,
        FolderName: "Project Mta",
        Location: "1038831",
    },
    {
        BoxIdBarCode: 1038831,
        Folder_Description: "asdfgw",
        FolderIdBarCode: 319,
        FolderName: "Project Sat",
        Location: "1038831",
    },
    {
        BoxIdBarCode: 1038831,
        Folder_Description: "ashhad",
        FolderIdBarCode: 329,
        FolderName: "Project 0Cat07",
        Location: "1038831",
    },
    {
        BoxIdBarCode: 1038831,
        Folder_Description: "asdgffr",
        FolderIdBarCode: 379,
        FolderName: "Project Gat",
        Location: "1038831",
    },
    {
        BoxIdBarCode: 1038831,
        Folder_Description: "asgaaaaa",
        FolderIdBarCode: 79,
        FolderName: "Project Hat",
        Location: "1038831",
    },
]
