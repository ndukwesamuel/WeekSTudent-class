
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Page/Create';
import Details from './Page/Details';
import Home from "./Page/Home";
import Update from './Page/Update';




const App = () => {


  return ( 

    <Router>  
    
    <h1> Welcome</h1>
    <Switch>

        <Route exact path='/'>
            <Home  /> 
        </Route>

        <Route exact path='/create'>
            <Create  /> 
        </Route>

        
        <Route  path='/update/:id'>
            <Update  /> 
        </Route>

        <Route  path='/:id'>
            <Details  /> 
        </Route>
      


    </Switch>

    
    
    </Router>

   );
}
 
export default App;