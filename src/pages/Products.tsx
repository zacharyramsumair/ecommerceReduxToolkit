import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useGetData } from "../hooks/useGetData";
import "./styles/Products.scss"

type Props = {};

export interface IProductElements {
    id:number;
	title: string;
	image: string;
	price: number;
	rating: { rate: number }

}

const Products = (props: Props) => {
	let { isLoading, error, data , refetch} = useGetData({ key:'products', endpoint: "products" });

   

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>An Error has occurred ... {error?.message}</div>;
	}

   

	let ProductElements = data?.data.map((item:IProductElements) => {
        return <ProductCard image={item.image} title={item.title} price={item.price} rating={item.rating.rate} id={item.id}/>
	});
	return (
		<div className="products">
            {ProductElements}

		</div>
	);
};

export default Products;