import { FaGithub } from "react-icons/fa";

const projects = [
    {
        name: "Space-Invader",
        description: "Cree junto a un compañero una copia del juego Space-Invader con Java",
        technologies: ["Java"],
        github: "https://github.com/Scripty77/space-invader",
    },
    {
        name: "Stela",
        description:"Stela es un Concepto para una plataforma de intercambio de cripto-activos con un estilo moderno",
        technologies: ["Javascript","React","Tailwindcss"],
        github: "https://github.com/Scripty77/Stela",
    },
    {
        name:"Analizador de Tendencias",
        description:"Aplicacion para analizar tendencias en datos usando Python con gtk para la interfaz grafica",
        technologies: ["Python","GTK"],
        github:"https://github.com/Scripty77/analizador-de-tendencias",
    },
];

export default function Proyects() {
    return (
        <div className="flex flex-col items-end justify-start px-4 py-6 sm:px-8 md:px-1 lg:px-1 w-full h-full">
            <div className="border-5 bg-orange-50 text-center w-full max-w-6xl min-h-[60vh]">
                {/* Barra superior tipo terminal */}
                <div className="flex items-center justify-between h-9 px-4 bg-black border-b-2 border-gray-800 ">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border bg-red-500 inline-block"></span>
                        <span className="w-4 h-4 rounded-full border bg-yellow-400 inline-block"></span>
                        <span className="w-4 h-4 rounded-full border bg-green-500 inline-block"></span>
                    </div>
                    <span className="text-white text-xs font-mono">.....</span>
                </div>
                <div className="p-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.name} className="bg-white border border-gray-400 rounded-lg shadow-md p-5 flex flex-col items-start gap-2 text-left">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                                <span className="font-bold text-lg text-gray-800">{project.name}</span>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mt-2 md:mt-0 md:ml-2 self-start md:self-center">
                                    <FaGithub size={24} className="text-gray-700 hover:text-black" />
                                </a>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="bg-blue-100 px-2 py-0.5 rounded-full text-xs text-gray-700 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}