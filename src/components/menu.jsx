import data from './data/menu.json';
import React, { useState } from "react";


export default function MenuItems(props){

    const { addItem } = props;
    const [menu, setMenu] = useState(data.menu);



    const menuType = (option) => {
        // eslint-disable-next-line default-case
        switch (option) {
            case "breakfast":
                const breakfast = data.menu.filter((elem) => elem.type === option);
                setMenu(breakfast);
                console.log(breakfast)
                break;
            case "lunch":
                const lunch = data.menu.filter((elem) => elem.type === option);
                setMenu(lunch);
                break;
            default:


        }
    };

    return (
        <>
    
            <section className='orderBtn'>

                <button className='menuBtns' onClick={() => menuType('breakfast')}>Desayuno</button>
                <button className='menuBtns' onClick={() => menuType('lunch')}>Principal</button>
            </section>


            <div className='productContainer'>

                {menu.map((comida) => (
                    <button onClick={() => addItem(comida)} className='optionsBreak' key={comida.id}> {`${comida.name} $${comida.price}`} </button>
                
                   )
               
                )}
            
            </div>
      
         
        </>
    )


    // return (
    //     <div className='menuDiv'>
    //         {menu.map((item) =>
    //             <button className='menuoptions' key={item.id}>
    //                 {/* <button className='items'>
    //                     {item.name}
    //                     {item.price}
    //                 </button> */}
    //             </button>
    //         )}
    //     </div>
    // )
}





