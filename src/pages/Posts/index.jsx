const Posts = ({posts , error}) =>{

    if(error){
        return <h1>{error}</h1>
    }

    return <>
    <h1 className="text-2xl text-center">Posts</h1>
    <div className="flex gap-3 flex-wrap justify-center items-center">
    {posts.map((post)=>{
        return(
        <div key={post.id} className="w-[40%] m-auto bg-green-500 rounded-md leading-[30px] flex justify-center items-center">
            <h4 className="text-center">{post.title}</h4>
            <p>{post.body}</p>
        </div>)
    })}
    </div>
    </>




}

export default Posts

export async function getServerSideProps(context){
    try {

      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      if(!res.ok){
        throw new Error("an Error has been occured")
      }
      const data = await res.json()      
      return{props : {posts: data}}
      
    } catch (error) {
      return {props : {error: error.message}}
    }
  }