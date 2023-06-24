
import Foto from "../assets/hadi 3éme.jpg"
import { useTitle } from "../hooks/useTitle"
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";


export const CartCard = ({product}) => {
 
  const {name,price}=product

  const dispatch = useDispatch();

useTitle("cart")




  return (
    <div >
    <div className="flex flex-col items-center mt-10   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Foto} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
        <div>
    <button onClick={()=>dispatch(remove(product))}   className="text-white justify-end   bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">remove</button>
    </div>
    </div>
   
   
</div>
</div>
  )
}
