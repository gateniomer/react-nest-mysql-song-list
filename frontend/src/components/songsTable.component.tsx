import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export const SongsTable = () => {
  const { songs, fetchSongs, deleteSong } = useGlobalContext();

  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "desc",
  });

  useEffect(() => {
    fetchSongs();
  }, []);

  const handleSort = (key: string) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedSongs = [...songs].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  return (
    <div id="songs-table">
      <div>Showing {sortedSongs.length} Songs</div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>
              ID {sortConfig.key === "id" ? `(${sortConfig.direction})` : ""}
            </th>
            <th onClick={() => handleSort("name")}>
              Name{" "}
              {sortConfig.key === "name" ? `(${sortConfig.direction})` : ""}
            </th>
            <th onClick={() => handleSort("band")}>
              Band{" "}
              {sortConfig.key === "band" ? `(${sortConfig.direction})` : ""}
            </th>
            <th onClick={() => handleSort("year")}>
              Year{" "}
              {sortConfig.key === "year" ? `(${sortConfig.direction})` : ""}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedSongs.map((song) => (
            <tr key={song.id}>
              <td>{song.id}</td>
              <td>{song.name}</td>
              <td>{song.band}</td>
              <td>{song.year}</td>
              <td>
                <button
                  onClick={() => {
                    deleteSong(song.id);
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
