import * as React from "react"
import { initializeIcons } from "@uifabric/icons"
import { DepartmentDropdown, Greeting, RequestBuilder } from "../"
import "./styles.scss"
import { inject, observer } from "mobx-react"
import { RootStore } from "../../stores/RootStore/RootStore"
import { Fabric } from "office-ui-fabric-react"
import { IFolderOrBox } from "../../models/StoreModels"

initializeIcons()
@inject("rootStore")
@observer
export class App extends React.Component<any, any> {
    rootStore: RootStore

    render() {
        this.rootStore = this.props.rootStore
        const { requestStore } = this.rootStore
        const { currentUser } = this.rootStore.sessionStore

        return (
            <Fabric>
                <div className={"ms-Grid"}>
                    <div className={"ms-Grid-row"}>
                        <div className={"ms-Grid-col ms-sm4 ms-smPush8"}>
                            <Greeting
                                name={currentUser.name}
                                departmentid={currentUser.departments}
                            />
                        </div>
                    </div>
                    <div className={"ms-Grid-row"}>
                        <div className={"ms-Grid-col ms-sm4 ms-smPush4"}>
                            <DepartmentDropdown
                                mockUser={currentUser}
                                mockData={requestStore.boxes}
                                changeSelectedDep={(department: number) =>
                                    (requestStore.requestState.department = department)
                                }
                            />
                        </div>
                    </div>

                    <div className={"ms-Grid-row"}>
                        <RequestBuilder
                            folderForm={requestStore.folderForm}
                            requestForm={requestStore.requestForm}
                            requestState={requestStore.requestState}
                            requestIsUrgent={requestStore.requestIsUrgent}
                            updateDeliveryInstructions={
                                requestStore.updateDeliveryInstructions
                            }
                            updateIsUrgent={requestStore.updateIsUrgent}
                            updateIsPermament={requestStore.updateIsPermanent}
                            submitRequest={requestStore.submitRequest}
                            createFolder={requestStore.createFolder}
                            initializeFolderForm={requestStore.initializeFolderForm}
                            initializeRequestForm={requestStore.initializeRequestForm}
                            determineCheckoutType={
                                requestStore.determineCheckoutType}
                            canCreateFolder={requestStore.canCreateFolder}
                        />
                    </div>
                </div>
            </Fabric>
        )
    }
}
