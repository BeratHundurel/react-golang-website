import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoomCards() {
   return (
      <div className="flex flex-row lg:w-2/3 w-full px-5 justify-center lg:gap-6 flex-wrap" style={{ height: "100%" }}>
         <div className="main-room-card relative">
            <img className="object-cover w-80 h-96 lg:w-80 lg:h-100 rounded-lg" src="/images/main-room.png" alt="room" />
            <div className="bg-accent relative bottom-32 flex justify-center items-center w-52 left-8 h-24">
               <p className="text-primary-text text-2xl font-medium">Inner Peace</p>
            </div>
            <button className="bg-primary w-12 h-12 text-white bottom-16 shadow-slate-400 absolute">
               <FontAwesomeIcon icon={faArrowRight} />
            </button>
         </div>
         <div className="secondary-room-card">
            <img className="object-cover w-80 h-96 lg:w-70 lg:h-80 rounded-lg" src="/images/secondary-room.png" alt="room" />
         </div>
      </div>
   );
}
