import { FolderForm } from "../src/stores/"

const folderForm = new FolderForm(["folder 1", "folder 2", "folder 3"])

test("new folder with same name as existing folder is false", () => {
    folderForm.folderName = "folder 1"
    expect(folderForm.inputIsValid).toBe(false)
    expect(folderForm.errorMessage).toBe(
        "Please use a Folder Name that does not already exist."
    )
})

test("new folder with different name as existing folders is true", () => {
    folderForm.folderName = "folder 4"
    expect(folderForm.inputIsValid).toBe(true)
    expect(folderForm.errorMessage).toBe(undefined)
})

test("new folder with different name as existing folders is true", () => {
    folderForm.folderName =
        "folder 40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    expect(folderForm.inputIsValid).toBe(false)
    expect(folderForm.errorMessage).toBe(
        "The new folder name must be less that 50 characters."
    )
})
