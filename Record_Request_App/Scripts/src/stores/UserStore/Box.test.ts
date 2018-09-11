import { Box } from "./Box"
import { DataServiceFactory } from "../../services"

test("Tests if box has folders", () => {
    const _rootStore = DataServiceFactory.getRootStore()
    _rootStore.init().then(() => {
        const box = new Box(_rootStore)
        expect(box.folders.length > 0).toBe(true)
    })
})
