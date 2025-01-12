import { createFileRoute ,useLoaderData} from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$id')({
  component: RouteComponent,
  loader: async({params})=>{
    const id = params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok) throw Error();
    const data = await response.json();
    return {data};
  },
  pendingComponent:()=><div>Loading...</div>,
  errorComponent:()=><div>there was an error</div>
})


function RouteComponent() {
  const {data} = useLoaderData({from: "/posts/$id"})
  return <div>
<h6>{data.title}</h6>
<h4>{data.body}</h4>
  </div>
}
