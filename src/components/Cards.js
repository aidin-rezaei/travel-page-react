import React from "react";
import CardItem from "./CardItem";
function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='images/img-9.jpg' text='EXplore the waterfall deep inside the Amazan jungle' label='Adventure' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards