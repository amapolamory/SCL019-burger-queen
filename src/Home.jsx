import empanada from './img/empanada.png'

import{Link} from 'react-router-dom'

export default function home(){
    const hello = 'Empanadita'


    return (
      <div className='mainDiv'>
       <h1>{hello} </h1>
        <div className='imgContainer'>
        <img src={empanada} alt ="empanada" className='pic' />
        </div>

        <div className='buttonDiv'>
        <button className='homeBtn'>
         <Link to='/kitchen'> Cocina </Link>
          </button>
        <button className='homeBtn'>
          <Link to='/orders'> Pedidos</Link>
        </button>
        </div>

      </div>

    )
}