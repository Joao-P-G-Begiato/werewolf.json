import { useContext, useState } from "react"
import { Context } from "../context/context"
import "../style/create.css"
import { PageOne } from "./pageOne"
import { PageTwo } from "./pageTwo"
import Button from "../components/button.jsx"

export function Create(){
    const [page, setPage] = useState(1)
    const {char} = useContext(Context)

    if(page == 1){
        return (
            <>
            <button className="disabled" disabled>página 1</button> <button onClick={(e)=> {
                e.preventDefault();
                setPage(2)
                }}>página 2</button>
            <PageOne page={()=>{setPage(2)}}/>
            <Button label="salvar" callback={()=>console.log(char)} />
            </>
        )
    }else{
        return (
        <>
            <button onClick={(e)=> {
                e.preventDefault();
                setPage(1)
                }}>página 1</button> <button className="disabled" disabled>página 2</button>
            <PageTwo />
            <Button label="salvar" callback={()=>console.log(char)} />

        </>
            )
    }
}