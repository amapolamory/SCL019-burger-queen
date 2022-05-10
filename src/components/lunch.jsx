import data from './data/menu.json';

export const LunchItems = () => {
    const lunchI = data.lunch;
    
   
    return(
       <div>
           {lunchI.map((item)=>
           <tr key={item.id}>
          <button className='items'>
           {item.name}
           {item.price}
           </button>
       </tr>
       )}
       </div>
   )
   } 





