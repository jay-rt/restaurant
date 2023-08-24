import Image from "next/image";

const CartIcon = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image
          src="/cart.png"
          alt=""
          fill
          sizes="(min-width: 768px) 1.25rem, (max-width: 763px) 2rem"
        />
      </div>
      <span>Cart (3)</span>
    </div>
  );
};

export default CartIcon;
