import { observable, computed } from "mobx"

export class RequestForm {
    @observable private _deliveryInstructions: string = ""
    @observable private _urgent: boolean = false
    @observable private _permanent: boolean = false

    @computed
    get urgent(): boolean {
        return this._urgent
    }
    set urgent(value: boolean) {
        this._urgent = value
    }
    @computed
    get permanent(): boolean {
        return this._permanent
    }
    set permanent(value: boolean) {
        this._permanent = value
    }

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
