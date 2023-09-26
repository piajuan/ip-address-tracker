import React from "react";
import { iconArrow } from "../assets";

type SearchFieldProps = {
  value?: string;
  onChange?: (e: { target: HTMLInputElement; }) => void;
  onClick?: () => void;
  placeholder: string;
}
const SearchField = ({value, onChange, onClick, placeholder} : SearchFieldProps) => {
  return (
    <form className="group relative w-full max-w-[550px] mx-auto rounded-xl md:rounded-md overflow-hidden">
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="block w-full px-4 py-4 md:py-3"/>
      <button onClick={onClick} className="absolute top-0 right-0 h-full bg-black grid place-content-center px-4 aspect-square group-hover:bg-veryDarkGray"><img src={iconArrow} alt="" /></button>
    </form>
  )
}

export default SearchField