import * as TypeOfActions from "./TypeOFActions"
const initialState = {
    products: [],
    cart: [],
    isLoading: false,
    currentItem: null,
}
export const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case TypeOfActions.FETCH_DATA:
            return {
                ...state,
                products: action.payload,
                isLoading: true,
            }

        case TypeOfActions.ADD_CART:
            const item = state.products.find((prod) => prod.id === action.payload);
            const inCart = state.cart.find((item) =>
                item.id === action.payload ? true : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            }
            case TypeOfActions.REMOVE_CART:
                return {
                    ...state,
                    cart:state.cart.filter((item)=>item.id!==action.payload),
                  };
        default:
            return state
    }

}
