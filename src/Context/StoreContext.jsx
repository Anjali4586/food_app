import { createContext, useState } from "react"
import { food_list } from "../Components/assets/assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    //to manage product card data 

    const[cartItems,setCartItems] = useState({});

    const addToCart = (itemId)=>{
        //if product s not available
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

        }

    }

    //remove if nort available
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        

    }


    const getCartTotalAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id===item)
            totalAmount+= itemInfo.price*cartItems[item];


            }
        }
        return totalAmount;
    }







    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartTotalAmount


    }

    
    return(
        <StoreContext.Provider value={contextValue}>
            {
                props.children

            }
        </StoreContext.Provider>
        

    )

}

export default StoreContextProvider;