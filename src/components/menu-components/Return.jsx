import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const Return = () => {
  return (
    <Link to="/" className="absolute top-0 right-0">
      <TiArrowLeftThick className="h-[30%] w-24 text-[#EFEF03]" />
    </Link>
  );
}

export default Return
