import React from'react'

const inp=(props) => {
    const style={
        height: "50px",
        width: "200px",
        fontSize: "20px",
        textAlign: "center",
    };
    return (
        <div>
            <input style={style} type="number" onChange={props.handler}></input>
        </div>
    );
}

export default inp