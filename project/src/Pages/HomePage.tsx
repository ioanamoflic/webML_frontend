import React, { ChangeEvent, Component, useEffect, useState } from "react";
import Button from "@mui/material/Button"
import useAuth from "../api/hooks/useAuth";


export default function HomePage() {
    const [userInfo, setUserInfo] = useState({name:"NULL"});
    useEffect(() => {
        useAuth.getUserInfo().then(response=>{
            setUserInfo(response.user);
        }).catch(err=>{
            console.log("no token")
        });
    });
    return (
        <div>
            Buna pe pagina de home, {userInfo.name}
        </div>
    );
}