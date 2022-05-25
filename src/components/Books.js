import list from '../data'
import Card from "./Card";

const Books = ({handleClick}) => {
    
    return ( 
        <>
        <section className="w-4/5 m-auto mt-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 grid grid-cols-1 grid-cols-auto">
            {list.map((item)=> 
                (<Card key={item.id} item={item} handleClick={handleClick}/>
            ))}
        </section>
        </>
     );
}
 
export default Books;