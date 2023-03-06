export default function Input(props){
    const {callback, label, type, placeholder, cName} = props

    return(
        <>
        <label>{label}</label>
        <input placeholder={placeholder} className={cName} type={type} onChange={()=>callback()}></input>
        </>
    )
}