import { HiOutlineShoppingCart } from "react-icons/hi";
import { useGlobalContext } from "../store/context";

export default function Header() {
  const { totalAmount } = useGlobalContext();
  return (
    <div className="w-full h-16 px-6 py-2 flex justify-between  items-center bg-wh-50 mb-28 text-wh-900">
      <span className="font-light">Map Cart</span>
      <span className="relative text-3xl">
        <HiOutlineShoppingCart />
        <span className="absolute bottom-4 left-4 w-5 h-5 rounded-full text-wh-50 font-semibold text-sm text-center bg-bl-100">
          {totalAmount}
        </span>
      </span>
    </div>
  );
}
