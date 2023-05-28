import { useGlobalContext } from "../store/context";

import CartItem from "./CartItem";

export default function DisplayCart() {
  const { cart, clearCart, totalPrice } = useGlobalContext();

  if (cart.size < 1) {
    return (
      <div className="w-full sm:w-[500px] mx-auto p-6 flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl my-4 font-light">Your Cart</h2>
        <p className=" font-semibold tracking-wide">is currently empty</p>
      </div>
    );
  }

  return (
    <section className="w-full sm:w-[500px] mx-auto p-6 flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl my-4 font-light">Your Cart</h2>
      {Array.from(cart.entries()).map((cartItem) => {
        const [id, item] = cartItem;
        return <CartItem key={id} item={item} />;
      })}
      <footer className="w-full">
        <hr className="border-0 h-[.5px] bg-wh-50" />
        <div className="w-full my-2 flex justify-between">
          <h5 className=" font-light">Total</h5>
          <span className=" px-2 tracking-wide font-semibold">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <button
          onClick={clearCart}
          className=" block w-fit mx-auto my-4 px-4 py-[2.5px] bg-bl-100 rounded-sm text-sm shadow-lg"
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
}
