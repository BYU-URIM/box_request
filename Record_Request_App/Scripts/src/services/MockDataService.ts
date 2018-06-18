import { IDataService } from "./IDataService"
import { IUser } from "../models/StoreModels"
import { mockUser } from "../res"

export class MockDataService implements IDataService {
    fetchUser(): Promise<IUser> {
        return new Promise(() => mockUser)
    }
}
