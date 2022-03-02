import { useState } from "react";
import { useHistory } from "react-router-dom";

// const update_url = "http://127.0.0.1:8000/"

const UpdateForm = ({user, usertitle, userDes, userid}) => {

    const history = useHistory()
    const [name, setName] = useState(user)
    const [title, setTitle] = useState(usertitle)
 const [description, setDescription] = useState(userDes)
const url =   `http://127.0.0.1:8000/${userid}/`
console.log(url);



 const handleForm = (e) => {

 
    e.preventDefault();

     console.log('workin');

     const data = {name, title, description}

     if(data){
         fetch(url, {
             method: 'PATCH', 
             headers:{ "Content-Type": "application/json" },
             body: JSON.stringify(data)

         }).then( () => history.push('/'))
     }
 }
    return ( 

        <>

            <h1>  Update Form</h1>




            
            <form >

                <label htmlFor=""> User Name</label>
                <input type="text" value={name} name="name"  id=""
                onChange={(e) => setName(e.target.value)}
                />


                <label htmlFor=""> Title</label>
                <input type="text" value={title} name="title"  id=""
                 onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor=""> Description</label>
                    <textarea name="description" id="" cols="30" value={description} rows="10"
                     onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                    <button onClick={handleForm}> submit</button>

            </form>


        </>

     );
}
 
export default UpdateForm;