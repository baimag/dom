import {Link} from "react-router-dom";
import Features from "./features";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Logo from "./logo";
import Home_Text from "./home_text";
import Button from "./button";

function Home(_, index){
    return(
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
                <div className="row">
                    <div className="col">
                        <Home_Text/>
                        <Button/>
                    </div>
                </div>
            </div>
          <Footer/>
        </div>
    )
}
export default Home