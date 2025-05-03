export interface IInputs {
  name: string;
  email: string;
  number: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  payment: "emoney" | "cash";
  emoneyNumber: number;
  pin: number;
}
