import React from "react";
import FilmList from "./FilmList";

export default function FilmManagement() {
  return (
    <div className="filmManagement" style={{ width: "100%" }}>
      <h2 className="text-4xl font-semibold ">Quản lý Phim</h2>

      <FilmList />
    </div>
  );
}
