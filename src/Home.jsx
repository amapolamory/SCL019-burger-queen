import empanada from './img/empanada.png'

export default function home(){
    const hello = 'Empanadita'


    return (
       <main>
     <h1>{hello} </h1>
     
     <img src={empanada} alt ="empanada" />
     
     <button>Cocina</button>
     <button>Pedir</button>
     </main>

    )
}