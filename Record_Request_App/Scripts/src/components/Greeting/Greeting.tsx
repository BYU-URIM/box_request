import * as React from 'react'
import './styles.scss'

export interface IGreeting {
  name: string
  departmentid: number[]
}

export function Greeting(props: IGreeting) {
  return (
    <div className={'headingStyle'}>
      <h2 className={'ms-font-l'}> Welcome, {props.name}</h2>
    </div>
  )
}
