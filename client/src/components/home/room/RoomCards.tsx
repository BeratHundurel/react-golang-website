import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoomCards() {
   return (
      <div className="flex flex-row lg:w-2/3 w-full px-5">
         <div className="main-room-card">
            <img className="object-cover rounded-lg" src="/images/main-room.png" alt="room" />
            <div className="bg-accent relative bottom-32 flex justify-center items-center w-52 left-8 h-24">
               <p className="text-primary-text text-2xl font-medium">Inner Peace</p>
            </div>
            <button className="bg-primary w-12 h-12 text-white">
               <FontAwesomeIcon icon={faArrowRight} />
            </button>
         </div>
         <div className="secondary-room-card"></div>
      </div>
   );
}
