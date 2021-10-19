import React, { Component } from "react";
import Button from "@mui/material/Button"
class ImagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };

    render() {
        return (
            <div>
                <div>
                    <div style={{display:"flex",justifyContent:'flex-end'}}>
                 
                        <Button 
                            style={{marginRight:20}}
                            variant="contained"
                            component="label"
                        >
                            Upload
                            <input hidden type="file" onChange={this.onImageChange} />
                        </Button>
                        </div>
                        <div style={{display:"flex",justifyContent:"center"}}>
                        <img 
                        style={{height:500,width:500, border:"2px solid black"}}
                        src={this.state.image} />
                        </div>
                        

           
                </div>
            </div>
        );
    }
}
export default ImagePage;