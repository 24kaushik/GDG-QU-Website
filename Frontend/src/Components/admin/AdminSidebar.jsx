import React from "react";
import GDG_Logo from "../../assets/images/gdg_logo.webp";

import { MdPerson } from "react-icons/md";
import { FaHome, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { FaRoad, FaMessage } from "react-icons/fa6";
import { PiWallFill } from "react-icons/pi";

const AdminSidebar = () => {
    const navItems = [
        {
            Icon: FaHome,
            label: "Home",
            colorClass: "text-google-blue",
            hoverBg: "hover:bg-google-blue/10",
        },
        {
            Icon: FaCalendarAlt,
            label: "Events",
            colorClass: "text-google-red",
            hoverBg: "hover:bg-google-red/10",
        },
        {
            Icon: MdPerson,
            label: "Team",
            colorClass: "text-google-green",
            hoverBg: "hover:bg-google-green/10",
        },
        {
            Icon: FaGraduationCap,
            label: "Members",
            colorClass: "text-google-yellow",
            hoverBg: "hover:bg-google-yellow/10",
        },
        {
            Icon: FaRoad,
            label: "Roadmap",
            colorClass: "text-google-blue",
            hoverBg: "hover:bg-google-blue/10",
        },
        {
            Icon: FaMessage,
            label: "Contacts",
            colorClass: "text-google-green",
            hoverBg: "hover:bg-google-green/10",
        },
        {
            Icon: PiWallFill,
            label: "Wall of Fame",
            colorClass: "text-google-red",
            hoverBg: "hover:bg-google-red/10",
        },
    ];

    return (
        <aside className="h-screen w-24 bg-white/80 border-r border-slate-200/70 p-3 flex flex-col shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-center">
                <img
                    src={GDG_Logo}
                    alt="GDG Logo"
                    className="h-16 w-16 object-contain select-none"
                />
            </div>

            <nav className="mt-6 flex-1 flex flex-col items-center gap-2">
                {navItems.map(({ Icon, label, colorClass, hoverBg }) => (
                    <button
                        key={label}
                        type="button"
                        aria-label={label}
                        title={label}
                        className={`group relative w-full h-12 grid place-items-center rounded-xl text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 transition ${hoverBg}`}
                    >
                        <Icon size={22} className={colorClass} />
                        <span className="pointer-events-none absolute left-[calc(100%+8px)] z-10 rounded-md bg-white px-2 py-1 text-xs text-slate-700 shadow-md ring-1 ring-slate-200 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition">
                            {label}
                        </span>
                    </button>
                ))}
            </nav>

            <div className="mt-auto flex items-center justify-center">
                <button
                    type="button"
                    aria-label="Profile"
                    className="grid place-items-center rounded-full p-1.5 text-google-blue bg-google-blue/10 hover:bg-google-blue/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue/40"
                >
                    <MdPerson size={32} />
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
