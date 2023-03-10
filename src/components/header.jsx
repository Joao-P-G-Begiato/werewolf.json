import "../style/header.css"
import {useNavigate,Link} from "react-router-dom"
import Button from "./button"


export default function Header(){
    const navigate = useNavigate()

    return(
        <nav>
            <h1 className="h1-header" onClick={()=>navigate("/")}> Lobisomem, O Apocalipse </h1>  
            <Button label="Criar Personagem" callback={()=>navigate("/create")}/>
            <Button label="Ver Personagem" callback={()=>navigate("/create")}/>
        </nav>
    )
}