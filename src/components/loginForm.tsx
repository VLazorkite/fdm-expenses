/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col justify-center items-center">
      <h1 className="bg-blue-800 text-white text-3xl p-4">Expenses App</h1>
      <div className="login-settings-box bg-blue-300 p-4 rounded-lg">
        <form
          method="GET"
          action="http://webprojects.eecs.qmul.ac.uk/un300/week4/week4_process.php"
          className="text-center"
        >
          <fieldset>
            <legend className="text-2xl">Login</legend>
            <div className="blueBorder">
              <label>Enter Username</label>
              <br />
              <input
                type="text"
                name="username"
                className="border border-blue-500 rounded-md p-2"
              />
              <br />
              <label>Enter Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="border border-blue-500 rounded-md p-2"
              />
              <br />
              <br />
              <input className="blueButton mr-2" type="submit" value="Submit" />
              <input className="blueButton" type="reset" value="Clear Form" />
            </div>
            <br />
            <div className="blueBorder">
              <label>Are you a robot?</label>
              <br />
              <br />
              <img
                src="CaptchaImage.png"
                alt="Captcha Image"
                className="w-1/2 h-1/2 mx-auto"
              />
              <br />
              <label>Enter text here:</label>
              <input
                type="text"
                name="Captcha"
                className="border border-blue-500 rounded-md p-2"
              />
              <br />
              <input
                className="blueButton"
                type="submit"
                value="Check Captcha"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
