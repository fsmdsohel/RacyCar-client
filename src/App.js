import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import useAuth from "./hook/useAuth";
import About from "./pages/About";
import CarListing from "./pages/CarListing";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";

function App() {
  const { firebaseContext } = useAuth();
  const { isLoading, token } = firebaseContext;

  axios.defaults.baseURL = "https://racycar.herokuapp.com";
  // axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return (
    <>
      <div
        className={isLoading ? "spinner_container active" : "spinner_container"}
      >
        <div className="spinner_wrapper">
          <svg viewBox="0 0 100 100">
            <defs>
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="1.5"
                  floodColor="#fc6767"
                />
              </filter>
            </defs>
            <circle
              id="spinner"
              style={{
                fill: "transparent",
                stroke: "var(--main-color)",
                strokeWidth: "7px",
                strokeLinecap: "round",
                filter: "url(#shadow)",
              }}
              cx="50"
              cy="50"
              r="45"
            />
          </svg>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/car-listing">
          <CarListing />
        </Route>
        <Route path="/login">
          <Login signUp={false} />
        </Route>
        <Route path="/sign-up">
          <Login signUp={true} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
