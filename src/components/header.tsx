import { BsPcDisplay } from "react-icons/bs";
import { FaFirefox } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { FaSpotify } from "react-icons/fa";
import "../App.css";


export default function Header() {

    const music = {
        artist: "Post Malone",
        name: "Better Now",
    }

    return( 
        <div className="flex flex-col items-center px-4 py-6 w-full">
            <div className="bg-orange-50 border-5 rounded-2xl w-full max-w-3xl flex flex-col md:flex-row items-center justify-between p-4">
                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    <div className="flex flex-row items-center justify-center gap-6 w-full flex-wrap">
                        <BsPcDisplay size={20} className="min-w-0" />
                        <span className="text-xl font-bold">Raiku-dev</span>
                        <FaFirefox size={20} />
                        <GoFileSubmodule size={20} />
                        <FaSpotify size={20} />
                        <div className="overflow-hidden w-40 h-6 relative">
                            <span className="block whitespace-nowrap animate-marquee text-sm text-gray-700 will-change-transform">
                                {music.artist} - {music.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}