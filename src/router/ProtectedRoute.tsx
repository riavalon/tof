import React from 'react'
import { Route, Redirect } from 'react-router'
import { AuthContext } from '../App'

export type protectedRouteProps = {
  path: string;
  children: React.ReactElement;
}

const ProtectedRoute = ({ path, children }: protectedRouteProps) => (
  <AuthContext.Consumer>
    {value => value.isAuthorized ? (
      <Route path={path}>
        {children}
      </Route>
    ) : (
      <Redirect to="/login" />
    )}
  </AuthContext.Consumer>
)

export default ProtectedRoute