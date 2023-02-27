import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  return (
    <div key="App">
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Login/>}
                />
                <Route
                    path="/Home"
                    element={<Home/>}
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
