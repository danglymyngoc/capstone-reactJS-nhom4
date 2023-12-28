import axios from 'axios';
import React, { useEffect, useState } from 'react'
import https from '../../../service/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Select, message } from 'antd';
import moment from 'moment';
import { USER_INFO } from '../../../service/config';

export default function SearchMovie() {
    const [searchFilm, setSearchFilm] = useState(null);
    const [chosenCinemaArr, setChosenCinemaArr] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [movieArr, setMovieArr] = useState([]);
    const [movieArrFilter, setMovieArrFilter] = useState([]);
    // chọn rạp
    const [searchCinema, setSearchCinema] = useState(null);

    // danh sách suất
    const [searchTime, setSearchTime] = useState(null);

    // chọn suất
    const [chosenTime, setChosenTime] = useState(null);
    console.log(chosenTime, 'chosenTime')

    const [totalSearchFilm, setTotalSearchFilm] = useState([]);
    useEffect(() => {
        https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09')
            .then((res) => {
                setMovieArr([...res.data.content]);
                const arrData = [...res.data.content];
                const arrFilter = [];
                arrData.map(item => {
                    arrFilter.push({
                        value: item.maPhim,
                        label: item.tenPhim,
                    });
                });
                setMovieArrFilter([...arrFilter]);
            }).catch((err) => {
                console.log(err)
            });
    }, []);
    useEffect(() => {
        if (searchFilm) {
            // axios({
            //     url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${searchFilm}`,
            //     method: "GET",
            //     headers: configHeaders(),
            // })
            https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${searchFilm}`)
                .then((res) => {
                    setTotalSearchFilm(res.data.content);
                    const arrData = [...res.data.content.heThongRapChieu];
                    const arrFilter = [];
                    const cumRapList = arrData
                        .map(heThongRap =>
                            heThongRap.cumRapChieu.map(cumRap => ({
                                maCumRap: cumRap.maCumRap,
                                tenCumRap: cumRap.tenCumRap,
                            })),
                        )
                        .flat();
                    cumRapList.map(item => {
                        arrFilter.push({
                            value: item.maCumRap,
                            label: item.tenCumRap,
                        });
                    });
                    setChosenCinemaArr([...arrFilter]);
                }).catch((err) => {
                    console.log(err)
                });
        }
    }, [searchFilm]);

    useEffect(() => {
        if (searchCinema && searchFilm) {
            const filteredData = totalSearchFilm.heThongRapChieu
                .map(heThongRap => heThongRap.cumRapChieu.filter(cumRap => cumRap.maCumRap === searchCinema))
                .flat();
            const arr = [];
            filteredData.map(item => {
                item.lichChieuPhim.map(itemChild =>
                    arr.push({
                        value: itemChild.maLichChieu,
                        label: moment(itemChild.ngayChieuGioChieu).format("DD-MM-YYYY ~ HH:mm"),
                    }),
                );
            });
            setSearchTime([...arr]);
        }
    }, [searchCinema, searchFilm, totalSearchFilm]);
    return (
        <div className='shadow-lg bg-white'>
            <div className='container grid grid-cols-1 lg:grid-cols-4 gap-3 p-10'>
                <Select
                    disabled={movieArrFilter.length === 0}
                    showSearch
                    className='w-full'
                    placeholder='Chọn phim'
                    optionFilterProp='children'
                    filterOption={(input, option) => (option?.label ?? "").includes(input)}
                    filterSort={(optionA, optionB) => (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())}
                    options={movieArrFilter}
                    onChange={value => {
                        setSearchFilm(value);
                        setSearchCinema(null);
                        setSearchTime(null);
                        setChosenTime(null);
                    }}
                />
                <Select
                    disabled={!searchFilm}
                    value={searchCinema}
                    showSearch
                    className='w-full'
                    placeholder='Chọn rạp'
                    optionFilterProp='children'
                    filterOption={(input, option) => (option?.label ?? "").includes(input)}
                    filterSort={(optionA, optionB) => (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())}
                    options={chosenCinemaArr}
                    onChange={e => {
                        setSearchCinema(e);
                        setChosenTime(null);
                    }}
                />
                <Select
                    disabled={!searchCinema}
                    value={chosenTime}
                    showSearch
                    className='w-full'
                    placeholder='Chọn suất chiếu'
                    optionFilterProp='children'
                    filterOption={(input, option) => (option?.label ?? "").includes(input)}
                    filterSort={(optionA, optionB) => (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())}
                    options={searchTime}
                    onChange={e => setChosenTime(e)}
                />
                <button
                    disabled={!chosenTime}
                    className={`w-full p-1 text-white bg-red-500 ${chosenTime ? "opacity-100" : "opacity-50"} rounded-xl ${chosenTime && "hover:bg-red-800"
                        } duration-300 ${chosenTime ? "cursor-pointer" : "cursor-not-allowed"}`}
                    onClick={() => {
                        if (localStorage.getItem(USER_INFO)) {
                            navigate(`/ticket-room/${chosenTime}`)
                        } else {
                            message.error('Vui lòng đăng nhập để đặt vé')
                        }

                    }}
                >
                    ĐẶT VÉ
                </button>
            </div>
        </div>
    )
}
