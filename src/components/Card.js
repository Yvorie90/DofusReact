import React from 'react';

const Card = ({item}) => {



    return (
        <li className='card-item' key={item.ankama_id}>
            <div className='item-name' onMouseEnter={() => {}}>
                {item.name}
                <span className='description'> {item.description} </span>
            </div>
            <img src={item.image_urls.sd} alt="loading" className='img-item' />
            <div>level : {item.level}</div>

        </li>
    );
};

export default Card;