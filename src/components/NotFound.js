import {NavLink} from "react-router-dom";

function NotFound(){
    return(
        <div>
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
            Страница не найдена.
            Ошибка 404 :(
        </div>
    )
}
export default NotFound