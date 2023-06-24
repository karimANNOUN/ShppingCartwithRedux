import React from 'react'
import { Link} from 'react-router-dom'

export const Footer = () => {
  return (
      
<footer className=" border-t-2 bg-white rounded-lg shadow mb-0 mx-0 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-2xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Shoping Cart™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/karim_announ/" className="mr-4 hover:underline md:mr-6 " rel='noreferrer' target="_blank">Instagrame</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/karim-announ-b211691b7/" className="mr-4 hover:underline md:mr-6" rel='noreferrer' target="_blank"  >LinkedIn</a>
        </li>
        <li>
            <a href="https://www.facebook.com/karim.laclasse.75" className="mr-4 hover:underline md:mr-6" rel='noreferrer'  target="_blank" >Facebook</a>
        </li>
        <li>
            <a href="https://github.com/karimANNOUN" className="hover:underline" rel='noreferrer' target="_blank" >Github</a>
        </li>
    </ul>
    </div>
</footer>

   
  )
}
