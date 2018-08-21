import { observable, computed } from "mobx"

export class RequestForm {
    @observable
    private _deliveryInstructions: string = ""
    @observable
    urgent: boolean = false
    @observable
    permanent: boolean = false

    @computed
    get deliveryInstructions(): string {
        return this._deliveryInstructions
    }

    set deliveryInstructions(_newInstructions: string) {
        this._deliveryInstructions = _newInstructions.trim()
    }

    @computed
    get errorMessage(): string {
        return this.inputIsValid
            ? undefined
            : this.deliveryInstructions.length > 50
                ? "Input must be less than 50 characters."
                : "test"
    }

    @computed
    get inputIsValid(): boolean {
        return this.deliveryInstructions.length < 50
    }
}
