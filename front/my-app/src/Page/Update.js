import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Up from "../Components/Up";
import UpdateForm from "../Components/UpdateForm";

const update_url = 'http://127.0.0.1:8000/details/'






const Update = () => {
    const {id} = useParams()    
    const url = update_url + id

    console.log(url);
    const [data, setData] = useState(false)

    const getUsers = async () => {
        const response = await fetch(url);
        // console.log(response)
        const users = await response.json();
        setData(users);
        console.log(users);
        // console.log(users);
      };


      useEffect(() => {
        
        getUsers()
      
        return () => {
          ;
        };
      }, []);


    return (

        <div>
            Update

            {data &&
             <UpdateForm  
            name={data.F_name} 
            lname={data.L_name}
            mail={data.email}
            phone={data.p_number}
            testid = {data.id}

             />}
        </div>
      );
}
 
export default Update;