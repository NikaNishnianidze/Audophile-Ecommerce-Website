import homeHeadphones from "../../public/assets/home/mobile/0d2e6fc887d6513c34f10bac56e324f01ec77185.png";
import arrowRight from "../../public/assets/Path 2.svg";
import homeSpeaker from "../../public/assets/home/mobile/image-speaker-zx9.png";
import homeEarphones from "../../public/assets/home/mobile/d47b304d532a222f08c1500c16aa3ed52c16aa20.png";
import logo from "../../public/assets/audiophile 2.svg";
import socials from "../../public/assets/Group 30.svg";
import { useNavigate } from "react-router-dom";
import { useEcommerce } from "../context/EcommerceProvider";
import newProductMobile from "../../public/assets/home/mobile/image-header.jpg";
import newProductTablet from "../../public/assets/home/tablet/image-header.jpg";
import newProductDesktop from "../../public/assets/home/desktop/image-hero.jpg";

export default function Home() {
  const navigate = useNavigate();
  const { menu, setMenu } = useEcommerce();

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
  const handleGoHome = () => {
    navigate("/home");
    window.scrollTo(0, 0);
  };
  const handleSeeMarkII = () => {
    navigate(`/:product/${4}`);
  };
  const handleSeeZx9 = () => {
    navigate(`/:product/${6}`);
  };
  const handleSeeZx7 = () => {
    navigate(`/:product/${5}`);
  };
  const handleSeeYx1 = () => {
    navigate(`/:product/${1}`);
  };
  return (
    <div className="flex flex-col items-center">
      {menu && (
        <>
          <div
            onClick={() => setMenu(false)}
            className="fixed w-[375px] left-1/2 tb:w-full transform -translate-x-1/2 inset-0 top-0 bg-black/50 z-30"
          ></div>
          <div className="absolute top-[90px] tb:w-full left-1/2 transform -translate-x-1/2 left-0 w-[375px] bg-white z-40 p-6">
            <div className="aligment tb:flex tb:flex-row tb:mt-[56px] tb:gap-[10px] tb:justify-center">
              <div
                onClick={handleSeeHeadphones}
                className="headphones-box flex flex-col items-center tb:w-[223px] w-[327px] tb:mt-0  rounded-[8px] bg-shopitems mt-[75px] relative"
              >
                <img
                  src={homeHeadphones}
                  alt="home headphones"
                  className="w-[80px] h-[104px] absolute -top-11"
                />
                <p className="mt-[88px] text-[#000] text-[15px] font-bold">
                  HEADPHONES
                </p>
                <div className="shop mt-[17px] mb-[22px] flex items-center gap-[13px]">
                  <p className="text-black/30 text-[13px] font-bold">SHOP</p>
                  <img src={arrowRight} alt="arrow right" />
                </div>
              </div>
              <div
                onClick={handleSeeSpeakers}
                className="speakers-box w-[327px] rounded-[8px]  tb:w-[223px] bg-shopitems tb:mt-0 flex flex-col items-center relative mt-[68px]"
              >
                <img
                  src={homeSpeaker}
                  alt="home speakers"
                  className="w-[80px] h-[104px] absolute -top-11 tb:w-[84px] tb:h-[101px]"
                />
                <p className="mt-[88px] text-[#000] text-[15px] font-bold">
                  SPEAKERS
                </p>
                <div className="shop mt-[17px] mb-[22px] flex items-center gap-[13px]">
                  <p className="text-black/30 text-[13px] font-bold">SHOP</p>
                  <img src={arrowRight} alt="arrow right" />
                </div>
              </div>
              <div
                onClick={handleSeeEarphones}
                className="earphones-box w-[327px] rounded-[8px] tb:w-[223px] tb:mt-0 bg-shopitems flex flex-col items-center relative mt-[68px]"
              >
                <img
                  src={homeEarphones}
                  alt="home headphones"
                  className="w-[147px] h-[133px] absolute -top-11"
                />
                <p className="mt-[88px] text-[#000] text-[15px] font-bold">
                  EARPHONES
                </p>
                <div className="shop mt-[17px] mb-[22px] flex items-center gap-[13px]">
                  <p className="text-black/30 text-[13px] font-bold">SHOP</p>
                  <img src={arrowRight} alt="arrow right" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="new-product w-full flex flex-col items-center tb:w-full">
        <div className="product-image relative ">
          <div className="images">
            <img src={newProductMobile} alt="" className="mb:block tb:hidden" />
            <img
              src={newProductTablet}
              alt=""
              className="mb:hidden tb:block dk:hidden"
            />
            <img
              src={newProductDesktop}
              alt=""
              className="tb:hidden mb:hidden dk:block"
            />
          </div>
          <div className="info absolute mb:top-[180px] tb:top-[180px] dk:top-[140px]  dk:justify-center dk:w-[600px] flex flex-col items-center justify-center w-full">
            <p className="mt-[108px] leading-[10px] text-[14px] tracking-[10px] text-center text-[#fff] font-normal">
              NEW PRODUCT
            </p>
            <h1 className="mt-[16px] text-[36px] text-white w-[328px] dk:text-[56px] dk:w-[396px] dk:text-left font-bold text-center uppercase">
              XX99 Mark II HeadphoneS
            </h1>
            <p className="mt-[24px] text-[15px] font-normal w-[300px] text-white text-center">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              onClick={handleSeeMarkII}
              className="mt-[28px] mb-[90px] bg-product w-[160px] py-[15px] text-white text-[13px] dk:mt-[40px] hover:bg-button font-bold uppercase"
            >
              See Product
            </button>
          </div>
        </div>
      </div>
      <div className="product tb:flex tb:flex-wrap tb:items-center tb:mt-[160px] tb:gap-[10px] tb:px-[35px] dk:gap-[30px]">
        <div
          onClick={handleSeeHeadphones}
          className="headphones-box flex flex-col tb:mt-0 tb:w-[223px] dk:w-[350px] items-center w-[327px]  rounded-[8px] bg-shopitems mt-[75px] relative"
        >
          <img
            src={homeHeadphones}
            alt="home headphones"
            className="w-[80px] h-[104px] absolute -top-11 tb:w-[79px] dk:w-[122px] dk:h-[160px] dk:-top-21"
          />
          <p className="mt-[88px] text-[#000] text-[15px] font-bold dk:mt-[116px]">
            HEADPHONES
          </p>
          <div className="shop mt-[17px] mb-[22px] flex items-center gap-[13px]">
            <p className="text-black/30 text-[13px] font-bold">SHOP</p>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </div>
        <div
          onClick={handleSeeSpeakers}
          className="speakers-box w-[327px] tb:mt-0 tb:w-[223px] dk:w-[350px] rounded-[8px] bg-shopitems flex flex-col items-center relative mt-[68px]"
        >
          <img
            src={homeSpeaker}
            alt="home speakers"
            className="w-[80px] h-[104px] absolute -top-11 tb:w-[79px] dk:w-[121px] dk:h-[146px] dk:-top-18"
          />
          <p className="mt-[88px] text-[#000] text-[15px] font-bold dk:mt-[116px]">
            SPEAKERS
          </p>
          <div className="shop mt-[17px] mb-[22px] flex items-center gap-[13px]">
            <p className="text-black/30 text-[13px] font-bold">SHOP</p>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </div>
        <div
          onClick={handleSeeEarphones}
          className="earphones-box w-[327px] tb:mt-0 tb:w-[223px] dk:w-[330px] rounded-[8px] bg-shopitems flex flex-col items-center relative mt-[68px]"
        >
          <img
            src={homeEarphones}
            alt="home headphones"
            className="w-[147px] h-[133px] absolute -top-16 dk:w-[178px] dk:h-[161px] dk:-top-22"
          />
          <p className="mt-[88px] text-[#000] text-[15px] font-bold dk:mt-[116px]">
            EARPHONES
          </p>
          <div className="shop mt-[17px] mb-[22px] flex items-center gap-[13px]">
            <p className="text-black/30 text-[13px] font-bold">SHOP</p>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </div>
      </div>
      <div className="speaker mt-[120px] w-[327px] tb:mt-[96px] dk:flex dk:flex-row dk:justify-center dk:gap-[138px] tb:w-[689px] dk:w-[1110px] dk:mt-[168px] tb:pb-[64px] bg-speaker rounded-[8px] mb:flex mb:flex-col mb:items-center">
        <div className="image">
          <img
            src={homeSpeaker}
            alt="home speaker"
            className="mt-[55px] w-[172.248px] h-[207px] tb:w-[197px] tb:h-[237px] dk:w-[410px] dk:h-[493px] "
          />
        </div>
        <div className="info dk:flex dk:flex-col dk:items-start mb:flex mb:flex-col mb:items-center">
          <h2 className="text-[36px] font-bold text-white w-[200px] text-center dk:text-left mt-[32px] tb:mt-[64px] tb:text-[56px] tb:w-[261px] tb:leading-[59px] leading-[40px]">
            ZX9 SPEAKER
          </h2>
          <p className="mt-[24px] text-[15px] font-normal text-white/50 leading-[25px] dk:text-left text-center w-[280px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button
            onClick={handleSeeZx9}
            className="mt-[24px] w-[160px] cursor-pointer hover:bg-graybutton tb:mt-[40px] py-[15px] bg-black text-white text-[13px] font-bold mb-[55px]"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div className="zx7 w-[327px] tb:w-[689px] tb:h-[320px] h-[315px] dk:w-[1100px] mt-[30px] tb:mt-[32px] bg-zx7 py-[101px] pl-[25px] dk:pl-[95px] rounded-[8px]">
        <h3 className="text-[28px] text-black font-bold">ZX7 SPEAKER</h3>
        <button
          onClick={handleSeeZx7}
          className="w-[160px] cursor-pointer hover:bg-black hover:text-white py-[15px] border-black border-[1px] mt-[32px] text-black text-[13px] font-bold"
        >
          SEE PRODUCT
        </button>
      </div>
      <div className="EARPHONES flex flex-col gap-[30px] mt-[30px] tb:flex-row tb:gap-[10px]">
        <div className="earphones-photo w-[327px] h-[200px] tb:w-[339px] tb:h-[320px] rounded-[8px] dk:w-[540px]"></div>
        <div className="product w-[327px] py-[41px] rounded-[8px] bg-zx7 pl-[24px] tb:w-[339px] tb:h-[320px] dk:w-[540px] dk:px-[95px] tb:py-[101px] tb:pl-[42px]">
          <h3 className="text-[28px] text-black font-bold">YX1 EARPHONES</h3>
          <button
            onClick={handleSeeYx1}
            className="w-[160px] py-[15px] border-black border-[1px] mt-[32px] text-black text-[13px] font-bold"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div className="best-product mt-[120px] w-[327px] dk:mt-[200px] dk:w-[1110px] text-center dk:flex dk:justify-between dk:flex-row dk:items-center tb:mt-[96px] tb:w-[689px] ">
        <div className="best-photo order-2">
          <div className="photo w-[327px] h-[300px] rounded-[8px]  tb:w-[689px] tb:h-[300px] dk:w-[540px] dk:h-[588px]"></div>
        </div>
        <div className="title tb:text-center order-1 tb:flex tb:items-center tb:flex-col ">
          <h3 className="mt-[40px] text-[28px] uppercase text-black font-bold tb:mt-[63px] tb:text-[40px] dk:w-[445px] dk:text-left tb:w-[573px]">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h3>
          <p className="mt-[32px] text-[15px] font-normal text-black/50 w-[310px] tb:w-[573px] dk:w-[445px] dk:text-left">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <footer className="w-full bg-footer mt-[120px] flex flex-col items-center tb:items-center dk:items-center tb:px-[40px] tb:w-full">
        <div className="div mb:w-[327px] tb:w-[689px] dk:w-[1110px] mb:items-center mb:flex mb:flex-col tb:flex tb:flex-col tb:items-start dk:flex dk:flex-col dk:items-start ">
          <div className="rectangle w-[101px] h-[4px] bg-speaker"></div>
          <div className="dkstyle dk:flex dk:justify-between dk:items-center dk:w-[1110px]">
            <div className="logo mt-[48px]">
              <img src={logo} alt="logo icon" />
            </div>
            <ul className="mt-[48px] flex flex-col items-center tb:flex-row tb:gap-[34px] gap-[16px] text-[13px] text-white font-bold leading-[25px]">
              <li
                onClick={handleGoHome}
                className="cursor-pointer hover:text-[#D87D4A]"
              >
                HOME
              </li>
              <li
                onClick={handleSeeHeadphones}
                className="cursor-pointer hover:text-[#D87D4A]"
              >
                HEADPHONES
              </li>
              <li
                onClick={handleSeeSpeakers}
                className="cursor-pointer hover:text-[#D87D4A]"
              >
                SPEAKERS
              </li>
              <li
                onClick={handleSeeEarphones}
                className="cursor-pointer hover:text-[#D87D4A]"
              >
                EARPHONES
              </li>
            </ul>
          </div>
          <p className="w-[327px] mt-[48px] text-center text-white dk:w-[540px] dk:text-left font-bold text-[15px] tb:text-left tb:w-[696px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="socials tb:flex tb:flex-row tb:w-[689px] tb:mb-10 dk:mb-10 dk:w-[1110px] dk:justify-between dk:items-center tb:justify-between tb:items-center tb:mt-[80px]">
            <p className="mt-[48px] text-[15px] text-white font-bold tb:mt-0 dk:mt-0">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="socials mt-[48px] mb-[38px] tb:mt-0 dk:mb-0 tb:mb-0">
              <img src={socials} alt="socials" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
