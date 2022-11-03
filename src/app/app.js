import React from "react";
import Users from "./layout/users";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./layout/login";
import Main from "./layout/main";
import NavBar from "./components/navbar";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/" component={Main} exact />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
