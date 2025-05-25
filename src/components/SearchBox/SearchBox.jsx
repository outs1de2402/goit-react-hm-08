import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const handleChangeQuery = (query) => {
    dispatch(changeFilter(query));
  };

  return (
    <>
      <label className="input flex justify-self-center input-accent max-w-70">
        <input
          type="search"
          required
          placeholder="Search"
          id="search"
          value={filter}
          onChange={(e) => handleChangeQuery(e.target.value)}
        />
      </label>
    </>
  );
};

export default SearchBox;
