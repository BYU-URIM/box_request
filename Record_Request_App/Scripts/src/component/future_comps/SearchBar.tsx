import * as React from "react"
import { TextField } from "office-ui-fabric-react";

export interface ISearchBarProps {
    handleFilterString(val: string): void
    filterString: string
}

export const SearchBar = (props: ISearchBarProps) => {
    return (
        <div>
          <TextField
            onChanged={(e)=>props.handleFilterString(e)}
            // onChange = {(e)=>props.handleFilterString(e.toString())}
            label="Filter by BoxId:"
            value={props.filterString}
            />
        </div>
      )
}