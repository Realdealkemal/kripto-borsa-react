import {useEffect, useState} from "react";
import axios from "axios";

const AnaMenu = (props) => {

    useEffect(() => {
        tumBorsaKagitlariniGetir();
    }, [])

    const tumBorsaKagitlariniGetir =  async  ()  => {
        const  response = await axios.get("http://localhost:8080/borsaKagidi/getirTumBorsaKagitlari",
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                }
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        return response;
    }

}

export default AnaMenu;