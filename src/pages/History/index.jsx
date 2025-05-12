import React, { useState } from "react";
import Navigation from "../../components/ui/Navigation";
import AccountSidebar from "../../components/ui/AccountSidebar";

const orders = [
    {
        id: "#ABC",
        date: "01/01/2025",
        branch: "Abc,Xyz,.....",
        value: "111111 VND",
        payment: "Online",
        shipping: "xXxX",
        customer: {
            name: "Mr.Cozy",
            phone: "0123456789",
            address: "abc,def",
        },
        items: [
            { name: "Bò lúc lắc", quantity: 2, price: "xxx.xxx VND" },
            { name: "Coca", quantity: 1, price: "xxx.xxx VND" },
        ],
        vat: "XXX.XXX VND",
        shippingFee: "XXX.XXX VND",
        total: "XXX.XXX VND",
    },
    {
        id: "#ABC",
        date: "01/01/2025",
        branch: "Abc,Xyz,.....",
        value: "111111 VND",
        payment: "Online",
        shipping: "xXxX",
        customer: {
            name: "Mr.Cozy",
            phone: "0123456789",
            address: "abc,def",
        },
        items: [
            { name: "Bò lúc lắc", quantity: 2, price: "xxx.xxx VND" },
            { name: "Coca", quantity: 1, price: "xxx.xxx VND" },
        ],
        vat: "XXX.XXX VND",
        shippingFee: "XXX.XXX VND",
        total: "XXX.XXX VND",
    },
    {
        id: "#ABC",
        date: "01/01/2025",
        branch: "Abc,Xyz,.....",
        value: "111111 VND",
        payment: "Online",
        shipping: "xXxX",
        customer: {
            name: "Mr.Cozy",
            phone: "0123456789",
            address: "abc,def",
        },
        items: [
            { name: "Bò lúc lắc", quantity: 2, price: "xxx.xxx VND" },
            { name: "Coca", quantity: 1, price: "xxx.xxx VND" },
        ],
        vat: "XXX.XXX VND",
        shippingFee: "XXX.XXX VND",
        total: "XXX.XXX VND",
    },



];

const OrderDetailModal = ({ order, onClose }) => {
    if (!order) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-500"
                >
                    &times;
                </button>
                <h2 className="text-center text-lg font-semibold text-white bg-green-600 py-2 rounded">Đơn hàng {order.id}</h2>

                <div className="mt-4 space-y-2 text-sm sm:text-base">
                    <h3 className="font-bold text-lg">Thông tin khách hàng</h3>
                    <p><strong>Tên người nhận:</strong> {order.customer.name}</p>
                    <p><strong>Số điện thoại:</strong> {order.customer.phone}</p>
                    <p><strong>Địa chỉ:</strong> {order.customer.address}</p>
                </div>

                <table className="hidden md:table w-full text-sm border border-collapse my-4">
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

                <div className="md:hidden space-y-2 my-4">
                    {order.items.map((item, idx) => (
                        <div key={idx} className="border p-2 rounded shadow-sm text-sm">
                            <p><strong>Tên món:</strong> {item.name}</p>
                            <p><strong>Số lượng:</strong> {item.quantity}</p>
                            <p><strong>Giá:</strong> {item.price}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-1 text-sm sm:text-base">
                    <p>Hình thức giao hàng: {order.shipping}</p>
                    <p>Phương thức thanh toán: {order.payment}</p>
                    <p>Thuế VAT: {order.vat}</p>
                    <p>Phí vận chuyển: {order.shippingFee}</p>
                    <p className="font-bold text-lg mt-2">Tổng tiền: {order.total}</p>
                </div>
            </div>
        </div>
    );
};

const Account = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <>
            <Navigation items={[{ label: 'Trang chủ', href: '/' }, { label: 'Lịch sử mua hàng', href: '/account' }]} />
            <div className="w-full lg:px-[60px] px-[20px] lg:py-[50px] py-[30px] flex flex-col lg:flex-row gap-6">
                <AccountSidebar />

                <div className="w-full bg-white p-4 shadow rounded overflow-auto">
                    <h3 className="font-bold mb-4">LỊCH SỬ MUA HÀNG</h3>
                    <table className="w-full text-sm border border-collapse">
                        <thead className="bg-green-700 text-white">
                            <tr>
                                <th className="p-2 border">Đơn hàng</th>
                                <th className="p-2 border hidden md:table-cell">Ngày</th>
                                <th className="p-2 border hidden md:table-cell">Địa chỉ chi nhánh</th>
                                <th className="p-2 border">Giá trị đơn hàng</th>
                                <th className="p-2 border hidden md:table-cell">Phương thức thanh toán</th>
                                <th className="p-2 border hidden md:table-cell">Đơn vị vận chuyển</th>
                                <th className="p-2 border">Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, idx) => (
                                <tr key={idx} className="text-center border-t">
                                    <td className="p-2 border">{order.id}</td>
                                    <td className="p-2 border hidden md:table-cell">{order.date}</td>
                                    <td className="p-2 border hidden md:table-cell">{order.branch}</td>
                                    <td className="p-2 border">{order.value}</td>
                                    <td className="p-2 border hidden md:table-cell">{order.payment}</td>
                                    <td className="p-2 border hidden md:table-cell">{order.shipping}</td>
                                    <td
                                        className="p-2 border text-green-600 cursor-pointer hover:underline"
                                        onClick={() => setSelectedOrder(order)}
                                    >
                                        Xem chi tiết
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedOrder && <OrderDetailModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
        </>
    );
};

export default Account;
