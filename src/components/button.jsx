import "../style/button.css"
export default function Button(props){
    const {label, callback} = props
    return (
        <button onClick={callback}>{label}</button>
    )
}