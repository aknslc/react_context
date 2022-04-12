import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { Money } from "./context/MoneyContext";
import { Productss } from './context/ProductsContext';




function App() {

  useEffect(() => {

    getProducts();


  }, [])

  const [money, setMoney] = useState(1000);
  const [products, setProducts] = useState([]);

  const data = {
    money,
    setMoney,
    products,
    setProducts,
    
  }

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    const JsonData = await response.json();
    setProducts(JsonData);
  }

  return (
    <>
      <Money.Provider value={data}>
        <Header />
      </Money.Provider>

      <Productss.Provider value={data}>
        <Products />
      </Productss.Provider>

    </>
  );
}

export default App;
