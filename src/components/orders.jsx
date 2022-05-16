
// import { BreakfastItems} from "./breakfast.jsx"
// import { LunchItems } from './lunch.jsx';
// export default function MenuOptions() {
//     const [menu, setMenu] = useState('breakfast');



//     return (
//         <>
//             <h1>PEDIDOS</h1>

//             <div>
//                 <section className='orderBtn'>
//                 <button className='menuBtns' onClick={()=> setMenu('breakfast')}>Desayuno</button>
//                 <button className='menuBtns' onClick={()=> setMenu('lunch')}>Principal</button>
//                 </section>
//                 {menu === 'breakfast' && <BreakfastItems />}
//                 {menu === 'lunch' && <LunchItems />}
//             </div>
//         </>
//     )
// }



import React, { useState } from 'react';
import homecss from '../style/home.css';
import MenuItems from './menu.jsx'



export default function Orders() {


    const [menuAdd, setMenuAdd] = useState([]);

    const addItem = (menu) => {


        const found = menuAdd.find((item) => item.id === menu.id);
        

        if (found) {
            setMenuAdd(
                menuAdd.map((item) =>
                    item.id === menu.id ? { ...found, qty: found.qty + 1 } : item
                )
            );
        }
        else {
            setMenuAdd([...menuAdd, { ...menu, qty: 1 }]);
            console.log(menuAdd)
        }
    };

    return (
        <>

            <section className='breakDiv'>

                <MenuItems addItem={addItem} />
            </section>

            <div className='breakDiv'>

                {menuAdd.map((item) =>

                    <button key={item.id} >
                        {item.name}
                        {item.price}
                         
                        

                    </button>

                )}

            </div>


        </>
    )

}




