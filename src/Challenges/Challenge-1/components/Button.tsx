import { FcGoogle } from "react-icons/fc";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-[#E3F3FB] hover:bg-[#cfefff] text-white py-2 px-4 rounded-full w-[22.5rem] h-[3.5rem] flex items-center justify-center">
      <div className="flex items-center justify-center">
        <FcGoogle size={28} className="bg-white rounded-full p-1" />
      </div>
      <h1 className="text-[#424242] font-light ml-4">{text}</h1>
    </button>
  );
};
export default Button;
