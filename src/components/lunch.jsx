import data from './data/menu.json';

export const LunchItems = () => {
    const lunchI = data.lunch;


    return (
        <div className='lunchDiv'>
            {lunchI.map((item) =>
                <button className='optionsLunch' key={item.id}>
                    <button className='items'>
                        {item.name}
                        {item.price}
                    </button>
                </button>
            )}
        </div>
    )
}





