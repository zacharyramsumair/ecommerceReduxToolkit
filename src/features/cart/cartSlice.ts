import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// return <CartCard image={item.image} title={item.title} price={item.price} key={item.id} id={item.id} quantity={4}/>


interface ICart {
    image: string;
    title: string;
    price: number;
    key: number;
    id: number;
    quantity: number;

}

export interface CartState {
    value: ICart[]
}

const initialState: CartState = {
    value: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {


            const newItem = action.payload;
            const index = state.value.findIndex(item => item.id === newItem.id);

            if (index !== -1) {
                // update existing item in the cart
                state.value[index] = newItem;
            } else {
                // add new item to the cart
                state.value.push(newItem);
            }

        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer