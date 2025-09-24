// food/src/context/StoreContext.jsx
import { createContext, useEffect, useState } from "react"
import { food_list } from "../Assets/frontend_assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [cartitems, setcartitems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : {};
  });

  const [token, setToken] = useState("");
  const url = "http://localhost:4000";

  const addToCart = (itemId) => {
    if (!cartitems[itemId]) {
      setcartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  }

  const removeCart = (itemId) => {
    setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const getTotal = () => {
    let totalAmount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let item_info = food_list.find((product) => product._id === item);
        totalAmount += item_info.price * cartitems[item]
      }
    }
    return totalAmount;
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartitems));
  }, [cartitems]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [])

  const contextvalue = {
    food_list,
    cartitems,
    setcartitems,
    addToCart,
    removeCart,
    getTotal,
    token,
    setToken,
    url
  }

  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider