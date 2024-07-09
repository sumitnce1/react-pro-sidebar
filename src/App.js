import React from "react";
import MyProSidebar from "./Components/Sidebar/MyProSidebar";
import Dashboard from "./Pages/Dashboard";
import Team from "./Pages/Team";
import Tasks from "./Pages/Tasks";
import Tournaments from "./Pages/Tournaments";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/react-pro-sidebar">
      <div className="App">
        {/* Render MyProSidebar only when not on /login or /signup routes */}
        <Routes>
          <Route path="/" element={<MyProSidebar />} />
          <Route path="/team" element={<MyProSidebar />} />
          <Route path="/tasks" element={<MyProSidebar />} />
          <Route path="/tournaments" element={<MyProSidebar />} />
          <Route path="/profile" element={<MyProSidebar />} />
        </Routes>

        <Routes>
          {/* Main content routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/profile" element={<Profile />} />

          {/* Non-sidebar routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;