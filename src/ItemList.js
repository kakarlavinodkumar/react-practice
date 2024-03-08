import React, {useState} from "react";

function ItemList() {
    
    const data = [{
        firstname: "vinod",
        lastname: "kakarla",
        mobile: "7782515892",
        country: "canada"
    }, {
        firstname: "keerthana",
        lastname: "velagapudi",
        mobile: "7569969356",
        country: "india"
    }];
    const listItems = data.map((item) => {
        <li>{item.firstname}</li>
    });
    return (<div>
    <ul>
        {listItems}
    </ul>
    </div>)
}

export default ItemList;