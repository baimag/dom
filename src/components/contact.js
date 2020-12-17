import {Link} from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Logo from "./logo";

function Contacts (_, index) {
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center p-0 m-0">
                <div className="col-3">
                    <Logo/>
                </div>
                <div className="col-2">
                    <Navigation/>
                </div>
            </div>
            <div className="container-fluid maps">
                <h1 className="adress">Chechnya, Crozny</h1>
                <h2><a className="inst" href="https://www.instagram.com/intocode/?hl=ru">Instagram</a></h2>
               <div>
                   <iframe
    src="https://yandex.ru/map-widget/v1/?um=constructor%3A5bfb0f8a96c2c20e878788b3de983ad91e1ab9404bca6e83d2e677c47199e27d&amp;source=constructor"
    width="500" height="400" frameBorder="0"/>
               </div>
        </div>
            <Footer/>
        </div>
    )
}
export default Contacts
