import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IMaskInput } from "react-imask";
import { IInputs } from "../Inputs";
import { useEcommerce } from "../context/EcommerceProvider";

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
    .required("emoney number is required!")
    .integer("number must be an integer"),
  pin: yup
    .number()
    .required("pin is required")
    .integer("number must be an integer"),
});

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>({
    resolver: yupResolver(schema),
  });
  const { cart } = useEcommerce();
  return (
    <div className="flex flex-col items-center">
      <div className="goback w-[327px] mt-[16px]">
        <p
          onClick={handleGoBack}
          className="text-black/50 font-normal text-[15px]"
        >
          Go Back
        </p>
      </div>
      <div className="all-inputs mt-[24px] w-[327px] rounded-[8px] bg-white p-[24px]">
        <p className="uppercase text-black font-bold text-[28px]">CHECKOUT</p>
        <p className="mt-[32px] tracking-[0.929px] text-[#D87D4A] text-[13px] font-bold">
          Billing details
        </p>
        <form>
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
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="Alexei Ward"
            />
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
              {...register("email")}
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="alexei@mail.com"
            />
          </div>
          <div className="number flex flex-col gap-[9px] mt-[16px]">
            <label
              htmlFor="number"
              className="text-black font-bold text-[12px] tracking-[-0.214px]"
            >
              Phone Number
            </label>
            <IMaskInput
              mask="+1 000-000-0000"
              {...register("number")}
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="+1 202-555-0136"
            />
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
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="1137 Williams Avenue"
            />
          </div>
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
              {...register("zip")}
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="10001"
            />
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
              maxLength={4}
              {...register("city")}
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="New York"
            />
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
              maxLength={4}
              {...register("country")}
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="United States"
            />
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
                  type="checkbox"
                  id="circleCheckbox"
                  {...register("payment")}
                />
                <label htmlFor="circleCheckbox">
                  <span className="circle-checkbox"></span>e-Money
                </label>
              </div>
            </div>
            <div className="e-money w-[280px] py-[18px] pl-[16px] bg-white border-bordercolor border-[1px] rounded-[8px]">
              <div className="checkbox-wrapper">
                <input type="checkbox" id="cash" {...register("payment")} />
                <label htmlFor="cash">
                  <span className="circle-checkbox"></span>Cash on Delivery
                </label>
              </div>
            </div>
          </div>
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
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="238521993"
            />
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
              className="w-[280px] rounded-[8px] bg-white py-[18px] border-[1px] border-bordercolor pl-[24px] outline-none"
              placeholder="6891"
            />
          </div>
        </form>
      </div>
      <div className="sumarry mt-[32px] w-[327px] rounded-[8px] bg-white pt-[32px] px-[24px]">
        <p className="uppercase text-[18px] text-black font-bold">summary</p>
        <div className="cart-items flex flex-col gap-[24px] mt-[31px]">
          {cart.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-between">
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
                  (acc, item) => acc + Number(item.price) * item.quantity * 0.2,
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
        <button className="uppercase text-white text-[13px] font-bold mt-[32px] w-[279px] py-[15px] bg-product">
          continue & pay
        </button>
      </div>
    </div>
  );
}
