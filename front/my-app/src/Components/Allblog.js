
import { Link } from 'react-router-dom';

const Allblog = ({blogs}) => {
    return ( 

        <div> 
            {blogs.map( blog => {
                return(
                    <div key={blog.id}>  
                    <Link to={`/${blog.id}`}>   <h1> {blog.F_name}</h1>  </Link>  
                       
                        <h3>{blog.createdAt}</h3>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Allblog;