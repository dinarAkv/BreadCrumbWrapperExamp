import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addCrumb, deleteAllPathsAfterThis } from "./actions";

const mapDispatchToProps = {
  onAddPath: addCrumb,
  onDeletePathsAfterThis: deleteAllPathsAfterThis
};

const crumbDecorator = title => Component =>
  @withRouter
  @connect(null, mapDispatchToProps)
  class Crumb extends React.PureComponent {
    componentDidMount() {
      const { onAddPath, onDeletePathsAfterThis, match } = this.props;
      onDeletePathsAfterThis();
      onAddPath(match.url, title);
    }
    componentDidUpdate(prevProps) {
      const { onDeletePathsAfterThis } = this.props;
      onDeletePathsAfterThis();
    }
    render() {
      return <Component {...this.props} />;
    }
  };

export default crumbDecorator;
