import { SessionStore, RootStore } from "../src/stores/"
import { data } from "./data"

const rootStore = new RootStore(data.currentUser, data.BoxArray, data.FolderArray)

export const sessionStore = new SessionStore(data.currentUser, rootStore)

// switchApp
// department

test("Function only pulls departments 101 and 102, which the user has.", () => {
    expect(sessionStore.userDepartments.map(department => department.id)
    ).toEqual([101, 102])
})