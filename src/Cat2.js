import React from "react";
import { withRouter } from "react-router-dom";

import Crumb from "./Crumb";

@withRouter
@Crumb("Cat2")
class Cat2 extends React.PureComponent {
  render() {
    return <div>Cat3</div>;
  }
}

export default Cat2;
