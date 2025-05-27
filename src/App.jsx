import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
import Layout from './components/Layout'
import HomePage from './Pages/Home/HomePage'
import AboutPage from './Pages/About/AboutPage'
import BlogPage from './Pages/Blogs/BlogPage';
import Error404Page from './Pages/404Page/Error404Page';
import Products from './Pages/Products_List/Products';
import CartPage from './Pages/Cart/CartPage';
import { ProdProvider } from './contexts/ProdProvider';
import ProductDetail from './Pages/Product_Detail/ProductDetail';
import TestPage from './Pages/Test/TestPage';
import Contact from './Pages/Contact/Contact';

const App = () => {
  let [cartProducts, setCartProducts] = useState([
    // {
    //   id: 1,
    //   name: "SHADOW 5000mAh MagSafe Power Bank",
    //   feat_img: "https://www.tintaccessories.com/wp-content/uploads/2024/01/ARMOUR-Clear-JPEG-1024x1024.jpg",
    //   price: 500,
    //   slug: "shadow-5000mah-magsafe-power-bank",
    //   quantity: 1
    // }
  ])


  // >>>>>>>>>>>>>> Get Cart Item
  useEffect(() => {
    let getCartItems = JSON.parse(localStorage.getItem("cartItems"))
    setCartProducts(getCartItems || [])
  }, [])

  // >>>>>>>>>>>>>> Set Cart Item
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProducts))
  }, [cartProducts])


  const addToCartFunc = (cartItem) => {
    // console.log('Added To CaRT')
    setCartProducts((prevItem) => {
      let existingItem = prevItem.find((elem) => elem.id === cartItem.id)
      // console.log('existingItem', existingItem)
      if (existingItem) {
        // console.log('Existing Item')
        return prevItem.map((prevElem) => prevElem.id === cartItem.id ? { ...prevElem, quantity: prevElem.quantity + cartItem.quantity } : prevElem )
      }

      return [...prevItem, cartItem]

    })
    // console.log(cartItem)
  }


  const changeQuantityFunc = (id, newQty) => {
    setCartProducts(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };


  const removeFromCartFunc = (id) => {
    setCartProducts((prevItem) => prevItem.filter((elem) => elem.id !== id))
    // console.log('Remove From CaRT')
  }

  return (
    <>

      <ProdProvider value={{ cartProducts, addToCartFunc, changeQuantityFunc, removeFromCartFunc }} >

        <Routes>

          <Route path='/' element={<Layout />}  >

            <Route index element={<HomePage />} />

            <Route path='/about-us' element={<AboutPage />} />

            <Route path='/blogs' element={<BlogPage />} />

            <Route path='/products' element={<Products />} />

            <Route path='/products/:slug' element={<ProductDetail />} />

            <Route path='/cart' element={<CartPage />} />

            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Error404Page />} />

            <Route path='/test' element={<TestPage />} />

          </Route>

        </Routes>

      </ProdProvider>

    </>
  )
}

export default App