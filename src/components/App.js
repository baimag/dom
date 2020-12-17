
import React, {Fragment} from "react";
import{ Route, Switch, Redirect } from "react-router-dom";
import Contacts from "./contact";
import Features from "./features";
import Home from "./home";
import NotFound from "./NotFound";


function App() {
    return(
        <div>
            <Switch>
               <Route exact path="/">
                   <Home/>
               </Route>
               <Route  path="/contacts">
                   <Contacts/>
               </Route>
               <Route path="/features">
                   <Features/>
               </Route>
                <NotFound/>
            </Switch>
        </div>
    )
}
export default App;
