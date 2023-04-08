import React from 'react'
import { useGetData } from '../hooks/useGetData';
import CartCard from '../components/CartCard';
import "./styles/Cart.scss"

type Props = {}

const Cart = (props: Props) => {
  let { isLoading, error, data , refetch} = useGetData({ key:'products', endpoint: "products" });

   

	if (isLoading) {
		return <section className="cart">Loading...</section>;
	}
	if (error) {
		return <section className="cart">An Error has occurred ... {error?.message}</section>;
	}

   

	let ProductElements = data?.data.map((item) => {
        return <CartCard image={item.image} title={item.title} price={item.price} key={item.id} id={item.id} quantity={4}/>
	});
	return (
		<section className="cart">
      <h2 className='header'>Shopping Cart</h2>
      <div className="cartItems">

      <div className="products">
            {ProductElements}
      </div>
      <div className="checkout">
        <h2>Subtotal (2 items): $154.57</h2>
        <button >Proceed to Checkout</button>
      </div>
      </div>
		</section>
	);
};

export default Cart