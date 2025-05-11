import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation, useNavigate} from "react-router-dom";

const GirisSayfasi = (props) => {
    const navigate = useNavigate();
    const [userRequest, setUserRquest] = useState({
        username: "",
        password: ""
    });

    const handleRequestChange = (event) => {
        setUserRquest({...userRequest, [event.target.name]: event.target.value})
    }

    const onSubmit = async () => {
        await axios.post("http://localhost:8080/authenticate",
            {
                username: userRequest.username,
                password: userRequest.password
            }
        )
            .then((data) => {
                localStorage.setItem("token", data.data.token)
                navigate('anamenu')
            })
    }


    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <input value={userRequest.username} name={'username'} onChange={handleRequestChange}
               placeholder={"Kullanıcı Adı"}/>
        <input value={userRequest.password} name={'password'} onChange={handleRequestChange} placeholder={"Şifre"}/>
        <button onClick={onSubmit} style={{width: '200px', height: '50px', marginBottom: '10px'}}>Giriş Yap</button>
    </div>
}

export default GirisSayfasi;