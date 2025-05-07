import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IMaskInput } from "react-imask";
import { IInputs } from "../Inputs";
import { useEcommerce } from "../context/EcommerceProvider";
import logo from "../../public/assets/audiophile 2.svg";
import { useNavigate } from "react-router-dom";
import socials from "../../public/assets/Group 30.svg";
import { Controller } from "react-hook-form";
import { useState } from "react";
import done from "../../public/assets/checkout/icon-order-confirmation.svg";

const handleGoBack = () => {
  window.history.back();
};

const schema: yup.ObjectSchema<IInputs> = yup.object({
  name: yup.string().required("name is required!"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is required!"),
  number: yup.string().required("number is required!"),
  address: yup.string().required("Address is required!"),
  zip: yup
    .string()
    .required("zip code is required")
    .min(4, "Zip Code must be min 4 numbers!"),
  city: yup.string().required("city is required!"),
  country: yup.string().required("country is Required!"),
  payment: yup
    .string()
    .oneOf(["emoney", "cash"], "You must select a payment method")
    .required("Payment method is required"),
  emoneyNumber: yup
    .number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value
    )
    .required("emoney number is required!")
    .typeError("emoney number must be a number"),
  pin: yup
    .number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value
    )
    .required("pin is required")
    .typeError("pin must be a number"),
});

