import { useState } from "react"
import { Context } from "./context"
import Char from "../model/character"

export const Provider = ({ children }) => {
    const [char, setChar] = useState(new Char (" ", " ", " ", " ", " ", " ", " ", " ", " ", "1", "1", "1", "1", "1", "1", "1", "1", "1", ["0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0"], {" ": " "}, [" "], "0" , "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", [" ", " ", " ", " ", " ", " ", " "]))

    return (
    <Context.Provider value={{ char, setChar}}>
        {children}
    </Context.Provider>
    )
}