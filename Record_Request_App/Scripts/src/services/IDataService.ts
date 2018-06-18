import { IUser } from "../models/StoreModels"

export interface IDataService {
    fetchUser(): Promise<IUser>
}
