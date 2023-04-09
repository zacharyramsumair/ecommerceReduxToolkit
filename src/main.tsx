import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from 'redux-persist/integration/react'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
		<PersistGate loading={"loading"} persistor={persistor}>
				
		<QueryClientProvider client={queryClient}>
			
			<Router>
				<App />
			</Router>
		</QueryClientProvider>
		</PersistGate>

		</Provider>
	</React.StrictMode>
);


