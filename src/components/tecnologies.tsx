import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


export default function Tecnologies() {
    const Langs = [
        { id: "javascript", icon: <IoLogoJavascript size={40}/> },
        { id: "typescript", icon: <SiTypescript size={40}/> },
        { id: "python", icon: <FaPython size={40}/> },
        { id: "java", icon: <FaJava size={40}/> },
        { id: "css3", icon: <FaCss3Alt size={40}/> },
        { id: "html5", icon: <FaHtml5 size={40}/> }
    ];

    const Frameworks = [
        { id: "react", icon: <FaReact size={40}/> },
        { id: "nestjs", icon: <SiNestjs size={40}/> },
        { id: "spring", icon: <SiSpring size={40}/> }
    ];

    const Database = [
        { id: "postgresql", icon: <BiLogoPostgresql size={40}/> },
        { id: "mysql", icon: <GrMysql size={40}/> }
    ]

    const Tools = [
        { id: "docker", icon: <FaDocker size={40}/> },
        { id: "git", icon: <FaGitAlt size={40}/> },
        { id: "linux", icon: <FaLinux size={40}/> }
    ]

    return (
        <div className="flex flex-col items-center px-4 py-6 w-full sm:px-8 md:px-10 lg:px-16">
            <div className="border-5 bg-orange-50 w-full max-w-lg sm:max-w-xl md:max-w-2xl  text-center md:text-left">
                {/* Barra superior tipo terminal */}
                <div className="flex items-center justify-between h-9 px-4 bg-black  border-gray-800 ">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border bg-red-500 inline-block"></span>
                        <span className="w-4 h-4 rounded-full border bg-yellow-400 inline-block"></span>
                        <span className="w-4 h-4 rounded-full border bg-green-500 inline-block"></span>
                    </div>
                    <span className="text-white text-xs font-mono">.....</span>
                </div>
                <div className="p-5 sm:p-6 md:p-7">
                    <div className="text-lg font-bold mb-4 text-gray-800">Langs</div>
                    <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {Langs.map((tech) => (
                            <li key={tech.id} className="bg-gray-100 px-2 py-2 rounded-full text-sm text-gray-700 font-mono">
                                {tech.icon}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <div className="text-lg font-bold mb-2 text-gray-800">Frameworks</div>
                        <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {Frameworks.map((framework) => (
                                <li key={framework.id} className="bg-gray-100 px-3 py-2 rounded-full text-sm text-gray-700 font-mono">
                                    {framework.icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <div className="text-lg font-bold mb-2 text-gray-800">Database</div>
                        <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {Database.map((db) => (
                                <li key={db.id} className="bg-gray-100 px-3 py-2 rounded-full text-sm text-gray-700 font-mono">
                                    {db.icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <div className="text-lg font-bold mb-2 text-gray-800">Tools</div>
                        <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {Tools.map((tool) => (
                                <li key={tool.id} className="bg-gray-100 px-3 py-2 rounded-full text-sm text-gray-700 font-mono">
                                    {tool.icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
