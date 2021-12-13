import React from "react";
import { Link } from "react-router-dom";

function CardItem(p) {
    return (
        <>
            <li className='cards__item'>
                <Link to={p.path} className='cards__item__link'>
                    <figure className='cards__item__pic-wrap' data-category={p.label}>
                        <img src={p.src} alt='Travel Image' className='cards__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{p.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem