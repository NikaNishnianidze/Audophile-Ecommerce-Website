import hamburger from "../../public/assets/Group.svg";
import logo from "../../public/assets/audiophile 2.svg";
import cart from "../../public/assets/Combined Shape 2.svg";

export default function Header() {
  return (
    <>
      <header className="w-full flex items-center justify-between py-[32px] px-[24px] border-b-[1px] border-white bg-header">
        <div className="hamburger">
          <img src={hamburger} alt="hamburger icon" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo icon" />
        </div>
        <div className="cart">
          <img src={cart} alt="cart icon" />
        </div>
      </header>
    </>
  );
}
