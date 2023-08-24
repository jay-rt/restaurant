import Image from "next/image";

const CartIcon = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-8 h-8">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (3)</span>
    </div>
  );
};

export default CartIcon;
