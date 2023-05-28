import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { useGlobalContext } from "../store/context";

export default function CartItem({ item }) {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();
  const { id, img, title, price, amount } = item;

  return (
    <div className="w-full py-2 px-4 flex items-center">
      <div className="w-24">
        <img src={img} alt={title} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="p-2 capitalize basis-1/2">
          <p className=" font-semibold text-wh-50 text-sm tracking-wide">
            {title}
          </p>
          <p className=" font-light">${price}</p>
          <button
            onClick={() => removeItem(id)}
            className=" text-bl-100 text-xs font-semibold tracking-wide cursor-pointer"
          >
            remove
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={() => increaseItem(id)}
            className=" text-bl-100 text-2xl"
          >
            <HiChevronUp />
          </button>
          <span>{amount}</span>
          <button
            onClick={() => decreaseItem(id)}
            className=" text-bl-100 text-2xl"
          >
            <HiChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