export default function Checkout() {
  const [thankYou, setThankYou] = useState<boolean>(false);
  const navigate = useNavigate();
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

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    console.log("Form submitted:", data);
    setThankYou(true);
    window.scrollTo(0, 0);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IInputs>({
    resolver: yupResolver(schema),
  });
  const { cart } = useEcommerce();
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
      <div className="dkstyle dk:flex dk:gap-[30px]">
        <div className="all-inputs mt-[24px] w-[327px] dk:w-[730px] rounded-[8px] bg-white p-[24px] tb:p-[28px] tb:w-[689px]">
          <p className="uppercase text-black font-bold text-[28px]">CHECKOUT</p>
          <p className="mt-[32px] tracking-[0.929px] text-[#D87D4A] text-[13px] font-bold">
            Billing details
          </p>
          <form id="invoiceForm">
            <div className="name-email tb:flex tb:gap-[16px]">
              <div className="name flex flex-col gap-[9px] mt-[16px]">
                <label
                  htmlFor="name"
                  className="text-black font-bold text-[12px] tracking-[-0.214px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  style={{
                    border: errors.name
                      ? "1px solid #CD2C2C"
                      : "1px solid #CFCFCF",
                  }}
                  className="w-[280px] tb:w-[309px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                  placeholder="Alexei Ward"
                />
                <p className="text-[#CD2C2C] text-[12px] font-normal">
                  {errors.name?.message}
                </p>
              </div>
              <div className="email flex flex-col gap-[9px] mt-[16px]">
                <label
                  htmlFor="email"
                  className="text-black font-bold text-[12px] tracking-[-0.214px]"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  style={{
                    border: errors.email
                      ? "1px solid #CD2C2C"
                      : "1px solid #CFCFCF",
                  }}
                  {...register("email")}
                  className="w-[280px] tb:w-[309px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                  placeholder="alexei@mail.com"
                />
                <p className="text-[#CD2C2C] text-[12px] font-normal">
                  {errors.email?.message}
                </p>
              </div>
            </div>
            <div className="number flex flex-col gap-[9px] mt-[16px]">
              <label
                htmlFor="number"
                className="text-black font-bold text-[12px] tracking-[-0.214px]"
              >
                Phone Number
              </label>
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    {...field}
                    mask="+1 000-000-0000"
                    style={{
                      border: errors.number
                        ? "1px solid #CD2C2C"
                        : "1px solid #CFCFCF",
                    }}
                    className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                    placeholder="+1 202-555-0136"
                  />
                )}
              />
              <p className="text-[#CD2C2C] text-[12px] font-normal">
                {errors.number?.message}
              </p>
            </div>
            <div className="shipping-info mt-[32px]">
              <p className="uppercase text-[#D87D4A] text-[13px] font-bold tracking-[0.929]">
                shipping info
              </p>
            </div>
            <div className="address flex flex-col gap-[9px] mt-[16px]">
              <label
                htmlFor="address"
                className="text-black font-bold text-[12px] tracking-[-0.214px]"
              >
                Your Address
              </label>
              <input
                id="address"
                {...register("address")}
                style={{
                  border: errors.address
                    ? "1px solid #CD2C2C"
                    : "1px solid #CFCFCF",
                }}
                className="w-[280px] rounded-[8px] tb:w-[634px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                placeholder="1137 Williams Avenue"
              />
              <p className="text-[#CD2C2C] text-[12px] font-normal">
                {errors.address?.message}
              </p>
            </div>
            <div className="zip-city tb:flex tb:gap-[16px]">
              <div className="zip flex flex-col gap-[9px] mt-[16px]">
                <label
                  htmlFor="zip"
                  className="text-black font-bold text-[12px] tracking-[-0.214px]"
                >
                  ZIP Code
                </label>
                <input
                  id="zip"
                  maxLength={4}
                  style={{
                    border: errors.zip
                      ? "1px solid #CD2C2C"
                      : "1px solid #CFCFCF",
                  }}
                  {...register("zip")}
                  className="w-[280px] tb:w-[309px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                  placeholder="10001"
                />
                <p className="text-[#CD2C2C] text-[12px] font-normal">
                  {errors.zip?.message}
                </p>
              </div>
              <div className="city flex flex-col gap-[9px] mt-[16px]">
                <label
                  htmlFor="city"
                  className="text-black font-bold text-[12px] tracking-[-0.214px]"
                >
                  City
                </label>
                <input
                  id="city"
                  {...register("city")}
                  style={{
                    border: errors.city
                      ? "1px solid #CD2C2C"
                      : "1px solid #CFCFCF",
                  }}
                  className="w-[280px] tb:w-[309px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                  placeholder="New York"
                />
                <p className="text-[#CD2C2C] text-[12px] font-normal">
                  {errors.city?.message}
                </p>
              </div>
            </div>
            <div className="country flex flex-col gap-[9px] mt-[16px]">
              <label
                htmlFor="country"
                className="text-black font-bold text-[12px] tracking-[-0.214px]"
              >
                Country
              </label>
              <input
                id="country"
                {...register("country")}
                style={{
                  border: errors.country
                    ? "1px solid #CD2C2C"
                    : "1px solid #CFCFCF",
                }}
                className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                placeholder="United States"
              />
              <p className="text-[#CD2C2C] text-[12px] font-normal">
                {errors.country?.message}
              </p>
            </div>
            <div className="method mt-[32px]">
              <p className="uppercase text-[#D87D4A] text-[13px] font-bold tracking-[0.929px]">
                payment details
              </p>
            </div>
            <div className="choose-paymend mt-[16px] flex flex-col gap-[17px]">
              <p className="text-black font-bold text-[12px] tracking-[-0.214px]">
                Payment Method
              </p>
              <div className="e-money w-[280px] py-[18px] pl-[16px] bg-white border-bordercolor border-[1px] rounded-[8px]">
                <div className="checkbox-wrapper">
                  <input
                    type="radio"
                    id="emoney"
                    value="emoney"
                    {...register("payment")}
                    style={{
                      border: errors.payment
                        ? "1px solid #CD2C2C"
                        : "1px solid #CFCFCF",
                    }}
                  />

                  <label htmlFor="emoney">
                    <span className="circle-checkbox"></span>e-Money
                  </label>
                </div>
              </div>
              <p className="text-[#CD2C2C] text-[12px] font-normal"></p>
              <div className="e-money w-[280px] py-[18px] pl-[16px] bg-white border-bordercolor border-[1px] rounded-[8px]">
                <div className="checkbox-wrapper">
                  <input
                    type="radio"
                    id="cash"
                    value="cash"
                    {...register("payment")}
                    style={{
                      border: errors.payment
                        ? "1px solid #CD2C2C"
                        : "1px solid #CFCFCF",
                    }}
                  />
                  <p>{errors.payment?.message}</p>
                  <label htmlFor="cash">
                    <span className="circle-checkbox"></span>Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
            <div className="emoneynumber-pin tb:flex tb:gap-[16px]">
              <div className="emoney-number flex flex-col gap-[9px] mt-[16px]">
                <label
                  htmlFor="emoneyNumber"
                  className="text-black font-bold text-[12px] tracking-[-0.214px]"
                >
                  e-Money Number
                </label>
                <input
                  id="emoneyNumber"
                  maxLength={9}
                  {...register("emoneyNumber")}
                  style={{
                    border: errors.emoneyNumber
                      ? "1px solid #CD2C2C"
                      : "1px solid #CFCFCF",
                  }}
                  className="w-[280px] tb:w-[309px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                  placeholder="238521993"
                />
                <p className="text-[#CD2C2C] text-[12px] font-normal">
                  {errors.emoneyNumber?.message}
                </p>
              </div>
              <div className="pin flex flex-col gap-[9px] mt-[16px]">
                <label
                  htmlFor="pin"
                  className="text-black font-bold text-[12px] tracking-[-0.214px]"
                >
                  e-Money PIN
                </label>
                <input
                  id="pin"
                  maxLength={4}
                  {...register("pin")}
                  style={{
                    border: errors.pin
                      ? "1px solid #CD2C2C"
                      : "1px solid #CFCFCF",
                  }}
                  className="w-[280px] tb:w-[309px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
                  placeholder="6891"
                />
                <p className="text-[#CD2C2C] text-[12px] font-normal">
                  {errors.pin?.message}
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="sumarry dk:w-[350px]  mt-[32px] dk:self-start w-[327px] tb:w-[689px] rounded-[8px] bg-white pt-[32px] px-[24px]">
          <p className="uppercase text-[18px] text-black font-bold">summary</p>
          <div className="cart-items flex flex-col gap-[24px] mt-[31px]">
            {cart.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="img-name-price tb:flex tb:gap-[16px]">
                    <img
                      src={item.image}
                      alt="item image"
                      className="w-[64px] h-[64px] rounded-8px"
                    />
                    <div className="name-price flex flex-col max-w-[140px]">
                      <p className="text-black text-[15px] font-bold">
                        {item.slug}
                      </p>
                      <p className="text-black/50 text-[14px] font-bold">
                        $ {Number(item.price).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="quantity">
                    <p className="text-black/50 text-[15px] font-bold">
                      {item.quantity}x
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="prices mt-[32px] flex flex-col gap-[8px]">
            <div className="total flex items-center justify-between">
              <p className="uppercase text-black/50 text-[15px] font-normal">
                total
              </p>
              <p className="text-black text-[18px] font-bold uppercase">
                $
                {cart
                  .reduce(
                    (acc, item) => acc + Number(item.price) * item.quantity,
                    0
                  )
                  .toLocaleString()}
              </p>
            </div>
            <div className="shipping flex items-center justify-between">
              <p className="uppercase text-black/50 text-[15px] font-normal">
                shipping
              </p>
              <p className="text-black text-[18px] font-bold uppercase">$50</p>
            </div>
            <div className="VAT flex items-center justify-between">
              <p className="uppercase text-black/50 text-[15px] font-normal">
                VAT (INCLUDED)
              </p>
              <p className="text-black text-[18px] font-bold uppercase">
                $
                {cart
                  .reduce(
                    (acc, item) =>
                      acc + Number(item.price) * item.quantity * 0.2,
                    0
                  )
                  .toLocaleString()}
              </p>
            </div>
            <div className="grand-total flex items-center justify-between mt-[24px]">
              <p className="uppercase text-black/50 text-[15px] font-normal">
                grand total
              </p>
              <p className="text-black text-[18px] font-bold uppercase">
                {(() => {
                  const total = cart.reduce(
                    (acc, item) => acc + Number(item.price) * item.quantity,
                    0
                  );
                  const tax = 50;
                  const grandTotal = total + tax;
                  localStorage.setItem("grandTotal", grandTotal.toString());

                  return `$${grandTotal.toLocaleString()}`;
                })()}
              </p>
            </div>
          </div>
          <button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="uppercase dk:w-[284px] dk:mb-[32px] cursor-pointer hover:bg-button text-white text-[13px] font-bold mt-[32px] tb:w-[623px] w-[279px] py-[15px] bg-product"
          >
            continue & pay
          </button>
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
      {thankYou && (
        <div>
          <div className="fixed w-full left-1/2 transform -translate-x-1/2 inset-0 top-0 bg-black/50 z-30"></div>
          <div className="absolute top-[90px] left-1/2 transform tb:w-[540px]  tb:p-[48px] rounded-[8px] mt-[24px] py-[32px] px-[20px] -translate-x-1/2 left-0 w-[327px] bg-white z-40 p-6">
            <img src={done} alt="confirmation icon" />
            <p className="mt-[23px] text-black text-[24px] font-bold tb:w-[284px] tb:text-left tb:leading-[36px] tb:tracking-[1.143px] tb:text-[32px]">
              THANK YOU FOR YOUR ORDER
            </p>
            <p className="mt-[16px] text-[15px] font-normal text-black/50 tb:mt-[24px]">
              You will receive an email confirmation shortly.
            </p>
            <div className="container flex justify-center mt-[24px]">
              <div className="grandtotal-container w-[263px] tb:w-[444px] rounded-[8px] bg-shopitems pt-[24px] ">
                <div className="first-item flex justify-between px-[24px]">
                  <div className="image-price flex gap-[16px] items-center">
                    <div className="image">
                      <img
                        src={cart[0].image}
                        alt="first item image"
                        className="w-[50px] h-[50px]"
                      />
                    </div>
                    <div className="price-name flex flex-col ">
                      <p className="text-black text-[15px] font-bold">
                        {cart[0].name}
                      </p>
                      <p className="text-black/50 text-[14px] font-bold">
                        $ {cart[0].price}
                      </p>
                    </div>
                  </div>
                  <div className="quantity">
                    <p className="text-black/50 text-[14px] font-bold">
                      {cart[0].quantity}x
                    </p>
                  </div>
                </div>

                {cart.length > 1 ? (
                  <>
                    <div className="divider mt-[12px]  w-[215px] tb:w-[396px] h-[1px] bg-black/50 ml-[24px]"></div>
                    <p className="mt-[12px] text-center text-black/50 text-[12px] font-bold">
                      and {cart.length - 1} other item(s)
                    </p>
                  </>
                ) : null}
                <div className="grandtotal-price w-[263px] tb:w-[444px] mt-[25px] rounded-b-[8px] bg-black py-[16px] pl-[24px]">
                  <p className="uppercase text-white/50 text-[15px] font-normal">
                    Grand Total
                  </p>
                  <p className="text-white mt-[8px] text-[18px] font-bold uppercase">
                    {(() => {
                      const total = cart.reduce(
                        (acc, item) => acc + Number(item.price) * item.quantity,
                        0
                      );
                      const tax = 50;
                      const grandTotal = total + tax;
                      localStorage.setItem("grandTotal", grandTotal.toString());

                      return `$${grandTotal.toLocaleString()}`;
                    })()}
                  </p>
                </div>
              </div>
            </div>
            <div className="button flex justify-center">
              <button
                onClick={handleGoHome}
                className="uppercase text-white font-bold text-[13px] tb:w-[444px] text-center w-[263px] py-[15px] bg-product mt-[23px]"
              >
                back to home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
