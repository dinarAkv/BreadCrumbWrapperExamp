import React from "react";
import { withRouter, Link } from "react-router-dom";

import Crumb from "./Crumb";
import Dog2 from "./Dog2";

@withRouter
@Crumb("Dog1")
class Dog1 extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/dog1/dog2">Dog2</Link>
      </div>
    );
  }
}

export default Dog1;
