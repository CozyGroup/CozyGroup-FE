import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Thông tin tài khoản", path: "/account" },
  { label: "Lịch sử mua hàng", path: "/history" },
  { label: "Đổi mật khẩu", path: "/account/change-password" },
  { label: "Ví mua hàng", path: "/account/wallet" },
];

const AccountSidebar = () => {
  const location = useLocation();

  return (
    <div className="min-w-[300px] mr-[30px]">
      <h1 className="text-[19px] text-primary font-quicksand font-bold mb-4">TRANG TÀI KHOẢN</h1>
      <p className="mb-2"><strong>Xin chào, Cozy!</strong></p>
      <ul className="space-y-2">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.path}
              className={`block py-2 rounded ${
                location.pathname === item.path
                  ? "text-primary underline"
                  : "text-gray-700 hover:text-primary hover:underline"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountSidebar;
