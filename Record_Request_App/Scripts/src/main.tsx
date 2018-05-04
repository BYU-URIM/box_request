import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import { App } from "./components/App";
import { mockUser } from "./res/mockuser";
import { boxData } from './res/boxdata';
import { folderData } from './res/folderdata';

const root = document.getElementById("root");

ReactDom.render(<App
                user={mockUser}
                boxData={boxData}
                folderData={folderData}
                />, root);
