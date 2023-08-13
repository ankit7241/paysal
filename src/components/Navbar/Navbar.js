import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png"

const Navbar = (props) => {
  const bananaSdkInstance = props.bananaSdkInstance;

  const [isLogin, setIsLogin] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    const walletName = bananaSdkInstance.getWalletName();
    if (walletName) {
      const walletAddress = (await bananaSdkInstance.connectWallet(walletName))
        .address;
      setWalletAddress(walletAddress);
      setIsLogin(true);
      console.log(walletAddress);
    } else {
      alert("You are not registered with us. Please signup first.");
    }
  };

  return (
    <div className="font-poppins">
      <nav class="px-2 sm:px-4 p-4 ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="" class="flex items-center">
            <img
              src={logo}
              class="h-24  "
              alt="Flowbite Logo"
            />
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            {isLogin ? (
              <div>
                <ul class="flex flex-col  mt-4 border gap-7 rounded-lg  md:flex-row  md:text-sm md:font-medium md:border-0 ">
                  <li>
                    <div class="relative inline-block text-left">
                      <div className="flex w-full  justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold text-white ring-2 ring-inset ring-fuchsia-600">
                        <button label="Login" onClick={connectWallet}>
                          {walletAddress}
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <ul class="flex flex-col  mt-4 border gap-7 rounded-lg  md:flex-row  md:text-sm md:font-medium md:border-0 pb-8">
                <li>
                  <div class="relative inline-block text-left">
                    <div className="flex w-full  justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold text-white ring-2 ring-inset ring-fuchsia-600">
                      <button label="Login" onClick={connectWallet}>
                        Login
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="relative inline-block text-left">
                    <div className="flex w-full  justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold text-white ring-2 ring-inset ring-fuchsia-600">
                      <button label="Sign up">
                        <Link to="SigninOrg">Sign Up</Link>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
