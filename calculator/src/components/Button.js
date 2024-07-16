import React from "react";

function Button(props) {
    return <Button onClick={(e) => props.onClick()}
    >
        (props.label)
    </Button>
}
export default Button;