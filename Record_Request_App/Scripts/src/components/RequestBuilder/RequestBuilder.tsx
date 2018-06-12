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
export interface IRequestBuilderProps {
  selectedItems: Map<number, IFolderAndBox>
  selectedDep: number
  selectedBox: IBoxDataObj | undefined
  isChecked: boolean
  modal: ModalTypes
  request: Map<number, IRequestObject>
  deliveryInstructions: string
  requestTypeToggle: boolean
  deliveryPriorityToggle: boolean
  folderNameVal: string
  folderNameError: string
  fmsData
  toggleModal(type: ModalTypes): void
  updateDeliveryInstructions(e): void
  updateDeliveryPriority(): void
  updateRequestType(): void
  submitRequest(e): void
  onNameChange(val): void
  onFolderCreateSubmit(box): void
  filteredBoxData: Array<IBoxDataObj>
  addItemToCheckout(e): void
  itemInCheckout(itemNum: number): boolean
  removeItemFromCheckout(itemRef: number): void
  determineCheckoutType(item: IFolderAndBox): string
  filteredFolderData: Array<IFolderDataObj>
  addFolder(x): void
  folderInCheckout(boxNumber: number): boolean
  selectBox(box: IBoxDataObj): void
}

export const RequestBuilder = (props: IRequestBuilderProps) => {
  return (
    <div>
      {props.modal === ModalTypes.submit && (
        <SubmitModal
          close={() => props.toggleModal(ModalTypes.none)}
          updateInstructions={e => props.updateDeliveryInstructions(e)}
          priority={props.updateDeliveryPriority}
          requestType={props.updateRequestType}
          submit={e => props.submitRequest(e)}
          selectedItems={props.selectedItems}
          deliveryInstructions={props.deliveryInstructions}
        />
      )}
      {props.modal === ModalTypes.create && (
        <CreateFolderModal
          closeModal={() => props.toggleModal(ModalTypes.none)}
          selectedBox={props.selectedBox.BoxIdBarCode}
          folderNameError={props.folderNameError}
          folderNameVal={props.folderNameVal}
          onNameChange={value => props.onNameChange(value)}
          submitFolder={box => props.onFolderCreateSubmit(box)}
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
          toggleModal={props.toggleModal}
          filteredData={props.filteredFolderData}
          selectedBox={props.selectedBox}
          addFolder={e => props.addItemToCheckout(e)}
          folderInCheckout={(itemNum: number) => props.itemInCheckout(itemNum)}
          checkoutStatus={item => props.determineCheckoutType(item)}
          emptyMessage={
            props.selectedDep !== 0 && "Click on a box to view its folders"
          }
          classNames={"ms-Grid-col ms-sm4"}
        />
        <Checkout
          selectedItems={props.selectedItems}
          type={props.isChecked ? "Box" : "Folder"}
          removeItemFromCheckout={r => props.removeItemFromCheckout(r)}
          toggleModal={props.toggleModal}
          classNames={"ms-Grid-col ms-sm3"}
        />
        <div className={"ms-Grid-col ms-sm1"} />
      </div>
    </div>
  )
}
