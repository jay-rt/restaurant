const OrdersPage = () => {
  return (
    <main className="p-x-responsive">
      <table className="w-full">
        <thead className="text-left">
          <tr>
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-100">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">09.06.2023</td>
            <td className="py-6 px-1">$89.79</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">09.06.2023</td>
            <td className="py-6 px-1">$89.79</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">09.06.2023</td>
            <td className="py-6 px-1">$89.79</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default OrdersPage;
