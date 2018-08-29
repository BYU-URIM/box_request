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
import { Box, DataStore } from "../../stores"

export interface IBoxListProps {
    initializeFolderForm(): void
    ds: DataStore
    // styleNames: string
}

export const BoxList = observer((props: IBoxListProps) => {
    const columns: IColumn[] = [
        {
            key: "column1",
            name: "Box ID",
            fieldName: "boxNumber",
            className: "boxlist-row",
            minWidth: 40,
            maxWidth: 80,
            isResizable: false,
            ariaLabel: "Operations for name",
            onRender: (item: Box) => {
                return (
                    <p className={"ms-fontWeight-semibold fontBlack"}>{item.BoxId}</p>
                )
            }
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
                    <p className={"ms-fontWeight-regular fontBlack"}>
                        {item.BoxDescription}
                    </p>
                )
            },
        },
    ]

    return (
        <div
            // className={
            //     "ms-Grid-col ms-sm4 scroll-container ms-fontSize-sPlus ms-fontWeight-semibold"
            // }
            className={"ms-Grid-col ms-sm4 scroll-container ms-fontSize-sPlus"}
        >
            {props.ds.selectedDepartment && (
                <ScrollablePane>
                    <DetailListHeader title={"Boxes"} />
                    <Sticky stickyPosition={StickyPositionType.Header}>
                        <CommandBar
                            farItems={
                                props.ds.selectedDepartment.selectedBox && [
                                    {
                                        key: "requestBox",
                                        iconProps: {
                                            iconName: "add",
                                        },
                                        onClick: props.ds.selectedBox.request,
                                        text: "Request",
                                        disabled: !props.ds.selectedBox.addable,
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
                                props.ds.selectedDepartment.selectedBox && [
                                    {
                                        key: "boxStatus",
                                        text: `Box Status: ${
                                            props.ds.selectedBox.status
                                        }`,
                                        // tslint:disable-next-line:max-line-length
                                       // className: classFromStatus
                                    },
                                ]
                            }
                        />
                    </Sticky>
                    <DetailsList
                        items={props.ds.selectedDepartment.boxes || []}
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
