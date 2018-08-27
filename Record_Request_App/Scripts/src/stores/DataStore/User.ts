import { IDepartment } from "."

export interface IUser {
    name: string
    username: string
    email: string
    Id: string
    departments: Array<IDepartment>
}

export class User {
    constructor(_user: IUser) {
        Object.assign(this, _user)
        console.log(this)
    }

    name: string
    username: string
    email: string
    Id: string
    departments: Array<IDepartment>
}
