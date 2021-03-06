import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CircularIndeterminate from "./components/utils/LazyLoad";
import "./styles/style.css";
const Checkout = lazy(() => import("./screens/Checkout"));
const Order = lazy(() => import("./screens/Order"));

function App() {
  return (
    <div className="app">
        <Suspense
          fallback={<CircularIndeterminate/>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Order}></Route>
            <Route path="/checkout" component={Checkout}></Route>
          </Switch>
          </Router>
        </Suspense>
    </div>
  );
}

export default App;
