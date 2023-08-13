import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Features from "./Features";
import FutureScope from "./FutureScope";
import Payment from "../assets/Payment.png";
import Crypto1 from "../assets/Crypto1.png";
import Crypto2 from "../assets/Crypto2.png";
import Crypto3 from "../assets/Crypto3.png";
import Crypto4 from "../assets/Crypto4.png";

const Landing = (props) => {
  return (
    <div className="font-poppins">
      <Navbar bananaSdkInstance={props.bananaSdkInstance} />
      <div className="flex flex-row mt-20">
        <div className="mt-10 w-2/3 text-left leading-loose text-white text-3xl p-20 font-bold pl-28">
          <p>Streamline payroll, strengthen security </p>
          <p className="text-xl font-medium"> The blockchain-powered solution for multi-organization salary distribution </p>
          <p></p>

          <button class=" mt-16  font-normal border-fuchsia-600 border-2 text-white rounded-lg px-10 py-2 text-lg font-semibold ">
            <Link to="Dashboard">Dashboard</Link>
          </button>
        </div>

        <div className="mr-16">
          <img
            className="absolute rounded-2xl mt-36 ml-2 "
            src={Crypto1}
            width="500"
            height="200"
          ></img>
          <img
            className="absolute rounded-2xl mt-60 mr-2"
            src={Crypto3}
            width="500"
            height="200"
          ></img>
          <img
            className="absolute rounded-2xl mt-80 ml-10"
            src={Crypto4}
            width="500"
            height="200"
          ></img>
        </div>
        <div>
          <img
            className="relative"
            src={Payment}
            width="500"
            height="200"
          ></img>
        </div>
      </div>

      <div className="mt-40">
        
        <Features />
      </div>
      <div>
        <FutureScope />
      </div>
    </div>
  );
};

export default Landing;
