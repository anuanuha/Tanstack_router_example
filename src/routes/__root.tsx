import * as React from 'react'
import { Outlet, createRootRoute ,Link} from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Link>Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
      <div>
        <h1>footer section</h1>
      </div>
    </React.Fragment>
  )
}
