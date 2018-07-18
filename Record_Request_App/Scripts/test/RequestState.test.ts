import { RequestState } from "../src/stores/"
import { sessionStore } from "./SessionStore.test"
import * as data from "./data"
import { IBox } from "../src/models";

export const requestState = new RequestState(
    sessionStore,
    data.FolderArray,
    data.BoxArray
)

// addToCart
test("Add box from dep 102 to cart", () => {
    requestState.addToCart(data.BoxArray[1])
    expect(requestState.cart).toHaveLength(1)
})

// clearCart
test("Removes ALL items from the cart", () => {
    data.BoxArray.map(box => requestState.addToCart(box))
    expect(requestState.cart.length).toBe(4)
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
test("Returns sorted boxes", () => {
    data.BoxArray.forEach(box => requestState.addToCart(box) )
    requestState.sortBoxes
    const boxId: number = requestState.cart[0].BoxIdBarCode || 0
    expect(requestState.cart.length).toBe(4)
    expect(boxId).toBe(123)
})

// filterBoxes
test("Returns filtered boxes", () => {
    const boxId: number = requestState.boxes[0].BoxIdBarCode || 0
    expect(requestState.boxes.length).toBe(2)
    expect(boxId).toBe(831084800)
})

// cartContains
test("The cart already contains this item...", () => {
    data.BoxArray.forEach(box => requestState.addToCart(box))
    expect(requestState.cartContains(data.BoxArray[0])).toBeTruthy()
    const box: IBox = {
        BoxDescription: "Test",
        BoxIdBarCode: 789,
        DepartmentName: "Test Department",
        DepId: 456,
        Location: "L5466"
    } 
    expect(requestState.cartContains(box)).toBeFalsy()
})

// removeChildFoldersMessage
test("Message for removing child folders...", () => {
    requestState.addToCart(data.BoxArray[0])
    expect(requestState.dialogMessage.length).toBeGreaterThan(0)
    requestState.clearMessage()
    expect(requestState.dialogMessage.length).toBe(0)
})

// clearMessage
test("Adds message and this function clears the message...", () => {
    requestState.dialogMessage = "Hello world."
    requestState.clearMessage()
    expect(requestState.dialogMessage).toHaveLength(0)
})

// removeChildFolders
test("If I add Box 831084800, its child folders are removed from cart...", () => {
    requestState.clearCart()
    requestState.addToCart(data.FolderArray[0])
    requestState.addToCart(data.FolderArray[1])
    requestState.box = data.BoxArray[0]
    requestState.removeChildFolders()
    requestState.addToCart(requestState.box)
    expect(requestState.cart).toHaveLength(1)
})
test("Adding 5 folders from one box clears folders and adds box...", () => {
    requestState.clearCart()
    data.FolderArray.forEach(folder => requestState.addToCart(folder))
    requestState.box = data.BoxArray[3]
    requestState.removeChildFolders()
    expect(requestState.cart.map(item => item.BoxIdBarCode)).toHaveLength(3)
})

// removeGroupedFoldersMessage
test("Message for removing 5 or more folders...", () => {
    data.FolderArray.forEach(folder => requestState.addToCart(folder))
    requestState.removeGroupedFoldersMessage(data.FolderArray[4])
    expect(requestState.dialogMessage).not.toHaveLength(0)
})

// countChildFolders
test("Counts 2 Folders in Box 831084800", () => {
    requestState.clearCart()
    data.FolderArray.forEach(folder => requestState.addToCart(folder))
    expect(requestState.countChildFolders(data.BoxArray[0])).toBe(2)
})

// removeParentBox
test("Adds all folders, adds box that makes message appear, removes box and message...", () => {
    data.FolderArray.forEach(folder => requestState.addToCart(folder))
    requestState.removeGroupedFoldersMessage(data.FolderArray[4])
    requestState.box = data.BoxArray[3]
    requestState.removeParentBox()
    expect(requestState.dialogMessage).toHaveLength(0)
})
