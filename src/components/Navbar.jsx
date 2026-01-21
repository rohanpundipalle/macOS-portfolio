import React from "react";
import { FaApple } from "react-icons/fa";
import { navItems, navIcons } from "@constants";

import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <FaApple size={18} color="white" />
        <p className="font-bold text-sm text-white">Rohan's Portfolio</p>

        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <p className="text-sm no-underline pointer-events-none text-white font-apple">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id} className="mx-2">
              <img
                src={img}
                alt={`icon-${id}`}
                className="w-4 h-4 object-contain icon-hover"
              />
            </li>
          ))}
        </ul>

        <time className="text-sm font-apple text-white">
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
