import React, { useEffect, useState } from "react";
import { useGetData } from "../hooks/useGetData";
import { useParams } from "react-router-dom";
import "./styles/SingleProduct.scss";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { RootState } from "../app/store";

type Props = {};

const SingleProduct = (props: Props) => {
	const dispatch = useDispatch();

	let { productID } = useParams();
	let { isLoading, error, data } = useGetData({
		key: productID,
		endpoint: `products/${productID}`,
	});

	const cartProductInfo = useSelector((state: RootState) => state.cart.value);
	const index = cartProductInfo.findIndex(
		(item) => item.id === data?.data?.id
	);
	let [quantity, setQuantity] = useState<number>(
		cartProductInfo[index]?.quantity | 1
	);

	const minusQuantity = () => {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>An Error has occurred ... {error?.message}</div>;
	}

	const plusQuantity = () => {
		if (quantity < 30) {
			setQuantity((prev) => prev + 1);
		}
	};

	const updateCart = () => {
		dispatch(
			addToCart({
				id: data.data.id,
				quantity,
				title: data.data.title,
				image: data.data.image,
				price: data.data.price,
			})
		);
	};

	return (
		<section className="singleProduct">
			{/* <p>{data?.data.title}</p> */}
			<div className="img">
				<img src={data?.data?.image} alt="" />
			</div>
			<div className="info">
				<h2>{data?.data?.title}</h2>
				<div className="rating">
					<p>{data?.data?.rating?.rate}</p> <AiFillStar />
				</div>
				<p>{data?.data?.description}</p>
				<h3>${data?.data?.price}</h3>
			</div>
			<div className="buying">
				<h2>${data?.data?.price}</h2>
				<div className="quantityControls">
					<button onClick={minusQuantity}>-</button>
					<span>{quantity}</span>
					<button onClick={plusQuantity}>+</button>
				</div>

				<button className="addToCart" onClick={updateCart}>
					Add to Cart
				</button>
			</div>
		</section>
	);
};

export default SingleProduct;
