import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./Landing";
import { Gallery } from "./Gallery";

export class Home extends React.Component {
  render() {
    return (
      <>
        <Router>
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
        </Router>
      </>
    );
  }
}
