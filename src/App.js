import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
// import ImageCategory from "./components/ImageCategory/ImageCategory";
import InteriorMarking from "./components/MarkingCategory/InteriorMarking";
import ExteriorMarking from "./components/MarkingCategory/ExteriorMarking";
import AuctionSheetMarking from "./components/MarkingCategory/AuctionSheetMarking";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReportPage from "./components/ReportPage/ReportPage";

function App() {
  const isLogin = useSelector(state => state.isLogin);
  // const [cookies, setCookie] = useCookies(["user_token"]);
  // const user_token = cookies["user_token"];
  // console.log("user token ==>", user_token);
  return (
    <div className="app">
      {!isLogin ? (
        <Login />
      ) : (
        <>
          <Router>
            <Switch>
              <Route exact path="/">
                <InteriorMarking />
              </Route>
              <Route exact path="/exterior">
                <ExteriorMarking />
              </Route>
              <Route exact path="/auction-sheet">
                <AuctionSheetMarking />
              </Route>
              <Route exact path="/profile">
                <ReportPage />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
