import React , {Component} from "react";
import Header from "./layout/header";
import Assignment_component from "./layout/assignment_component";


class Home extends Component{


    render() {
        return (
            <div>
                <Assignment_component title='assignment 2' details =  'cifar10 and mnist' link="/assignment2"/>
            </div>
        );
    }

}
export default Home;
