import React, {useState} from "react";
import { useEffect } from "react";

function ItemList(props) {
    
    useEffect(() => {
        console.log("useEffect hook is called!!");
        console.log("props passed from the parent component : ", props.parent);
    });

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