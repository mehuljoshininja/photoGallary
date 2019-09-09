import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gallary from './containers/Gallary'
import Favourite from './containers/Gallary/Layouts/Favourite'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Gallary} />
          <Route path='/favourite' component={Favourite} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
