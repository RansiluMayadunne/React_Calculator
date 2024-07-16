import React from "react";

function Input(props) {
    return <Input value={props.value}
    onChange={(e) =>{props.value = e.target.value}}
    />
}
export default Input;