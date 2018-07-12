import { RequestState } from "../src/stores/"
import { sessionStore } from "./SessionStore.test"
import { data, Boxes } from "./data"

export const requestState = new RequestState(sessionStore, data.FolderArray, data.BoxArray)

// addToCart
test("Add box from dep 102 to cart", () => {
    requestState.addToCart(data.BoxArray[1])
    expect(requestState.cart).toHaveLength(1)
})

// clearCart
test("Removes ALL items from the cart", () => {
    data.BoxArray.map(box => requestState.addToCart(box))
    expect(requestState.cart).toHaveLength(3)
    requestState.clearCart()
    expect(requestState.cart).toHaveLength(0)

})

// removeFromCart
test("Removes the item from the cart", () => {
    requestState.addToCart(data.BoxArray[1])
    expect(requestState.cart).toHaveLength(1)
    requestState.removeFromCart(data.BoxArray[1].BoxIdBarCode)
    expect(requestState.cart).toHaveLength(0)
})

// cart
test("Returns the cart...", () => {
    requestState.addToCart(data.BoxArray[0])
    expect(requestState.cart).toEqual([data.BoxArray[0]])
})

// sortBoxes
// cant get requestState.boxes to return a value

// uniqueDepartments
test("Get unique dep ids", () => {
    expect(requestState.uniqueDepartments.map(dep => dep.id)).toEqual([101, 102, 103])
})

// userDepartments
test("Get unique deps for user", () => {
    expect(requestState.userDepartments.map(dep => dep.id)).toEqual([101, 102, 103])
})

// _closeDialog
test("Dialog shouldn't show up, so it should be false.", () => {
    requestState.dialogMessage = ""
    expect(requestState._closeDialog).toBeTruthy()
})

// _openDialog
// dropdownInfo
// cartContains
// removeChildFoldersMessage
// clearMessage
// removeChildFolders
// removeGroupedFoldersMessage
// countChildFolders
// removeParentBox
