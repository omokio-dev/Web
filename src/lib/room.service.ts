import clientPromise from "./mongodb";

export interface Room {
    title: string;
    host: string;
    createdAt: string;
    status: "waiting" | "playing" | "finished";
    players: string[];
    maxPlayers: number;
}

export async function getAllRooms(): Promise<Room[]> {
    const client = await clientPromise;
    const db = client.db("omok");
    const rooms = await db.collection<Room>("rooms").find({}).toArray();
    return rooms;
}

export async function createRoom(room: Room): Promise<void> {
    const client = await clientPromise;
    const db = client.db("omok");
    await db.collection("rooms").insertOne(room);
}
