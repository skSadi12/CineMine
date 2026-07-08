import React, { useState } from "react";
import logo from "../assets/logo.svg"
import ring from "../assets/ring.svg"
import moon from "../assets/icons/moon.svg"
import shopping from "../assets/shopping-cart.svg"
import Cart from "../cine/Cart";

const Header = () => {
  const[showCart, setShowCart] = useState(false)
  function onHandleCartShow(){
    setShowCart(true)
  }
  function handleHideCart(){
    setShowCart(false)
  }
  return (
    <header>
      {showCart && <Cart  onCancel={handleHideCart}/>}
      
      <nav className="container mx-auto flex items-center justify-between space-x-10 py-6">
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            width={139}
            height={26}
            alt="Logo"
          />
        </a>

        {/* Navigation Icons */}
        <ul className="flex items-center space-x-5">
          <li>
            <a
              href="#"
              className="inline-block rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
            >
              <img
                src={ring}
                width={24}
                height={24}
                alt="Notifications"
              />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-block rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
            >
              <img
                src={moon}
                width={24}
                height={24}
                alt="Dark Mode"
              />
            </a>
          </li>

          <li>
            <a
              onClick={onHandleCartShow}
              href="#"
              className="inline-block rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
            >
              <img
                src={shopping}
                width={24}
                height={24}
                alt="Shopping Cart"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;