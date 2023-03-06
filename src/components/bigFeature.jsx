import SelectBox from "./selectBox"

export default function BigFeature(props){
    const {label, start, name} = props
    if(start == "1"){
        return (
            <SelectBox label={label} name={name} options={["1", "2", "3" , "4", "5","6", "7", "8" , "9", "10"]} />
        )
    }else{
        return (
            <SelectBox label={label} name={name} options={["", "1", "2", "3" , "4", "5","6", "7", "8" , "9", "10"]} />
        )
    }
}