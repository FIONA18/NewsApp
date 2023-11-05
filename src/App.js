import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=> {
  const apikey = process.env.REACT_APP_NEWS_API;
  const pageSize = 8;
  let [progress, setProgress] = useState(5);
  
    return (
      <Router>
        <div>
        
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={4}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  category={"business"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress} apikey={apikey}
                  key="entertainment"
                  pageSize={pageSize}
                  category={"entertainment"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={setProgress} apikey={apikey}
                  key="general"
                  pageSize={pageSize}
                  category={"general"}
                  country={"in"}
                />
              }
            />

            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress} apikey={apikey}
                  key="general"
                  pageSize={pageSize}
                  category={"general"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress} apikey={apikey}
                  key="health"
                  pageSize={pageSize}
                  category={"health"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress} apikey={apikey}
                  key="science"
                  pageSize={pageSize}
                  category={"science"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress} apikey={apikey}
                  key="sports"
                  pageSize={pageSize}
                  category={"sports"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress} apikey={apikey}
                  key="technology"
                  pageSize={pageSize}
                  category={"technology"}
                  country={"in"}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
 
}
export default App;
