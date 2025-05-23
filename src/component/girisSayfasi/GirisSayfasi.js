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

    const onSubmitGirisYap = async () => {
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


    return <div className="background">
        <div className="login-container">
            <p style={{fontWeight:'bold'}}>GİRİŞ YAP</p>
            <input value={userRequest.username} name="username" onChange={handleRequestChange}
                   placeholder="Kullanıcı Adı"/>
            <input type="password" value={userRequest.password} name="password" onChange={handleRequestChange}
                   placeholder="Şifre"/>
            <button onClick={onSubmitGirisYap}>Giriş Yap</button>
            <button onClick={() => navigate('uyeOl')}>Üye Ol</button>
        </div>
    </div>
}

export default GirisSayfasi;