import React, {useState} from "react";

function ItemList() {
    
    const data = [{
        firstname: "vinod",
        lastname: "kakarla",
        mobile: "7782515892",
        country: "canada"
    }, {
        firstname: "test",
        lastname: "test",
        mobile: "1234567890",
        country: "india"
    }];
    const listItems = data.map((item) => {
         return <li key={item.firstname}>{item.firstname}</li>
    });
    return (<div>
    <ul>
        {listItems}
    </ul>
    </div>)
}

export default ItemList;