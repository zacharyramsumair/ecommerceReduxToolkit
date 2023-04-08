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
		return <section className="products">Loading...</section>;
	}
	if (error) {
		return <section className="products">An Error has occurred ... {error?.message}</section>;
	}

   

	let ProductElements = data?.data.map((item:IProductElements) => {
        return <ProductCard image={item.image} title={item.title} price={item.price} rating={item.rating.rate} id={item.id}/>
	});
	return (
		<section className="products">
            {ProductElements}
		</section>
	);
};

export default Products;
