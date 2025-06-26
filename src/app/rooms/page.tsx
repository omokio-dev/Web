import { insertTestRoom } from "./actions";
import { getAllRooms } from "@/lib/room.service";

export default async function RoomsPage() {
    const rooms = await getAllRooms();

    return (
        <main className="p-4">
            <h1 className="text-xl font-bold mb-4">방 목록</h1>

            <form action={insertTestRoom}>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    방 하나 삽입하기
                </button>
            </form>

            <ul className="mt-6 space-y-2">
                {rooms.map((room, i) => (
                    <li key={i} className="border p-3 rounded shadow-sm">
                        <strong>{room.title}</strong> — {room.players.length}/{room.maxPlayers}
                    </li>
                ))}
            </ul>
        </main>
    );
}
