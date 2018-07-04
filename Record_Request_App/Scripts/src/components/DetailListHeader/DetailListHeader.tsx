import * as React from "react"
import "./styles.scss"

export interface IDetailListHeaderProps {
    title: string
}

export const DetailListHeader = (props: IDetailListHeaderProps) => (
    <div className={"ms-modalExample-header"}>
        <h2 className={"ms-font-xl center"}>{props.title}</h2>
    </div>
)
