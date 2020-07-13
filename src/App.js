import React from "react";
import useFetchData from "./hooks/useFetchData";

function App() {
    const res = useFetchData("https://mekvahan.com/api/android_intern_task", {
        mobile: "9999999999",
        password: "0123456789",
    });

    console.log("here", res);

    return <div className="App">Hello, World</div>;
}

export default App;
