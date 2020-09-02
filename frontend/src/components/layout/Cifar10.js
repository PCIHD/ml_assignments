import React ,{Component} from 'react';







class Assignment2Cifar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            file:null,
            result:null,
            fileuri:null,
            placeholder:false
        };
    }
    onFileChange = event =>{
        this.setState({
            file:event.target.files[0],

            result: null,
            fileuri :URL.createObjectURL(event.target.files[0]),
            placeholder:true
        });
    }
    cifarClick =  () =>{
        const formData = new FormData()
        formData.append('image',this.state.file)
        fetch("backend/assignment2/cifar10/",{
            method:'POST',
            body: formData
        })
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
          console.log(data);

        this.setState(() => {
          return {
            result :data['result'],

          };

        });
      });
    }

    render() {
        return (
<div style={{display:'flex',alignSelf:"center",justifyContent:"center"}}>
                <div className="card" style={{width:500 ,height:600,display:"flex",padding:30,margin:30}}>
                    <div className="card-body">
                    <h5 className="card-title">Cifar10</h5>
                        {this.state.placeholder? <img src={this.state.fileuri}    style={{width:400,height:300,borderRadius:4,marginBottom:20}}/> : null}
                        <div style={{justifyContent:"center"}}>
                            <form id="file-upload-form" className="uploader" >
                            <input id="file-upload" type="file"  accept="image/*" onChange={this.onFileChange}/>

                                <label htmlFor="file-upload" id="file-drag">Select a file or drag here</label>

                            </form>
                            <ul className="flex-row">

                            <button id = 'classify' type="button"   onClick={this.cifarClick}>Classify</button>
                                 {this.state.result? <div style={{margin:10}}>It looks like a {this.state.result}</div>:null}
                                </ul>
                        </div>
                    </div>




                </div>
</div>
        );
    }

}
export default Assignment2Cifar;
