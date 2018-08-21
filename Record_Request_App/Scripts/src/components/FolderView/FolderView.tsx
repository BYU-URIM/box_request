import * as React from "react"
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    CheckboxVisibility,
} from "office-ui-fabric-react"
import { IFolder, IFolderOrBox, IBox } from "../../models/StoreModels"
import { ItemStatusTypes } from "../../models"
import "./styles.scss"
import { DetailListHeader } from ".."
import { observer } from "mobx-react"
import { Box, DataStore } from "../../stores"
import { Folder } from "../../stores/DataStore/Folder"

export interface IFolderViewProps {
    emptyMessage: string
    ds: DataStore
}

export const FolderView = observer((props: IFolderViewProps) => {
    const columns: IColumn[] = [
        {
            key: "column1",
            name: "Folder Name",
            fieldName: "FolderName",
            minWidth: 60,
            maxWidth: 100,
            isResizable: true,
            ariaLabel: "Operations for name",
            onRender: (item: Folder) => {
                return <p>{`${item.FolderName}`}</p>
            },
        },
        {
            key: "column2",
            name: "",
            fieldName: "checkoutFolder",
            className: "folderrow",
            minWidth: 40,
            maxWidth: 150,
            isResizable: true,
            ariaLabel: "Operations for checkoutFolder",
            onRender: (item: Folder) => {
                return item.status === ItemStatusTypes.available &&
                    item.addable ? (
                    <button
                        onClick={item.request}
                        className={"ms-fontSize-mPlus ms-fontWeight-light"}
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
    ]
    return (
        <div className={"ms-Grid-col ms-sm2"}>
            {props.ds.selectedBox ? (
                <>
                    <DetailListHeader
                        title={`Folders in Box B${props.ds.selectedBox.BoxId}`}
                    />
                    <div>
                        <DetailsList
                            items={props.ds.selectedBox.dataFromFolders || []}
                            columns={columns}
                            compact={true}
                            layoutMode={DetailsListLayoutMode.fixedColumns}
                            checkboxVisibility={CheckboxVisibility.hidden}
                            onRenderRow={(_props, defaultRender) => (
                                <div
                                    key={_props.item.key}
                                    className={"folderrow"}
                                >
                                    {defaultRender(_props)}
                                </div>
                            )}
                        />
                    </div>
                </>
            ) : (
                <div className={"empty-message"}>
                    {<DetailListHeader title={props.emptyMessage} />}
                </div>
            )}
        </div>
    )
})

export default FolderView
