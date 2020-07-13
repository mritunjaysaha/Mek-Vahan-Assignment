import React from "react";
import { Router } from "@reach/router";
import Login from "./components/login.component";
import "./styles/main.css";
function App() {
    function Home() {
        return <div>Hello, world</div>;
    }
    return (
        <>
            <Router>
                <Login exact path="/" />
                <Home path="/home" />
            </Router>
        </>
    );
}

export default App;
