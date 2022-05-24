import React, { useState,} from "react";
import Books from "./components/Books";
import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import Footer from "./components/Footer";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
      <React.Fragment>
        <Navbar setShow={setShow} size={cart.length} />
        <div className="content">
        </div>
        {show ? (
          <Books handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
        <Footer />
      </React.Fragment>
  );
};

export default App;


