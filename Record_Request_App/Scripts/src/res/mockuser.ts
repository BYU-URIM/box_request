import { IUser } from "../models/StoreModels"

export const mockUser: IUser = {
    name: "Greg Anderson",
    Id: "12345",
    email: "email@gmail.com",
    username: "greggy",
    departments: [
        { id: 5555, name: "Department of Aerophysics" },
        { id: 5556, name: "Department of Science" },
        { id: 5557, name: "Department of Agriculture" },
    ],
}
