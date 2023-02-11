import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-uwvtg5zp.us.auth0.com
// ShAKEg52430xF2RfP0ptgIqa8aBZWg3Q
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-uwvtg5zp.us.auth0.com"
    clientId="ShAKEg52430xF2RfP0ptgIqa8aBZWg3Q"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>
);
