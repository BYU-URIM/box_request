import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Router } from 'react-router-dom'
import { App } from './components/'
import { folderData, mockUser, boxData } from './res/'
import { DataService } from './services/DataService'

const root = document.getElementById('root')

ReactDom.render(
  <App
    dataService={new DataService()}
    user={mockUser}
    boxData={boxData}
    folderData={folderData}
  />,
  root
)
