import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from '../layout'

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AppLayout} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
