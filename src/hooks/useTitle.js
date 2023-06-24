import { useEffect } from 'react'

export const useTitle = (title) => {
    useEffect(()=>{
        document.title= `${title} | shoping card`
    },[title])
  return null;}
