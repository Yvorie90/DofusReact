import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = () => {

    const [data, setData] = useState([])
    
    useEffect(() =>{
        axios.get("https://api.dofusdu.de/dofus2/fr/items/equipment/all?filter[type_name]=dofus")
        .then((res) => setData(res.data))
    })

    return (
        <div className="CardContainer">
            <ul className='items-container'>
                {data.items && data.items
                .map((item) => (<Card key={item.ankama_id} item={item}/>))}
            </ul>

        </div>
    );
};

export default CardContainer;