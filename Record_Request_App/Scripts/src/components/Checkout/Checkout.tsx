import * as React from "react"
import {
    PrimaryButton,
    DetailsList,
    IColumn,
    CheckboxVisibility,
    IconButton,
    Icon,
    DetailsListLayoutMode,
} from "office-ui-fabric-react"
import "./styles.scss"
import { DetailListHeader } from ".."
import { observer } from "mobx-react"
import { IFolderOrBox } from "../../models/StoreModels"
import { CheckoutStore, Box } from "../../stores"
import { Folder } from "../../stores/DataStore/Folder"

export interface ICheckoutProps {
    dialogMessage: string
    checkoutStore: CheckoutStore
}

export const Checkout = observer((props: ICheckoutProps) => {
    const columns: IColumn[] = [
        {
            key: "column1",
            name: "Item",
            fieldName: "pendingItemRequests",
            minWidth: 50,
            maxWidth: 120,
            isResizable: false,
            ariaLabel: "Operations for pendingItemRequests",
            onRender: (item: IFolderOrBox) => (
                <div>
                    {item.FolderId ? (
                        <Icon iconName="FabricFolder" />
                    ) : (
                        <Icon iconName="GiftboxSolid" />
                    )}
                    <p>
                        {item.FolderId ? `-  ${item.FolderName}` : item.BoxId}
                    </p>
                </div>
            ),
        },
        {
            key: "column3",
            name: "Parent Box/Dep",
            fieldName: "parentBox",
            minWidth: 30,
            maxWidth: 90,
            isResizable: false,
            ariaLabel: "Operations for parentBox",
            onRender: (item: IFolderOrBox) => (
                <p>
                    {item.FolderId
                        ? `Box - ${item.BoxId}`
                        : `Dep - ${item.DeptId}`}
                </p>
            ),
        },
        {
            key: "column4",
            name: "",
            fieldName: "removeItem",
            minWidth: 40,
            isResizable: false,
            ariaLabel: "Operations for removeItem",
            onRender: (item: Folder | Box) => (
                <IconButton
                    iconProps={{
                        iconName: "cancel",
                    }}
                    className={"delete-icon"}
                    onClick={item.remove}
                    disabled={props.dialogMessage.length !== 0}
                />
            ),
        },
    ]
    return (
        <div className={`ms-Grid-col ms-sm3`}>
            {props.checkoutStore.cart.length > 0 && (
                <div>
                    <DetailListHeader title={"Checkout"} />
                    <DetailsList
                        items={props.checkoutStore.cart}
                        columns={columns}
                        compact={true}
                        layoutMode={DetailsListLayoutMode.fixedColumns}
                        checkboxVisibility={CheckboxVisibility.hidden}
                        onRenderRow={(_props, defaultRender) => (
                            <div key={_props.itemIndex}>
                                {defaultRender({
                                    ..._props,
                                    className: "checkout-row",
                                })}
                            </div>
                        )}
                    />
                    <div className={"checkout-submit"}>
                        <PrimaryButton
                            text={"Submit Request"}
                            onClick={props.checkoutStore.initializeRequestForm}
                            disabled={props.dialogMessage.length !== 0}
                        />
                    </div>
                </div>
            )}
        </div>
    )
})

export default Checkout
