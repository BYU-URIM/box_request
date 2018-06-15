import * as React from "react"
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    CheckboxVisibility,
} from "office-ui-fabric-react"
import { IBoxDataObj } from "../../models/MockData"
import "./styles.scss"
import { IFolderAndBox } from "../../models"
import DetailListHeader from "../DetailListHeader/DetailListHeader"
import { observer } from "mobx-react"

export interface IBoxListProps {
    boxData: Array<IBoxDataObj>
    addBox(x): void
    openModal(i: IBoxDataObj): void
    boxInCheckout(boxNumber: number): boolean
    checkoutStatus(box: IFolderAndBox): string
    classNames: string
}

// --------------------------------------------------------------------------

export const BoxList = observer((props: IBoxListProps) => {
    const columns: IColumn[] = [
        {
            key: "column1",
            name: "Box Number",
            fieldName: "boxNumber",
            minWidth: 40,
            maxWidth: 70,
            isResizable: true,
            ariaLabel: "Operations for name",
            onRender: (item: IBoxDataObj) => <p>{`B${item.BoxIdBarCode}`}</p>,
        },
        {
            key: "column2",
            name: "",
            fieldName: "checkoutBox",
            minWidth: 40,
            maxWidth: 150,
            isResizable: true,
            ariaLabel: "Operations for checkoutBox",
            onRender: (item: IBoxDataObj) => {
                return props.checkoutStatus(item as IFolderAndBox)[0] ===
                    "+" ? (
                    <button
                        onClick={() => props.addBox(item)}
                        className={"ms-fontSize-mPlus ms-fontWeight-light"}
                    >
                        {props.checkoutStatus(item as IFolderAndBox)}
                    </button>
                ) : (
                    props.checkoutStatus(item as IFolderAndBox)
                )
            },
        },
    ]

    return (
        <div className={props.classNames}>
            {props.boxData.length > 0 && (
                <>
                    <DetailListHeader title={"Boxes"} />
                    <DetailsList
                        items={props.boxData}
                        columns={columns}
                        layoutMode={DetailsListLayoutMode.fixedColumns}
                        checkboxVisibility={CheckboxVisibility.hidden}
                        onRenderRow={(_props, defaultRender) => (
                            <div
                                key={_props.item.key}
                                onClick={() => {
                                    props.openModal(_props.item)
                                }}
                            >
                                {defaultRender({
                                    ..._props,
                                    className:
                                        props.boxInCheckout(
                                            _props.item.BoxIdBarCode
                                        ) === true
                                            ? "boxrow boxrow-disabled ms-fontSize-mPlus ms-fontWeight-light"
                                            : "boxrow ms-fontSize-mPlus ms-fontWeight-light",
                                })}
                            </div>
                        )}
                    />
                </>
            )}
        </div>
    )
})
