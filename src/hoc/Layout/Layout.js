import React from "react";
import AppToolbar from "../../components/Navigation/AppToolbar/AppToolbar";

const layout = props => {
    return (
        <div>
            <AppToolbar/>
            <main>{props.children}</main>
        </div>
    );
};

export default layout;
