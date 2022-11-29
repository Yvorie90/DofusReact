import React, { useEffect } from 'react';
import {useState} from 'react';
import infoH from '../img/info-hover.png'

const Card = ({item}) => {

    const [imgSrc, setImgSrc] = useState('');
    const [fallback, setFallback] = useState(false);
    
    
    useEffect( () => {
    if(item.image_urls.sd){
        setImgSrc(item.image_urls.sd);
    }
    },[item.image_urls.sd])
    
    const reloadSrc = e => { 
    if(fallback){
        e.target.src = item.image_urls.sd;
    }else{
        e.target.src = imgSrc
        setFallback(true)
    }
    }
    


    return (
        <li className='card-item' key={item.ankama_id}>
            <div className='item-name'>{item.name}</div>

            <div className='img-item'>
                <div className='info-svg'></div>
                <div className='description-container'>
                    <img className='info-img' src={infoH} alt="info" />
                    <span className='description'> {item.description} </span></div>

                <img src={imgSrc} alt="" onError={reloadSrc} />
            </div>
            <div>level : {item.level}</div>

        </li>
    );
};

export default Card;
