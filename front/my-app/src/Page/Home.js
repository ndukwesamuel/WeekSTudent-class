import React, { useEffect, useState } from 'react';
import Allblog from '../Components/Allblog';
const url = 'http://127.0.0.1:8000'



const Home = () => {    
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState(null)

    const get_All_data = async () => {
        const res = await fetch(url)
        const blogs = await res.json()
        console.log(blogs);
        setIsPending(false)
        setData(blogs.data)
    }

    useEffect(() => {
        get_All_data()
    
      return () => {
        
      }
    }, [])
    

    return ( 

        <div>  

            {isPending &&  <h1> Loading ... </h1>  }
            {data &&  <Allblog   blogs={data} /> }

        </div>

        


     );
}
 
export default Home;