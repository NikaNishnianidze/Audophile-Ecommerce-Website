import homeHeadphones from "../../public/assets/home/mobile/0d2e6fc887d6513c34f10bac56e324f01ec77185.png";
import arrowRight from "../../public/assets/Path 2.svg";
import homeSpeaker from "../../public/assets/home/mobile/image-speaker-zx9.png";
import homeEarphones from "../../public/assets/home/mobile/d47b304d532a222f08c1500c16aa3ed52c16aa20.png";
import logo from "../../public/assets/audiophile 2.svg";
import socials from "../../public/assets/Group 30.svg";
import { useNavigate } from "react-router-dom";
import { useEcommerce } from "../context/EcommerceProvider";

export default function Home() {
  const navigate = useNavigate();
  const { menu, setMenu } = useEcommerce();

  const handleSeeHeadphones = () => {
    navigate("/headphones");
  };
  const handleSeeSpeakers = () => {
    navigate("/speakers");
  };
  const handleSeeEarphones = () => {
    navigate("/earphones");
  };
  const handleGoHome = () => {
    navigate("/home");
  };
  return (
    <div className="flex flex-col items-center">
      {menu && (
        <>
          <div
            onClick={() => setMenu(false)}
            className="fixed w-[375px] left-1/2 transform -translate-x-1/2 inset-0 top-0 bg-black/50 z-30"
          ></div>
          <div className="absolute top-[90px] left-1/2 transform -translate-x-1/2 left-0 w-[375px] bg-white z-40 p-6">
            <div
              onClick={handleSeeHeadphones}
              className="headphones-box flex flex-col items-center w-[327px]  rounded-[8px] bg-shopitems mt-[75px] relative"
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
                <p className="text-black/30 text-[13px] font-bold">
                  SHOP
                </p>
                <img src={arrowRight} alt="arrow right" />
              </div>
            </div>
            <div
              onClick={handleSeeSpeakers}
              className="speakers-box w-[327px] rounded-[8px] bg-shopitems flex flex-col items-center relative mt-[68px]"
            >
              <img
                src={homeSpeaker}
                alt="home speakers"
                className="w-[80px] h-[104px] absolute -top-11"
              />
              <p className="mt-[88px] text-[#000] text-[15px] font-bold">
                SPEAKERS
              </p>
              <div className="shop mt-[17px] mb-[22px] flex items-center gap-[13px]">
                <p className="text-black/30 text-[13px] font-bold">
                  SHOP
                </p>
                <img src={arrowRight} alt="arrow right" />
              </div>
            </div>
            <div
              onClick={handleSeeEarphones}
              className="earphones-box w-[327px] rounded-[8px] bg-shopitems flex flex-col items-center relative mt-[68px]"
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
                <p className="text-black/30 text-[13px] font-bold">
                  SHOP
                </p>
                <img src={arrowRight} alt="arrow right" />
              </div>
            </div>
          </div>
        </>
      )}
      <div className="new-product w-[375px] flex flex-col items-center">
        <p className="mt-[108px] leading-[10px] text-[14px] text-[#fff] font-normal">
          NEW PRODUCT
        </p>
        <h1 className="mt-[16px] text-[36px] text-white w-[328px] font-bold text-center uppercase">
          XX99 Mark II HeadphoneS
        </h1>
        <p className="mt-[24px] text-[15px] font-normal w-[300px] text-white text-center">
          Experience natural, lifelike audio and exceptional build
          quality made for the passionate music enthusiast.
        </p>
        <button
          onClick={handleSeeHeadphones}
          className="mt-[28px] mb-[90px] bg-product w-[160px] py-[15px] text-white text-[13px] font-bold uppercase"
        >
          See Product
        </button>
      </div>
      <div
        onClick={handleSeeHeadphones}
        className="headphones-box flex flex-col items-center w-[327px]  rounded-[8px] bg-shopitems mt-[75px] relative"
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
        className="speakers-box w-[327px] rounded-[8px] bg-shopitems flex flex-col items-center relative mt-[68px]"
      >
        <img
          src={homeSpeaker}
          alt="home speakers"
          className="w-[80px] h-[104px] absolute -top-11"
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
        className="earphones-box w-[327px] rounded-[8px] bg-shopitems flex flex-col items-center relative mt-[68px]"
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
      <div className="speaker mt-[120px] w-[327px] bg-speaker rounded-[8px] flex flex-col items-center">
        <img
          src={homeSpeaker}
          alt="home speaker"
          className="mt-[55px] w-[172.248px] h-[207px]"
        />
        <h2 className="text-[36px] font-bold text-white w-[200px] text-center mt-[32px] leading-[40px]">
          ZX9 SPEAKER
        </h2>
        <p className="mt-[24px] text-[15px] font-normal text-white/50 leading-[25px] text-center w-[280px]">
          Upgrade to premium speakers that are phenomenally built to
          deliver truly remarkable sound.
        </p>
        <button className="mt-[24px] w-[160px] py-[15px] bg-black text-white text-[13px] font-bold mb-[55px]">
          SEE PRODUCT
        </button>
      </div>
      <div className="zx7 w-[327px] h-[315px] mt-[30px] bg-zx7 py-[101px] pl-[25px] rounded-[8px]">
        <h3 className="text-[28px] text-black font-bold">
          ZX7 SPEAKER
        </h3>
        <button className="w-[160px] py-[15px] border-black border-[1px] mt-[32px] text-black text-[13px] font-bold">
          SEE PRODUCT
        </button>
      </div>
      <div className="EARPHONES flex flex-col gap-[30px] mt-[30px]">
        <div className="earphones-photo w-[327px] h-[200px] rounded-[8px]"></div>
        <div className="product w-[327px] py-[41px] rounded-[8px] bg-zx7 pl-[24px]">
          <h3 className="text-[28px] text-black font-bold">
            YX1 EARPHONES
          </h3>
          <button className="w-[160px] py-[15px] border-black border-[1px] mt-[32px] text-black text-[13px] font-bold">
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div className="best-product mt-[120px] w-[327px] text-center">
        <div className="photo w-[327px] h-[300px] rounded-[8px]"></div>
        <div className="title">
          <h3 className="mt-[40px] text-[28px] uppercase text-black font-bold">
            Bringing you the{" "}
            <span className="text-[#D87D4A]">best</span> audio gear
          </h3>
          <p className="mt-[32px] text-[15px] font-normal text-black/50 w-[310px]">
            Located at the heart of New York City, Audiophile is the
            premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom
            and luxury demonstration rooms available for you to browse
            and experience a wide range of our products. Stop by our
            store to meet some of the fantastic people who make
            Audiophile the best place to buy your portable audio
            equipment.
          </p>
        </div>
      </div>
      <footer className="w-full bg-footer mt-[120px] flex flex-col items-center">
        <div className="rectangle w-[101px] h-[4px] bg-speaker"></div>
        <div className="logo mt-[48px]">
          <img src={logo} alt="logo icon" />
        </div>
        <ul className="mt-[48px] flex flex-col items-center gap-[16px] text-[13px] text-white font-bold leading-[25px]">
          <li onClick={handleGoHome}>HOME</li>
          <li onClick={handleSeeHeadphones}>HEADPHONES</li>
          <li onClick={handleSeeSpeakers}>SPEAKERS</li>
          <li onClick={handleSeeEarphones}>EARPHONES</li>
        </ul>
        <p className="w-[327px] mt-[48px] text-center text-white font-bold text-[15px]">
          Audiophile is an all in one stop to fulfill your audio
          needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out
          of personal audio. Come and visit our demo facility - we’re
          open 7 days a week.
        </p>
        <p className="mt-[48px] text-[15px] text-white font-bold">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="socials mt-[48px] mb-[38px]">
          <img src={socials} alt="socials" />
        </div>
      </footer>
    </div>
  );
}
