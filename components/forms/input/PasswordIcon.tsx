import {
    AiOutlineEyeInvisible,
    AiOutlineEye
} from 'react-icons/ai'
export default function PasswordIcon({ 
    isVisible,
     toggleVisibility
     }:any) {
  return (
    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
    {isVisible ? (
      <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
    ) : (
      <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
    )}
  </button>
  )
}
