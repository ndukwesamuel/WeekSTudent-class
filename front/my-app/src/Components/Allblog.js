
import { Link } from 'react-router-dom';

const Allblog = ({blogs}) => {
    return ( 

        <div> 
            {blogs.map( blog => {
                return(
                    <div key={blog._id}>  
                    <Link to={`/${blog._id}`}>   <h1> {blog.name}</h1>  </Link>  
                        <h2> {blog.title}</h2>
                        <h3>{blog.createdAt}</h3>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Allblog;