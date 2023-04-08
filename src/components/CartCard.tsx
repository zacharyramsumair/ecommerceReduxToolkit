import React from 'react'
import { useNavigate } from "react-router-dom";

type Props = {
	title: string;
	image: string;
	price: number;
    id:number;
    quantity:number;
    key:number;

}
const CartCard = (props: Props) => {
  return (
    <div className='cartCard'>
        <div>
            <img src={props.image} alt="" />
        </div>
        <div>
            <h2>{props.title}</h2>
            <div className="quantityControls">
					<button>-</button>
					<span>7</span>
					<button >+</button>
				</div>
        </div>
        <div>
            <h2>${props.price}</h2>
        </div>
    </div>
  )
}





export default CartCard