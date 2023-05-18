import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Table from './components/Table';
function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/product');
        const products = await response.json();
        console.log('products', products);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  const handleSearchChange = (value) => {
    setSearch(value);
    console.log(value, 'desde app');
  }

  return (
    <>
      <Nav onSearchChange={handleSearchChange} />
      <div className="container">
        <Table productsData={products} />
      </div>
    </>
  );
}

export default App;
