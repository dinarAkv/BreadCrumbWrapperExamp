import React from "react";
import { withRouter, Link } from "react-router-dom";

import Crumb from "./Crumb";

@withRouter
@Crumb("Cat1")
class Cat1 extends React.PureComponent {
  render() {
    return <Link to="/cat1/cat2">Cat2</Link>;
  }
}

export default Cat1;
