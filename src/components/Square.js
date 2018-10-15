import React from "react";

function Square(props){
        return (
            <button className = "square"
        onClick={() => props.onPress()}>
        {props.value}
    </button>
    )
}

export default Square