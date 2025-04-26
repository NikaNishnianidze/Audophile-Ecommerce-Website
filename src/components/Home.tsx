export default function Home() {
  return (
    <div className="flex flex-col items-center">
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
        <button className="mt-[28px] mb-[90px] bg-product w-[160px] py-[15px] text-white text-[13px] font-bold uppercase">
          See Product
        </button>
      </div>
      <div className="headphones-box"></div>
      <div className="speakers-box"></div>
      <div className="earphones-box"></div>
    </div>
  );
}
