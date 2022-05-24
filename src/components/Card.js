import React from 'react'

const Card = ({ item, handleClick }) => {
    const {id, title, author, price, img} = item;
    return ( 
        <>
        <div className="cards w-full p-12 hover:shadow-2xl cursor-pointer">
            <div className="image_box w-2/4 h-8"></div>
            <img src={img} alt="" className='h-72 w-96'/>
            <div className="details">
                <p className='font-bold text-black'>{title}</p>
                <p className='text-sm text-gray-500'>{author}</p>
                <p className='font-bold text-gray-500'>{price}</p>
                <button onClick={() => handleClick(item)} className='px-8 block mx-auto rounded-xl hover:bg-transparent hover:border-2 hover:border-black hover:text-black py-2 bg-black text-white'>Add to cart</button>
            </div>
        </div>
        </>
     );
}
 
export default Card;