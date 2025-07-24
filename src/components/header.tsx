import { CiPower } from "react-icons/ci";
import { BsPcDisplay } from "react-icons/bs";
import { FaFirefox } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { FaSpotify } from "react-icons/fa";
import { FiBatteryCharging } from "react-icons/fi";
import "../App.css";




export default function Header() {

    const music = {
        artist: "Post Malone",
        name: "Better Now",
    }

    return( 
        <div className="flex flex-col items-center p-7">
            <div className="p-4 bg-orange-50 border-5 w-5/6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <BsPcDisplay size={23} />
                    <span className="text-xl font-bold">Raiku-dev</span>
                    <div className="flex items-center gap-3 ml-6">
                        <FaFirefox size={20} />
                        <GoFileSubmodule size={20} />
                        <FaSpotify  size={20}/>
                        <div className="overflow-hidden w-40 h-6 relative">
                          <span className="block whitespace-nowrap animate-marquee text-sm text-gray-700 will-change-transform">
                            {music.artist} - {music.name}
                          </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 ml-4">
                    <FiBatteryCharging size={23} />
                    <span className="text-sm font-semibold">100%</span>
                    <CiPower size={20} />
                </div>
            </div>
        </div>
    );
}