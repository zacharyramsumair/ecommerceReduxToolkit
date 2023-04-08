import React, { useState } from "react";
import { useGetData } from "../hooks/useGetData";
import { useParams } from "react-router-dom";
import "./styles/SingleProduct.scss";

type Props = {};

const SingleProduct = (props: Props) => {
	let [quantity, setQuantity] = useState<number>(1);

	let { productID } = useParams();
	let { isLoading, error, data } = useGetData({
		key: productID,
		endpoint: `products/${productID}`,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>An Error has occurred ... {error?.message}</div>;
	}

	const minusQuantity = () => {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	const plusQuantity = () => {
		if (quantity < 30) {
			setQuantity((prev) => prev + 1);
		}
	};

	return (
		<section className="singleProduct">
			{/* <p>{data?.data.title}</p> */}
			<div className="img">
				<img src={data?.data.image} alt="" />
			</div>
			<div className="info">
				<h2>{data?.data.title}</h2>
				<p>{data?.data.rating.rate}</p>
				<p>{data?.data.description}</p>
				<h3>${data?.data.price}</h3>
			</div>
			<div className="buying">
				<h2>${data?.data.price}</h2>
				<div className="quantityControls">
					<button onClick={minusQuantity}>-</button>
					<span>{quantity}</span>
					<button onClick={plusQuantity}>+</button>
				</div>

				<button className="addToCart">Add to Cart</button>
			</div>
		</section>
	);
};

export default SingleProduct;
