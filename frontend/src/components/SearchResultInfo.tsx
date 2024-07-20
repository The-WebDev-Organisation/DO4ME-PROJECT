import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Artisans found in {city}
        <Link
          to="/"
          className="ml-1 text-sm font-semibold cursor-pointer text-blue-500 pl-60 text-md"
        >
          Change Location
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
