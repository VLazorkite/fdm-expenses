/* eslint-disable @next/next/no-img-element */
"use client";
import { findUser } from "@/db/find";
import React, { useState } from "react";

export default function AdminPage() {
  const [newEmployee, setNewEmployee] = useState<Employee>(() => ({
    userDetails: {
      email: "",
      firstName: "",
      lastName: "",
      userStatus: "employee",
    },
    lineManager: {
      email: "",
      firstName: "",
      lastName: "",
      userStatus: "lineManager",
    },
    payTickets: [],
  }));

  const [newLineManager, setNewLineManager] = useState<LineManager>(() => ({
    userDetails: {
      email: "",
      firstName: "",
      lastName: "",
      userStatus: "lineManager",
    },
    employees: [],
    payTickets: [],
  }));

  function handleEmployeeChange(field: keyof Employee["userDetails"]) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewEmployee((prevState) => ({
        ...prevState,
        userDetails: {
          ...prevState.userDetails,
          [field]: e.target.value,
        },
      }));
    };
  }
  function handleEmployeeLMChange(field: keyof Employee["lineManager"]) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewEmployee((prevState) => ({
        ...prevState,
        lineManager: {
          ...prevState.lineManager,
          [field]: findUser(e.target.value),
        },
      }));
    };
  }

  function handleLineManagerChange(field: keyof LineManager["userDetails"]) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewLineManager((prevState) => ({
        ...prevState,
        userDetails: {
          ...prevState.userDetails,
          [field]: e.target.value,
        },
      }));
    };
  }

  function handleCreateEmployee() {
    // Logic to create new employee
    console.log("New employee:", newEmployee);
  }

  function handleCreateLineManager() {
    // Logic to create new line manager
    console.log("New line manager:", newLineManager);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover  ">
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto text-black ">
                New Employee
              </h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div className="mt-5 font-semibold ">
              <div className="form">
                <div className="md:space-y-2 mb-3"></div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      First Name
                    </label>
                    <input
                      placeholder="John"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 text-gray-950 "
                      required={true}
                      type="text"
                      name="fName"
                      value={newEmployee.userDetails.firstName}
                      onChange={handleEmployeeChange("firstName")}
                      id="fName"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Last name
                    </label>
                    <input
                      placeholder="Doe"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 text-gray-950 "
                      required={true}
                      type="text"
                      name="lName"
                      onChange={handleEmployeeChange("lastName")}
                      id="lName"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className=" font-semibold text-gray-600 py-2">
                    Email
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <input
                      type="email"
                      required={true}
                      className="flex-shrink flex-grow flex-auto leading-normal w-px border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow text-gray-950"
                      placeholder="johndoe@fdm.com"
                      onChange={handleEmployeeChange("email")}
                      id="eEmail"
                    />
                  </div>
                </div>

                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className=" font-semibold text-gray-600 py-2">
                    Line Manager Email
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <input
                      type="email"
                      required={true}
                      className="flex-shrink flex-grow flex-auto leading-normal w-px border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow text-gray-950"
                      placeholder="Lineman@fdm.com"
                      onChange={handleEmployeeChange("email")}
                      id="lmEmail"
                    />
                  </div>
                </div>

                <p className="text-xs text-red-500 text-right my-3">
                  All fields are Required
                </p>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                    {" "}
                    Cancel{" "}
                  </button>
                  <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
