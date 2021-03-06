import React , {Component} from 'react';
import {Link} from "react-router-dom";
import Header_comp from "./header_element";

class Header extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Just ML things</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link">
                            Home <span className="sr-only">(current)</span>
                                </Link>
                        </li>
                        <Header_comp text_title='Mnist' url='/assignment2MNIST'/>
                        <Header_comp text_title='Cifar10' url='/assignment2Cifar'/>
                        <Header_comp text_title='Cats&Dogs' url='/cat&dogs'/>
                    </ul>


                </div>
            </nav>
        )
    }
}
export default Header;
