import { MdMail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import univLogo from "../public/Partners/univ2-logo.png";
import chessLogo from "../public/Partners/chess-logo.png";
import dascsLogo from "../public/Partners/dascs-logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

//social media list of components
export const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100064821561751",
    icon: <FaFacebook size={24}></FaFacebook>,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/chess_masters_club/",
    icon: <FaInstagram size={24}></FaInstagram>,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/chess-masters-club",
    icon: <FaLinkedin size={24}></FaLinkedin>,
  },
  {
    name: "Discord",
    link: "https://www.linkedin.com/company/chess-masters-club",
    icon: <FaDiscord size={24}></FaDiscord>,
  },
  //   {
  //     name: "Twitter",
  //     link: "https://twitter.com/soaialgiers",
  //     icon: <FaTwitter size={24}></FaTwitter>,
  //   },
  //   {
  //     name: "Youtube",
  //     link: "https://m.youtube.com/channel/UChFa3XnZYZ94tkjfJ5CnPOA",
  //     icon: <FaYoutube size={24}></FaYoutube>,
  //   },
];

export const contactInfos = [
  {
    href: "https://goo.gl/maps/tvsotYhJpPnT1LWQ7",
    name: "Place",
    icon: <RiMapPin2Fill size={20}></RiMapPin2Fill>,
    content:
      "Université Constantine 2 Abdelhamid Mehri – Nouvelle ville Ali Mendjeli BP : 67A, Constantine",
  },
  {
    href: "mailto: chess.masters2700@gmail.com",
    name: "Mail",
    icon: <MdMail size={20}></MdMail>,
    content: " chess.masters2700@gmail.com",
  },
  {
    href: "tel:+213659810946",
    name: "Phone",
    icon: <BsFillTelephoneFill size={20}></BsFillTelephoneFill>,
    content: "+213 659 810 946",
  },
];

export const partners = [
  {
    name: "University Constantine 2",
    image: univLogo,
  },
  {
    name: "Chess School Constantine",
    image: chessLogo,
  },
  {
    name: "DASCS",
    image: dascsLogo,
  },
];
