import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// const url = 'http://127.0.0.1:8000/create/'
const url = 'http://127.0.0.1:8000/update/'



function Up({testid}) {
    const history = useHistory()
    const [F_name, setF_name] = useState('');
    const [L_name, setL_name] = useState('');
    const [email, setEmail] = useState('');
    const [p_number, setP_number] = useState('');
    


    const handleForm = (e) => {
        e.preventDefault();

        console.log('workinh');
        console.log(F_name);
        console.log(L_name);
        // console.log(body);

        const data = {F_name,L_name, email, p_number}

        if(F_name && L_name && email){
            fetch(url + testid,{
                method: 'PUT',
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(data)

            }) .then( () => {
                history.push('/')
                console.log('new blog added'); 
            })
        }



    }

  return( <div>

            <h1>Create</h1>


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

  </div>)
}

export default Up;
