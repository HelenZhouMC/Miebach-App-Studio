import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import Capacity from "./screens/Capacity";
import Power from "./screens/Power";
import Cost from "./screens/Cost";
import Test from "./screens/test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/capacity-management-with-forecast"
          element={<Capacity />}
        />
        <Route path="/power-of-ai" element={<Power />} />
        <Route path="/cost-to-serve-optimization" element={<Cost />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
