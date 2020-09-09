import React , {Component} from "react";
import Header from "./layout/header";
import Assignment_component from "./layout/assignment_component";


class Home extends Component{


    render() {
        return (
            <div className="flex-row flex-fill">
                <div className="card d-inline-flex" style={{width:600 ,margin:30}}>
                    <div className="card-body" >
                <h5 className="card-title">Assignment2</h5>
                <div className="flex-row flex-fill" style={{ margin:30}}>

                    <div className="d-inline-flex">
                    <Assignment_component  title='Assignment 2' details =  'cifar10 ' link="/assignment2Cifar"/>
                    </div>
                    <div className="d-inline-flex">
                    <Assignment_component title='Assignment 2' details =  'mnist ' link="/assignment2MNIST"/>
                    </div>
                </div>
                    </div>

                </div>
                <div className="card d-inline-flex" style={{width:300 ,margin:30}}>
                <div className="card-body" >
            <h5 className="card-title">Assignment3</h5>
            <div className="flex-row flex-fill" style={{ margin:30}}>

                <div className="d-inline-flex " >
                <Assignment_component  title='Assignment 3' details =  'Cats&Dogs ' link="/cat&dogs"/>
                </div>

            </div>
                </div>

            </div>

                </div>

        );
    }

}
export default Home;
