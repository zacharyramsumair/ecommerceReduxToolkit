import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { AiOutlineShoppingCart } from "react-icons/ai";



function App() {
	const cartProductInfo = useSelector((state: RootState) => state.cart.value);


	return (
		<div className="App">
      <nav>
        <ul>
          <li><Link to="/">Shop</Link></li>
          {/* <li><Link to="/product/bag">SingleProduct</Link></li> */}
          <li className="cartIcon"><Link to="/cart"><AiOutlineShoppingCart/> </Link> <span className="cartNumber">{cartProductInfo.length}</span></li>
        </ul>
      </nav>
	  <main>

	 
			<Routes>
				<Route path="/">
					<Route index element={<Products />} />
					<Route path="product/:productID" element={<SingleProduct />} />
					<Route path="cart" element={<Cart />} />
				</Route>

        <Route path="*" element={<Error />} />

			</Routes>
			</main>
		</div>
	);
}

export default App;
