import AdminGrid from "@/app/components/AdminGrid";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";

function AdminDashboard() {
  return (
    <main className="max-w-screen min-h-full h-screen p-10">
      <div className="w-full min-h-full rounded-3xl border-1 border-gray-200 p-10 flex flex-col items-center">
        <Navbar />
        <div className="w-[90%] mt-10 flex justify-between items-center">
        <h1 className="text-5xl font-semibold my-10">Elections</h1>
        <Link href={'/create'} className="bg-blue-600 text-xl text-center font-semibold py-3 px-5 rounded-full hover:text-black  hover:bg-white">Create New Election</Link>
        </div>
        <AdminGrid />
      </div>
      <div className="p-[30px]" />
    </main>
  );
}

export default AdminDashboard;
