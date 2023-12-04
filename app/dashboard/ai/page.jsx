"use client"
import { useState } from "react"
import ChatRoom from "@/app/dashboard/ai/ChatRoom";
import './chatgpt.css';

import Sidebar from "@/app/dashboard/ai/Sidebar";

const NoChat = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full border-dashed border-black border-2 rounded-md">
            <h2 className="text-2xl font-semibold">
                No chat selected
            </h2>
            <p className="text-gray-500">
                Select a chat to start messaging
            </p>
        </div>
    )
}
export default function Page() {
   const [activeChat, setActiveChat] = useState(null);
    debugger

    return (
        <div className="chatgpt flex gap-2 h-full">
            <Sidebar
                activeChat={activeChat}
                setActiveChat={setActiveChat}
                />
        {!activeChat && <NoChat />}
        {activeChat && <ChatRoom chat={activeChat} />}
        </div>
    )
}

