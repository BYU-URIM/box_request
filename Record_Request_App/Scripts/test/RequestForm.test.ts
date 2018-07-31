import { RequestForm } from "../src/stores/"

const requestForm = new RequestForm()

test("If input is valid, then no error message", () => {
    requestForm.deliveryInstructions = "qwerty12345"
    expect(requestForm.errorMessage).toBeUndefined()
})

test("If text is less than 50 than input is valid and true", () => {
    requestForm.deliveryInstructions = ""
    expect(requestForm.inputIsValid).toBeTruthy()
})

test("If text is more than 50 than input is not valid but false", () => {
    requestForm.deliveryInstructions =
        "Yahoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    expect(requestForm.inputIsValid).toBeFalsy()
})
