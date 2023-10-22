import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize=8;
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Routes>
            <Route
              path="/business"
              element={<News pageSize={this.pageSize} category={'business'} country={'in'}/>}
            />
            <Route
                      path="/entertainment"
                      element={<News key='entertainment' pageSize={this.pageSize} category={'entertainment'} country={'in'}/>}
                    />
            <Route
                      path="/"
                      element={<News key='general' pageSize={this.pageSize} category={'general'} country={'in'}/>}
                    />
          
            <Route
                      path="/general"
                      element={<News key='general' pageSize={this.pageSize} category={'general'} country={'in'}/>}
                    />
            <Route
                      path="/health"
                      element={<News key='health' pageSize={this.pageSize} category={'health'} country={'in'}/>}
                    />
            <Route
                      path="/science"
                      element={<News key='science' pageSize={this.pageSize} category={'science'} country={'in'}/>}
                    />
            <Route
                      path="/sports"
                      element={<News key='sports' pageSize={this.pageSize} category={'sports'} country={'in'}/>}
                    />
            <Route
                      path="/technology"
                      element={<News key='technology' pageSize={this.pageSize} category={'technology'} country={'in'}/>}
                    />
        </Routes>
        
      </div>
      </Router>
      
    )
  }
}

