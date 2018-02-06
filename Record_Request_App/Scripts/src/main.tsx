import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import { App } from "./component/App";

// in strict mode, mobx requires that all observable data members only be modified through explicit @action mutators

const root = document.getElementById("root");

ReactDom.render(<App />, root);
