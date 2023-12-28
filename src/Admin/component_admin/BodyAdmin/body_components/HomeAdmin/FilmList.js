import React, { useEffect, useState } from "react";
import { https } from "../../../../service/config";
import { Button, Tag, message } from "antd";
import { NavLink } from "react-router-dom";
export default function FilmList() {
  const [filmArr, setFilmArr] = useState();

  useEffect(() => {
    fetchFilmList();
  }, []);

  const fetchFilmList = () => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((response) => {
        setFilmArr(response.data.content);
        console.log(response.data.content, filmArr);
        // lưu data vào localStorage
        localStorage.setItem(
          "FILM_LIST",
          JSON.stringify(response.data.content)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterFilm = (hot) => {
    if (hot === true) return <Tag color="red">Hot</Tag>;
    return <Tag color="green">Normal</Tag>;
  };

  const handleRemove = (film) => {
    https
      .delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${film.maPhim}`)
      .then((res) => {
        console.log(res);
        message.success("Xoá thành công");
        fetchFilmList();
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  function getFirstSentence(paragraph) {
    // Use a regular expression to match the first sentence
    let match = paragraph.match(/^.*?[.!?]/);

    // If a match is found, return the first sentence; otherwise, return an empty string
    return match ? match[0] : "";
  }

  return (
    <div className="mt-10 ">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Mã phim
              </th>
              <th scope="col" className="px-6 py-3">
                Hình ảnh
              </th>
              <th scope="col" className="px-6 py-3">
                Tên phim
              </th>
              <th scope="col" className="px-6 py-3">
                Mô tả
              </th>
              <th scope="col" className="px-6 py-3">
                Hot
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
            </tr>
          </thead>
          <tbody>
            {filmArr &&
              filmArr.map((film, key) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={key}
                  >
                    <th scope="row" className="px-6 py-4 ">
                      {film.maPhim}
                    </th>
                    <td className="px-6 py-4">
                      <img
                        src={film.hinhAnh}
                        style={{ width: 150, height: 150 }}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">{film.tenPhim}</td>
                    <td className="px-6 py-4" style={{ width: 300 }}>
                      {film.moTa}
                      {getFirstSentence(film.moTa)}
                    </td>
                    <td className="px-6 py-4">{filterFilm(film.hot)}</td>
                    <td className="px-6 py-4 ">
                      <Button
                        className="text-white bg-red-500"
                        onClick={() => {
                          handleRemove(film);
                        }}
                      >
                        Xoá{" "}
                      </Button>
                      <Button
                        className="text-white bg-green-500"
                        data-modal-target="authentication-modal"
                        data-modal-toggle="authentication-modal"
                      >
                        <NavLink to={`films/edit/${film.maPhim}`}>Sửa</NavLink>
                      </Button>
                      <br />
                      <Button
                        className="text-white bg-blue-500"
                        data-modal-target="authentication-modal"
                        data-modal-toggle="authentication-modal"
                      >
                        <NavLink to={`films/shedule/${film.maPhim}`}>
                          Cập nhật lịch chiếu
                        </NavLink>
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
