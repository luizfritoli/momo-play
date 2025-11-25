import { Link } from "react-router-dom";

const Card = ({ text, game }) => {
  return (
    <Link to={game}>
      <div className="bg-red-500 w-[18em] h-[4em] border-3 rounded-lg rounded-br-[1.4em] font-medium">
        <h2 className="text-[#FFF] pl-[0.4em] pt-[0.4em] text-[1.1em]">{text}</h2>
      </div>
    </Link>
  );
};

export default Card;
