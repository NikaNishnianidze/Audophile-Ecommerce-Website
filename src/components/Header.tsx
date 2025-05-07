import hamburger from "../../public/assets/Group.svg";
import logo from "../../public/assets/audiophile 2.svg";
import cartlogo from "../../public/assets/Combined Shape 2.svg";
import { useEcommerce } from "../context/EcommerceProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const { menu, setMenu, cart, setCart } = useEcommerce();
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleHome = () => {
    navigate("/home");
    window.scrollTo(0, 0);
  };
  const handleRemoveAll = () => {
    setCart([]);
    localStorage.clear();
  };
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/checkout");
      setCartOpen(false);
    } else {
      return;
    }
  };
  const handleSeeHeadphones = () => {
    navigate("/headphones");
    window.scrollTo(0, 0);
  };
  const handleSeeSpeakers = () => {
    navigate("/speakers");
    window.scrollTo(0, 0);
  };
  const handleSeeEarphones = () => {
    navigate("/earphones");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center">
      <header className="w-full tb:w-full flex items-center justify-between py-[32px] px-[24px] dk:px-[165px] border-b-[1px] border-white bg-header tb:bg-tabletheader">
        <div className="div mb:flex mb:gap-[76px] dk:w-[770px] mb:items-center mb:justify-between dk:gap-0 dk:justify-between tb:flex tb:flex-row tb:gap-[42px] tb:items-center">
          <div className="hamburger dk:hidden mb:block tb:block">
            <img onClick={handleMenu} src={hamburger} alt="hamburger icon" />
          </div>
          <div className="logo">
            <img src={logo} alt="logo icon" onClick={handleHome} />
          </div>
          <div className="menu-list mb:hidden dk:block">
            <ul className="flex items-center gap-[34px] text-white text-[13px] tracking-[2px] font-bold uppercase">
              <li onClick={handleHome}>home</li>
              <li onClick={handleSeeHeadphones}>headphones</li>
              <li onClick={handleSeeSpeakers}>speakers</li>
              <li onClick={handleSeeEarphones}>earphones</li>
            </ul>
          </div>
        </div>
        <div className="cart" onClick={() => setCartOpen(true)}>
          <img src={cartlogo} alt="cart icon" />
        </div>
      </header>
      {cartOpen && (
        <>
          <div
            onClick={() => setCartOpen(false)}
            className="fixed w-full left-1/2 transform -translate-x-1/2 inset-0 top-0 bg-black/50 z-30"
          ></div>
          <div className="absolute top-[90px] left-1/2 tb:left-[500px] dk:left-[1050px] tb:w-[337px] dk:w-[377px] transform rounded-[8px] mt-[24px] py-[32px] px-[20px] -translate-x-1/2 left-0 w-[327px] bg-white z-40 p-6">
            <div className="first-line flex items-center justify-between">
              <p className="text-black text-[18px] font-bold tracking-[1.286px]">
                cart ({cart.length})
              </p>
              <p
                onClick={handleRemoveAll}
                className="text-black/50 text-[15px] font-normal cursor-pointer underline hover:text-[#D87D4A] "
              >
                Remove all
              </p>
            </div>
            <div className="cart-items flex flex-col gap-[24px] mt-[31px]">
              {cart.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-[16px]">
                    <img
                      src={item.image}
                      alt="item image"
                      className="w-[64px] h-[64px] rounded-8px"
                    />
                    <div className="name-price flex flex-col">
                      <p className="text-black text-[15px] font-bold">
                        {item.slug}
                      </p>
                      <p className="text-black/50 text-[14px] font-bold">
                        $ {Number(item.price).toLocaleString()}
                      </p>
                    </div>
                    <div className="quantity">
                      <div className="amount bg-zx7 w-[96px] py-[15px] text-center px-[15.5] flex items-center gap-[20px] justify-center rounded-[8px]">
                        <p
                          onClick={() => {
                            if (item.quantity > 1) {
                              const updatedCart = cart.map((cartItem, i) =>
                                i === index
                                  ? {
                                      ...cartItem,
                                      quantity: cartItem.quantity - 1,
                                    }
                                  : cartItem
                              );
                              setCart(updatedCart);
                              localStorage.setItem(
                                "cart",
                                JSON.stringify(updatedCart)
                              );
                            }
                          }}
                          className="text-black/25 text-[13px] font-bold cursor-pointer"
                        >
                          -
                        </p>
                        <p className="text-black text-[13px] font-bold">
                          {item.quantity}
                        </p>
                        <p
                          onClick={() => {
                            const updatedCart = cart.map((cartItem, i) =>
                              i === index
                                ? {
                                    ...cartItem,
                                    quantity: cartItem.quantity + 1,
                                  }
                                : cartItem
                            );
                            setCart(updatedCart);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify(updatedCart)
                            );
                          }}
                          className="text-black/25 text-[13px] font-bold cursor-pointer"
                        >
                          +
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="total-price mt-[32px] flex items-center justify-between">
              <p className="uppercase text-black/50 font-bold text-[15px]">
                total
              </p>
              <p className="text-black font-bold text-[18px] uppercase">
                $ {totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="button flex flex-col items-center">
              <button
                onClick={handleCheckout}
                className="mt-[24px] uppercase hover:bg-button cursor-pointer text-center text-white font-bold text-[13px] w-[271px] py-[15px] bg-product"
              >
                checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
