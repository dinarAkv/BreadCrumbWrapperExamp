import React from "react";
import { withRouter } from "react-router-dom";

import Crumb from "./Crumb";

@withRouter
@Crumb("Dog2")
class Dog2 extends React.PureComponent {
  render() {
    return <div>Dog3</div>;
  }
}

export default Dog2;
