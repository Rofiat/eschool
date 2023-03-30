import React from "react";
import { Navbar } from "flowbite-react";
import background from "../../images/background.png";

const Header = () => {
  const ButtonComp = () => (
    <div>
      <span>
        <button
          className="mr-[20px] font-bold bg-opacity-5 text-white"
          color="gray"
        >
          Login
        </button>
        <button
          type="button"
          class="text-white bg-[#ff6551] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          JOIN US
          <svg
            aria-hidden="true"
            class="w-4 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </span>
    </div>
  );

  return (
    <div className="w-full">
      <img src={background} alt="backimage" />
      <Navbar
        fluid={true}
        class="absolute top-1 left-0 right-0 bg-transparent px-5 md:px-20 lg:px-40 md:text-white"
      >
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Brandname
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="hidden md:block">
            <ButtonComp />
          </div>
          <Navbar.Toggle className="font-bold" />
        </div>
        <Navbar.Collapse className="font-semibold">
          <Navbar.Link href="/navbars" className="text-white">
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="text-white">
            Products
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="text-white">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="text-white">
            Contact Us
          </Navbar.Link>
          <div className="p-5 block md:hidden">
            <ButtonComp />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
