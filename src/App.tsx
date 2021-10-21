import React from "react";
import ProtectedPage from "./app/components/ProtectedPage/ProtectedPage";
import LoginPage from "./app/views/LogInPage";
import HomePage from "./app/views/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login" component={LoginPage} exact />
                    <Route
                        path="/"
                        render={(props) => (
                            <ProtectedPage {...props}>
                                <HomePage />
                            </ProtectedPage>
                        )}
                        exact
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
