import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline as PasswordIcon } from "react-icons/io5";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

const InputIcon: React.FC<{ type: string; isFocused: boolean }> = ({
    type,
    isFocused,
  }) => {
    let iconClassName = `input-svg z-[99999] h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 ${
      isFocused ? "stroke-gray-1" : "stroke-gray-dark-8"
    }`;
  
    switch (type) {
      case "email":
        return <HiOutlineMail className={iconClassName} />;
      case "password":
        return <PasswordIcon className={iconClassName} />;
      case "search":
        return <SearchIcon className={iconClassName} />;
      default:
        return null;
    }

    
  };
  
export default InputIcon;