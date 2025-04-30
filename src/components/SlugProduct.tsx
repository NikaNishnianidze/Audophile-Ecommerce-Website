import { useNavigate, useParams } from "react-router-dom";
import { useEcommerce } from "../context/EcommerceProvider";
import { useEffect, useState } from "react";
import { Product } from "../Context";
import homeHeadphones from "../../public/assets/home/mobile/0d2e6fc887d6513c34f10bac56e324f01ec77185.png";
import arrowRight from "../../public/assets/Path 2.svg";
import homeSpeaker from "../../public/assets/home/mobile/image-speaker-zx9.png";
import homeEarphones from "../../public/assets/home/mobile/d47b304d532a222f08c1500c16aa3ed52c16aa20.png";
import logo from "../../public/assets/audiophile 2.svg";
import socials from "../../public/assets/Group 30.svg";

export default function SlugProduct() {
  const { products, productAmount, setProductAmount, cart, setCart } =
    useEcommerce();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(
    () => products.find((item) => item.slug === id) || null
  );
  useEffect(() => {
    const foundProduct = products.find((item) => item.slug === id);
    setProduct(foundProduct || null);
    setProductAmount(1);
    window.scrollTo(0, 0);
  }, [id, products, setProductAmount]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    window.history.back();
  };
  const handleSeeProduct = (slug: string) => {
    navigate(`/product/${slug}`);
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
      <div className="goback mt-[16px] w-[327px]">
        <p
          onClick={handleGoBack}
          className="text-black/50 text-[15px] font-normal"
        >
          Go Back
        </p>
      </div>
      {product && (
        <>
          <div className="item-image">
            <img
              src={product.categoryImage.mobile}
              alt="item image"
              className="w-[327px] h-[327px] mt-[24px] rounded-[8px]"
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
          </div>
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
          <div className="features mt-[88px] flex flex-col gap-[24px] w-[327px]">
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
          <div className="inthebox mt-[88px] w-[327px]">
            <p className="uppercase text-[24px] text-black font-bold">
              in the box
            </p>
            <div className="insidebox flex flex-col gap-[8px] mt-[24px]">
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
            <div className="gallery mt-[88px] flex flex-col gap-[24px]">
              <img
                src={product.gallery.first.mobile}
                alt="gallery image"
                className="rounded-[8px]"
              />
              <img
                src={product.gallery.second.mobile}
                alt="gallery image"
                className="rounded-[8px]"
              />
              <img
                src={product.gallery.third.mobile}
                alt="gallery image"
                className="rounded-[8px]"
              />
            </div>
          </div>
          <div className="mayAlsoLike w-[327px] flex flex-col items-center mt-[120px]">
            <p className="uppercase text-black text-[24px] leading-[36px] font-bold">
              you may also like
            </p>
            <div className="items flex flex-col  gap-[56px]">
              {product.others.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image.mobile}
                    alt="item image"
                    className="w-[327px] h-[120px] mt-[24px] rounded-[8px]"
                  />
                  <p className="text-black text-[28px] mt-[32px] font-bold tracking-[1px] uppercase">
                    {item.name}
                  </p>
                  <button
                    onClick={() => handleSeeProduct(item.slug)}
                    className="mt-[32px] text-[#fff] text-[13px] font-bold w-[160px] py-[15px] bg-product text-center "
                  >
                    see product
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={handleSeeHeadphones}
            className="headphones-box flex flex-col items-center w-[327px]  rounded-[8px] bg-shopitems mt-[172px] relative"
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

          <div className="best-product mt-[120px] w-[327px] text-center">
            <div className="photo w-[327px] h-[300px] rounded-[8px]"></div>
            <div className="title">
              <h3 className="mt-[40px] text-[28px] uppercase text-black font-bold">
                Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
                audio gear
              </h3>
              <p className="mt-[32px] text-[15px] font-normal text-black/50 w-[310px]">
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
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="mt-[48px] text-[15px] text-white font-bold">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="socials mt-[48px] mb-[38px]">
              <img src={socials} alt="socials" />
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
