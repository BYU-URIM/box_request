import * as React from "react"
import {
    DepartmentDropdown,
    BoxList,
    FolderList,
    Checkout,
} from "../../components"
import { inject, observer } from "mobx-react"
import { UIStore, CheckoutStore, UserStore, FormTypes } from "../../stores"
import { Pivot, PivotItem, Label } from "office-ui-fabric-react"
import "./styles.scss"
import { Loading } from "../Loading/Loading"

@inject("uiStore", "checkoutStore", "userStore")
@observer
export class RecordsRequest extends React.Component<{
    checkoutStore?: CheckoutStore
    userStore?: UserStore
    uiStore?: UIStore
}> {
    render() {
        const { uiStore, userStore, checkoutStore } = this.props
        return userStore.loading ? (
            <Loading />
        ) : (
            <>
                <DepartmentDropdown
                    options={uiStore.userDepartmentsAsOptions}
                    dropdownInfo={uiStore.dropdownInfo}
                    initializeBoxForm={() => (uiStore.form = FormTypes.NEW_BOX)}
                />
                {userStore.selectedDepartment && (
                    <div className={"ms-Grid-row box-request-row"}>
                        <Pivot
                            className={"ms-Grid-col ms-sm12"}
                            styles={{
                                root: {
                                    textAlign: "center",
                                },
                            }}
                        >
                            <PivotItem headerText="Request Records">
                                <div className={"ms-Grid-col ms-sm1"} />
                                <BoxList
                                    initializeFolderForm={() =>
                                        (uiStore.form = FormTypes.NEW_FOLDER)
                                    }
                                    dept={userStore.selectedDepartment}
                                />
                                <FolderList
                                    emptyMessage={
                                        userStore.selectedDepartment &&
                                        "Click on a box to view its folders"
                                    }
                                    box={userStore.selectedBox}
                                />
                                <Checkout
                                    dialogMessage={uiStore.dialogMessage}
                                    checkoutStore={checkoutStore}
                                />{" "}
                            </PivotItem>
                            <PivotItem headerText="Submit Records">
                                <div className={"ms-Grid-col ms-sm1"} />
                            </PivotItem>
                        </Pivot>
                    </div>
                )}
            </>
        )
    }
}
