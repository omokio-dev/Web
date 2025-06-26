'use server';

import { createRoom } from "@/lib/room.service";
import { Room } from "@/lib/room.service";

export async function insertTestRoom() {
    const room: Room = {
        title: "테스트 방 " + Math.floor(Math.random() * 100),
        host: "guest001",
        createdAt: new Date().toISOString(),
        status: "waiting",
        players: ["guest001"],
        maxPlayers: 2,
    };

    await createRoom(room);
}
