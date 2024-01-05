"use client";
import { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

import Link from "next/link";
import Button from "@/app/components/buttons/Button";

export default function Sidebar({ activeChat, setActiveChat }: any) {
  const [rooms, setRooms] = useState<any>([]);
  const [search, setSearch] = useState<any>("");
  const [isLoading, setIsLoading] = useState<any>(true);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await fetch(`/api/ai/chat-rooms/`);
      const { rooms } = await res.json();

      const activeRoom = rooms.find((room: any) => room.is_active === true);
      if (activeRoom) {
        setActiveChat(activeRoom);
      }
      setRooms(rooms);
      setIsLoading(false);
    };

    fetchRooms();
  }, []);

  return (
    <div className="bg-gray-500 rounded-md p-2 sidebar w-1/5 gap-2 flex flex-col">
      <Link
        href="/dashboard/ai/create-chat/"
        className="flex items-center justify-center bg-button text-white rounded-md w-full h-input"
      >
        <>
          <FiPlusCircle className="text-2xl" />
          New Chat
        </>
      </Link>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full rounded-md p-2 bg-gray-300"
      />

      <div className="flex flex-col gap-2 mt-2 bg-gray-300">
        {rooms.length > 0 &&
          rooms.map((room: any, idx: any) => {
            return (
              <Button
                // onClick={() =>
                key={idx}
                className={`flex flex-col gap-2 p-2 bg-gray-400 rounded-md cursor-pointer ${
                  activeChat.id === room.id && "bg-red-500"
                }`}
              >
                <h3 className="text-black">{room.name}</h3>
                <p className="text-black">{room.description}</p>
              </Button>
            );
          })}
      </div>

      {isLoading === true && (
        <div className="flex flex-col gap-2 mt-2 bg-gray-300">
          <div className="flex flex-col gap-2 p-2 bg-gray-400 rounded-md cursor-pointer">
            <h3 className="text-black">Loading...</h3>
            <p className="text-black">Loading...</p>
          </div>
          <div className="flex flex-col gap-2 p-2 bg-gray-400 rounded-md cursor-pointer">
            <h3 className="text-black">Loading...</h3>
            <p className="text-black">Loading...</p>
          </div>
          <div className="flex flex-col gap-2 p-2 bg-gray-400 rounded-md cursor-pointer">
            <h3 className="text-black">Loading...</h3>
            <p className="text-black">Loading...</p>
          </div>
        </div>
      )}

      {rooms.length === 0 && isLoading === false && (
        <div className=" gap-2 mt-2 text-center flex-auto flex flex-col justify-center items-center">
          <h3 className="text-black">No chat rooms found</h3>
          <p className="text-black">Please create a new chat room</p>
        </div>
      )}
    </div>
  );
}
