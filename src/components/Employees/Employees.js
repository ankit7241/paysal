import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EmployeesCard from "./EmployeesCard";

const Employess = (props) => {
  const bananaSdkInstance = props.bananaSdkInstance;
  const [employeeData, setEmployeeData] = useState([]);

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:8000/employees/");
    setEmployeeData(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="w-full pb-10">
      <div class=" ">
        <nav class="px-2 sm:px-4 p-4 mb-2">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="dashboard" class="flex items-center">
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
      <div className="flex flex-row ">
        <aside
          id="default-sidebar"
          class=" relative top-0 left-0 z-40 w-56 transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="dashboard"
                  class="flex items-center p-2 text-white rounded-lg "
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">Dashboard</span>
                </a>
              </li>

              <li className="bg-white rounded-lg">
                <a
                  href="Employees"
                  class="flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Employees</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="text-white ml-10 w-[100%]">
          <div className="flex justify-between place-items-center place-self-center place-content-center">
            <div className="text-3xl font-bold mb-8 pt-12">
              Your Employees
            </div>
            <a href="SigninEmp" className="mr-12 p-4 border-2 border-fuchsia-600 font-medium rounded-lg">
              Add Employee
            </a>
          </div>
          <div class="grid grid-cols-3 gap-y-4 mt-10">
            {employeeData.map((employee) => (
              <EmployeesCard
                employee={employee}
                bananaSdkInstance={bananaSdkInstance}
              />
            ))}
          </div>
        </div>
      </div>
      <p class="text-center mt-10 pb-10 text-gray-500 text-xs">
        &copy;2023 PaySal Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Employess;
