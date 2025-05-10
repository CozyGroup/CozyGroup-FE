import React from "react";
import { Link } from "react-router-dom";

const  Navigation = ({ items = [] }) => {
  return (
    <nav className="bg-gray-100 text-gray-600 text-sm py-3 px-6 rounded">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link to={item.href} className="text-gray-500 hover:text-gray-700">
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navigation;