import * as React from "react"
import { PrimaryButton } from "office-ui-fabric-react"
import { AppModes } from "../../stores"
import "./styles.scss"
export interface IAppSelectorProps {
    switchApp(mode: AppModes): void
}
export const AppSelector = (props: IAppSelectorProps) => {
    return (
        <div className={"ms-Grid-row appselector-wrapper"}>
            <PrimaryButton
                text={"Box Request"}
                onClick={() => props.switchApp("BoxRequest")}
            />
            <PrimaryButton
                text={"Box Creator"}
                onClick={() => props.switchApp("BoxCreate")}
            />
        </div>
    )
}
