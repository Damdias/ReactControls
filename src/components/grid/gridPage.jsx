import React from "react";
import Headers from "./gridHeader";
import GridBody from "./gridBody";
export default class GridPage extends React.Component {
    state = {
        Headers: [{
            label: "First Name", key: "firstName"
        },
        { label: "Last Name", key: 'lastName' }
        ],
        Customers: [{
            firstName: "John",
            lastName: "Smith"
        },
        {
            firstName: "Shi",
            lastName: "Qing"
        }
        ],
        SortOrder: {
            firstName: true,
            lastName: true
        }
    }
    onSort = (item) => {
        this.state.SortOrder[item] = !this.state.SortOrder[item];
        this.setState((pre) => ({ SortOrder: pre.SortOrder,Customers: pre.Customers.sort(this.dynamicSort(item)) }));
        
    }
    dynamicSort = (property)=> {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    render() {
        return (
            <div className="container">
                <table className="table table-striped table-bordered">
                    <Headers onSort={this.onSort} Headers={this.state.Headers} />
                    <GridBody data={this.state.Customers} />
                </table>
            </div>
        );
    }
}