import React from "react";
import { Router } from "@reach/router";
import Login from "./components/login.component";
import "./styles/main.css";
function App() {
    function Home() {
        return <Login />;
    }
    return (
        <>
            <Router>
                <Home path="/" />
            </Router>
        </>
    );
}

export default App;
