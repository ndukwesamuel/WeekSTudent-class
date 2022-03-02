import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateForm from "../Components/UpdateForm";
const urlDetails = 'http://127.0.0.1:8000/'



const Update = () => {

    const {id} = useParams()
    const [data, setData] = useState(false)
    console.log(id);
    const url = urlDetails + id


    const get_All_data = async () => {
        const res = await fetch(url)
        const blogs = await res.json()
        setData(blogs.data)
        console.log(blogs.data);
    }


    useEffect(() => {
        get_All_data()
    
      return () => {
        
      }
    }, [])
    



    return (  


        
            <>

                <h1> Update</h1>

             <h1>    {id}</h1>

             


             {data && <UpdateForm  user={data.name}
                usertitle={data.title}
                userDes = {data.description}
                userid = {data._id}
             />}



            
            </>


    );
}
 
export default Update;