import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { updateCart, deleteItem } from "../features/cart/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

type Props = {
	title: string;
	image: string;
	price: number;
	id: number;
	quantity: number;
	key: number;
};
const CartCard = (props: Props) => {
	let navigate = useNavigate();
	let dispatch = useDispatch();
	const cartProductInfo = useSelector((state: RootState) => state.cart.value);
	const index = cartProductInfo.findIndex((item) => item.id === props.id);

	let [quantity, setQuantity] = useState<number>(() => {
		return cartProductInfo[index]?.quantity;
	});

	const goToItem = () => {
		navigate(`/product/${props.id}`);
	};

	//   const speak = ( e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
	//     e.stopPropagation()
	//     console.log("sok")
	//   }

	const minusQuantity = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation();
		if (quantity > 1) {
			setQuantity((prev) => prev - 1);
			dispatch(updateCart({ id: props.id, quantity: quantity - 1 }));
		}
	};
	const addQuantity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		if (quantity < 30) {
			setQuantity((prev) => prev + 1);
			dispatch(updateCart({ id: props.id, quantity: quantity + 1 }));
		}
	};

    const deleteCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        e.stopPropagation();
        dispatch(deleteItem({ id: props.id}));


 
    }

	return (
		<div className="cartCard" onClick={goToItem}>
			<div>
				<img src={props.image} alt="" />
			</div>
			<div>
				<h2>{props.title}</h2>
				<div className="quantityControls">
					<button onClick={(e) => minusQuantity(e)}>-</button>
					<span>{quantity}</span>
					<button onClick={(e) => addQuantity(e)}>+</button>
				</div>
			</div>
			<div>
				<h2>${props.price.toFixed(2)}</h2>
			</div>
			<div onClick={e => deleteCard(e)} className="deleteCard">
				<FaTrashAlt />
			</div>
		</div>
	);
};

export default CartCard;
