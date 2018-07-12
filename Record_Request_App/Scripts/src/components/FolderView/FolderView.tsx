import * as React from "react"
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    CheckboxVisibility,
} from "office-ui-fabric-react"
import { IFolder, IFolderOrBox, IBox } from "../../models/StoreModels"
import { ModalTypes, ItemStatusTypes } from "../../models"
import "./styles.scss"
import { DetailListHeader } from ".."
import { observer } from "mobx-react"
import { RequestState } from "../../stores"

export interface IFolderViewProps {
    cart: Array<IFolderOrBox>
    checkoutStatus(item: IFolderOrBox): string
    emptyMessage: string
    classNames: string
    canAddItem(item: IFolderOrBox): boolean
    addToCart(item: IFolderOrBox): void
    box: IBox
    folders: Array<IFolder>
    modal: ModalTypes
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
            onRender: (item: IFolder) => {
                return <p>{`${item.FolderName}`}</p>
            },
        },
        {
            key: "column2",
            name: "",
            fieldName: "checkoutFolder",
            minWidth: 40,
            maxWidth: 150,
            isResizable: true,
            ariaLabel: "Operations for checkoutFolder",
            onRender: (item: IFolder) => {
                return props.canAddItem(item) ? (
                    <button
                        onClick={() => props.addToCart(item)}
                        className={"ms-fontSize-mPlus ms-fontWeight-light"}
                    >
                        {props.checkoutStatus(item)}
                    </button>
                ) : (
                    props.checkoutStatus(item)
                )
            },
        },
    ]
    const folderList =
        props.box &&
        props.folders.map((folder: IFolder) => {
            return {
                key: folder.FolderIdBarCode,
                checkoutFolder: () => props.addToCart(folder),
                createFolder: () => (props.modal = ModalTypes.create),
                ...folder,
            }
        })

    return (
        <div className={props.classNames}>
            {props.box ? (
                <>
                    <DetailListHeader
                        title={`Folders in Box B${props.box.BoxIdBarCode}`}
                    />
                    <div>
                        <DetailsList
                            items={folderList}
                            columns={columns}
                            compact={true}
                            layoutMode={DetailsListLayoutMode.fixedColumns}
                            checkboxVisibility={CheckboxVisibility.hidden}
                            onRenderRow={(_props, defaultRender) => (
                                <div key={_props.item.key}>
                                    {defaultRender({
                                        ..._props,
                                        className: props.canAddItem(_props.item)
                                            ? "folderrow ms-fontSize-mPlus ms-fontWeight-light"
                                            : "folderrow folderrow-disabled ms-fontSize-mPlus ms-fontWeight-light",
                                    })}
                                </div>
                            )}
                        />
                    </div>
                </>
            ) : (
                <div className={"empty-message"}>
                    <DetailListHeader title={props.emptyMessage} />
                </div>
            )}
        </div>
    )
})
