import React from 'react'
import Form from '../components/Form/Form';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Routes = () => {
    return ( 
        <Router>
            <Switch>
         <Route exact path='/' component={<h1> this is a root component </h1>}/>
                <Route exact path='/form' component={Form}/>
    <Route exact path='*' component={<h1>This is not found component</h1>}/>
            </Switch>
        </Router>
     );
}
 
export default Routes;
