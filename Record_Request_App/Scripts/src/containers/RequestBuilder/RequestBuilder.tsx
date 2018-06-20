import * as React from "react"
import { ModalTypes } from "../../models"

import "./styles.scss"
import { observer } from "mobx-react"
import { FolderForm } from "../../stores/RequestStore/FolderForm"
import { RequestForm } from "../../stores/RequestStore/RequestForm";
import { RequestState } from "../../stores/RequestStore/RequestState"
import { IFolderOrBox } from "../../models/StoreModels"
import {
    SubmitModal,
    CreateFolderModal,
    BoxList,
    Checkout,
    FolderView,
} from "../../components"
export interface IRequestBuilderProps {
    requestState: RequestState
    requestIsUrgent: boolean
    folderForm: FolderForm
    requestForm: RequestForm
    updateDeliveryInstructions(e): void
    updateIsUrgent(): boolean
    updateIsPermament(): boolean
    submitRequest(e): void
    initializeFolderForm(): void
    initializeRequestForm(): void
    createFolder(): void
    determineCheckoutType(item: IFolderOrBox): string
}

export const RequestBuilder = observer((props: IRequestBuilderProps) => {
    return (
        <div>
            {props.requestForm &&
                props.requestState.modal === ModalTypes.submit && (
                    <SubmitModal
                        priority={props.updateIsUrgent}
                        requestType={props.updateIsPermament}
                        submit={e => props.submitRequest(e)}
                        requestState={props.requestState}
                        requestForm={props.requestForm}
                    />
                )}
            {props.folderForm &&
                props.requestState.modal === ModalTypes.create && (
                    <CreateFolderModal
                        requestState={props.requestState}
                        folderForm={props.folderForm}
                        createFolder={props.createFolder}
                    />
                )}

            <div>
                <div className={"ms-Grid-col ms-sm2"} />
                <BoxList
                    cartContains={(item: IFolderOrBox) =>
                        props.requestState.cartContains(item)
                    }
                    initializeFolderForm={props.initializeFolderForm}
                    requestState={props.requestState}
                    checkoutStatus={item => props.determineCheckoutType(item)}
                    classNames={"ms-Grid-col ms-sm3"}
                    boxes={props.requestState.boxes}
                    selectedBoxId={props.requestState.box ?  props.requestState.box.BoxIdBarCode : 0}
                />

                <FolderView
                    cartContains={(item: IFolderOrBox) =>
                        props.requestState.cartContains(item)
                    }
                    cart={props.requestState.cart}
                    checkoutStatus={item => props.determineCheckoutType(item)}
                    emptyMessage={
                        props.requestState.department !== undefined &&
                        "Click on a box to view its folders"
                    }
                    classNames={"ms-Grid-col ms-sm3"}
                    requestState={props.requestState}
                />
                <Checkout
                    requestState={props.requestState}
                    classNames={"ms-Grid-col ms-sm2"}
                    initializeRequestForm={props.initializeRequestForm}
                />
                <div className={"ms-Grid-col ms-sm2"} />
            </div>
        </div>
    )
})
