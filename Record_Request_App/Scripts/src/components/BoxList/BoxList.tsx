import * as React from "react"
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    CheckboxVisibility,
} from "office-ui-fabric-react"
import { IBox, IFolderOrBox } from "../../models"
import "./styles.scss"
import { DetailListHeader } from "../"
import { observer } from "mobx-react"
import { RequestState } from "../../stores"
import { ItemStatusTypes } from "../../models/App"

export interface IBoxListProps {
    checkoutStatus(box: IFolderOrBox): string
    classNames: string
    requestState: RequestState
    initializeFolderForm(): void
    selectedBoxId: number
    addToCart(item): void
    box: IBox
    dialogMessage: string
    sortBoxes: Array<IFolderOrBox>
    cartContains(item): boolean
    canAddItemToCart(item): void
}

export const BoxList = observer((props: IBoxListProps) => {
    const columns: IColumn[] = [
        {
            key: "column1",
            name: "Box Number",
            fieldName: "boxNumber",
            className: "boxlist-row",
            minWidth: 80,
            maxWidth: 80,
            isResizable: true,
            ariaLabel: "Operations for name",
            onRender: (item: IBox) => <p>{item.BoxIdBarCode}</p>,
        },
        {
            key: "column2",
            name: "Description",
            className: "boxlist-row",
            fieldName: "checkoutBox",
            minWidth: 450,
            maxWidth: 450,
            isResizable: true,
            isMultiline: true,
            ariaLabel: "Operations for checkoutBox",
            onRender: (item: IBox) => {
                return (
                    <p className={"ms-fontSize-mPlus ms-fontWeight-light"}>
                        {item.BoxDescription}
                    </p>
                )
            },
        },
        {
            key: "column3",
            name: "",
            className: "boxlist-row",
            fieldName: "checkoutBox",
            minWidth: 110,
            maxWidth: 110,
            isResizable: true,
            ariaLabel: "Operations for checkoutBox",
            onRender: (item: IBox) => {
                return props.canAddItemToCart(item) ? (
                    <button
                        onClick={() => props.addToCart(item)}
                        className={"ms-fontSize-mPlus ms-fontWeight-light"}
                    >
                        {props.checkoutStatus(item)}
                    </button>
                ) : (
                    <p>{props.checkoutStatus(item)}</p>
                )
            },
        },
        {
            key: "column4",
            name: "",
            fieldName: "createFolder",
            className: "boxlist-row-createfolder",
            minWidth: 140,
            maxWidth: 160,
            isResizable: true,
            ariaLabel: "Operations for createFolder",
            onRender: (item: IBox) => {
                return (
                    <p
                        className={"blue ms-fontSize-mPlus ms-fontWeight-light"}
                        onClick={props.initializeFolderForm}
                    >
                        {props.selectedBoxId === item.BoxIdBarCode &&
                        props.dialogMessage.length === 0 &&
                        props.checkoutStatus(item) === ItemStatusTypes.available
                            ? "Create Folder"
                            : ""}
                    </p>
                )
            },
        },
    ]

    return (
        <div className={props.classNames}>
            {props.sortBoxes.length > 0 && (
                <>
                    <DetailListHeader title={"Boxes"} />
                    <DetailsList
                        items={props.sortBoxes}
                        columns={columns}
                        layoutMode={DetailsListLayoutMode.fixedColumns}
                        checkboxVisibility={CheckboxVisibility.hidden}
                        onRenderRow={(_props, defaultRender) => {
                            return (
                                <div
                                    key={_props.item.key}
                                    onClick={() => {
                                        if (props.dialogMessage.length === 0) {
                                            /////////////////////////
                                            props.requestState.box = _props.item
                                        }
                                        //////////////////////////////
                                    }}
                                    className={"boxlist-row"}
                                >
                                    {defaultRender({
                                        ..._props,
                                        className: props.canAddItemToCart(
                                            _props.item
                                        )
                                            ? "boxlist-row ms-fontSize-mPlus ms-fontWeight-light"
                                            : "boxlist-row-disabled ms-fontSize-mPlus ms-fontWeight-light",
                                    })}
                                </div>
                            )
                        }}
                    />
                </>
            )}
        </div>
    )
})

export default BoxList
