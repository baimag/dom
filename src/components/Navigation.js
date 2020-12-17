import {Link, NavLink} from "react-router-dom";

function Navigation (){
    return(
        // <div className="links">
        //     <NavLink  exect to="/"  className="selected" activeClassName="active"> Home</NavLink>
        //     <NavLink to="/contacts" className="active" activeClassName="selected">contacts</NavLink>
        //     <NavLink to="/features" className="active" activeClassName="selected">features</NavLink>
        // </div>
        <ul className="navigator">
            <li className="nav_comp">
                <NavLink  exect to="/"  className="selected" activeClassName="active"> Home</NavLink>
            </li>
            <li  className="nav_comp">
                <NavLink to="/contacts" className="active" activeClassName="selected">Contacts</NavLink>
            </li >
            <li  className="nav_comp">
                <NavLink to="/features" className="active" activeClassName="selected">Features</NavLink>
            </li>
        </ul>
    )
}
export default Navigation