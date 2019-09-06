import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gallary from './containers/Gallary'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Gallary} />
          <Route path='/favourite' component={() => (<h1>Favourite images</h1>)} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
