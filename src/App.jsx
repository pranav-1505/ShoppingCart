import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Productlist from './components/productlist'
import Cart from './components/cart'

localStorage
function App() {
  const[products, setProducts]=useState([]);
  const[cartItem, setcartItem]=useState([]);

  useEffect(()=>{
    const fetchProduct = async()=>{
      try{
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
      }
  catch(error){
          console.error('Error fetching data',error)
  }

    }
    fetchProduct();
  },[])

const addToProduct=(products)=>{
 
  const existingItem = cartItem.find(item=>item.id === products.id)
  if (existingItem) {
    setcartItem(cartItem.map(item =>
      item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    setcartItem([...cartItem, { ...products, quantity: 1 }]);
  }

}

const increaseQuantity = (productId) => {
  setcartItem(cartItem.map(item =>
    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  ));
};

const decreaseQuantity = (productId) => {
  setcartItem(cartItem.map(item =>
    item.id === productId
      ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
      : item
  ));

};

const removeItem = (productId) => {
  setcartItem(cartItem.filter(item => item.id !== productId));
};
  return (
    <div className='main_shop'>
       <h1>Shopping cart</h1>
       <div className='list_items'>
       <Productlist  products={products} addToProduct={addToProduct}/>
       <Cart 
       cartItem={cartItem}
        increaseQuantity={increaseQuantity} 
       decreaseQuantity={decreaseQuantity}
       removeItem={removeItem}

       />
       </div>
    </div>
  )
}

export default App
