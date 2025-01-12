import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createRouter, RouterProvider,Link} from "@tanstack/react-router";
import {routeTree} from "./routeTree.gen";
const router = createRouter({routeTree,
  defaultNotFoundComponent:()=>(
    <div>
      <h1>:/ sorry this page doesn't exist!</h1>
      <Link to="/">Go Home</Link>
    </div>
  ),});


declare module "@tanstack/react-router"{
  interface Register{
    router : typeof router;
  }
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
