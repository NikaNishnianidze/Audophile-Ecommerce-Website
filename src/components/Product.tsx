import { useNavigate, useParams } from "react-router-dom";
import { useEcommerce } from "../context/EcommerceProvider";
import homeHeadphones from "../../public/assets/home/mobile/0d2e6fc887d6513c34f10bac56e324f01ec77185.png";
import arrowRight from "../../public/assets/Path 2.svg";
import homeSpeaker from "../../public/assets/home/mobile/image-speaker-zx9.png";
import homeEarphones from "../../public/assets/home/mobile/d47b304d532a222f08c1500c16aa3ed52c16aa20.png";
import logo from "../../public/assets/audiophile 2.svg";
import socials from "../../public/assets/Group 30.svg";

export default function Product() {
  const { products, productAmount, setProductAmount, cart, setCart } =
    useEcommerce();
  const { id } = useParams();
  const product = products.find((item) => item.id.toString() === id);
  const navigate = useNavigate();

  const handleGoBack = () => {
    window.history.back();
  };
  const handleSeeProduct = (id: string) => {
    navigate(`/product/${id}`);
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
  const handleGoHome = () => {
    navigate("/home");
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (id: number, name: string) => {
    const product = products.find((p) => p.id === id);

    if (!product) return;
    const newProduct = {
      id: product.id,
      image: product.categoryImage.mobile,
      name: product.name,
      price: product.price.toString(),
      quantity: productAmount,
      total: product.price * productAmount,
      slug: name,
    };
    const updatedCart = [...cart, newProduct];
    setCart(updatedCart);
    setProductAmount(1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="goback mt-[16px] w-[327px] tb:w-[689px] dk:w-[1110px]">
        <p
          onClick={handleGoBack}
          className="text-black/50 text-[15px] font-normal"
        >
          Go Back
        </p>
      </div>
      {product && (
        <>
          <div className="item-info tb:flex tb:flex-row tb:items-center dk:mt-[56px] tb:gap-[69px] dk:gap-[125px]">
            <div className="item-image">
              <img
                src={product.categoryImage.mobile}
                alt="item image"
                className="w-[327px] mb:block tb:block dk:hidden h-[327px] mt-[24px] rounded-[8px] tb:w-[281px] tb:h-[480px]"
              />
              <img
                src={product.categoryImage.desktop}
                alt="item image"
                className="w-[327px] mb:hidden tb:hidden dk:block h-[327px] mt-[24px] rounded-[8px] tb:w-[281px] tb:h-[480px] dk:w-[540px] dk:h-[560px]"
              />
            </div>
            <div className="product-info flex flex-col w-[327px] gap-[24px]">
              <p className="mt-[32px] text-[#D87D4A] text-[14px] tracking-[10px]">
                NEW PRODUCT
              </p>
              <p className="text-black text-[28px] font-bold tracking-[1px] uppercase">
                {product.name}
              </p>
              <p className="text-black/50 text-[15px] font-normal leading-[25px]">
                {product.description}
              </p>
              <p className="text-black text-[18px] font-bold">
                $ {product.price.toLocaleString()}
              </p>
              <div className="addtocart mt-[31px] w-[327px] flex items-center gap-[16px]">
                <div className="amount bg-zx7 w-[120px] py-[15px] text-center px-[15.5] flex items-center gap-[20px] justify-center rounded-[8px]">
                  <p
                    onClick={() =>
                      productAmount >= 2 && setProductAmount(productAmount - 1)
                    }
                    className="text-black/25 text-[13px] font-bold"
                  >
                    -
                  </p>
                  <p className="text-black text-[13px] font-bold">
                    {productAmount}
                  </p>
                  <p
                    onClick={() => setProductAmount(productAmount + 1)}
                    className="text-black/25 text-[13px] font-bold"
                  >
                    +
                  </p>
                </div>
                <button
                  onClick={() => handleAddToCart(product.id, product.name)}
                  className="uppercase text-[#fff] text-[13px] font-bold w-[160px] py-[15px] bg-product text-center"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="features-inthebox dk:flex dk:gap-[125px] dk:justify-center dk:w-[1110px]">
            <div className="features mt-[88px] flex flex-col gap-[24px] w-[327px] tb:w-[689px]">
              <p className="uppercase text-[24px] text-black font-bold">
                features
              </p>
              {product.features.split("\n\n").map((feature, index) => (
                <p
                  key={index}
                  className="text-black/50 text-[15px] font-normal leading-[25px]"
                >
                  {feature}
                </p>
              ))}
            </div>
            <div className="inthebox mt-[88px] w-[327px] tb:w-[689px] dk:w-[350px] ">
              <div className="box tb:flex tb:justify-center dk:flex-col dk:gap-[32px]">
                <p className="uppercase text-[24px] text-black font-bold tb:w-[339px]">
                  in the box
                </p>
                <div className="insidebox flex flex-col gap-[8px] mt-[24px] tb:mt-0">
                  {product.includes.map((item, index) => {
                    return (
                      <div key={index} className="flex items-center gap-[24px]">
                        <p className="text-[#D87D4A] text-[15px] font-bold leading-[25px]">
                          {item.quantity}x
                        </p>
                        <p className="text-black/50 text-[15px] font-normal leading-[25px]">
                          {item.item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="gallery mb:block tb:block dk:hidden mt-[88px] dk:w-[1110px]  mb:flex mb:flex-col gap-[24px] tb:flex tb:flex-row tb:justify-center ">
                <div className="first-two tb:flex-col tb:flex tb:gap-[20px] mb:flex mb:flex-col mb:gap-[20px]">
                  <img
                    src={product.gallery.first.mobile}
                    alt="gallery image"
                    className="rounded-[8px] tb:w-[227px] tb:h-[174px]"
                  />
                  <img
                    src={product.gallery.second.mobile}
                    alt="gallery image"
                    className="rounded-[8px] tb:w-[227px] tb:h-[174px]"
                  />
                </div>
                <div className="last">
                  <img
                    src={product.gallery.third.mobile}
                    alt="gallery image"
                    className="rounded-[8px] mb:block tb:block dk:hidden tb:w-[395px] tb:h-[368px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="gallery mb:hidden tb:hidden dk:block dk:w-[1110px] dk:justify-center dk:flex dk:flex-row mt-[88px] flex flex-col gap-[24px] tb:flex-row tb:justify-center ">
            <div className="first-two tb:flex-col tb:flex tb:gap-[20px]">
              <img
                src={product.gallery.first.mobile}
                alt="gallery image"
                className="rounded-[8px] mb:block tb:block dk:hidden tb:w-[227px] tb:h-[174px]"
              />
              <img
                src={product.gallery.first.desktop}
                alt="gallery image"
                className="rounded-[8px] mb:hidden tb:hidden dk:block dk:w-[445px] dk:h-[280px] tb:w-[227px] tb:h-[174px]"
              />
              <img
                src={product.gallery.second.mobile}
                alt="gallery image"
                className="rounded-[8px] mb:block tb:block dk:hidden tb:w-[227px] tb:h-[174px]"
              />
              <img
                src={product.gallery.second.desktop}
                alt="gallery image"
                className="rounded-[8px] tb:w-[227px] mb:hidden tb:hidden dk:block dk:w-[445px] dk:h-[280px] tb:h-[174px]"
              />
            </div>
            <div className="last">
              <img
                src={product.gallery.third.mobile}
                alt="gallery image"
                className="rounded-[8px] mb:block tb:block dk:hidden tb:w-[395px] tb:h-[368px]"
              />
              <img
                src={product.gallery.third.desktop}
                alt="gallery image"
                className="rounded-[8px] mb:hidden tb:hidden dk:block tb:w-[395px] tb:h-[368px] dk:w-[635px] dk:h-[592px]"
              />
            </div>
          </div>
          <div className="mayAlsoLike w-[327px] flex flex-col items-center mt-[120px] tb:w-[689px]">
            <p className="uppercase text-black text-[24px] leading-[36px] font-bold tb:text-[32px]">
              you may also like
            </p>
            <div className="items flex flex-col  gap-[56px] tb:flex-row">
              {product.others.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center dk:w-[350px]"
                >
                  <img
                    src={item.image.mobile}
                    alt="item image"
                    className="w-[327px] mb:block tb:hidden dk:hidden h-[120px] mt-[24px] rounded-[8px] tb:w-[300px] tb:h-[250px]"
                  />
                  <img
                    src={item.image.tablet}
                    alt="item image"
                    className="w-[327px] mb:hidden tb:block dk:hidden h-[120px] mt-[24px] rounded-[8px] tb:w-[223px] tb:h-[318px]"
                  />
                  <img
                    src={item.image.desktop}
                    alt="item image"
                    className="mb:hidden tb:hidden dk:block dk:w-[350px] dk:h-[318px]  mt-[24px] rounded-[8px]"
                  />
                  <p className="text-black text-[28px] mt-[32px] font-bold tracking-[1px] uppercase tb:w-[176px] tb:text-[20px]">
                    {item.name}
                  </p>
                  <button
                    onClick={() => handleSeeProduct(item.slug)}
                    className="mt-[32px] cursor-pointer hover:bg-button text-[#fff] text-[13px] font-bold w-[160px] py-[15px] bg-product text-center "
                  >
                    see product
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="product dk:mt-[240px] tb:flex tb:flex-wrap tb:items-center tb:mt-[160px] tb:gap-[10px] tb:px-[35px] dk:gap-[30px]">
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
                Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
                audio gear
              </h3>
              <p className="mt-[32px] text-[15px] font-normal text-black/50 w-[310px] tb:w-[573px] dk:w-[445px] dk:text-left">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
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
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
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
        </>
      )}
    </div>
  );
}
