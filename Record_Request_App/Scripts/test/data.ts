import { DataService } from "../src/services"

export const data = {
    currentUser: {
        departments: [{name: "Department of Defense", id: 101}, {name: "Box of Other Records", id: 102}],
        email: "johnson@hotmail.com",
        Id: "User Id what?",
        name: "Jordan Johnson",
        username: "jorson",
    },
    BoxArray: [
        {
            BoxDescription: "Box of Records",
            BoxIdBarCode: 831084800,
            DepartmentName: "Department of Defense",
            DepId: 101,
            Location: "L831038477",
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
    ],
    FolderArray: [
        {
            BoxIdBarCode: 831084800,
            Folder_Description: "John's Folder",
            FolderIdBarCode: 381,
            FolderName: "John",
            Location: "831084800",
        },
        {
            BoxIdBarCode: 1038831,
            Folder_Description: "Top Secret Files",
            FolderIdBarCode: 339,
            FolderName: "Project 007",
            Location: "103",
        },
    ],
}