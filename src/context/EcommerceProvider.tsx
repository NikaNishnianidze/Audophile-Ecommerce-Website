import { createContext, ReactNode, useState, useContext } from "react";
import data from "../data.json";
import { Product } from "../Context";

interface IContext {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addToCart: any;
  setAddToCart: (addToCart: any) => void;
  menu: boolean;
  setMenu: (menu: boolean) => void;
  productAmount: number;
  setProductAmount: (productAmount: number) => void;
  cart: Product[];
  setCart: (cart: Product[]) => void;
}

const ecommerceContext = createContext<IContext>({
  products: [],
  setProducts: () => {},
  addToCart: null,
  setAddToCart: () => {},
  menu: false,
  setMenu: () => {},
  productAmount: 1,
  setProductAmount: () => {},
  cart: [],
  setCart: () => {},
});

export default function EcommerceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [addToCart, setAddToCart] = useState(null);
  const [products, setProducts] = useState<Product[]>(data);
  const [menu, setMenu] = useState<boolean>(false);
  const [productAmount, setProductAmount] = useState(1);
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <>
      <ecommerceContext.Provider
        value={{
          addToCart,
          setAddToCart,
          products,
          setProducts,
          menu,
          setMenu,
          productAmount,
          setProductAmount,
          cart,
          setCart,
        }}
      >
        {children}
      </ecommerceContext.Provider>
    </>
  );
}

export const useEcommerce = () => {
  const context = useContext(ecommerceContext);
  return context;
};
