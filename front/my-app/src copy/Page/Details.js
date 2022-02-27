import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const urlDetails = 'http://127.0.0.1:8000/api/v1/blog/'



const Details = () => {
    const {id} = useParams()
    console.log(id);
    const url = urlDetails + id
    console.log(url);

    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState([])

    const get_All_data = async () => {
        const res = await fetch(url)
        const blogs = await res.json()
        console.log(blogs);
        console.log(blogs.data);
        console.log(blogs.message);
        setIsPending(false)
        setData(blogs.data)
    }

    useEffect(() => {
        get_All_data()
    
      return () => {
        
      }
    }, [])
    
    return (  

        <> Details
        
         <h1> {data.name}</h1>
         <h1> {data.description}</h1>

         <h1> {data.title}</h1>

         <h1> {data.createdAt}</h1>

         <h2>{data.updatedAt}</h2>

        </>
    );
}
 
export default Details;