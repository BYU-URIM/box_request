import { rootStore } from "."

test("tests that the UIStore instance was initialized", () => {
    expect(rootStore.uiStore.initialized).toBe(true)
})
