import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const urlDetails = 'http://127.0.0.1:8000/details/'
const urlDelete = 'http://127.0.0.1:8000/delete/'





const Details = () => {
const history = useHistory()

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
        setIsPending(false)
        setData(blogs)
    }
    const DeleteHAndle = () => {
        console.log('delete');
        console.log(urlDelete + id);
        fetch(urlDelete + id, {
            method: 'DELETE',
        }).then( () => {
            history.push('/')
            console.log(' item deleted');

        })
    }


    useEffect(() => {
        get_All_data()
    
      return () => {
        
      }
    }, [])

    let update = `/update/${id}`
    
    return (  

        <> Details
        
         <h1> {data.F_name}</h1>
         <h1> {data.L_name}</h1>

         <h1> {data.email}</h1>

         <h1> {data.created_at}</h1>

         <h2>{data.updated_at}</h2>


         <Link to={update}> <button >Update</button></Link>
         <button onClick={DeleteHAndle}>Delate</button>


        </>
    );
}
 
export default Details;