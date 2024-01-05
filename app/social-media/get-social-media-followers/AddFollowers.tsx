"use client";
import React from "react";
import useAuth from "@/hooks/use-auth";
import toast from "react-hot-toast";
export default function AddFollowers() {
  const auth = useAuth();
  const [email, setEmail] = React.useState("rwchampin@gmail.com");
  const [username, setUsername] = React.useState("sophia_segra");
  const [password, setPassword] = React.useState("Fuckumom1!");
  const [platform, setPlatform] = React.useState("threads");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (platform === "-1") {
      alert("Please select a platform");
      return;
    }
    if (email === "") {
      alert("Please enter your email");
      return;
    }
    if (username === "") {
      alert("Please enter your username");
      return;
    }

    if (password === "") {
      alert("Please enter your password");
      return;
    }

    const data = {
      platform,
      email,
      username,
      password,
    };
    const getFollowers = async () => {
      const r = await fetch("/api/social/add-followers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await r.json();

      if (response.status === "error") {
        alert(response.message);
        return;
      }

      debugger;
    };

    getFollowers();
  };

  const handleFocus = (e: any) => {
    if(auth.isAuthenticated === false) {
      toast.error("You must be logged in to use this tool\n\nPlease login or register for a free account")
    }
  }
  return (
    <form
      className="mx-auto rounded mb-4 w-full max-w-[600px]"
      onSubmit={handleSubmit}
    >
      {/* username & password form */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="platform"
        >
          Social Media Platform
        </label>
        <select
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="platform"
          value={platform}
          onFocus={handleFocus}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="-1">Select a Platform</option>
          <option disabled value="instagram">
            Instagram
          </option>
          <option value="threads">Threads</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Importlio Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          onFocus={handleFocus}
          required
          // patern for an email
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Threads Username/Email
        </label>
        <input
          required
          onFocus={handleFocus}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Threads Password
        </label>
        <input
          required
          value={password}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******************"
        />
      </div>

      {/* submit button */}
      <div className="flex items-center justify-between">
        <button
        title={auth.isAuthenticated === false ? "You must be logged in to use this tool\n\nPlease login or register for a free account" : ""}
          disabled={auth.isAuthenticated === false}
          className="w-full bg-button h-input rounded-lg text-white font-bold shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Followers
        </button>
      </div>
    </form>
  );
}
