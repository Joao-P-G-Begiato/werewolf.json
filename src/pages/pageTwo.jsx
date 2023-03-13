import Input from "../components/input";
import SelectBox from "../components/selectBox";
import "../style/create.css"
import list from "../service/data";
import Feature from "../components/feature";
import BigFeature from "../components/bigFeature";
import { useContext } from "react";
import { Context } from "../context/context";

export function PageTwo(){
    const {raca, augurio, tribo} = list
    const {char} = useContext(Context)
    const background = []
    
    return (
        <h1> Working in Progress</h1>
    )
}