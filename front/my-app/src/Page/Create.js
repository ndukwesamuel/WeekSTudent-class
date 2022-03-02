import { useState } from "react";
import { useHistory } from "react-router-dom";
const url = 'http://127.0.0.1:8000/create'

  
const Create = () => {
    const history = useHistory()
    const [name, setName] = useState('nie')
    const [title, setTitle] = useState('see me')
 const [description, setDescription] = useState(' looo')


    const handleForm = (e) => {
        e.preventDefault();
        // console.log('working');
        // console.log(e);
        // console.log(name, title,description );
        const data = {name, title, description}

        if(data){
            fetch(url, {
                method: 'POST', 
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(data)

            }).then( () => history.push('/'))
        }
    }


    return ( 

           <>
            <h1>  Create a Blog Post</h1>

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
 
export default Create;