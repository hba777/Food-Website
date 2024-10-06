import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, Logo, onClose, hideLeft, onOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img className="h-24" src={Logo} alt="Logo" />
      </a>
      <button onClick={onOpen} className="border border-primary rounded">
        <HiBars3 className="h-7 w-7"></HiBars3>
      </button>

      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}>
        <button onClick={onClose} className="absolute right-8 top-32">
          <IoIosCloseCircleOutline className="h-7 w-7"></IoIosCloseCircleOutline>
        </button>

        <div>
          <ul className="flex flex-col gap-5">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login and Sign Up button*/}
          <ul className="flex items-center gap-3 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                {" "}
                Log In
              </button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                {" "}
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
