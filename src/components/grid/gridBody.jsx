import React from "react";

let tbody = (props) => {

    return (<tbody> {props.data.map((customer, i) => {
        return (
            <tr>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
            </tr>
        );
    })}</tbody>);

}
export default tbody;