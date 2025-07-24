import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Perfil() {
    const profile = {
        name: "Raiku",
        level: 25,
        bio: "Apasionado por la Tecnologia y Todas las Posibilidades con Ella, agil y adaptable",
        avatar: "",
        github: "https://github.com/Scripty77",
        linkedin: "https://www.linkedin.com/in/jean-carlos-contreras-485485279/",
        area: "Estudiante Ing en Informatica Futuro Backend Dev",
    };
    return (
        <div className="p-10">
            <div className="border-5 bg-orange-50 text-center min-w-[260px] max-w-xs">
                {/* Barra superior tipo terminal */}
                <div className="flex items-center justify-between h-9 px-4 bg-black border-b-2 ">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border bg-red-600 inline-block"></span>
                        <span className="w-4 h-4 rounded-full border bg-yellow-400 inline-block"></span>
                        <span className="w-4 h-4 rounded-full border bg-green-500 inline-block"></span>
                    </div>
                    <span className="text-white text-xs font-mono">.....</span>
                </div>
                <div className="p-7 flex flex-col items-center gap-3">
                    {profile.avatar ? (
                        <img src={profile.avatar} alt={profile.name} className="w-20 h-20 rounded-full object-cover border-2 border-gray-300" />
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-3xl text-white font-bold">
                            {profile.name.charAt(0)}
                        </div>
                    )}
                    <div className="text-xl font-bold text-gray-800">{profile.name}</div>
                    <div className="text-sm text-gray-600">Nivel: {profile.level}</div>
                    {profile.bio && (
                        <div className="text-gray-700 text-sm italic">{profile.bio}</div>
                    )}
                    {profile.area && (
                        <div className="text-gray-700 text-sm italic">{profile.area}</div>
                    )}
                    {profile.github && (
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub size={30}/>
                        </a>
                    )}
                    {profile.linkedin && (
                        <a href={profile.linkedin} target="_black" rel="noopener noreferrer" aria-label="Linkedin">
                            <FaLinkedin size={30}/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}