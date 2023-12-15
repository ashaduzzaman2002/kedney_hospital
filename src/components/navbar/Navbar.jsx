import { Downarrow, Menubar, User } from "assets/svg/Icon";
import { Button, Img, Text } from "components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="bg-[#F5F6F9] relative">
      <nav
        style={{ alignItems: "center" }}
        className="max-w-[1800px] lg:px-28 px-4 py-4 mx-auto flex align-middle justify-between"
      >
        <div className="flex align-middle" style={{ alignItems: "center" }}>
          <Img
            className="h-[52px] md:h-auto object-cover w-[52px]"
            src="images/img_logo7701.png"
            alt="logo7701"
          />
          <Text
            className="text-blue_gray-900 text-lg w-[70%] sm:w-full"
            size="txtFredokaSemiBold18"
          >
            Dhameliya Kidney Hospital
          </Text>
        </div>

        <ul className="lg:flex hidden gap-16" style={{ alignItems: "center" }}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>

          <div class="group relative inline-block z-10">
            <li class=" transition duration-300 ease-in-out transform flex gap-2">
              Medical Services <Downarrow />
            </li>
            <div class="hidden absolute mt-1 bg-white shadow-md  py-2 w-36 rounded-md group-hover:block bg-white-A700">
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-white"
              >
                Option 1
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-white"
              >
                Option 2
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-white"
              >
                Option 3
              </a>
            </div>
          </div>
          <li>
            <Link to={"/"}>Career</Link>
          </li>
          <li>
            <Link to={"/"}>News</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>

        <div
          className="lg:flex hidden align-middle gap-5"
          style={{ alignItems: "center" }}
        >
          <User />
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[214px] text-center text-lg"
            shape="round"
            color="blue_gray_700"
            size="md"
            variant="fill"
          >
            Make Appointment
          </Button>
        </div>

        <div>
          <button onClick={() => setToggleMenu(true)} className="block lg:hidden bg-white-A700 w-10 h-10 flex align-middle justify-center rounded-full">
            <Menubar />
          </button>
        </div>
      </nav>

      {toggleMenu && (
        <div className=" block lg:hidden bg-black-900_33 fixed top-0 bottom-0 right-0 left-0">
          <div onClick={() => setToggleMenu(false)} className="absolute top-0 right-0 left-0 bottom-0"></div>
          <div className="bg-white-A700 h-full w-64 relative z-10">
            <div
              className="flex align-middle p-2"
              style={{ alignItems: "center" }}
            >
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_logo7701.png"
                alt="logo7701"
              />
              <Text
                className="text-blue_gray-900 text-lg w-[70%] sm:w-full"
                size="txtFredokaSemiBold18"
              >
                Dhameliya Kidney Hospital
              </Text>
            </div>
            <hr />

            <ul className=""></ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
