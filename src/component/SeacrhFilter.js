import React, {useState} from "react";


function SearchFilter({onChange}) {
    const [select, setSelect] = useState ('all')

    function hendlerSelect(event) {
        setSelect(event.target.value)
        onChange(event.target.value)
    }
 return (
    <div className="selectDiv">
    <p style={{margin:'0px', height:'25px', width:'150px'}}>Categories</p>
    <select className="select" value={select} onChange = {(event)=>{hendlerSelect(event)}}>
    <option value="all"> all </option>
    <option value="art"> art </option>
    <option value="biography"> biography </option>
    <option value="computers">computers</option>
    <option value="history"> history </option>
    <option value="medical">medical</option>        
    <option value="poetry">poetry</option>   
    </select>     
</div>
 )
}

export default SearchFilter