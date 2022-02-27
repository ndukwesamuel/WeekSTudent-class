
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Page/Details';

import Home from "./Page/Home";




const App = () => {


  return ( 

    <Router>  
    
    <h1> Welcome</h1>
    <Switch>

        <Route exact path='/'>
            <Home  /> 
        </Route>

        <Route  path='/:id'>
            <Details  /> 
        </Route>
      


    </Switch>

    
    
    </Router>

   );
}
 
export default App;