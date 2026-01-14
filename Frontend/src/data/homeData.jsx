import { FaUsers, FaCode, FaRocket } from "react-icons/fa";

export const colors = {
    blue: "#4285f4",
    green: "#34a853",
    yellow: "#f9ab00",
    red: "#ea4335",
};

export const homeStats = [
    {
        number: "4500+",
        label: "Members",
        icon: <FaUsers />,
        color: colors.blue,
    },
    {
        number: "50+",
        label: "Events",
        icon: <FaCode />,
        color: colors.green,
    },
    {
        number: "100+",
        label: "Projects",
        icon: <FaRocket />,
        color: colors.yellow,
    },
];
