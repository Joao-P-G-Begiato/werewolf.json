export default function Input(props){
    const {callback, label, type, placeholder, cName, lName} = props

    return(
        <>
        <label className={lName}>{label}</label>
        <input placeholder={placeholder} className={cName} type={type} onChange={(e)=>callback(e.target.value)}></input>
        </>
    )
}