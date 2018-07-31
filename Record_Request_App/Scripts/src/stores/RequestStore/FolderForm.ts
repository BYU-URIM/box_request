import { observable, computed } from "mobx"

export class FolderForm {
    @observable private _folderInput: string = ""

    constructor(private _existingNames: Array<string>) {}

    @computed
    get folderName(): string {
        return this._folderInput
    }
    set folderName(_newName: string) {
        this._folderInput = _newName.trim()
    }

    @computed
    get errorMessage(): string {
        return this.inputIsValid
            ? undefined
            : this.folderName.length > 50
                ? "The new folder name must be less that 50 characters."
                : "Please use a Folder Name that does not already exist."
    }

    @computed
    get inputIsValid(): boolean {
        return (
            this.folderName.length < 50 &&
            !this._existingNames.includes(this.folderName.toLowerCase())
        )
    }
}
