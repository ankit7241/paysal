import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SigninEmp = (props) => {
  const bananaSdkInstance = props.bananaSdkInstance;
  console.log(bananaSdkInstance);
  const [orgWalletAddress, setOrgWalletAddress] = useState("");

  const connectWallet = async () => {
    const walletName = bananaSdkInstance.getWalletName();
    if (walletName) {
      const walletAddres = (await bananaSdkInstance.connectWallet(walletName))
        .address;
      setOrgWalletAddress(walletAddres);
      console.log(walletAddres);
    } else {
      alert("You are not registered with us. Please signup first.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("Name").value;
    const department = document.getElementById("Department").value;
    const email = document.getElementById("Email").value;
    const orgId = orgWalletAddress;
    const walletAddress = document.getElementById("walletAddress").value;
    const employeeData = {
      name: name,
      department: department,
      email: email,
      orgId: orgId,
      walletAddress: walletAddress,
    };
    if (
      !employeeData.name ||
      !employeeData.department ||
      !employeeData.email ||
      !employeeData.orgId
    ) {
      alert("Please fill all fields");
    }
    const res = await axios.post(
      "http://localhost:8000/employees/",
      employeeData
    );
    console.log(res);
    alert("Employee added successfully");
    document.getElementById("Name").value = "";
    document.getElementById("Department").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("walletAddress").value = "";
  };
  

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      <div class="">
        <nav class="px-2  sm:px-4 p-4 mb-8">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="http://localhost:3000/Dashboard" class="flex items-center">
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
      <div class="  m-auto  max-w-2xl drop-shadow-2xl">
        <form class=" flex flex-col gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 py-12 pb-10 ">
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2" for="Name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Name"
              type="text"
              placeholder="John Doe"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="Department"
            >
              Department
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Department"
              type="text"
              placeholder="IT/Marketing/Operations/Business"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2" for="Email">
              Email Address
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="email"
              placeholder="abc@company.com"
            ></input>
          </div>

          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="walletAddress"
            >
              Employee Wallet Address
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="walletAddress"
              type="text"
              placeholder="0xC2e7D52caEecC220AF3f48785ebdF8b331a7B668"
            ></input>
          </div>

          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="Organization-Id"
            >
              Organization Wallet Address:
            </label>
            {orgWalletAddress}
          </div>

          <div class="flex space-x-2 items-center justify-between">
            <button
              class="bg-white w-48 hover:bg-fuchsia-100 text-black text-md font-bold py-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Register Employee
            </button>
          </div>
        </form>
        <p class="text-center mt-10 pb-20 text-gray-500 text-xs">
          &copy;2023 PaySal Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SigninEmp;
