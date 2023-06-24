import React from 'react'
import { ProductCard } from '../components'

export const CardList = () => {
  
  const Products =[
    {"id":100 , "name":"shampo" ,"price":400 , "image":"/assets/hadi louwla.jpg" },
    {"id":101 , "name":"savon" ,"price":500 , "image":"/assets/hadi tania.jpg" },
    {"id":102 , "name":"dentifrice" ,"price":600 , "image":"/assets/hadi 3éme.jpg" },
    {"id":103 , "name":"biftek" ,"price":700 , "image":"/assets/hadi tania.jpg" },
    {"id":104 , "name":"kebda" ,"price":800 , "image":"/assets/hadi tania.jpg" },
    {"id":105 , "name":"escalop" ,"price":900 , "image":"/assets/hadi louwla.jpg" },
    {"id":106 , "name":"kabeb" ,"price":200 , "image":"/assets/hadi louwla.jpg" },
    {"id":107 , "name":"l7am ghanmi" ,"price":300 , "image":"/assets/hadi 3éme.jpg" },
    {"id":108 , "name":"ba9ri" ,"price":100 , "image":"/assets/hadi 3éme.jpg" }
  ]

  return (
    <main className='mt-10' >
      <section className='max-w-7xl mx-auto py-7 flex flex-wrap justify-around content-around'>
        {Products.map((product)=>(<ProductCard key={product.id} product={product}  />))}
        
      </section>
    </main>
  )
}
