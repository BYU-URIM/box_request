import { RequestForm } from "../src/stores/"

const requestForm = new RequestForm()

requestForm.deliveryInstructions = ""

// test("If text is less than 50 than input is valid and true", () => {
//     expect(requestForm.inputIsValid).toBe(true)
// })

// test("If input is valid, then no error message", () => {
//     expect(requestForm.errorMessage).toBe(undefined)
// })

// ---------------------------------------------------------------------------------------------------------------------------------------

requestForm.deliveryInstructions =
    "Yahoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"

test("If text is more than 50 than input is not valid but false", () => {
    expect(requestForm.inputIsValid).toBe(false)
})

test("If input is invalid, then error message", () => {
    expect(requestForm.errorMessage).toBe(
        "Input must be less than 50 characters."
    )
})
