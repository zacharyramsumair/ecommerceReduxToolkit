import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';


type Props = {
	title: string;
	image: string;
	price: number;
	rating:  number;
    id:number;
	    key:number;


}



const ProductCard = (props: Props) => {
    let navigate = useNavigate()


    const goToItem =() =>{
        console.log("cl")

        navigate(`/product/${props.id}`)
    
    }

	 return (<div className="product" onClick={goToItem}>
		<img src={props.image} alt="" />
		<h2>{props.title}</h2>
		<h3>${props.price}</h3>
		<div className="rating">

		<h3>{props.rating}</h3> <AiFillStar/>
		</div>
	</div>);
};

export default ProductCard;
