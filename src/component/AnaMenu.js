import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const AnaMenu = (props) => {
    const navigate = useNavigate();
    const [accountInfo, setAccountInfo] = useState();
    console.log(accountInfo)

    useEffect(() => {
        getirAccountBilgileri();
    }, [])

    const getirAccountBilgileri = async () => {
        const response = await axios.get("http://localhost:8080/account/getirUseraAitAccountBilgileri",
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                }
            })
            .then((response) => {
                console.log(response.data)
                setAccountInfo(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        return response;
    }

    const handleClick = () => {
        window.open("https://example.com", "_blank"); // Yeni sekmede açar
    }

    return <div className="backgroundAnaMenu">
        <div className="anaMenu">
            <button>Varlıklarım</button>
            <button>Hisse Senetleri</button>
            <button>Kripto Paralar</button>
            <button>Cüzdanım</button>
            <button>Profilim</button>
            <p style={{color: 'white'}}>{accountInfo?.name}</p>
        </div>
        <img src="/13.png" alt="Tıklanabilir Resim"
             style={{width: '1050px', height: '400px', position: 'fixed', top: '150px', left: '100px'}}/>
        <img src="/morMaskot.png" alt="Tıklanabilir Resim"
             style={{width: '500px', height: '1100px', position: 'fixed', top: '-60px', right: '30px'}}/>
    </div>

}

export default AnaMenu;