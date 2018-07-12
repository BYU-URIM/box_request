import { SessionStore, RootStore } from "../src/stores/"
import { data } from "./data"
import { DataService } from "../src/services"

const rootStore = new RootStore(
    data.currentUser,
    data.BoxArray,
    data.FolderArray,
    new DataService()
)

export const sessionStore = new SessionStore(data.currentUser, rootStore)

// switchApp
// department

test("Function only pulls departments 101, which the user has.", () => {
    expect(
        sessionStore.userDepartments.map(department => department.id)
    ).toEqual([101])
})
