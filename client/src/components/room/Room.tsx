import RoomCards from "./RoomCards";
import RoomMessage from "./RoomMessage";
export default function Room() {
   return (
      <section className="container bg-calm">
         <div className="flex flex-wrap py-12 m-auto h-full items-center flex-row justify-between w-11/12">
            <RoomMessage />
            <RoomCards />
         </div>
      </section>
   );
}
