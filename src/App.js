import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Rules from "./containers/Rules/Rules";
import Main from './containers/Main/Main';
import Transactions from './containers/Transactions/Transactions';
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    overrides: {
        // MuiTypography: {
        //   subheading: {
        //     color: "#fff"
        //   },
        //   colorTextSecondary: {
        //     color: "#fff"
        //   }
        // },
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
            light: "#e5ffff",
            main: "#b2dfdb",
            dark: "#82ada9",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ffffe5",
            main: "#ffecb3",
            dark: "#cbba83",
            contrastText: "#000"
        }
    }
});

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Layout>
                            <Switch>
                                <Route path="/transactions" component={Transactions}/>
                                <Route path="/rules" component={Rules}/>
                                <Route path="/" component={Main}/>
                            </Switch>
                        </Layout>
                    </div>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
