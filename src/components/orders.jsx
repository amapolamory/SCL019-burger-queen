

import React, { useState } from 'react';
import { BreakfastItems} from "./breakfast.jsx"
import { LunchItems } from './lunch.jsx';
import maincss from '../style/main.css';



export default function MenuOptions() {
    const [menu, setMenu] = useState('breakfast');
    
  
   
    return (
        <>
            <h1>PEDIDOS</h1>

            <div>
                <section className='orderBtn'>
                <button className='menuBtns' onClick={()=> setMenu('breakfast')}>Desayuno</button>
                <button className='menuBtns' onClick={()=> setMenu('lunch')}>Principal</button>
                </section>
                {menu === 'breakfast' && <BreakfastItems />}
                {menu === 'lunch' && <LunchItems />}
            </div>
        </>
    )
}