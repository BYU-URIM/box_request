import * as React from 'react'
import { FontClassNames } from '@uifabric/styling'

const headingStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '15px',
} as React.CSSProperties

export interface IGreeting {
  name: string
  departmentid: number[]
}

export function Greeting(props: IGreeting) {
  return (
    <div style={headingStyle}>
      <h2 className={'ms-font-l'}> Welcome, {props.name}</h2>
    </div>
  )
}
