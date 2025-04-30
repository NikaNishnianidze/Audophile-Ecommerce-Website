import hamburger from "../../public/assets/Group.svg";
import logo from "../../public/assets/audiophile 2.svg";
import cart from "../../public/assets/Combined Shape 2.svg";
import { useEcommerce } from "../context/EcommerceProvider";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { menu, setMenu } = useEcommerce();
  const navigate = useNavigate();
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleHome = () => {
    navigate("/home");
    window.scrollTo(0, 0);
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
        <div className="cart">
          <img src={cart} alt="cart icon" />
        </div>
      </header>
    </div>
  );
}
