export default function Tecnologies() {
    const technologies = [
        "JavaScript",
        "TypeScript",
        "Java",
        "SQL",
        "Docker",
    ];

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
                    <div className="text-lg font-bold mb-4 text-gray-800">Tecnologías que domino</div>
                    <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {technologies.map((tech) => (
                            <li key={tech} className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 font-mono">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
