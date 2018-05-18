import React, {Component} from 'react';
import AppToolbar from '../../components/Navigation/AppToolbar/AppToolbar';
import MainToolbar from '../../components/Navigation/MainToolbar/MainToolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Layout extends Component {

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppToolbar/>
                    <MainToolbar/>
                    <main>
                        {this.props.children}
                    </main>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Layout;