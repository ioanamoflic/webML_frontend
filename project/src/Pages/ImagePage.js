import React, { Component } from "react";
import Button from "@mui/material/Button"


export default function ImagePage() {
    /*constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }*/
    const [image, setImage] = React.useState([]);
    
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            
            setImage(URL.createObjectURL(img))

        }
    };


    return (
        <div>
            <div>
                <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                    <Button
                        style={{ marginRight: '10%', marginTop: '5%' }}
                        variant="contained"
                        component="label"
                    >
                        Upload
                            <input hidden type="file" onChange={onImageChange} />
                    </Button>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        style={{ height: 500, width: 500, border: "2px solid black" }}
                        src={image}
                        alt="" />
                </div>
            </div>
        </div>
    );
}