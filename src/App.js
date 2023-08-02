import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : <Login />)}
    />
  );

  return (
    <Router>
      <div>
        <h1
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "#E81828",
          }}
        >
          Triveous News App
        </h1>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:title" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
