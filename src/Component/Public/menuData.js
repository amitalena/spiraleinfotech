import { BsCart4 } from "react-icons/bs";
import { DiLaravel } from "react-icons/di";
import { FaApple, FaCaretRight, FaLaptopCode, FaMobileAlt, FaReact, FaWordpress } from "react-icons/fa";
import { FcAndroidOs, FcTreeStructure } from "react-icons/fc";
import { GiLaptop } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdAppSettingsAlt } from "react-icons/md";
import { SiPhp } from "react-icons/si";
import { TbApi, TbUxCircle, } from "react-icons/tb";

const menuData = [
    { name: "Home", route: "/", },
    { name: "About", route: '/about' },
    {
        name: "Services", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />,
        subMenu: [
            {
                name: "Web Development", route: "/web-development-company", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />, icon: <FaLaptopCode style={{ color: '#11f' }} />,
                subMenu: [
                    { name: "PHP", route: "/php-development-services", icon: <SiPhp style={{ color: '#2151b5' }} /> },
                    { name: "Laravel", route: "/laravel-development-company", icon: <DiLaravel style={{ color: '#f64336' }} /> },
                    { name: "React Js", route: "/reactjs-development-services", icon: <FaReact style={{ color: '#1E90FF' }} /> },
                ],
            },
            {
                name: "App Development", route: "/app-development-company", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />, icon: <FaMobileAlt style={{ color: '#ff9800' }} />,
                subMenu: [
                    { name: "React Native App Development", route: "/react-native-app-development-company", icon: <FaReact style={{ color: '#1E90FF' }} /> },
                    { name: "Native Andiod App Development", route: "/react-native-app-development-services", icon: <FcAndroidOs style={{ color: '#4caf50' }} /> },
                    { name: "Native IOS App Development", route: "/ios-app-development-services", icon: <FaApple style={{ color: '#212121' }} /> },
                    { name: "Hybrid App Development", route: "/hybrid-app-development-company", icon: <FcTreeStructure style={{ color: 'blue' }} /> },
                    { name: "Cross-Plateform App Development", route: "/cross-plateform-app-development", icon: <MdAppSettingsAlt style={{ color: '#FAEA7C', }} /> },
                ],
            },
            {
                name: "CMS Development", route: "/cms-development-company", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />, icon: <FaWordpress style={{ color: '#4fc3f7' }} />,
                subMenu: [
                    { name: "WordPress", route: "/wordpress-development-services", icon: <FaWordpress style={{ color: '#4fc3f7' }} /> },
                ],
            },
            {
                name: "Web Designing", route: "/website-designing-company", icon1: <IoMdArrowDropdown />, icon2: <FaCaretRight />, icon: <GiLaptop style={{ color: '#ff9800' }} />,
                subMenu: [
                    { name: "Rect.Js", route: "/reactjs-development-services", icon: <FaReact style={{ color: '#1E90FF' }} /> },
                    { name: "UI/UX", route: "/ui-ux-development-company", icon: <TbUxCircle style={{ color: '#ff9800' }} /> },
                ],
            },
            { name: "ECommerce Services", route: "/ecommerce-services", icon: <BsCart4 style={{ color: '#bf360c' }} /> },
            { name: "API Services", route: "/api-development-and-integration", icon: <TbApi style={{ color: '#212121' }} /> },
        ],
    },
    { name: "Career", route: '/career' },
    { name: "Contact", route: '/contact' },
];

export default menuData;
