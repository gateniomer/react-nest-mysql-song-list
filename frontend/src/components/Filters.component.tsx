import { FormEvent } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export function Filters() {
  const {
    countParam,
    setCountParam,
    nameParam,
    setNameParam,
    bandParam,
    setBandParam,
    minYearParam,
    maxYearParam,
    setMinYearParam,
    setMaxYearParam,
    fetchSongs,
  } = useGlobalContext();

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    fetchSongs && fetchSongs();
  };

  return (
    <div>
      <h3>Filter The Results</h3>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="count">Songs to view</label>
          <input
            id="count"
            type="number"
            value={countParam}
            onInput={(e) => {
              setCountParam(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="nameParam">Name</label>
          <input
            id="nameParam"
            placeholder="Stairway to Heaven.."
            type="string"
            value={nameParam}
            onInput={(e) => {
              setNameParam(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="bandParam">Band</label>
          <input
            id="bandParam"
            placeholder="Led Zeppelin.."
            type="string"
            value={bandParam}
            onInput={(e) => {
              setBandParam(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="minYearParam">Years</label>
          <input
            id="minYearParam"
            placeholder="1971.."
            type="number"
            value={minYearParam || ""}
            onInput={(e) => {
              setMinYearParam(e.target.value);
            }}
          />
          <span>-</span>
          <input
            id="maxYearParam"
            placeholder={new Date().getFullYear() + ".."}
            type="number"
            value={maxYearParam || ""}
            onInput={(e) => {
              setMaxYearParam(e.target.value);
            }}
          />
        </div>
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}
