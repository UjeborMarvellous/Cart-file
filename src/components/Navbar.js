import React from "react";
import { BsFillCartPlusFill } from 'react-icons/bs';
// import { Link } from "react-router-dom";



const Navbar = ({setShow, size}) => {
    return ( 
        <>
        <nav className="w-full flex py-8 bg-blue-300 md:grid md:grid-cols-2 grid grid-cols-1">
            <div className="nav_box w-4/5 m-auto flex items-center justify-between leading-10 ">
                <span onClick={() => setShow(true)} className="my_shop text-3xl font-bold text-white cursor-pointer">My Shopping</span>
                <div onClick={() => setShow(false)} className="cart flex cursor-pointer items-center">
                    <span className="mt-4 text-2xl text-white"><BsFillCartPlusFill /></span>
                    <span className=" border border-white px-4 bg-red-500 text-white font-semibold rounded-full">{size}</span>
                </div>
            </div>
            <div className="mt-6">
               {/* <Link to='/form' className="bg-red-600 text-white font-semibold md:px-8 py-3 px-4 py-3 whitespace-nowrap rounded-xl ml-6">Log in</Link> */}
               {/* <a href="/form" className="bg-red-600 text-white font-semibold md:px-8 py-3 px-4 py-3 whitespace-nowrap rounded-xl ml-6">Log in</a> */}
               <a href="" className="bg-red-600 text-white font-semibold md:px-8 py-3 px-4 py-3 whitespace-nowrap rounded-xl ml-6 mr-4">Sign up</a>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;