import * as React from "react"
import { IFolderAndBox, ModalTypes, IRequestObject } from "../../models"
import { IBoxDataObj, IFolderDataObj } from "../../models/MockData"
import {
    FolderView,
    BoxList,
    CreateFolderModal,
    SubmitModal,
    Checkout,
} from ".."
import "./styles.scss"
import { observer } from "mobx-react"
export interface IRequestBuilderProps {
    selectedItems: Array<IFolderAndBox>
    selectedDep: number
    selectedBox: IBoxDataObj | undefined
    modal: ModalTypes
    checkoutCart: Map<number, IRequestObject>
    deliveryInstructions: string
    requestIsUrgent: boolean
    folderNameVal: string
    folderNameError: string
    setModalType(type: ModalTypes): void
    updateDeliveryInstructions(e): void
    updateIsUrgent(): boolean
    updateIsPermament(): boolean
    submitRequest(e): void
    onNameChange(val): void
    createFolder(box): void
    filteredBoxData: Array<IBoxDataObj>
    addItemToCheckout(e): void
    itemInCheckout(itemNum: number): boolean
    removeItemFromCheckout(itemRef: number): void
    determineCheckoutType(item: IFolderAndBox): string
    filteredFolderData: Array<IFolderDataObj>
    addFolder(x): void
    selectBox(box: IBoxDataObj): void
    boxInCheckout: boolean
}

export const RequestBuilder = observer((props: IRequestBuilderProps) => {
    return (
        <div>
            {props.modal === ModalTypes.submit && (
                <SubmitModal
                    close={() => props.setModalType(ModalTypes.none)}
                    updateInstructions={e =>
                        props.updateDeliveryInstructions(e)
                    }
                    priority={props.updateIsUrgent}
                    requestType={props.updateIsPermament}
                    submit={e => props.submitRequest(e)}
                    selectedItems={props.selectedItems}
                    deliveryInstructions={props.deliveryInstructions}
                />
            )}
            {props.modal === ModalTypes.create && (
                <CreateFolderModal
                    closeModal={() => props.setModalType(ModalTypes.none)}
                    selectedBox={props.selectedBox.BoxIdBarCode}
                    folderNameError={props.folderNameError}
                    folderNameVal={props.folderNameVal}
                    onNameChange={value => props.onNameChange(value)}
                    submitFolder={box => props.createFolder(box)}
                />
            )}

            <div>
                <div className={"ms-Grid-col ms-sm1"} />
                <BoxList
                    boxData={props.filteredBoxData}
                    addBox={e => props.addItemToCheckout(e)}
                    openModal={(box: IBoxDataObj) => {
                        props.selectBox(box)
                    }}
                    boxInCheckout={(boxNum: number): boolean =>
                        props.itemInCheckout(boxNum)
                    }
                    checkoutStatus={item => props.determineCheckoutType(item)}
                    classNames={"ms-Grid-col ms-sm3"}
                />

                <FolderView
                    setModalType={props.setModalType}
                    filteredData={props.filteredFolderData}
                    selectedBox={props.selectedBox}
                    addFolder={e => props.addItemToCheckout(e)}
                    folderInCheckout={(itemNum: number) =>
                        props.itemInCheckout(itemNum)
                    }
                    checkoutStatus={item => props.determineCheckoutType(item)}
                    emptyMessage={
                        props.selectedDep !== 0 &&
                        "Click on a box to view its folders"
                    }
                    classNames={"ms-Grid-col ms-sm4"}
                    boxInCheckout={props.boxInCheckout}
                />
                <Checkout
                    selectedItems={props.selectedItems}
                    removeItemFromCheckout={r =>
                        props.removeItemFromCheckout(r)
                    }
                    setModalType={props.setModalType}
                    classNames={"ms-Grid-col ms-sm3"}
                />
                <div className={"ms-Grid-col ms-sm1"} />
            </div>
        </div>
    )
})
