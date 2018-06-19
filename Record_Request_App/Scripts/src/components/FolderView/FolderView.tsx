import * as React from "react"
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    CheckboxVisibility,
} from "office-ui-fabric-react"
import { IFolder, IBox, IFolderOrBox } from "../../models/StoreModels"
import { ModalTypes } from "../../models"
import "./styles.scss"
import DetailListHeader from "../DetailListHeader/DetailListHeader"
import { observer } from "mobx-react"
import { RequestState } from "../../stores/RequestStore/RequestState"

export interface IFolderViewProps {
    requestState: RequestState
    cart: Array<IFolderOrBox>
    checkoutStatus(box: IFolderOrBox): string
    emptyMessage: string
    classNames: string
    cartContains(item: IFolderOrBox): boolean
}

// create column info that goes into fabric ui component

// ----------------------------------------------

export const FolderView = observer((props: IFolderViewProps) => {
    const columns: IColumn[] = [
        {
            key: "column1",
            name: "Folder Name",
            fieldName: "FolderName",
            minWidth: 80,
            maxWidth: 120,
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
            minWidth: 60,
            maxWidth: 170,
            isResizable: true,
            ariaLabel: "Operations for checkoutFolder",
            onRender: (item: IFolder) => {
                return (
                    // props.cart && (
                    props.checkoutStatus(item)[0] === "+" ? (
                        <button
                            onClick={() => props.requestState.addToCart(item)}
                            className={"ms-fontSize-mPlus ms-fontWeight-light"}
                            disabled={item.inCart}
                        >
                            {props.checkoutStatus(item)}
                        </button>
                    ) : (
                        props.checkoutStatus(item)
                    )
                )
            },
        },
        // {
        //     key: "column3",
        //     name: "",
        //     fieldName: "createFolder",
        //     minWidth: 40,
        //     maxWidth: 120,
        //     isResizable: true,
        //     ariaLabel: "Operations for createFolder",
        //     onRender: () => (
        //         <button
        //             className={"ms-fontSize-mPlus ms-fontWeight-light"}
        //             onClick={() =>
        //                 (props.requestState.modal = ModalTypes.create)
        //             }
        //         >
        //             Create Folder
        //         </button>
        //     ),
        // },
    ]
    const folderList =
        props.requestState.box &&
        props.requestState.folders.map((folder: IFolder) => ({
            key: folder.FolderIdBarCode,
            checkoutFolder: () => props.requestState.addToCart(folder),
            createFolder: () => (props.requestState.modal = ModalTypes.create),
            ...folder,
        }))

    return (
        <div className={props.classNames}>
            {props.requestState.box ? (
                <>
                    <DetailListHeader
                        title={`Folders in Box B${
                            props.requestState.box.BoxIdBarCode
                        }`}
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
                                        className: props.requestState.cartContains(
                                            _props.item
                                        )
                                            ? "folderrow folderrow-disabled ms-fontSize-mPlus ms-fontWeight-light"
                                            : "folderrow ms-fontSize-mPlus ms-fontWeight-light",
                                    })}
                                </div>
                            )}
                        />
                    </div>
                </>
            ) : (
                <DetailListHeader title={props.emptyMessage} />
            )}
        </div>
    )
})
