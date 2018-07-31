import { IBox } from "../src/models"
import { requestState } from "."

test("Tests addToCart by adding box 1000 from dep 1 to cart", () => {
    requestState.addToCart(requestState.boxes[0])
    expect(requestState.cart).toHaveLength(1)
})

test("Tests clearCart by removing all items from cart", () => {
    requestState.clearCart()
    expect(requestState.cart).toHaveLength(0)
})

test("Tests removeFromCart by adding and removing an item from the cart", () => {
    requestState.addToCart(requestState.boxes[0])
    expect(requestState.cart).toHaveLength(1)
    requestState.removeFromCart(requestState.boxes[0].BoxIdBarCode)
    expect(requestState.cart).toHaveLength(0)
})

test("Tests if the cart already contains an item", () => {
    requestState.addToCart(requestState.boxes[0])
    expect(requestState.cartContains(requestState.boxes[0])).toBeTruthy()
    const testBox: IBox = {
        BoxDescription: "Test",
        BoxIdBarCode: 789,
        DepartmentName: "Test Department",
        DepId: 456,
        Location: "L5466",
    }
    expect(requestState.cartContains(testBox)).toBeFalsy()
})

test("Tests adding and clearing a dialog message", () => {
    requestState.dialogMessage = "test message"
    expect(requestState.dialogMessage).toBe("test message")
    requestState.clearMessage()
    expect(requestState.dialogMessage.length).toBe(0)
})

test("Tests removeChildFolders by adding box 1001 and removing it's child folders", () => {
    requestState.clearCart()
    requestState.box = requestState.boxes[0]
    requestState.addToCart(requestState.folders[0])
    requestState.addToCart(requestState.folders[1])
    requestState.box = requestState.boxes[0]
    requestState.addToCart(requestState.box)
    requestState.removeChildFolders()
    expect(requestState.cart).toHaveLength(1)
})
test("Tests removeChildFolders that adding 5 folders from a single box removes the folders and adds the box", () => {
    requestState.clearCart()
    requestState.box = requestState.boxes[0]
    requestState.folders.forEach(folder => requestState.addToCart(folder))
    requestState.removeChildFolders()
    expect(requestState.cart).toHaveLength(1)
})

test("Tests countChildFolders to count the 6 folders from box 1001", () => {
    requestState.clearCart()
    requestState.box = requestState.boxes[0]
    requestState.folders.forEach(folder => requestState.addToCart(folder))
    expect(requestState.countChildFolders(requestState.boxes[0])).toBe(6)
})
