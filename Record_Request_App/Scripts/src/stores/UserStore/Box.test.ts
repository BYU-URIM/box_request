import { Box } from "./Box"
import { DataServiceFactory } from "../../services"
import { mockData } from "../../res"

test("Tests if box has folders", () => {
    const _rootStore = DataServiceFactory.getRootStore()
    _rootStore.init().then(() => {
        const box = new Box(
            _rootStore,
            mockData[0].fieldData,
            _rootStore.userStore.departments[0],
            mockData[0].portalData.Folders
        )
        expect(box.folders.length > 0).toBe(true)
    })
})
