import { Link ,NavLink } from "react-router-dom"
import Logo from "../assets/logo.webp" 
import { useState } from "react";

import { useSelector } from "react-redux";


export const Header = () => {
  const ActiveClass="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const InactiveClass="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  const [hidden,setHidden] = useState(true);
 // const {CardList} =useCart();
  const CardList = useSelector(state=> state.cartState.cartList)

  return (

<header>
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">

  <div className="ml-0 "> 
  <Link to="/" className="flex items-center">
      <img src={Logo} className="h-8 mr-3" alt="shoping Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Redux Card</span>
  </Link>
      </div>
      <div className="flex md:order-12 font-medium ">
  <Link to="/cart" ><span>cart:{CardList.length}</span></Link>
  </div>
  
  <div className="flex md:order-2">
      <button onClick={()=> setHidden(!hidden)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="true">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
  </div>


  <div className={`flex items-center justify-between w-full  md:flex md:w-auto md:order-2 ${hidden ? "hidden" :""}`} id="navbar-sticky">
    <ul className="flex flex-col w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/" className={({isActive})=> isActive ? ActiveClass :InactiveClass} aria-current="page" end >Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart"  className={({isActive})=> isActive ? ActiveClass :InactiveClass}>About</NavLink>
      </li>
      
    </ul>
    
  </div>

 

  

  </div>
  

  
</nav>

</header>


  )
}
