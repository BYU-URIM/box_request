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
            className: "boxlist-row",
            minWidth: 40,
            maxWidth: 80,
            isResizable: false,
            ariaLabel: "Operations for name",
            onRender: (item: Box) => <p>{item.BoxId}</p>,
        },
        {
            key: "column2",
            name: "Description",
            className: "boxlist-row",
            fieldName: "checkoutBox",
            minWidth: 80,
            maxWidth: 120,
            ariaLabel: "Operations for checkoutBox",
            onRender: (item: Box) => {
                return (
                    <p className={"ms-fontSize-sPlus ms-fontWeight-light"}>
                        {item.BoxDescription}
                    </p>
                )
            },
        },
    ]

    return (
        <div
            className={
                "ms-Grid-col ms-sm4 scroll-container ms-fontSize-sPlus ms-fontWeight-light"
            }
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
                                        style: {
                                            fontSize: 12,
                                        },
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
