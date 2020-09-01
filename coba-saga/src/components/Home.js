import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <Fragment>
            <h1>This is Home</h1>
            <Link to="/chats">To Chat Feature</Link>
        </Fragment>
    );
}