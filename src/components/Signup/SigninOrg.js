import React from "react";
import { useState } from "react";
import axios from "axios";

const SigninOrg = (props) => {
  const bananaSdkInstance = props.bananaSdkInstance;
  const [wallet, setWallet] = useState("");
  const [nameWallet, setNameWallet] = useState("");

  const createWallet = async () => {
    const walletName = nameWallet;

    const isWalletNameUnqiue = await bananaSdkInstance.isWalletNameUnique(
      walletName
    );
    if (!isWalletNameUnqiue) {
      alert("Wallet name provided is not unique");
      return;
    }

    const walletAddres = (await bananaSdkInstance.createWallet(walletName))
      .address;
    setWallet(walletAddres);
    console.log(walletAddres);
    document.getElementById("industry").placeholder = wallet;
  };

  const submitForm = async () => {
    const name = document.getElementById("name").value;
    const walletAddress = wallet;
    const email = document.getElementById("email").value;
    const industry = document.getElementById("industry").value;

    const data = {
      name,
      walletAddress,
      email,
      industry,
    };
    await axios.post("http://localhost:8000/orgs/", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <div class=" ">
        <nav class="px-2 sm:px-4 p-4 mb-8">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span class="self-center text-xl  text-white font-semibold whitespace-nowrap ">
                PaySal
              </span>
            </a>
          </div>
        </nav>
      </div>
      <div class=" w-full m-auto  max-w-2xl drop-shadow-2xl">
        <div class=" flex flex-col gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 pt-4 pb-10 ">
          <h1 className="block text-white text-2xl font-bold mb-2">
            Register your organisation
          </h1>
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2" for="Name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Google"
              onChange={(e) => {
                setNameWallet(e.target.value);
              }}
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="industry"
            >
              Industry
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="industry"
              type="text"
              placeholder="Computer Software"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2" for="e-mail">
              Email Address
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="abc@gmail.com"
            ></input>
          </div>

          <div class="mb-6">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="Wallet-Address"
            >
              Wallet Address
            </label>
            <div className="flex">
              <button
                className="bg-white h-12 hover:bg-fuchsia-100 border-r-white border-2 text-black text-sm font-semibold py-1 rounded px-2"
                onClick={() => {
                  createWallet();
                }}
              >
                Get Wallet Address
              </button>
              <div className="pl-2">
                <p><strong>Address: </strong>{wallet}</p>
                <p><strong>Wallet Name: </strong>{nameWallet}</p>
              </div>
            </div>
          </div>

          <div class="flex space-x-2 items-center justify-between">
            <button
              class="bg-white w-24 hover:bg-fuchsia-100 text-black text-md font-bold py-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitForm}
            >
              Sign Up
            </button>
          </div>
        </div>

        <p class="text-center mt-10 pb-10 text-gray-500 text-xs">
          &copy;2023 PaySal Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SigninOrg;
