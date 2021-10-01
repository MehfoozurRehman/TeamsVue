import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import logo from "./Assets/logo.svg";
import main from "./Assets/main.mp4";
const Header = lazy(() => import("./Components/Header"));
const HomeScreens = lazy(() => import("./Screens/HomeScreens"));

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Suspense
      fallback={() => {
        return (
          <div className="loading-screen">
            <img
              src={logo}
              alt="logo-loading"
              className="loading-screen-logo"
            />
          </div>
        );
      }}
    >
      {isLoading ? (
        <div style={{ width: "100%", height: "90%", overflow: "hidden" }}>
          <video
            autoPlay={true}
            muted={true}
            style={{ width: "100%" }}
            onEnded={() => setIsLoading(false)}
          >
            <source src={main} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <HomeScreens />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </Suspense>
  );
}
