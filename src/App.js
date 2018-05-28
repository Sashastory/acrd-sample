import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Rules from "./containers/Rules/Rules";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      subheading: {
        color: "#fff"
      },
      colorTextSecondary: {
        color: "#fff"
      }
    },
    // MuiTableCell: {
    //   root: {
    //     marginLeft: "24px",
    //     paddingLeft: "24px"
    //   },
    //   head: {
    //     color: "#fff",
    //     fontSize: "16px"
    //   },
    //   body: {
    //     color: "#fff",
    //     fontSize: "14px"
    //   }
    // },
  },
  palette: {
    primary: {
      light: "#52c7b8",
      main: "#009688",
      dark: "#00675b",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff8a50",
      main: "#ff5722",
      dark: "#c41c00",
      contrastText: "#fff"
    }
  }
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div>
            <Layout>
              <Switch>
                <Route path="/" component={Rules} />
              </Switch>
            </Layout>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
