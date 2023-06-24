import { Routes , Route } from "react-router-dom"
import {CardList,CardDetails} from "../pages";





export const AllRoutes = () => {
   


  return (
    <div className="max-h-fit">
    <Routes>

<Route path="/" element={<CardList  />}  />

<Route path="/cart" element={<CardDetails  />} />



    </Routes>
    </div>
    
  )
}
