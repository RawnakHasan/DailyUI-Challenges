import { ChevronRight } from "lucide-react";
import Button from "./components/Button";

const C1Login = () => {
  return (
    <div className="flex justify-between m-12 mx-20">
      <div className="container mx-20 my-12">
        <h1 className="flex items-center mb-16">
          <img
            src="/public/img/BLogo.png"
            alt=""
            className="w-[2.875rem] h-[2.375rem]"
          />
          <span className="pl-2 text-3xl text-[#406678]">uBrand</span>
        </h1>
        <div className="header mb-8">
          <h2 className="text-4xl font-bold text-[#424242] w-[23.75rem] h-[6.375rem]">
            Start Your 14-Day Free Trial
            <p className="text-gray-400 uppercase text-sm font-normal mt-2">
              No Credit Card Required
            </p>
          </h2>
        </div>
        <Button text="Sign up with Google" />
        <div className="relative flex py-5 items-center w-[22.5rem]">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-slate-600">Or use Email</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <form className="flex flex-col space-y-4 w-[23.75rem]">
          <div className="input bg-[#F5F5F5] h-[6.375rem] p-6 rounded-xl">
            <label htmlFor="email" className="block text-[#616161]">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="text-[#616161] bg-[#F5F5F5] border-transparent w-full h-[60%] outline-none font-light"
              placeholder="Enter your Email"
            />
          </div>
          <div className="input bg-[#F5F5F5] h-[6.375rem] p-6 rounded-xl">
            <label htmlFor="password" className="block text-[#616161]">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="text-[#616161] bg-[#F5F5F5] border-transparent w-full h-[60%] outline-none font-light"
              placeholder="Enter your Password"
            />
          </div>
          <button className="flex items-center justify-center uppercase py-4 w-[23.75rem] rounded-xl text-white bg-[#2F3538]">
            Start my free trial <ChevronRight />
          </button>
          <p className="text-[#757575] text-sm font-light">
            By Signing up to uBrand, means you agree to our Privacy Policy and
            Terms of Service
          </p>
          <span className="text-[#616161] text-center w-[23.75rem]">
            Are you a Newbie?{" "}
            <a
              href="http://localhost:5173/C1/signup"
              className="font-semibold text-[#424242] underline"
            >
              <span className="text-[#212121]">GET STARTED - IT'S FREE</span>
            </a>
          </span>
        </form>
      </div>
      <img src="/public/img/pattern-c-SignUp.png" alt="" />
    </div>
  );
};
export default C1Login;
