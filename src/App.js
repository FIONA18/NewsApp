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
    return (
      <Router>
      <div>
        <NavBar/>
        <Routes>
        <Route
          path="/business"
          element={<News pageSize={8} category={'business'} country={'in'}/>}
        />
            <Route
                      path="/entertainment"
                      element={<News key='entertainment' pageSize={8} category={'entertainment'} country={'in'}/>}
                    />
            <Route
                      path="/general"
                      element={<News key='general' pageSize={8} category={'general'} country={'in'}/>}
                    />
            <Route
                      path="/health"
                      element={<News key='health' pageSize={8} category={'health'} country={'in'}/>}
                    />
            <Route
                      path="/science"
                      element={<News key='science' pageSize={8} category={'science'} country={'in'}/>}
                    />
            <Route
                      path="/sports"
                      element={<News key='sports' pageSize={8} category={'sports'} country={'in'}/>}
                    />
            <Route
                      path="/technology"
                      element={<News key='technology' pageSize={8} category={'technology'} country={'in'}/>}
                    />
        </Routes>
        
      </div>
      </Router>
      
    )
  }
}

