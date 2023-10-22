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
  
  render() {
    const pageSize=8;
    return (
      <Router>
      <div>
        <NavBar/>
        <Routes>
            <Route
              path="/business"
              element={<News pageSize={pageSize} category={'business'} country={'in'}/>}
            />
            <Route
                      path="/entertainment"
                      element={<News key='entertainment' pageSize={pageSize} category={'entertainment'} country={'in'}/>}
                    />
            <Route
                      path="/"
                      element={<News key='general' pageSize={pageSize} category={'general'} country={'in'}/>}
                    />
          
            <Route
                      path="/general"
                      element={<News key='general' pageSize={pageSize} category={'general'} country={'in'}/>}
                    />
            <Route
                      path="/health"
                      element={<News key='health' pageSize={pageSize} category={'health'} country={'in'}/>}
                    />
            <Route
                      path="/science"
                      element={<News key='science' pageSize={pageSize} category={'science'} country={'in'}/>}
                    />
            <Route
                      path="/sports"
                      element={<News key='sports' pageSize={pageSize} category={'sports'} country={'in'}/>}
                    />
            <Route
                      path="/technology"
                      element={<News key='technology' pageSize={pageSize} category={'technology'} country={'in'}/>}
                    />
        </Routes>
        
      </div>
      </Router>
      
    )
  }
}

