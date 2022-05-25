import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Nabar from "./component/Nabar";
import Register from "./component/Register";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/dashboard">
                    <Nabar />
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App