import { HiOutlineChat } from "react-icons/hi";
import { BiAddToQueue } from "react-icons/bi";
import { TbDashboard } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";

const menu = [
  {
    title: "Dashboard",
    icon: <TbDashboard />,
    path: "/dashboard",
  },
  {
    title: "Tambah Barang",
    icon: <BiAddToQueue />,
    path: "/add-product",
  },
  {
    title: "Akun",
    icon: <RiAccountCircleLine />,
    childrens: [
      {
        title: "Profil",
        path: "/profile",
      },
      {
        title: "Edit Profil",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Kontak Kami",
    icon: <HiOutlineChat />,
    path: "/contact-us",
  },
];

export default menu;
