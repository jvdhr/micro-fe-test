import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Btn = React.lazy(() => import('pouriversal/Btn'));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h2 className="text-blue-700">This is a Module from React.</h2>
    <Suspense fallback={<>Loading...</>}>
      <Btn />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
