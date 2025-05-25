import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, setNameFilter } from "../../redux/filtersSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(setNameFilter(e.target.value))}
      placeholder="Find contacts by name"
    />
  );
}
