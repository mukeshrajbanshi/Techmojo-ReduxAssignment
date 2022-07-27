import { FETCH_DATA, ADD_CART, REMOVE_CART } from "./TypeOFActions"
export const fetchData = (data) => {
    return {
        type: FETCH_DATA,
        payload: data,
    }
}

export const addtocart=(id)=>{
    return{
        type: ADD_CART,
        payload:Number(id)
    }
}

export const removeFromCart = (itemID) => {
    return {
      type:REMOVE_CART,
      payload: itemID
    };
  };
