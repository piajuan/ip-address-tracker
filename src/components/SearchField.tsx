import { iconArrow } from "../assets";

// type SearchFieldProps = {
//   ip: string;
//   onChange: () => void;
//   onSubmit: () => void;
//   placeholder: string;
// }
const SearchField = ({value, onChange, onClick, placeholder}) => {
  return (
    <form className="relative w-full max-w-[550px] mx-auto rounded-md overflow-hidden">
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="block w-full px-4 py-3"/>
      <button onClick={onClick} className="absolute top-0 right-0 h-full bg-veryDarkGray grid place-content-center px-4"><img src={iconArrow} alt="" /></button>
    </form>
  )
}

export default SearchField