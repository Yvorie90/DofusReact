import React from 'react';
import infoH from '../img/info-hover.png'

const Card = ({item}) => {



    return (
        <li className='card-item' key={item.ankama_id}>
            <div className='item-name'>{item.name}</div>

            <div>
                <div className='info-svg'></div>
                <div className='description-container'>
                    <img className='info-img' src={infoH} alt="info" />
                    <span className='description'> {item.description} </span></div>

                <img src={item.image_urls.sd} alt="loading" className='img-item' />
            </div>
            <div>level : {item.level}</div>

        </li>
    );
};

export default Card;