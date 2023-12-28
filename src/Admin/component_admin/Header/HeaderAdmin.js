import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { USER_INFO } from "../../../service/config";
export default function HeaderAdmin() {
  let navigate = useNavigate();
  let user = useSelector((state) => state.loginReducer.user);

  let renderMenu = () => {
    if (user) {
      return (
        <div className="flex">
          <p className="my-2 mr-5 font-semibold display-inline">
            <span className="text-2xl font-semibold text-red-500 cursor-pointer animate-pulse ">
              CyberFlix
            </span>
            <p> </p>
            xin chào quản trị viên
          </p>
          <Dropdown
            label={
              <Avatar
                alt="User settings"
                img="https://i.pravatar.cc/"
                rounded
              />
            }
            arrowIcon={false}
            inline
          >
            <DropdownHeader>
              <span className="block text-sm font-semibold">{`Xin chào, ${user.hoTen}`}</span>
            </DropdownHeader>
            <DropdownItem
              onClick={() => {
                navigate("/user-profile");
              }}
            >
              Thông tin cá nhân & Lịch sử đặt vé
            </DropdownItem>

            <DropdownDivider />

            <DropdownItem
              onClick={() => {
                window.location.href = "/";
                // localStorage.removeItem(ACCESS_TOKEN)
                localStorage.removeItem(USER_INFO);
              }}
            >
              Đăng xuất
            </DropdownItem>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <button
          className="btn-theme"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Login
        </button>
      );
    }
  };
  return (
    <div className="container flex items-center justify-end h-20">
      <div>{renderMenu()}</div>
    </div>
  );
}
