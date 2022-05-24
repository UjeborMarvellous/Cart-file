import React from 'react';

const Footer = () => {
    return ( 
        <>
        <footer className="p-4 bg-white shadow-xl md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="Goodluck Emeka" className="hover:underline">Goodluck Emeka™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/" className="mr-4 text-white hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                  <a href="/" className="mr-4 text-white hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="/" className="mr-4 text-white hover:underline md:mr-6">Licensing</a>
              </li>
              <li>
                  <a href="/" className=" text-white hover:underline">Contact</a>
              </li>
          </ul>
      </footer>
        </>
     );
}
 
export default Footer;