import React from 'react'
const button = (props) => {
    const style = {
        color: "black",
        fontSize: "20px",
        textAlign: "center",
        backgroundColor: "gray",
        height: "50px",
        width: "200px"
     };
    return (
        <div>
            <button onClick={props.handler} style={style}>{props.name}</button>
        </div>
    );
}

export default button; 