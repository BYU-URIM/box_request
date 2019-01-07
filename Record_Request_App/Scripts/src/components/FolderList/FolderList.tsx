import * as React from "react"
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    CheckboxVisibility,
    Sticky,
    CommandBar,
    StickyPositionType,
    ScrollablePane,
} from "office-ui-fabric-react"
import "./styles.scss"
import { DetailListHeader } from ".."
import { observer } from "mobx-react"
import { Folder, Box } from "../../stores"

export interface IFolderListProps {
    emptyMessage: string
    box: Box
}

export const FolderList = observer((props: IFolderListProps) => {
    const columns: Array<IColumn> = [
        {
            key: "column1",
            name: "Folder Description",
            fieldName: "FolderDescription",
            minWidth: 60,
            maxWidth: 80,
            ariaLabel: "Operations for Description",
            onRender: (item: Folder) => {
                return <p>{`${item.FolderDescription}`}</p>
            },
        },
    ]
    return (
        <div className={"ms-Grid-col ms-sm3 scroll-container"}>
            {props.box && props.box.folders.length ? (
                <ScrollablePane>
                    <DetailListHeader
                        title={`Folders in Box ${props.box.BoxId}`}
                    />

                    <Sticky stickyPosition={StickyPositionType.Header}>
                        {console.log(props.box.selectedFolder)}
                        <CommandBar
                            farItems={
                                props.box.selectedFolder && [
                                    {
                                        key: "requestBox",
                                        iconProps: {
                                            iconName: "add",
                                        },
                                        onClick:
                                            props.box.selectedFolder.request,
                                        text: "Request",
                                        disabled: !props.box.selectedFolder
                                            .addable,
                                        style: {
                                            fontSize: 12,
                                        },
                                    },
                                ]
                            }
                            items={
                                props.box.selectedFolder && [
                                    {
                                        key: "folderStatus",
                                        text: `Status: ${
                                            props.box.selectedFolder.status
                                        }`,
                                        className: `${props.box.selectedFolder.status
                                            .split(" ")
                                            .join(
                                                "-"
                                            )}-folder commandBar-folderList`,
                                    },
                                ]
                            }
                        />
                    </Sticky>
                    <div>
                        <DetailsList
                            items={props.box.dataFromFolders || []}
                            columns={columns}
                            compact={true}
                            layoutMode={DetailsListLayoutMode.justified}
                            checkboxVisibility={CheckboxVisibility.hidden}
                            onActiveItemChanged={(_folder: Folder) =>
                                _folder.select()
                            }
                            onRenderRow={(_props, defaultRender) => (
                                <div
                                    key={_props.item.key}
                                    className={`folderList-row`}
                                >
                                    {defaultRender({
                                        ..._props,
                                        className: `${_props.item.status
                                            .split(" ")
                                            .join("-")}-folder-row`,
                                    })}
                                </div>
                            )}
                        />
                    </div>
                </ScrollablePane>
            ) : (
                <div className={"empty-message"}>
                    {
                        <DetailListHeader
                            title={
                                props.box
                                    ? "This box has no folders"
                                    : props.emptyMessage
                            }
                        />
                    }
                </div>
            )}
        </div>
    )
})

export default FolderList
