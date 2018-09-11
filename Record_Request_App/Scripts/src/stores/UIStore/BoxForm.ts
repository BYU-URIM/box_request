import { observable, computed } from "mobx"

export class BoxForm {
    @observable
    private _boxInput: string = ""

    constructor(private _existingNames: Array<string>) {}

    @computed
    get boxName(): string {
        return this._boxInput
    }
    set boxName(_newName: string) {
        this._boxInput = _newName.trim()
    }

    @computed
    get errorMessage(): string {
        return this.inputIsValid
            ? undefined
            : this.boxName.length > 50
                ? "The new box name must be less than 50 characters."
                : "Please use a box Name that does not already exist."
    }

    @computed
    get inputIsValid(): boolean {
        return (
            this.boxName.length < 50 &&
            !this._existingNames.includes(this.boxName.toLowerCase())
        )
    }
}
