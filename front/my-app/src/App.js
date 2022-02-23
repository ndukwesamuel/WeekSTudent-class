
import React, { useEffect, useState } from 'react';

const url = 'http://127.0.0.1:8000/api/v1/blog/'
const App = () => {

  
    const [first, setfirst] = useState([])

    const get_details = async () => {
      const res = await fetch(url);
      const users = await res.json()
      setfirst(users.data)
      console.log(users.data);
  }


  useEffect(() => {
    
    get_details()
    return () => {
      
    }
  }, [])
  


  return ( 
   

    <> 
        <h1> samheart</h1>
          {first.map( data => {
            return(
              <div key={data._id}>
                    {data.name}
              </div>
            )
          })}
    </>

   );
}
 
export default App;
