import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppToolbar from "../../components/Navigation/AppToolbar/AppToolbar";
import MainToolbar from "../../components/Navigation/MainToolbar/MainToolbar";
import { withTheme } from "@material-ui/core/styles";

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppToolbar />
        <MainToolbar />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
