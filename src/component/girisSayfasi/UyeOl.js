import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UyeOl = (props) => {
    const navigate = useNavigate();
    const [userRequest, setUserRquest] = useState({
        username: "",
        password: ""
    });

    const handleRequestChange = (event) => {
        setUserRquest({...userRequest, [event.target.name]: event.target.value})
    }

    const onSubmit = async () => {
        await axios.post("http://localhost:8080/register",
            {
                username: userRequest.username,
                password: userRequest.password
            }
        )
            .then((data) => {
                navigate('')
            })
    }

    return <div className="background">
        <div className="login-container">
            <p style={{fontWeight: 'bold'}}>ÜYE OL</p>
            <input value={userRequest.username} name="username" onChange={handleRequestChange}
                   placeholder="Kullanıcı Adı"/>
            <input type="password" value={userRequest.password} name="password" onChange={handleRequestChange}
                   placeholder="Şifre"/>
            <button onClick={onSubmit}>Üye Ol</button>
        </div>
    </div>
}

export default UyeOl;