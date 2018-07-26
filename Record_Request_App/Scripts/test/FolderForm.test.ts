import { FolderForm } from "../src/stores/"

const folderForm = new FolderForm(["folder 1", "folder 2", "folder 3"])

test("Recreating a folder with the same name as an existing folder returns false", () => {
    folderForm.folderName = "folder 1"
    expect(folderForm.inputIsValid).toBeFalsy()
})

test("If inputIsValid returns false, then return an error message unique to duplicate named folders", () => {
    folderForm.folderName = "folder 1"
    console.log(folderForm.inputIsValid)
    expect(folderForm.errorMessage).toBe(
        "Please use a Folder Name that does not already exist."
    )
})

test("inputIsValid returns true if creating a new a folder with a different name than existing folders", () => {
    folderForm.folderName = "folder 4"
    expect(folderForm.inputIsValid).toBeTruthy()
})

test("If inputIsValid returns true, then no error message exists", () => {
    folderForm.folderName = "folder 4"
    console.log(folderForm.inputIsValid)
    expect(folderForm.errorMessage).toBeUndefined()
})

test("inputIsValid returns false when creating a folder with a name longer than 50 characters", () => {
    folderForm.folderName =
        "folder 40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    expect(folderForm.inputIsValid).toBeFalsy()
})

test("If inputIsValid returns false because of name length, then return an error message unique to overly long folder names", () => {
    folderForm.folderName =
        "folder 00000000000000000000000000000000000000000000"
    console.log(folderForm.inputIsValid)
    expect(folderForm.errorMessage).toBe(
        "The new folder name must be less than 50 characters."
    )
})
