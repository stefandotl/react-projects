import React from "react";
import ReactDom from "react-dom";

import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>
            <h2>Reviews</h2>
            <div className="underline"></div>
          </h2>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
