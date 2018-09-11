import * as React from "react"
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    CheckboxVisibility,
    CommandBar,
    ScrollablePane,
    Sticky,
    StickyPositionType,
    ContextualMenuItemType,
} from "office-ui-fabric-react"
import "./styles.scss"
import { DetailListHeader } from ".."
import { observer } from "mobx-react"
import { Box, Department } from "../../stores"

export interface IBoxListProps {
    initializeFolderForm(): void
    dept: Department
}

export const BoxList = observer((props: IBoxListProps) => {
    const columns: Array<IColumn> = [
        {
            key: "column1",
            name: "Box ID",
            fieldName: "boxNumber",
            className: "boxList-row",
            minWidth: 40,
            maxWidth: 80,
            isResizable: false,
            ariaLabel: "Operations for name",
            onRender: (_box: Box) => {
                return (
                    <p
                        className={`${_box.status
                            .split(" ")
                            .join("-")}-box-row`}
                    >
                        {_box.BoxId}
                    </p>
                )
            },
        },
        {
            key: "column2",
            name: "Description",
            className: "boxList-row",
            fieldName: "checkoutBox",
            minWidth: 80,
            maxWidth: 120,
            ariaLabel: "Operations for checkoutBox",
            onRender: (_box: Box) => {
                return (
                    <p
                        className={`${_box.status
                            .split(" ")
                            .join("-")}-box-row`}
                    >
                        {_box.BoxDescription}
                    </p>
                )
            },
        },
    ]

    return (
        <div
            className={"ms-Grid-col ms-sm4 scroll-container ms-fontSize-sPlus"}
        >
            {props.dept && (
                <ScrollablePane>
                    <DetailListHeader title={"Boxes"} />
                    <Sticky stickyPosition={StickyPositionType.Header}>
                        <CommandBar
                            farItems={
                                props.dept.selectedBox && [
                                    {
                                        key: "requestBox",
                                        iconProps: {
                                            iconName: "add",
                                        },
                                        onClick: props.dept.selectedBox.request,
                                        text: "Request",
                                        disabled: !props.dept.selectedBox
                                            .addable,
                                        style: {
                                            fontSize: 12,
                                        },
                                    },
                                    {
                                        key: "createFolder",
                                        iconProps: {
                                            iconName: "FabricNewFolder",
                                        },
                                        onClick: props.initializeFolderForm,
                                        text: "New Folder",
                                        style: {
                                            fontSize: 12,
                                        },
                                    },
                                ]
                            }
                            items={
                                props.dept.selectedBox && [
                                    {
                                        key: "boxStatus",
                                        text: `Box Status: ${
                                            props.dept.selectedBox.status
                                        }`,
                                        className: `${props.ds.selectedBox.status
                                            .split(" ")
                                            .join("-")}-box commandBar-boxList`,
                                    },
                                ]
                            }
                        />
                    </Sticky>
                    <DetailsList
                        items={props.dept.boxes || []}
                        columns={columns}
                        layoutMode={DetailsListLayoutMode.justified}
                        checkboxVisibility={CheckboxVisibility.hidden}
                        compact={true}
                        onActiveItemChanged={(_box: Box) => {
                            _box.select()
                        }}
                    />
                </ScrollablePane>
            )}
        </div>
    )
})

export default BoxList
