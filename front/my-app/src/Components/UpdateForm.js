// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
const url = 'http://127.0.0.1:8000/update/'


const UpdateForm = ({name, lname, mail, phone,  testid }) => {
    const {id} = useParams()
    const history = useHistory()
    const [F_name, setF_name] = useState(name);
    const [L_name, setL_name] = useState(lname);
    const [email, setEmail] = useState(mail);
    const [p_number, setP_number] = useState(phone);
    // console.log(name);

    // const url =   `http://127.0.0.1:8000/update/${testid}/ `
    // console.log(url);
    // console.log(url);
    const data = {F_name,L_name, email, p_number}

    const handleForm = (e) => {
        e.preventDefault();

        if(F_name && L_name && email ){
            fetch(url + testid, {
                method: 'PATCH',
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(data)

            }) .then( () => {
                history.push(`/${testid}`)
                console.log('uPDATE blog added'); 
            }).catch( (err) => {
                console.log(err);
            })
        }



    }

    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])
    
    return ( 

        

        <div>  Update Form


            
<form   onSubmit={handleForm}>
            <label htmlFor=""> First name</label>
            <input type="text" name="F_name" value={F_name} id=""
            onChange={(e) => setF_name(e.target.value) }
            />

            <label htmlFor=""> last name</label>
            <input type="text" name="L_name" value={L_name} id=""
            onChange={(e) => setL_name(e.target.value)}
            />

            <label htmlFor=""> email</label>
            <input type="text" name="email"  value={email} id="" 
            onChange={(e) => setEmail(e.target.value)}
            />

<label htmlFor=""> phone number</label>
            <input type="text" name="body"  value={p_number} id="" 
            onChange={(e) => setP_number(e.target.value)}
            />

            <button type='submit' onClick={handleForm}> submit</button>


            </form>
            
             </div>
     );
}
 
export default UpdateForm;