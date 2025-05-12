import React from "react";

const OrderDetailModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 text-xl">&times;</button>

        <h2 className="text-center bg-green-700 text-white rounded py-2 mb-4 font-semibold">
          Đơn hàng {order.id}
        </h2>

        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">Thông tin khách hàng</h3>
          <p>Tên người nhận: {order.name}</p>
          <p>Số điện thoại: {order.phone}</p>
          <p>Địa chỉ: {order.address}</p>
        </div>

        <table className="w-full text-sm border border-collapse mb-4">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="border px-2 py-1">Tên món</th>
              <th className="border px-2 py-1">Số lượng</th>
              <th className="border px-2 py-1">Giá</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, idx) => (
              <tr key={idx} className="text-center">
                <td className="border px-2 py-1">{item.name}</td>
                <td className="border px-2 py-1">{item.quantity}</td>
                <td className="border px-2 py-1">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-sm space-y-1">
          <p>Hình thức giao hàng: {order.shipping}</p>
          <p>Phương thức thanh toán: {order.payment}</p>
          <p>Thuế VAT: {order.vat}</p>
          <p>Phí vận chuyển: {order.shippingFee}</p>
          <p className="font-bold text-base">Tổng tiền: {order.total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
