import React, { ChangeEvent, Component } from "react";
import Button from "@mui/material/Button"
import { isJSDocNullableType, __String } from "typescript";
import imageService from "../api/hooks/images";


export default function ImagePage() {
    /*constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }*/
    const [image, setImage] = React.useState<string>("");
    
    const onImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
       if (event&&event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            console.log(img)
            setImage(URL.createObjectURL(img))
            let formData = new FormData()
            formData.append('file', img)
            console.log(formData)
            await imageService.evaluate(formData);
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