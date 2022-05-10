import data from './data/menu.json';
import React from 'react';
import maincss from '../style/main.css'

export const BreakfastItems = () => {
    const breakfastI = data.breakfast;
    
   
    return(
       <div>
           {breakfastI.map((item)=>
            <React.Fragment key={item.id} className='optionsBreak'>
          <button className='items'>
           {item.name}
           {item.price}
           </button>
           </React.Fragment>
       )}
       </div>
   )
   } 