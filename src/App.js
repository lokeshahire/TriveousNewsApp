import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  const PrivateRoute = ({ path, element }) => {
    return (
      <Route path={path}>
        <React.Fragment>{element}</React.Fragment>
      </Route>
    );
  };

  return (
    <Router>
      <div>
        <h1 className="app-title">Triveous News App</h1>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={NewsList} />
          <Route path="/news/:title" element={NewsDetail} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
