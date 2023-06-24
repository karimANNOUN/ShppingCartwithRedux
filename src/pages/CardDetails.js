
import { CartCard } from '../components'

import { useSelector } from 'react-redux' // hadi ne7tejouha bah n'applicaiw action li dernehm bah nglbouhm ymchiw adi etape lakhra ti3hm


export const CardDetails = () => {

  const CardList = useSelector(state=>state.cartState.cartList)
  const total = useSelector(state=>state.cartState.total) //hadi w li fougha khadmoulna lkhedma ta3 cardlist w total te3 contex 



 //const {CardList}=useCart()
 // const {total} =useCart();
  
  return (
    <main>
      <section className='max-w-7xl max-h-full flex flex-col   mx-10 '>
      <div className='mt-20 flex justify-center '>
        <h1 className='align-center  font-semibold text-2xl' >ALL Products : {CardList.length}/ ${total}</h1>
        </div>
        {CardList.map((product)=>( <CartCard key={product.id} product={product}  />))}
     
      </section>
    </main>
  )
}
