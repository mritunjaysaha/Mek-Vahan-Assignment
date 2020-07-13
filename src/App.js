import React from "react";
import { Router } from "@reach/router";
import Login from "./components/login.component";
function App() {
    function Home() {
        return <Login />;
    }
    return (
        <>
            <div className="App">Hello, World</div>
            <Router>
                <Home path="/" />
            </Router>
        </>
    );
}

export default App;
