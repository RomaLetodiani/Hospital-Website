import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

type Props = {
  placeholder: string;
};

const Input = ({ placeholder }: Props) => {
  return (
    <div className="relative">
      <input
        type="email"
        placeholder={placeholder}
        className="w-full pl-5 pr-10 py-2 rounded-xl outline-none shadow-md border-[#1d4d85] border-2 bg-transparent placeholder:text-[#1d4d85]"
      />
      <PaperAirplaneIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
    </div>
  );
};

export default Input;
