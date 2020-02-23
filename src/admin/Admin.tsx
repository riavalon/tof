import React from 'react'
import { BrowserRouter as Router, Route, useParams, NavLink } from 'react-router-dom'

import './Admin.styles.scss'

const AdminTopic = () => {
  const params = useParams<{ adminTopicID: string }>()
  console.log(params)
  return (
    <div>
      <h2>Admin Topic #{params.adminTopicID}</h2>
    </div>
  )
} 

export type adminProps = {
  user: Object,
}

const Admin = ({ user }: adminProps) => {
  return (
    <div className="page-container">
      <Router>
        <div className="tof-admin">
          <ul className="tof-admin__side-nav">
              <li>
                <NavLink activeClassName="active" to="/admin/posts">Posts</NavLink>
              </li>

              <li>
                <NavLink activeClassName="active" to="/admin/fungi">Fungi</NavLink>
              </li>

              <li>
                <NavLink activeClassName="active" to="/admin/motd">MotD</NavLink>
              </li>
          </ul>
          <div className="tof-admin__nav-content">
            <Route path={`/admin/:adminTopicID`} component={AdminTopic} />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default Admin