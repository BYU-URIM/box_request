import * as React from "react"
import { ModalTypes } from "../../models"
import { IBox, IFolder, IFolderOrBox } from "../../models/StoreModels"
import {
    FolderView,
    BoxList,
    CreateFolderModal,
    SubmitModal,
    Checkout,
} from ".."
import "./styles.scss"
import { observer } from "mobx-react"
import { FolderForm } from "../../stores/RequestStore/FolderForm"
import { RequestState } from "../../stores/RequestStore/RequestState"
export interface IRequestBuilderProps {
    requestState: RequestState
    deliveryInstructions: string
    requestIsUrgent: boolean
    folderForm: FolderForm
    updateDeliveryInstructions(e): void
    updateIsUrgent(): boolean
    updateIsPermament(): boolean
    submitRequest(e): void
    createFolder(): void
    determineCheckoutType(item: IFolderOrBox): string
}

export const RequestBuilder = observer((props: IRequestBuilderProps) => {
    return (
        <div>
            {props.requestState.modal === ModalTypes.submit && (
                <SubmitModal
                    updateInstructions={(e: string) =>
                        props.updateDeliveryInstructions(e)
                    }
                    priority={props.updateIsUrgent}
                    requestType={props.updateIsPermament}
                    submit={e => props.submitRequest(e)}
                    requestState={props.requestState}
                    deliveryInstructions={props.deliveryInstructions}
                />
            )}
            {props.folderForm &&
                props.requestState.modal === ModalTypes.create && (
                    <CreateFolderModal
                        requestState={props.requestState}
                        folderForm={props.folderForm}
                        submitFolder={props.createFolder}
                    />
                )}

            <div>
                <div className={"ms-Grid-col ms-sm1"} />
                <BoxList
                    cartContains={(item: IFolderOrBox) =>
                        props.requestState.cartContains(item)
                    }
                    requestState={props.requestState}
                    checkoutStatus={item => props.determineCheckoutType(item)}
                    classNames={"ms-Grid-col ms-sm3"}
                    boxes={props.requestState.boxes}
                />

                <FolderView
                    cartContains={(item: IFolderOrBox) =>
                        props.requestState.cartContains(item)
                    }
                    cart={props.requestState.cart}
                    checkoutStatus={item => props.determineCheckoutType(item)}
                    emptyMessage={
                        props.requestState.department !== 0 &&
                        "Click on a box to view its folders"
                    }
                    classNames={"ms-Grid-col ms-sm4"}
                    requestState={props.requestState}
                />
                <Checkout
                    requestState={props.requestState}
                    classNames={"ms-Grid-col ms-sm3"}
                />
                <div className={"ms-Grid-col ms-sm1"} />
            </div>
        </div>
    )
})
