import React from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";

import Crumb from "./Crumb";
import Dog1 from "./Dog1";
import Dog2 from "./Dog2";
import Cat1 from "./Cat1";
import Cat2 from "./Cat2";

@withRouter
@Crumb("Home")
class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Link
                  style={{ display: "block", marginBottom: "20px" }}
                  to="/dog1"
                >
                  Dog1
                </Link>
                <Link style={{ display: "block" }} to="/cat1">
                  Cat1
                </Link>
              </div>
            )}
          />
          <Route exact path="/dog1" component={Dog1} />
          <Route path="/dog1/dog2" component={Dog2} />
          <Route exact path="/cat1" component={Cat1} />
          <Route path="/cat1/cat2" component={Cat2} />
        </Switch>
      </div>
    );
  }
}

export default Home;
