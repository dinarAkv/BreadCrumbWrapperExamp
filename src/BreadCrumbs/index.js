import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { setCurrentPath } from "./actions";

const mapStateToProps = state => ({
  breadcrumbs: state.breadcrumbs
});

const mapDispatchToProps = {
  onSetCurrentPath: setCurrentPath
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class BreadCrumbs extends React.PureComponent {
  componentDidMount() {
    const { location, onSetCurrentPath } = this.props;
    onSetCurrentPath(location.pathname);
  }
  componentDidUpdate() {
    const { location, onSetCurrentPath } = this.props;
    onSetCurrentPath(location.pathname);
  }

  render() {
    const { breadcrumbs: { paths, currentPath }, location } = this.props;
    const pathKeys = Object.keys(paths);
    const locationIndex = pathKeys.indexOf(location.pathname);
    const slicedKeys = pathKeys.slice(0, locationIndex + 1);

    return (
      <div
        style={{
          display: "block",
          textAlign: "left",
          marginBottom: "100px"
        }}
      >
        {slicedKeys.map((it, index) => {
          let arrow = "";
          if (index > 0) {
            arrow = " > ";
          }

          if (it === currentPath) {
            return <span key={it}>{`${arrow}${paths[it]}`}</span>;
          } else {
            return (
              <span key={it}>
                {arrow}
                <Link to={it}>{`${paths[it]}`}</Link>
              </span>
            );
          }
        })}
      </div>
    );
  }
}

export default BreadCrumbs;
