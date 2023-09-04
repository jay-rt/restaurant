import Image from "next/image";

const CartPage = () => {
  return (
    <main className="h-fit-screen text-red-500 flex flex-col md:flex-row">
      {/* PRODUCTS CONTAINER */}
      {/* Making scroll bar hidden for chrome, edge safari and firefox */}
      <div className="p-x-responsive h-1/2 flex flex-col gap-4 overflow-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none] md:h-full md:w-[60%]">
        {/* SINGLE PRODUCT */}
        <div className="flex-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79</h2>
          <span className="uppercase text-sm cursor-pointer">Delete</span>
        </div>
        {/* SINGLE PRODUCT */}
        <div className="flex-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79</h2>
          <span className="uppercase text-sm cursor-pointer">Delete</span>
        </div>
        {/* SINGLE PRODUCT */}
        <div className="flex-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79</h2>
          <span className="uppercase text-sm cursor-pointer">Delete</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-x-responsive bg-fuchsia-50 flex flex-col justify-center gap-4 md:h-full md:w-[40%]">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button
          type="button"
          className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end"
        >
          CHECKOUT
        </button>
      </div>
    </main>
  );
};

export default CartPage;
