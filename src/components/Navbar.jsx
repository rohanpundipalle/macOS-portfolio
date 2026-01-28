import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { navItems, navIcons } from "@constants";
import dayjs from "dayjs";
import useWindowStore from "@store/window";

const Navbar = () => {
  const [now, setNow] = useState(dayjs());
  const { openWindow } = useWindowStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs());
    }, 1000); // every second

    return () => clearInterval(timer);
  }, []);

  return (
    <nav>
      <div>
        <FaApple size={18} color="white" />
        <p className="font-bold text-sm text-white">Rohan's Portfolio</p>

        <ul>
          {navItems.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p className="text-sm no-underline text-white font-apple">
                {name}
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
          {now.format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
