import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Contract_Address, abi } from "../../constants";

const EmployeesCard = (props) => {
  const employee = props.employee;
  const bananaSdkInstance = props.bananaSdkInstance;
  const [orgWalletAddress, setOrgWalletAddress] = useState("");

  const paySal = async () => {
    const bananaProvider = await bananaSdkInstance.getBananaProvider();
    const bananaSigner = bananaProvider.getSigner();

    let salaryContract = new ethers.Contract(
      Contract_Address,
      abi,
      bananaSigner
    );
    const salaryFxn = salaryContract.interface.encodeFunctionData("paySalary", [
      employee.walletAddress,
      "1",
    ]);
    try {
      const txn = await bananaSdkInstance.execute(
        salaryFxn,
        employee.walletAddress,
        "0.1"
      );
      console.log(txn);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWallet = async () => {
    const walletName = bananaSdkInstance.getWalletName();
    console.log(walletName);
    if (walletName) {
      const walletAddres = (await bananaSdkInstance.connectWallet(walletName))
        .address;
      setOrgWalletAddress(walletAddres);
      console.log(walletAddres);
    } else {
      alert("You are not registered with us. Please signup first.");
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold tracking-tight">
            {employee.name}
          </span>
        </div>
        <ul role="list" class="space-y-2 my-4">
          <li class="flex space-x-3">
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {employee.department}
            </span>
          </li>
          <li class="flex space-x-3">
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {employee.email}
            </span>
          </li>
          <li class="flex space-x-3">
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {employee.walletAddress}
            </span>
          </li>
        </ul>
        <button
          type="button"
          class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          onClick={paySal}
        >
          Pay Salary
        </button>
      </div>
    </div>
  );
};

export default EmployeesCard;
