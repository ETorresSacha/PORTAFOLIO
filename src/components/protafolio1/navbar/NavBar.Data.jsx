import { RiHome4Line } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="30" />,
  },
  {
    name: "proyectos",
    path: "/proyectos",
    icon: <BsPersonWorkspace size="30" />,
  },

  {
    name: "perfil",
    path: "/perfil",
    icon: <ImProfile size="30" />,
  },
  {
    name: "contactame",
    path: "/contactame",
    icon: <BiSolidContact size="30" />,
  },
];
