import React, { Suspense } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import AllQuote from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
// import QuoteDetail from "./pages/QuoteDetail";

const AllQuote = React.lazy(() => import("./pages/AllQuotes"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
