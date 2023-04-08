import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";



function App() {
	return (
		<div className="App">
      <nav>
        <ul>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/product/bag">SingleProduct</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
			<Routes>
				<Route path="/">
					<Route index element={<Products />} />
					<Route path="product/:productID" element={<SingleProduct />} />
					<Route path="cart" element={<Cart />} />
				</Route>

        <Route path="*" element={<Error />} />

			</Routes>
		</div>
	);
}

export default App;
