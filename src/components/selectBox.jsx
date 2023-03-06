export default function SelectBox(props){
    const {options, label, name, callback} = props
    return(
        <>
        <label htmlFor={name}>{label}</label>
        <select onChange={(e)=>callback(e.target.value)} name={name} id={name}>
            {options.map((element)=><option>{element}</option>)}
        </select>

        </>
    )
}