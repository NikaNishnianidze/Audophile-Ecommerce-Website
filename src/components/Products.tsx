import { useNavigate, useParams } from "react-router-dom";
import { useEcommerce } from "../context/EcommerceProvider";
import homeHeadphones from "../../public/assets/home/mobile/0d2e6fc887d6513c34f10bac56e324f01ec77185.png";
import arrowRight from "../../public/assets/Path 2.svg";
import homeSpeaker from "../../public/assets/home/mobile/image-speaker-zx9.png";
import homeEarphones from "../../public/assets/home/mobile/d47b304d532a222f08c1500c16aa3ed52c16aa20.png";
import logo from "../../public/assets/audiophile 2.svg";
import socials from "../../public/assets/Group 30.svg";

export default function Products() {
  const { product } = useParams();
  const { products, menu, setMenu } = useEcommerce();
  const navigate = useNavigate();
  const productData = products.filter((item) => item.category === product);
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
  const handleSeeProduct = (id: string) => {
    navigate(`/${product}/${id}`);
    window.scrollTo(0, 0);
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
      <div className="product-category w-[375px] tb:w-full tb:py-[100px] dk:py-[98px] py-[32px] bg-black text-white flex flex-col items-center text-[28px] font-bold uppercase">
        <p>{product}</p>
      </div>
      {productData[0] && (
        <div className="dk:flex dk:items-center dk:w-[1110px] dk:justify-between dk:gap-[125px]">
          <div className="first-photo mt-[64px] tb:mt-[120px]">
            <img
              src={productData[0].categoryImage.mobile}
              alt="product"
              className="w-[327px] h-[352px] object-cover rounded-[8px] tb:w-[689px] tb:h-[550px]"
            />
          </div>
          <div className="first-product-info mt-[32px] flex flex-col tb:mt-[52px] dk:items-start items-center gap-[24px] tb:gap-[32px] text-center">
            <p className="text-[#D87D4A] text-[14px] font-normal tb:tracking-[10px]">
              NEW PRODUCT
            </p>
            <h3 className="text-black uppercase dk:text-left text-[28px] font-bold w-[250px] tb:text-[40px]">
              {productData[0].name}
            </h3>
            <p className="text-[15px] text-black/50 font-normal dk:w-[445px] dk:text-left w-[327px] tb:w-[572px]">
              {productData[0].description}
            </p>
            <button
              onClick={() => handleSeeProduct(productData[0].id.toString())}
              className="uppercase text-white text-[13px] cursor-pointer hover:bg-button py-[15px] font-bold w-[160px] bg-speaker"
            >
              see product
            </button>
          </div>
        </div>
      )}
      {productData[1] && (
        <div className="dk:flex dk:items-center dk:w-[1110px] dk:justify-between dk:gap-[125px]">
          <div className="second-photo mt-[120px] dk:order-2">
            <img
              src={productData[1].categoryImage.mobile}
              alt="product image"
              className="w-[327px] mb:block tb:block dk:hidden  h-[352px] object-cover rounded-[8px] tb:w-[689px] tb:h-[550px]"
            />
            <img
              src={productData[1].categoryImage.desktop}
              alt="product image"
              className="w-[327px] mb:hidden tb:hidden dk:block  h-[352px] object-cover rounded-[8px] tb:w-[689px] tb:h-[550px] dk:w-[540px]"
            />
          </div>
          <div className="second-product-info dk:order-1 mt-[32px] dk:items-start tb:mt-[52px] tb:gap-[32px] flex flex-col items-center gap-[24px] text-center">
            <h3 className="text-black uppercase dk:text-left text-[28px] font-bold w-[250px] tb:text-[40px] tb:w-[300px]">
              {productData[1].name}
            </h3>
            <p className="text-[15px] text-black/50 dk:w-[445px] dk:text-left font-normal w-[327px] tb:w-[572px] ">
              {productData[1].description}
            </p>
            <button
              onClick={() => handleSeeProduct(productData[1].id.toString())}
              className="uppercase text-white hover:bg-button  cursor-pointer text-[13px] py-[15px] font-bold w-[160px] bg-speaker"
            >
              see product
            </button>
          </div>
        </div>
      )}
      {productData[2]?.categoryImage && (
        <div className="dk:flex dk:items-center dk:w-[1110px] dk:justify-between dk:gap-[125px]">
          <div className="third-photo mt-[120px]">
            <img
              src={productData[2].categoryImage.mobile}
              alt="product image"
              className="w-[327px] dk:w-[540px] h-[352px] object-cover rounded-[8px]  tb:w-[689px] tb:h-[550px]"
            />
          </div>
          {productData[2]?.name && productData[2]?.description && (
            <div className="third-product-info mt-[32px] dk:items-start flex flex-col items-center gap-[24px] text-center">
              <h3 className="text-black uppercase dk:text-left text-[28px] font-bold w-[250px] tb:text-[40px] tb:w-[300px]">
                {productData[2].name}
              </h3>
              <p className="text-[15px] text-black/50 dk:w-[445px] dk:text-left font-normal w-[327px] tb:w-[572px]">
                {productData[2].description}
              </p>
              <button
                onClick={() => handleSeeProduct(productData[2].id.toString())}
                className="uppercase text-white hover:bg-button cursor-pointer text-[13px] py-[15px] font-bold w-[160px] bg-speaker"
              >
                see product
              </button>
            </div>
          )}
        </div>
      )}

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
