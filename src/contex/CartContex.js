import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const initialState={
    CardList :[],
    total:0
}

const cartContex = createContext(initialState);



export const CartProvider= ({children})=>{ // hadou ga3dernehm bah n3agbou child ti3na simplement bla manab9aw nfewtou fih chaque mara mn blasa lblasa
   const [state,dispatch]= useReducer(CartReducer,initialState); // jebnaha hna bah tjina sehla nb3toha win n7ebou 7na
   // dispatch adika tmdlna droit w power bah n3aytou lel case li dernehm f use reducer f ay wa9t

   const addToCart= (product)=>{
    const updatedCardList = state.CardList.concat(product);
    updateTotal(updatedCardList)
    dispatch({
        type: "ADD_TO_CART",
        payload:{
            products:updatedCardList // products adi n7ebou nbedlou  ismha nrm hna w f use reducer mouhim ykoun fi 2 kifkif
        }
    })
   }

const removeFromCart=(product)=>{
    const updatedCardList = state.CardList.filter(current =>current.id !== product.id );
    updateTotal(updatedCardList)
    dispatch({
        type: "REMOVE_FROM_CART",
        payload:{
            products:updatedCardList 
        }
    })
}

const updateTotal =(products)=>{ // b hadi na9drou nkounou flexible fl prix ti3na kima nhebou
let total=0;
 products.forEach(product=> total=total+ product.price)
dispatch({
    type:"UPDATE_TOTAL",
    payload:{
        total
    }
})
}


    const value ={ // hadi children ra7 nb3toha bah na5dmou baha f autre compenent 
        total:state.total,
        CardList:state.CardList,
        addToCart,
        removeFromCart // edouma li dernehm b3atnehm kichghoul children bah nestakhmouhm direct bb 
    }
return (
    <cartContex.Provider value={value} >
        {children}
    </cartContex.Provider>
)
}

export const useCart = ()=>{
    const context = useContext(cartContex)
    return context
} // derna hadi bah ki ykounou 3andna ysr cartcontex nsemuw koul wa7da b ism khir