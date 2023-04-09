import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useGetData';
import CartCard from '../components/CartCard';
import "./styles/Cart.scss"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store';


type Props = {}

const Cart = (props: Props) => {
  // let { isLoading, error, data , refetch} = useGetData({ key:'products', endpoint: "products" });

  

  const data = useSelector((state: RootState) => state.cart.value)

  // console.log(data)

  // const sum = data.reduce((acc, cur) => {
  //   return acc + cur.price * cur.quantity;
  // }, 0);

  const calcTotal = () =>{
    return data.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
  }

  let [total , setTotal] = useState<number>(()=>{
   return calcTotal()
  })

  useEffect(()=>{
setTotal(calcTotal())
  }, [data])
   

   

	let ProductElements = data.map((item) => {
        return <CartCard image={item.image} title={item.title} price={item.price} key={item.id} id={item.id} quantity={item.quantity}/>
	});
	return (
		<section className="cart">
      <h2 className='header'>Shopping Cart</h2>
      <div className="cartItems">

      <div className="products">
            {ProductElements}
      </div>
      <div className="checkout">
        <h2>Subtotal: ${total.toFixed(2)}</h2>
        <button >Proceed to Checkout</button>
      </div>
      </div>
		</section>
	);
};

export default Cart