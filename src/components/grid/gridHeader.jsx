import React from "react";

let Headers = (props) => {
    return (
        <thead>
            <tr>
                {props.Headers.map((item, i) => {
                    return (<th onClick={()=>{props.onSort(item.key)}}>{item.label}</th>);
                })}
            </tr>
        </thead>
    );
}

export default Headers;