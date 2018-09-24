import { observable, computed } from "mobx"

export class FolderForm {
    @observable
    private _folderInput: string = ""

    constructor(private _existingNames: Array<string>) {}

    @computed
    get folderDescription(): string {
        return this._folderInput
    }
    set folderDescription(_newDescription: string) {
        this._folderInput = _newDescription.trim()
    }

    @computed
    get errorMessage(): string {
        return this.inputIsValid
            ? undefined
            : this.folderDescription.length > 50
                ? "The new folder name must be less than 50 characters."
                : "Please use a Folder Name that does not already exist."
    }

    @computed
    get inputIsValid(): boolean {
        return (
            this.folderDescription.length < 50 &&
            !this._existingNames.includes(this.folderDescription.toLowerCase())
        )
    }
}
