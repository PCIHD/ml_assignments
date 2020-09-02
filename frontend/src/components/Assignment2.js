import React ,{Component} from 'react';
import axios from "axios";



class Assignment2Cifar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            file:null
        };
    }
    onFileChange = event =>{
        this.setState({
            file:event.target.files[0]
        });
    }
    cifarClick = () =>{
        axios.post("/backend/assignment2/cifar10")
    }

    render() {
        return (
            <div>
<input type="file" onChange={this.onFileChange}/>
                <input type="button" title="classify" onClick={this.cifarClick}/>

            </div>
        );
    }

}
export default Assignment2Cifar;
