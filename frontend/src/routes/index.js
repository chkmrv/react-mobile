/* eslint react/prefer-stateless-function: 0 */
import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import NotFound from '../components/NotFound'
import PageView from './App'

class IndexRoute extends React.Component {
  render () {
    return (
      <BrowserRouter {...this.props}>
        <Switch>
          <Route path='/page/:id' component={PageView} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default IndexRoute
