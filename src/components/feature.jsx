import SelectBox from "./selectBox"

export default function Feature(props){
    const {label, start, name ,callback} = props
    if(start == "1"){
        return (
            <SelectBox label={label} options={["1", "2", "3" , "4", "5"]} callback={callback} />
        )
    }else{
        return (
            <SelectBox label={label} name={name} options={["", "1", "2", "3" , "4", "5"]} callback={callback} />
        )
    }
}