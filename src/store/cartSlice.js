import { createSlice } from "@reduxjs/toolkit";
 

//hadi management state redux ta5dem nafs lkhedma ta reducer w contex bah net7akmou f state mn blasa wa7da brk 
const cartSlice= createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{ // add w remove edouma houwa 7wayj habina hna n'apliqiwhm f state bah yakhjdmoulna khedma 7abina tsema 7na li dernehm 
        add(state,action){
        // console.log(action.payload)  hadi tmdlna action li dernaha wch jra faha
         const updatedCartList=state.cartList.concat(action.payload);
         const total = state.total + action.payload.price;
         return {...state, total:total ,cartList:updatedCartList} // hna kayn l7wayj li habin ndroulhm update koul bah tweli takhdem bien l7ala
        },
        remove(state,action){
        
         const updatedCartList=state.cartList.filter(item=> item.id !== action.payload.id);
         const total = state.total - action.payload.price;
         return {...state, total:total ,cartList:updatedCartList}
        }
    }
})

export const {add , remove}=cartSlice.actions;
export const cartReducer = cartSlice.reducer;