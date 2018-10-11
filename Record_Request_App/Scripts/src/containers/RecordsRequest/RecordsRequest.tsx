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

@inject("uiStore", "checkoutStore", "userStore")
@observer
export class RecordsRequest extends React.Component<{
    checkoutStore?: CheckoutStore
    userStore?: UserStore
    uiStore?: UIStore
}> {
    render() {
        const { uiStore, userStore, checkoutStore } = this.props
        return userStore.loading ? null : (
            <>
                <div className={"ms-Grid-row"}>
                    <div className={"ms-Grid-col ms-sm4 ms-smPush4"}>
                        <DepartmentDropdown
                            handleChanged={(id: number) =>
                                userStore.departments
                                    .find(_dep => _dep.id === id)
                                    .select()
                            }
                            options={uiStore.userDepartmentsAsOptions}
                            dropdownInfo={uiStore.dropdownInfo}
                            initializeBoxForm={() =>
                                (uiStore.form = FormTypes.NEW_BOX)
                            }
                        />
                    </div>
                </div>
                {userStore.selectedDepartment && (
                    <div className={"ms-Grid-row box-request-row"}>
                        <Pivot
                            styles={{
                                root: {
                                    display: "block",
                                    textAlign: "center",
                                    marginBottom: "32px",
                                },
                            }}
                            onLinkClick={(a, b) => {
                                console.log(a, b)
                            }}
                        >
                            <PivotItem linkText="Request Records">
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
                            <PivotItem linkText="Submit Records">
                                <div className={"ms-Grid-col ms-sm1"} />
                            </PivotItem>
                        </Pivot>
                    </div>
                )}
            </>
        )
    }
}
