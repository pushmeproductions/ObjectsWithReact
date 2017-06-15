import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Game from './Game'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello</h1>
      <Route exact path="/" component={Game} />
    </div>
  </Router>
)

export default App
