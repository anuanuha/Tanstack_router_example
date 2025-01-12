import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'


export const Route = createLazyFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();
  return <div>
    <h1>lazy contact page</h1>
    <button onClick={()=>navigate({to:"/about"})}>Navigate to about page</button>
  </div>
}
