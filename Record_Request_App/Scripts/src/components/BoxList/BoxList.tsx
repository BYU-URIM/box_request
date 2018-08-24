import * as React from "react"
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    CheckboxVisibility,
    IDetailsRowProps,
} from "office-ui-fabric-react"
import "./styles.scss"
import { DetailListHeader } from ".."
import { observer } from "mobx-react"
import { Box, DataStore } from "../../stores"
import { ItemStatusTypes } from "../../models/App"

export interface IBoxListProps {
    initializeFolderForm(): void
    ds: DataStore
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
            onRender: (item: Box) => <p>{item.BoxId}</p>,
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
            onRender: (item: Box) => {
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
            fieldName: "checkoutBox",
            minWidth: 110,
            maxWidth: 110,
            isResizable: true,
            className: "boxlist-row",
            ariaLabel: "Operations for checkoutBox",
            onRender: (item: Box) => {
                return item.status === ItemStatusTypes.available &&
                    item.addable ? (
                    <button
                        onClick={item.request}
                        className="ms-fontSize-mPlus ms-fontWeight-light"
                    >
                        {item.status}
                    </button>
                ) : (
                    <p className="ms-fontSize-mPlus ms-fontWeight-light">
                        {item.status}
                    </p>
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
            onRender: (item: Box) => {
                return (
                    <p
                        className={"ms-fontSize-mPlus ms-fontWeight-light"}
                        onClick={props.initializeFolderForm}
                    >
                        {item.status === ItemStatusTypes.available
                            ? "Create Folder"
                            : ""}
                    </p>
                )
            },
        },
    ]

    return (
        <div
            className={
                "ms-Grid-col ms-sm5 scroll-container ms-fontSize-mPlus ms-fontWeight-light"
            }
        >
            {props.ds.selectedDepartment && (
                <>
                    <DetailListHeader title={"Boxes"} />
                    <DetailsList
                        items={props.ds.selectedDepartment.boxes || []}
                        columns={columns}
                        layoutMode={DetailsListLayoutMode.fixedColumns}
                        checkboxVisibility={CheckboxVisibility.hidden}
                        compact={true}
                        onRenderRow={(
                            _props: IDetailsRowProps,
                            defaultRender
                        ) => {
                            return (
                                <div
                                    key={_props.item.key}
                                    onClick={_props.item.select}
                                    className={"boxlist-row"}
                                >
                                    {defaultRender(_props)}
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
