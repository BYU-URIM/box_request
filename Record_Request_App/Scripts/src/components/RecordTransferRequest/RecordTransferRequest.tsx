import * as React from "react"
import { CreatorStore } from "../../stores"
export interface IRecordTransferRequestProps {
    creatorStore: CreatorStore
}

export const RecordTransferRequest = (props: IRecordTransferRequestProps) => {
    return <div className={"record-transfer-request-wrapper"} />
}
