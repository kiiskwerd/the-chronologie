import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./Landing";
export class Home extends React.Component {
  render() {
    return (
      <>
      testing
      <Landing/>
        {/* <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route
              path="/gallery"
              element={
                <>
                  {" "}
                  <Gallery /> <Landing />{" "}
                </>
              }
            />
          </Routes>
        </Router> */}
      </>
    );
  }
}
