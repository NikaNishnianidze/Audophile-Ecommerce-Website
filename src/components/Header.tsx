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

  return (
    <div className="flex flex-col items-center">
      <header className="w-[375px] flex items-center justify-between py-[32px] px-[24px] border-b-[1px] border-white bg-header">
        <div className="hamburger">
          <img onClick={handleMenu} src={hamburger} alt="hamburger icon" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo icon" onClick={handleHome} />
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
          <div className="absolute top-[90px] left-1/2 transform rounded-[8px] mt-[24px] py-[32px] px-[28px] -translate-x-1/2 left-0 w-[327px] bg-white z-40 p-6">
            <div className="first-line flex items-center justify-between">
              <p className="text-black text-[18px] font-bold tracking-[1.286px]">
                cart ({cart.length})
              </p>
              <p
                onClick={handleRemoveAll}
                className="text-black/50 text-[15px] font-normal underline"
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
                      <p>{item.slug}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
