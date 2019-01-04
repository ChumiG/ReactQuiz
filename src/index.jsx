import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

import Main from "./Main";
import Hub from "./hub";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

// App css
//import "style!css!applicationStyles";

ReactDOM.render(<Hub />, document.getElementById("root"));
