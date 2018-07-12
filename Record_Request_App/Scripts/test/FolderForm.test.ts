import { FolderForm } from "../src/stores/"

const folderForm = new FolderForm(["folder 1", "folder 2", "folder 3"])

// folderForm.folderName = "folder 1"

// test("new folder with same name as existing folder is false", () => expect(folderForm.inputIsValid).toBe(false))

// test("If false and less than 50 characters, then this message", () => {
//     expect(folderForm.errorMessage).toBe("Please use a Folder Name that does not already exist.")
// })

// --------------------------------------------------------------------------------------------------------------------------------------------------

// folderForm.folderName = "folder 4"

// test("new folder with different name as existing folders is true", () => expect(folderForm.inputIsValid).toBe(true))

// test("If true and less than 50 characters, then this message", () => {
//     expect(folderForm.errorMessage).toBe(undefined)
// })

// --------------------------------------------------------------------------------------------------------------------------------------------------

folderForm.folderName =
    "folder 40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

test("new folder with different name as existing folders is true", () =>
    expect(folderForm.inputIsValid).toBe(false))

test("If not valid because its more than 50 characters, then this message", () => {
    expect(folderForm.errorMessage).toBe(
        "The new folder name must be less that 50 characters."
    )
})
