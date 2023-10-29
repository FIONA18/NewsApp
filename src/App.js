import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 8;
  state={
    progress: 5
  }
  
  setProgress = (progress) => {
    this.setState({progress: progress})
  };
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={4}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  category={"business"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  category={"entertainment"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  category={"general"}
                  country={"in"}
                />
              }
            />

            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  category={"general"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  category={"health"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  category={"science"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  category={"sports"}
                  country={"in"}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
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
}
