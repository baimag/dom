import {Link} from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Logo from "./logo";

function Features (_, index) {
    return (
    <div>
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center p-0 m-0">
                <div className="col-3">
                    <Logo/>
                </div>
                <div className="col-2">
                    <Navigation/>
                </div>
            </div>
            <div className="main">
                <div className="contact-text">
                    <h1>Michael Carleone Best Employee
                    </h1>
                </div>
                <div className="main-text">
                    <img src="https://c.wallhere.com/photos/29/62/2361x3023_px_Al_Pacino_Michael_Corleone_monochrome_The_Godfather-525505.jpg!d"/>
                    <div className="feat-text">best employee of the month for many years</div>
                </div>
            </div>
            <div className="button-settings m-auto">
                <div className="button-contacts">
                    <button><span className="main-button">Lean more</span></button>
                </div>
                <div className="button-contacts">
                    <button><span className="main-button">Go started!</span></button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}
export default Features