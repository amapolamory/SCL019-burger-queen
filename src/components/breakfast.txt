import data from './data/menu.json';
import React from 'react';
import maincss from '../style/main.css'

export const BreakfastItems = () => {
    const breakfastI = data.breakfast;


    return (
        <div className='breakDiv'>
            {breakfastI.map((item) =>
                <button key={item.id} className='optionsBreak' onClick>
                    <button className='items'>
                        {item.name}
                        {item.price}
                    </button>
                </button>
            )}
        </div>
    )
} 